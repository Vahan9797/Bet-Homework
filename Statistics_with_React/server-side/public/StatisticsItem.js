const createGUID = require('./GUID');

class StatisticsItem {
    constructor(name = '') {
        this.id = createGUID();
        this.name = name;
        this.stat = StatisticsItem.randomStat();
    }

    static randomStat() {
        return 5000 + Math.random() * 5000;
    }
}

module.exports = StatisticsItem;