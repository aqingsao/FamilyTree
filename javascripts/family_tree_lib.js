String.prototype.startsWith = function(str) {
    return this.match("^" + str) == str;
}

/* Creates a new Queue. A Queue is a first-in-first-out (FIFO) data structure.
 * Functions of the Queue object allow elements to be enqueued and dequeued, the
 * first element to be obtained without dequeuing, and for the current size of
 * the Queue and empty/non-empty status to be obtained.
 */
function Queue() {

    // the list of elements, initialised to the empty array
    var queue = [];

    // the amount of space at the front of the queue, initialised to zero
    var queueSpace = 0;

    /* Returns the size of this Queue. The size of a Queue is equal to the number
     * of elements that have been enqueued minus the number of elements that have
     * been dequeued.
     */
    this.getSize = function() {

        // return the number of elements in the queue
        return queue.length - queueSpace;

    }

    /* Returns true if this Queue is empty, and false otherwise. A Queue is empty
     * if the number of elements that have been enqueued equals the number of
     * elements that have been dequeued.
     */
    this.isEmpty = function() {

        // return true if the queue is empty, and false otherwise
        return (queue.length == 0);

    }

    /* Enqueues the specified element in this Queue. The parameter is:
     *
     * element - the element to enqueue
     */
    this.enqueue = function(element) {
        queue.push(element);
    }

    /* Dequeues an element from this Queue. The oldest element in this Queue is
     * removed and returned. If this Queue is empty then undefined is returned.
     */
    this.dequeue = function() {

        // initialise the element to return to be undefined
        var element = undefined;

        // check whether the queue is empty
        if (queue.length) {

            // fetch the oldest element in the queue
            element = queue[queueSpace];

            // update the amount of space and check whether a shift should occur
            if (++queueSpace * 2 >= queue.length) {

                // set the queue equal to the non-empty portion of the queue
                queue = queue.slice(queueSpace);

                // reset the amount of space at the front of the queue
                queueSpace = 0;

            }

        }

        // return the removed element
        return element;

    }

    /* Returns the oldest element in this Queue. If this Queue is empty then
     * undefined is returned. This function returns the same value as the dequeue
     * function, but does not remove the returned element from this Queue.
     */
    this.getOldestElement = function() {

        // initialise the element to return to be undefined
        var element = undefined;

        // if the queue is not element then fetch the oldest element in the queue
        if (queue.length) element = queue[queueSpace];

        // return the oldest element
        return element;

    }

}

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

mat4.makeInvert = function ( m1 ) {

	//TODO: make this more efficient
	//( based on http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm )
	var m2 = new THREE.Matrix4();

	m2.n11 = m1.n23*m1.n34*m1.n42 - m1.n24*m1.n33*m1.n42 + m1.n24*m1.n32*m1.n43 - m1.n22*m1.n34*m1.n43 - m1.n23*m1.n32*m1.n44 + m1.n22*m1.n33*m1.n44;
	m2.n12 = m1.n14*m1.n33*m1.n42 - m1.n13*m1.n34*m1.n42 - m1.n14*m1.n32*m1.n43 + m1.n12*m1.n34*m1.n43 + m1.n13*m1.n32*m1.n44 - m1.n12*m1.n33*m1.n44;
	m2.n13 = m1.n13*m1.n24*m1.n42 - m1.n14*m1.n23*m1.n42 + m1.n14*m1.n22*m1.n43 - m1.n12*m1.n24*m1.n43 - m1.n13*m1.n22*m1.n44 + m1.n12*m1.n23*m1.n44;
	m2.n14 = m1.n14*m1.n23*m1.n32 - m1.n13*m1.n24*m1.n32 - m1.n14*m1.n22*m1.n33 + m1.n12*m1.n24*m1.n33 + m1.n13*m1.n22*m1.n34 - m1.n12*m1.n23*m1.n34;
	m2.n21 = m1.n24*m1.n33*m1.n41 - m1.n23*m1.n34*m1.n41 - m1.n24*m1.n31*m1.n43 + m1.n21*m1.n34*m1.n43 + m1.n23*m1.n31*m1.n44 - m1.n21*m1.n33*m1.n44;
	m2.n22 = m1.n13*m1.n34*m1.n41 - m1.n14*m1.n33*m1.n41 + m1.n14*m1.n31*m1.n43 - m1.n11*m1.n34*m1.n43 - m1.n13*m1.n31*m1.n44 + m1.n11*m1.n33*m1.n44;
	m2.n23 = m1.n14*m1.n23*m1.n41 - m1.n13*m1.n24*m1.n41 - m1.n14*m1.n21*m1.n43 + m1.n11*m1.n24*m1.n43 + m1.n13*m1.n21*m1.n44 - m1.n11*m1.n23*m1.n44;
	m2.n24 = m1.n13*m1.n24*m1.n31 - m1.n14*m1.n23*m1.n31 + m1.n14*m1.n21*m1.n33 - m1.n11*m1.n24*m1.n33 - m1.n13*m1.n21*m1.n34 + m1.n11*m1.n23*m1.n34;
	m2.n31 = m1.n22*m1.n34*m1.n41 - m1.n24*m1.n32*m1.n41 + m1.n24*m1.n31*m1.n42 - m1.n21*m1.n34*m1.n42 - m1.n22*m1.n31*m1.n44 + m1.n21*m1.n32*m1.n44;
	m2.n32 = m1.n14*m1.n32*m1.n41 - m1.n12*m1.n34*m1.n41 - m1.n14*m1.n31*m1.n42 + m1.n11*m1.n34*m1.n42 + m1.n12*m1.n31*m1.n44 - m1.n11*m1.n32*m1.n44;
	m2.n33 = m1.n13*m1.n24*m1.n41 - m1.n14*m1.n22*m1.n41 + m1.n14*m1.n21*m1.n42 - m1.n11*m1.n24*m1.n42 - m1.n12*m1.n21*m1.n44 + m1.n11*m1.n22*m1.n44;
	m2.n34 = m1.n14*m1.n22*m1.n31 - m1.n12*m1.n24*m1.n31 - m1.n14*m1.n21*m1.n32 + m1.n11*m1.n24*m1.n32 + m1.n12*m1.n21*m1.n34 - m1.n11*m1.n22*m1.n34;
	m2.n41 = m1.n23*m1.n32*m1.n41 - m1.n22*m1.n33*m1.n41 - m1.n23*m1.n31*m1.n42 + m1.n21*m1.n33*m1.n42 + m1.n22*m1.n31*m1.n43 - m1.n21*m1.n32*m1.n43;
	m2.n42 = m1.n12*m1.n33*m1.n41 - m1.n13*m1.n32*m1.n41 + m1.n13*m1.n31*m1.n42 - m1.n11*m1.n33*m1.n42 - m1.n12*m1.n31*m1.n43 + m1.n11*m1.n32*m1.n43;
	m2.n43 = m1.n13*m1.n22*m1.n41 - m1.n12*m1.n23*m1.n41 - m1.n13*m1.n21*m1.n42 + m1.n11*m1.n23*m1.n42 + m1.n12*m1.n21*m1.n43 - m1.n11*m1.n22*m1.n43;
	m2.n44 = m1.n12*m1.n23*m1.n31 - m1.n13*m1.n22*m1.n31 + m1.n13*m1.n21*m1.n32 - m1.n11*m1.n23*m1.n32 - m1.n12*m1.n21*m1.n33 + m1.n11*m1.n22*m1.n33;
	m2.multiplyScalar( 1 / m1.determinant() );

	return m2;

};
