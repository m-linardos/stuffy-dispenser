"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Stuffy = /** @class */ (function () {
    function Stuffy(i, t, c, s, l) {
        if (i === void 0) { i = 0; }
        if (t === void 0) { t = ""; }
        if (c === void 0) { c = ""; }
        if (s === void 0) { s = ""; }
        if (l === void 0) { l = 0; }
        this.id = i; //shorter names to save space
        this.type = t;
        this.color = c;
        this.size = s;
        this.limbs = l;
    }
    Stuffy.prototype.about = function () {
        return 'Stuffy: id=' + this.id
            + ' type=' + this.type + ', color=' + this.color + ', size=' + this.size + ', limbs=' + this.limbs;
    };
    return Stuffy;
}());
exports.Stuffy = Stuffy;
