module.exports=function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function s(e){try{u(r.next(e))}catch(e){i(e)}}function a(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(s,a)}u((r=r.apply(e,t||[])).next())})},o=this&&this.__generator||function(e,t){function n(e){return function(t){return r([e,t])}}function r(n){if(o)throw new TypeError("Generator is already executing.");for(;u;)try{if(o=1,i&&(s=i[2&n[0]?"return":n[0]?"throw":"next"])&&!(s=s.call(i,n[1])).done)return s;switch(i=0,s&&(n=[0,s.value]),n[0]){case 0:case 1:s=n;break;case 4:return u.label++,{value:n[1],done:!1};case 5:u.label++,i=n[1],n=[0];continue;case 7:n=u.ops.pop(),u.trys.pop();continue;default:if(s=u.trys,!(s=s.length>0&&s[s.length-1])&&(6===n[0]||2===n[0])){u=0;continue}if(3===n[0]&&(!s||n[1]>s[0]&&n[1]<s[3])){u.label=n[1];break}if(6===n[0]&&u.label<s[1]){u.label=s[1],s=n;break}if(s&&u.label<s[2]){u.label=s[2],u.ops.push(n);break}s[2]&&u.ops.pop(),u.trys.pop();continue}n=t.call(e,u)}catch(e){n=[6,e],i=0}finally{o=s=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var o,i,s,a,u={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return a={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a};Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),s=n(2),a=n(7),u=n(8).connect,c=function(){function e(e,t,n){this.GCI=e,this.options=t,this.privKey=n,this.authenticate(this.privKey)}return e.prototype.authenticate=function(e){this.privKey=e,this.acc=s.EthereumAccount.recoverAccount(e),this.eng=new i.EthEngine(null,a.App.eth,null),this.keystore=this.eng.recoverAccount(this.privKey),this.eng.login(this.keystore)},e.prototype.recoverAccountAndSignMessage=function(e,t){var n=s.EthereumAccount.recoverAccount(e),r=n.signReceiptTendermint(t.payload.sender,t.payload.sellToken,t.payload.buyToken,t.payload.sellAmount,t.payload.buyAmount,t.payload.nonce);return t.payload.v=r.v,t.payload.r=r.r,t.payload.s=r.s,t.payload.signature=r.signature,t.payload.messageHash=r.messageHash,t},e.prototype.refreshState=function(e){return void 0===e&&(e=""),r(this,void 0,void 0,function(){var t,n,r,i;return o(this,function(o){switch(o.label){case 0:return[4,u(this.GCI,this.options)];case 1:return t=o.sent(),n=t.state,r=t.send,[4,n[e]];case 2:return i=o.sent(),this.state=i,[2,i]}})})},e.prototype.send=function(e){return r(this,void 0,void 0,function(){var t,n,r;return o(this,function(o){switch(o.label){case 0:return[4,u(this.GCI,this.options)];case 1:return t=o.sent(),n=t.state,r=t.send,[4,r(e)];case 2:return[2,o.sent()]}})})},e.prototype.deposit=function(e,t){return r(this,void 0,void 0,function(){var n,r,s;return o(this,function(o){switch(o.label){case 0:return n=i.TokenFactory.GetToken(e,this.eng),[4,n.approve(a.App.eth.contractAddress,t)];case 1:return r=o.sent(),[4,n.DepositToken(t)];case 2:return s=o.sent(),[4,this.send({action:"deposit",payload:{nonce:2}})];case 3:return[2,o.sent()]}})})},e.prototype.make=function(e,t,n,s){return r(this,void 0,void 0,function(){var r,a,u,c;return o(this,function(o){return r=i.TokenFactory.GetToken(t,this.eng),a=i.TokenFactory.GetToken(e,this.eng),u={action:"make",payload:{sellToken:a.contractAddress,buyToken:r.contractAddress,sellAmount:n,buyAmount:s,nonce:"1",sender:this.acc.address}},c=this.recoverAccountAndSignMessage(this.privKey,u),[2,this.send(c)]})})},e.prototype.getActiveOrders=function(){return r(this,void 0,void 0,function(){var e;return o(this,function(t){switch(t.label){case 0:return[4,this.refreshState("accounts["+this.acc.address+"]")];case 1:return e=t.sent(),[2,e]}})})},e.prototype.withdraw=function(e){return r(this,void 0,void 0,function(){return o(this,function(e){return[2]})})},e}();t.LightClient=c},function(e,t){e.exports=require("altcoin-ethereum-wallet")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),o=n(4),i=n(5),s=n(6),a=function(){function e(e){this.account=e}return Object.defineProperty(e.prototype,"privateKey",{get:function(){return this.account.privateKey},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"address",{get:function(){return this.account.address},enumerable:!0,configurable:!0}),e.recoverAccountFromSeed=function(t){var n=new r.HDPrivateKey(t),i=n.privateKey.toString();return new e(o.fromPrivate("0x"+i))},e.recoverAccount=function(t){return new e(o.fromPrivate(t))},e.prototype.signReceiptTendermint=function(e,t,n,r,o,i){var s=e+t+n+this.hexValue(r)+this.hexValue(o)+this.hexValue(i),a=this.hashMessage(s);return this.signHash(s,a)},e.prototype.signWithdrawTendermint=function(e,t,n){var r=e+t+this.hexValue(n),o=this.hashMessage(r);return this.signHash(r,o)},e.prototype.signReceipt=function(e,t,n){if("string"!=typeof t)throw new Error("value must be string");var r=e+this.hexValue(t)+this.hexValue(n);return this.sign(r)},e.prototype.hexValue=function(e){return s.asciiToHex(e).replace("0x","")},e.prototype.signHash=function(e,t){var n=o.sign(t,this.privateKey),r=o.decodeSignature(n);return{message:e,messageHash:t,v:r[0],r:r[1],s:r[2],signature:n}},e.prototype.sign=function(e){var t=this.hashMessage(e),n=o.sign(t,this.privateKey),r=o.decodeSignature(n);return{message:e,messageHash:t,v:r[0],r:r[1],s:r[2],signature:n}},e.prototype.hashMessage=function(e){return i.keccak256s(e)},e}();t.EthereumAccount=a},function(e,t){e.exports=require("bitcore-lib")},function(e,t){e.exports=require("eth-lib/lib/account")},function(e,t){e.exports=require("eth-lib/lib/hash")},function(e,t){e.exports=require("web3-utils")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.App={eth:{wshost:"wss://swap.altcoin.io:8550",contractAddress:"0x5f450aa5c15664bd88f31e63d0c40961ff129042",defaultWallet:"0xb483f5a8c6ebA74Dc1bcef9D167E6B86Caa4C773"}}},function(e,t){e.exports=require("lotion")}]);
//# sourceMappingURL=index.js.map