!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).vdp_translation_index={})}(this,function(e){"use strict";function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var n=function(){function e(t,n,r,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.language=t,this.months=n,this.monthsAbbr=r,this.days=a,this.rtl=!1,this.ymd=!1,this.yearSuffix=""}var n,r,a;return n=e,(r=[{key:"language",get:function(){return this._language},set:function(e){if("string"!=typeof e)throw new TypeError("Language must be a string");this._language=e}},{key:"months",get:function(){return this._months},set:function(e){if(12!==e.length)throw new RangeError("There must be 12 months for ".concat(this.language," language"));this._months=e}},{key:"monthsAbbr",get:function(){return this._monthsAbbr},set:function(e){if(12!==e.length)throw new RangeError("There must be 12 abbreviated months for ".concat(this.language," language"));this._monthsAbbr=e}},{key:"days",get:function(){return this._days},set:function(e){if(7!==e.length)throw new RangeError("There must be 7 days for ".concat(this.language," language"));this._days=e}}])&&t(n.prototype,r),a&&t(n,a),e}(),r=new n("English",["January","February","March","April","May","June","July","August","September","October","November","December"],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]),a=new n("Dutch",["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"],["jan","feb","mrt","apr","mei","jun","jul","aug","sep","okt","nov","dec"],["zo","ma","di","wo","do","vr","za"]);e.en=r,e.nl=a,Object.defineProperty(e,"__esModule",{value:!0})});
