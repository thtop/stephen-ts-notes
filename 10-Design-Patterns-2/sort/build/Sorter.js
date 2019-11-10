"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter = /** @class */ (function () {
    function Sorter(conllection) {
        this.conllection = conllection;
    }
    Sorter.prototype.sort = function () {
        var length = this.conllection.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.conllection.compare(j, j + 1)) {
                    this.conllection.swap(j, j + 1);
                }
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
