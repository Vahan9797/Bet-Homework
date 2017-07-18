export default class Stock {
    constructor(name = '', stats = []) {
        this.name = name;
        this.stats = stats;
    }

    get newStat() {
        return this.stats[this.stats.length - 1];
    }

    get prevStat() {
        return this.stats[this.stats.length - 2];
    }
}