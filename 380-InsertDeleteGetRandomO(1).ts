class RandomizedSet {
    private list;
    private map;

    constructor() {
        this.list = [];
        this.map = new Map();
    }

    insert(val: number): boolean {
        if(!this.map.has(val)){
            this.map.set(val, this.list.length);
            this.list.push(val);

            return true;
        }
        return false;
    }

    remove(val: number): boolean {
        if(!this.map.has(val)) return false;

        let index = this.map.get(val);
        let lastElement = this.list[this.list.length - 1];

        this.list[index] = lastElement;
        this.map.set(lastElement, index);
        
        this.list.pop();
        this.map.delete(val);

        return true;
    }

    getRandom(): number {
        return this.list[Math.floor(Math.random() * this.list.length)];
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
