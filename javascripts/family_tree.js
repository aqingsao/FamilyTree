vec3.angleFrom = function(vec, vec2) {
    var length1 = vec3.length(vec);
    var length2 = vec3.length(vec2);
    var dot = vec3.dot(vec, vec2);
    var cosine = dot / length1 / length2;
    return Math.acos(cosine);
}

function VisualSpecifications() {

    this.backgroundColor = '#FFFFFF';
    //canvas properties
    this.scale = 1;

    //atom properties
    this.atoms_display = true;
    this.atoms_name_display = true;
    this.atoms_width = .8;

    //bond properties
    this.bonds_display = true;
    this.bonds_width = .3;
}

//
//  Copyright 2009 iChemLabs, LLC.  All rights reserved.
//
//  $Revision: 2798 $
//  $Author: kevin $
//  $LastChangedDate: 2010-08-15 18:11:12 -0400 (Sun, 15 Aug 2010) $
//
jQuery(document).ready(function() {
    //handles dragging beyond the canvas bounds
    $(document).mousemove(function(e) {
        if (CANVAS_DRAGGING != null) {
            if (CANVAS_DRAGGING.drag) {
                CANVAS_DRAGGING.prehandleEvent(e);
                CANVAS_DRAGGING.drag(e);
            }
        }
    });
    $(document).mouseup(function(e) {
        if (CANVAS_DRAGGING != null) {
            if (CANVAS_DRAGGING.mouseup) {
                CANVAS_DRAGGING.prehandleEvent(e);
                CANVAS_DRAGGING.mouseup(e);
            }
            CANVAS_DRAGGING = null;
        }
    });
    //handles modifier keys from a single keyboard
    $(document).keydown(function(e) {
        SHIFT = e.shiftKey;
        ALT = e.altKey;
        var affecting = CANVAS_OVER;
        if (CANVAS_DRAGGING != null) {
            affecting = CANVAS_DRAGGING;
        }
        if (affecting != null) {
            if (affecting.keydown) {
                affecting.prehandleEvent(e);
                affecting.keydown(e);
            }
        }
    });
    $(document).keypress(function(e) {
        var affecting = CANVAS_OVER;
        if (CANVAS_DRAGGING != null) {
            affecting = CANVAS_DRAGGING;
        }
        if (affecting != null) {
            if (affecting.keypress) {
                affecting.prehandleEvent(e);
                affecting.keypress(e);
            }
        }
    });
    $(document).keyup(function(e) {
        SHIFT = e.shiftKey;
        ALT = e.altKey;
        var affecting = CANVAS_OVER;
        if (CANVAS_DRAGGING != null) {
            affecting = CANVAS_DRAGGING;
        }
        if (affecting != null) {
            if (affecting.keyup) {
                affecting.prehandleEvent(e);
                affecting.keyup(e);
            }
        }
    });
});

var CANVAS_DRAGGING = null;
var CANVAS_OVER = null;
var ALT = false;
var SHIFT = false;

Canvas3D.prototype.loadFamily = function(molecule) {
    this.molecule = molecule;
    this.center();
    this.molecule.check();
    if (this.afterLoadMolecule) {
        this.afterLoadMolecule();
    }
    this.repaint();
}
Canvas3D.prototype.create = function(id) {
    this.id = id;

    var canvas = document.getElementById(id);
    if(canvas == null){
        alert("Canvas is null");
        return;
    }
    this.width = canvas.width;
    this.height = canvas.height;
    
    //setup input events
    var me = this;
    //for iPhone OS and Android devices
    $('#' + id).bind('touchstart', function(e) {
        if (me.touchstart) {
            me.prehandleMobileEvent(e);
            me.touchstart(e);
        }
        else
        if (me.mousedown) {
            me.prehandleMobileEvent(e);
            me.mousedown(e);
        }
    });
    $('#' + id).bind('touchmove', function(e) {
        if (!me.inGesture) {
            //must duplicate prehandleMobile event so that the default action is performed if not implemented
            ALT = e.originalEvent.changedTouches.length == 2;
            if (me.touchmove) {
                me.prehandleMobileEvent(e);
                me.touchmove(e);
            }
            else
            if (me.drag) {
                me.prehandleMobileEvent(e);
                me.drag(e);
            }
        }
    });
    $('#' + id).bind('touchend', function(e) {
        if (me.touchend) {
            me.prehandleMobileEvent(e);
            me.touchend(e);
        }
        else
        if (me.mouseup) {
            me.prehandleMobileEvent(e);
            me.mouseup(e);
        }
    });
    $('#' + id).bind('gesturestart', function(e) {
        me.inGesture = true;
        if (me.gesturestart) {
            me.prehandleEvent(e);
            me.gesturestart(e);
        }
    });
    $('#' + id).bind('gesturechange', function(e) {
        if (e.originalEvent.scale == 1) {
            me.inGesture = false;
        }
        else {
            if (me.gesturechange) {
                me.prehandleEvent(e);
                me.gesturechange(e);
            }
        }
    });
    $('#' + id).bind('gestureend', function(e) {
        me.inGesture = false;
        if (me.gestureend) {
            me.prehandleEvent(e);
            me.gestureend(e);
        }
    });
    //normal events
    $('#' + id).click(function(e) {
        switch (e.which) {
            case 1:
                //left mouse button pressed
                if (me.click) {
                    me.prehandleEvent(e);
                    me.click(e);
                }
                break;
            case 2:
                //middle mouse button pressed
                if (me.middleclick) {
                    me.prehandleEvent(e);
                    me.middleclick(e);
                }
                break;
            case 3:
                //right mouse button pressed
                if (me.rightclick) {
                    me.prehandleEvent(e);
                    me.rightclick(e);
                }
                break;
        }
    });
    $('#' + id).dblclick(function(e) {
        if (me.dblclick) {
            me.prehandleEvent(e);
            me.dblclick(e);
        }
    });
    $('#' + id).mousedown(function(e) {
        switch (e.which) {
            case 1:
                //left mouse button pressed
                CANVAS_DRAGGING = me;
                if (me.mousedown) {
                    me.prehandleEvent(e);
                    me.mousedown(e);
                }
                break;
            case 2:
                //middle mouse button pressed
                if (me.middlemousedown) {
                    me.prehandleEvent(e);
                    me.middlemousedown(e);
                }
                break;
            case 3:
                //right mouse button pressed
                if (me.rightmousedown) {
                    me.prehandleEvent(e);
                    me.rightmousedown(e);
                }
                break;
        }
    });
    $('#' + id).mousemove(function(e) {
        if (CANVAS_DRAGGING == null && me.mousemove) {
            me.prehandleEvent(e);
            me.mousemove(e);
        }
    });
    $('#' + id).mouseout(function(e) {
        CANVAS_OVER = null;
        if (me.mouseout) {
            me.prehandleEvent(e);
            me.mouseout(e);
        }
    });
    $('#' + id).mouseover(function(e) {
        CANVAS_OVER = me;
        if (me.mouseover) {
            me.prehandleEvent(e);
            me.mouseover(e);
        }
    });
    $('#' + id).mouseup(function(e) {
        switch (e.which) {
            case 1:
                //left mouse button pressed
                if (me.mouseup) {
                    me.prehandleEvent(e);
                    me.mouseup(e);
                }
                break;
            case 2:
                //middle mouse button pressed
                if (me.middlemouseup) {
                    me.prehandleEvent(e);
                    me.middlemouseup(e);
                }
                break;
            case 3:
                //right mouse button pressed
                if (me.rightmouseup) {
                    me.prehandleEvent(e);
                    me.rightmouseup(e);
                }
                break;
        }
    });
    $('#' + id).mousewheel(function(e, delta) {
        if (me.mousewheel) {
            me.prehandleEvent(e);
            me.mousewheel(e, delta);
        }
    });
    if (this.subCreate) {
        this.subCreate();
    }
}
Canvas3D.prototype.getMolecule = function() {
    return this.molecule;
}
Canvas3D.prototype.prehandleEvent = function(e) {
    e.preventDefault();
    var offset = $('#' + this.id).offset();
    e.p = new Point(e.pageX - offset.left, e.pageY - offset.top);
}
Canvas3D.prototype.prehandleMobileEvent = function(e) {
    e.pageX = e.originalEvent.changedTouches[0].pageX;
    e.pageY = e.originalEvent.changedTouches[0].pageY;
    e.preventDefault();
    var offset = $('#' + this.id).offset();
    e.p = new Point(e.pageX - offset.left + window.pageXOffset, e.pageY - offset.top + window.pageYOffset);
}

function Canvas3D(id, width, height) {
    this.specs = new VisualSpecifications();

    this.create(id, width, height);

    this.rotationMatrix = mat4.identity([]);
    this.translationMatrix = mat4.identity([]);
    this.lastPoint = null;
    this.molecule = null;
    this.emptyMessage = null;
    this.inGesture = false;
    return true;
}

Canvas3D.prototype.afterLoadMolecule = function() {
    var d = this.molecule.getDimension();
    this.translationMatrix = mat4.translate(mat4.identity([]), [0, 0, -Math.max(d.x, d.y) - 10]);
    this.setupScene();
}
Canvas3D.prototype.setViewDistance = function(distance) {
    this.translationMatrix = mat4.translate(mat4.identity([]), [0, 0, -distance]);
}
Canvas3D.prototype.repaint = function() {
    //ready the bits for rendering
    this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT)

    //set up the model view matrix to the specified transformations
    this.gl.modelViewMatrix = mat4.multiply(this.translationMatrix, this.rotationMatrix, []);

    if (this.molecule != null) {
        //render molecule
        this.molecule.render(this.gl, this.specs);
    }
}
Canvas3D.prototype.center = function() {
    var canvas = document.getElementById(this.id);
    var p = this.molecule.getCenter3D();
    var center = new Person('C', 0, 0, 0);
    center.sub3D(p);
    for (var i = 0, ii = this.molecule.people.length; i < ii; i++) {
        this.molecule.people[i].add3D(center);
    }
    ;
}
Canvas3D.prototype.subCreate = function() {
    //setup gl object
    try {
        this.gl = document.getElementById(this.id).getContext("experimental-webgl");
        this.gl.viewport(0, 0, this.width, this.height);
    }
    catch (e) {
    }
    if (!this.gl) {
        alert("WebGL is not installed.");
        return;
    }
    this.gl.program = this.gl.createProgram();
    //this is the shader
    this.gl.shader = new Shader();
    this.gl.shader.init(this.gl);
    this.setupScene();
}
Canvas3D.prototype.setupScene = function() {
    //clear the canvas
    this.gl.clearColor(parseInt(this.specs.backgroundColor.substring(1, 3), 16) / 255.0, parseInt(this.specs.backgroundColor.substring(3, 5), 16) / 255.0, parseInt(this.specs.backgroundColor.substring(5, 7), 16) / 255.0, 1.0);
    this.gl.clearDepth(1.0);
    this.gl.enable(this.gl.DEPTH_TEST);
    this.gl.depthFunc(this.gl.LEQUAL);
    //here is the sphere buffer to be drawn, make it once, then scale and translate to draw atoms
    this.gl.sphereBuffer = new Sphere();
    this.gl.sphereBuffer.generate(this.gl, 1, 60, 60);
    this.gl.cylinderBuffer = new Cylinder();
    this.gl.cylinderBuffer.generate(this.gl, 0.5, 1, 60);
    //set up lighting
    this.gl.lighting = new Light('#FFFFFF', '#FFFFFF', [-.1, -.1, -1]);
    this.gl.lighting.lightScene(this.gl);
    //set up material
    this.gl.material = new Material('#000000', "#ff0000", '#555555', 32);
    this.gl.material.setup(this.gl);
    //projection matrix
    //arg1: vertical field of view (degrees)
    //arg2: width to height ratio
    //arg3: front culling
    //arg4: back culling
    this.gl.projectionMatrix = mat4.perspective(45, 1, .1, 1000);
    //matrix setup functions
    this.gl.setMatrixUniforms = function(pMatrix, mvMatrix) {
        //push the projection matrix to the graphics card
        var pUniform = this.getUniformLocation(this.program, "u_projection_matrix");
        this.uniformMatrix4fv(pUniform, false, new Float32Array(pMatrix));
        //push the model-view matrix to the graphics card
        var mvUniform = this.getUniformLocation(this.program, "u_model_view_matrix");
        this.uniformMatrix4fv(mvUniform, false, new Float32Array(mvMatrix));
        //create the normal matrix and push it to the graphics card
        var normalMatrix = mat4.transpose(mat4.inverse(mvMatrix, []));
        var nUniform = this.getUniformLocation(this.program, "u_normal_matrix");
        this.uniformMatrix4fv(nUniform, false, new Float32Array(normalMatrix));
    }
}
Canvas3D.prototype.mousedown = function(e) {
    this.lastPoint = e.p;
}
Canvas3D.prototype.rightmousedown = function(e) {
    this.lastPoint = e.p;
}
Canvas3D.prototype.drag = function(e) {
    if (ALT) {
        var t = new Point(e.p.x, e.p.y);
        t.sub(this.lastPoint);
        mat4.translate(this.translationMatrix, [t.x / 20, -t.y / 20, 0]);
        this.lastPoint = e.p;
        this.repaint();
    }
    else {
        var difx = e.p.x - this.lastPoint.x;
        var dify = e.p.y - this.lastPoint.y;
        var rotation = mat4.rotate(mat4.identity([]), difx * Math.PI / 180.0, [0, 1, 0]);
        mat4.rotate(rotation, dify * Math.PI / 180.0, [1, 0, 0]);
        this.rotationMatrix = mat4.multiply(rotation, this.rotationMatrix);
        this.lastPoint = e.p;
        this.repaint();
    }
}
Canvas3D.prototype.mousewheel = function(e, delta) {
    mat4.translate(this.translationMatrix, [0, 0, delta]);
    this.repaint();
}

//  Copyright 2009 iChemLabs, LLC.  All rights reserved.
//
//  $Revision: 2777 $
//  $Author: kevin $
//  $LastChangedDate: 2010-08-12 16:48:33 -0400 (Thu, 12 Aug 2010) $
//

function Point(x, y) {
    this.x = x ? x : 0;
    this.y = y ? y : 0;
    return true;
}

Point.prototype.sub = function(p) {
    this.x -= p.x;
    this.y -= p.y;
}
Point.prototype.add = function(p) {
    this.x += p.x;
    this.y += p.y;
}
Point.prototype.distance = function(p) {
    return Math.sqrt(Math.pow(p.x - this.x, 2) + Math.pow(p.y - this.y, 2));
}
Point.prototype.angleForStupidCanvasArcs = function(p) {
    var dx = p.x - this.x;
    var dy = p.y - this.y;
    var angle = 0;
    // Calculate angle
    if (dx == 0) {
        if (dy == 0) {
            angle = 0;
        }
        else
        if (dy > 0) {
            angle = Math.PI / 2;
        }
        else {
            angle = 3 * Math.PI / 2;
        }
    }
    else
    if (dy == 0) {
        if (dx > 0) {
            angle = 0;
        }
        else {
            angle = Math.PI;
        }
    }
    else {
        if (dx < 0) {
            angle = Math.atan(dy / dx) + Math.PI;
        }
        else
        if (dy < 0) {
            angle = Math.atan(dy / dx) + 2 * Math.PI;
        }
        else {
            angle = Math.atan(dy / dx);
        }
    }
    while (angle < 0) {
        angle += Math.PI * 2;
    }
    angle = angle % (Math.PI * 2);
    return angle;
}
Point.prototype.angle = function(p) {
    //y is upside down to account for inverted canvas
    var dx = p.x - this.x;
    var dy = this.y - p.y;
    var angle = 0;
    // Calculate angle
    if (dx == 0) {
        if (dy == 0) {
            angle = 0;
        }
        else
        if (dy > 0) {
            angle = Math.PI / 2;
        }
        else {
            angle = 3 * Math.PI / 2;
        }
    }
    else
    if (dy == 0) {
        if (dx > 0) {
            angle = 0;
        }
        else {
            angle = Math.PI;
        }
    }
    else {
        if (dx < 0) {
            angle = Math.atan(dy / dx) + Math.PI;
        }
        else
        if (dy < 0) {
            angle = Math.atan(dy / dx) + 2 * Math.PI;
        }
        else {
            angle = Math.atan(dy / dx);
        }
    }
    while (angle < 0) {
        angle += Math.PI * 2;
    }
    angle = angle % (Math.PI * 2);
    return angle;
}

//
//  Copyright 2009 iChemLabs, LLC.  All rights reserved.
//
//  $Revision: 2794 $
//  $Author: kevin $
//  $LastChangedDate: 2010-08-13 12:12:28 -0400 (Fri, 13 Aug 2010) $
//
function Person(name, x, y, z, type) {
    this.x = x ? x : 0;
    this.y = y ? y : 0;
    this.z = z ? z : 0;
    this.charge = 0;
    this.coordinationNumber = 0;
    this.bondNumber = 0;
    this.angleOfLeastInterference = 0;
    this.isHidden = false;
    this.name = name;
    this.isLone = false;
    this.isSelected = false;
    this.isOverlap = false;

    if (type == 'F') {
        this.color = "#ff0000";
    }
    else if(type == 'R'){
        this.color = "#000000";
    }
    else if(type == 'spouse'){
        this.color = "#888888";
    }
    else {
        this.color = '#00ff00';
    }
    return true;
}

Person.prototype = new Point(0, 0);

Person.prototype.add3D = function(p) {
    this.x += p.x;
    this.y += p.y;
    this.z += p.z;
}
Person.prototype.sub3D = function(p) {
    this.x -= p.x;
    this.y -= p.y;
    this.z -= p.z;
}
Person.prototype.distance3D = function(p) {
    return Math.sqrt(Math.pow(p.x - this.x, 2) + Math.pow(p.y - this.y, 2) + Math.pow(p.z - this.z, 2));
}

Person.prototype.render = function(gl, specs) {
    var transform = mat4.translate(gl.modelViewMatrix, [this.x, this.y, this.z], []);
    var radius = specs.atoms_width / 2;
    mat4.scale(transform, [radius, radius, radius]);
    //positions
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.sphereBuffer.vertexPositionBuffer);
    gl.vertexAttribPointer(gl.shader.vertexPositionAttribute, gl.sphereBuffer.vertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);
    //colors
    gl.material.setTempColors(gl, '#000000', this.color, '#555555', 32);
    //normals
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.sphereBuffer.vertexNormalBuffer);
    gl.vertexAttribPointer(gl.shader.vertexNormalAttribute, gl.sphereBuffer.vertexNormalBuffer.itemSize, gl.FLOAT, false, 0, 0);
    //render
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gl.sphereBuffer.vertexIndexBuffer);
    gl.setMatrixUniforms(gl.projectionMatrix, transform);
    gl.drawElements(gl.TRIANGLES, gl.sphereBuffer.vertexIndexBuffer.numItems, gl.UNSIGNED_SHORT, 0);


}
//
//  Copyright 2009 iChemLabs, LLC.  All rights reserved.
//
//  $Revision: 2794 $
//  $Author: kevin $
//  $LastChangedDate: 2010-08-13 12:12:28 -0400 (Fri, 13 Aug 2010) $
//

function Bond(a1, a2, bondOrder, relation) {
    this.a1 = a1;
    this.a2 = a2;
    this.bondOrder = bondOrder ? bondOrder : 1;
    if(relation == 'child'){

    }
    else if(relation == 'sibling'){

    }
    else if (relation = 'wife'){

    }
    this.color = "#0000ff";
    return true;
}

Bond.prototype.getCenter = function() {
    return new Point((this.a1.x + this.a2.x) / 2, (this.a1.y + this.a2.y) / 2);
}
Bond.prototype.getLength = function() {
    return this.a1.distance(this.a2);
}
Bond.prototype.getLength3D = function() {
    return this.a1.distance3D(this.a2);
}
Bond.prototype.contains = function(a) {
    return a == this.a1 || a == this.a2;
}
Bond.prototype.getNeighbor = function(a) {
    if (a == this.a1) {
        return this.a2;
    }
    else
    if (a == this.a2) {
        return this.a1;
    }
    return null;
}
Bond.prototype.render = function(gl, specs) {
    var transform = mat4.translate(gl.modelViewMatrix, [this.a1.x, this.a1.y, this.a1.z], []);
    //align bond
    var a2b = [this.a2.x - this.a1.x, this.a2.y - this.a1.y, this.a2.z - this.a1.z];
    if (this.a1.x == this.a2.x && this.a1.z == this.a2.z) {
        if (this.a2.y < this.a1.y) {
            mat4.rotate(transform, Math.PI, [0,0,1]);
        }
    }
    else {
        var mult = [0, 1, 0];
        mat4.rotate(transform, vec3.angleFrom(mult, a2b), vec3.cross(mult, a2b, []));
    }
    var height = this.a1.distance3D(this.a2);
    if (height == 0) {
        return false;
    }
    mat4.scale(transform, [specs.bonds_width / 2, height, specs.bonds_width / 2]);
    //colors
    gl.material.setTempColors(gl, '#222222', this.color, '#555555', 32);
    //normals
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.cylinderBuffer.vertexNormalBuffer);
    gl.vertexAttribPointer(gl.shader.vertexNormalAttribute, gl.cylinderBuffer.vertexNormalBuffer.itemSize, gl.FLOAT, false, 0, 0);
    //positions
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.cylinderBuffer.vertexPositionBuffer);
    gl.vertexAttribPointer(gl.shader.vertexPositionAttribute, gl.cylinderBuffer.vertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);
    //render
    gl.setMatrixUniforms(gl.projectionMatrix, transform);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, gl.cylinderBuffer.vertexPositionBuffer.numItems);
}
//
//  Copyright 2009 iChemLabs, LLC.  All rights reserved.
//
//  $Revision: 2777 $
//  $Author: kevin $
//  $LastChangedDate: 2010-08-12 16:48:33 -0400 (Thu, 12 Aug 2010) $
//
function Family() {
    this.people = [];
    this.bonds = [];
    return true;
}

Family.prototype.render = function(gl, specs) {
    if (specs.bonds_display == true) {
        for (var i = 0, ii = this.bonds.length; i < ii; i++) {
            this.bonds[i].render(gl, specs);
        }
        ;
    }
    if (specs.atoms_display == true) {
        for (var i = 0, ii = this.people.length; i < ii; i++) {
            this.people[i].render(gl, specs);
        }
        ;
    }
}
Family.prototype.getCenter3D = function() {
    if (this.people.length == 1) {
        return new Person('C', this.people[0].x, this.people[0].y, this.people[0].z);
    }
    var minX = minY = minZ = Infinity;
    var maxX = maxY = maxZ = -Infinity;
    for (var i = 0, ii = this.people.length; i < ii; i++) {
        minX = Math.min(this.people[i].x, minX);
        minY = Math.min(this.people[i].y, minY);
        minZ = Math.min(this.people[i].z, minZ);
        maxX = Math.max(this.people[i].x, maxX);
        maxY = Math.max(this.people[i].y, maxY);
        maxZ = Math.max(this.people[i].z, maxZ);
    }
    ;
    return new Person('C', (maxX + minX) / 2, (maxY + minY) / 2, (maxZ + minZ) / 2);
}
Family.prototype.getCenter = function() {
    if (this.people.length == 1) {
        return new Point(this.people[0].x, this.people[0].y);
    }
    var minX = minY = Infinity;
    var maxX = maxY = -Infinity;
    for (var i = 0, ii = this.people.length; i < ii; i++) {
        minX = Math.min(this.people[i].x, minX);
        minY = Math.min(this.people[i].y, minY);
        maxX = Math.max(this.people[i].x, maxX);
        maxY = Math.max(this.people[i].y, maxY);
    }
    ;
    return new Point((maxX + minX) / 2, (maxY + minY) / 2);
}
Family.prototype.getDimension = function() {
    if (this.people.length == 1) {
        return new Point(0, 0);
    }
    var minX = minY = Infinity;
    var maxX = maxY = -Infinity;
    for (var i = 0, ii = this.people.length; i < ii; i++) {
        minX = Math.min(this.people[i].x, minX);
        minY = Math.min(this.people[i].y, minY);
        maxX = Math.max(this.people[i].x, maxX);
        maxY = Math.max(this.people[i].y, maxY);
    }
    ;
    return new Point(maxX - minX, maxY - minY);
}
Family.prototype.check = function() {
    //find lones
    for (var i = 0, ii = this.people.length; i < ii; i++) {
        this.people[i].isLone = false;
        if (this.people[i].name == 'C') {
            var counter = 0;
            for (var j = 0, jj = this.bonds.length; j < jj; j++) {
                if (this.bonds[j].a1 == this.people[i] || this.bonds[j].a2 == this.people[i]) {
                    counter++;
                }
            }
            ;
            if (counter == 0) {
                this.people[i].isLone = true;
            }
        }
    }
    //sort
    this.sortAtomsByZ();
    this.sortBondsByZ();
    //setup metadata
    this.setupMetaData();
}
Family.prototype.getAngles = function(a) {
    var angles = [];
    for (var i = 0, ii = this.bonds.length; i < ii; i++) {
        if (this.bonds[i].contains(a)) {
            angles[angles.length] = a.angle(this.bonds[i].getNeighbor(a));
        }
    }
    ;
    angles.sort();
    return angles;
}
Family.prototype.getCoordinationNumber = function(bs) {
    var coordinationNumber = 0;
    for (var i = 0, ii = bs.length; i < ii; i++) {
        coordinationNumber += bs[i].bondOrder;
    }
    ;
    return coordinationNumber;
}
Family.prototype.getBonds = function(a) {
    var bonds = [];
    for (var i = 0, ii = this.bonds.length; i < ii; i++) {
        if (this.bonds[i].contains(a)) {
            bonds[bonds.length] = this.bonds[i];
        }
    }
    ;
    return bonds;
}
Family.prototype.sortAtomsByZ = function() {
    for (var i = 1, ii = this.people.length; i < ii; i++) {
        var index = i;
        while (index > 0 && this.people[index].z < this.people[index - 1].z) {
            var hold = this.people[index];
            this.people[index] = this.people[index - 1];
            this.people[index - 1] = hold;
            index--;
        }
    }
}
Family.prototype.sortBondsByZ = function() {
    for (var i = 1, ii = this.bonds.length; i < ii; i++) {
        var index = i;
        while (index > 0 && (this.bonds[index].a1.z + this.bonds[index].a2.z) < (this.bonds[index - 1].a1.z + this.bonds[index - 1].a2.z)) {
            var hold = this.bonds[index];
            this.bonds[index] = this.bonds[index - 1];
            this.bonds[index - 1] = hold;
            index--;
        }
    }
}
Family.prototype.setupMetaData = function() {
    for (var i = 0, ii = this.people.length; i < ii; i++) {
        var a = this.people[i];
        var bonds = this.getBonds(a);
        var angles = this.getAngles(a);
        a.isHidden = bonds.length == 2 && Math.abs(Math.abs(angles[1] - angles[0]) - Math.PI) < Math.PI / 30 && bonds[0].bondOrder == bonds[1].bondOrder;
        a.angleOfLeastInterference = angleBetweenLargest(angles) % (Math.PI * 2);
        a.coordinationNumber = this.getCoordinationNumber(bonds);
        a.bondNumber = bonds.length;
    }
    ;
}
Family.prototype.scaleToAverageBondLength = function(length) {
    var avBondLength = this.getAverageBondLength();
    if (avBondLength != 0) {
        var scale = length / avBondLength;
        for (var i = 0, ii = this.people.length; i < ii; i++) {
            this.people[i].x *= scale;
            this.people[i].y *= scale;
        }
        ;
    }
}
Family.prototype.getAverageBondLength = function() {
    if (this.bonds.length == 0) {
        return 0;
    }
    var tot = 0;
    for (var i = 0, ii = this.bonds.length; i < ii; i++) {
        tot += this.bonds[i].getLength();
    }
    ;
    tot /= this.bonds.length;
    return tot;
}

function Cylinder() {
    this.vertexNormalBuffer;
    this.vertexPositionBuffer;
    this.vertexIndexBuffer;
}

Cylinder.prototype.generate = function(gl, radius, height, bands) {
    var vertexPositionData = [];
    var normalData = [];
    for (var i = 0; i < bands; i++) {
        var theta = i * 2 * Math.PI / bands;
        var cosTheta = Math.cos(theta);
        var sinTheta = Math.sin(theta);
        normalData.push(cosTheta, 0, sinTheta);
        vertexPositionData.push(radius * cosTheta, 0, radius * sinTheta);
        normalData.push(cosTheta, 0, sinTheta);
        vertexPositionData.push(radius * cosTheta, height, radius * sinTheta);
    }
    normalData.push(1, 0, 0);
    vertexPositionData.push(radius, 0, 0);
    normalData.push(1, 0, 0);
    vertexPositionData.push(radius, height, 0);

    this.vertexNormalBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexNormalBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(normalData), gl.STATIC_DRAW);
    this.vertexNormalBuffer.itemSize = 3;
    this.vertexNormalBuffer.numItems = normalData.length / 3;

    this.vertexPositionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexPositionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexPositionData), gl.STATIC_DRAW);
    this.vertexPositionBuffer.itemSize = 3;
    this.vertexPositionBuffer.numItems = vertexPositionData.length / 3;
}
//
//  Copyright 2009 iChemLabs, LLC.  All rights reserved.
//
//  $Revision: 2794 $
//  $Author: kevin $
//  $LastChangedDate: 2010-08-13 12:12:28 -0400 (Fri, 13 Aug 2010) $
//

function Light(diffuseColor, specularColor, direction) {
    this.diffuseRGB = [parseInt(diffuseColor.substring(1, 3), 16) / 255.0, parseInt(diffuseColor.substring(3, 5), 16) / 255.0, parseInt(diffuseColor.substring(5, 7), 16) / 255.0];
    this.specularRGB = [parseInt(specularColor.substring(1, 3), 16) / 255.0, parseInt(specularColor.substring(3, 5), 16) / 255.0, parseInt(specularColor.substring(5, 7), 16) / 255.0];
    this.direction = direction;
}

Light.prototype.lightScene = function(gl) {
    var prefix = 'u_light.';
    gl.uniform3f(gl.getUniformLocation(gl.program, prefix + 'diffuse_color'), this.diffuseRGB[0], this.diffuseRGB[1], this.diffuseRGB[2]);
    gl.uniform3f(gl.getUniformLocation(gl.program, prefix + 'specular_color'), this.specularRGB[0], this.specularRGB[1], this.specularRGB[2]);

    var lightingDirection = vec3.create(this.direction);
    vec3.normalize(lightingDirection);
    vec3.negate(lightingDirection);
    gl.uniform3f(gl.getUniformLocation(gl.program, prefix + 'direction'), lightingDirection[0], lightingDirection[1], lightingDirection[2]);

    // compute the half vector
    var eyeVector = [0, 0, 0]
    var halfVector = [eyeVector[0] + lightingDirection[0], eyeVector[1] + lightingDirection[1], eyeVector[2] + lightingDirection[2]];
    var length = vec3.length(halfVector);
    if (length == 0)
        halfVector = [0, 0, 1];
    else {
        vec3.scale(1 / length);
    }
    gl.uniform3f(gl.getUniformLocation(gl.program, prefix + "half_vector"), halfVector[0], halfVector[1], halfVector[2]);
}
//
//  Copyright 2009 iChemLabs, LLC.  All rights reserved.
//
//  $Revision: 2786 $
//  $Author: jat $
//  $LastChangedDate: 2010-08-12 19:50:43 -0400 (Thu, 12 Aug 2010) $
//

function Material(ambientColor, diffuseColor, specularColor, shininess) {
    this.ambientColor = ambientColor;
    this.diffuseColor = diffuseColor;
    this.specularColor = specularColor;
    this.shininess = shininess;
}

Material.prototype.setup = function(gl) {
    this.setTempColors(gl, this.ambientColor, this.diffuseColor, this.specularColor, this.shininess);
}
Material.prototype.setTempColors = function(gl, ambientColor, diffuseColor, specularColor, shininess) {
    var prefix = 'u_material.';
    gl.uniform3f(gl.getUniformLocation(gl.program, prefix + 'ambient_color'), parseInt(ambientColor.substring(1, 3), 16) / 255.0, parseInt(ambientColor.substring(3, 5), 16) / 255.0, parseInt(ambientColor.substring(5, 7), 16) / 255.0);
    gl.uniform3f(gl.getUniformLocation(gl.program, prefix + 'diffuse_color'), parseInt(diffuseColor.substring(1, 3), 16) / 255.0, parseInt(diffuseColor.substring(3, 5), 16) / 255.0, parseInt(diffuseColor.substring(5, 7), 16) / 255.0);
    gl.uniform3f(gl.getUniformLocation(gl.program, prefix + 'specular_color'), parseInt(specularColor.substring(1, 3), 16) / 255.0, parseInt(specularColor.substring(3, 5), 16) / 255.0, parseInt(specularColor.substring(5, 7), 16) / 255.0);
    gl.uniform1f(gl.getUniformLocation(gl.program, prefix + 'shininess'), shininess);
}
//
//  Copyright 2009 iChemLabs, LLC.  All rights reserved.
//
//  $Revision: 2786 $
//  $Author: jat $
//  $LastChangedDate: 2010-08-12 19:50:43 -0400 (Thu, 12 Aug 2010) $
//

function Shader() {
    this.vertexPositionAttribute;
    this.vertexNormalAttribute;
    this.vertexColorAttribute;
}

Shader.prototype.init = function(gl) {
    var vertexShader = this.getShader(gl, "vertex-shader");
    if (vertexShader == null) {
        vertexShader = this.loadDefaultVertexShader(gl);
    }
    var fragmentShader = this.getShader(gl, "fragment-shader");
    if (fragmentShader == null) {
        fragmentShader = this.loadDefaultFragmentShader(gl);
    }

    gl.attachShader(gl.program, vertexShader);
    gl.attachShader(gl.program, fragmentShader);
    gl.linkProgram(gl.program);

    if (!gl.getProgramParameter(gl.program, gl.LINK_STATUS)) {
        alert("Could not initialize shaders!");
    }

    gl.useProgram(gl.program);

    this.vertexPositionAttribute = gl.getAttribLocation(gl.program, "a_vertex_position");
    gl.enableVertexAttribArray(this.vertexPositionAttribute);

    this.vertexNormalAttribute = gl.getAttribLocation(gl.program, "a_vertex_normal");
    gl.enableVertexAttribArray(this.vertexNormalAttribute);
}
Shader.prototype.getShader = function(gl, id) {
    var shaderScript = document.getElementById(id);
    if (!shaderScript) {
        return null;
    }
    var sb = [];
    var k = shaderScript.firstChild;
    while (k) {
        if (k.nodeType == 3)
            sb.push(k.textContent);
        k = k.nextSibling;
    }
    var shader;
    if (shaderScript.type == "x-shader/x-fragment") {
        shader = gl.createShader(gl.FRAGMENT_SHADER);
    }
    else
    if (shaderScript.type == "x-shader/x-vertex") {
        shader = gl.createShader(gl.VERTEX_SHADER);
    }
    else {
        return null;
    }
    gl.shaderSource(shader, sb.join(''));
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        alert(gl.getShaderInfoLog(shader));
        return null;
    }
    return shader;
}
Shader.prototype.loadDefaultVertexShader = function(gl) {
    var sb = [];
    //set precision
    sb.push("#ifdef GL_ES\n");
    sb.push("precision highp float;\n");
    sb.push("#endif\n");
    //phong shader
    sb.push("struct Light");
    sb.push("{");
    sb.push("vec3 diffuse_color;");
    sb.push("vec3 specular_color;");
    sb.push("vec3 direction;");
    sb.push("vec3 half_vector;");
    sb.push("};");
    sb.push("struct Material");
    sb.push("{");
    sb.push("vec3 ambient_color;");
    sb.push("vec3 diffuse_color;");
    sb.push("vec3 specular_color;");
    sb.push("float shininess;");
    sb.push("};");
    //attributes set when rendering objects
    sb.push("attribute vec3 a_vertex_position;");
    sb.push("attribute vec3 a_vertex_normal;");
    //scene structs
    sb.push("uniform Light u_light;");
    sb.push("uniform Material u_material;");
    //matrices set by gl.setMatrixUniforms
    sb.push("uniform mat4 u_model_view_matrix;");
    sb.push("uniform mat4 u_projection_matrix;");
    sb.push("uniform mat4 u_normal_matrix;");
    //sent to the fragment shader
    sb.push("varying vec4 v_diffuse;");
    sb.push("varying vec4 v_ambient;");
    sb.push("varying vec3 v_normal;");
    sb.push("varying vec3 v_light_direction;");
    sb.push("void main(void)");
    sb.push("{");
    sb.push("v_normal = normalize((u_normal_matrix * vec4(a_vertex_normal, 1.0)).xyz);");

    sb.push("vec4 diffuse = vec4(u_light.diffuse_color, 1.0);");
    sb.push("v_light_direction = u_light.direction;");

    sb.push("v_ambient = vec4(u_material.ambient_color, 1.0);");
    sb.push("v_diffuse = vec4(u_material.diffuse_color, 1.0) * diffuse;");

    sb.push("gl_Position = u_projection_matrix * u_model_view_matrix * vec4(a_vertex_position, 1.0);");
    sb.push("}");
    var shader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(shader, sb.join(''));
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        alert(gl.getShaderInfoLog(shader));
        return null;
    }
    return shader;
}
Shader.prototype.loadDefaultFragmentShader = function(gl) {
    var sb = [];
    //set precision
    sb.push("#ifdef GL_ES\n");
    sb.push("precision highp float;\n");
    sb.push("#endif\n");
    sb.push("struct Light");
    sb.push("{");
    sb.push("vec3 diffuse_color;");
    sb.push("vec3 specular_color;");
    sb.push("vec3 direction;");
    sb.push("vec3 half_vector;");
    sb.push("};");
    sb.push("struct Material");
    sb.push("{");
    sb.push("vec3 ambient_color;");
    sb.push("vec3 diffuse_color;");
    sb.push("vec3 specular_color;");
    sb.push("float shininess;");
    sb.push("};");
    //scene structs
    sb.push("uniform Light u_light;");
    sb.push("uniform Material u_material;");
    //from the vertex shader
    sb.push("varying vec4 v_diffuse;");
    sb.push("varying vec4 v_ambient;");
    sb.push("varying vec3 v_normal;");
    sb.push("varying vec3 v_light_direction;");
    sb.push("void main(void)");
    sb.push("{");
    sb.push("float nDotL = max(dot(v_normal, v_light_direction), 0.0);");
    sb.push("vec4 color = vec4(v_diffuse.rgb*nDotL, v_diffuse.a);");
    sb.push("float nDotHV = max(dot(v_normal, u_light.half_vector), 0.0);");
    sb.push("vec4 specular = vec4(u_material.specular_color * u_light.specular_color, 1.0);");
    sb.push("color+=vec4(specular.rgb * pow(nDotHV, u_material.shininess), specular.a);");
    sb.push("gl_FragColor = color+v_ambient;");
    sb.push("}");
    var shader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(shader, sb.join(''));
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        alert(gl.getShaderInfoLog(shader));
        return null;
    }
    return shader;
}
//
//  Copyright 2009 iChemLabs, LLC.  All rights reserved.
//
//  $Revision: 2786 $
//  $Author: jat $
//  $LastChangedDate: 2010-08-12 19:50:43 -0400 (Thu, 12 Aug 2010) $
//

function Sphere() {
    this.vertexNormalBuffer;
    this.vertexPositionBuffer;
    this.vertexIndexBuffer;
}

Sphere.prototype.generate = function(gl, radius, latitudeBands, longitudeBands) {
    var vertexPositionData = [];
    var normalData = [];
    for (var latNumber = 0; latNumber <= latitudeBands; latNumber++) {
        var theta = latNumber * Math.PI / latitudeBands;
        var sinTheta = Math.sin(theta);
        var cosTheta = Math.cos(theta);

        for (var longNumber = 0; longNumber <= longitudeBands; longNumber++) {
            var phi = longNumber * 2 * Math.PI / longitudeBands;
            var sinPhi = Math.sin(phi);
            var cosPhi = Math.cos(phi);

            var x = cosPhi * sinTheta;
            var y = cosTheta;
            var z = sinPhi * sinTheta;

            normalData.push(x);
            normalData.push(y);
            normalData.push(z);
            vertexPositionData.push(radius * x);
            vertexPositionData.push(radius * y);
            vertexPositionData.push(radius * z);
        }
    }

    var indexData = [];
    longitudeBands += 1;
    for (var latNumber = 0; latNumber < latitudeBands; latNumber++) {
        for (var longNumber = 0; longNumber < longitudeBands; longNumber++) {
            var first = (latNumber * longitudeBands) + (longNumber % longitudeBands);
            var second = first + longitudeBands;
            indexData.push(first);
            indexData.push(second);
            indexData.push(first + 1);

            if (longNumber < longitudeBands - 1) {
                indexData.push(second);
                indexData.push(second + 1);
                indexData.push(first + 1);
            }
        }
    }

    this.vertexNormalBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexNormalBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(normalData), gl.STATIC_DRAW);
    this.vertexNormalBuffer.itemSize = 3;
    this.vertexNormalBuffer.numItems = normalData.length / 3;

    this.vertexPositionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexPositionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexPositionData), gl.STATIC_DRAW);
    this.vertexPositionBuffer.itemSize = 3;
    this.vertexPositionBuffer.numItems = vertexPositionData.length / 3;

    this.vertexIndexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.vertexIndexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indexData), gl.STREAM_DRAW);
    this.vertexIndexBuffer.itemSize = 1;
    this.vertexIndexBuffer.numItems = indexData.length;
}

//
//  Copyright 2009 iChemLabs, LLC.  All rights reserved.
//
//  $Revision: 2777 $
//  $Author: kevin $
//  $LastChangedDate: 2010-08-12 16:48:33 -0400 (Thu, 12 Aug 2010) $
//
function angleBetweenLargest(angles) {
    if (angles.length == 0) {
        return 0;
    }
    if (angles.length == 1) {
        return angles[0] + Math.PI;
    }
    var largest = 0;
    var angle = 0;
    var index = -1;
    for (var i = 0, ii = angles.length - 1; i < ii; i++) {
        var dif = angles[i + 1] - angles[i];
        if (dif > largest) {
            largest = dif;
            angle = (angles[i + 1] + angles[i]) / 2;
            index = i;
        }
    }
    var last = angles[0] + Math.PI * 2 - angles[angles.length - 1];
    if (last > largest) {
        angle = angles[0] - last / 2;
        largest = last;
        if (angle < 0) {
            angle += Math.PI * 2;
        }
        index = angles.length - 1;
    }
    return angle;
}

//
//  Copyright 2006-2010 iChemLabs, LLC.  All rights reserved.
//
//  $Revision: 2786 $
//  $Author: jat $
//  $LastChangedDate: 2010-08-12 19:50:43 -0400 (Thu, 12 Aug 2010) $
//

function supports_canvas() {
    return !!document.createElement('canvas').getContext;
}

function supports_canvas_text() {
    if (!supports_canvas()) {
        return false;
    }
    var dummy_canvas = document.createElement('canvas');
    var context = dummy_canvas.getContext('2d');
    return typeof context.fillText == 'function';
}

function alertBrowserIncompatibility() {
    if (!supports_canvas_text()) {
        if ($.browser.msie && $.browser.version >= '6') {
            good = true;
            alert('ChemDoodle Web Components require Google Chrome Frame to run in Internet Explorer. Please install Google Chrome Frame and then restart your browser.\n\nhttp://code.google.com/chrome/chromeframe/');
        }
        if (!good) {
            alert('ChemDoodle Web Components are best viewed in the following browsers with minimum versions listed. Please use one of the following or update your browser for the best experience.\n\nGoogle Chrome 2+ (Windows)\nApple Safari 4+ (Windows, Mac)\nMozilla Firefox 3.5+ (Windows, Mac, Linux)\nOpera 10.5+ (Windows, Mac, Linux)\nInternet Explorer 6+ (Windows)');
        }
    }
}