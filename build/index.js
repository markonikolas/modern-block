!function(){"use strict";var e,r={227:function(){var e=window.wp.blocks,r=window.wp.element,n=window.wp.i18n,o=window.wp.blockEditor,t=JSON.parse('{"u2":"create-block/modern-block"}');(0,e.registerBlockType)(t.u2,{edit:function(){return(0,r.createElement)("p",(0,o.useBlockProps)(),(0,n.__)("Modern Block – hello from the editor!","modern-block"))},save:function(){return(0,r.createElement)("p",o.useBlockProps.save(),"Modern Block – hello from the saved content!")}})}},n={};function o(e){var t=n[e];if(void 0!==t)return t.exports;var c=n[e]={exports:{}};return r[e](c,c.exports,o),c.exports}o.m=r,e=[],o.O=function(r,n,t,c){if(!n){var i=1/0;for(a=0;a<e.length;a++){n=e[a][0],t=e[a][1],c=e[a][2];for(var u=!0,l=0;l<n.length;l++)(!1&c||i>=c)&&Object.keys(o.O).every((function(e){return o.O[e](n[l])}))?n.splice(l--,1):(u=!1,c<i&&(i=c));if(u){e.splice(a--,1);var f=t();void 0!==f&&(r=f)}}return r}c=c||0;for(var a=e.length;a>0&&e[a-1][2]>c;a--)e[a]=e[a-1];e[a]=[n,t,c]},o.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},function(){var e={826:0,431:0};o.O.j=function(r){return 0===e[r]};var r=function(r,n){var t,c,i=n[0],u=n[1],l=n[2],f=0;if(i.some((function(r){return 0!==e[r]}))){for(t in u)o.o(u,t)&&(o.m[t]=u[t]);if(l)var a=l(o)}for(r&&r(n);f<i.length;f++)c=i[f],o.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return o.O(a)},n=self.webpackChunkmodern_block=self.webpackChunkmodern_block||[];n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n))}();var t=o.O(void 0,[431],(function(){return o(227)}));t=o.O(t)}();