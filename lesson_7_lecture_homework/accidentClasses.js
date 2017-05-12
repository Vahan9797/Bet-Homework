!function () {
    function validationCheck(tList) {
        for (var i = 0; i < tList.length; i++) {
            if (typeof tList[i] !== 'string') {
                return false;
            }
        }
        return true;
    }

    function verifyingArray(tList, accidentType) {
        var validArray;
        switch(accidentType) {
            case 'Avia':
            validArray = ['Boeing 747', 'A320 Airbus', 'A319 Airbus'];
            break;
            case 'CivAvia':
            validArray = ['Boeing 737', 'A320 Airbus', 'A319 Airbus'];
            break;
            case 'MilAvia':
            validArray = ['MiG 29', 'Bell 206', 'Boeing AH-64 Apache'];
            break;
            case 'Countries':
            validArray = ['Armenia', 'Turkey', 'Russia'];
            break;
            default:
            validArray = ['Ferrari','Mercedes', 'McLaren'];
        };

        if(validationCheck(tList)) {
            for (var i = 0; i < tList.length; i++) {
                if (!validArray.includes(tList[i])) {
                    throw (accidentType !== 'Countries') ? 'ERROR! Your transportation is invalid.' : 'ERROR! Your countries are invalid.';
                }
            }
        } else {
            throw 'ERROR! Please enter strings.';
        };

        return tList;
    }

    window.TransAccident = function(accD, transL, dmgP, rsnOfAcc) {
        this.accDate = accD || '';
        this.transList = (verifyingArray(transL, 'Trans')) ? transL : [];
        this.dmgPeople = dmgP || 0;
        this.reasonOfAcc = rsnOfAcc || '';
    };

    TransAccident.prototype.toString = function() {
        return `Accident involving ${this.transList} happened on ${this.accDate}:\n`
        + `Reason: ${this.reasonOfAcc}\n`
        + `Total people damaged: ${this.dmgPeople}`;
    }

    TransAccident.prototype.hasInfo = function(str) {
        return str === this.accDate || this.transList.includes(str) || str === this.reasonOfAcc;
    }

    window.AviaAccident = function(accD, transL, dmgP, rsnOfAcc, accAlt) {
        this.accDate = accD || '';
        this.transList = (verifyingArray(transL, 'Avia')) ? transL : [];
        this.dmgPeople = dmgP || 0;
        this.reasonOfAcc = rsnOfAcc || '';
        this.accAltitude = accAlt || 0;
    }
    AviaAccident.prototype = Object.create(TransAccident.prototype);
    AviaAccident.prototype.constructor = AviaAccident;

    AviaAccident.prototype.toString = function() {
        return TransAccident.prototype.toString.call(this) + `\nAltitude of accident: ${this.accAltitude}`;
    }

    AviaAccident.prototype.hasInfo = function(str) {
        return TransAccident.prototype.hasInfo.call(this, str);
    }

    window.CivAviaAcc = function(accD, transL, dmgP, rsnOfAcc, accAlt, aLineName) {
        this.accDate = accD || '';
        this.transList = (verifyingArray(transL, 'CivAvia')) ? transL : [];
        this.dmgPeople = dmgP || 0;
        this.reasonOfAcc = rsnOfAcc || '';
        this.accAltitude = accAlt || 0;
        this.airlineName = aLineName || '';
    }
    CivAviaAcc.prototype = Object.create(AviaAccident.prototype);
    CivAviaAcc.prototype.constructor = CivAviaAcc;

    CivAviaAcc.prototype.toString = function() {
        return AviaAccident.prototype.toString.call(this) + `\nName of the Airline: ${this.airlineName}`;
    }

    CivAviaAcc.prototype.hasInfo = function(str) {
        return AviaAccident.prototype.hasInfo.call(this, str) || str === this.airlineName;
    }

    window.MilAviaAcc = function(accD, transL, dmgP, rsnOfAcc, accAlt, terrOfAcc, countryL) {
        this.accDate = accD || '';
        this.transList = (verifyingArray(transL, 'MilAvia')) ? transL : [];
        this.dmgPeople = dmgP || 0;
        this.reasonOfAcc = rsnOfAcc || '';
        this.accAltitude = accAlt || 0;
        this.territoryOfAcc = terrOfAcc || '';
        this.countryList = (verifyingArray(countryL, 'Countries')) ? countryL : [];
    }
    MilAviaAcc.prototype = Object.create(AviaAccident.prototype);
    MilAviaAcc.prototype.constructor = MilAviaAcc;

    MilAviaAcc.prototype.toString = function() {
        return AviaAccident.prototype.toString.call(this) + `\nInformation about territory: ${this.territoryOfAcc}`
        + `\nList of countries involved: ${this.countryList}`;
    }

    MilAviaAcc.prototype.hasInfo = function(str) {
        return AviaAccident.prototype.hasInfo.call(this, str) || str === this.territoryOfAcc || this.countryList.includes(str);
    };
}();