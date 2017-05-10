!function() {
    function transJSON(that) {
        return `Accident involving ${verifyingArray(that.transList, that.type)} happened on ${that.accDate}:\n`
        + `Reason: ${that.reasonOfAcc}\n`
        + `Total people damaged: ${that.dmgPeople}`;
    }; // === this.prototype.toString();

    function aviaJSON(that) {
        return transJSON(that) + `\nAltitude of accident: ${that.accAltitude}`;
    }; // === this.prototype.toString();

    function checkInfo(str, that) {
        return str === that.accDate || that.transList.includes(str) || str === that.reasonOfAcc;
    };

    function validationCheck(a) {
        var b;
        for (var i = 0; i < a.length; i++) {
            if (typeof a[i] === 'string') {
                b = true;
            } else {
                b = false;
                break;
              }
        }
        return b;
    };

    function verifyingArray(a, accidentType) {
        var t = true, validArray, z;
        switch(accidentType) {
            case 'Avia':
            validArray = ['Boeing 747', 'A320 Airbus', 'A319 Airbus'];
            break;
            case 'civAvia':
            validArray = ['Boeing 737', 'A320 Airbus', 'A319 Airbus'];
            break;
            case 'milAvia':
            validArray = ['MiG 29', 'Bell 206', 'Boeing AH-64 Apache'];
            break;
            case 'countries':
            validArray = ['Armenia', 'Turkey', 'Russia'];
            break;
            default:
            validArray = ['Ferrari','Maybach', 'McLaren'];
        };
            if(validationCheck(a)) {
                for (var i = 0; i < a.length; i++) {
                    if (!validArray.includes(a[i])) {
                        t = false;
                        break;
                    }
                }; 
                if (!t) {
                    throw 'ERROR! Your transportation is invalid.';
                }
            } else {
                throw 'ERROR! Please enter strings.';
            }
                return a;
    };

    window.transAccident = {
        accDate: '',
        transList: [],
        dmgPeople: 0,
        reasonOfAcc: '',
        type: 'Trans',
        toString: function() {
            return transJSON(this);
    },

        hasInfo: function(str) {
            return checkInfo(str, this);
        }
    };

    window.aviaAccident = Object.create(transAccident);
        aviaAccident.accAltitude = 0;
        aviaAccident.type = 'Avia';
        aviaAccident.toString = function() {
            return aviaJSON(this);
        };
        aviaAccident.hasInfo = function(str) {
            return checkInfo(str, this);
        }

    window.civAviaAcc = Object.create(aviaAccident);
        civAviaAcc.airlineName = '';
        civAviaAcc.type = 'civAvia';
        civAviaAcc.toString = function() {
            return aviaJSON(this) + `\nName of the Airline: ${this.airlineName}`;
        };
        civAviaAcc.hasInfo = function(str) {
            return checkInfo(str, this) || str === this.airlineName;
        }

    window.milAviaAcc = Object.create(aviaAccident);
        milAviaAcc.territoryOfAcc = '';
        milAviaAcc.type = 'milAvia';
        milAviaAcc.countryList = [];
        milAviaAcc.countryListType = 'countries';
        milAviaAcc.toString = function() {
            return aviaJSON(this) + `\nInformation about territory: ${this.territoryOfAcc}`
            + `\nList of countries involved: ${verifyingArray(this.countryList, this.countryListType)}`;
        };
        milAviaAcc.hasInfo = function(str) {
            return checkInfo(str, this) || str === this.territoryOfAcc || this.countryList.includes(str);
        }
}();
