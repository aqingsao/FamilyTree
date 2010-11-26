vec3.angleFrom = function(vec, vec2) {
    var length1 = vec3.length(vec);
    var length2 = vec3.length(vec2);
    var dot = vec3.dot(vec, vec2);
    var cosine = dot / length1 / length2;
    return Math.acos(cosine);
}

// Global canvas properties
var default_backgroundColor = '#000000';

//Modifiable canvas properties
var default_canvas_scale = 1;
var default_canvas_rotateAngle = 0;
var default_bondLength_2D = 20;
var default_angstromsPerBondLength = 1.25;
var default_projectionVerticalFieldOfView_3D = 45;
var default_projectionWidthHeightRatio_3D = 1;
var default_projectionFrontCulling_3D = .1;
var default_projectionBackCulling_3D = 10000;

//default atom properties
var default_atoms_display = true;
var default_atoms_font_size_2D = 12;
var default_atoms_font_families_2D = ['Helvetica', 'Arial', 'Dialog'];
var default_atoms_circles_2D = false;
var default_atoms_circleDiameter_2D = 10;
var default_atoms_circleBorderWidth_2D = 1;
var default_atoms_resolution_3D = 60;
var default_atoms_sphereDiameter_3D = .8;
var default_atoms_useVDWDiameters_3D = false;
var default_atoms_materialAmbientColor_3D = '#000000';
var default_atoms_materialSpecularColor_3D = '#555555';
var default_atoms_materialShininess_3D = 32;
var default_atoms_implicitHydrogens_2D = true;
var default_atoms_displayTerminalCarbonLabels_2D = false;
var default_atoms_showHiddenCarbons_2D = true;

//default bond properties
var default_bonds_display = true;
var default_bonds_width_2D = 1;
var default_bonds_saturationWidth_2D = .2;
var default_bonds_ends_2D = 'round';
var default_bonds_saturationAngle_2D = Math.PI / 3;
var default_bonds_symmetrical_2D = false;
var default_bonds_clearOverlaps_2D = false;
var default_bonds_overlapClearWidth_2D = .5;
var default_bonds_atomLabelBuffer_2D = .25;
var default_bonds_wedgeThickness_2D = .22;
var default_bonds_hashWidth_2D = 1;
var default_bonds_hashSpacing_2D = 2.5;
var default_bonds_resolution_3D = 60;
var default_bonds_cylinderDiameter_3D = .3;
var default_bonds_materialAmbientColor_3D = '#222222';
var default_bonds_materialSpecularColor_3D = '#555555';
var default_bonds_materialShininess_3D = 32;


function VisualSpecifications() {

    //canvas properties
    this.scale = default_canvas_scale;
    this.rotateAngle = default_canvas_rotateAngle;
    this.bondLength = default_bondLength_2D;
    this.angstromsPerBondLength = default_angstromsPerBondLength;
    this.projectionVerticalFieldOfView_3D = default_projectionVerticalFieldOfView_3D;
    this.projectionWidthHeightRatio_3D = default_projectionWidthHeightRatio_3D;
    this.projectionFrontCulling_3D = default_projectionFrontCulling_3D;
    this.projectionBackCulling_3D = default_projectionBackCulling_3D;

    //atom properties
    this.atoms_display = default_atoms_display;
    this.atoms_font_size_2D = default_atoms_font_size_2D;
    this.atoms_font_families_2D = [];
    for (var i = 0, ii = default_atoms_font_families_2D.length; i < ii; i++) {
        this.atoms_font_families_2D[i] = default_atoms_font_families_2D[i];
    }
    this.atoms_circles_2D = default_atoms_circles_2D;
    this.atoms_circleDiameter_2D = default_atoms_circleDiameter_2D;
    this.atoms_circleBorderWidth_2D = default_atoms_circleBorderWidth_2D;
    this.atoms_resolution_3D = default_atoms_resolution_3D;
    this.atoms_sphereDiameter_3D = default_atoms_sphereDiameter_3D;
    this.atoms_useVDWDiameters_3D = default_atoms_useVDWDiameters_3D;
    this.atoms_materialAmbientColor_3D = default_atoms_materialAmbientColor_3D;
    this.atoms_materialSpecularColor_3D = default_atoms_materialSpecularColor_3D;
    this.atoms_materialShininess_3D = default_atoms_materialShininess_3D;
    this.atoms_implicitHydrogens_2D = default_atoms_implicitHydrogens_2D;
    this.atoms_displayTerminalCarbonLabels_2D = default_atoms_displayTerminalCarbonLabels_2D;
    this.atoms_showHiddenCarbons_2D = default_atoms_showHiddenCarbons_2D;

    //bond properties
    this.bonds_display = default_bonds_display;
    this.bonds_width_2D = default_bonds_width_2D;
    this.bonds_saturationWidth_2D = default_bonds_saturationWidth_2D;
    this.bonds_ends_2D = default_bonds_ends_2D;
    this.bonds_saturationAngle_2D = default_bonds_saturationAngle_2D;
    this.bonds_symmetrical_2D = default_bonds_symmetrical_2D;
    this.bonds_clearOverlaps_2D = default_bonds_clearOverlaps_2D;
    this.bonds_overlapClearWidth_2D = default_bonds_overlapClearWidth_2D;
    this.bonds_atomLabelBuffer_2D = default_bonds_atomLabelBuffer_2D;
    this.bonds_wedgeThickness_2D = default_bonds_wedgeThickness_2D;
    this.bonds_hashWidth_2D = default_bonds_hashWidth_2D;
    this.bonds_hashSpacing_2D = default_bonds_hashSpacing_2D;
    this.bonds_resolution_3D = default_bonds_resolution_3D;
    this.bonds_cylinderDiameter_3D = default_bonds_cylinderDiameter_3D;
    this.bonds_materialAmbientColor_3D = default_bonds_materialAmbientColor_3D;
    this.bonds_materialSpecularColor_3D = default_bonds_materialSpecularColor_3D;
    this.bonds_materialShininess_3D = default_bonds_materialShininess_3D;
}

VisualSpecifications.prototype.set3DRepresentation = function(representation) {
    if (representation == 'Ball and Stick') {
        this.atoms_useVDWDiameters_3D = false;
        this.bonds_cylinderDiameter_3D = .3;
        this.atoms_sphereDiameter_3D = 1;
    }
    else
    if (representation == 'Stick') {
        this.atoms_useVDWDiameters_3D = false;
        this.bonds_cylinderDiameter_3D = this.atoms_sphereDiameter_3D = .8;
        this.bonds_materialAmbientColor_3D = this.atoms_materialAmbientColor_3D;
        this.bonds_materialSpecularColor_3D = this.atoms_materialSpecularColor_3D;
        this.bonds_materialShininess_3D = this.atoms_materialShininess_3D;
    }
    else
    if (representation == 'Wireframe') {
        this.atoms_useVDWDiameters_3D = false;
        this.bonds_cylinderDiameter_3D = .05;
        this.atoms_sphereDiameter_3D = .15;
    }
    else {
        alert('"' + representation + '" is not recognized. Use one of the following strings:\n\n' +
                '1. Ball and Stick\n' +
                '2. van der Waals Spheres\n' +
                '3. Stick\n' +
                '4. Wireframe\n');
    }
}
VisualSpecifications.prototype.getFontString = function(size, families) {
    var sb = [size + 'px '];
    for (var i = 0, ii = families.length; i < ii; i++) {
        sb.push((i != 0 ? ',' : '') + families[i]);
    }
    ;
    return sb.join('');
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

function Canvas() {
    this.molecule = null;
    this.emptyMessage = null;
    this.inGesture = false;
    return true;
}

Canvas.prototype.repaint = function() {
    var canvas = document.getElementById(this.id);
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = default_backgroundColor;
        ctx.fillRect(0, 0, this.width, this.height);
        if (this.molecule != null && this.molecule.atoms.length > 0) {
            ctx.save();
            ctx.translate(this.width / 2, this.height / 2);
            ctx.rotate(this.specs.rotateAngle);
            ctx.scale(this.specs.scale, this.specs.scale);
            ctx.translate(-this.width / 2, -this.height / 2);
            this.molecule.draw(ctx, this.specs);
            ctx.restore();
        }
        else {
            ctx.fillStyle = '#737683';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.font = '18px Helvetica, Verdana, Arial, Sans-serif';
            ctx.fillText("Hi, No atoms at all", this.width / 2, this.height / 2);
        }
    }
}
Canvas.prototype.loadMolecule = function(molecule) {
    this.molecule = molecule;
    this.center();
    this.molecule.check();
    if (this.afterLoadMolecule) {
        this.afterLoadMolecule();
    }
    this.repaint();
}
Canvas.prototype.center = function() {
    var canvas = document.getElementById(this.id);
    var p = this.molecule.getCenter3D();
    var center = new Atom('C', this.width / 2, this.height / 2, 0);
    center.sub3D(p);
    for (var i = 0, ii = this.molecule.atoms.length; i < ii; i++) {
        this.molecule.atoms[i].add3D(center);
    }
    ;
    var dim = this.molecule.getDimension();
    this.specs.scale = 1;
    if (dim.x > this.width || dim.y > this.height) {
        this.specs.scale = Math.min(this.width / dim.x, this.height / dim.y) * .85;
    }
}
Canvas.prototype.create = function(id, width, height) {
    this.id = id;
    this.width = width;
    this.height = height;
    if (!supports_canvas_text() && $.browser.msie && $.browser.version >= '6') {
        // Install Google Chrome Frame
        document.writeln('<div style="border: 1px solid black;" width="' + width + '" height="' + height + '">Your browser does not support Canvas</div>');
    }
    else {
        document.writeln('<canvas class="ChemDoodleWebComponent" id="' + id + '" width="' + width + '" height="' + height + '"></canvas>');
    }
    this.specs = new VisualSpecifications();
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
Canvas.prototype.getMolecule = function() {
    return this.molecule;
}
Canvas.prototype.prehandleEvent = function(e) {
    e.preventDefault();
    var offset = $('#' + this.id).offset();
    e.p = new Point(e.pageX - offset.left, e.pageY - offset.top);
}
Canvas.prototype.prehandleMobileEvent = function(e) {
    e.pageX = e.originalEvent.changedTouches[0].pageX;
    e.pageY = e.originalEvent.changedTouches[0].pageY;
    e.preventDefault();
    var offset = $('#' + this.id).offset();
    e.p = new Point(e.pageX - offset.left + window.pageXOffset, e.pageY - offset.top + window.pageYOffset);
}

function Canvas3D(id, width, height) {
    if (id) {
        this.create(id, width, height);
    }
    this.rotationMatrix = mat4.identity([]);
    this.translationMatrix = mat4.identity([]);
    this.lastPoint = null;
    return true;
}

Canvas3D.prototype = new Canvas();

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
    var center = new Atom('C', 0, 0, 0);
    center.sub3D(p);
    for (var i = 0, ii = this.molecule.atoms.length; i < ii; i++) {
        this.molecule.atoms[i].add3D(center);
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
    this.gl.clearColor(parseInt(default_backgroundColor.substring(1, 3), 16) / 255.0, parseInt(default_backgroundColor.substring(3, 5), 16) / 255.0, parseInt(default_backgroundColor.substring(5, 7), 16) / 255.0, 1.0);
    this.gl.clearDepth(1.0);
    this.gl.enable(this.gl.DEPTH_TEST);
    this.gl.depthFunc(this.gl.LEQUAL);
    //here is the sphere buffer to be drawn, make it once, then scale and translate to draw atoms
    this.gl.sphereBuffer = new Sphere();
    this.gl.sphereBuffer.generate(this.gl, 1, this.specs.atoms_resolution_3D, this.specs.atoms_resolution_3D);
    this.gl.cylinderBuffer = new Cylinder();
    this.gl.cylinderBuffer.generate(this.gl, 1, 1, this.specs.bonds_resolution_3D);
    //set up lighting
    this.gl.lighting = new Light('#FFFFFF', '#FFFFFF', [-.1, -.1, -1]);
    this.gl.lighting.lightScene(this.gl);
    //set up material
    this.gl.material = new Material(this.specs.atoms_materialAmbientColor_3D, "#ff0000", this.specs.atoms_materialSpecularColor_3D, this.specs.atoms_materialShininess_3D);
    this.gl.material.setup(this.gl);
    //projection matrix
    //arg1: vertical field of view (degrees)
    //arg2: width to height ratio
    //arg3: front culling
    //arg4: back culling
    this.gl.projectionMatrix = mat4.perspective(this.specs.projectionVerticalFieldOfView_3D, this.specs.projectionWidthHeightRatio_3D, this.specs.projectionFrontCulling_3D, this.specs.projectionBackCulling_3D);
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
        var diameter = Math.max(this.width / 4, this.height / 4);
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


//
//  Copyright 2009 iChemLabs, LLC.  All rights reserved.
//
//  $Revision: 2786 $
//  $Author: jat $
//  $LastChangedDate: 2010-08-12 19:50:43 -0400 (Thu, 12 Aug 2010) $
//
function TransformCanvas3D(id, width, height) {
    if (id) {
        this.create(id, width, height);
    }
    return true;
}

TransformCanvas3D.prototype = new Canvas3D();
//
//  Copyright 2009 iChemLabs, LLC.  All rights reserved.
//
//  $Revision: 2786 $
//  $Author: jat $
//  $LastChangedDate: 2010-08-12 19:50:43 -0400 (Thu, 12 Aug 2010) $
//
function ViewerCanvas3D(id, width, height) {
    if (id) {
        this.create(id, width, height);
    }
    return true;
}

ViewerCanvas3D.prototype = new Canvas3D();

ViewerCanvas3D.prototype.mousedown = null;
ViewerCanvas3D.prototype.rightmousedown = null;
ViewerCanvas3D.prototype.drag = null;
ViewerCanvas3D.prototype.mousewheel = null;

//
//  Copyright 2009 iChemLabs, LLC.  All rights reserved.
//
//  $Revision: 2786 $
//  $Author: jat $
//  $LastChangedDate: 2010-08-12 19:50:43 -0400 (Thu, 12 Aug 2010) $
//
var LEEWAY = 1.1;

function getPointsPerAngstrom() {
    return default_bondLength_2D / default_angstromsPerBondLength;
}

function deduceCovalentBonds(molecule, customPointsPerAngstrom) {
    var pointsPerAngstrom = getPointsPerAngstrom();
    if (customPointsPerAngstrom) {
        pointsPerAngstrom = customPointsPerAngstrom;
    }
    for (var i = 0, ii = molecule.atoms.length; i < ii; i++) {
        for (var j = i + 1; j < ii; j++) {
            var first = molecule.atoms[i];
            var second = molecule.atoms[j];
            if (first.distance3D(second) < (ELEMENT[first.label].covalentRadius + ELEMENT[second.label].covalentRadius) * pointsPerAngstrom * LEEWAY) {
                molecule.bonds[molecule.bonds.length] = new Bond(first, second, 1);
            }
        }
    }
}
//
//  Copyright 2009 iChemLabs, LLC.  All rights reserved.
//
//  $Revision: 2786 $
//  $Author: jat $
//  $LastChangedDate: 2010-08-12 19:50:43 -0400 (Thu, 12 Aug 2010) $
//

function removeHydrogens(molecule) {
    var atoms = [];
    var bonds = [];
    for (var i = 0, ii = molecule.bonds.length; i < ii; i++) {
        if (molecule.bonds[i].a1.label != 'H' && molecule.bonds[i].a2.label != 'H') {
            bonds[bonds.length] = molecule.bonds[i];
        }
    }
    for (var i = 0, ii = molecule.atoms.length; i < ii; i++) {
        if (molecule.atoms[i].label != 'H') {
            atoms[atoms.length] = molecule.atoms[i];
        }
    }
    molecule.atoms = atoms;
    molecule.bonds = bonds;
}
//
//  Copyright 2009 iChemLabs, LLC.  All rights reserved.
//
//  $Revision: 2786 $
//  $Author: jat $
//  $LastChangedDate: 2010-08-12 19:50:43 -0400 (Thu, 12 Aug 2010) $
//

function copy(molecule) {
    for (var i = 0, ii = molecule.atoms.length; i < ii; i++) {
        molecule.atoms[i].metaID = i;
    }
    var newMol = new Molecule();
    for (var i = 0, ii = molecule.atoms.length; i < ii; i++) {
        newMol.atoms[i] = new Atom(molecule.atoms[i].label, molecule.atoms[i].x, molecule.atoms[i].y, molecule.atoms[i].z);
    }
    for (var i = 0, ii = molecule.bonds.length; i < ii; i++) {
        newMol.bonds[i] = new Bond(newMol.atoms[molecule.bonds[i].a1.metaID], newMol.atoms[molecule.bonds[i].a2.metaID], molecule.bonds[i].bondOrder);
    }
    return newMol;
}
//
//  Copyright 2009 iChemLabs, LLC.  All rights reserved.
//
//  $Revision: 2786 $
//  $Author: jat $
//  $LastChangedDate: 2010-08-12 19:50:43 -0400 (Thu, 12 Aug 2010) $
//
function Counter() {
    this.value = 0;
    this.molecule = null;
    return true;
}

Counter.prototype.setMolecule = function(molecule) {
    this.value = 0;
    this.molecule = molecule;
    if (this.innerCalculate) {
        this.innerCalculate();
    }
}
//
//  Copyright 2009 iChemLabs, LLC.  All rights reserved.
//
//  $Revision: 2786 $
//  $Author: jat $
//  $LastChangedDate: 2010-08-12 19:50:43 -0400 (Thu, 12 Aug 2010) $
//
function FrerejacqueNumberCounter(molecule) {
    this.setMolecule(molecule);
    return true;
}

FrerejacqueNumberCounter.prototype = new Counter();

FrerejacqueNumberCounter.prototype.innerCalculate = function() {
    this.value = this.molecule.bonds.length - this.molecule.atoms.length + new NumberOfMoleculesCounter(this.molecule).value;
}
//
//  Copyright 2009 iChemLabs, LLC.  All rights reserved.
//
//  $Revision: 2786 $
//  $Author: jat $
//  $LastChangedDate: 2010-08-12 19:50:43 -0400 (Thu, 12 Aug 2010) $
//
function NumberOfMoleculesCounter(molecule) {
    this.setMolecule(molecule);
    return true;
}

NumberOfMoleculesCounter.prototype = new Counter()

NumberOfMoleculesCounter.prototype.innerCalculate = function() {
    for (var i = 0, ii = this.molecule.atoms.length; i < ii; i++) {
        this.molecule.atoms[i].visited = false;
    }
    for (var i = 0, ii = this.molecule.atoms.length; i < ii; i++) {
        if (!this.molecule.atoms[i].visited) {
            this.value++;
            var q = new Queue();
            this.molecule.atoms[i].visited = true;
            q.enqueue(this.molecule.atoms[i]);
            while (!q.isEmpty()) {
                var atom = q.dequeue();
                for (var j = 0, jj = this.molecule.bonds.length; j < jj; j++) {
                    if (this.molecule.bonds[j].contains(atom)) {
                        var neigh = this.molecule.bonds[j].getNeighbor(atom);
                        if (!neigh.visited) {
                            neigh.visited = true;
                            q.enqueue(neigh);
                        }
                    }
                }
            }
        }
    }
}
//
//  Copyright 2009 iChemLabs, LLC.  All rights reserved.
//
//  $Revision: 2786 $
//  $Author: jat $
//  $LastChangedDate: 2010-08-12 19:50:43 -0400 (Thu, 12 Aug 2010) $
//
function RingFinder() {
    this.atoms = null;
    this.bonds = null;
    this.rings = null;
    return true;
}

RingFinder.prototype.reduce = function(molecule) {
    for (var i = 0, ii = molecule.atoms.length; i < ii; i++) {
        molecule.atoms[i].visited = false;
    }
    for (var i = 0, ii = molecule.bonds.length; i < ii; i++) {
        molecule.bonds[i].visited = false;
    }
    var cont = true;
    while (cont) {
        cont = false;
        for (var i = 0, ii = molecule.atoms.length; i < ii; i++) {
            var count = 0;
            var bond = null;
            for (var j = 0, jj = molecule.bonds.length; j < jj; j++) {
                if (molecule.bonds[j].contains(molecule.atoms[i]) && !molecule.bonds[j].visited) {
                    count++;
                    if (count == 2) {
                        break;
                    }
                    bond = molecule.bonds[j];
                }
            }
            if (count == 1) {
                cont = true;
                bond.visited = true;
                molecule.atoms[i].visited = true;
            }
        }
    }
    for (var i = 0, ii = molecule.atoms.length; i < ii; i++) {
        if (!molecule.atoms[i].visited) {
            this.atoms[this.atoms.length] = molecule.atoms[i];
        }
    }
    for (var i = 0, ii = molecule.bonds.length; i < ii; i++) {
        if (!molecule.bonds[i].visited) {
            this.bonds[this.bonds.length] = molecule.bonds[i];
        }
    }
    if (this.bonds.length == 0 && this.atoms.length != 0) {
        this.atoms = [];
    }
}
RingFinder.prototype.setMolecule = function(molecule) {
    this.atoms = [];
    this.bonds = [];
    this.rings = [];
    this.reduce(molecule);
    if (this.atoms.length > 2 && this.innerGetRings) {
        this.innerGetRings();
    }
}
RingFinder.prototype.fuse = function() {
    for (var i = 0, ii = this.rings.length; i < ii; i++) {
        for (var j = 0, jj = this.bonds.length; j < jj; j++) {
            if ($.inArray(this.bonds[j].a1, this.rings[i].atoms) != -1 && $.inArray(this.bonds[j].a2, this.rings[i].atoms) != -1) {
                this.rings[i].bonds[this.rings[i].bonds.length] = this.bonds[j];
            }
        }
    }
}
//
//  Copyright 2009 iChemLabs, LLC.  All rights reserved.
//
//  $Revision: 2786 $
//  $Author: jat $
//  $LastChangedDate: 2010-08-12 19:50:43 -0400 (Thu, 12 Aug 2010) $
//
function Finger(a, from) {
    this.atoms = [];
    if (from) {
        for (var i = 0, ii = from.atoms.length; i < ii; i++) {
            this.atoms[i] = from.atoms[i];
        }
    }
    this.atoms[this.atoms.length] = a;
    return true;
}

Finger.prototype.grow = function(bonds, blockers) {
    var last = this.atoms[this.atoms.length - 1];
    var neighs = [];
    for (var i = 0, ii = bonds.length; i < ii; i++) {
        if (bonds[i].contains(last)) {
            var neigh = bonds[i].getNeighbor(last);
            if ($.inArray(neigh, blockers) == -1) {
                neighs[neighs.length] = neigh;
            }
        }
    }
    var returning = [];
    for (var i = 0, ii = neighs.length; i < ii; i++) {
        returning[returning.length] = new Finger(neighs[i], this);
    }
    return returning;
}
Finger.prototype.check = function(bonds, finger, a) {
    //check that they dont contain similar parts
    for (var i = 0, ii = finger.atoms.length - 1; i < ii; i++) {
        if ($.inArray(finger.atoms[i], this.atoms) != -1) {
            return null;
        }
    }
    var ring = null;
    //check if fingers meet at tips
    if (finger.atoms[finger.atoms.length - 1] == this.atoms[this.atoms.length - 1]) {
        ring = new Ring();
        ring.atoms[0] = a;
        for (var i = 0, ii = this.atoms.length; i < ii; i++) {
            ring.atoms[ring.atoms.length] = this.atoms[i];
        }
        for (var i = finger.atoms.length - 2; i >= 0; i--) {
            ring.atoms[ring.atoms.length] = finger.atoms[i];
        }
    }
    else {
        //check if fingers meet at bond
        var endbonds = [];
        for (var i = 0, ii = bonds.length; i < ii; i++) {
            if (bonds[i].contains(finger.atoms[finger.atoms.length - 1])) {
                endbonds[endbonds.length] = bonds[i];
            }
        }
        for (var i = 0, ii = endbonds.length; i < ii; i++) {
            if ((finger.atoms.length == 1 || !endbonds[i].contains(finger.atoms[finger.atoms.length - 2])) && endbonds[i].contains(this.atoms[this.atoms.length - 1])) {
                ring = new Ring();
                ring.atoms[0] = a;
                for (var j = 0, jj = this.atoms.length; j < jj; j++) {
                    ring.atoms[ring.atoms.length] = this.atoms[j];
                }
                for (var j = finger.atoms.length - 1; j >= 0; j--) {
                    ring.atoms[ring.atoms.length] = finger.atoms[j];
                }
                break;
            }
        }
    }
    return ring;
}

var EULER_FACET_FINGER_BREAK = 5;

function EulerFacetRingFinder(molecule) {
    this.setMolecule(molecule);
    return true;
}

EulerFacetRingFinder.prototype = new RingFinder();

EulerFacetRingFinder.prototype.innerGetRings = function() {
    for (var i = 0, ii = this.atoms.length; i < ii; i++) {
        var neigh = [];
        for (var j = 0, jj = this.bonds.length; j < jj; j++) {
            if (this.bonds[j].contains(this.atoms[i])) {
                neigh[neigh.length] = this.bonds[j].getNeighbor(this.atoms[i]);
            }
        }
        for (var j = 0, jj = neigh.length; j < jj; j++) {
            //weird that i can't optimize this loop without breaking a test case...
            for (var k = j + 1; k < neigh.length; k++) {
                var fingers = [];
                fingers[0] = new Finger(neigh[j]);
                fingers[1] = new Finger(neigh[k]);
                var blockers = [];
                blockers[0] = this.atoms[i];
                for (var l = 0, ll = neigh.length; l < ll; l++) {
                    if (l != j && l != k) {
                        blockers[blockers.length] = neigh[l];
                    }
                }
                var found = [];
                //check for 3 membered ring
                var three = fingers[0].check(this.bonds, fingers[1], this.atoms[i]);
                if (three) {
                    found[0] = three;
                }
                while (found.length == 0 && fingers.length > 0 && fingers[0].atoms.length < EULER_FACET_FINGER_BREAK) {
                    var newfingers = [];
                    for (var l = 0, ll = fingers.length; l < ll; l++) {
                        var adding = fingers[l].grow(this.bonds, blockers);
                        for (var m = 0, mm = adding.length; m < mm; m++) {
                            newfingers[newfingers.length] = adding[m];
                        }
                    }
                    fingers = newfingers;
                    for (var l = 0, ll = fingers.length; l < ll; l++) {
                        for (var m = l + 1; m < ll; m++) {
                            var r = fingers[l].check(this.bonds, fingers[m], this.atoms[i]);
                            if (r) {
                                found[found.length] = r;
                            }
                        }
                    }
                    if (found.length == 0) {
                        var newBlockers = [];
                        for (var l = 0, ll = blockers.length; l < ll; l++) {
                            for (var m = 0, mm = this.bonds.length; m < mm; m++) {
                                if (this.bonds[m].contains(blockers[l])) {
                                    var neigh = this.bonds[m].getNeighbor(blockers[l]);
                                    if ($.inArray(neigh, blockers) == -1 && $.inArray(neigh, newBlockers) == -1) {
                                        newBlockers[newBlockers.length] = neigh;
                                    }
                                }
                            }
                        }
                        for (var l = 0, ll = newBlockers.length; l < ll; l++) {
                            blockers[blockers.length] = newBlockers[l];
                        }
                    }
                }
                if (found.length > 0) {
                    var use = null;
                    for (var l = 0, ll = found.length; l < ll; l++) {
                        if (!use || use.atoms.length > found[l].atoms.length) {
                            use = found[l];
                        }
                    }
                    var already = false;
                    for (var l = 0, ll = this.rings.length; l < ll; l++) {
                        var all = true;
                        for (var m = 0, mm = use.atoms.length; m < mm; m++) {
                            if ($.inArray(use.atoms[m], this.rings[l].atoms) == -1) {
                                all = false;
                                break;
                            }
                        }
                        if (all) {
                            already = true;
                            break;
                        }
                    }
                    if (!already) {
                        this.rings[this.rings.length] = use;
                    }
                }
            }
        }
    }
    this.fuse();
}
//
//  Copyright 2009 iChemLabs, LLC.  All rights reserved.
//
//  $Revision: 2778 $
//  $Author: kevin $
//  $LastChangedDate: 2010-08-12 16:54:03 -0400 (Thu, 12 Aug 2010) $
//

function Link(data) {
    this.data = data;
    this.next = null;
    return true;
}

Link.prototype.reverse = function(before) {
    if (this.next != null) {
        this.next.reverse(this);
    }
    this.next = before;
}
Link.prototype.getDataArray = function(array) {
    array[array.length] = this.data;
    if (this.next != null) {
        this.next.getDataArray(array);
    }
}
Link.prototype.count = function() {
    if (this.next == null) {
        return 1;
    }
    else {
        return 1 + this.next.count();
    }
}

function PGraphEdge(i1, i2) {
    if (i1 != null) {
        this.head = new Link(i1);
        this.head.next = new Link(i2);
    }
    return true;
}

PGraphEdge.prototype.getLast = function() {
    var hold = this.head;
    while (hold.next != null) {
        hold = hold.next;
    }
    return hold;
}
PGraphEdge.prototype.getCopy = function() {
    var copy = new PGraphEdge();
    var hold = this.head;
    var copyHold = new Link(hold.data);
    copy.head = copyHold;
    while (hold.next != null) {
        hold = hold.next;
        copyHold.next = new Link(hold.data);
        copyHold = copyHold.next;
    }
    return copy;
}
PGraphEdge.prototype.merge = function(other) {
    var newPGE = this.getCopy();
    var same = this.head.data;
    if (other.head.data != same && other.getLast().data != same) {
        same = this.getLast().data;
    }
    var otherBetweens = other.getCopy();
    if (newPGE.head.data == same) {
        newPGE.reverse();
    }
    if (other.head.data != same) {
        otherBetweens.reverse();
    }
    otherBetweens.head = otherBetweens.head.next;
    newPGE.getLast().next = otherBetweens.head;
    return newPGE;
}
PGraphEdge.prototype.connectsTo = function(index) {
    return this.head.data == index || this.getLast().data == index;
}
PGraphEdge.prototype.isCycle = function() {
    return this.head.data == this.getLast().data;
}
PGraphEdge.prototype.size = function() {
    return this.head.count();
}
PGraphEdge.prototype.reverse = function() {
    var last = this.getLast();
    this.head.reverse(null);
    this.head = last;
}

function indexOf(array, item) {
    for (var i = 0, ii = array.length; i < ii; i++) {
        if (array[i] == item) {
            return i;
        }
    }
    ;
    return -1;
}

function HanserRingFinder(molecule) {
    this.setMolecule(molecule);
    return true;
}

HanserRingFinder.prototype = new RingFinder();

HanserRingFinder.prototype.innerGetRings = function() {
    var pGraphEdges = [];
    var pGraphRings = [];
    for (var i = 0, ii = this.bonds.length; i < ii; i++) {
        pGraphEdges[pGraphEdges.length] = new PGraphEdge(indexOf(this.atoms, this.bonds[i].a1), indexOf(this.atoms, this.bonds[i].a2));
    }
    while (pGraphEdges.length > 0) {
        var counts = [];
        for (var i = 0, ii = this.atoms.length; i < ii; i++) {
            counts[i] = 0;
        }
        ;
        for (var i = 0, ii = pGraphEdges.length; i < ii; i++) {
            counts[pGraphEdges[i].head.data]++;
            counts[pGraphEdges[i].getLast().data]++;
        }
        ;
        var pick = -1;
        var min = Infinity;
        for (var i = 0, ii = counts.length; i < ii; i++) {
            if (counts[i] > 0 && counts[i] < min) {
                min = counts[i];
                pick = i;
            }
        }
        var removing = [];
        var keep = [];
        for (var i = 0, ii = pGraphEdges.length; i < ii; i++) {
            if (pGraphEdges[i].connectsTo(pick)) {
                removing[removing.length] = pGraphEdges[i];
            }
            else {
                keep[keep.length] = pGraphEdges[i];
            }
        }
        ;
        pGraphEdges = keep;
        for (var i = 0, ii = removing.length; i < ii; i++) {
            for (var j = i + 1; j < ii; j++) {
                var one = removing[i];
                var two = removing[j];
                var newPGE = one.merge(two);
                var overlap = false;
                var hold = newPGE.head.next;
                while (!overlap && hold != null) {
                    var hold2 = hold.next;
                    while (!overlap && hold2 != null) {
                        if (hold2.data == hold.data) {
                            overlap = true;
                        }
                        hold2 = hold2.next;
                    }
                    hold = hold.next;
                }
                if (!overlap) {
                    if (newPGE.isCycle()) {
                        pGraphRings[pGraphRings.length] = newPGE;
                    }
                    else {
                        pGraphEdges[pGraphEdges.length] = newPGE;
                    }
                }
            }
        }
    }
    var ringsI = [];
    for (var i = 0, ii = pGraphRings.length; i < ii; i++) {
        ringsI[i] = [];
        pGraphRings[i].head.getDataArray(ringsI[i]);
    }
    //build rings from pGraphs
    for (var i = 0, ii = ringsI.length; i < ii; i++) {
        var ring = new Ring();
        for (var j = 0, jj = ringsI[i].length - 1; j < jj; j++) {
            ring.atoms[j] = this.atoms[ringsI[i][j]];
        }
        for (var j = 0, jj = ring.atoms.length - 1; j < jj; j++) {
            for (var k = 0, kk = this.bonds.length; k < kk; k++) {
                if (this.bonds[k].contains(ring.atoms[j]) && this.bonds[k].contains(ring.atoms[j + 1])) {
                    ring.bonds[ring.bonds.length] = this.bonds[k];
                    break;
                }
            }
        }
        for (var k = 0, kk = this.bonds.length; k < kk; k++) {
            if (this.bonds[k].contains(ring.atoms[0]) && this.bonds[k].contains(ring.atoms[ring.atoms.length - 1])) {
                ring.bonds[ring.bonds.length] = this.bonds[k];
                break;
            }
        }
        this.rings[i] = ring;
    }
}
//
//  Copyright 2009 iChemLabs, LLC.  All rights reserved.
//
//  $Revision: 2786 $
//  $Author: jat $
//  $LastChangedDate: 2010-08-12 19:50:43 -0400 (Thu, 12 Aug 2010) $
//
function SSSRFinder(molecule) {
    this.rings = [];
    if (molecule.atoms.length > 0) {
        var frerejacqueNumber = new FrerejacqueNumberCounter(molecule).value;
        var all = new EulerFacetRingFinder(molecule).rings;
        all.sort(function(a, b) {
            return a.atoms.length - b.atoms.length;
        });
        for (var i = 0,ii = molecule.bonds.length; i < ii; i++) {
            molecule.bonds[i].visited = false;
        }
        for (var i = 0,ii = all.length; i < ii; i++) {
            var use = false;
            for (var j = 0,jj = all[i].bonds.length; j < jj; j++) {
                if (!all[i].bonds[j].visited) {
                    use = true;
                    break;
                }
            }
            if (use) {
                for (var j = 0,jj = all[i].bonds.length; j < jj; j++) {
                    all[i].bonds[j].visited = true;
                }
                this.rings[this.rings.length] = all[i];
            }
            if (this.rings.length == frerejacqueNumber) {
                break;
            }
        }
    }
    return true;
}
//
//  Copyright 2009 iChemLabs, LLC.  All rights reserved.
//
//  $Revision: 2786 $
//  $Author: jat $
//  $LastChangedDate: 2010-08-12 19:50:43 -0400 (Thu, 12 Aug 2010) $
//
function Person(symbol, name, atomicNumber) {
    this.symbol = symbol;
    this.name = name;
    this.atomicNumber = atomicNumber;
    return true;
}//
//  Copyright 2009 iChemLabs, LLC.  All rights reserved.
//
//  $Revision: 2777 $
//  $Author: kevin $
//  $LastChangedDate: 2010-08-12 16:48:33 -0400 (Thu, 12 Aug 2010) $
//

//the ELEMENT array
var ELEMENT = [];
ELEMENT['H'] = new Person('H', 'Hydrogen', 1);
ELEMENT['He'] = new Person('He', 'Helium', 2);
ELEMENT['Li'] = new Person('Li', 'Lithium', 3);
ELEMENT['Be'] = new Person('Be', 'Beryllium', 4);
ELEMENT['B'] = new Person('B', 'Boron', 5);
ELEMENT['C'] = new Person('C', 'Carbon', 6);
ELEMENT['N'] = new Person('N', 'Nitrogen', 7);
ELEMENT['O'] = new Person('O', 'Oxygen', 8);
ELEMENT['F'] = new Person('F', 'Fluorine', 9);
ELEMENT['Ne'] = new Person('Ne', 'Neon', 10);
ELEMENT['Na'] = new Person('Na', 'Sodium', 11);
ELEMENT['Mg'] = new Person('Mg', 'Magnesium', 12);
ELEMENT['Al'] = new Person('Al', 'Aluminum', 13);
ELEMENT['Si'] = new Person('Si', 'Silicon', 14);
ELEMENT['P'] = new Person('P', 'Phosphorus', 15);
ELEMENT['S'] = new Person('S', 'Sulfur', 16);
ELEMENT['Cl'] = new Person('Cl', 'Chlorine', 17);
ELEMENT['Ar'] = new Person('Ar', 'Argon', 18);
ELEMENT['K'] = new Person('K', 'Potassium', 19);
ELEMENT['Ca'] = new Person('Ca', 'Calcium', 20);
ELEMENT['Sc'] = new Person('Sc', 'Scandium', 21);
ELEMENT['Ti'] = new Person('Ti', 'Titanium', 22);
ELEMENT['V'] = new Person('V', 'Vanadium', 23);
ELEMENT['Cr'] = new Person('Cr', 'Chromium', 24);
ELEMENT['Mn'] = new Person('Mn', 'Manganese', 25);
ELEMENT['Fe'] = new Person('Fe', 'Iron', 26);
ELEMENT['Co'] = new Person('Co', 'Cobalt', 27);
ELEMENT['Ni'] = new Person('Ni', 'Nickel', 28);
ELEMENT['Cu'] = new Person('Cu', 'Copper', 29);
ELEMENT['Zn'] = new Person('Zn', 'Zinc', 30);
ELEMENT['Ga'] = new Person('Ga', 'Gallium', 31);
ELEMENT['Ge'] = new Person('Ge', 'Germanium', 32);
ELEMENT['As'] = new Person('As', 'Arsenic', 33);
ELEMENT['Se'] = new Person('Se', 'Selenium', 34);
ELEMENT['Br'] = new Person('Br', 'Bromine', 35);
ELEMENT['Kr'] = new Person('Kr', 'Krypton', 36);
ELEMENT['Rb'] = new Person('Rb', 'Rubidium', 37);
ELEMENT['Sr'] = new Person('Sr', 'Strontium', 38);
ELEMENT['Y'] = new Person('Y', 'Yttrium', 39);
ELEMENT['Zr'] = new Person('Zr', 'Zirconium', 40);
ELEMENT['Nb'] = new Person('Nb', 'Niobium', 41);
ELEMENT['Mo'] = new Person('Mo', 'Molybdenum', 42);
ELEMENT['Tc'] = new Person('Tc', 'Technetium', 43);
ELEMENT['Ru'] = new Person('Ru', 'Ruthenium', 44);
ELEMENT['Rh'] = new Person('Rh', 'Rhodium', 45);
ELEMENT['Pd'] = new Person('Pd', 'Palladium', 46);
ELEMENT['Ag'] = new Person('Ag', 'Silver', 47);
ELEMENT['Cd'] = new Person('Cd', 'Cadmium', 48);
ELEMENT['In'] = new Person('In', 'Indium', 49);
ELEMENT['Sn'] = new Person('Sn', 'Tin', 50);
ELEMENT['Sb'] = new Person('Sb', 'Antimony', 51);
ELEMENT['Te'] = new Person('Te', 'Tellurium', 52);
ELEMENT['I'] = new Person('I', 'Iodine', 53);
ELEMENT['Xe'] = new Person('Xe', 'Xenon', 54);
ELEMENT['Cs'] = new Person('Cs', 'Cesium', 55);
ELEMENT['Ba'] = new Person('Ba', 'Barium', 56);
ELEMENT['La'] = new Person('La', 'Lanthanum', 57);
ELEMENT['Ce'] = new Person('Ce', 'Cerium', 58);
ELEMENT['Pr'] = new Person('Pr', 'Praseodymium', 59);
ELEMENT['Nd'] = new Person('Nd', 'Neodymium', 60);
ELEMENT['Pm'] = new Person('Pm', 'Promethium', 61);
ELEMENT['Sm'] = new Person('Sm', 'Samarium', 62);
ELEMENT['Eu'] = new Person('Eu', 'Europium', 63);
ELEMENT['Gd'] = new Person('Gd', 'Gadolinium', 64);
ELEMENT['Tb'] = new Person('Tb', 'Terbium', 65);
ELEMENT['Dy'] = new Person('Dy', 'Dysprosium', 66);
ELEMENT['Ho'] = new Person('Ho', 'Holmium', 67);
ELEMENT['Er'] = new Person('Er', 'Erbium', 68);
ELEMENT['Tm'] = new Person('Tm', 'Thulium', 69);
ELEMENT['Yb'] = new Person('Yb', 'Ytterbium', 70);
ELEMENT['Lu'] = new Person('Lu', 'Lutetium', 71);
ELEMENT['Hf'] = new Person('Hf', 'Hafnium', 72);
ELEMENT['Ta'] = new Person('Ta', 'Tantalum', 73);
ELEMENT['W'] = new Person('W', 'Tungsten', 74);
ELEMENT['Re'] = new Person('Re', 'Rhenium', 75);
ELEMENT['Os'] = new Person('Os', 'Osmium', 76);
ELEMENT['Ir'] = new Person('Ir', 'Iridium', 77);
ELEMENT['Pt'] = new Person('Pt', 'Platinum', 78);
ELEMENT['Au'] = new Person('Au', 'Gold', 79);
ELEMENT['Hg'] = new Person('Hg', 'Mercury', 80);
ELEMENT['Tl'] = new Person('Tl', 'Thallium', 81);
ELEMENT['Pb'] = new Person('Pb', 'Lead', 82);
ELEMENT['Bi'] = new Person('Bi', 'Bismuth', 83);
ELEMENT['Po'] = new Person('Po', 'Polonium', 84);
ELEMENT['At'] = new Person('At', 'Astatine', 85);
ELEMENT['Rn'] = new Person('Rn', 'Radon', 86);
ELEMENT['Fr'] = new Person('Fr', 'Francium', 87);
ELEMENT['Ra'] = new Person('Ra', 'Radium', 88);
ELEMENT['Ac'] = new Person('Ac', 'Actinium', 89);
ELEMENT['Th'] = new Person('Th', 'Thorium', 90);
ELEMENT['Pa'] = new Person('Pa', 'Protactinium', 91);
ELEMENT['U'] = new Person('U', 'Uranium', 92);
ELEMENT['Np'] = new Person('Np', 'Neptunium', 93);
ELEMENT['Pu'] = new Person('Pu', 'Plutonium', 94);
ELEMENT['Am'] = new Person('Am', 'Americium', 95);
ELEMENT['Cm'] = new Person('Cm', 'Curium', 96);
ELEMENT['Bk'] = new Person('Bk', 'Berkelium', 97);
ELEMENT['Cf'] = new Person('Cf', 'Californium', 98);
ELEMENT['Es'] = new Person('Es', 'Einsteinium', 99);
ELEMENT['Fm'] = new Person('Fm', 'Fermium', 100);
ELEMENT['Md'] = new Person('Md', 'Mendelevium', 101);
ELEMENT['No'] = new Person('No', 'Nobelium', 102);
ELEMENT['Lr'] = new Person('Lr', 'Lawrencium', 103);
ELEMENT['Rf'] = new Person('Rf', 'Rutherfordium', 104);
ELEMENT['Db'] = new Person('Db', 'Dubnium', 105);
ELEMENT['Sg'] = new Person('Sg', 'Seaborgium', 106);
ELEMENT['Bh'] = new Person('Bh', 'Bohrium', 107);
ELEMENT['Hs'] = new Person('Hs', 'Hassium', 108);
ELEMENT['Mt'] = new Person('Mt', 'Meitnerium', 109);
ELEMENT['Ds'] = new Person('Ds', 'Darmstadtium', 110);
ELEMENT['Rg'] = new Person('Rg', 'Roentgenium', 111);
ELEMENT['Cn'] = new Person('Cn', 'Copernicium', 112);
ELEMENT['Uut'] = new Person('Uut', 'Ununtrium', 113);
ELEMENT['Uuq'] = new Person('Uuq', 'Ununquadium', 114);
ELEMENT['Uup'] = new Person('Uup', 'Ununpentium', 115);
ELEMENT['Uuh'] = new Person('Uuh', 'Ununhexium', 116);
ELEMENT['Uus'] = new Person('Uus', 'Ununseptium', 117);
ELEMENT['Uuo'] = new Person('Uuo', 'Ununoctium', 118);

//all symbols
var symbols = ['H','He','Li','Be','B','C','N','O','F','Ne','Na','Mg','Al','Si','P','S','Cl','Ar','K','Ca','Sc','Ti','V','Cr','Mn','Fe','Co','Ni','Cu','Zn','Ga','Ge','As','Se','Br','Kr','Rb','Sr','Y','Zr','Nb','Mo','Tc','Ru','Rh','Pd','Ag','Cd','In','Sn','Sb','Te','I','Xe','Cs','Ba','La','Ce','Pr','Nd','Pm','Sm','Eu','Gd','Tb','Dy','Ho','Er','Tm','Yb','Lu','Hf','Ta','W','Re','Os','Ir','Pt','Au','Hg','Tl','Pb','Bi','Po','At','Rn','Fr','Ra','Ac','Th','Pa','U','Np','Pu','Am','Cm','Bk','Cf','Es','Fm','Md','No','Lr','Rf','Db','Sg','Bh','Hs','Mt','Ds','Rg','Cn','Uut','Uuq','Uup','Uuh','Uus','Uuo'];

//set up jmol colors
ELEMENT['H'].jmolColor = '#FFFFFF';
ELEMENT['He'].jmolColor = '#D9FFFF';
ELEMENT['Li'].jmolColor = '#CC80FF';
ELEMENT['Be'].jmolColor = '#C2FF00';
ELEMENT['B'].jmolColor = '#FFB5B5';
ELEMENT['C'].jmolColor = '#909090';
ELEMENT['N'].jmolColor = '#3050F8';
ELEMENT['O'].jmolColor = '#FF0D0D';
ELEMENT['F'].jmolColor = '#90E050';
ELEMENT['Ne'].jmolColor = '#B3E3F5';
ELEMENT['Na'].jmolColor = '#AB5CF2';
ELEMENT['Mg'].jmolColor = '#8AFF00';
ELEMENT['Al'].jmolColor = '#BFA6A6';
ELEMENT['Si'].jmolColor = '#F0C8A0';
ELEMENT['P'].jmolColor = '#FF8000';
ELEMENT['S'].jmolColor = '#FFFF30';
ELEMENT['Cl'].jmolColor = '#1FF01F';
ELEMENT['Ar'].jmolColor = '#80D1E3';
ELEMENT['K'].jmolColor = '#8F40D4';
ELEMENT['Ca'].jmolColor = '#3DFF00';
ELEMENT['Sc'].jmolColor = '#E6E6E6';
ELEMENT['Ti'].jmolColor = '#BFC2C7';
ELEMENT['V'].jmolColor = '#A6A6AB';
ELEMENT['Cr'].jmolColor = '#8A99C7';
ELEMENT['Mn'].jmolColor = '#9C7AC7';
ELEMENT['Fe'].jmolColor = '#E06633';
ELEMENT['Co'].jmolColor = '#F090A0';
ELEMENT['Ni'].jmolColor = '#50D050';
ELEMENT['Cu'].jmolColor = '#C88033';
ELEMENT['Zn'].jmolColor = '#7D80B0';
ELEMENT['Ga'].jmolColor = '#C28F8F';
ELEMENT['Ge'].jmolColor = '#668F8F';
ELEMENT['As'].jmolColor = '#BD80E3';
ELEMENT['Se'].jmolColor = '#FFA100';
ELEMENT['Br'].jmolColor = '#A62929';
ELEMENT['Kr'].jmolColor = '#5CB8D1';
ELEMENT['Rb'].jmolColor = '#702EB0';
ELEMENT['Sr'].jmolColor = '#00FF00';
ELEMENT['Y'].jmolColor = '#94FFFF';
ELEMENT['Zr'].jmolColor = '#94E0E0';
ELEMENT['Nb'].jmolColor = '#73C2C9';
ELEMENT['Mo'].jmolColor = '#54B5B5';
ELEMENT['Tc'].jmolColor = '#3B9E9E';
ELEMENT['Ru'].jmolColor = '#248F8F';
ELEMENT['Rh'].jmolColor = '#0A7D8C';
ELEMENT['Pd'].jmolColor = '#006985';
ELEMENT['Ag'].jmolColor = '#C0C0C0';
ELEMENT['Cd'].jmolColor = '#FFD98F';
ELEMENT['In'].jmolColor = '#A67573';
ELEMENT['Sn'].jmolColor = '#668080';
ELEMENT['Sb'].jmolColor = '#9E63B5';
ELEMENT['Te'].jmolColor = '#D47A00';
ELEMENT['I'].jmolColor = '#940094';
ELEMENT['Xe'].jmolColor = '#429EB0';
ELEMENT['Cs'].jmolColor = '#57178F';
ELEMENT['Ba'].jmolColor = '#00C900';
ELEMENT['La'].jmolColor = '#70D4FF';
ELEMENT['Ce'].jmolColor = '#FFFFC7';
ELEMENT['Pr'].jmolColor = '#D9FFC7';
ELEMENT['Nd'].jmolColor = '#C7FFC7';
ELEMENT['Pm'].jmolColor = '#A3FFC7';
ELEMENT['Sm'].jmolColor = '#8FFFC7';
ELEMENT['Eu'].jmolColor = '#61FFC7';
ELEMENT['Gd'].jmolColor = '#45FFC7';
ELEMENT['Tb'].jmolColor = '#30FFC7';
ELEMENT['Dy'].jmolColor = '#1FFFC7';
ELEMENT['Ho'].jmolColor = '#00FF9C';
ELEMENT['Er'].jmolColor = '#00E675';
ELEMENT['Tm'].jmolColor = '#00D452';
ELEMENT['Yb'].jmolColor = '#00BF38';
ELEMENT['Lu'].jmolColor = '#00AB24';
ELEMENT['Hf'].jmolColor = '#4DC2FF';
ELEMENT['Ta'].jmolColor = '#4DA6FF';
ELEMENT['W'].jmolColor = '#2194D6';
ELEMENT['Re'].jmolColor = '#267DAB';
ELEMENT['Os'].jmolColor = '#266696';
ELEMENT['Ir'].jmolColor = '#175487';
ELEMENT['Pt'].jmolColor = '#D0D0E0';
ELEMENT['Au'].jmolColor = '#FFD123';
ELEMENT['Hg'].jmolColor = '#B8B8D0';
ELEMENT['Tl'].jmolColor = '#A6544D';
ELEMENT['Pb'].jmolColor = '#575961';
ELEMENT['Bi'].jmolColor = '#9E4FB5';
ELEMENT['Po'].jmolColor = '#AB5C00';
ELEMENT['At'].jmolColor = '#754F45';
ELEMENT['Rn'].jmolColor = '#428296';
ELEMENT['Fr'].jmolColor = '#420066';
ELEMENT['Ra'].jmolColor = '#007D00';
ELEMENT['Ac'].jmolColor = '#70ABFA';
ELEMENT['Th'].jmolColor = '#00BAFF';
ELEMENT['Pa'].jmolColor = '#00A1FF';
ELEMENT['U'].jmolColor = '#008FFF';
ELEMENT['Np'].jmolColor = '#0080FF';
ELEMENT['Pu'].jmolColor = '#006BFF';
ELEMENT['Am'].jmolColor = '#545CF2';
ELEMENT['Cm'].jmolColor = '#785CE3';
ELEMENT['Bk'].jmolColor = '#8A4FE3';
ELEMENT['Cf'].jmolColor = '#A136D4';
ELEMENT['Es'].jmolColor = '#B31FD4';
ELEMENT['Fm'].jmolColor = '#B31FBA';
ELEMENT['Md'].jmolColor = '#B30DA6';
ELEMENT['No'].jmolColor = '#BD0D87';
ELEMENT['Lr'].jmolColor = '#C70066';
ELEMENT['Rf'].jmolColor = '#CC0059';
ELEMENT['Db'].jmolColor = '#D1004F';
ELEMENT['Sg'].jmolColor = '#D90045';
ELEMENT['Bh'].jmolColor = '#E00038';
ELEMENT['Hs'].jmolColor = '#E6002E';
ELEMENT['Mt'].jmolColor = '#EB0026';
ELEMENT['Ds'].jmolColor = '#000000';
ELEMENT['Rg'].jmolColor = '#000000';
ELEMENT['Cn'].jmolColor = '#000000';
ELEMENT['Uut'].jmolColor = '#000000';
ELEMENT['Uuq'].jmolColor = '#000000';
ELEMENT['Uup'].jmolColor = '#000000';
ELEMENT['Uuh'].jmolColor = '#000000';
ELEMENT['Uus'].jmolColor = '#000000';
ELEMENT['Uuo'].jmolColor = '#000000';

//set up covalent radii
ELEMENT['H'].covalentRadius = 0.31;
ELEMENT['He'].covalentRadius = 0.28;
ELEMENT['Li'].covalentRadius = 1.28;
ELEMENT['Be'].covalentRadius = 0.96;
ELEMENT['B'].covalentRadius = 0.84;
ELEMENT['C'].covalentRadius = 0.76;
ELEMENT['N'].covalentRadius = 0.71;
ELEMENT['O'].covalentRadius = 0.66;
ELEMENT['F'].covalentRadius = 0.57;
ELEMENT['Ne'].covalentRadius = 0.58;
ELEMENT['Na'].covalentRadius = 1.66;
ELEMENT['Mg'].covalentRadius = 1.41;
ELEMENT['Al'].covalentRadius = 1.21;
ELEMENT['Si'].covalentRadius = 1.11;
ELEMENT['P'].covalentRadius = 1.07;
ELEMENT['S'].covalentRadius = 1.05;
ELEMENT['Cl'].covalentRadius = 1.02;
ELEMENT['Ar'].covalentRadius = 1.06;
ELEMENT['K'].covalentRadius = 2.03;
ELEMENT['Ca'].covalentRadius = 1.76;
ELEMENT['Sc'].covalentRadius = 1.7;
ELEMENT['Ti'].covalentRadius = 1.6;
ELEMENT['V'].covalentRadius = 1.53;
ELEMENT['Cr'].covalentRadius = 1.39;
ELEMENT['Mn'].covalentRadius = 1.39;
ELEMENT['Fe'].covalentRadius = 1.32;
ELEMENT['Co'].covalentRadius = 1.26;
ELEMENT['Ni'].covalentRadius = 1.24;
ELEMENT['Cu'].covalentRadius = 1.32;
ELEMENT['Zn'].covalentRadius = 1.22;
ELEMENT['Ga'].covalentRadius = 1.22;
ELEMENT['Ge'].covalentRadius = 1.2;
ELEMENT['As'].covalentRadius = 1.19;
ELEMENT['Se'].covalentRadius = 1.2;
ELEMENT['Br'].covalentRadius = 1.2;
ELEMENT['Kr'].covalentRadius = 1.16;
ELEMENT['Rb'].covalentRadius = 2.2;
ELEMENT['Sr'].covalentRadius = 1.95;
ELEMENT['Y'].covalentRadius = 1.9;
ELEMENT['Zr'].covalentRadius = 1.75;
ELEMENT['Nb'].covalentRadius = 1.64;
ELEMENT['Mo'].covalentRadius = 1.54;
ELEMENT['Tc'].covalentRadius = 1.47;
ELEMENT['Ru'].covalentRadius = 1.46;
ELEMENT['Rh'].covalentRadius = 1.42;
ELEMENT['Pd'].covalentRadius = 1.39;
ELEMENT['Ag'].covalentRadius = 1.45;
ELEMENT['Cd'].covalentRadius = 1.44;
ELEMENT['In'].covalentRadius = 1.42;
ELEMENT['Sn'].covalentRadius = 1.39;
ELEMENT['Sb'].covalentRadius = 1.39;
ELEMENT['Te'].covalentRadius = 1.38;
ELEMENT['I'].covalentRadius = 1.39;
ELEMENT['Xe'].covalentRadius = 1.4;
ELEMENT['Cs'].covalentRadius = 2.44;
ELEMENT['Ba'].covalentRadius = 2.15;
ELEMENT['La'].covalentRadius = 2.07;
ELEMENT['Ce'].covalentRadius = 2.04;
ELEMENT['Pr'].covalentRadius = 2.03;
ELEMENT['Nd'].covalentRadius = 2.01;
ELEMENT['Pm'].covalentRadius = 1.99;
ELEMENT['Sm'].covalentRadius = 1.98;
ELEMENT['Eu'].covalentRadius = 1.98;
ELEMENT['Gd'].covalentRadius = 1.96;
ELEMENT['Tb'].covalentRadius = 1.94;
ELEMENT['Dy'].covalentRadius = 1.92;
ELEMENT['Ho'].covalentRadius = 1.92;
ELEMENT['Er'].covalentRadius = 1.89;
ELEMENT['Tm'].covalentRadius = 1.9;
ELEMENT['Yb'].covalentRadius = 1.87;
ELEMENT['Lu'].covalentRadius = 1.87;
ELEMENT['Hf'].covalentRadius = 1.75;
ELEMENT['Ta'].covalentRadius = 1.7;
ELEMENT['W'].covalentRadius = 1.62;
ELEMENT['Re'].covalentRadius = 1.51;
ELEMENT['Os'].covalentRadius = 1.44;
ELEMENT['Ir'].covalentRadius = 1.41;
ELEMENT['Pt'].covalentRadius = 1.36;
ELEMENT['Au'].covalentRadius = 1.36;
ELEMENT['Hg'].covalentRadius = 1.32;
ELEMENT['Tl'].covalentRadius = 1.45;
ELEMENT['Pb'].covalentRadius = 1.46;
ELEMENT['Bi'].covalentRadius = 1.48;
ELEMENT['Po'].covalentRadius = 1.4;
ELEMENT['At'].covalentRadius = 1.5;
ELEMENT['Rn'].covalentRadius = 1.5;
ELEMENT['Fr'].covalentRadius = 2.6;
ELEMENT['Ra'].covalentRadius = 2.21;
ELEMENT['Ac'].covalentRadius = 2.15;
ELEMENT['Th'].covalentRadius = 2.06;
ELEMENT['Pa'].covalentRadius = 2.0;
ELEMENT['U'].covalentRadius = 1.96;
ELEMENT['Np'].covalentRadius = 1.9;
ELEMENT['Pu'].covalentRadius = 1.87;
ELEMENT['Am'].covalentRadius = 1.8;
ELEMENT['Cm'].covalentRadius = 1.69;
ELEMENT['Bk'].covalentRadius = 0.0;
ELEMENT['Cf'].covalentRadius = 0.0;
ELEMENT['Es'].covalentRadius = 0.0;
ELEMENT['Fm'].covalentRadius = 0.0;
ELEMENT['Md'].covalentRadius = 0.0;
ELEMENT['No'].covalentRadius = 0.0;
ELEMENT['Lr'].covalentRadius = 0.0;
ELEMENT['Rf'].covalentRadius = 0.0;
ELEMENT['Db'].covalentRadius = 0.0;
ELEMENT['Sg'].covalentRadius = 0.0;
ELEMENT['Bh'].covalentRadius = 0.0;
ELEMENT['Hs'].covalentRadius = 0.0;
ELEMENT['Mt'].covalentRadius = 0.0;
ELEMENT['Ds'].covalentRadius = 0.0;
ELEMENT['Rg'].covalentRadius = 0.0;
ELEMENT['Cn'].covalentRadius = 0.0;
ELEMENT['Uut'].covalentRadius = 0.0;
ELEMENT['Uuq'].covalentRadius = 0.0;
ELEMENT['Uup'].covalentRadius = 0.0;
ELEMENT['Uuh'].covalentRadius = 0.0;
ELEMENT['Uus'].covalentRadius = 0.0;
ELEMENT['Uuo'].covalentRadius = 0.0;

//set up vdW radii
ELEMENT['H'].vdWRadius = 1.2;
ELEMENT['He'].vdWRadius = 1.4;
ELEMENT['Li'].vdWRadius = 1.82;
ELEMENT['Be'].vdWRadius = 0.0;
ELEMENT['B'].vdWRadius = 0.0;
ELEMENT['C'].vdWRadius = 1.7;
ELEMENT['N'].vdWRadius = 1.55;
ELEMENT['O'].vdWRadius = 1.52;
ELEMENT['F'].vdWRadius = 1.47;
ELEMENT['Ne'].vdWRadius = 1.54;
ELEMENT['Na'].vdWRadius = 2.27;
ELEMENT['Mg'].vdWRadius = 1.73;
ELEMENT['Al'].vdWRadius = 0.0;
ELEMENT['Si'].vdWRadius = 2.1;
ELEMENT['P'].vdWRadius = 1.8;
ELEMENT['S'].vdWRadius = 1.8;
ELEMENT['Cl'].vdWRadius = 1.75;
ELEMENT['Ar'].vdWRadius = 1.88;
ELEMENT['K'].vdWRadius = 2.75;
ELEMENT['Ca'].vdWRadius = 0.0;
ELEMENT['Sc'].vdWRadius = 0.0;
ELEMENT['Ti'].vdWRadius = 0.0;
ELEMENT['V'].vdWRadius = 0.0;
ELEMENT['Cr'].vdWRadius = 0.0;
ELEMENT['Mn'].vdWRadius = 0.0;
ELEMENT['Fe'].vdWRadius = 0.0;
ELEMENT['Co'].vdWRadius = 0.0;
ELEMENT['Ni'].vdWRadius = 1.63;
ELEMENT['Cu'].vdWRadius = 1.4;
ELEMENT['Zn'].vdWRadius = 1.39;
ELEMENT['Ga'].vdWRadius = 1.87;
ELEMENT['Ge'].vdWRadius = 0.0;
ELEMENT['As'].vdWRadius = 1.85;
ELEMENT['Se'].vdWRadius = 1.9;
ELEMENT['Br'].vdWRadius = 1.85;
ELEMENT['Kr'].vdWRadius = 2.02;
ELEMENT['Rb'].vdWRadius = 0.0;
ELEMENT['Sr'].vdWRadius = 0.0;
ELEMENT['Y'].vdWRadius = 0.0;
ELEMENT['Zr'].vdWRadius = 0.0;
ELEMENT['Nb'].vdWRadius = 0.0;
ELEMENT['Mo'].vdWRadius = 0.0;
ELEMENT['Tc'].vdWRadius = 0.0;
ELEMENT['Ru'].vdWRadius = 0.0;
ELEMENT['Rh'].vdWRadius = 0.0;
ELEMENT['Pd'].vdWRadius = 1.63;
ELEMENT['Ag'].vdWRadius = 1.72;
ELEMENT['Cd'].vdWRadius = 1.58;
ELEMENT['In'].vdWRadius = 1.93;
ELEMENT['Sn'].vdWRadius = 2.17;
ELEMENT['Sb'].vdWRadius = 0.0;
ELEMENT['Te'].vdWRadius = 2.06;
ELEMENT['I'].vdWRadius = 1.98;
ELEMENT['Xe'].vdWRadius = 2.16;
ELEMENT['Cs'].vdWRadius = 0.0;
ELEMENT['Ba'].vdWRadius = 0.0;
ELEMENT['La'].vdWRadius = 0.0;
ELEMENT['Ce'].vdWRadius = 0.0;
ELEMENT['Pr'].vdWRadius = 0.0;
ELEMENT['Nd'].vdWRadius = 0.0;
ELEMENT['Pm'].vdWRadius = 0.0;
ELEMENT['Sm'].vdWRadius = 0.0;
ELEMENT['Eu'].vdWRadius = 0.0;
ELEMENT['Gd'].vdWRadius = 0.0;
ELEMENT['Tb'].vdWRadius = 0.0;
ELEMENT['Dy'].vdWRadius = 0.0;
ELEMENT['Ho'].vdWRadius = 0.0;
ELEMENT['Er'].vdWRadius = 0.0;
ELEMENT['Tm'].vdWRadius = 0.0;
ELEMENT['Yb'].vdWRadius = 0.0;
ELEMENT['Lu'].vdWRadius = 0.0;
ELEMENT['Hf'].vdWRadius = 0.0;
ELEMENT['Ta'].vdWRadius = 0.0;
ELEMENT['W'].vdWRadius = 0.0;
ELEMENT['Re'].vdWRadius = 0.0;
ELEMENT['Os'].vdWRadius = 0.0;
ELEMENT['Ir'].vdWRadius = 0.0;
ELEMENT['Pt'].vdWRadius = 1.75;
ELEMENT['Au'].vdWRadius = 1.66;
ELEMENT['Hg'].vdWRadius = 1.55;
ELEMENT['Tl'].vdWRadius = 1.96;
ELEMENT['Pb'].vdWRadius = 2.02;
ELEMENT['Bi'].vdWRadius = 0.0;
ELEMENT['Po'].vdWRadius = 0.0;
ELEMENT['At'].vdWRadius = 0.0;
ELEMENT['Rn'].vdWRadius = 0.0;
ELEMENT['Fr'].vdWRadius = 0.0;
ELEMENT['Ra'].vdWRadius = 0.0;
ELEMENT['Ac'].vdWRadius = 0.0;
ELEMENT['Th'].vdWRadius = 0.0;
ELEMENT['Pa'].vdWRadius = 0.0;
ELEMENT['U'].vdWRadius = 1.86;
ELEMENT['Np'].vdWRadius = 0.0;
ELEMENT['Pu'].vdWRadius = 0.0;
ELEMENT['Am'].vdWRadius = 0.0;
ELEMENT['Cm'].vdWRadius = 0.0;
ELEMENT['Bk'].vdWRadius = 0.0;
ELEMENT['Cf'].vdWRadius = 0.0;
ELEMENT['Es'].vdWRadius = 0.0;
ELEMENT['Fm'].vdWRadius = 0.0;
ELEMENT['Md'].vdWRadius = 0.0;
ELEMENT['No'].vdWRadius = 0.0;
ELEMENT['Lr'].vdWRadius = 0.0;
ELEMENT['Rf'].vdWRadius = 0.0;
ELEMENT['Db'].vdWRadius = 0.0;
ELEMENT['Sg'].vdWRadius = 0.0;
ELEMENT['Bh'].vdWRadius = 0.0;
ELEMENT['Hs'].vdWRadius = 0.0;
ELEMENT['Mt'].vdWRadius = 0.0;
ELEMENT['Ds'].vdWRadius = 0.0;
ELEMENT['Rg'].vdWRadius = 0.0;
ELEMENT['Cn'].vdWRadius = 0.0;
ELEMENT['Uut'].vdWRadius = 0.0;
ELEMENT['Uuq'].vdWRadius = 0.0;
ELEMENT['Uup'].vdWRadius = 0.0;
ELEMENT['Uuh'].vdWRadius = 0.0;
ELEMENT['Uus'].vdWRadius = 0.0;
ELEMENT['Uuo'].vdWRadius = 0.0;

ELEMENT['H'].valency = 1;
ELEMENT['He'].valency = 0;
ELEMENT['Li'].valency = 1;
ELEMENT['Be'].valency = 2;
ELEMENT['B'].valency = 3;
ELEMENT['C'].valency = 4;
ELEMENT['N'].valency = 3;
ELEMENT['O'].valency = 2;
ELEMENT['F'].valency = 1;
ELEMENT['Ne'].valency = 0;
ELEMENT['Na'].valency = 1;
ELEMENT['Mg'].valency = 0;
ELEMENT['Al'].valency = 0;
ELEMENT['Si'].valency = 4;
ELEMENT['P'].valency = 3;
ELEMENT['S'].valency = 2;
ELEMENT['Cl'].valency = 1;
ELEMENT['Ar'].valency = 0;
ELEMENT['K'].valency = 0;
ELEMENT['Ca'].valency = 0;
ELEMENT['Sc'].valency = 0;
ELEMENT['Ti'].valency = 1;
ELEMENT['V'].valency = 1;
ELEMENT['Cr'].valency = 2;
ELEMENT['Mn'].valency = 3;
ELEMENT['Fe'].valency = 2;
ELEMENT['Co'].valency = 1;
ELEMENT['Ni'].valency = 1;
ELEMENT['Cu'].valency = 0;
ELEMENT['Zn'].valency = 0;
ELEMENT['Ga'].valency = 0;
ELEMENT['Ge'].valency = 4;
ELEMENT['As'].valency = 3;
ELEMENT['Se'].valency = 2;
ELEMENT['Br'].valency = 1;
ELEMENT['Kr'].valency = 0;
ELEMENT['Rb'].valency = 0;
ELEMENT['Sr'].valency = 0;
ELEMENT['Y'].valency = 0;
ELEMENT['Zr'].valency = 0;
ELEMENT['Nb'].valency = 1;
ELEMENT['Mo'].valency = 2;
ELEMENT['Tc'].valency = 3;
ELEMENT['Ru'].valency = 2;
ELEMENT['Rh'].valency = 1;
ELEMENT['Pd'].valency = 0;
ELEMENT['Ag'].valency = 0;
ELEMENT['Cd'].valency = 0;
ELEMENT['In'].valency = 0;
ELEMENT['Sn'].valency = 4;
ELEMENT['Sb'].valency = 3;
ELEMENT['Te'].valency = 2;
ELEMENT['I'].valency = 1;
ELEMENT['Xe'].valency = 0;
ELEMENT['Cs'].valency = 0;
ELEMENT['Ba'].valency = 0;
ELEMENT['La'].valency = 0;
ELEMENT['Ce'].valency = 0;
ELEMENT['Pr'].valency = 0;
ELEMENT['Nd'].valency = 0;
ELEMENT['Pm'].valency = 0;
ELEMENT['Sm'].valency = 0;
ELEMENT['Eu'].valency = 0;
ELEMENT['Gd'].valency = 0;
ELEMENT['Tb'].valency = 0;
ELEMENT['Dy'].valency = 0;
ELEMENT['Ho'].valency = 0;
ELEMENT['Er'].valency = 0;
ELEMENT['Tm'].valency = 0;
ELEMENT['Yb'].valency = 0;
ELEMENT['Lu'].valency = 0;
ELEMENT['Hf'].valency = 0;
ELEMENT['Ta'].valency = 1;
ELEMENT['W'].valency = 2;
ELEMENT['Re'].valency = 3;
ELEMENT['Os'].valency = 2;
ELEMENT['Ir'].valency = 3;
ELEMENT['Pt'].valency = 0;
ELEMENT['Au'].valency = 1;
ELEMENT['Hg'].valency = 0;
ELEMENT['Tl'].valency = 0;
ELEMENT['Pb'].valency = 4;
ELEMENT['Bi'].valency = 3;
ELEMENT['Po'].valency = 2;
ELEMENT['At'].valency = 1;
ELEMENT['Rn'].valency = 0;
ELEMENT['Fr'].valency = 0;
ELEMENT['Ra'].valency = 0;
ELEMENT['Ac'].valency = 0;
ELEMENT['Th'].valency = 0;
ELEMENT['Pa'].valency = 0;
ELEMENT['U'].valency = 0;
ELEMENT['Np'].valency = 0;
ELEMENT['Pu'].valency = 0;
ELEMENT['Am'].valency = 0;
ELEMENT['Cm'].valency = 0;
ELEMENT['Bk'].valency = 0;
ELEMENT['Cf'].valency = 0;
ELEMENT['Es'].valency = 0;
ELEMENT['Fm'].valency = 0;
ELEMENT['Md'].valency = 0;
ELEMENT['No'].valency = 0;
ELEMENT['Lr'].valency = 0;
ELEMENT['Rf'].valency = 0;
ELEMENT['Db'].valency = 0;
ELEMENT['Sg'].valency = 0;
ELEMENT['Bh'].valency = 0;
ELEMENT['Hs'].valency = 0;
ELEMENT['Mt'].valency = 0;
ELEMENT['Ds'].valency = 0;
ELEMENT['Rg'].valency = 0;
ELEMENT['Cn'].valency = 0;
ELEMENT['Uut'].valency = 0;
ELEMENT['Uuq'].valency = 0;
ELEMENT['Uup'].valency = 0;
ELEMENT['Uuh'].valency = 0;
ELEMENT['Uus'].valency = 0;
ELEMENT['Uuo'].valency = 0;

//
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
//  $Revision: 2777 $
//  $Author: kevin $
//  $LastChangedDate: 2010-08-12 16:48:33 -0400 (Thu, 12 Aug 2010) $
//
function Ring() {
    this.atoms = [];
    this.bonds = [];
    this.center = null;
    return true;
}

Ring.prototype.setupBonds = function() {
    for (var i = 0, ii = this.bonds.length; i < ii; i++) {
        this.bonds[i].ring = this;
    }
    ;
    this.center = this.getCenter();
}
Ring.prototype.getCenter = function() {
    var minX = minY = Infinity;
    var maxX = maxY = -Infinity;
    for (var i = 0, ii = this.atoms.length; i < ii; i++) {
        minX = Math.min(this.atoms[i].x, minX);
        minY = Math.min(this.atoms[i].y, minY);
        maxX = Math.max(this.atoms[i].x, maxX);
        maxY = Math.max(this.atoms[i].y, maxY);
    }
    ;
    return new Point((maxX + minX) / 2, (maxY + minY) / 2);
}
//
//  Copyright 2009 iChemLabs, LLC.  All rights reserved.
//
//  $Revision: 2794 $
//  $Author: kevin $
//  $LastChangedDate: 2010-08-13 12:12:28 -0400 (Fri, 13 Aug 2010) $
//
function Atom(label, x, y, z, sex) {
    this.x = x ? x : 0;
    this.y = y ? y : 0;
    this.z = z ? z : 0;
    this.charge = 0;
    this.coordinationNumber = 0;
    this.bondNumber = 0;
    this.angleOfLeastInterference = 0;
    this.isHidden = false;
    this.label = label ? label.replace(/\s/g, '') : 'C';
    //    if (!ELEMENT[this.label]) {
    //        this.label = 'C';
    //    }
    this.isLone = false;
    this.isHover = false;
    this.isSelected = false;
    this.isOverlap = false;

    if (sex == 'f') {
        this.color = "#ff0000";
    }
    else {
        this.color = '#00ff00';
    }
    return true;
}

Atom.prototype = new Point(0, 0);

Atom.prototype.add3D = function(p) {
    this.x += p.x;
    this.y += p.y;
    this.z += p.z;
}
Atom.prototype.sub3D = function(p) {
    this.x -= p.x;
    this.y -= p.y;
    this.z -= p.z;
}
Atom.prototype.distance3D = function(p) {
    return Math.sqrt(Math.pow(p.x - this.x, 2) + Math.pow(p.y - this.y, 2) + Math.pow(p.z - this.z, 2));
}
Atom.prototype.draw = function(ctx, specs) {
    var font = specs.getFontString(specs.atoms_font_size_2D, specs.atoms_font_families_2D);
    ctx.font = font;
    ctx.fillStyle = this.color;
    if (this.isLone || specs.atoms_circles_2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, specs.atoms_circleDiameter_2D / 2, 0, Math.PI * 2, false);
        ctx.fill();
        if (specs.atoms_circleBorderWidth_2D > 0) {
            ctx.lineWidth = specs.atoms_circleBorderWidth_2D;
            ctx.strokeStyle = 'black';
            ctx.stroke(this.x, this.y, 0, Math.PI * 2, specs.atoms_circleDiameter_2D / 2);
        }
    }
    else
    if (this.isLabelVisible(specs)) {
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(this.label, this.x, this.y);
        if (specs.atoms_implicitHydrogens_2D) {
            //implicit hydrogens
            var numHs = ELEMENT[this.label].valency - this.coordinationNumber - Math.abs(this.charge);
            if (numHs > 0) {
                var symbolWidth = ctx.measureText(this.label).width;
                var hWidth = ctx.measureText('H').width;
                if (numHs > 1) {
                    var xoffset = symbolWidth / 2 + hWidth / 2;
                    var yoffset = 0;
                    var subFont = specs.getFontString(specs.atoms_font_size_2D * .8, specs.atoms_font_families_2D);
                    ctx.font = subFont;
                    var numWidth = ctx.measureText(numHs).width;
                    if (this.bondNumber == 1) {
                        if (this.angleOfLeastInterference > Math.PI / 2 && this.angleOfLeastInterference < 3 * Math.PI / 2) {
                            xoffset = -symbolWidth / 2 - numWidth - hWidth / 2;
                        }
                    }
                    else {
                        if (this.angleOfLeastInterference <= Math.PI / 4) {
                            //default
                        }
                        else
                        if (this.angleOfLeastInterference < 3 * Math.PI / 4) {
                            xoffset = 0;
                            yoffset = -specs.atoms_font_size_2D * .9;
                        }
                        else
                        if (this.angleOfLeastInterference <= 5 * Math.PI / 4) {
                            xoffset = -symbolWidth / 2 - numWidth - hWidth / 2;
                        }
                        else
                        if (this.angleOfLeastInterference < 7 * Math.PI / 4) {
                            xoffset = 0;
                            yoffset = specs.atoms_font_size_2D * .9;
                        }
                    }
                    ctx.font = font;
                    ctx.fillText('H', this.x + xoffset, this.y + yoffset);
                    ctx.font = subFont;
                    ctx.fillText(numHs, this.x + xoffset + hWidth / 2 + numWidth / 2, this.y + yoffset + specs.atoms_font_size_2D * .3);
                }
                else {
                    var xoffset = symbolWidth / 2 + hWidth / 2;
                    var yoffset = 0;
                    if (this.bondNumber == 1) {
                        if (this.angleOfLeastInterference > Math.PI / 2 && this.angleOfLeastInterference < 3 * Math.PI / 2) {
                            xoffset = -symbolWidth / 2 - hWidth / 2;
                        }
                    }
                    else {
                        if (this.angleOfLeastInterference <= Math.PI / 4) {
                            //default
                        }
                        else
                        if (this.angleOfLeastInterference < 3 * Math.PI / 4) {
                            xoffset = 0;
                            yoffset = -specs.atoms_font_size_2D * .9;
                        }
                        else
                        if (this.angleOfLeastInterference <= 5 * Math.PI / 4) {
                            xoffset = -symbolWidth / 2 - hWidth / 2;
                        }
                        else
                        if (this.angleOfLeastInterference < 7 * Math.PI / 4) {
                            xoffset = 0;
                            yoffset = specs.atoms_font_size_2D * .9;
                        }
                    }
                    ctx.fillText('H', this.x + xoffset, this.y + yoffset);
                }
            }
        }
    }
    if (this.charge != null && this.charge != 0) {
        var s = this.charge.toFixed(0);
        if (s == '1') {
            s = '+';
        }
        else
        if (s == '-1') {
            s = '\u2013';
        }
        else
        if (s.startsWith('-')) {
            s = s.substring(1) + '\u2013';
        }
        else {
            s += '+';
        }
        ctx.fillText(s, this.x + specs.atoms_font_size_2D * Math.cos(this.angleOfLeastInterference + Math.PI / 4), this.y - specs.atoms_font_size_2D * Math.sin(this.angleOfLeastInterference + Math.PI / 4));
    }
    if (this.isHover || this.isSelected || this.isOverlap) {
        ctx.strokeStyle = this.isHover ? '#885110' : '#0060B2';
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 7, 0, Math.PI * 2, false);
        ctx.stroke();
    }
}
Atom.prototype.render = function(gl, specs) {
    var transform = mat4.translate(gl.modelViewMatrix, [this.x, this.y, this.z], []);
    var radius = specs.atoms_useVDWDiameters_3D ? ELEMENT[this.label].vdWRadius : specs.atoms_sphereDiameter_3D / 2;
    mat4.scale(transform, [radius, radius, radius]);
    //positions
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.sphereBuffer.vertexPositionBuffer);
    gl.vertexAttribPointer(gl.shader.vertexPositionAttribute, gl.sphereBuffer.vertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);
    //colors
    gl.material.setTempColors(gl, specs.atoms_materialAmbientColor_3D, this.color, specs.atoms_materialSpecularColor_3D, specs.atoms_materialShininess_3D);
    //normals
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.sphereBuffer.vertexNormalBuffer);
    gl.vertexAttribPointer(gl.shader.vertexNormalAttribute, gl.sphereBuffer.vertexNormalBuffer.itemSize, gl.FLOAT, false, 0, 0);
    //render
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gl.sphereBuffer.vertexIndexBuffer);
    gl.setMatrixUniforms(gl.projectionMatrix, transform);
    gl.drawElements(gl.TRIANGLES, gl.sphereBuffer.vertexIndexBuffer.numItems, gl.UNSIGNED_SHORT, 0);
}
Atom.prototype.isLabelVisible = function(specs) {
    return this.label != 'C' || (this.isHidden && specs.atoms_showHiddenCarbons_2D) || (specs.atoms_displayTerminalCarbonLabels_2D && this.bondNumber == 1);
}
//
//  Copyright 2009 iChemLabs, LLC.  All rights reserved.
//
//  $Revision: 2794 $
//  $Author: kevin $
//  $LastChangedDate: 2010-08-13 12:12:28 -0400 (Fri, 13 Aug 2010) $
//

var BOND_STEREO_NONE = 'BOND_STEREO_NONE';
var BOND_STEREO_PROTRUDING = 'BOND_STEREO_PROTRUDING';
var BOND_STEREO_RECESSED = 'BOND_STEREO_RECESSED';
var BOND_STEREO_AMBIGUOUS = 'BOND_STEREO_AMBIGUOUS';

function Bond(a1, a2, bondOrder) {
    this.a1 = a1;
    this.a2 = a2;
    this.bondOrder = bondOrder ? bondOrder : 1;
    this.stereo = BOND_STEREO_NONE;
    this.isHover = false;
    this.ring = null;
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
Bond.prototype.draw = function(ctx, specs) {
    var x1 = this.a1.x;
    var x2 = this.a2.x;
    var y1 = this.a1.y;
    var y2 = this.a2.y;
    var difX = x2 - x1;
    var difY = y2 - y1;
    if (specs.atoms_display && !specs.atoms_circles_2D && this.a1.isLabelVisible(specs)) {
        x1 += difX * specs.bonds_atomLabelBuffer_2D;
        y1 += difY * specs.bonds_atomLabelBuffer_2D;
    }
    if (specs.atoms_display && !specs.atoms_circles_2D && this.a2.isLabelVisible(specs)) {
        x2 -= difX * specs.bonds_atomLabelBuffer_2D;
        y2 -= difY * specs.bonds_atomLabelBuffer_2D;
    }
    if (specs.bonds_clearOverlaps_2D) {
        var xs = x1 + difX * .15;
        var ys = y1 + difY * .15;
        var xf = x2 - difX * .15;
        var yf = y2 - difY * .15;
        ctx.strokeStyle = default_backgroundColor;
        ctx.lineWidth = specs.bonds_width_2D + specs.bonds_overlapClearWidth_2D * 2;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(xs, ys);
        ctx.lineTo(xf, yf);
        ctx.closePath();
        ctx.stroke();
    }
    ctx.strokeStyle = this.color;
    ctx.fillStyle = this.color;
    ctx.lineWidth = specs.bonds_width_2D;
    ctx.lineCap = specs.bonds_ends_2D;

    switch (this.bondOrder) {
        case 1:
            if (this.stereo == BOND_STEREO_PROTRUDING || this.stereo == BOND_STEREO_RECESSED) {
                var useDist = this.a1.distance(this.a2) * specs.bonds_wedgeThickness_2D / 2;
                var perpendicular = this.a1.angle(this.a2) + Math.PI / 2;
                var cx3 = x2 + Math.cos(perpendicular) * useDist;
                var cy3 = y2 - Math.sin(perpendicular) * useDist;
                var cx4 = x2 - Math.cos(perpendicular) * useDist;
                var cy4 = y2 + Math.sin(perpendicular) * useDist;
                ctx.beginPath();
                ctx.moveTo(x1, y1);
                ctx.lineTo(cx3, cy3);
                ctx.lineTo(cx4, cy4);
                ctx.closePath();
                if (this.stereo == BOND_STEREO_PROTRUDING) {
                    ctx.fill();
                }
                else {
                    ctx.save();
                    ctx.clip();
                    ctx.beginPath();
                    ctx.moveTo(x1, y1);
                    ctx.lineWidth = useDist * 2;
                    ctx.lineCap = 'butt';
                    var travelled = 0;
                    var dist = this.a1.distance(this.a2);
                    var space = false;
                    var lastX = x1;
                    var lastY = y1;
                    while (travelled < dist) {
                        if (space) {
                            var percent = specs.bonds_hashSpacing_2D / dist;
                            lastX += percent * difX;
                            lastY += percent * difY;
                            ctx.moveTo(lastX, lastY);
                            travelled += specs.bonds_hashSpacing_2D;
                        }
                        else {
                            var percent = specs.bonds_hashWidth_2D / dist;
                            lastX += percent * difX;
                            lastY += percent * difY;
                            ctx.lineTo(lastX, lastY);
                            travelled += specs.bonds_hashWidth_2D;
                        }
                        space = !space;
                    }
                    ctx.stroke();
                    ctx.restore();
                }
            }
            else {
                ctx.beginPath();
                ctx.moveTo(x1, y1);
                ctx.lineTo(x2, y2);
                ctx.stroke();
            }
            break;
        case 1.5:
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
            break;
        case 2:
            if (this.stereo == BOND_STEREO_AMBIGUOUS) {
                var useDist = this.a1.distance(this.a2) * specs.bonds_saturationWidth_2D / 2;
                var perpendicular = this.a1.angle(this.a2) + Math.PI / 2;
                var cx1 = x1 - Math.cos(perpendicular) * useDist;
                var cy1 = y1 + Math.sin(perpendicular) * useDist;
                var cx2 = x1 + Math.cos(perpendicular) * useDist;
                var cy2 = y1 - Math.sin(perpendicular) * useDist;
                var cx3 = x2 + Math.cos(perpendicular) * useDist;
                var cy3 = y2 - Math.sin(perpendicular) * useDist;
                var cx4 = x2 - Math.cos(perpendicular) * useDist;
                var cy4 = y2 + Math.sin(perpendicular) * useDist;
                ctx.beginPath();
                ctx.moveTo(cx1, cy1);
                ctx.lineTo(cx3, cy3);
                ctx.moveTo(cx2, cy2);
                ctx.lineTo(cx4, cy4);
                ctx.stroke();
            }
            else
            if (!specs.bonds_symmetrical_2D && (this.ring != null || this.a1.label == 'C' && this.a2.label == 'C')) {
                ctx.beginPath();
                ctx.moveTo(x1, y1);
                ctx.lineTo(x2, y2);
                var clip = 0;
                var dist = this.a1.distance(this.a2);
                var angle = this.a1.angle(this.a2);
                var perpendicular = angle + Math.PI / 2;
                var useDist = dist * specs.bonds_saturationWidth_2D;
                var clipAngle = specs.bonds_saturationAngle_2D;
                if (clipAngle < Math.PI / 2) {
                    clip = -(useDist / Math.tan(clipAngle));
                }
                if (Math.abs(clip) < dist / 2) {
                    var xuse1 = x1 - Math.cos(angle) * clip;
                    var xuse2 = x2 + Math.cos(angle) * clip;
                    var yuse1 = y1 + Math.sin(angle) * clip;
                    var yuse2 = y2 - Math.sin(angle) * clip;
                    var cx1 = xuse1 - Math.cos(perpendicular) * useDist;
                    var cy1 = yuse1 + Math.sin(perpendicular) * useDist;
                    var cx2 = xuse1 + Math.cos(perpendicular) * useDist;
                    var cy2 = yuse1 - Math.sin(perpendicular) * useDist;
                    var cx3 = xuse2 - Math.cos(perpendicular) * useDist;
                    var cy3 = yuse2 + Math.sin(perpendicular) * useDist;
                    var cx4 = xuse2 + Math.cos(perpendicular) * useDist;
                    var cy4 = yuse2 - Math.sin(perpendicular) * useDist;
                    var flip = this.ring == null || (this.ring.center.angle(this.a1) > this.ring.center.angle(this.a2) && !(this.ring.center.angle(this.a1) - this.ring.center.angle(this.a2) > Math.PI) || (this.ring.center.angle(this.a1) - this.ring.center.angle(this.a2) < -Math.PI));
                    if (flip) {
                        ctx.moveTo(cx1, cy1);
                        ctx.lineTo(cx3, cy3);
                    }
                    else {
                        ctx.moveTo(cx2, cy2);
                        ctx.lineTo(cx4, cy4);
                    }
                    ctx.stroke();
                }
            }
            else {
                var useDist = this.a1.distance(this.a2) * specs.bonds_saturationWidth_2D / 2;
                var perpendicular = this.a1.angle(this.a2) + Math.PI / 2;
                var cx1 = x1 - Math.cos(perpendicular) * useDist;
                var cy1 = y1 + Math.sin(perpendicular) * useDist;
                var cx2 = x1 + Math.cos(perpendicular) * useDist;
                var cy2 = y1 - Math.sin(perpendicular) * useDist;
                var cx3 = x2 + Math.cos(perpendicular) * useDist;
                var cy3 = y2 - Math.sin(perpendicular) * useDist;
                var cx4 = x2 - Math.cos(perpendicular) * useDist;
                var cy4 = y2 + Math.sin(perpendicular) * useDist;
                ctx.beginPath();
                ctx.moveTo(cx1, cy1);
                ctx.lineTo(cx4, cy4);
                ctx.moveTo(cx2, cy2);
                ctx.lineTo(cx3, cy3);
                ctx.stroke();
            }
            break;
        case 3:
            var useDist = this.a1.distance(this.a2) * specs.bonds_saturationWidth_2D;
            var perpendicular = this.a1.angle(this.a2) + Math.PI / 2;
            var cx1 = x1 - Math.cos(perpendicular) * useDist;
            var cy1 = y1 + Math.sin(perpendicular) * useDist;
            var cx2 = x1 + Math.cos(perpendicular) * useDist;
            var cy2 = y1 - Math.sin(perpendicular) * useDist;
            var cx3 = x2 + Math.cos(perpendicular) * useDist;
            var cy3 = y2 - Math.sin(perpendicular) * useDist;
            var cx4 = x2 - Math.cos(perpendicular) * useDist;
            var cy4 = y2 + Math.sin(perpendicular) * useDist;
            ctx.beginPath();
            ctx.moveTo(cx1, cy1);
            ctx.lineTo(cx4, cy4);
            ctx.moveTo(cx2, cy2);
            ctx.lineTo(cx3, cy3);
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
            break;
    }
    if (this.isHover) {
        var pi2 = 2 * Math.PI;
        var angle = (this.a1.angleForStupidCanvasArcs(this.a2) + Math.PI / 2) % pi2;
        ctx.strokeStyle = '#885110';
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        var angleTo = (angle + Math.PI) % pi2;
        angleTo = angleTo % (Math.PI * 2);
        ctx.arc(this.a1.x, this.a1.y, 6, angle, angleTo, false);
        ctx.stroke();
        ctx.beginPath();
        angle += Math.PI;
        angleTo = (angle + Math.PI) % pi2;
        ctx.arc(this.a2.x, this.a2.y, 7, angle, angleTo, false);
        ctx.stroke();
    }
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
    mat4.scale(transform, [specs.bonds_cylinderDiameter_3D / 2, height, specs.bonds_cylinderDiameter_3D / 2]);
    //colors
    gl.material.setTempColors(gl, specs.bonds_materialAmbientColor_3D, this.color, specs.bonds_materialSpecularColor_3D, specs.bonds_materialShininess_3D);
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
function Molecule() {
    this.atoms = [];
    this.bonds = [];
    this.rings = [];
    //this can be an extensive algorithm for large molecules, you may want to turn this off
    this.findRings = true;
    return true;
}

Molecule.prototype.draw = function(ctx, specs) {
    //draw
    if (specs.bonds_display == true) {
        for (var i = 0, ii = this.bonds.length; i < ii; i++) {
            this.bonds[i].draw(ctx, specs);
        }
        ;
    }
    if (specs.atoms_display == true) {
        for (var i = 0, ii = this.atoms.length; i < ii; i++) {
            this.atoms[i].draw(ctx, specs);
        }
        ;
    }
}
Molecule.prototype.render = function(gl, specs) {
    if (specs.bonds_display == true) {
        for (var i = 0, ii = this.bonds.length; i < ii; i++) {
            this.bonds[i].render(gl, specs);
        }
        ;
    }
    if (specs.atoms_display == true) {
        for (var i = 0, ii = this.atoms.length; i < ii; i++) {
            this.atoms[i].render(gl, specs);
        }
        ;
    }
}
Molecule.prototype.getCenter3D = function() {
    if (this.atoms.length == 1) {
        return new Atom('C', this.atoms[0].x, this.atoms[0].y, this.atoms[0].z);
    }
    var minX = minY = minZ = Infinity;
    var maxX = maxY = maxZ = -Infinity;
    for (var i = 0, ii = this.atoms.length; i < ii; i++) {
        minX = Math.min(this.atoms[i].x, minX);
        minY = Math.min(this.atoms[i].y, minY);
        minZ = Math.min(this.atoms[i].z, minZ);
        maxX = Math.max(this.atoms[i].x, maxX);
        maxY = Math.max(this.atoms[i].y, maxY);
        maxZ = Math.max(this.atoms[i].z, maxZ);
    }
    ;
    return new Atom('C', (maxX + minX) / 2, (maxY + minY) / 2, (maxZ + minZ) / 2);
}
Molecule.prototype.getCenter = function() {
    if (this.atoms.length == 1) {
        return new Point(this.atoms[0].x, this.atoms[0].y);
    }
    var minX = minY = Infinity;
    var maxX = maxY = -Infinity;
    for (var i = 0, ii = this.atoms.length; i < ii; i++) {
        minX = Math.min(this.atoms[i].x, minX);
        minY = Math.min(this.atoms[i].y, minY);
        maxX = Math.max(this.atoms[i].x, maxX);
        maxY = Math.max(this.atoms[i].y, maxY);
    }
    ;
    return new Point((maxX + minX) / 2, (maxY + minY) / 2);
}
Molecule.prototype.getDimension = function() {
    if (this.atoms.length == 1) {
        return new Point(0, 0);
    }
    var minX = minY = Infinity;
    var maxX = maxY = -Infinity;
    for (var i = 0, ii = this.atoms.length; i < ii; i++) {
        minX = Math.min(this.atoms[i].x, minX);
        minY = Math.min(this.atoms[i].y, minY);
        maxX = Math.max(this.atoms[i].x, maxX);
        maxY = Math.max(this.atoms[i].y, maxY);
    }
    ;
    return new Point(maxX - minX, maxY - minY);
}
Molecule.prototype.check = function() {
    //find lones
    for (var i = 0, ii = this.atoms.length; i < ii; i++) {
        this.atoms[i].isLone = false;
        if (this.atoms[i].label == 'C') {
            var counter = 0;
            for (var j = 0, jj = this.bonds.length; j < jj; j++) {
                if (this.bonds[j].a1 == this.atoms[i] || this.bonds[j].a2 == this.atoms[i]) {
                    counter++;
                }
            }
            ;
            if (counter == 0) {
                this.atoms[i].isLone = true;
            }
        }
    }
    ;
    if (this.findRings) {
        //find rings
        this.rings = new SSSRFinder(this).rings;
        for (var i = 0, ii = this.rings.length; i < ii; i++) {
            this.rings[i].setupBonds();
        }
        ;
    }
    //sort
    this.sortAtomsByZ();
    this.sortBondsByZ();
    //setup metadata
    this.setupMetaData();
}
Molecule.prototype.getAngles = function(a) {
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
Molecule.prototype.getCoordinationNumber = function(bs) {
    var coordinationNumber = 0;
    for (var i = 0, ii = bs.length; i < ii; i++) {
        coordinationNumber += bs[i].bondOrder;
    }
    ;
    return coordinationNumber;
}
Molecule.prototype.getBonds = function(a) {
    var bonds = [];
    for (var i = 0, ii = this.bonds.length; i < ii; i++) {
        if (this.bonds[i].contains(a)) {
            bonds[bonds.length] = this.bonds[i];
        }
    }
    ;
    return bonds;
}
Molecule.prototype.sortAtomsByZ = function() {
    for (var i = 1, ii = this.atoms.length; i < ii; i++) {
        var index = i;
        while (index > 0 && this.atoms[index].z < this.atoms[index - 1].z) {
            var hold = this.atoms[index];
            this.atoms[index] = this.atoms[index - 1];
            this.atoms[index - 1] = hold;
            index--;
        }
    }
}
Molecule.prototype.sortBondsByZ = function() {
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
Molecule.prototype.setupMetaData = function() {
    for (var i = 0, ii = this.atoms.length; i < ii; i++) {
        var a = this.atoms[i];
        var bonds = this.getBonds(a);
        var angles = this.getAngles(a);
        a.isHidden = bonds.length == 2 && Math.abs(Math.abs(angles[1] - angles[0]) - Math.PI) < Math.PI / 30 && bonds[0].bondOrder == bonds[1].bondOrder;
        a.angleOfLeastInterference = angleBetweenLargest(angles) % (Math.PI * 2);
        a.coordinationNumber = this.getCoordinationNumber(bonds);
        a.bondNumber = bonds.length;
    }
    ;
}
Molecule.prototype.scaleToAverageBondLength = function(length) {
    var avBondLength = this.getAverageBondLength();
    if (avBondLength != 0) {
        var scale = length / avBondLength;
        for (var i = 0, ii = this.atoms.length; i < ii; i++) {
            this.atoms[i].x *= scale;
            this.atoms[i].y *= scale;
        }
        ;
    }
}
Molecule.prototype.getAverageBondLength = function() {
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

function fit(data, length) {
    var size = data.length;
    var padding = '';
    for (var i = 0; i < length - size; i++) {
        padding = padding + ' ';
    }
    ;
    return padding + data;
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