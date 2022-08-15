/*
 * Implements queue
 */
function Queue() {
    this.items = [];

    this.__proto__.enqueue = function (element) {
        this.items.push(element);
    }

    this.__proto__.dequeue = function () {
        if (!this.isEmpty())
            return this.items.shift();
        return null;
    }


    this.__proto__.first = function () {
        if (!this.isEmpty())
            return items[0];
        return null;
    }

    this.__proto__.size = function () {
        return this.items.length;
    }

    this.__proto__.isEmpty = function () {
        return this.items.length === 0;
    }

    this.__proto__.print = function () {
        for(let x of items)
            console.log(x);
    }
}

