/*
 * Implements Priority Queue
 */
function PriorityQueue() {
    this.items = [];

    this.__proto__.insert = function (element) {
        if (this.items.length === 0) {
            this.items.push(element);
        }
        else {
            let t = false;
            for (let i = 0; i < this.items.length; i++) {
                if (element[1] < this.items[i][1]) {
                    this.items.splice(i, 0, element);
                    t = true;
                    break;
                }
            }
            if (!t) {
                this.items.push(element);
            }
        }
    };

    this.__proto__.min = function () {
        if(this.items.length === 0)
            return null
        return this.items[0][0];
    };

    this.__proto__.removeMin = function () {
        if(this.items.length === 0)
            return null
        let curr = this.items[0][0];
        this.items.shift();
        return curr;
    };

    this.__proto__.size = function () {
        return this.items.length;
    };

    this.__proto__.print = function () {
        for(let x of this.items)
            console.log(x);
    };
}
