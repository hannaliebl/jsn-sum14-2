var array = {length:0};

array.pop = function() {
    if (this.length === 0) {
        return undefined;
    } else {
        delete this[(this.length )];
        this.length = this.length - 1;
    }
}

array.push = function(val) {
    this[(this.length + 1)] = val;
    this.length = this.length + 1;
}

array.join = function(val) {
    var joined = "";
    for (i = 1; i<this['length']; i++) {
        joined += this[i]+val
    }
    return joined+this[this.length];
}