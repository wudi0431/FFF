define(["language"],function(e){function n(){this.__events__={}}var t=e.language;return n.prototype.trigger=function(e,n){if(this.__events__.hasOwnProperty(e)){var r=this.__events__[e];t.type(n)!="array"&&(n=[n]),r.forEach(function(e){e.handler.apply(e.scope,n)})}return this},n.prototype.on=function(e,t,n){return this.__events__.hasOwnProperty(e)?this.__events__[e].push({handler:t,scope:n||this}):this.__events__[e]=[{handler:t,scope:n||this}],this},n.prototype.off=function(e){return this.__events__.hasOwnProperty(e)&&delete this.__events__[e],this},n.prototype.offLink=function(e){var t=this.__events__;return Object.keys(t).forEach(function(n){t[n].forEach(function(r,i){r.scope===e&&t[n].splice(i,1)})}),this},n.prototype.offAll=function(){return this.__events__={},this},{EventEmitter:n}});