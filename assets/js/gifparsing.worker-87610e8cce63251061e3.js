!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/custom-hubs-template/",r(r.s=0)}([function(e,t){self.onmessage=e=>{try{const t=function(e){let t=0;const r=[];let n=null;const o=[],a=[];let s=0;if(71!==e[0]||73!==e[1]||70!==e[2]||56!==e[3]||57!==e[4]||97!==e[5])throw new Error("parseGIF: no GIF89a");{t+=+!!(128&e[10])*Math.pow(2,1+(7&e[10]))*3+13;const u=e.subarray(0,t);for(;e[t]&&59!==e[t];){const l=t,f=e[t];if(33===f){const o=e[++t];if(-1===[1,254,249,255].indexOf(o))throw new Error("parseGIF: unknown label");for(249===o&&r.push(10*(e[t+3]+(e[t+4]<<8))),255===o&&(s=e[t+15]+(e[t+16]<<8));e[++t];)t+=e[t];249===o&&(n=e.subarray(l,t+1),a.push(n[3]>>2&7))}else{if(44!==f)throw new Error("parseGIF: unknown blockId");{for(t+=9,t+=+!!(128&e[t])*(3*Math.pow(2,1+(7&e[t])))+1;e[++t];)t+=e[t];const r=e.subarray(l,t+1);o.push(URL.createObjectURL(new Blob([u,n,r])))}}t++}}return{delayTimes:r,loopCnt:s,frames:o,disposals:a}}(new Uint8Array(e.data.payload));self.postMessage({id:e.data.id,result:t})}catch(t){self.postMessage({id:e.data.id,err:t.message})}}}]);
//# sourceMappingURL=gifparsing.worker-87610e8cce63251061e3.js.map