//
// ChemDoodle Web Components 3.5.0
//
// http://web.chemdoodle.com
//
// Copyright 2009 iChemLabs, LLC.  All rights reserved.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// As a special exception to the GPL, any HTML file which merely makes
// function calls to this code, and for that purpose includes it by
// reference, shall be deemed a separate work for copyright law purposes.
// If you modify this code, you may extend this exception to your version
// of the code, but you are not obligated to do so. If you do not wish to
// do so, delete this exception statement from your version.
//
// As an additional exception to the GPL, you may distribute this
// packed form of the code without the copy of the GPL license normally
// required, provided you include this license notice and a URL through
// which recipients can access the corresponding unpacked source code.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// Please contact iChemLabs <http://www.ichemlabs.com/contact> for
// alternate licensing options.
//
String.prototype.startsWith = function(a) {
    return this.match("^" + a) == a
};
vec3.angleFrom = function(a, b) {
    var c = vec3.length(a),d = vec3.length(b);
    c = vec3.dot(a, b) / c / d;
    return Math.acos(c)
};
function Queue() {
    var a = [],b = 0;
    this.getSize = function() {
        return a.length - b
    };
    this.isEmpty = function() {
        return a.length == 0
    };
    this.enqueue = function(c) {
        a.push(c)
    };
    this.dequeue = function() {
        var c = undefined;
        if (a.length) {
            c = a[b];
            if (++b * 2 >= a.length) {
                a = a.slice(b);
                b = 0
            }
        }
        return c
    };
    this.getOldestElement = function() {
        var c = undefined;
        if (a.length)c = a[b];
        return c
    }
}
var default_backgroundColor = "#FFFFFF",default_scale = 1,default_rotateAngle = 0,default_bondLength_2D = 20,default_angstromsPerBondLength = 1.25,default_lightDirection_3D = [-0.1,-0.1,-1],default_lightDiffuseColor_3D = "#FFFFFF",default_lightSpecularColor_3D = "#FFFFFF",default_projectionVerticalFieldOfView_3D = 45,default_projectionWidthHeightRatio_3D = 1,default_projectionFrontCulling_3D = 0.1,default_projectionBackCulling_3D = 1E4,default_atoms_display = true,default_atoms_color = "#000000",default_atoms_font_size_2D = 12,
        default_atoms_font_families_2D = ["Helvetica","Arial","Dialog"],default_atoms_circles_2D = false,default_atoms_circleDiameter_2D = 10,default_atoms_circleBorderWidth_2D = 1,default_atoms_useJMOLColors = false,default_atoms_resolution_3D = 60,default_atoms_sphereDiameter_3D = 0.8,default_atoms_useVDWDiameters_3D = false,default_atoms_materialAmbientColor_3D = "#000000",default_atoms_materialSpecularColor_3D = "#555555",default_atoms_materialShininess_3D = 32,default_atoms_implicitHydrogens_2D = true,default_atoms_displayTerminalCarbonLabels_2D =
        false,default_atoms_showHiddenCarbons_2D = true,default_bonds_display = true,default_bonds_color = "#000000",default_bonds_width_2D = 1,default_bonds_saturationWidth_2D = 0.2,default_bonds_ends_2D = "round",default_bonds_useJMOLColors = false,default_bonds_saturationAngle_2D = Math.PI / 3,default_bonds_symmetrical_2D = false,default_bonds_clearOverlaps_2D = false,default_bonds_overlapClearWidth_2D = 0.5,default_bonds_atomLabelBuffer_2D = 0.25,default_bonds_wedgeThickness_2D = 0.22,default_bonds_hashWidth_2D = 1,default_bonds_hashSpacing_2D =
        2.5,default_bonds_resolution_3D = 60,default_bonds_cylinderDiameter_3D = 0.3,default_bonds_materialAmbientColor_3D = "#222222",default_bonds_materialSpecularColor_3D = "#555555",default_bonds_materialShininess_3D = 32,default_plots_color = "#000000",default_plots_width = 1,default_plots_showIntegration = false,default_plots_integrationColor = "#c10000",default_plots_integrationLineWidth = 1,default_plots_showGrid = false,default_plots_gridColor = "gray",default_plots_gridLineWidth = 0.5,default_plots_showYAxis = true,default_plots_flipXAxis =
        false,default_text_font_size = 12,default_text_font_families = ["Helvetica","Arial","Dialog"],default_text_color = "#000000";
function VisualSpecifications() {
    this.backgroundColor = default_backgroundColor;
    this.scale = default_scale;
    this.rotateAngle = default_rotateAngle;
    this.bondLength = default_bondLength_2D;
    this.angstromsPerBondLength = default_angstromsPerBondLength;
    this.lightDirection_3D = default_lightDirection_3D;
    this.lightDiffuseColor_3D = default_lightDiffuseColor_3D;
    this.lightSpecularColor_3D = default_lightSpecularColor_3D;
    this.projectionVerticalFieldOfView_3D = default_projectionVerticalFieldOfView_3D;
    this.projectionWidthHeightRatio_3D =
            default_projectionWidthHeightRatio_3D;
    this.projectionFrontCulling_3D = default_projectionFrontCulling_3D;
    this.projectionBackCulling_3D = default_projectionBackCulling_3D;
    this.atoms_display = default_atoms_display;
    this.atoms_color = default_atoms_color;
    this.atoms_font_size_2D = default_atoms_font_size_2D;
    this.atoms_font_families_2D = [];
    for (var a = 0,b = default_atoms_font_families_2D.length; a < b; a++)this.atoms_font_families_2D[a] = default_atoms_font_families_2D[a];
    this.atoms_circles_2D = default_atoms_circles_2D;
    this.atoms_circleDiameter_2D =
            default_atoms_circleDiameter_2D;
    this.atoms_circleBorderWidth_2D = default_atoms_circleBorderWidth_2D;
    this.atoms_useJMOLColors = default_atoms_useJMOLColors;
    this.atoms_resolution_3D = default_atoms_resolution_3D;
    this.atoms_width = default_atoms_sphereDiameter_3D;
    this.atoms_useVDWDiameters_3D = default_atoms_useVDWDiameters_3D;
    this.atoms_materialAmbientColor_3D = default_atoms_materialAmbientColor_3D;
    this.atoms_materialSpecularColor_3D = default_atoms_materialSpecularColor_3D;
    this.atoms_materialShininess_3D =
            default_atoms_materialShininess_3D;
    this.atoms_implicitHydrogens_2D = default_atoms_implicitHydrogens_2D;
    this.atoms_displayTerminalCarbonLabels_2D = default_atoms_displayTerminalCarbonLabels_2D;
    this.atoms_showHiddenCarbons_2D = default_atoms_showHiddenCarbons_2D;
    this.bonds_display = default_bonds_display;
    this.bonds_color = default_bonds_color;
    this.bonds_width_2D = default_bonds_width_2D;
    this.bonds_saturationWidth_2D = default_bonds_saturationWidth_2D;
    this.bonds_ends_2D = default_bonds_ends_2D;
    this.bonds_useJMOLColors =
            default_bonds_useJMOLColors;
    this.bonds_saturationAngle_2D = default_bonds_saturationAngle_2D;
    this.bonds_symmetrical_2D = default_bonds_symmetrical_2D;
    this.bonds_clearOverlaps_2D = default_bonds_clearOverlaps_2D;
    this.bonds_overlapClearWidth_2D = default_bonds_overlapClearWidth_2D;
    this.bonds_atomLabelBuffer_2D = default_bonds_atomLabelBuffer_2D;
    this.bonds_wedgeThickness_2D = default_bonds_wedgeThickness_2D;
    this.bonds_hashWidth_2D = default_bonds_hashWidth_2D;
    this.bonds_hashSpacing_2D = default_bonds_hashSpacing_2D;
    this.bonds_resolution_3D = default_bonds_resolution_3D;
    this.bonds_width = default_bonds_cylinderDiameter_3D;
    this.bonds_materialAmbientColor_3D = default_bonds_materialAmbientColor_3D;
    this.bonds_materialSpecularColor_3D = default_bonds_materialSpecularColor_3D;
    this.bonds_materialShininess_3D = default_bonds_materialShininess_3D;
    this.plots_color = default_plots_color;
    this.plots_width = default_plots_width;
    this.plots_showIntegration = default_plots_showIntegration;
    this.plots_integrationColor = default_plots_integrationColor;
    this.plots_integrationLineWidth = default_plots_integrationLineWidth;
    this.plots_showGrid = default_plots_showGrid;
    this.plots_gridColor = default_plots_gridColor;
    this.plots_gridLineWidth = default_plots_gridLineWidth;
    this.plots_showYAxis = default_plots_showYAxis;
    this.plots_flipXAxis = default_plots_flipXAxis;
    this.text_font_size = default_text_font_size;
    this.text_font_families = [];
    a = 0;
    for (b = default_text_font_families.length; a < b; a++)this.text_font_families[a] = default_text_font_families[a];
    this.text_color = default_text_color
}
VisualSpecifications.prototype.set3DRepresentation = function(a) {
    this.bonds_color = "#777777";
    if (a == "Ball and Stick") {
        this.bonds_display = this.atoms_display = true;
        this.atoms_useVDWDiameters_3D = false;
        this.bonds_useJMOLColors = this.atoms_useJMOLColors = true;
        this.bonds_width = 0.3;
        this.atoms_width = 1
    } else if (a == "van der Waals Spheres") {
        this.atoms_display = true;
        this.bonds_display = false;
        this.bonds_useJMOLColors = this.atoms_useJMOLColors = this.atoms_useVDWDiameters_3D = true
    } else if (a == "Stick") {
        this.bonds_display =
                this.atoms_display = true;
        this.atoms_useVDWDiameters_3D = false;
        this.bonds_useJMOLColors = this.atoms_useJMOLColors = true;
        this.bonds_width = this.atoms_width = 0.8;
        this.bonds_materialAmbientColor_3D = this.atoms_materialAmbientColor_3D;
        this.bonds_materialSpecularColor_3D = this.atoms_materialSpecularColor_3D;
        this.bonds_materialShininess_3D = this.atoms_materialShininess_3D
    } else if (a == "Wireframe") {
        this.bonds_display = this.atoms_display = true;
        this.atoms_useVDWDiameters_3D = false;
        this.bonds_useJMOLColors =
                this.atoms_useJMOLColors = true;
        this.bonds_width = 0.05;
        this.atoms_width = 0.15
    } else alert('"' + a + '" is not recognized. Use one of the following strings:\n\n1. Ball and Stick\n2. van der Waals Spheres\n3. Stick\n4. Wireframe\n')
};
VisualSpecifications.prototype.getFontString = function(a, b) {
    for (var c = [a + "px "],d = 0,e = b.length; d < e; d++)c.push((d != 0 ? "," : "") + b[d]);
    return c.join("")
};
jQuery(document).ready(function() {
    $(document).mousemove(function(a) {
        if (CANVAS_DRAGGING != null)if (CANVAS_DRAGGING.drag) {
            CANVAS_DRAGGING.prehandleEvent(a);
            CANVAS_DRAGGING.drag(a)
        }
    });
    $(document).mouseup(function(a) {
        if (CANVAS_DRAGGING != null) {
            if (CANVAS_DRAGGING.mouseup) {
                CANVAS_DRAGGING.prehandleEvent(a);
                CANVAS_DRAGGING.mouseup(a)
            }
            CANVAS_DRAGGING = null
        }
    });
    $(document).keydown(function(a) {
        SHIFT = a.shiftKey;
        ALT = a.altKey;
        var b = CANVAS_OVER;
        if (CANVAS_DRAGGING != null)b = CANVAS_DRAGGING;
        if (b != null)if (b.keydown) {
            b.prehandleEvent(a);
            b.keydown(a)
        }
    });
    $(document).keypress(function(a) {
        var b = CANVAS_OVER;
        if (CANVAS_DRAGGING != null)b = CANVAS_DRAGGING;
        if (b != null)if (b.keypress) {
            b.prehandleEvent(a);
            b.keypress(a)
        }
    });
    $(document).keyup(function(a) {
        SHIFT = a.shiftKey;
        ALT = a.altKey;
        var b = CANVAS_OVER;
        if (CANVAS_DRAGGING != null)b = CANVAS_DRAGGING;
        if (b != null)if (b.keyup) {
            b.prehandleEvent(a);
            b.keyup(a)
        }
    })
});
var CANVAS_DRAGGING = null,CANVAS_OVER = null,ALT = false,SHIFT = false;
function Canvas() {
    this.image = this.emptyMessage = this.family = null;
    this.inGesture = false;
    return true
}
Canvas.prototype.repaint = function() {
    var a = document.getElementById(this.id);
    if (a.getContext) {
        a = a.getContext("2d");
        if (this.image == null) {
            if (this.specs.backgroundColor != null) {
                a.fillStyle = this.specs.backgroundColor;
                a.fillRect(0, 0, this.width, this.height)
            }
        } else a.drawImage(this.image, 0, 0);
        if (this.family != null && this.family.people.length > 0) {
            a.save();
            a.translate(this.width / 2, this.height / 2);
            a.rotate(this.specs.rotateAngle);
            a.scale(this.specs.scale, this.specs.scale);
            a.translate(-this.width / 2, -this.height /
                    2);
            this.family.draw(a, this.specs);
            a.restore()
        } else if (this.emptyMessage != null) {
            a.fillStyle = "#737683";
            a.textAlign = "center";
            a.textBaseline = "middle";
            a.font = "18px Helvetica, Verdana, Arial, Sans-serif";
            a.fillText(this.emptyMessage, this.width / 2, this.height / 2)
        }
        this.drawChildExtras && this.drawChildExtras(a)
    }
};
Canvas.prototype.setBackgroundImage = function(a) {
    this.image = new Image;
    var b = this;
    this.image.onload = function() {
        b.repaint()
    };
    this.image.src = a
};
Canvas.prototype.loadMolecule = function(a) {
    this.family = a;
    this.center();
    this.family.check();
    this.afterLoadMolecule && this.afterLoadMolecule();
    this.repaint()
};
Canvas.prototype.center = function() {
    document.getElementById(this.id);
    var a = this.family.getCenter3D(),b = new Atom("C", this.width / 2, this.height / 2, 0);
    b.sub3D(a);
    a = 0;
    for (var c = this.family.people.length; a < c; a++)this.family.people[a].add3D(b);
    b = this.family.getDimension();
    this.specs.scale = 1;
    if (b.x > this.width || b.y > this.height)this.specs.scale = Math.min(this.width / b.x, this.height / b.y) * 0.85
};
Canvas.prototype.create = function(a, b, c) {
    this.id = a;
    this.width = b;
    this.height = c;
    !supports_canvas_text() && $.browser.msie && $.browser.version >= "6" ? document.writeln('<div style="border: 1px solid black;" width="' + b + '" height="' + c + '">Please install <a href="http://code.google.com/chrome/chromeframe/">Google Chrome Frame</a>, then restart Internet Explorer.</div>') : document.writeln('<canvas class="ChemDoodleWebComponent" id="' + a + '" width="' + b + '" height="' + c + '"></canvas>');
    this.specs = new VisualSpecifications;
    var d = this;
    $("#" + a).bind("touchstart", function(e) {
        if (d.touchstart) {
            d.prehandleMobileEvent(e);
            d.touchstart(e)
        } else if (d.mousedown) {
            d.prehandleMobileEvent(e);
            d.mousedown(e)
        }
    });
    $("#" + a).bind("touchmove", function(e) {
        if (!d.inGesture) {
            ALT = e.originalEvent.changedTouches.length == 2;
            if (d.touchmove) {
                d.prehandleMobileEvent(e);
                d.touchmove(e)
            } else if (d.drag) {
                d.prehandleMobileEvent(e);
                d.drag(e)
            }
        }
    });
    $("#" + a).bind("touchend", function(e) {
        if (d.touchend) {
            d.prehandleMobileEvent(e);
            d.touchend(e)
        } else if (d.mouseup) {
            d.prehandleMobileEvent(e);
            d.mouseup(e)
        }
    });
    $("#" + a).bind("gesturestart", function(e) {
        d.inGesture = true;
        if (d.gesturestart) {
            d.prehandleEvent(e);
            d.gesturestart(e)
        }
    });
    $("#" + a).bind("gesturechange", function(e) {
        if (e.originalEvent.scale == 1)d.inGesture = false; else if (d.gesturechange) {
            d.prehandleEvent(e);
            d.gesturechange(e)
        }
    });
    $("#" + a).bind("gestureend", function(e) {
        d.inGesture = false;
        if (d.gestureend) {
            d.prehandleEvent(e);
            d.gestureend(e)
        }
    });
    $("#" + a).click(function(e) {
        switch (e.which) {case 1:if (d.click) {
            d.prehandleEvent(e);
            d.click(e)
        }break;
            case 2:if (d.middleclick) {
                d.prehandleEvent(e);
                d.middleclick(e)
            }break;case 3:if (d.rightclick) {
            d.prehandleEvent(e);
            d.rightclick(e)
        }break
        }
    });
    $("#" + a).dblclick(function(e) {
        if (d.dblclick) {
            d.prehandleEvent(e);
            d.dblclick(e)
        }
    });
    $("#" + a).mousedown(function(e) {
        switch (e.which) {case 1:CANVAS_DRAGGING = d;if (d.mousedown) {
            d.prehandleEvent(e);
            d.mousedown(e)
        }break;case 2:if (d.middlemousedown) {
            d.prehandleEvent(e);
            d.middlemousedown(e)
        }break;case 3:if (d.rightmousedown) {
            d.prehandleEvent(e);
            d.rightmousedown(e)
        }break
        }
    });
    $("#" + a).mousemove(function(e) {
        if (CANVAS_DRAGGING == null && d.mousemove) {
            d.prehandleEvent(e);
            d.mousemove(e)
        }
    });
    $("#" + a).mouseout(function(e) {
        CANVAS_OVER = null;
        if (d.mouseout) {
            d.prehandleEvent(e);
            d.mouseout(e)
        }
    });
    $("#" + a).mouseover(function(e) {
        CANVAS_OVER = d;
        if (d.mouseover) {
            d.prehandleEvent(e);
            d.mouseover(e)
        }
    });
    $("#" + a).mouseup(function(e) {
        switch (e.which) {case 1:if (d.mouseup) {
            d.prehandleEvent(e);
            d.mouseup(e)
        }break;case 2:if (d.middlemouseup) {
            d.prehandleEvent(e);
            d.middlemouseup(e)
        }break;case 3:if (d.rightmouseup) {
            d.prehandleEvent(e);
            d.rightmouseup(e)
        }break
        }
    });
    $("#" + a).mousewheel(function(e, f) {
        if (d.mousewheel) {
            d.prehandleEvent(e);
            d.mousewheel(e, f)
        }
    });
    this.subCreate && this.subCreate()
};
Canvas.prototype.getMolecule = function() {
    return this.family
};
Canvas.prototype.prehandleEvent = function(a) {
    a.preventDefault();
    var b = $("#" + this.id).offset();
    a.p = new Point(a.pageX - b.left, a.pageY - b.top)
};
Canvas.prototype.prehandleMobileEvent = function(a) {
    a.pageX = a.originalEvent.changedTouches[0].pageX;
    a.pageY = a.originalEvent.changedTouches[0].pageY;
    a.preventDefault();
    var b = $("#" + this.id).offset();
    a.p = new Point(a.pageX - b.left + window.pageXOffset, a.pageY - b.top + window.pageYOffset)
};
function AnimatorCanvas(a, b, c) {
    a && this.create(a, b, c);
    this.handle = null;
    this.timeout = 50;
    return true
}
AnimatorCanvas.prototype = new Canvas;
AnimatorCanvas.prototype.startAnimation = function() {
    this.stopAnimation();
    var a = this;
    if (this.nextFrame)this.handle = setInterval(function() {
        a.nextFrame();
        a.repaint()
    }, this.timeout)
};
AnimatorCanvas.prototype.stopAnimation = function() {
    if (this.handle != null) {
        clearInterval(this.handle);
        this.handle = null
    }
};
AnimatorCanvas.prototype.isRunning = function() {
    return this.handle != null
};
function DoodleCanvas(a, b, c) {
    a && this.create(a, b, c);
    this.specs.atoms_useJMOLColors = true;
    this.specs.atoms_circleDiameter_2D = 7;
    this.specs.atoms_circleBorderWidth_2D = 0;
    this.isHelp = false;
    this.helpPos = new Point(this.width - 20, 20);
    this.tempAtom = null;
    a = new Molecule;
    a.people[0] = new Atom("C", 0, 0, 0);
    this.loadMolecule(a);
    return true
}
DoodleCanvas.prototype = new Canvas;
DoodleCanvas.prototype.drawChildExtras = function(a) {
    if (this.tempAtom != null) {
        a.strokeStyle = "#00FF00";
        a.fillStyle = "#00FF00";
        a.lineWidth = 1.2;
        for (var b = 0,c = this.family.people.length; b < c; b++)if (this.family.people[b].isSelected) {
            a.beginPath();
            a.moveTo(this.family.people[b].x, this.family.people[b].y);
            a.lineTo(this.tempAtom.x, this.tempAtom.y);
            a.stroke();
            a.beginPath();
            a.arc(this.tempAtom.x, this.tempAtom.y, 3, 0, Math.PI * 2, false);
            a.fill();
            if (this.tempAtom.isOverlap) {
                a.strokeStyle = "#C10000";
                a.lineWidth = 1.2;
                a.beginPath();
                a.arc(this.tempAtom.x, this.tempAtom.y, 7, 0, Math.PI * 2, false);
                a.stroke()
            }
        }
    }
    b = a.createRadialGradient(this.width - 20, 20, 10, this.width - 20, 20, 2);
    b.addColorStop(0, "#00680F");
    b.addColorStop(1, "#FFFFFF");
    a.fillStyle = b;
    a.beginPath();
    a.arc(this.helpPos.x, this.helpPos.y, 10, 0, Math.PI * 2, false);
    a.fill();
    if (this.isHelp) {
        a.lineWidth = 2;
        a.strokeStyle = "black";
        a.stroke()
    }
    a.fillStyle = this.isHelp ? "red" : "black";
    a.textAlign = "center";
    a.textBaseline = "middle";
    a.font = "14px sans-serif";
    a.fillText("?", this.helpPos.x,
            this.helpPos.y)
};
DoodleCanvas.prototype.drag = function(a) {
    for (var b = false,c = 0,d = this.family.people.length; c < d; c++)if (this.family.people[c].isSelected) {
        b = true;
        if (a.p.distance(this.family.people[c]) < 7) {
            d = this.family.people[c].x;
            var e = this.family.people[c].y,f = this.family.getAngles(this.family.people[c]);
            if (f.length == 0) {
                d += this.specs.bondLength * Math.cos(-Math.PI / 6);
                e += this.specs.bondLength * Math.sin(-Math.PI / 6)
            } else if (f.length == 1) {
                var h = 0;
                h = null;
                for (var g = 0,i = this.family.bonds.length; g < i; g++)if (this.family.bonds[g].contains(this.family.people[c]))h = this.family.bonds[g];
                if (h.bondOrder >= 3)h = f[0] + Math.PI; else {
                    c = f[0] % Math.PI * 2;
                    h = isBetween(c, 0, Math.PI / 2) || isBetween(c, Math.PI, 3 * Math.PI / 2) ? f[0] + 2 * Math.PI / 3 : f[0] - 2 * Math.PI / 3
                }
                d += this.specs.bondLength * Math.cos(h);
                e -= this.specs.bondLength * Math.sin(h)
            } else {
                c = angleBetweenLargest(f);
                d += this.specs.bondLength * Math.cos(c);
                e -= this.specs.bondLength * Math.sin(c)
            }
            this.tempAtom = new Atom("C", d, e, 0)
        } else if (ALT && SHIFT)this.tempAtom = new Atom("C", a.p.x, a.p.y, 0); else {
            d = this.family.people[c].angle(a.p);
            e = this.family.people[c].distance(a.p);
            if (!SHIFT)e = this.specs.bondLength;
            ALT || (d = Math.floor((d + Math.PI / 12) / (Math.PI / 6)) * Math.PI / 6);
            this.tempAtom = new Atom("C", this.family.people[c].x + e * Math.cos(d), this.family.people[c].y - e * Math.sin(d), 0)
        }
        g = 0;
        for (i = this.family.people.length; g < i; g++)if (this.family.people[g].distance(this.tempAtom) < 5) {
            this.tempAtom.x = this.family.people[g].x;
            this.tempAtom.y = this.family.people[g].y;
            this.tempAtom.isOverlap = true
        }
        break
    }
    if (!b) {
        b = new Point(a.p.x, a.p.y);
        b.sub(this.lastPoint);
        c = 0;
        for (d = this.family.people.length; c <
                d; c++)this.family.people[c].add(b);
        c = 0;
        for (d = this.family.rings.length; c < d; c++)this.family.rings[c].center = this.family.rings[c].getCenter()
    }
    this.lastPoint = a.p;
    this.repaint()
};
DoodleCanvas.prototype.mousedown = function(a) {
    this.lastPoint = a.p;
    if (this.isHelp) {
        this.isHelp = false;
        this.repaint();
        window.open("http://web.chemdoodle.com/DoodlerTutorial.html")
    } else {
        for (var b = 0,c = this.family.people.length; b < c; b++)if (this.family.people[b].isHover) {
            this.family.people[b].isHover = false;
            this.family.people[b].isSelected = true;
            this.drag(a);
            return
        }
        b = 0;
        for (c = this.family.bonds.length; b < c; b++)if (this.family.bonds[b].isHover) {
            this.family.bonds[b].isHover = false;
            this.family.bonds[b].bondOrder +=
                    this.family.bonds[b].bondOrder % 1 + 1;
            if (this.family.bonds[b].bondOrder > 3)this.family.bonds[b].bondOrder = 1;
            this.family.check();
            this.repaint();
            return
        }
    }
};
DoodleCanvas.prototype.click = function(a) {
    for (var b = 0,c = this.family.people.length; b < c; b++) {
        if (this.tempAtom != null && this.family.people[b].isSelected) {
            if (this.tempAtom.isOverlap)for (var d = 0,e = this.family.people.length; d < e; d++) {
                if (this.family.people[d].distance(this.tempAtom) < 5)this.tempAtom = this.family.people[d]
            } else this.family.people[this.family.people.length] = this.tempAtom;
            var f = false;
            d = 0;
            for (e = this.family.bonds.length; d < e; d++)if (this.family.bonds[d].contains(this.family.people[b]) && this.family.bonds[d].contains(this.tempAtom)) {
                f =
                        true;
                this.family.bonds[d].bondOrder += this.family.bonds[d].bondOrder % 1 + 1;
                if (this.family.bonds[d].bondOrder > 3)this.family.bonds[d].bondOrder = 1
            }
            f || (this.family.bonds[this.family.bonds.length] = new Bond(this.family.people[b], this.tempAtom, 1));
            this.family.check()
        }
        this.family.people[b].isSelected = false
    }
    this.tempAtom = null;
    this.mousemove(a)
};
DoodleCanvas.prototype.mousemove = function(a) {
    if (this.tempAtom == null) {
        for (var b = Infinity,c = null,d = 0,e = this.family.people.length; d < e; d++) {
            this.family.people[d].isHover = false;
            var f = a.p.distance(this.family.people[d]);
            if (f < this.specs.bondLength && f < b) {
                b = f;
                c = this.family.people[d]
            }
        }
        d = 0;
        for (e = this.family.bonds.length; d < e; d++) {
            this.family.bonds[d].isHover = false;
            f = a.p.distance(this.family.bonds[d].getCenter());
            if (f < this.specs.bondLength && f < b) {
                b = f;
                c = this.family.bonds[d]
            }
        }
        if (c != null)c.isHover = true;
        this.isHelp = false;
        if (a.p.distance(this.helpPos) < 10)this.isHelp = true;
        this.repaint()
    }
};
DoodleCanvas.prototype.keyup = function(a) {
    if (CANVAS_DRAGGING == this)if (this.lastPoint != null) {
        a.p = this.lastPoint;
        this.drag(a)
    }
};
DoodleCanvas.prototype.keydown = function(a) {
    if (CANVAS_DRAGGING == this) {
        if (this.lastPoint != null) {
            a.p = this.lastPoint;
            this.drag(a)
        }
    } else if (a.keyCode >= 37 && a.keyCode <= 40) {
        var b = 0,c = 0;
        switch (a.keyCode) {case 37:b = -10;break;case 38:c = -10;break;case 39:b = 10;break;case 40:c = 10;break
        }
        for (var d = 0,e = this.family.people.length; d < e; d++) {
            this.family.people[d].x += b;
            this.family.people[d].y += c
        }
        d = 0;
        for (e = this.family.rings.length; d < e; d++)this.family.rings[d].center = this.family.rings[d].getCenter();
        this.repaint()
    } else if (a.keyCode ==
            187 || a.keyCode == 189) {
        d = 0;
        for (e = this.family.people.length; d < e; d++)if (this.family.people[d].isHover) {
            this.family.people[d].charge += a.keyCode == 187 ? 1 : -1;
            this.repaint();
            break
        }
    } else if (a.keyCode == 8 || a.keyCode == 127) {
        d = 0;
        for (e = this.family.people.length; d < e; d++)if (this.family.people[d].isHover) {
            a = 0;
            for (b = this.family.people.length; a < b; a++)this.family.people[a].visited = false;
            c = [];
            e = [];
            this.family.people[d].visited = true;
            a = 0;
            for (b = this.family.bonds.length; a < b; a++)if (this.family.bonds[a].contains(this.family.people[d])) {
                var f =
                        [],h = [],g = new Queue;
                for (g.enqueue(this.family.bonds[a].getNeighbor(this.family.people[d])); !g.isEmpty();) {
                    var i = g.dequeue();
                    if (!i.visited) {
                        i.visited = true;
                        f[f.length] = i;
                        for (var j = 0,l = this.family.bonds.length; j < l; j++)if (this.family.bonds[j].contains(i) && !this.family.bonds[j].getNeighbor(i).visited) {
                            g.enqueue(this.family.bonds[j].getNeighbor(i));
                            h[h.length] = this.family.bonds[j]
                        }
                    }
                }
                c[c.length] = f;
                e[e.length] = h
            }
            f = d = -1;
            a = 0;
            for (b = c.length; a < b; a++)if (c[a].length > d) {
                f = a;
                d = c[a].length
            }
            if (f > -1) {
                this.family.people =
                        c[f];
                this.family.bonds = e[f];
                this.family.check()
            } else {
                d = new Molecule;
                d.people[0] = new Atom("C", 0, 0, 0);
                this.loadMolecule(d)
            }
            this.repaint();
            break
        }
    } else {
        d = 0;
        for (e = this.family.people.length; d < e; d++)if (this.family.people[d].isHover) {
            c = String.fromCharCode(a.keyCode);
            f = e = null;
            h = false;
            a = 0;
            for (b = symbols.length; a < b; a++)if (this.family.people[d].name.charAt(0) == c)if (symbols[a] == this.family.people[d].name)h = true; else {
                if (symbols[a].charAt(0) == c)if (h && f == null)f = symbols[a]; else if (e == null)e = symbols[a]
            } else if (symbols[a].charAt(0) ==
                    c) {
                e = symbols[a];
                break
            }
            if (f != null)this.family.people[d].name = f; else if (e != null)this.family.people[d].name = e;
            this.family.check();
            this.repaint();
            break
        }
    }
};
function FileCanvas(a, b, c, d) {
    a && this.create(a, b, c);
    form = '<br><form name="FileForm" enctype="multipart/form-data" method="POST" action="' + d + '" target="HiddenFileFrame"><input type="file" name="f" /><input type="submit" name="submitbutton" value="Show File" /></form><iframe id="HFF-' + a + '" name="HiddenFileFrame" height="0" width="0" style="display:none;" onLoad="GetMolFromFrame(\'HFF-' + a + "', " + a + ')"></iframe>';
    document.writeln(form);
    this.emptyMessage = "Click below to load file";
    this.repaint();
    return true
}
FileCanvas.prototype = new Canvas;
function HyperlinkCanvas(a, b, c, d, e, f) {
    a && this.create(a, b, c);
    this.urlOrFunction = d;
    this.color = e ? e : "blue";
    this.size = f ? f : 2;
    this.openInNewWindow = true;
    this.e = this.hoverImage = null;
    return true
}
HyperlinkCanvas.prototype = new Canvas;
HyperlinkCanvas.prototype.drawChildExtras = function(a) {
    if (this.e != null)if (this.hoverImage == null) {
        a.strokeStyle = this.color;
        a.lineWidth = this.size * 2;
        a.strokeRect(0, 0, this.width, this.height)
    } else a.drawImage(this.hoverImage, 0, 0)
};
HyperlinkCanvas.prototype.setHoverImage = function(a) {
    this.hoverImage = new Image;
    this.hoverImage.src = a
};
HyperlinkCanvas.prototype.click = function() {
    this.e = null;
    this.repaint();
    if (this.urlOrFunction instanceof Function)this.urlOrFunction(); else if (this.openInNewWindow)window.open(this.urlOrFunction); else location.href = this.urlOrFunction
};
HyperlinkCanvas.prototype.mouseout = function() {
    this.e = null;
    this.repaint()
};
HyperlinkCanvas.prototype.mouseover = function(a) {
    this.e = a;
    this.repaint()
};
function MolGrabberCanvas(a, b, c, d) {
    a && this.create(a, b, c);
    form = '<form name="MolGrabberForm" method="POST" action="' + d + '" target="HiddenMolGrabberFrame" onSubmit="ValidateMolecule(MolGrabberForm); return false;"><input type="hidden" name="dim" value="2" /><input type="text" name="q" value="" /><input type="submit" name="submitbutton" value="Show Molecule" /></form><iframe id="HMGF-' + a + '" name="HiddenMolGrabberFrame" height="0" width="0" style="display:none;" onLoad="GetMolFromFrame(\'HMGF-' + a + "', " +
            a + ')"></iframe>';
    document.writeln(form);
    this.emptyMessage = "Enter search term below";
    this.repaint();
    return true
}
MolGrabberCanvas.prototype = new Canvas;
MolGrabberCanvas.prototype.setSearchTerm = function(a) {
    document.MolGrabberForm.q.value = a;
    document.MolGrabberForm.submit()
};
function RotatorCanvas(a, b, c, d) {
    a && this.create(a, b, c);
    this.rotate3D = d;
    this.zIncrement = this.yIncrement = this.xIncrement = a = Math.PI / 360;
    return true
}
RotatorCanvas.prototype = new AnimatorCanvas;
RotatorCanvas.prototype.nextFrame = function() {
    if (this.family == null)this.stopAnimation(); else if (this.rotate3D) {
        var a = [];
        mat4.identity(a);
        mat4.rotate(a, this.xIncrement, [1,0,0]);
        mat4.rotate(a, this.yIncrement, [0,1,0]);
        mat4.rotate(a, this.zIncrement, [0,0,1]);
        for (var b = 0,c = this.family.people.length; b < c; b++) {
            var d = this.family.people[b],e = [d.x - this.width / 2,d.y - this.height / 2,d.z];
            mat4.multiplyVec3(a, e);
            d.x = e[0] + this.width / 2;
            d.y = e[1] + this.height / 2;
            d.z = e[2]
        }
        b = 0;
        for (c = this.family.rings.length; b < c; b++)this.family.rings[b].center =
                this.family.rings[b].getCenter();
        this.specs.atoms_display && this.specs.atoms_circles_2D && this.family.sortAtomsByZ();
        this.specs.bonds_display && this.specs.bonds_clearOverlaps_2D && this.family.sortBondsByZ()
    } else this.specs.rotateAngle += this.zIncrement
};
RotatorCanvas.prototype.dblclick = function() {
    this.isRunning() ? this.stopAnimation() : this.startAnimation()
};
function SlideshowCanvas(a, b, c) {
    a && this.create(a, b, c);
    this.molecules = [];
    this.curIndex = 0;
    this.timeout = 5E3;
    this.alpha = 0;
    this.innerHandle = null;
    this.phase = 0;
    return true
}
SlideshowCanvas.prototype = new AnimatorCanvas;
SlideshowCanvas.prototype.drawChildExtras = function(a) {
    a.fillStyle = "rgba(" + parseInt(this.specs.backgroundColor.substring(1, 3), 16) + ", " + parseInt(this.specs.backgroundColor.substring(3, 5), 16) + ", " + parseInt(this.specs.backgroundColor.substring(5, 7), 16) + ", " + this.alpha + ")";
    a.fillRect(0, 0, this.width, this.height)
};
SlideshowCanvas.prototype.nextFrame = function() {
    if (this.molecules.length == 0)this.stopAnimation(); else {
        this.phase = 0;
        var a = this,b = 1;
        this.innerHandle = setInterval(function() {
            a.alpha = b / 15;
            a.repaint();
            b == 15 && a.breakInnerHandle();
            b++
        }, 33)
    }
};
SlideshowCanvas.prototype.breakInnerHandle = function() {
    if (this.innerHandle != null) {
        clearInterval(this.innerHandle);
        this.innerHandle = null
    }
    if (this.phase == 0) {
        this.curIndex++;
        if (this.curIndex > this.molecules.length - 1)this.curIndex = 0;
        this.alpha = 1;
        this.loadMolecule(this.molecules[this.curIndex]);
        this.phase = 1;
        var a = this,b = 1;
        this.innerHandle = setInterval(function() {
            a.alpha = (15 - b) / 15;
            a.repaint();
            b == 15 && a.breakInnerHandle();
            b++
        }, 33)
    } else if (this.phase == 1) {
        this.alpha = 0;
        this.repaint()
    }
};
SlideshowCanvas.prototype.addMolecule = function(a) {
    this.molecules.length == 0 && this.loadMolecule(a);
    this.molecules[this.molecules.length] = a
};
function TransformCanvas(a, b, c, d) {
    a && this.create(a, b, c);
    this.lastPoint = null;
    this.rotate3D = d;
    this.rotationMultMod = 1.3;
    this.lastPinchScale = 1;
    return true
}
TransformCanvas.prototype = new Canvas;
TransformCanvas.prototype.mousedown = function(a) {
    this.lastPoint = a.p;
    this.lastPinchScale = 1
};
TransformCanvas.prototype.rightmousedown = function(a) {
    this.lastPoint = a.p
};
TransformCanvas.prototype.drag = function(a) {
    if (ALT) {
        var b = new Point(a.p.x, a.p.y);
        b.sub(this.lastPoint);
        for (var c = 0,d = this.family.people.length; c < d; c++)this.family.people[c].add(b);
        this.lastPoint = a.p
    } else if (this.rotate3D == true) {
        b = Math.max(this.width / 4, this.height / 4);
        c = (a.p.x - this.lastPoint.x) / b * this.rotationMultMod;
        d = -(a.p.y - this.lastPoint.y) / b * this.rotationMultMod;
        b = [];
        mat4.identity(b);
        mat4.rotate(b, d, [1,0,0]);
        mat4.rotate(b, c, [0,1,0]);
        c = 0;
        for (d = this.family.people.length; c < d; c++) {
            var e = this.family.people[c],
                    f = [e.x - this.width / 2,e.y - this.height / 2,e.z];
            mat4.multiplyVec3(b, f);
            e.x = f[0] + this.width / 2;
            e.y = f[1] + this.height / 2;
            e.z = f[2]
        }
        c = 0;
        for (d = this.family.rings.length; c < d; c++)this.family.rings[c].center = this.family.rings[c].getCenter();
        this.lastPoint = a.p;
        this.specs.atoms_display && this.specs.atoms_circles_2D && this.family.sortAtomsByZ();
        this.specs.bonds_display && this.specs.bonds_clearOverlaps_2D && this.family.sortBondsByZ()
    } else {
        b = new Point(this.width / 2, this.height / 2);
        c = b.angle(this.lastPoint);
        this.specs.rotateAngle -=
                b.angle(a.p) - c;
        this.lastPoint = a.p
    }
    this.repaint()
};
TransformCanvas.prototype.mousewheel = function(a, b) {
    this.specs.scale += b / 100;
    if (this.specs.scale < 0.01)this.specs.scale = 0.01;
    this.repaint()
};
TransformCanvas.prototype.gesturechange = function(a) {
    this.specs.scale *= a.originalEvent.scale / this.lastPinchScale;
    if (this.specs.scale < 0.01)this.specs.scale = 0.01;
    this.lastPinchScale = a.originalEvent.scale;
    this.repaint()
};
function ViewerCanvas(a, b, c) {
    a && this.create(a, b, c);
    return true
}
ViewerCanvas.prototype = new Canvas;
function SpectrumCanvas(a, b, c) {
    a && this.create(a, b, c);
    this.spectrum = null;
    this.emptyMessage = "No Spectrum Loaded or Recognized";
    return true
}
SpectrumCanvas.prototype = new Canvas;
SpectrumCanvas.prototype.repaint = function() {
    var a = document.getElementById(this.id);
    if (a.getContext) {
        a = a.getContext("2d");
        if (this.image == null) {
            if (this.specs.backgroundColor != null) {
                a.fillStyle = this.specs.backgroundColor;
                a.fillRect(0, 0, this.width, this.height)
            }
        } else a.drawImage(this.image, 0, 0);
        if (this.spectrum != null && this.spectrum.data.length > 0)this.spectrum.draw(a, this.specs, this.width, this.height); else if (this.emptyMessage != null) {
            a.fillStyle = "#737683";
            a.textAlign = "center";
            a.textBaseline = "middle";
            a.font =
                    "18px Helvetica, Verdana, Arial, Sans-serif";
            a.fillText(this.emptyMessage, this.width / 2, this.height / 2)
        }
        this.drawChildExtras && this.drawChildExtras(a)
    }
};
SpectrumCanvas.prototype.loadSpectrum = function(a) {
    this.spectrum = a;
    this.repaint()
};
SpectrumCanvas.prototype.getSpectrum = function() {
    return this.spectrum
};
function ObserverCanvas(a, b, c) {
    a && this.create(a, b, c);
    return true
}
ObserverCanvas.prototype = new SpectrumCanvas;
function PerspectiveCanvas(a, b, c) {
    a && this.create(a, b, c);
    this.dragRange = null;
    this.lastPinchScale = 1;
    return true
}
PerspectiveCanvas.prototype = new SpectrumCanvas;
PerspectiveCanvas.prototype.mousedown = function(a) {
    this.dragRange = new Point(a.p.x, a.p.x)
};
PerspectiveCanvas.prototype.mouseup = function(a) {
    if (this.dragRange != null && this.dragRange.x != this.dragRange.y) {
        this.spectrum.zoom(this.dragRange.x, a.p.x, this.width);
        this.dragRange = null;
        this.repaint()
    }
};
PerspectiveCanvas.prototype.drag = function(a) {
    this.dragRange.y = a.p.x;
    this.repaint()
};
PerspectiveCanvas.prototype.drawChildExtras = function(a) {
    if (this.dragRange != null) {
        var b = Math.min(this.dragRange.x, this.dragRange.y),c = Math.max(this.dragRange.x, this.dragRange.y);
        a.strokeStyle = "gray";
        a.lineStyle = 1;
        a.beginPath();
        a.moveTo(b, this.height / 2);
        for (b = b; b <= c; b++)b % 10 < 5 ? a.lineTo(b, Math.round(this.height / 2)) : a.moveTo(b, Math.round(this.height / 2));
        a.stroke()
    }
};
PerspectiveCanvas.prototype.mousewheel = function(a, b) {
    this.specs.scale += b / 100;
    if (this.specs.scale < 0.01)this.specs.scale = 0.01;
    this.repaint()
};
PerspectiveCanvas.prototype.dblclick = function() {
    this.spectrum.setup();
    this.specs.scale = 1;
    this.repaint()
};
PerspectiveCanvas.prototype.gesturechange = function(a) {
    this.specs.scale *= a.originalEvent.scale / this.lastPinchScale;
    if (this.specs.scale < 0.01)this.specs.scale = 0.01;
    this.lastPinchScale = a.originalEvent.scale;
    this.repaint()
};
var NO_WEBGL_WARNING = false;
function Canvas3D(a, b, c) {
    a && this.create(a, b, c);
    this.rotationMatrix = mat4.identity([]);
    this.translationMatrix = mat4.identity([]);
    this.lastPoint = null;
    return true
}
Canvas3D.prototype = new Canvas;
Canvas3D.prototype.afterLoadMolecule = function() {
    var a = this.family.getDimension();
    this.translationMatrix = mat4.translate(mat4.identity([]), [0,0,-Math.max(a.x, a.y) - 10]);
    this.setupScene()
};
Canvas3D.prototype.setViewDistance = function(a) {
    this.translationMatrix = mat4.translate(mat4.identity([]), [0,0,-a])
};
Canvas3D.prototype.repaint = function() {
    this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
    this.gl.modelViewMatrix = mat4.multiply(this.translationMatrix, this.rotationMatrix, []);
    this.family != null && this.family.render(this.gl, this.specs)
};
Canvas3D.prototype.center = function() {
    document.getElementById(this.id);
    var a = this.family.getCenter3D(),b = new Atom("C", 0, 0, 0);
    b.sub3D(a);
    a = 0;
    for (var c = this.family.people.length; a < c; a++)this.family.people[a].add3D(b)
};
Canvas3D.prototype.subCreate = function() {
    try {
        this.gl = document.getElementById(this.id).getContext("experimental-webgl");
        this.gl.viewport(0, 0, this.width, this.height)
    } catch(a) {
    }
    if (this.gl) {
        this.gl.program = this.gl.createProgram();
        this.gl.shader = new Shader;
        this.gl.shader.init(this.gl);
        this.setupScene()
    } else NO_WEBGL_WARNING || alert("WebGL is not installed or enabled.")
};
Canvas3D.prototype.setupScene = function() {
    this.gl.clearColor(parseInt(this.specs.backgroundColor.substring(1, 3), 16) / 255, parseInt(this.specs.backgroundColor.substring(3, 5), 16) / 255, parseInt(this.specs.backgroundColor.substring(5, 7), 16) / 255, 1);
    this.gl.clearDepth(1);
    this.gl.enable(this.gl.DEPTH_TEST);
    this.gl.depthFunc(this.gl.LEQUAL);
    this.gl.sphereBuffer = new Sphere;
    this.gl.sphereBuffer.generate(this.gl, 1, this.specs.atoms_resolution_3D, this.specs.atoms_resolution_3D);
    this.gl.cylinderBuffer = new Cylinder;
    this.gl.cylinderBuffer.generate(this.gl, 1, 1, this.specs.bonds_resolution_3D);
    this.gl.lighting = new Light(this.specs.lightDiffuseColor_3D, this.specs.lightSpecularColor_3D, this.specs.lightDirection_3D);
    this.gl.lighting.lightScene(this.gl);
    this.gl.material = new Material(this.specs.atoms_materialAmbientColor_3D, this.specs.atoms_color, this.specs.atoms_materialSpecularColor_3D, this.specs.atoms_materialShininess_3D);
    this.gl.material.setup(this.gl);
    this.gl.projectionMatrix = mat4.perspective(this.specs.projectionVerticalFieldOfView_3D,
            this.specs.projectionWidthHeightRatio_3D, this.specs.projectionFrontCulling_3D, this.specs.projectionBackCulling_3D);
    this.gl.setMatrixUniforms = function(a, b) {
        this.uniformMatrix4fv(this.getUniformLocation(this.program, "u_projection_matrix"), false, new Float32Array(a));
        this.uniformMatrix4fv(this.getUniformLocation(this.program, "u_model_view_matrix"), false, new Float32Array(b));
        var c = mat4.transpose(mat4.inverse(b, []));
        this.uniformMatrix4fv(this.getUniformLocation(this.program, "u_normal_matrix"), false, new Float32Array(c))
    }
};
Canvas3D.prototype.mousedown = function(a) {
    this.lastPoint = a.p
};
Canvas3D.prototype.rightmousedown = function(a) {
    this.lastPoint = a.p
};
Canvas3D.prototype.drag = function(a) {
    if (ALT) {
        var b = new Point(a.p.x, a.p.y);
        b.sub(this.lastPoint);
        mat4.translate(this.translationMatrix, [b.x / 20,-b.y / 20,0])
    } else {
        var c = a.p.x - this.lastPoint.x;
        b = a.p.y - this.lastPoint.y;
        c = mat4.rotate(mat4.identity([]), c * Math.PI / 180, [0,1,0]);
        mat4.rotate(c, b * Math.PI / 180, [1,0,0]);
        this.rotationMatrix = mat4.multiply(c, this.rotationMatrix)
    }
    this.lastPoint = a.p;
    this.repaint()
};
Canvas3D.prototype.mousewheel = function(a, b) {
    mat4.translate(this.translationMatrix, [0,0,b]);
    this.repaint()
};
function MolGrabberCanvas3D(a, b, c, d) {
    a && this.create(a, b, c);
    form = '<br><form name="MolGrabberForm3D" method="POST" action="' + d + '" target="HiddenMolGrabberFrame3D" onSubmit="ValidateMolecule(MolGrabberForm3D); return false;"><input type="hidden" name="dim" value="3" /><input type="text" name="q" value="" /><input type="submit" name="submitbutton" value="Show Molecule" /></form><iframe id="HMGF3D-' + a + '" name="HiddenMolGrabberFrame3D" height="0" width="0" style="display:none;" onLoad="Get3DMolFromFrame(\'HMGF3D-' +
            a + "', " + a + ')"></iframe>';
    document.writeln(form);
    return true
}
MolGrabberCanvas3D.prototype = new Canvas3D;
MolGrabberCanvas3D.prototype.setSearchTerm = function(a) {
    document.MolGrabberForm3D.q.value = a;
    document.MolGrabberForm3D.submit()
};
function RotatorCanvas3D(a, b, c) {
    a && this.create(a, b, c);
    this.handle = null;
    this.timeout = AnimatorCanvas.prototype.timeout;
    this.zIncrement = this.yIncrement = this.xIncrement = a = Math.PI / 360;
    return true
}
RotatorCanvas3D.prototype = new Canvas3D;
RotatorCanvas3D.prototype.startAnimation = AnimatorCanvas.prototype.startAnimation;
RotatorCanvas3D.prototype.stopAnimation = AnimatorCanvas.prototype.stopAnimation;
RotatorCanvas3D.prototype.isRunning = AnimatorCanvas.prototype.isRunning;
RotatorCanvas3D.prototype.dblclick = RotatorCanvas.prototype.dblclick;
RotatorCanvas3D.prototype.mousedown = null;
RotatorCanvas3D.prototype.rightmousedown = null;
RotatorCanvas3D.prototype.drag = null;
RotatorCanvas3D.prototype.mousewheel = null;
RotatorCanvas3D.prototype.nextFrame = function() {
    if (this.family == null)this.stopAnimation(); else {
        var a = [];
        mat4.identity(a);
        mat4.rotate(a, this.xIncrement, [1,0,0]);
        mat4.rotate(a, this.yIncrement, [0,1,0]);
        mat4.rotate(a, this.zIncrement, [0,0,1]);
        mat4.multiply(this.rotationMatrix, a)
    }
};
function TransformCanvas3D(a, b, c) {
    a && this.create(a, b, c);
    return true
}
TransformCanvas3D.prototype = new Canvas3D;
function ViewerCanvas3D(a, b, c) {
    a && this.create(a, b, c);
    return true
}
ViewerCanvas3D.prototype = new Canvas3D;
ViewerCanvas3D.prototype.mousedown = null;
ViewerCanvas3D.prototype.rightmousedown = null;
ViewerCanvas3D.prototype.drag = null;
ViewerCanvas3D.prototype.mousewheel = null;
function Layout() {
    return true
}
Layout.prototype.layout = function() {
    this.innerLayout && this.innerLayout()
};
Layout.prototype.create = function(a) {
    this.name = a;
    this.specs = new VisualSpecifications
};
function SimpleReactionLayout(a) {
    this.reactants = [];
    this.products = [];
    this.textBelow = this.textAbove = null;
    this.arrow = "&rarr;";
    this.plus = "+";
    this.create(a);
    return true
}
SimpleReactionLayout.prototype = new Layout;
SimpleReactionLayout.prototype.addReactant = function(a) {
    this.reactants[this.reactants.length] = a
};
SimpleReactionLayout.prototype.addProduct = function(a) {
    this.products[this.products.length] = a
};
SimpleReactionLayout.prototype.innerLayout = function() {
    document.writeln("<table><tr>");
    for (var a = 0,b = this.reactants.length; a < b; a++) {
        a > 0 && document.writeln('<td><span style="font-size:25px;">' + this.plus + "</span></td>");
        document.writeln("<td>");
        var c = this.reactants[a].getDimension();
        c = new ViewerCanvas(this.name + "_reactant" + a, c.x + 60, c.y + 60);
        this.specs.backgroundColor == null && $("#" + this.name + "_reactant" + a).css("border", "0px");
        c.specs = this.specs;
        c.loadFamily(this.reactants[a]);
        document.writeln("</td>")
    }
    document.writeln("<td>");
    document.writeln("<table>");
    document.writeln("<tr><td>");
    this.textAbove != null ? document.writeln("<center>" + this.textAbove + "</center>") : document.writeln("&nbsp;");
    document.writeln("</td></tr>");
    document.writeln('<tr><td><center><span style="font-size:25px;">' + this.arrow + "</span></center></td></tr>");
    document.writeln("<tr><td>");
    this.textBelow != null ? document.writeln("<center>" + this.textBelow + "</center>") : document.writeln("&nbsp;");
    document.writeln("</td></tr>");
    document.writeln("</table>");
    document.writeln("</td>");
    a = 0;
    for (b = this.products.length; a < b; a++) {
        a > 0 && document.writeln('<td><span style="font-size:25px;">' + this.plus + "</td>");
        document.writeln("<td>");
        c = this.products[a].getDimension();
        c = new ViewerCanvas(this.name + "_product" + a, c.x + 60, c.y + 60);
        this.specs.backgroundColor == null && $("#" + this.name + "_product" + a).css("border", "0px");
        c.specs = this.specs;
        c.loadFamily(this.products[a]);
        document.writeln("</td>")
    }
    document.writeln("</tr></table>")
};
var LEEWAY = 1.1;
function getPointsPerAngstrom() {
    return default_bondLength_2D / default_angstromsPerBondLength
}
function deduceCovalentBonds(a, b) {
    var c = getPointsPerAngstrom();
    if (b)c = b;
    for (var d = 0,e = a.people.length; d < e; d++)for (var f = d + 1; f < e; f++) {
        var h = a.people[d],g = a.people[f];
        if (h.distance3D(g) < (ELEMENT[h.name].covalentRadius + ELEMENT[g.name].covalentRadius) * c * LEEWAY)a.bonds[a.bonds.length] = new Bond(h, g, 1)
    }
}
function removeHydrogens(a) {
    for (var b = [],c = [],d = 0,e = a.bonds.length; d < e; d++)if (a.bonds[d].a1.name != "H" && a.bonds[d].a2.name != "H")c[c.length] = a.bonds[d];
    d = 0;
    for (e = a.people.length; d < e; d++)if (a.people[d].name != "H")b[b.length] = a.people[d];
    a.people = b;
    a.bonds = c
}
function copy(a) {
    for (var b = 0,c = a.people.length; b < c; b++)a.people[b].metaID = b;
    var d = new Molecule;
    b = 0;
    for (c = a.people.length; b < c; b++)d.people[b] = new Atom(a.people[b].name, a.people[b].x, a.people[b].y, a.people[b].z);
    b = 0;
    for (c = a.bonds.length; b < c; b++)d.bonds[b] = new Bond(d.people[a.bonds[b].a1.metaID], d.people[a.bonds[b].a2.metaID], a.bonds[b].bondOrder);
    return d
}
function Counter() {
    this.value = 0;
    this.family = null;
    return true
}
Counter.prototype.setMolecule = function(a) {
    this.value = 0;
    this.family = a;
    this.innerCalculate && this.innerCalculate()
};
function FrerejacqueNumberCounter(a) {
    this.setMolecule(a);
    return true
}
FrerejacqueNumberCounter.prototype = new Counter;
FrerejacqueNumberCounter.prototype.innerCalculate = function() {
    this.value = this.family.bonds.length - this.family.people.length + (new NumberOfMoleculesCounter(this.family)).value
};
function NumberOfMoleculesCounter(a) {
    this.setMolecule(a);
    return true
}
NumberOfMoleculesCounter.prototype = new Counter;
NumberOfMoleculesCounter.prototype.innerCalculate = function() {
    for (var a = 0,b = this.family.people.length; a < b; a++)this.family.people[a].visited = false;
    a = 0;
    for (b = this.family.people.length; a < b; a++)if (!this.family.people[a].visited) {
        this.value++;
        var c = new Queue;
        this.family.people[a].visited = true;
        for (c.enqueue(this.family.people[a]); !c.isEmpty();)for (var d = c.dequeue(),e = 0,f = this.family.bonds.length; e < f; e++)if (this.family.bonds[e].contains(d)) {
            var h = this.family.bonds[e].getNeighbor(d);
            if (!h.visited) {
                h.visited =
                        true;
                c.enqueue(h)
            }
        }
    }
};
function RingFinder() {
    this.rings = this.bonds = this.people = null;
    return true
}
RingFinder.prototype.reduce = function(a) {
    for (var b = 0,c = a.people.length; b < c; b++)a.people[b].visited = false;
    b = 0;
    for (c = a.bonds.length; b < c; b++)a.bonds[b].visited = false;
    for (var d = true; d;) {
        d = false;
        b = 0;
        for (c = a.people.length; b < c; b++) {
            for (var e = 0,f = null,h = 0,g = a.bonds.length; h < g; h++)if (a.bonds[h].contains(a.people[b]) && !a.bonds[h].visited) {
                e++;
                if (e == 2)break;
                f = a.bonds[h]
            }
            if (e == 1) {
                d = true;
                f.visited = true;
                a.people[b].visited = true
            }
        }
    }
    b = 0;
    for (c = a.people.length; b < c; b++)a.people[b].visited || (this.people[this.people.length] = a.people[b]);
    b = 0;
    for (c = a.bonds.length; b < c; b++)a.bonds[b].visited || (this.bonds[this.bonds.length] = a.bonds[b]);
    if (this.bonds.length == 0 && this.people.length != 0)this.people = []
};
RingFinder.prototype.setMolecule = function(a) {
    this.people = [];
    this.bonds = [];
    this.rings = [];
    this.reduce(a);
    this.people.length > 2 && this.innerGetRings && this.innerGetRings()
};
RingFinder.prototype.fuse = function() {
    for (var a = 0,b = this.rings.length; a < b; a++)for (var c = 0,d = this.bonds.length; c < d; c++)if ($.inArray(this.bonds[c].a1, this.rings[a].people) != -1 && $.inArray(this.bonds[c].a2, this.rings[a].people) != -1)this.rings[a].bonds[this.rings[a].bonds.length] = this.bonds[c]
};
function Finger(a, b) {
    this.people = [];
    if (b)for (var c = 0,d = b.people.length; c < d; c++)this.people[c] = b.people[c];
    this.people[this.people.length] = a;
    return true
}
Finger.prototype.grow = function(a, b) {
    for (var c = this.people[this.people.length - 1],d = [],e = 0,f = a.length; e < f; e++)if (a[e].contains(c)) {
        var h = a[e].getNeighbor(c);
        if ($.inArray(h, b) == -1)d[d.length] = h
    }
    c = [];
    e = 0;
    for (f = d.length; e < f; e++)c[c.length] = new Finger(d[e], this);
    return c
};
Finger.prototype.check = function(a, b, c) {
    for (var d = 0,e = b.people.length - 1; d < e; d++)if ($.inArray(b.people[d], this.people) != -1)return null;
    var f = null;
    if (b.people[b.people.length - 1] == this.people[this.people.length - 1]) {
        f = new Ring;
        f.people[0] = c;
        d = 0;
        for (e = this.people.length; d < e; d++)f.people[f.people.length] = this.people[d];
        for (d = b.people.length - 2; d >= 0; d--)f.people[f.people.length] = b.people[d]
    } else {
        var h = [];
        d = 0;
        for (e = a.length; d < e; d++)if (a[d].contains(b.people[b.people.length - 1]))h[h.length] = a[d];
        d = 0;
        for (e = h.length; d < e; d++)if ((b.people.length ==
                1 || !h[d].contains(b.people[b.people.length - 2])) && h[d].contains(this.people[this.people.length - 1])) {
            f = new Ring;
            f.people[0] = c;
            a = 0;
            for (c = this.people.length; a < c; a++)f.people[f.people.length] = this.people[a];
            for (a = b.people.length - 1; a >= 0; a--)f.people[f.people.length] = b.people[a];
            break
        }
    }
    return f
};
var EULER_FACET_FINGER_BREAK = 5;
function EulerFacetRingFinder(a) {
    this.setMolecule(a);
    return true
}
EulerFacetRingFinder.prototype = new RingFinder;
EulerFacetRingFinder.prototype.innerGetRings = function() {
    for (var a = 0,b = this.people.length; a < b; a++) {
        for (var c = [],d = 0,e = this.bonds.length; d < e; d++)if (this.bonds[d].contains(this.people[a]))c[c.length] = this.bonds[d].getNeighbor(this.people[a]);
        d = 0;
        for (e = c.length; d < e; d++)for (var f = d + 1; f < c.length; f++) {
            var h = [];
            h[0] = new Finger(c[d]);
            h[1] = new Finger(c[f]);
            var g = [];
            g[0] = this.people[a];
            for (var i = 0,j = c.length; i < j; i++)if (i != d && i != f)g[g.length] = c[i];
            var l = [];
            if (i = h[0].check(this.bonds, h[1], this.people[a]))l[0] = i;
            for (; l.length ==
                    0 && h.length > 0 && h[0].people.length < EULER_FACET_FINGER_BREAK;) {
                var k = [];
                i = 0;
                for (j = h.length; i < j; i++)for (var n = h[i].grow(this.bonds, g),o = 0,m = n.length; o < m; o++)k[k.length] = n[o];
                h = k;
                i = 0;
                for (j = h.length; i < j; i++)for (o = i + 1; o < j; o++)if (m = h[i].check(this.bonds, h[o], this.people[a]))l[l.length] = m;
                if (l.length == 0) {
                    k = [];
                    i = 0;
                    for (j = g.length; i < j; i++) {
                        o = 0;
                        for (m = this.bonds.length; o < m; o++)if (this.bonds[o].contains(g[i])) {
                            c = this.bonds[o].getNeighbor(g[i]);
                            if ($.inArray(c, g) == -1 && $.inArray(c, k) == -1)k[k.length] = c
                        }
                    }
                    i = 0;
                    for (j = k.length; i <
                            j; i++)g[g.length] = k[i]
                }
            }
            if (l.length > 0) {
                h = null;
                i = 0;
                for (j = l.length; i < j; i++)if (!h || h.people.length > l[i].people.length)h = l[i];
                l = false;
                i = 0;
                for (j = this.rings.length; i < j; i++) {
                    g = true;
                    o = 0;
                    for (m = h.people.length; o < m; o++)if ($.inArray(h.people[o], this.rings[i].people) == -1) {
                        g = false;
                        break
                    }
                    if (g) {
                        l = true;
                        break
                    }
                }
                l || (this.rings[this.rings.length] = h)
            }
        }
    }
    this.fuse()
};
function Link(a) {
    this.data = a;
    this.next = null;
    return true
}
Link.prototype.reverse = function(a) {
    this.next != null && this.next.reverse(this);
    this.next = a
};
Link.prototype.getDataArray = function(a) {
    a[a.length] = this.data;
    this.next != null && this.next.getDataArray(a)
};
Link.prototype.count = function() {
    return this.next == null ? 1 : 1 + this.next.count()
};
function PGraphEdge(a, b) {
    if (a != null) {
        this.head = new Link(a);
        this.head.next = new Link(b)
    }
    return true
}
PGraphEdge.prototype.getLast = function() {
    for (var a = this.head; a.next != null;)a = a.next;
    return a
};
PGraphEdge.prototype.getCopy = function() {
    var a = new PGraphEdge,b = this.head,c = new Link(b.data);
    for (a.head = c; b.next != null;) {
        b = b.next;
        c.next = new Link(b.data);
        c = c.next
    }
    return a
};
PGraphEdge.prototype.merge = function(a) {
    var b = this.getCopy(),c = this.head.data;
    if (a.head.data != c && a.getLast().data != c)c = this.getLast().data;
    var d = a.getCopy();
    b.head.data == c && b.reverse();
    a.head.data != c && d.reverse();
    d.head = d.head.next;
    b.getLast().next = d.head;
    return b
};
PGraphEdge.prototype.connectsTo = function(a) {
    return this.head.data == a || this.getLast().data == a
};
PGraphEdge.prototype.isCycle = function() {
    return this.head.data == this.getLast().data
};
PGraphEdge.prototype.size = function() {
    return this.head.count()
};
PGraphEdge.prototype.reverse = function() {
    var a = this.getLast();
    this.head.reverse(null);
    this.head = a
};
function indexOf(a, b) {
    for (var c = 0,d = a.length; c < d; c++)if (a[c] == b)return c;
    return-1
}
function HanserRingFinder(a) {
    this.setMolecule(a);
    return true
}
HanserRingFinder.prototype = new RingFinder;
HanserRingFinder.prototype.innerGetRings = function() {
    for (var a = [],b = [],c = 0,d = this.bonds.length; c < d; c++)a[a.length] = new PGraphEdge(indexOf(this.people, this.bonds[c].a1), indexOf(this.people, this.bonds[c].a2));
    for (; a.length > 0;) {
        var e = [];
        c = 0;
        for (d = this.people.length; c < d; c++)e[c] = 0;
        c = 0;
        for (d = a.length; c < d; c++) {
            e[a[c].head.data]++;
            e[a[c].getLast().data]++
        }
        var f = -1,h = Infinity;
        c = 0;
        for (d = e.length; c < d; c++)if (e[c] > 0 && e[c] < h) {
            h = e[c];
            f = c
        }
        e = [];
        h = [];
        c = 0;
        for (d = a.length; c < d; c++)if (a[c].connectsTo(f))e[e.length] = a[c]; else h[h.length] =
                a[c];
        a = h;
        c = 0;
        for (d = e.length; c < d; c++)for (f = c + 1; f < d; f++) {
            h = e[c].merge(e[f]);
            for (var g = false,i = h.head.next; !g && i != null;) {
                for (var j = i.next; !g && j != null;) {
                    if (j.data == i.data)g = true;
                    j = j.next
                }
                i = i.next
            }
            if (!g)if (h.isCycle())b[b.length] = h; else a[a.length] = h
        }
    }
    a = [];
    c = 0;
    for (d = b.length; c < d; c++) {
        a[c] = [];
        b[c].head.getDataArray(a[c])
    }
    c = 0;
    for (d = a.length; c < d; c++) {
        b = new Ring;
        f = 0;
        for (e = a[c].length - 1; f < e; f++)b.people[f] = this.people[a[c][f]];
        f = 0;
        for (e = b.people.length - 1; f < e; f++) {
            h = 0;
            for (g = this.bonds.length; h < g; h++)if (this.bonds[h].contains(b.people[f]) &&
                    this.bonds[h].contains(b.people[f + 1])) {
                b.bonds[b.bonds.length] = this.bonds[h];
                break
            }
        }
        h = 0;
        for (g = this.bonds.length; h < g; h++)if (this.bonds[h].contains(b.people[0]) && this.bonds[h].contains(b.people[b.people.length - 1])) {
            b.bonds[b.bonds.length] = this.bonds[h];
            break
        }
        this.rings[c] = b
    }
};
function SSSRFinder(a) {
    this.rings = [];
    if (a.people.length > 0) {
        var b = (new FrerejacqueNumberCounter(a)).value,c = (new EulerFacetRingFinder(a)).rings;
        c.sort(function(g, i) {
            return g.people.length - i.people.length
        });
        for (var d = 0,e = a.bonds.length; d < e; d++)a.bonds[d].visited = false;
        d = 0;
        for (e = c.length; d < e; d++) {
            a = false;
            for (var f = 0,h = c[d].bonds.length; f < h; f++)if (!c[d].bonds[f].visited) {
                a = true;
                break
            }
            if (a) {
                f = 0;
                for (h = c[d].bonds.length; f < h; f++)c[d].bonds[f].visited = true;
                this.rings[this.rings.length] = c[d]
            }
            if (this.rings.length ==
                    b)break
        }
    }
    return true
}
function Element(a, b, c) {
    this.symbol = a;
    this.name = b;
    this.atomicNumber = c;
    return true
}
var ELEMENT = [];
ELEMENT.H = new Element("H", "Hydrogen", 1);
ELEMENT.He = new Element("He", "Helium", 2);
ELEMENT.Li = new Element("Li", "Lithium", 3);
ELEMENT.Be = new Element("Be", "Beryllium", 4);
ELEMENT.B = new Element("B", "Boron", 5);
ELEMENT.C = new Element("C", "Carbon", 6);
ELEMENT.N = new Element("N", "Nitrogen", 7);
ELEMENT.O = new Element("O", "Oxygen", 8);
ELEMENT.F = new Element("F", "Fluorine", 9);
ELEMENT.Ne = new Element("Ne", "Neon", 10);
ELEMENT.Na = new Element("Na", "Sodium", 11);
ELEMENT.Mg = new Element("Mg", "Magnesium", 12);
ELEMENT.Al = new Element("Al", "Aluminum", 13);
ELEMENT.Si = new Element("Si", "Silicon", 14);
ELEMENT.P = new Element("P", "Phosphorus", 15);
ELEMENT.S = new Element("S", "Sulfur", 16);
ELEMENT.Cl = new Element("Cl", "Chlorine", 17);
ELEMENT.Ar = new Element("Ar", "Argon", 18);
ELEMENT.K = new Element("K", "Potassium", 19);
ELEMENT.Ca = new Element("Ca", "Calcium", 20);
ELEMENT.Sc = new Element("Sc", "Scandium", 21);
ELEMENT.Ti = new Element("Ti", "Titanium", 22);
ELEMENT.V = new Element("V", "Vanadium", 23);
ELEMENT.Cr = new Element("Cr", "Chromium", 24);
ELEMENT.Mn = new Element("Mn", "Manganese", 25);
ELEMENT.Fe = new Element("Fe", "Iron", 26);
ELEMENT.Co = new Element("Co", "Cobalt", 27);
ELEMENT.Ni = new Element("Ni", "Nickel", 28);
ELEMENT.Cu = new Element("Cu", "Copper", 29);
ELEMENT.Zn = new Element("Zn", "Zinc", 30);
ELEMENT.Ga = new Element("Ga", "Gallium", 31);
ELEMENT.Ge = new Element("Ge", "Germanium", 32);
ELEMENT.As = new Element("As", "Arsenic", 33);
ELEMENT.Se = new Element("Se", "Selenium", 34);
ELEMENT.Br = new Element("Br", "Bromine", 35);
ELEMENT.Kr = new Element("Kr", "Krypton", 36);
ELEMENT.Rb = new Element("Rb", "Rubidium", 37);
ELEMENT.Sr = new Element("Sr", "Strontium", 38);
ELEMENT.Y = new Element("Y", "Yttrium", 39);
ELEMENT.Zr = new Element("Zr", "Zirconium", 40);
ELEMENT.Nb = new Element("Nb", "Niobium", 41);
ELEMENT.Mo = new Element("Mo", "Molybdenum", 42);
ELEMENT.Tc = new Element("Tc", "Technetium", 43);
ELEMENT.Ru = new Element("Ru", "Ruthenium", 44);
ELEMENT.Rh = new Element("Rh", "Rhodium", 45);
ELEMENT.Pd = new Element("Pd", "Palladium", 46);
ELEMENT.Ag = new Element("Ag", "Silver", 47);
ELEMENT.Cd = new Element("Cd", "Cadmium", 48);
ELEMENT.In = new Element("In", "Indium", 49);
ELEMENT.Sn = new Element("Sn", "Tin", 50);
ELEMENT.Sb = new Element("Sb", "Antimony", 51);
ELEMENT.Te = new Element("Te", "Tellurium", 52);
ELEMENT.I = new Element("I", "Iodine", 53);
ELEMENT.Xe = new Element("Xe", "Xenon", 54);
ELEMENT.Cs = new Element("Cs", "Cesium", 55);
ELEMENT.Ba = new Element("Ba", "Barium", 56);
ELEMENT.La = new Element("La", "Lanthanum", 57);
ELEMENT.Ce = new Element("Ce", "Cerium", 58);
ELEMENT.Pr = new Element("Pr", "Praseodymium", 59);
ELEMENT.Nd = new Element("Nd", "Neodymium", 60);
ELEMENT.Pm = new Element("Pm", "Promethium", 61);
ELEMENT.Sm = new Element("Sm", "Samarium", 62);
ELEMENT.Eu = new Element("Eu", "Europium", 63);
ELEMENT.Gd = new Element("Gd", "Gadolinium", 64);
ELEMENT.Tb = new Element("Tb", "Terbium", 65);
ELEMENT.Dy = new Element("Dy", "Dysprosium", 66);
ELEMENT.Ho = new Element("Ho", "Holmium", 67);
ELEMENT.Er = new Element("Er", "Erbium", 68);
ELEMENT.Tm = new Element("Tm", "Thulium", 69);
ELEMENT.Yb = new Element("Yb", "Ytterbium", 70);
ELEMENT.Lu = new Element("Lu", "Lutetium", 71);
ELEMENT.Hf = new Element("Hf", "Hafnium", 72);
ELEMENT.Ta = new Element("Ta", "Tantalum", 73);
ELEMENT.W = new Element("W", "Tungsten", 74);
ELEMENT.Re = new Element("Re", "Rhenium", 75);
ELEMENT.Os = new Element("Os", "Osmium", 76);
ELEMENT.Ir = new Element("Ir", "Iridium", 77);
ELEMENT.Pt = new Element("Pt", "Platinum", 78);
ELEMENT.Au = new Element("Au", "Gold", 79);
ELEMENT.Hg = new Element("Hg", "Mercury", 80);
ELEMENT.Tl = new Element("Tl", "Thallium", 81);
ELEMENT.Pb = new Element("Pb", "Lead", 82);
ELEMENT.Bi = new Element("Bi", "Bismuth", 83);
ELEMENT.Po = new Element("Po", "Polonium", 84);
ELEMENT.At = new Element("At", "Astatine", 85);
ELEMENT.Rn = new Element("Rn", "Radon", 86);
ELEMENT.Fr = new Element("Fr", "Francium", 87);
ELEMENT.Ra = new Element("Ra", "Radium", 88);
ELEMENT.Ac = new Element("Ac", "Actinium", 89);
ELEMENT.Th = new Element("Th", "Thorium", 90);
ELEMENT.Pa = new Element("Pa", "Protactinium", 91);
ELEMENT.U = new Element("U", "Uranium", 92);
ELEMENT.Np = new Element("Np", "Neptunium", 93);
ELEMENT.Pu = new Element("Pu", "Plutonium", 94);
ELEMENT.Am = new Element("Am", "Americium", 95);
ELEMENT.Cm = new Element("Cm", "Curium", 96);
ELEMENT.Bk = new Element("Bk", "Berkelium", 97);
ELEMENT.Cf = new Element("Cf", "Californium", 98);
ELEMENT.Es = new Element("Es", "Einsteinium", 99);
ELEMENT.Fm = new Element("Fm", "Fermium", 100);
ELEMENT.Md = new Element("Md", "Mendelevium", 101);
ELEMENT.No = new Element("No", "Nobelium", 102);
ELEMENT.Lr = new Element("Lr", "Lawrencium", 103);
ELEMENT.Rf = new Element("Rf", "Rutherfordium", 104);
ELEMENT.Db = new Element("Db", "Dubnium", 105);
ELEMENT.Sg = new Element("Sg", "Seaborgium", 106);
ELEMENT.Bh = new Element("Bh", "Bohrium", 107);
ELEMENT.Hs = new Element("Hs", "Hassium", 108);
ELEMENT.Mt = new Element("Mt", "Meitnerium", 109);
ELEMENT.Ds = new Element("Ds", "Darmstadtium", 110);
ELEMENT.Rg = new Element("Rg", "Roentgenium", 111);
ELEMENT.Cn = new Element("Cn", "Copernicium", 112);
ELEMENT.Uut = new Element("Uut", "Ununtrium", 113);
ELEMENT.Uuq = new Element("Uuq", "Ununquadium", 114);
ELEMENT.Uup = new Element("Uup", "Ununpentium", 115);
ELEMENT.Uuh = new Element("Uuh", "Ununhexium", 116);
ELEMENT.Uus = new Element("Uus", "Ununseptium", 117);
ELEMENT.Uuo = new Element("Uuo", "Ununoctium", 118);
var symbols = ["H","He","Li","Be","B","C","N","O","F","Ne","Na","Mg","Al","Si","P","S","Cl","Ar","K","Ca","Sc","Ti","V","Cr","Mn","Fe","Co","Ni","Cu","Zn","Ga","Ge","As","Se","Br","Kr","Rb","Sr","Y","Zr","Nb","Mo","Tc","Ru","Rh","Pd","Ag","Cd","In","Sn","Sb","Te","I","Xe","Cs","Ba","La","Ce","Pr","Nd","Pm","Sm","Eu","Gd","Tb","Dy","Ho","Er","Tm","Yb","Lu","Hf","Ta","W","Re","Os","Ir","Pt","Au","Hg","Tl","Pb","Bi","Po","At","Rn","Fr","Ra","Ac","Th","Pa","U","Np","Pu","Am","Cm","Bk","Cf","Es","Fm","Md",
    "No","Lr","Rf","Db","Sg","Bh","Hs","Mt","Ds","Rg","Cn","Uut","Uuq","Uup","Uuh","Uus","Uuo"];
ELEMENT.H.jmolColor = "#FFFFFF";
ELEMENT.He.jmolColor = "#D9FFFF";
ELEMENT.Li.jmolColor = "#CC80FF";
ELEMENT.Be.jmolColor = "#C2FF00";
ELEMENT.B.jmolColor = "#FFB5B5";
ELEMENT.C.jmolColor = "#909090";
ELEMENT.N.jmolColor = "#3050F8";
ELEMENT.O.jmolColor = "#FF0D0D";
ELEMENT.F.jmolColor = "#90E050";
ELEMENT.Ne.jmolColor = "#B3E3F5";
ELEMENT.Na.jmolColor = "#AB5CF2";
ELEMENT.Mg.jmolColor = "#8AFF00";
ELEMENT.Al.jmolColor = "#BFA6A6";
ELEMENT.Si.jmolColor = "#F0C8A0";
ELEMENT.P.jmolColor = "#FF8000";
ELEMENT.S.jmolColor = "#FFFF30";
ELEMENT.Cl.jmolColor = "#1FF01F";
ELEMENT.Ar.jmolColor = "#80D1E3";
ELEMENT.K.jmolColor = "#8F40D4";
ELEMENT.Ca.jmolColor = "#3DFF00";
ELEMENT.Sc.jmolColor = "#E6E6E6";
ELEMENT.Ti.jmolColor = "#BFC2C7";
ELEMENT.V.jmolColor = "#A6A6AB";
ELEMENT.Cr.jmolColor = "#8A99C7";
ELEMENT.Mn.jmolColor = "#9C7AC7";
ELEMENT.Fe.jmolColor = "#E06633";
ELEMENT.Co.jmolColor = "#F090A0";
ELEMENT.Ni.jmolColor = "#50D050";
ELEMENT.Cu.jmolColor = "#C88033";
ELEMENT.Zn.jmolColor = "#7D80B0";
ELEMENT.Ga.jmolColor = "#C28F8F";
ELEMENT.Ge.jmolColor = "#668F8F";
ELEMENT.As.jmolColor = "#BD80E3";
ELEMENT.Se.jmolColor = "#FFA100";
ELEMENT.Br.jmolColor = "#A62929";
ELEMENT.Kr.jmolColor = "#5CB8D1";
ELEMENT.Rb.jmolColor = "#702EB0";
ELEMENT.Sr.jmolColor = "#00FF00";
ELEMENT.Y.jmolColor = "#94FFFF";
ELEMENT.Zr.jmolColor = "#94E0E0";
ELEMENT.Nb.jmolColor = "#73C2C9";
ELEMENT.Mo.jmolColor = "#54B5B5";
ELEMENT.Tc.jmolColor = "#3B9E9E";
ELEMENT.Ru.jmolColor = "#248F8F";
ELEMENT.Rh.jmolColor = "#0A7D8C";
ELEMENT.Pd.jmolColor = "#006985";
ELEMENT.Ag.jmolColor = "#C0C0C0";
ELEMENT.Cd.jmolColor = "#FFD98F";
ELEMENT.In.jmolColor = "#A67573";
ELEMENT.Sn.jmolColor = "#668080";
ELEMENT.Sb.jmolColor = "#9E63B5";
ELEMENT.Te.jmolColor = "#D47A00";
ELEMENT.I.jmolColor = "#940094";
ELEMENT.Xe.jmolColor = "#429EB0";
ELEMENT.Cs.jmolColor = "#57178F";
ELEMENT.Ba.jmolColor = "#00C900";
ELEMENT.La.jmolColor = "#70D4FF";
ELEMENT.Ce.jmolColor = "#FFFFC7";
ELEMENT.Pr.jmolColor = "#D9FFC7";
ELEMENT.Nd.jmolColor = "#C7FFC7";
ELEMENT.Pm.jmolColor = "#A3FFC7";
ELEMENT.Sm.jmolColor = "#8FFFC7";
ELEMENT.Eu.jmolColor = "#61FFC7";
ELEMENT.Gd.jmolColor = "#45FFC7";
ELEMENT.Tb.jmolColor = "#30FFC7";
ELEMENT.Dy.jmolColor = "#1FFFC7";
ELEMENT.Ho.jmolColor = "#00FF9C";
ELEMENT.Er.jmolColor = "#00E675";
ELEMENT.Tm.jmolColor = "#00D452";
ELEMENT.Yb.jmolColor = "#00BF38";
ELEMENT.Lu.jmolColor = "#00AB24";
ELEMENT.Hf.jmolColor = "#4DC2FF";
ELEMENT.Ta.jmolColor = "#4DA6FF";
ELEMENT.W.jmolColor = "#2194D6";
ELEMENT.Re.jmolColor = "#267DAB";
ELEMENT.Os.jmolColor = "#266696";
ELEMENT.Ir.jmolColor = "#175487";
ELEMENT.Pt.jmolColor = "#D0D0E0";
ELEMENT.Au.jmolColor = "#FFD123";
ELEMENT.Hg.jmolColor = "#B8B8D0";
ELEMENT.Tl.jmolColor = "#A6544D";
ELEMENT.Pb.jmolColor = "#575961";
ELEMENT.Bi.jmolColor = "#9E4FB5";
ELEMENT.Po.jmolColor = "#AB5C00";
ELEMENT.At.jmolColor = "#754F45";
ELEMENT.Rn.jmolColor = "#428296";
ELEMENT.Fr.jmolColor = "#420066";
ELEMENT.Ra.jmolColor = "#007D00";
ELEMENT.Ac.jmolColor = "#70ABFA";
ELEMENT.Th.jmolColor = "#00BAFF";
ELEMENT.Pa.jmolColor = "#00A1FF";
ELEMENT.U.jmolColor = "#008FFF";
ELEMENT.Np.jmolColor = "#0080FF";
ELEMENT.Pu.jmolColor = "#006BFF";
ELEMENT.Am.jmolColor = "#545CF2";
ELEMENT.Cm.jmolColor = "#785CE3";
ELEMENT.Bk.jmolColor = "#8A4FE3";
ELEMENT.Cf.jmolColor = "#A136D4";
ELEMENT.Es.jmolColor = "#B31FD4";
ELEMENT.Fm.jmolColor = "#B31FBA";
ELEMENT.Md.jmolColor = "#B30DA6";
ELEMENT.No.jmolColor = "#BD0D87";
ELEMENT.Lr.jmolColor = "#C70066";
ELEMENT.Rf.jmolColor = "#CC0059";
ELEMENT.Db.jmolColor = "#D1004F";
ELEMENT.Sg.jmolColor = "#D90045";
ELEMENT.Bh.jmolColor = "#E00038";
ELEMENT.Hs.jmolColor = "#E6002E";
ELEMENT.Mt.jmolColor = "#EB0026";
ELEMENT.Ds.jmolColor = "#000000";
ELEMENT.Rg.jmolColor = "#000000";
ELEMENT.Cn.jmolColor = "#000000";
ELEMENT.Uut.jmolColor = "#000000";
ELEMENT.Uuq.jmolColor = "#000000";
ELEMENT.Uup.jmolColor = "#000000";
ELEMENT.Uuh.jmolColor = "#000000";
ELEMENT.Uus.jmolColor = "#000000";
ELEMENT.Uuo.jmolColor = "#000000";
ELEMENT.H.covalentRadius = 0.31;
ELEMENT.He.covalentRadius = 0.28;
ELEMENT.Li.covalentRadius = 1.28;
ELEMENT.Be.covalentRadius = 0.96;
ELEMENT.B.covalentRadius = 0.84;
ELEMENT.C.covalentRadius = 0.76;
ELEMENT.N.covalentRadius = 0.71;
ELEMENT.O.covalentRadius = 0.66;
ELEMENT.F.covalentRadius = 0.57;
ELEMENT.Ne.covalentRadius = 0.58;
ELEMENT.Na.covalentRadius = 1.66;
ELEMENT.Mg.covalentRadius = 1.41;
ELEMENT.Al.covalentRadius = 1.21;
ELEMENT.Si.covalentRadius = 1.11;
ELEMENT.P.covalentRadius = 1.07;
ELEMENT.S.covalentRadius = 1.05;
ELEMENT.Cl.covalentRadius = 1.02;
ELEMENT.Ar.covalentRadius = 1.06;
ELEMENT.K.covalentRadius = 2.03;
ELEMENT.Ca.covalentRadius = 1.76;
ELEMENT.Sc.covalentRadius = 1.7;
ELEMENT.Ti.covalentRadius = 1.6;
ELEMENT.V.covalentRadius = 1.53;
ELEMENT.Cr.covalentRadius = 1.39;
ELEMENT.Mn.covalentRadius = 1.39;
ELEMENT.Fe.covalentRadius = 1.32;
ELEMENT.Co.covalentRadius = 1.26;
ELEMENT.Ni.covalentRadius = 1.24;
ELEMENT.Cu.covalentRadius = 1.32;
ELEMENT.Zn.covalentRadius = 1.22;
ELEMENT.Ga.covalentRadius = 1.22;
ELEMENT.Ge.covalentRadius = 1.2;
ELEMENT.As.covalentRadius = 1.19;
ELEMENT.Se.covalentRadius = 1.2;
ELEMENT.Br.covalentRadius = 1.2;
ELEMENT.Kr.covalentRadius = 1.16;
ELEMENT.Rb.covalentRadius = 2.2;
ELEMENT.Sr.covalentRadius = 1.95;
ELEMENT.Y.covalentRadius = 1.9;
ELEMENT.Zr.covalentRadius = 1.75;
ELEMENT.Nb.covalentRadius = 1.64;
ELEMENT.Mo.covalentRadius = 1.54;
ELEMENT.Tc.covalentRadius = 1.47;
ELEMENT.Ru.covalentRadius = 1.46;
ELEMENT.Rh.covalentRadius = 1.42;
ELEMENT.Pd.covalentRadius = 1.39;
ELEMENT.Ag.covalentRadius = 1.45;
ELEMENT.Cd.covalentRadius = 1.44;
ELEMENT.In.covalentRadius = 1.42;
ELEMENT.Sn.covalentRadius = 1.39;
ELEMENT.Sb.covalentRadius = 1.39;
ELEMENT.Te.covalentRadius = 1.38;
ELEMENT.I.covalentRadius = 1.39;
ELEMENT.Xe.covalentRadius = 1.4;
ELEMENT.Cs.covalentRadius = 2.44;
ELEMENT.Ba.covalentRadius = 2.15;
ELEMENT.La.covalentRadius = 2.07;
ELEMENT.Ce.covalentRadius = 2.04;
ELEMENT.Pr.covalentRadius = 2.03;
ELEMENT.Nd.covalentRadius = 2.01;
ELEMENT.Pm.covalentRadius = 1.99;
ELEMENT.Sm.covalentRadius = 1.98;
ELEMENT.Eu.covalentRadius = 1.98;
ELEMENT.Gd.covalentRadius = 1.96;
ELEMENT.Tb.covalentRadius = 1.94;
ELEMENT.Dy.covalentRadius = 1.92;
ELEMENT.Ho.covalentRadius = 1.92;
ELEMENT.Er.covalentRadius = 1.89;
ELEMENT.Tm.covalentRadius = 1.9;
ELEMENT.Yb.covalentRadius = 1.87;
ELEMENT.Lu.covalentRadius = 1.87;
ELEMENT.Hf.covalentRadius = 1.75;
ELEMENT.Ta.covalentRadius = 1.7;
ELEMENT.W.covalentRadius = 1.62;
ELEMENT.Re.covalentRadius = 1.51;
ELEMENT.Os.covalentRadius = 1.44;
ELEMENT.Ir.covalentRadius = 1.41;
ELEMENT.Pt.covalentRadius = 1.36;
ELEMENT.Au.covalentRadius = 1.36;
ELEMENT.Hg.covalentRadius = 1.32;
ELEMENT.Tl.covalentRadius = 1.45;
ELEMENT.Pb.covalentRadius = 1.46;
ELEMENT.Bi.covalentRadius = 1.48;
ELEMENT.Po.covalentRadius = 1.4;
ELEMENT.At.covalentRadius = 1.5;
ELEMENT.Rn.covalentRadius = 1.5;
ELEMENT.Fr.covalentRadius = 2.6;
ELEMENT.Ra.covalentRadius = 2.21;
ELEMENT.Ac.covalentRadius = 2.15;
ELEMENT.Th.covalentRadius = 2.06;
ELEMENT.Pa.covalentRadius = 2;
ELEMENT.U.covalentRadius = 1.96;
ELEMENT.Np.covalentRadius = 1.9;
ELEMENT.Pu.covalentRadius = 1.87;
ELEMENT.Am.covalentRadius = 1.8;
ELEMENT.Cm.covalentRadius = 1.69;
ELEMENT.Bk.covalentRadius = 0;
ELEMENT.Cf.covalentRadius = 0;
ELEMENT.Es.covalentRadius = 0;
ELEMENT.Fm.covalentRadius = 0;
ELEMENT.Md.covalentRadius = 0;
ELEMENT.No.covalentRadius = 0;
ELEMENT.Lr.covalentRadius = 0;
ELEMENT.Rf.covalentRadius = 0;
ELEMENT.Db.covalentRadius = 0;
ELEMENT.Sg.covalentRadius = 0;
ELEMENT.Bh.covalentRadius = 0;
ELEMENT.Hs.covalentRadius = 0;
ELEMENT.Mt.covalentRadius = 0;
ELEMENT.Ds.covalentRadius = 0;
ELEMENT.Rg.covalentRadius = 0;
ELEMENT.Cn.covalentRadius = 0;
ELEMENT.Uut.covalentRadius = 0;
ELEMENT.Uuq.covalentRadius = 0;
ELEMENT.Uup.covalentRadius = 0;
ELEMENT.Uuh.covalentRadius = 0;
ELEMENT.Uus.covalentRadius = 0;
ELEMENT.Uuo.covalentRadius = 0;
ELEMENT.H.vdWRadius = 1.2;
ELEMENT.He.vdWRadius = 1.4;
ELEMENT.Li.vdWRadius = 1.82;
ELEMENT.Be.vdWRadius = 0;
ELEMENT.B.vdWRadius = 0;
ELEMENT.C.vdWRadius = 1.7;
ELEMENT.N.vdWRadius = 1.55;
ELEMENT.O.vdWRadius = 1.52;
ELEMENT.F.vdWRadius = 1.47;
ELEMENT.Ne.vdWRadius = 1.54;
ELEMENT.Na.vdWRadius = 2.27;
ELEMENT.Mg.vdWRadius = 1.73;
ELEMENT.Al.vdWRadius = 0;
ELEMENT.Si.vdWRadius = 2.1;
ELEMENT.P.vdWRadius = 1.8;
ELEMENT.S.vdWRadius = 1.8;
ELEMENT.Cl.vdWRadius = 1.75;
ELEMENT.Ar.vdWRadius = 1.88;
ELEMENT.K.vdWRadius = 2.75;
ELEMENT.Ca.vdWRadius = 0;
ELEMENT.Sc.vdWRadius = 0;
ELEMENT.Ti.vdWRadius = 0;
ELEMENT.V.vdWRadius = 0;
ELEMENT.Cr.vdWRadius = 0;
ELEMENT.Mn.vdWRadius = 0;
ELEMENT.Fe.vdWRadius = 0;
ELEMENT.Co.vdWRadius = 0;
ELEMENT.Ni.vdWRadius = 1.63;
ELEMENT.Cu.vdWRadius = 1.4;
ELEMENT.Zn.vdWRadius = 1.39;
ELEMENT.Ga.vdWRadius = 1.87;
ELEMENT.Ge.vdWRadius = 0;
ELEMENT.As.vdWRadius = 1.85;
ELEMENT.Se.vdWRadius = 1.9;
ELEMENT.Br.vdWRadius = 1.85;
ELEMENT.Kr.vdWRadius = 2.02;
ELEMENT.Rb.vdWRadius = 0;
ELEMENT.Sr.vdWRadius = 0;
ELEMENT.Y.vdWRadius = 0;
ELEMENT.Zr.vdWRadius = 0;
ELEMENT.Nb.vdWRadius = 0;
ELEMENT.Mo.vdWRadius = 0;
ELEMENT.Tc.vdWRadius = 0;
ELEMENT.Ru.vdWRadius = 0;
ELEMENT.Rh.vdWRadius = 0;
ELEMENT.Pd.vdWRadius = 1.63;
ELEMENT.Ag.vdWRadius = 1.72;
ELEMENT.Cd.vdWRadius = 1.58;
ELEMENT.In.vdWRadius = 1.93;
ELEMENT.Sn.vdWRadius = 2.17;
ELEMENT.Sb.vdWRadius = 0;
ELEMENT.Te.vdWRadius = 2.06;
ELEMENT.I.vdWRadius = 1.98;
ELEMENT.Xe.vdWRadius = 2.16;
ELEMENT.Cs.vdWRadius = 0;
ELEMENT.Ba.vdWRadius = 0;
ELEMENT.La.vdWRadius = 0;
ELEMENT.Ce.vdWRadius = 0;
ELEMENT.Pr.vdWRadius = 0;
ELEMENT.Nd.vdWRadius = 0;
ELEMENT.Pm.vdWRadius = 0;
ELEMENT.Sm.vdWRadius = 0;
ELEMENT.Eu.vdWRadius = 0;
ELEMENT.Gd.vdWRadius = 0;
ELEMENT.Tb.vdWRadius = 0;
ELEMENT.Dy.vdWRadius = 0;
ELEMENT.Ho.vdWRadius = 0;
ELEMENT.Er.vdWRadius = 0;
ELEMENT.Tm.vdWRadius = 0;
ELEMENT.Yb.vdWRadius = 0;
ELEMENT.Lu.vdWRadius = 0;
ELEMENT.Hf.vdWRadius = 0;
ELEMENT.Ta.vdWRadius = 0;
ELEMENT.W.vdWRadius = 0;
ELEMENT.Re.vdWRadius = 0;
ELEMENT.Os.vdWRadius = 0;
ELEMENT.Ir.vdWRadius = 0;
ELEMENT.Pt.vdWRadius = 1.75;
ELEMENT.Au.vdWRadius = 1.66;
ELEMENT.Hg.vdWRadius = 1.55;
ELEMENT.Tl.vdWRadius = 1.96;
ELEMENT.Pb.vdWRadius = 2.02;
ELEMENT.Bi.vdWRadius = 0;
ELEMENT.Po.vdWRadius = 0;
ELEMENT.At.vdWRadius = 0;
ELEMENT.Rn.vdWRadius = 0;
ELEMENT.Fr.vdWRadius = 0;
ELEMENT.Ra.vdWRadius = 0;
ELEMENT.Ac.vdWRadius = 0;
ELEMENT.Th.vdWRadius = 0;
ELEMENT.Pa.vdWRadius = 0;
ELEMENT.U.vdWRadius = 1.86;
ELEMENT.Np.vdWRadius = 0;
ELEMENT.Pu.vdWRadius = 0;
ELEMENT.Am.vdWRadius = 0;
ELEMENT.Cm.vdWRadius = 0;
ELEMENT.Bk.vdWRadius = 0;
ELEMENT.Cf.vdWRadius = 0;
ELEMENT.Es.vdWRadius = 0;
ELEMENT.Fm.vdWRadius = 0;
ELEMENT.Md.vdWRadius = 0;
ELEMENT.No.vdWRadius = 0;
ELEMENT.Lr.vdWRadius = 0;
ELEMENT.Rf.vdWRadius = 0;
ELEMENT.Db.vdWRadius = 0;
ELEMENT.Sg.vdWRadius = 0;
ELEMENT.Bh.vdWRadius = 0;
ELEMENT.Hs.vdWRadius = 0;
ELEMENT.Mt.vdWRadius = 0;
ELEMENT.Ds.vdWRadius = 0;
ELEMENT.Rg.vdWRadius = 0;
ELEMENT.Cn.vdWRadius = 0;
ELEMENT.Uut.vdWRadius = 0;
ELEMENT.Uuq.vdWRadius = 0;
ELEMENT.Uup.vdWRadius = 0;
ELEMENT.Uuh.vdWRadius = 0;
ELEMENT.Uus.vdWRadius = 0;
ELEMENT.Uuo.vdWRadius = 0;
ELEMENT.H.valency = 1;
ELEMENT.He.valency = 0;
ELEMENT.Li.valency = 1;
ELEMENT.Be.valency = 2;
ELEMENT.B.valency = 3;
ELEMENT.C.valency = 4;
ELEMENT.N.valency = 3;
ELEMENT.O.valency = 2;
ELEMENT.F.valency = 1;
ELEMENT.Ne.valency = 0;
ELEMENT.Na.valency = 1;
ELEMENT.Mg.valency = 0;
ELEMENT.Al.valency = 0;
ELEMENT.Si.valency = 4;
ELEMENT.P.valency = 3;
ELEMENT.S.valency = 2;
ELEMENT.Cl.valency = 1;
ELEMENT.Ar.valency = 0;
ELEMENT.K.valency = 0;
ELEMENT.Ca.valency = 0;
ELEMENT.Sc.valency = 0;
ELEMENT.Ti.valency = 1;
ELEMENT.V.valency = 1;
ELEMENT.Cr.valency = 2;
ELEMENT.Mn.valency = 3;
ELEMENT.Fe.valency = 2;
ELEMENT.Co.valency = 1;
ELEMENT.Ni.valency = 1;
ELEMENT.Cu.valency = 0;
ELEMENT.Zn.valency = 0;
ELEMENT.Ga.valency = 0;
ELEMENT.Ge.valency = 4;
ELEMENT.As.valency = 3;
ELEMENT.Se.valency = 2;
ELEMENT.Br.valency = 1;
ELEMENT.Kr.valency = 0;
ELEMENT.Rb.valency = 0;
ELEMENT.Sr.valency = 0;
ELEMENT.Y.valency = 0;
ELEMENT.Zr.valency = 0;
ELEMENT.Nb.valency = 1;
ELEMENT.Mo.valency = 2;
ELEMENT.Tc.valency = 3;
ELEMENT.Ru.valency = 2;
ELEMENT.Rh.valency = 1;
ELEMENT.Pd.valency = 0;
ELEMENT.Ag.valency = 0;
ELEMENT.Cd.valency = 0;
ELEMENT.In.valency = 0;
ELEMENT.Sn.valency = 4;
ELEMENT.Sb.valency = 3;
ELEMENT.Te.valency = 2;
ELEMENT.I.valency = 1;
ELEMENT.Xe.valency = 0;
ELEMENT.Cs.valency = 0;
ELEMENT.Ba.valency = 0;
ELEMENT.La.valency = 0;
ELEMENT.Ce.valency = 0;
ELEMENT.Pr.valency = 0;
ELEMENT.Nd.valency = 0;
ELEMENT.Pm.valency = 0;
ELEMENT.Sm.valency = 0;
ELEMENT.Eu.valency = 0;
ELEMENT.Gd.valency = 0;
ELEMENT.Tb.valency = 0;
ELEMENT.Dy.valency = 0;
ELEMENT.Ho.valency = 0;
ELEMENT.Er.valency = 0;
ELEMENT.Tm.valency = 0;
ELEMENT.Yb.valency = 0;
ELEMENT.Lu.valency = 0;
ELEMENT.Hf.valency = 0;
ELEMENT.Ta.valency = 1;
ELEMENT.W.valency = 2;
ELEMENT.Re.valency = 3;
ELEMENT.Os.valency = 2;
ELEMENT.Ir.valency = 3;
ELEMENT.Pt.valency = 0;
ELEMENT.Au.valency = 1;
ELEMENT.Hg.valency = 0;
ELEMENT.Tl.valency = 0;
ELEMENT.Pb.valency = 4;
ELEMENT.Bi.valency = 3;
ELEMENT.Po.valency = 2;
ELEMENT.At.valency = 1;
ELEMENT.Rn.valency = 0;
ELEMENT.Fr.valency = 0;
ELEMENT.Ra.valency = 0;
ELEMENT.Ac.valency = 0;
ELEMENT.Th.valency = 0;
ELEMENT.Pa.valency = 0;
ELEMENT.U.valency = 0;
ELEMENT.Np.valency = 0;
ELEMENT.Pu.valency = 0;
ELEMENT.Am.valency = 0;
ELEMENT.Cm.valency = 0;
ELEMENT.Bk.valency = 0;
ELEMENT.Cf.valency = 0;
ELEMENT.Es.valency = 0;
ELEMENT.Fm.valency = 0;
ELEMENT.Md.valency = 0;
ELEMENT.No.valency = 0;
ELEMENT.Lr.valency = 0;
ELEMENT.Rf.valency = 0;
ELEMENT.Db.valency = 0;
ELEMENT.Sg.valency = 0;
ELEMENT.Bh.valency = 0;
ELEMENT.Hs.valency = 0;
ELEMENT.Mt.valency = 0;
ELEMENT.Ds.valency = 0;
ELEMENT.Rg.valency = 0;
ELEMENT.Cn.valency = 0;
ELEMENT.Uut.valency = 0;
ELEMENT.Uuq.valency = 0;
ELEMENT.Uup.valency = 0;
ELEMENT.Uuh.valency = 0;
ELEMENT.Uus.valency = 0;
ELEMENT.Uuo.valency = 0;
function Point(a, b) {
    this.x = a ? a : 0;
    this.y = b ? b : 0;
    return true
}
Point.prototype.sub = function(a) {
    this.x -= a.x;
    this.y -= a.y
};
Point.prototype.add = function(a) {
    this.x += a.x;
    this.y += a.y
};
Point.prototype.distance = function(a) {
    return Math.sqrt(Math.pow(a.x - this.x, 2) + Math.pow(a.y - this.y, 2))
};
Point.prototype.angleForStupidCanvasArcs = function(a) {
    var b = a.x - this.x;
    a = a.y - this.y;
    var c = 0;
    for (c = b == 0 ? a == 0 ? 0 : a > 0 ? Math.PI / 2 : 3 * Math.PI / 2 : a == 0 ? b > 0 ? 0 : Math.PI : b < 0 ? Math.atan(a / b) + Math.PI : a < 0 ? Math.atan(a / b) + 2 * Math.PI : Math.atan(a / b); c < 0;)c += Math.PI * 2;
    c %= Math.PI * 2;
    return c
};
Point.prototype.angle = function(a) {
    var b = a.x - this.x;
    a = this.y - a.y;
    var c = 0;
    for (c = b == 0 ? a == 0 ? 0 : a > 0 ? Math.PI / 2 : 3 * Math.PI / 2 : a == 0 ? b > 0 ? 0 : Math.PI : b < 0 ? Math.atan(a / b) + Math.PI : a < 0 ? Math.atan(a / b) + 2 * Math.PI : Math.atan(a / b); c < 0;)c += Math.PI * 2;
    c %= Math.PI * 2;
    return c
};
function Ring() {
    this.people = [];
    this.bonds = [];
    this.center = null;
    return true
}
Ring.prototype.setupBonds = function() {
    for (var a = 0,b = this.bonds.length; a < b; a++)this.bonds[a].ring = this;
    this.center = this.getCenter()
};
Ring.prototype.getCenter = function() {
    for (var a = minY = Infinity,b = maxY = -Infinity,c = 0,d = this.people.length; c < d; c++) {
        a = Math.min(this.people[c].x, a);
        minY = Math.min(this.people[c].y, minY);
        b = Math.max(this.people[c].x, b);
        maxY = Math.max(this.people[c].y, maxY)
    }
    return new Point((b + a) / 2, (maxY + minY) / 2)
};
function Atom(a, b, c, d) {
    this.x = b ? b : 0;
    this.y = c ? c : 0;
    this.z = d ? d : 0;
    this.angleOfLeastInterference = this.bondNumber = this.coordinationNumber = this.charge = 0;
    this.isHidden = false;
    this.name = a ? a.replace(/\s/g, "") : "C";
    if (!ELEMENT[this.name])this.name = "C";
    this.isOverlap = this.isSelected = this.isHover = this.isLone = false;
    return true
}
Atom.prototype = new Point(0, 0);
Atom.prototype.add3D = function(a) {
    this.x += a.x;
    this.y += a.y;
    this.z += a.z
};
Atom.prototype.sub3D = function(a) {
    this.x -= a.x;
    this.y -= a.y;
    this.z -= a.z
};
Atom.prototype.distance3D = function(a) {
    return Math.sqrt(Math.pow(a.x - this.x, 2) + Math.pow(a.y - this.y, 2) + Math.pow(a.z - this.z, 2))
};
Atom.prototype.draw = function(a, b) {
    var c = b.getFontString(b.atoms_font_size_2D, b.atoms_font_families_2D);
    a.font = c;
    a.fillStyle = b.atoms_color;
    if (b.atoms_useJMOLColors)a.fillStyle = ELEMENT[this.name].jmolColor;
    if (this.isLone || b.atoms_circles_2D) {
        a.beginPath();
        a.arc(this.x, this.y, b.atoms_circleDiameter_2D / 2, 0, Math.PI * 2, false);
        a.fill();
        if (b.atoms_circleBorderWidth_2D > 0) {
            a.lineWidth = b.atoms_circleBorderWidth_2D;
            a.strokeStyle = "black";
            a.stroke(this.x, this.y, 0, Math.PI * 2, b.atoms_circleDiameter_2D / 2)
        }
    } else if (this.isLabelVisible(b)) {
        a.textAlign =
                "center";
        a.textBaseline = "middle";
        a.fillText(this.name, this.x, this.y);
        if (b.atoms_implicitHydrogens_2D) {
            var d = ELEMENT[this.name].valency - this.coordinationNumber - Math.abs(this.charge);
            if (d > 0) {
                var e = a.measureText(this.name).width,f = a.measureText("H").width;
                if (d > 1) {
                    var h = e / 2 + f / 2,g = 0,i = b.getFontString(b.atoms_font_size_2D * 0.8, b.atoms_font_families_2D);
                    a.font = i;
                    var j = a.measureText(d).width;
                    if (this.bondNumber == 1) {
                        if (this.angleOfLeastInterference > Math.PI / 2 && this.angleOfLeastInterference < 3 * Math.PI / 2)h = -e /
                                2 - j - f / 2
                    } else if (!(this.angleOfLeastInterference <= Math.PI / 4))if (this.angleOfLeastInterference < 3 * Math.PI / 4) {
                        h = 0;
                        g = -b.atoms_font_size_2D * 0.9
                    } else if (this.angleOfLeastInterference <= 5 * Math.PI / 4)h = -e / 2 - j - f / 2; else if (this.angleOfLeastInterference < 7 * Math.PI / 4) {
                        h = 0;
                        g = b.atoms_font_size_2D * 0.9
                    }
                    a.font = c;
                    a.fillText("H", this.x + h, this.y + g);
                    a.font = i;
                    a.fillText(d, this.x + h + f / 2 + j / 2, this.y + g + b.atoms_font_size_2D * 0.3)
                } else {
                    h = e / 2 + f / 2;
                    g = 0;
                    if (this.bondNumber == 1) {
                        if (this.angleOfLeastInterference > Math.PI / 2 && this.angleOfLeastInterference <
                                3 * Math.PI / 2)h = -e / 2 - f / 2
                    } else if (!(this.angleOfLeastInterference <= Math.PI / 4))if (this.angleOfLeastInterference < 3 * Math.PI / 4) {
                        h = 0;
                        g = -b.atoms_font_size_2D * 0.9
                    } else if (this.angleOfLeastInterference <= 5 * Math.PI / 4)h = -e / 2 - f / 2; else if (this.angleOfLeastInterference < 7 * Math.PI / 4) {
                        h = 0;
                        g = b.atoms_font_size_2D * 0.9
                    }
                    a.fillText("H", this.x + h, this.y + g)
                }
            }
        }
    }
    if (this.charge != null && this.charge != 0) {
        c = this.charge.toFixed(0);
        if (c == "1")c = "+"; else if (c == "-1")c = "\u2013"; else if (c.startsWith("-"))c = c.substring(1) + "\u2013"; else c += "+";
        a.fillText(c, this.x + b.atoms_font_size_2D * Math.cos(this.angleOfLeastInterference + Math.PI / 4), this.y - b.atoms_font_size_2D * Math.sin(this.angleOfLeastInterference + Math.PI / 4))
    }
    if (this.isHover || this.isSelected || this.isOverlap) {
        a.strokeStyle = this.isHover ? "#885110" : "#0060B2";
        a.lineWidth = 1.2;
        a.beginPath();
        a.arc(this.x, this.y, 7, 0, Math.PI * 2, false);
        a.stroke()
    }
};
Atom.prototype.render = function(a, b) {
    var c = mat4.translate(a.modelViewMatrix, [this.x,this.y,this.z], []),d = b.atoms_useVDWDiameters_3D ? ELEMENT[this.name].vdWRadius : b.atoms_width / 2;
    mat4.scale(c, [d,d,d]);
    a.bindBuffer(a.ARRAY_BUFFER, a.sphereBuffer.vertexPositionBuffer);
    a.vertexAttribPointer(a.shader.vertexPositionAttribute, a.sphereBuffer.vertexPositionBuffer.itemSize, a.FLOAT, false, 0, 0);
    a.material.setTempColors(a, b.atoms_materialAmbientColor_3D, b.atoms_useJMOLColors ? ELEMENT[this.name].jmolColor :
            b.atoms_color, b.atoms_materialSpecularColor_3D, b.atoms_materialShininess_3D);
    a.bindBuffer(a.ARRAY_BUFFER, a.sphereBuffer.vertexNormalBuffer);
    a.vertexAttribPointer(a.shader.vertexNormalAttribute, a.sphereBuffer.vertexNormalBuffer.itemSize, a.FLOAT, false, 0, 0);
    a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, a.sphereBuffer.vertexIndexBuffer);
    a.setMatrixUniforms(a.projectionMatrix, c);
    a.drawElements(a.TRIANGLES, a.sphereBuffer.vertexIndexBuffer.numItems, a.UNSIGNED_SHORT, 0)
};
Atom.prototype.isLabelVisible = function(a) {
    return this.name != "C" || this.isHidden && a.atoms_showHiddenCarbons_2D || a.atoms_displayTerminalCarbonLabels_2D && this.bondNumber == 1
};
var BOND_STEREO_NONE = "BOND_STEREO_NONE",BOND_STEREO_PROTRUDING = "BOND_STEREO_PROTRUDING",BOND_STEREO_RECESSED = "BOND_STEREO_RECESSED",BOND_STEREO_AMBIGUOUS = "BOND_STEREO_AMBIGUOUS";
function Bond(a, b, c) {
    this.a1 = a;
    this.a2 = b;
    this.bondOrder = c ? c : 1;
    this.stereo = BOND_STEREO_NONE;
    this.isHover = false;
    this.ring = null;
    return true
}
Bond.prototype.getCenter = function() {
    return new Point((this.a1.x + this.a2.x) / 2, (this.a1.y + this.a2.y) / 2)
};
Bond.prototype.getLength = function() {
    return this.a1.distance(this.a2)
};
Bond.prototype.getLength3D = function() {
    return this.a1.distance3D(this.a2)
};
Bond.prototype.contains = function(a) {
    return a == this.a1 || a == this.a2
};
Bond.prototype.getNeighbor = function(a) {
    if (a == this.a1)return this.a2; else if (a == this.a2)return this.a1;
    return null
};
Bond.prototype.draw = function(a, b) {
    var c = this.a1.x,d = this.a2.x,e = this.a1.y,f = this.a2.y,h = d - c,g = f - e;
    if (b.atoms_display && !b.atoms_circles_2D && this.a1.isLabelVisible(b)) {
        c += h * b.bonds_atomLabelBuffer_2D;
        e += g * b.bonds_atomLabelBuffer_2D
    }
    if (b.atoms_display && !b.atoms_circles_2D && this.a2.isLabelVisible(b)) {
        d -= h * b.bonds_atomLabelBuffer_2D;
        f -= g * b.bonds_atomLabelBuffer_2D
    }
    if (b.bonds_clearOverlaps_2D) {
        var i = c + h * 0.15,j = e + g * 0.15,l = d - h * 0.15,k = f - g * 0.15;
        a.strokeStyle = b.backgroundColor;
        a.lineWidth = b.bonds_width_2D + b.bonds_overlapClearWidth_2D *
                2;
        a.lineCap = "round";
        a.beginPath();
        a.moveTo(i, j);
        a.lineTo(l, k);
        a.closePath();
        a.stroke()
    }
    a.strokeStyle = b.bonds_color;
    a.fillStyle = b.bonds_color;
    a.lineWidth = b.bonds_width_2D;
    a.lineCap = b.bonds_ends_2D;
    if (b.bonds_useJMOLColors) {
        i = a.createLinearGradient(c, e, d, f);
        i.addColorStop(0, ELEMENT[this.a1.name].jmolColor);
        i.addColorStop(1, ELEMENT[this.a2.name].jmolColor);
        a.strokeStyle = i
    }
    switch (this.bondOrder) {case 1:if (this.stereo == BOND_STEREO_PROTRUDING || this.stereo == BOND_STEREO_RECESSED) {
        i = this.a1.distance(this.a2) *
                b.bonds_wedgeThickness_2D / 2;
        j = this.a1.angle(this.a2) + Math.PI / 2;
        l = d + Math.cos(j) * i;
        k = f - Math.sin(j) * i;
        var n = d - Math.cos(j) * i;
        j = f + Math.sin(j) * i;
        a.beginPath();
        a.moveTo(c, e);
        a.lineTo(l, k);
        a.lineTo(n, j);
        a.closePath();
        if (this.stereo == BOND_STEREO_PROTRUDING)a.fill(); else {
            a.save();
            a.clip();
            a.beginPath();
            a.moveTo(c, e);
            a.lineWidth = i * 2;
            a.lineCap = "butt";
            f = 0;
            l = this.a1.distance(this.a2);
            d = false;
            c = c;
            for (e = e; f < l;) {
                if (d) {
                    i = b.bonds_hashSpacing_2D / l;
                    c += i * h;
                    e += i * g;
                    a.moveTo(c, e);
                    f += b.bonds_hashSpacing_2D
                } else {
                    i = b.bonds_hashWidth_2D /
                            l;
                    c += i * h;
                    e += i * g;
                    a.lineTo(c, e);
                    f += b.bonds_hashWidth_2D
                }
                d = !d
            }
            a.stroke();
            a.restore()
        }
    } else {
        a.beginPath();
        a.moveTo(c, e);
        a.lineTo(d, f);
        a.stroke()
    }break;case 1.5:a.beginPath();a.moveTo(c, e);a.lineTo(d, f);a.stroke();break;case 2:if (this.stereo == BOND_STEREO_AMBIGUOUS) {
        i = this.a1.distance(this.a2) * b.bonds_saturationWidth_2D / 2;
        j = this.a1.angle(this.a2) + Math.PI / 2;
        h = c - Math.cos(j) * i;
        g = e + Math.sin(j) * i;
        var o = c + Math.cos(j) * i,m = e - Math.sin(j) * i;
        l = d + Math.cos(j) * i;
        k = f - Math.sin(j) * i;
        n = d - Math.cos(j) * i;
        j = f + Math.sin(j) * i;
        a.beginPath();
        a.moveTo(h, g);
        a.lineTo(l, k);
        a.moveTo(o, m);
        a.lineTo(n, j);
        a.stroke()
    } else if (!b.bonds_symmetrical_2D && (this.ring != null || this.a1.name == "C" && this.a2.name == "C")) {
        a.beginPath();
        a.moveTo(c, e);
        a.lineTo(d, f);
        g = 0;
        l = this.a1.distance(this.a2);
        h = this.a1.angle(this.a2);
        j = h + Math.PI / 2;
        i = l * b.bonds_saturationWidth_2D;
        k = b.bonds_saturationAngle_2D;
        if (k < Math.PI / 2)g = -(i / Math.tan(k));
        if (Math.abs(g) < l / 2) {
            l = c - Math.cos(h) * g;
            c = d + Math.cos(h) * g;
            d = e + Math.sin(h) * g;
            e = f - Math.sin(h) * g;
            h = l - Math.cos(j) * i;
            g = d + Math.sin(j) *
                    i;
            o = l + Math.cos(j) * i;
            m = d - Math.sin(j) * i;
            l = c - Math.cos(j) * i;
            k = e + Math.sin(j) * i;
            n = c + Math.cos(j) * i;
            j = e - Math.sin(j) * i;
            if (this.ring == null || this.ring.center.angle(this.a1) > this.ring.center.angle(this.a2) && !(this.ring.center.angle(this.a1) - this.ring.center.angle(this.a2) > Math.PI) || this.ring.center.angle(this.a1) - this.ring.center.angle(this.a2) < -Math.PI) {
                a.moveTo(h, g);
                a.lineTo(l, k)
            } else {
                a.moveTo(o, m);
                a.lineTo(n, j)
            }
            a.stroke()
        }
    } else {
        i = this.a1.distance(this.a2) * b.bonds_saturationWidth_2D / 2;
        j = this.a1.angle(this.a2) +
                Math.PI / 2;
        h = c - Math.cos(j) * i;
        g = e + Math.sin(j) * i;
        o = c + Math.cos(j) * i;
        m = e - Math.sin(j) * i;
        l = d + Math.cos(j) * i;
        k = f - Math.sin(j) * i;
        n = d - Math.cos(j) * i;
        j = f + Math.sin(j) * i;
        a.beginPath();
        a.moveTo(h, g);
        a.lineTo(n, j);
        a.moveTo(o, m);
        a.lineTo(l, k);
        a.stroke()
    }break;case 3:i = this.a1.distance(this.a2) * b.bonds_saturationWidth_2D;j = this.a1.angle(this.a2) + Math.PI / 2;h = c - Math.cos(j) * i;g = e + Math.sin(j) * i;o = c + Math.cos(j) * i;m = e - Math.sin(j) * i;l = d + Math.cos(j) * i;k = f - Math.sin(j) * i;n = d - Math.cos(j) * i;j = f + Math.sin(j) * i;a.beginPath();a.moveTo(h,
            g);a.lineTo(n, j);a.moveTo(o, m);a.lineTo(l, k);a.moveTo(c, e);a.lineTo(d, f);a.stroke();break
    }
    if (this.isHover) {
        e = 2 * Math.PI;
        h = (this.a1.angleForStupidCanvasArcs(this.a2) + Math.PI / 2) % e;
        a.strokeStyle = "#885110";
        a.lineWidth = 1.2;
        a.beginPath();
        f = (h + Math.PI) % e;
        f %= Math.PI * 2;
        a.arc(this.a1.x, this.a1.y, 6, h, f, false);
        a.stroke();
        a.beginPath();
        h += Math.PI;
        f = (h + Math.PI) % e;
        a.arc(this.a2.x, this.a2.y, 7, h, f, false);
        a.stroke()
    }
};
Bond.prototype.render = function(a, b) {
    var c = mat4.translate(a.modelViewMatrix, [this.a1.x,this.a1.y,this.a1.z], []),d = [this.a2.x - this.a1.x,this.a2.y - this.a1.y,this.a2.z - this.a1.z];
    b.bonds_useJMOLColors && vec3.scale(d, 0.5);
    if (this.a1.x == this.a2.x && this.a1.z == this.a2.z)this.a2.y < this.a1.y && mat4.rotate(c, Math.PI, [0,0,1]); else {
        var e = [0,1,0];
        mat4.rotate(c, vec3.angleFrom(e, d), vec3.cross(e, d, []))
    }
    var f = b.bonds_useJMOLColors ? this.a1.distance3D(this.a2) / 2 : this.a1.distance3D(this.a2);
    if (f == 0)return false;
    mat4.scale(c,
            [b.bonds_width / 2,f,b.bonds_width / 2]);
    a.material.setTempColors(a, b.bonds_materialAmbientColor_3D, b.bonds_useJMOLColors ? ELEMENT[this.a1.name].jmolColor : b.bonds_color, b.bonds_materialSpecularColor_3D, b.bonds_materialShininess_3D);
    a.bindBuffer(a.ARRAY_BUFFER, a.cylinderBuffer.vertexNormalBuffer);
    a.vertexAttribPointer(a.shader.vertexNormalAttribute, a.cylinderBuffer.vertexNormalBuffer.itemSize, a.FLOAT, false, 0, 0);
    a.bindBuffer(a.ARRAY_BUFFER, a.cylinderBuffer.vertexPositionBuffer);
    a.vertexAttribPointer(a.shader.vertexPositionAttribute, a.cylinderBuffer.vertexPositionBuffer.itemSize, a.FLOAT, false, 0, 0);
    a.setMatrixUniforms(a.projectionMatrix, c);
    a.drawArrays(a.TRIANGLE_STRIP, 0, a.cylinderBuffer.vertexPositionBuffer.numItems);
    if (b.bonds_useJMOLColors) {
        c = mat4.translate(a.modelViewMatrix, [this.a2.x,this.a2.y,this.a2.z], []);
        vec3.scale(d, -1);
        if (this.a1.x == this.a2.x && this.a1.z == this.a2.z)this.a2.y > this.a1.y && mat4.rotate(c, Math.PI, [0,0,1]); else {
            e = [0,1,0];
            mat4.rotate(c, vec3.angleFrom(e,
                    d), vec3.cross(e, d, []))
        }
        mat4.scale(c, [b.bonds_width / 2,f * 1.001,b.bonds_width / 2]);
        a.material.setTempColors(a, b.bonds_materialAmbientColor_3D, ELEMENT[this.a2.name].jmolColor, b.bonds_materialSpecularColor_3D, b.bonds_materialShininess_3D);
        a.bindBuffer(a.ARRAY_BUFFER, a.cylinderBuffer.vertexNormalBuffer);
        a.vertexAttribPointer(a.shader.vertexNormalAttribute, a.cylinderBuffer.vertexNormalBuffer.itemSize, a.FLOAT, false, 0, 0);
        a.bindBuffer(a.ARRAY_BUFFER, a.cylinderBuffer.vertexPositionBuffer);
        a.vertexAttribPointer(a.shader.vertexPositionAttribute, a.cylinderBuffer.vertexPositionBuffer.itemSize, a.FLOAT, false, 0, 0);
        a.setMatrixUniforms(a.projectionMatrix, c);
        a.drawArrays(a.TRIANGLE_STRIP, 0, a.cylinderBuffer.vertexPositionBuffer.numItems)
    }
};
function Molecule() {
    this.people = [];
    this.bonds = [];
    this.rings = [];
    return this.findRings = true
}
Molecule.prototype.draw = function(a, b) {
    if (b.bonds_display == true)for (var c = 0,d = this.bonds.length; c < d; c++)this.bonds[c].draw(a, b);
    if (b.atoms_display == true) {
        c = 0;
        for (d = this.people.length; c < d; c++)this.people[c].draw(a, b)
    }
};
Molecule.prototype.render = function(a, b) {
    if (b.bonds_display == true)for (var c = 0,d = this.bonds.length; c < d; c++)this.bonds[c].render(a, b);
    if (b.atoms_display == true) {
        c = 0;
        for (d = this.people.length; c < d; c++)this.people[c].render(a, b)
    }
};
Molecule.prototype.getCenter3D = function() {
    if (this.people.length == 1)return new Atom("C", this.people[0].x, this.people[0].y, this.people[0].z);
    for (var a = minY = minZ = Infinity,b = maxY = maxZ = -Infinity,c = 0,d = this.people.length; c < d; c++) {
        a = Math.min(this.people[c].x, a);
        minY = Math.min(this.people[c].y, minY);
        minZ = Math.min(this.people[c].z, minZ);
        b = Math.max(this.people[c].x, b);
        maxY = Math.max(this.people[c].y, maxY);
        maxZ = Math.max(this.people[c].z, maxZ)
    }
    return new Atom("C", (b + a) / 2, (maxY + minY) / 2, (maxZ + minZ) / 2)
};
Molecule.prototype.getCenter = function() {
    if (this.people.length == 1)return new Point(this.people[0].x, this.people[0].y);
    for (var a = minY = Infinity,b = maxY = -Infinity,c = 0,d = this.people.length; c < d; c++) {
        a = Math.min(this.people[c].x, a);
        minY = Math.min(this.people[c].y, minY);
        b = Math.max(this.people[c].x, b);
        maxY = Math.max(this.people[c].y, maxY)
    }
    return new Point((b + a) / 2, (maxY + minY) / 2)
};
Molecule.prototype.getDimension = function() {
    if (this.people.length == 1)return new Point(0, 0);
    for (var a = minY = Infinity,b = maxY = -Infinity,c = 0,d = this.people.length; c < d; c++) {
        a = Math.min(this.people[c].x, a);
        minY = Math.min(this.people[c].y, minY);
        b = Math.max(this.people[c].x, b);
        maxY = Math.max(this.people[c].y, maxY)
    }
    return new Point(b - a, maxY - minY)
};
Molecule.prototype.check = function() {
    for (var a = 0,b = this.people.length; a < b; a++) {
        this.people[a].isLone = false;
        if (this.people[a].name == "C") {
            for (var c = 0,d = 0,e = this.bonds.length; d < e; d++)if (this.bonds[d].a1 == this.people[a] || this.bonds[d].a2 == this.people[a])c++;
            if (c == 0)this.people[a].isLone = true
        }
    }
    if (this.findRings) {
        this.rings = (new SSSRFinder(this)).rings;
        a = 0;
        for (b = this.rings.length; a < b; a++)this.rings[a].setupBonds()
    }
    this.sortAtomsByZ();
    this.sortBondsByZ();
    this.setupMetaData()
};
Molecule.prototype.getAngles = function(a) {
    for (var b = [],c = 0,d = this.bonds.length; c < d; c++)if (this.bonds[c].contains(a))b[b.length] = a.angle(this.bonds[c].getNeighbor(a));
    b.sort();
    return b
};
Molecule.prototype.getCoordinationNumber = function(a) {
    for (var b = 0,c = 0,d = a.length; c < d; c++)b += a[c].bondOrder;
    return b
};
Molecule.prototype.getBonds = function(a) {
    for (var b = [],c = 0,d = this.bonds.length; c < d; c++)if (this.bonds[c].contains(a))b[b.length] = this.bonds[c];
    return b
};
Molecule.prototype.sortAtomsByZ = function() {
    for (var a = 1,b = this.people.length; a < b; a++)for (var c = a; c > 0 && this.people[c].z < this.people[c - 1].z;) {
        var d = this.people[c];
        this.people[c] = this.people[c - 1];
        this.people[c - 1] = d;
        c--
    }
};
Molecule.prototype.sortBondsByZ = function() {
    for (var a = 1,b = this.bonds.length; a < b; a++)for (var c = a; c > 0 && this.bonds[c].a1.z + this.bonds[c].a2.z < this.bonds[c - 1].a1.z + this.bonds[c - 1].a2.z;) {
        var d = this.bonds[c];
        this.bonds[c] = this.bonds[c - 1];
        this.bonds[c - 1] = d;
        c--
    }
};
Molecule.prototype.setupMetaData = function() {
    for (var a = 0,b = this.people.length; a < b; a++) {
        var c = this.people[a],d = this.getBonds(c),e = this.getAngles(c);
        c.isHidden = d.length == 2 && Math.abs(Math.abs(e[1] - e[0]) - Math.PI) < Math.PI / 30 && d[0].bondOrder == d[1].bondOrder;
        c.angleOfLeastInterference = angleBetweenLargest(e) % (Math.PI * 2);
        c.coordinationNumber = this.getCoordinationNumber(d);
        c.bondNumber = d.length
    }
};
Molecule.prototype.scaleToAverageBondLength = function(a) {
    var b = this.getAverageBondLength();
    if (b != 0) {
        a = a / b;
        b = 0;
        for (var c = this.people.length; b < c; b++) {
            this.people[b].x *= a;
            this.people[b].y *= a
        }
    }
};
Molecule.prototype.getAverageBondLength = function() {
    if (this.bonds.length == 0)return 0;
    for (var a = 0,b = 0,c = this.bonds.length; b < c; b++)a += this.bonds[b].getLength();
    a /= this.bonds.length;
    return a
};
function Spectrum() {
    this.data = [];
    this.yUnit = this.xUnit = this.title = null;
    return this.continuous = true
}
Spectrum.prototype.draw = function(a, b, c, d) {
    var e = 5,f = 0,h = 0;
    a.fillStyle = b.text_color;
    a.textAlign = "center";
    a.textBaseline = "alphabetic";
    a.font = b.getFontString(b.text_font_size, b.text_font_families);
    if (this.xUnit) {
        h += b.text_font_size;
        a.fillText(this.xUnit, c / 2, d - 2)
    }
    if (this.yUnit && b.plots_showYAxis) {
        f += b.text_font_size;
        a.save();
        a.translate(b.text_font_size, d / 2);
        a.rotate(-Math.PI / 2);
        a.fillText(this.yUnit, 0, 0);
        a.restore()
    }
    if (this.title != null) {
        e += b.text_font_size;
        a.fillText(this.title, c / 2, b.text_font_size)
    }
    h +=
            5 + b.text_font_size;
    if (b.plots_showYAxis)f += 5 + a.measureText("0.0").width;
    if (b.plots_showGrid) {
        a.strokeStyle = b.plots_gridColor;
        a.lineWidth = b.plots_gridLineWidth;
        a.strokeRect(f, e, c - f, d - h - e)
    }
    a.textAlign = "center";
    a.textBaseline = "top";
    for (var g = (this.maxX - this.minX) / 10,i = 0.0010; i < g;)i *= 10;
    var j = 0;
    for (g = 0; g <= this.maxX; g += i / 2) {
        var l = this.getTransformedX(g, b, c, f);
        if (l > f) {
            a.strokeStyle = "black";
            a.lineWidth = 1;
            if (j % 2 == 0) {
                a.beginPath();
                a.moveTo(l, d - h);
                a.lineTo(l, d - h + 2);
                a.stroke();
                for (var k = g.toFixed(5); k.charAt(k.length -
                        1) == "0";)k = k.substring(0, k.length - 1);
                if (k.charAt(k.length - 1) == ".")k = k.substring(0, k.length - 1);
                a.fillText(k, l, d - h + 2);
                if (b.plots_showGrid) {
                    a.strokeStyle = b.plots_gridColor;
                    a.lineWidth = b.plots_gridLineWidth;
                    a.beginPath();
                    a.moveTo(l, d - h);
                    a.lineTo(l, e);
                    a.stroke()
                }
            } else {
                a.beginPath();
                a.moveTo(l, d - h);
                a.lineTo(l, d - h + 2);
                a.stroke()
            }
        }
        j++
    }
    if (b.plots_showYAxis) {
        a.textAlign = "right";
        a.textBaseline = "middle";
        for (g = 0; g <= 1; g += 0.1) {
            j = e + (d - h - e) * (1 - g * b.scale);
            if (j > e) {
                a.strokeStyle = "black";
                a.lineWidth = 1;
                a.beginPath();
                a.moveTo(f,
                        j);
                a.lineTo(f - 3, j);
                a.stroke();
                if (b.plots_showGrid) {
                    a.strokeStyle = b.plots_gridColor;
                    a.lineWidth = b.plots_gridLineWidth;
                    a.beginPath();
                    a.moveTo(f, j);
                    a.lineTo(c, j);
                    a.stroke()
                }
                a.fillText(g.toFixed(1), f - 3, j)
            }
        }
    }
    a.strokeStyle = "black";
    a.lineWidth = 1;
    a.beginPath();
    a.moveTo(c, d - h);
    a.lineTo(f, d - h);
    b.plots_showYAxis && a.lineTo(f, e);
    a.stroke();
    a.strokeStyle = b.plots_color;
    a.lineWidth = b.plots_width;
    i = [];
    a.beginPath();
    if (this.continuous) {
        var n = false;
        g = 0;
        for (k = this.data.length; g < k; g++) {
            l = this.getTransformedX(this.data[g].x,
                    b, c, f);
            if (l >= f && l < c) {
                j = this.getTransformedY(this.data[g].y, b, d, h, e);
                if (b.plots_showIntegration)i[i.length] = new Point(this.data[g].x, this.data[g].y);
                if (!n) {
                    a.moveTo(l, j);
                    n = true
                }
                a.lineTo(l, j)
            } else if (n)break
        }
    } else {
        g = 0;
        for (k = this.data.length; g < k; g++) {
            l = this.getTransformedX(this.data[g].x, b, c, f);
            if (l >= f && l < c) {
                a.moveTo(l, d - h);
                a.lineTo(l, this.getTransformedY(this.data[g].y, b, d, h, e))
            }
        }
    }
    a.stroke();
    if (b.plots_showIntegration) {
        a.strokeStyle = b.plots_integrationColor;
        a.lineWidth = b.plots_integrationLineWidth;
        a.beginPath();
        g = i[1].x > i[0].x;
        if (this.flipXAxis && !g || !this.flipXAxis && g) {
            for (g = i.length - 2; g >= 0; g--)i[g].y += i[g + 1].y;
            n = i[0].y
        } else {
            g = 1;
            for (k = i.length; g < k; g++)i[g].y += i[g - 1].y;
            n = i[i.length - 1].y
        }
        g = 0;
        for (k = i.length; g < k; g++) {
            l = this.getTransformedX(i[g].x, b, c, f);
            j = this.getTransformedY(i[g].y / n, b, d, h, e);
            g == 0 ? a.moveTo(l, j) : a.lineTo(l, j)
        }
        a.stroke()
    }
    memoryOffsetLeft = f;
    memoryFlipXAxis = b.plots_flipXAxis
};
Spectrum.prototype.getTransformedY = function(a, b, c, d, e) {
    return e + (c - d - e) * (1 - a * b.scale)
};
Spectrum.prototype.getTransformedX = function(a, b, c, d) {
    a = d + (a - this.minX) / (this.maxX - this.minX) * (c - d);
    if (b.plots_flipXAxis)a = c + d - a;
    return a
};
Spectrum.prototype.getInverseTransformedX = function(a, b, c) {
    if (memoryFlipXAxis)a = b + c - a;
    return(a - c) * (this.maxX - this.minX) / (b - c) + this.minX
};
Spectrum.prototype.setup = function() {
    for (var a = Number.MAX_VALUE,b = Number.MIN_VALUE,c = Number.MIN_VALUE,d = 0,e = this.data.length; d < e; d++) {
        a = Math.min(a, this.data[d].x);
        b = Math.max(b, this.data[d].x);
        c = Math.max(c, this.data[d].y)
    }
    if (this.continuous) {
        this.minX = a;
        this.maxX = b
    } else {
        this.minX = a - 1;
        this.maxX = b + 1
    }
    d = 0;
    for (e = this.data.length; d < e; d++)this.data[d].y /= c
};
Spectrum.prototype.zoom = function(a, b, c) {
    a = this.getInverseTransformedX(a, c, memoryOffsetLeft);
    b = this.getInverseTransformedX(b, c, memoryOffsetLeft);
    this.minX = Math.min(a, b);
    this.maxX = Math.max(a, b)
};
function Cube() {
}
Cube.prototype.generate = function(a) {
    this.vertexPositionBuffer = a.createBuffer();
    a.bindBuffer(a.ARRAY_BUFFER, this.vertexPositionBuffer);
    vertices = [-1,-1,1,1,-1,1,1,1,1,-1,1,1,-1,-1,-1,-1,1,-1,1,1,-1,1,-1,-1,-1,1,-1,-1,1,1,1,1,1,1,1,-1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,-1,1,-1,-1,-1,-1,-1,1,-1,1,1,-1,1,-1];
    a.bufferData(a.ARRAY_BUFFER, new Float32Array(vertices), a.STATIC_DRAW);
    this.vertexPositionBuffer.itemSize = 3;
    this.vertexPositionBuffer.numItems = 24;
    this.vertexColorBuffer = a.createBuffer();
    a.bindBuffer(a.ARRAY_BUFFER, this.vertexColorBuffer);
    var b = [
        [1,0,0,1],
        [1,1,0,1],
        [0,1,0,1],
        [1,0.5,0.5,1],
        [1,0,1,1],
        [0,0,1,1]
    ],c = [];
    for (var d in b)for (var e = b[d],f = 0; f < 4; f++)c = c.concat(e);
    a.bufferData(a.ARRAY_BUFFER, new Float32Array(c), a.STATIC_DRAW);
    this.vertexColorBuffer.itemSize = 4;
    this.vertexColorBuffer.numItems = 24;
    this.vertexNormalBuffer = a.createBuffer();
    a.bindBuffer(a.ARRAY_BUFFER, this.vertexNormalBuffer);
    a.bufferData(a.ARRAY_BUFFER, new Float32Array([0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,
        0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0]), a.STATIC_DRAW);
    this.vertexNormalBuffer.itemSize = 3;
    this.vertexNormalBuffer.numItems = 24;
    this.vertexIndexBuffer = a.createBuffer();
    a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.vertexIndexBuffer);
    a.bufferData(a.ELEMENT_ARRAY_BUFFER, new Uint16Array([0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23]), a.STATIC_DRAW);
    this.vertexIndexBuffer.itemSize = 1;
    this.vertexIndexBuffer.numItems =
            36
};
function Cylinder() {
}
Cylinder.prototype.generate = function(a, b, c, d) {
    for (var e = [],f = [],h = 0; h < d; h++) {
        var g = h * 2 * Math.PI / d,i = Math.cos(g);
        g = Math.sin(g);
        f.push(i, 0, g);
        e.push(b * i, 0, b * g);
        f.push(i, 0, g);
        e.push(b * i, c, b * g)
    }
    f.push(1, 0, 0);
    e.push(b, 0, 0);
    f.push(1, 0, 0);
    e.push(b, c, 0);
    this.vertexNormalBuffer = a.createBuffer();
    a.bindBuffer(a.ARRAY_BUFFER, this.vertexNormalBuffer);
    a.bufferData(a.ARRAY_BUFFER, new Float32Array(f), a.STATIC_DRAW);
    this.vertexNormalBuffer.itemSize = 3;
    this.vertexNormalBuffer.numItems = f.length / 3;
    this.vertexPositionBuffer =
            a.createBuffer();
    a.bindBuffer(a.ARRAY_BUFFER, this.vertexPositionBuffer);
    a.bufferData(a.ARRAY_BUFFER, new Float32Array(e), a.STATIC_DRAW);
    this.vertexPositionBuffer.itemSize = 3;
    this.vertexPositionBuffer.numItems = e.length / 3
};
function Light(a, b, c) {
    this.diffuseRGB = [parseInt(a.substring(1, 3), 16) / 255,parseInt(a.substring(3, 5), 16) / 255,parseInt(a.substring(5, 7), 16) / 255];
    this.specularRGB = [parseInt(b.substring(1, 3), 16) / 255,parseInt(b.substring(3, 5), 16) / 255,parseInt(b.substring(5, 7), 16) / 255];
    this.direction = c
}
Light.prototype.lightScene = function(a) {
    a.uniform3f(a.getUniformLocation(a.program, "u_light.diffuse_color"), this.diffuseRGB[0], this.diffuseRGB[1], this.diffuseRGB[2]);
    a.uniform3f(a.getUniformLocation(a.program, "u_light.specular_color"), this.specularRGB[0], this.specularRGB[1], this.specularRGB[2]);
    var b = vec3.create(this.direction);
    vec3.normalize(b);
    vec3.negate(b);
    a.uniform3f(a.getUniformLocation(a.program, "u_light.direction"), b[0], b[1], b[2]);
    var c = [0,0,0];
    b = [c[0] + b[0],c[1] + b[1],c[2] + b[2]];
    c = vec3.length(b);
    if (c == 0)b = [0,0,1]; else vec3.scale(1 / c);
    a.uniform3f(a.getUniformLocation(a.program, "u_light.half_vector"), b[0], b[1], b[2])
};
function Material(a, b, c, d) {
    this.ambientColor = a;
    this.diffuseColor = b;
    this.specularColor = c;
    this.shininess = d
}
Material.prototype.setup = function(a) {
    this.setTempColors(a, this.ambientColor, this.diffuseColor, this.specularColor, this.shininess)
};
Material.prototype.setTempColors = function(a, b, c, d, e) {
    a.uniform3f(a.getUniformLocation(a.program, "u_material.ambient_color"), parseInt(b.substring(1, 3), 16) / 255, parseInt(b.substring(3, 5), 16) / 255, parseInt(b.substring(5, 7), 16) / 255);
    a.uniform3f(a.getUniformLocation(a.program, "u_material.diffuse_color"), parseInt(c.substring(1, 3), 16) / 255, parseInt(c.substring(3, 5), 16) / 255, parseInt(c.substring(5, 7), 16) / 255);
    a.uniform3f(a.getUniformLocation(a.program, "u_material.specular_color"), parseInt(d.substring(1, 3), 16) /
            255, parseInt(d.substring(3, 5), 16) / 255, parseInt(d.substring(5, 7), 16) / 255);
    a.uniform1f(a.getUniformLocation(a.program, "u_material.shininess"), e)
};
function Shader() {
}
Shader.prototype.init = function(a) {
    var b = this.getShader(a, "vertex-shader");
    if (b == null)b = this.loadDefaultVertexShader(a);
    var c = this.getShader(a, "fragment-shader");
    if (c == null)c = this.loadDefaultFragmentShader(a);
    a.attachShader(a.program, b);
    a.attachShader(a.program, c);
    a.linkProgram(a.program);
    a.getProgramParameter(a.program, a.LINK_STATUS) || alert("Could not initialize shaders!");
    a.useProgram(a.program);
    this.vertexPositionAttribute = a.getAttribLocation(a.program, "a_vertex_position");
    a.enableVertexAttribArray(this.vertexPositionAttribute);
    this.vertexNormalAttribute = a.getAttribLocation(a.program, "a_vertex_normal");
    a.enableVertexAttribArray(this.vertexNormalAttribute)
};
Shader.prototype.getShader = function(a, b) {
    var c = document.getElementById(b);
    if (!c)return null;
    for (var d = [],e = c.firstChild; e;) {
        e.nodeType == 3 && d.push(e.textContent);
        e = e.nextSibling
    }
    if (c.type == "x-shader/x-fragment")c = a.createShader(a.FRAGMENT_SHADER); else if (c.type == "x-shader/x-vertex")c = a.createShader(a.VERTEX_SHADER); else return null;
    a.shaderSource(c, d.join(""));
    a.compileShader(c);
    if (!a.getShaderParameter(c, a.COMPILE_STATUS)) {
        alert(a.getShaderInfoLog(c));
        return null
    }
    return c
};
Shader.prototype.loadDefaultVertexShader = function(a) {
    var b = [];
    b.push("#ifdef GL_ES\n");
    b.push("precision highp float;\n");
    b.push("#endif\n");
    b.push("struct Light");
    b.push("{");
    b.push("vec3 diffuse_color;");
    b.push("vec3 specular_color;");
    b.push("vec3 direction;");
    b.push("vec3 half_vector;");
    b.push("};");
    b.push("struct Material");
    b.push("{");
    b.push("vec3 ambient_color;");
    b.push("vec3 diffuse_color;");
    b.push("vec3 specular_color;");
    b.push("float shininess;");
    b.push("};");
    b.push("attribute vec3 a_vertex_position;");
    b.push("attribute vec3 a_vertex_normal;");
    b.push("uniform Light u_light;");
    b.push("uniform Material u_material;");
    b.push("uniform mat4 u_model_view_matrix;");
    b.push("uniform mat4 u_projection_matrix;");
    b.push("uniform mat4 u_normal_matrix;");
    b.push("varying vec4 v_diffuse;");
    b.push("varying vec4 v_ambient;");
    b.push("varying vec3 v_normal;");
    b.push("varying vec3 v_light_direction;");
    b.push("void main(void)");
    b.push("{");
    b.push("v_normal = normalize((u_normal_matrix * vec4(a_vertex_normal, 1.0)).xyz);");
    b.push("vec4 diffuse = vec4(u_light.diffuse_color, 1.0);");
    b.push("v_light_direction = u_light.direction;");
    b.push("v_ambient = vec4(u_material.ambient_color, 1.0);");
    b.push("v_diffuse = vec4(u_material.diffuse_color, 1.0) * diffuse;");
    b.push("gl_Position = u_projection_matrix * u_model_view_matrix * vec4(a_vertex_position, 1.0);");
    b.push("}");
    var c = a.createShader(a.VERTEX_SHADER);
    a.shaderSource(c, b.join(""));
    a.compileShader(c);
    if (!a.getShaderParameter(c, a.COMPILE_STATUS)) {
        alert(a.getShaderInfoLog(c));
        return null
    }
    return c
};
Shader.prototype.loadDefaultFragmentShader = function(a) {
    var b = [];
    b.push("#ifdef GL_ES\n");
    b.push("precision highp float;\n");
    b.push("#endif\n");
    b.push("struct Light");
    b.push("{");
    b.push("vec3 diffuse_color;");
    b.push("vec3 specular_color;");
    b.push("vec3 direction;");
    b.push("vec3 half_vector;");
    b.push("};");
    b.push("struct Material");
    b.push("{");
    b.push("vec3 ambient_color;");
    b.push("vec3 diffuse_color;");
    b.push("vec3 specular_color;");
    b.push("float shininess;");
    b.push("};");
    b.push("uniform Light u_light;");
    b.push("uniform Material u_material;");
    b.push("varying vec4 v_diffuse;");
    b.push("varying vec4 v_ambient;");
    b.push("varying vec3 v_normal;");
    b.push("varying vec3 v_light_direction;");
    b.push("void main(void)");
    b.push("{");
    b.push("float nDotL = max(dot(v_normal, v_light_direction), 0.0);");
    b.push("vec4 color = vec4(v_diffuse.rgb*nDotL, v_diffuse.a);");
    b.push("float nDotHV = max(dot(v_normal, u_light.half_vector), 0.0);");
    b.push("vec4 specular = vec4(u_material.specular_color * u_light.specular_color, 1.0);");
    b.push("color+=vec4(specular.rgb * pow(nDotHV, u_material.shininess), specular.a);");
    b.push("gl_FragColor = color+v_ambient;");
    b.push("}");
    var c = a.createShader(a.FRAGMENT_SHADER);
    a.shaderSource(c, b.join(""));
    a.compileShader(c);
    if (!a.getShaderParameter(c, a.COMPILE_STATUS)) {
        alert(a.getShaderInfoLog(c));
        return null
    }
    return c
};
function Sphere() {
}
Sphere.prototype.generate = function(a, b, c, d) {
    for (var e = [],f = [],h = 0; h <= c; h++) {
        var g = h * Math.PI / c,i = Math.sin(g),j = Math.cos(g);
        for (g = 0; g <= d; g++) {
            var l = g * 2 * Math.PI / d,k = Math.sin(l);
            l = Math.cos(l) * i;
            var n = j;
            k = k * i;
            f.push(l);
            f.push(n);
            f.push(k);
            e.push(b * l);
            e.push(b * n);
            e.push(b * k)
        }
    }
    b = [];
    d += 1;
    for (h = 0; h < c; h++)for (g = 0; g < d; g++) {
        i = h * d + g % d;
        j = i + d;
        b.push(i);
        b.push(j);
        b.push(i + 1);
        if (g < d - 1) {
            b.push(j);
            b.push(j + 1);
            b.push(i + 1)
        }
    }
    this.vertexNormalBuffer = a.createBuffer();
    a.bindBuffer(a.ARRAY_BUFFER, this.vertexNormalBuffer);
    a.bufferData(a.ARRAY_BUFFER, new Float32Array(f), a.STATIC_DRAW);
    this.vertexNormalBuffer.itemSize = 3;
    this.vertexNormalBuffer.numItems = f.length / 3;
    this.vertexPositionBuffer = a.createBuffer();
    a.bindBuffer(a.ARRAY_BUFFER, this.vertexPositionBuffer);
    a.bufferData(a.ARRAY_BUFFER, new Float32Array(e), a.STATIC_DRAW);
    this.vertexPositionBuffer.itemSize = 3;
    this.vertexPositionBuffer.numItems = e.length / 3;
    this.vertexIndexBuffer = a.createBuffer();
    a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.vertexIndexBuffer);
    a.bufferData(a.ELEMENT_ARRAY_BUFFER,
            new Uint16Array(b), a.STREAM_DRAW);
    this.vertexIndexBuffer.itemSize = 1;
    this.vertexIndexBuffer.numItems = b.length
};
function ValidateMolecule(a) {
    if (a.q.value.match(/^$|^ +$/)) {
        alert("You must enter a molecule value.");
        return false
    }
    a.submit();
    return true
}
function GetMolFromFrame(a, b) {
    if (b) {
        var c = document.getElementById(a).contentDocument.body.innerHTML;
        if (c != "")if (c.match("^ChemDoodle Web Components Query Error.|^File Error."))alert(c); else try {
            c = readMOL(c);
            if (c == null || c.people.length == 0)alert("Invalid data found. Please input a valid MOL or SDF file.");
            removeHydrogens(c);
            b.loadFamily(c)
        } catch(d) {
            alert("Invalid data found. Please input a valid MOL or SDF file.")
        }
    }
}
function Get3DMolFromFrame(a, b) {
    if (b) {
        var c = document.getElementById(a).contentDocument.body.innerHTML;
        if (c.match("^ChemDoodle Web Components Query Error.|^File Error."))alert(c); else {
            c = readMOL(c, 1);
            b.loadFamily(c)
        }
    }
}
function GetPdbFromFrameDEMO(a, b) {
    if (b) {
        var c = document.getElementById(a).contentDocument.body.innerHTML;
        c.match("^ChemDoodle Web Components Query Error.") ? alert(c) : b.loadFamily(readPDB(c))
    }
}
function readMOL(a, b) {
    var c = default_bondLength_2D;
    if (b)default_bondLength_2D = b;
    var d = new Molecule;
    if (a == null || a.length == 0)return d;
    var e = a.split("\n"),f = e[3],h = parseInt(parseInt(f.substring(0, 3)));
    f = parseInt(parseInt(f.substring(3, 6)));
    for (var g = 0; g < h; g++) {
        var i = e[4 + g];
        d.people[g] = new Atom(i.substring(31, 34), parseFloat(i.substring(0, 10)) * default_bondLength_2D, -parseFloat(i.substring(10, 20)) * default_bondLength_2D, parseFloat(i.substring(20, 30)) * default_bondLength_2D);
        switch (parseInt(i.substring(36, 39))) {case 1:d.people[g].charge =
                3;break;case 2:d.people[g].charge = 2;break;case 3:d.people[g].charge = 1;break;case 5:d.people[g].charge = -1;break;case 6:d.people[g].charge = -2;break;case 7:d.people[g].charge = -3;break
        }
    }
    for (g = 0; g < f; g++) {
        i = e[4 + h + g];
        var j = parseInt(i.substring(6, 9)),l = parseInt(i.substring(9, 12));
        if (j > 3)switch (j) {case 4:j = 1.5;break;default:j = 1;break
        }
        i = new Bond(d.people[parseInt(i.substring(0, 3)) - 1], d.people[parseInt(i.substring(3, 6)) - 1], j);
        switch (l) {case 3:i.stereo = BOND_STEREO_AMBIGUOUS;break;case 1:i.stereo = BOND_STEREO_PROTRUDING;
            break;case 6:i.stereo = BOND_STEREO_RECESSED;break
        }
        d.bonds[g] = i
    }
    if (b)default_bondLength_2D = c;
    return d
}
function writeMOL(a) {
    var b = "Molecule from ChemDoodle Web Components\n\nhttp://www.ichemlabs.com\n";
    b = b + fit(a.people.length.toString(), 3) + fit(a.bonds.length.toString(), 3) + "  0  0  0  0            999 v2000\n";
    for (var c = a.getCenter(),d = 0,e = a.people.length; d < e; d++) {
        var f = a.people[d],h = "  0";
        if (f.charge != 0)switch (f.charge) {case 3:h = "  1";break;case 2:h = "  2";break;case 1:h = "  3";break;case -1:h = "  5";break;case -2:h = "  6";break;case -3:h = "  7";break
        }
        b = b + fit(((f.x - c.x) / default_bondLength_2D).toFixed(4), 10) +
                fit((-(f.y - c.y) / default_bondLength_2D).toFixed(4), 10) + fit((f.z / default_bondLength_2D).toFixed(4), 10) + " " + fit(f.name, 3) + " 0" + h + "  0  0  0  0\n"
    }
    d = 0;
    for (e = a.bonds.length; d < e; d++) {
        c = a.bonds[d];
        f = 0;
        if (c.stereo == BOND_STEREO_AMBIGUOUS)f = 3; else if (c.stereo == BOND_STEREO_PROTRUDING)f = 1; else if (c.stereo == BOND_STEREO_RECESSED)f = 6;
        b = b + fit((indexOf(a.people, c.a1) + 1).toString(), 3) + fit((indexOf(a.people, c.a2) + 1).toString(), 3) + fit(c.bondOrder.toString(), 3) + "  " + f + "     0  0\n"
    }
    b += "M  END";
    return b
}
function fit(a, b) {
    for (var c = a.length,d = "",e = 0; e < b - c; e++)d += " ";
    return d + a
}
function readPDB(a, b) {
    var c = new Molecule;
    if (a == null || a.length == 0)return c;
    var d = a.split("\n"),e = getPointsPerAngstrom();
    if (b)e = b;
    for (var f = 0,h = d.length; f < h; f++) {
        var g = d[f];
        if (g.indexOf("ATOM") == 0 || g.indexOf("HETATM") == 0)c.people[c.people.length] = new Atom(g.substring(76, 78), parseFloat(g.substring(30, 38)) * e, -parseFloat(g.substring(46, 54)) * e, parseFloat(g.substring(38, 46) * e))
    }
    b ? deduceCovalentBonds(c, b) : deduceCovalentBonds(c);
    return c
}
var SQZ_HASH = {"@":0,A:1,B:2,C:3,D:4,E:5,F:6,G:7,H:8,I:9,a:-1,b:-2,c:-3,d:-4,e:-5,f:-6,g:-7,h:-8,i:-9},DIF_HASH = {"%":0,J:1,K:2,L:3,M:4,N:5,O:6,P:7,Q:8,R:9,j:-1,k:-2,l:-3,m:-4,n:-5,o:-6,p:-7,q:-8,r:-9},DUP_HASH = {S:1,T:2,U:3,V:4,W:5,X:6,Y:7,Z:8,s:9};
function readJCAMP(a) {
    this.isBreak = function(p) {
        return SQZ_HASH[p] != null || DIF_HASH[p] != null || DUP_HASH[p] != null || p == " " || p == "-" || p == "+"
    };
    this.getValue = function(p, z) {
        var t = p.charAt(0),u = p.substring(1);
        if (SQZ_HASH[t] != null)return parseFloat(SQZ_HASH[t] + u); else if (DIF_HASH[t] != null)return parseFloat(DIF_HASH[t] + u) + z;
        return parseFloat(u)
    };
    var b = new Spectrum;
    if (a == null || a.length == 0)return b;
    a = a.split("\n");
    for (var c = [],d,e,f,h,g = 1,i = 1,j = 0,l = a.length; j < l; j++) {
        g = $.trim(a[j]);
        if (g.indexOf("$$") != -1)g = g.substring(0,
                g.indexOf("$$"));
        if (c.length == 0 || !a[j].startsWith("##")) {
            c.length != 0 && c.push("\n");
            c.push($.trim(g))
        } else {
            var k = c.join("");
            c = [g];
            if (k.startsWith("##TITLE="))b.title = $.trim(k.substring(8)); else if (k.startsWith("##XUNITS="))b.xUnit = $.trim(k.substring(9)); else if (k.startsWith("##YUNITS="))b.yUnit = $.trim(k.substring(9)); else if (!k.startsWith("##XYPAIRS="))if (k.startsWith("##FIRSTX="))e = parseFloat($.trim(k.substring(9))); else if (k.startsWith("##LASTX="))d = parseFloat($.trim(k.substring(8))); else if (k.startsWith("##FIRSTY="))f =
                    parseFloat($.trim(k.substring(9))); else if (k.startsWith("##NPOINTS="))h = parseFloat($.trim(k.substring(10))); else if (k.startsWith("##XFACTOR="))g = parseFloat($.trim(k.substring(10))); else if (k.startsWith("##YFACTOR="))i = parseFloat($.trim(k.substring(10))); else if (k.startsWith("##XYDATA=")) {
                g = k.split("\n");
                var n = (d - e) / (h - 1),o = e - n,m = f,r = 0,x;
                k = 1;
                for (var v = g.length; k < v; k++) {
                    var s = [];
                    m = $.trim(g[k]);
                    c = [];
                    for (var q = 0,w = m.length; q < w; q++)if (this.isBreak(m.charAt(q))) {
                        if (c.length > 0 && !(c.length == 1 && c[0] == " "))s[s.length] =
                                c.join("");
                        c = [m.charAt(q)]
                    } else c.push(m.charAt(q));
                    s[s.length] = c.join("");
                    q = 1;
                    for (w = s.length; q < w; q++) {
                        m = s[q];
                        if (DUP_HASH[m.charAt(0)] != null)for (var A = parseInt(DUP_HASH[m.charAt(0)] + m.substring(1)) - 1,y = 0; y < A; y++) {
                            o += n;
                            r = this.getValue(x, r);
                            m = r * i;
                            b.data[b.data.length - 1] = new Point(o, m)
                        } else {
                            x = m;
                            o += n;
                            r = this.getValue(m, r);
                            m = r * i;
                            b.data[b.data.length] = new Point(o, m)
                        }
                    }
                }
            } else if (k.startsWith("##PEAK TABLE=")) {
                b.continuous = false;
                g = k.split("\n");
                k = 1;
                for (v = g.length; k < v; k++) {
                    n = g[k].split(",");
                    b.data[b.data.length] =
                            new Point(parseInt($.trim(n[0])), parseInt($.trim(n[1])))
                }
            }
        }
    }
    b.setup();
    return b
}
function angleBetweenLargest(a) {
    if (a.length == 0)return 0;
    if (a.length == 1)return a[0] + Math.PI;
    for (var b = 0,c = 0,d = 0,e = a.length - 1; d < e; d++) {
        var f = a[d + 1] - a[d];
        if (f > b) {
            b = f;
            c = (a[d + 1] + a[d]) / 2
        }
    }
    d = a[0] + Math.PI * 2 - a[a.length - 1];
    if (d > b) {
        c = a[0] - d / 2;
        if (c < 0)c += Math.PI * 2
    }
    return c
}
function isBetween(a, b, c) {
    return a >= b && a <= c
}
function getRGB(a, b) {
    return[parseInt(a.substring(1, 3), 16) / 255 * b,parseInt(a.substring(3, 5), 16) / 255 * b,parseInt(a.substring(5, 7), 16) / 255 * b]
}
function supports_canvas() {
    return!!document.createElement("canvas").getContext
}
function supports_canvas_text() {
    if (!supports_canvas())return false;
    return typeof document.createElement("canvas").getContext("2d").fillText == "function"
}
function alertBrowserIncompatibility() {
    if (!supports_canvas_text()) {
        if ($.browser.msie && $.browser.version >= "6") {
            good = true;
            alert("ChemDoodle Web Components require Google Chrome Frame to run in Internet Explorer. Please install Google Chrome Frame and then restart your browser.\n\nhttp://code.google.com/chrome/chromeframe/")
        }
        good || alert("ChemDoodle Web Components are best viewed in the following browsers with minimum versions listed. Please use one of the following or update your browser for the best experience.\n\nGoogle Chrome 2+ (Windows)\nApple Safari 4+ (Windows, Mac)\nMozilla Firefox 3.5+ (Windows, Mac, Linux)\nOpera 10.5+ (Windows, Mac, Linux)\nInternet Explorer 6+ (Windows)")
    }
}
;
