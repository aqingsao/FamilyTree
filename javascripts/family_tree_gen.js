function getSpouseSex(t) {
    if (t == 'F') {
        return 'M';
    }
    else if (t == 'M') {
        return 'F';
    }
    return null;
}
var xOff = 0;
function makeTree(id, familyInJson) {
    xOff = 0;

    var family = new Family();
    gen(family, null, familyInJson, 0, 0, 0, 'R');

    var canvas = new Canvas3D(id);
    canvas.loadFamily(family);
}

function gen(family, parent, child, x, y, z, type) {
    var person = new Person(child.N, x, y, z, type);
    family.people.push(person);
    if (parent != null) {
        family.bonds.push(new Bond(parent, person, 2));
    }
    if (child.S) {
        var spouse = new Person(child.S.N, x, y, z-1, 'S');
        family.people.push(spouse);
        family.bonds.push(new Bond(person, spouse, 2));
    }

    if (child.C) {
        for (var i = 0; i < child.C.length; i++) {
            if (i > 0) {
                xOff++;
            }
            gen(family, person, child.C[i], xOff, y - 1, z, child.C[i].T);
        }
    }
}

function makeTrees(id, familyInJson1, familyInJson2, name){
    xOff = 0;
    var family = new Family();
    gen(family, null, familyInJson, 0, 0, 0, 'R');

    xOff = 0;
    var anotherFamily  =new Family();
    gen(anotherFamily, null, familyInJson2, 0, 0, -1, 'R');

    linkFamilies(family, anotherFamily, '', '');
    var canvas = new Canvas3D(id);
    canvas.loadFamily(family);    
}

function linkFamilies(family, anotherFamily, name){
    
}