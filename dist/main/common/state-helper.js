"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var main_1 = require("../main");
var StateHelper = /** @class */ (function () {
    function StateHelper() {
    }
    /**
     * Map address to enum
     * @param obj
     * @param prop
     */
    StateHelper.mapAddressToEnum = function (obj, prop) {
        if (prop) {
            for (var i in obj[prop]) {
                if (obj[prop].hasOwnProperty(i)) {
                    obj[prop][main_1.TokenMapping[i.toLowerCase()]] = obj[prop][i];
                    delete obj[prop][i];
                }
            }
        }
        else {
            for (var arr in obj) {
                if (obj.hasOwnProperty(arr)) {
                    for (var i in obj[arr]) {
                        if (obj[arr].hasOwnProperty(i)) {
                            obj[arr][main_1.TokenMapping[i.toLowerCase()]] = obj[arr][i];
                            delete obj[arr][i];
                        }
                    }
                }
            }
        }
    };
    return StateHelper;
}());
exports.StateHelper = StateHelper;
//# sourceMappingURL=state-helper.js.map