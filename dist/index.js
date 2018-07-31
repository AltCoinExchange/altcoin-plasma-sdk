module.exports=function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,r){"use strict";var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(o,s){function i(e){try{c(n.next(e))}catch(e){s(e)}}function a(e){try{c(n.throw(e))}catch(e){s(e)}}function c(e){e.done?o(e.value):new r(function(t){t(e.value)}).then(i,a)}c((n=n.apply(e,t||[])).next())})},o=this&&this.__generator||function(e,t){function r(e){return function(t){return n([e,t])}}function n(r){if(o)throw new TypeError("Generator is already executing.");for(;c;)try{if(o=1,s&&(i=2&r[0]?s.return:r[0]?s.throw||((i=s.return)&&i.call(s),0):s.next)&&!(i=i.call(s,r[1])).done)return i;switch(s=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return c.label++,{value:r[1],done:!1};case 5:c.label++,s=r[1],r=[0];continue;case 7:r=c.ops.pop(),c.trys.pop();continue;default:if(i=c.trys,!(i=i.length>0&&i[i.length-1])&&(6===r[0]||2===r[0])){c=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){c.label=r[1];break}if(6===r[0]&&c.label<i[1]){c.label=i[1],i=r;break}if(i&&c.label<i[2]){c.label=i[2],c.ops.push(r);break}i[2]&&c.ops.pop(),c.trys.pop();continue}r=t.call(e,c)}catch(e){r=[6,e],s=0}finally{o=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}var o,s,i,a,c={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a};Object.defineProperty(t,"__esModule",{value:!0});var s,i=r(2),a=r(7),c=r(1),u=r(16),f=r(17),h=r(18),l=r(1);t.TOKENS=l.TOKENS,t.TokenFactory=l.TokenFactory,t.ERC20=l.ERC20,t.EthEngine=l.EthEngine,t.EthereumWallet=l.EthereumWallet,t.TokenConfig=l.TokenConfig,t.TokenConfigMain=l.TokenConfigMain,t.generateMnemonic=l.generateMnemonic,t.AugurTokenTestnet=l.AugurTokenTestnet,t.AugurTokenMainnet=l.AugurTokenMainnet,t.TokenMapping=(s={},s[c.TokenConfig.Augur.contractAddress.toLowerCase()]=c.TOKENS.AUGUR,s[c.TokenConfig.Golem.contractAddress.toLowerCase()]=c.TOKENS.GOLEM,s[c.TokenConfig.Gnosis.contractAddress.toLowerCase()]=c.TOKENS.GNOSIS,s[c.TokenConfig.Bat.contractAddress.toLowerCase()]=c.TOKENS.BAT,s[c.TokenConfig.Aragon.contractAddress.toLowerCase()]=c.TOKENS.ARAGON,s[c.TokenConfig.Eos.contractAddress.toLowerCase()]=c.TOKENS.EOS,s[c.TokenConfig.Salt.contractAddress.toLowerCase()]=c.TOKENS.SALT,s[c.TokenConfig.Civic.contractAddress.toLowerCase()]=c.TOKENS.CIVIC,s[c.TokenConfig.OmiseGo.contractAddress.toLowerCase()]=c.TOKENS.OMISEGO,s[c.TokenConfig.District0x.contractAddress.toLowerCase()]=c.TOKENS.DISTRICT0X,s[c.TokenConfig.StatusNetwork.contractAddress.toLowerCase()]=c.TOKENS.STATUSNETWORK,s[c.TokenConfig.Substratum.contractAddress.toLowerCase()]=c.TOKENS.SUBSTRATUM,s[c.TokenConfig.Tron.contractAddress.toLowerCase()]=c.TOKENS.TRON,s[c.TokenConfig.Bytom.contractAddress.toLowerCase()]=c.TOKENS.BYTOM,s[c.TokenConfig.Dent.contractAddress.toLowerCase()]=c.TOKENS.DENT,s[c.TokenConfig.Populous.contractAddress.toLowerCase()]=c.TOKENS.POPULOUS,s[c.TokenConfig.Maker.contractAddress.toLowerCase()]=c.TOKENS.MAKER,s[c.TokenConfig.DigixDAO.contractAddress.toLowerCase()]=c.TOKENS.DIGIXDAO,s[c.TokenConfig.QASH.contractAddress.toLowerCase()]=c.TOKENS.QASH,s[c.TokenConfig.Ethos.contractAddress.toLowerCase()]=c.TOKENS.ETHOS,s[c.TokenConfig.FunFair.contractAddress.toLowerCase()]=c.TOKENS.FUNFAIR,s[c.TokenConfig.RequestNetwork.contractAddress.toLowerCase()]=c.TOKENS.REQUESTNETWORK,s[c.TokenConfig.Bancor.contractAddress.toLowerCase()]=c.TOKENS.BANCOR,s[c.TokenConfig.Iconomi.contractAddress.toLowerCase()]=c.TOKENS.ICONOMI,s[c.TokenConfig.TenXPay.contractAddress.toLowerCase()]=c.TOKENS.TENXPAY,s[c.TokenConfig.Storj.contractAddress.toLowerCase()]=c.TOKENS.STORJ,s[c.TokenConfig.EnjinCoin.contractAddress.toLowerCase()]=c.TOKENS.ENJINCOIN,s[c.TokenConfig.WETH.contractAddress.toLowerCase()]=c.TOKENS.WETH,s[c.TokenConfig.ZeroX.contractAddress.toLowerCase()]=c.TOKENS.ZEROX,s),t.TokenMappingReverse=function(){var e={};for(var r in t.TokenMapping)t.TokenMapping.hasOwnProperty(r)&&(e[t.TokenMapping[r]]=r);return e};var p=function(){function e(e,t,r,n){this.GCI=e,this.options=t,this.privKey=r,this.ethConfig=n,this.ulotion=new a.uLotion(this.GCI,this.options),n||(this.ethConfig=u.App.eth)}return e.prototype.authenticate=function(e){this.privKey=e,this.acc=i.EthereumAccount.recoverAccount(e),this.eng=new c.EthEngine(null,this.ethConfig,null),this.keystore=this.eng.recoverAccount(this.privKey),this.eng.login(this.keystore)},e.prototype.recoverAccountAndSignOrder=function(e,t){var r=i.EthereumAccount.recoverAccount(e),n=r.signReceiptTendermint(t.payload.sender,t.payload.sellToken,t.payload.buyToken,t.payload.sellAmount,t.payload.buyAmount,t.payload.nonce);return t.payload.v=n.v,t.payload.r=n.r,t.payload.s=n.s,t.payload.signature=n.signature,t.payload.messageHash=n.messageHash,t},e.prototype.recoverAccountAndSignWithdraw=function(e,t,r){var n=i.EthereumAccount.recoverAccount(e),o={},s=n.signWithdrawTendermint(n.address,t,r);return o.v=s.v,o.r=s.r,o.s=s.s,o.signature=s.signature,o.messageHash=s.messageHash,o.sender=n.address,o.token=t,o.amount=r.toString(),o},e.prototype.refreshState=function(e){return void 0===e&&(e=""),n(this,void 0,void 0,function(){var t,r,n,r,n;return o(this,function(o){switch(o.label){case 0:return[4,this.ulotion.state(e)];case 1:if(t=o.sent(),""===e){f.StateHelper.mapAddressToEnum(t,"volume");for(r in t.accounts)if(t.accounts.hasOwnProperty(r))for(n in t.accounts[r].balance)f.StateHelper.mapAddressToEnum(t.accounts[r],"balance")}else if("volume"===e)f.StateHelper.mapAddressToEnum(t);else if("accounts"===e)for(r in t)if(t.hasOwnProperty(r))for(n in t[r].balance)f.StateHelper.mapAddressToEnum(t[r],"balance");return"string"==typeof t&&(t=JSON.parse(t)),[2,t]}})})},e.prototype.send=function(e){return n(this,void 0,void 0,function(){var t;return o(this,function(r){switch(r.label){case 0:return[4,this.ulotion.send(e)];case 1:return t=r.sent(),[2,t]}})})},e.prototype.faucet=function(e){return n(this,void 0,void 0,function(){var t;return o(this,function(r){switch(r.label){case 0:return this.authenticate(this.privKey),t=c.TokenFactory.GetToken(e,this.eng),[4,t.faucet()];case 1:return[2,r.sent()]}})})},e.prototype.deposit=function(e,t){return n(this,void 0,void 0,function(){var r,n,s,i;return o(this,function(o){switch(o.label){case 0:return this.authenticate(this.privKey),r=c.TokenFactory.GetToken(e,this.eng),[4,r.approve(this.ethConfig.contractAddress,t)];case 1:return n=o.sent(),[4,r.DepositToken(t)];case 2:return s=o.sent(),[4,r.currentDepositNonce()];case 3:return i=o.sent(),[4,this.send({action:"deposit",payload:{nonce:i}})];case 4:return[2,o.sent()]}})})},e.prototype.make=function(e,t,r,s){return n(this,void 0,void 0,function(){var n,i,a,u,f,h;return o(this,function(o){switch(o.label){case 0:return this.authenticate(this.privKey),n=c.TokenFactory.GetToken(t,this.eng),i=c.TokenFactory.GetToken(e,this.eng),[4,this.refreshState()];case 1:a=o.sent(),u=null;try{u=a.nonce[i.contractAddress.toLowerCase()][this.acc.address.toLowerCase()]}catch(e){u=1}return f={action:"make",payload:{sellToken:i.contractAddress,buyToken:n.contractAddress,sellAmount:r,buyAmount:s,nonce:u,sender:this.acc.address}},h=this.recoverAccountAndSignOrder(this.privKey,f),[4,this.send(h)];case 2:return[2,o.sent()]}})})},e.prototype.getActiveOrders=function(e,r,s){return void 0===e&&(e=!1),n(this,void 0,void 0,function(){var n,i,a;return o(this,function(o){switch(o.label){case 0:return this.authenticate(this.privKey),n=this.acc.address.toLowerCase(),i=null,a="orders['"+n+"']",e&&(r||s)?a="$..orders..":e&&(a="$..orders"),r||s?[3,2]:[4,this.refreshState(a)];case 1:return i=o.sent(),i&&i.length>0&&(i=i[0]),[3,8];case 2:return s&&r?[4,this.refreshState(a+"[?(@.buyToken=='"+t.TokenMappingReverse()[s]+"' %26%26 @.sellToken=='"+t.TokenMappingReverse()[r]+"')]")]:[3,4];case 3:return i=o.sent(),[3,8];case 4:return r?[4,this.refreshState(a+"[?(@.sellToken=='"+t.TokenMappingReverse()[r]+"')]")]:[3,6];case 5:return i=o.sent(),[3,8];case 6:return s?[4,this.refreshState(a+"[?(@.buyToken=='"+t.TokenMappingReverse()[s]+"')]")]:[3,8];case 7:i=o.sent(),o.label=8;case 8:return[2,i]}})})},e.prototype.withdraw=function(e,t,r){return void 0===r&&(r=!1),n(this,void 0,void 0,function(){var n,s,i,a,u;return o(this,function(o){switch(o.label){case 0:return this.authenticate(this.privKey),n=c.TokenFactory.GetToken(e,this.eng),s=this.recoverAccountAndSignWithdraw(this.privKey,n.contractAddress,t),r?[3,2]:[4,this.send({action:"withdraw",payload:s})];case 1:i=o.sent(),o.label=2;case 2:return[4,this.refreshState("accounts['"+this.acc.address.toLowerCase()+"'].lastSignedWithdraw")];case 3:return a=o.sent(),a&&a.length>0&&(a=a[0]),[4,n.withdraw(a.sender,a.amount,a.nonce,a.v,a.r,a.s)];case 4:return u=o.sent(),console.log("Confirmation",u),[2,u]}})})},e.prototype.subscribe=function(e,t){return n(this,void 0,void 0,function(){var r,s,i,a,c=this;return o(this,function(u){switch(u.label){case 0:return[4,this.refreshState(e)];case 1:return r=u.sent(),this.stateWatcher=new h.StateMergePatch(r,e),s=this,i=function(){return n(c,void 0,void 0,function(){var e;return o(this,function(r){switch(r.label){case 0:return[4,s.stateWatcher.diff(s)];case 1:return e=r.sent(),t(e),[2,e]}})})},[4,this.ulotion.subscribeTx(i)];case 2:return a=u.sent(),[2,i]}})})},e}();t.LightClient=p},function(e,t){e.exports=require("altcoin-ethereum-wallet")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(3),o=r(4),s=r(5),i=r(6),a=function(){function e(e){this.account=e}return Object.defineProperty(e.prototype,"privateKey",{get:function(){return this.account.privateKey},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"address",{get:function(){return this.account.address},enumerable:!0,configurable:!0}),e.recoverAccountFromSeed=function(e){var t=new i.fromMasterSeed(e),r=t.derive("m/44'/60'/0'/0/0"),o=r._privateKey.toString("hex");return n.accounts.privateKeyToAccount("0x"+o)},e.recoverAccount=function(t){return new e(n.fromPrivate("0x"+t))},e.prototype.signReceiptTendermint=function(e,t,r,n,o,s){var i=e+t+r+this.hexValue(n)+this.hexValue(o)+this.hexValue(s),a=this.hashMessage(i);return this.signHash(i,a)},e.prototype.signWithdrawTendermint=function(e,t,r){var n=e+t+this.hexValue(r),o=this.hashMessage(n);return this.signHash(n,o)},e.prototype.signReceipt=function(e,t,r){if("string"!=typeof t)throw new Error("value must be string");var n=e+this.hexValue(t)+this.hexValue(r);return this.sign(n)},e.prototype.hexValue=function(e){return s.asciiToHex(e).replace("0x","")},e.prototype.signHash=function(e,t){var r=n.sign(t,this.privateKey),o=n.decodeSignature(r);return{message:e,messageHash:t,v:o[0],r:o[1],s:o[2],signature:r}},e.prototype.sign=function(e){var t=this.hashMessage(e),r=n.sign(t,this.privateKey),o=n.decodeSignature(r);return{message:e,messageHash:t,v:o[0],r:o[1],s:o[2],signature:r}},e.prototype.hashMessage=function(e){return o.keccak256s(e)},e}();t.EthereumAccount=a},function(e,t){e.exports=require("eth-lib/lib/account")},function(e,t){e.exports=require("eth-lib/lib/hash")},function(e,t){e.exports=require("web3-utils")},function(e,t){e.exports=require("hdkey")},function(e,t,r){"use strict";var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(o,s){function i(e){try{c(n.next(e))}catch(e){s(e)}}function a(e){try{c(n.throw(e))}catch(e){s(e)}}function c(e){e.done?o(e.value):new r(function(t){t(e.value)}).then(i,a)}c((n=n.apply(e,t||[])).next())})},o=this&&this.__generator||function(e,t){function r(e){return function(t){return n([e,t])}}function n(r){if(o)throw new TypeError("Generator is already executing.");for(;c;)try{if(o=1,s&&(i=2&r[0]?s.return:r[0]?s.throw||((i=s.return)&&i.call(s),0):s.next)&&!(i=i.call(s,r[1])).done)return i;switch(s=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return c.label++,{value:r[1],done:!1};case 5:c.label++,s=r[1],r=[0];continue;case 7:r=c.ops.pop(),c.trys.pop();continue;default:if(i=c.trys,!(i=i.length>0&&i[i.length-1])&&(6===r[0]||2===r[0])){c=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){c.label=r[1];break}if(6===r[0]&&c.label<i[1]){c.label=i[1],i=r;break}if(i&&c.label<i[2]){c.label=i[2],c.ops.push(r);break}i[2]&&c.ops.pop(),c.trys.pop();continue}r=t.call(e,c)}catch(e){r=[6,e],s=0}finally{o=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}var o,s,i,a,c={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a};Object.defineProperty(t,"__esModule",{value:!0});var s=r(8),i=r(15),a=function(){function e(e,t){if(this.GCI=e,this.options=t,this.nodes=[],this.nodes=t.nodes,!e&&(void 0===this.nodes||0===this.nodes.length))throw Error("Nodes not set")}return e.prototype.getGenesisActivePeer=function(){return n(this,void 0,void 0,function(){var e,t;return o(this,function(r){switch(r.label){case 0:return this.GCI?[4,s.ulotionHelper.fetchGenesis(this.GCI)]:[3,2];case 1:return t=r.sent(),e="http://"+t.peer.host+":"+this.options.tendermintPort,[3,3];case 2:e=this.nodes[0],r.label=3;case 3:return[2,e]}})})},e.prototype.state=function(e){return void 0===e&&(e=""),n(this,void 0,void 0,function(){var t,r,n,s;return o(this,function(o){switch(o.label){case 0:return[4,this.getGenesisActivePeer()];case 1:return t=o.sent(),[4,i.get(t+'/abci_query?path="'+e+'"')];case 2:if(r=o.sent(),r.data.error&&!r.data.result)throw new Error(JSON.stringify(r.data.error));n=r.data.result.response,n.height=Number(n.height),s=null;try{s=JSON.parse(Buffer.from(n.value,"base64").toString())}catch(e){throw new Error("invalid json in query response")}return[2,s]}})})},e.prototype.send=function(e){return n(this,void 0,void 0,function(){var t,r,n;return o(this,function(o){switch(o.label){case 0:return[4,this.getGenesisActivePeer()];case 1:return t=o.sent(),r="0x"+Buffer.from(JSON.stringify(e)).toString("hex"),[4,i.get(t.replace("ws:","http:")+"/broadcast_tx_commit",{params:{tx:r}})];case 2:return n=o.sent(),[2,n.data.result]}})})},e.prototype.subscribeTx=function(e){return n(this,void 0,void 0,function(){var e;return o(this,function(t){switch(t.label){case 0:return[4,this.getGenesisActivePeer()];case 1:return e=t.sent().replace("http:","ws:"),console.log(e),[2]}})})},e}();t.uLotion=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(9),o=r(10),s=r(11),i=r(12),a=r(13),c=a([{name:"data",type:a.VarString(a.UInt32BE)},{name:"nonce",type:a.UInt32BE}]),u=function(){function e(){}return e.convertBase64ToBuffers=function(t){return e.replace(t,e.bufferToBase64Replacer)},e.base64ToBufferReplacer=function(e){return"string"!=typeof e?e:e.startsWith(":base64:")?Buffer.from(e.slice(":base64:".length),"base64"):e},e.encode=function(t,r){var n=e.stringify(t);return c.encode({nonce:r,data:n})},e.fetchGenesis=function(e){return new Promise(function(t,n){var o,a=s(e,["https://swap.altcoin.io:9091"]);o="object"==typeof process&&process+""=="[object process]"?i(a,{wrtc:r(14)}):i(a,{}),o.on("peer",function(e,r){e.on("data",function(r){var n=Number(r.toString());n>100&&n<65536&&(e.destroy(),t({peer:{host:e.remoteAddress,port:n}}))})})})},e.hash=function(t){var r=n.createHash("sha256"),o=e.stringify(t);return r.update(o,"utf8").digest().toString("hex")},e.parse=function(t){var r=JSON.parse(t);return e.convertBase64ToBuffers(r)},e.getGCIFromGenesis=function(t){var r=n.createHash("sha256"),o=e.parse(t);o.genesis_time="";var s=e.stringify(o);return r.update(s,"utf8").digest().toString("hex")},e.deepClone=function(e,t){var r=Array.isArray(e)?[]:{};Object.assign(r,e);for(var n in r)r[n]=t(r[n]),"object"==typeof r[n]&&(r[n]=this.deepClone(r[n],t));return r},e.replace=function(t,r){for(var n in t)t[n]=r(t[n]),"object"!=typeof t[n]||Buffer.isBuffer(t[n])||e.replace(t[n],r);return t},e.stringify=function(t){var r=e.deepClone(t,e.bufferToBase64Replacer);return o(r)},e.bufferToBase64Replacer=function(e){return"object"==typeof e&&null!=e&&"Buffer"===e.type&&Array.isArray(e.data)&&(e=Buffer.from(e)),Buffer.isBuffer(e)?":base64:"+e.toString("base64"):e},e}();t.ulotionHelper=u},function(e,t){e.exports=require("crypto-browserify")},function(e,t){e.exports=require("json-stable-stringify")},function(e,t){e.exports=require("signalhub")},function(e,t){e.exports=require("webrtc-swarm")},function(e,t){e.exports=require("varstruct")},function(e,t){e.exports=require("wrtc")},function(e,t){e.exports=require("axios")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.App={eth:{wshost:"wss://swap.altcoin.io:8550",contractAddress:"0xCe11e94E26D6fcB837F3E8a61C7c2e03523f4958",defaultWallet:"0xb483f5a8c6ebA74Dc1bcef9D167E6B86Caa4C773"}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=function(){function e(){}return e.mapAddressToEnum=function(e,t){if(t)for(var r in e[t])e[t].hasOwnProperty(r)&&(e[t][n.TokenMapping[r.toLowerCase()]]=e[t][r],delete e[t][r]);else for(var o in e)if(e.hasOwnProperty(o))for(var r in e[o])e[o].hasOwnProperty(r)&&(e[o][n.TokenMapping[r.toLowerCase()]]=e[o][r],delete e[o][r])},e}();t.StateHelper=o},function(e,t,r){"use strict";var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(o,s){function i(e){try{c(n.next(e))}catch(e){s(e)}}function a(e){try{c(n.throw(e))}catch(e){s(e)}}function c(e){e.done?o(e.value):new r(function(t){t(e.value)}).then(i,a)}c((n=n.apply(e,t||[])).next())})},o=this&&this.__generator||function(e,t){function r(e){return function(t){return n([e,t])}}function n(r){if(o)throw new TypeError("Generator is already executing.");for(;c;)try{if(o=1,s&&(i=2&r[0]?s.return:r[0]?s.throw||((i=s.return)&&i.call(s),0):s.next)&&!(i=i.call(s,r[1])).done)return i;switch(s=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return c.label++,{value:r[1],done:!1};case 5:c.label++,s=r[1],r=[0];continue;case 7:r=c.ops.pop(),c.trys.pop();continue;default:if(i=c.trys,!(i=i.length>0&&i[i.length-1])&&(6===r[0]||2===r[0])){c=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){c.label=r[1];break}if(6===r[0]&&c.label<i[1]){c.label=i[1],i=r;break}if(i&&c.label<i[2]){c.label=i[2],c.ops.push(r);break}i[2]&&c.ops.pop(),c.trys.pop();continue}r=t.call(e,c)}catch(e){r=[6,e],s=0}finally{o=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}var o,s,i,a,c={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a};Object.defineProperty(t,"__esModule",{value:!0});var s=r(19),i=function(){function e(e,t){this.path=t,this.dp=new s.DiffPatcher,this.state=this.dp.clone(e)}return e.prototype.diff=function(t){return n(this,void 0,void 0,function(){var r,n;return o(this,function(o){switch(o.label){case 0:return[4,t.refreshState(this.path)];case 1:return r=o.sent(),n=this.dp.diff(this.state,r),this.state=r,[2,e.patchToMergePatch(n)]}})})},e.isNumeric=function(e){return!e.toLowerCase().startsWith("0x")&&(!isNaN(parseFloat(e))&&isFinite(e))},e.isChildArray=function(t){for(var r in t)return e.isNumeric(r)},e.toObjType=function(t){return e.isChildArray(t)?[]:{}},e.handleValue=function(e){if(Array.isArray(e))return e.length>1?e[1]:e[0]},e.handleObj=function(t,r,n){if(Array.isArray(r))return void(n[t]=e.handleValue(r));var o=e.toObjType(r);Array.isArray(n)?n.push(o):n[t]=o,e.patchToMergePatch(r,o)},e.patchToMergePatch=function(t,r){for(var n in t)e.isNumeric(n)?(void 0===r&&(r=[]),"string"==typeof t[n]?r.push(t[n]):"object"==typeof t[n]?this.handleObj(n,t[n],r):Array.isArray(t[n])&&r.push(e.handleValue(t[n]))):(void 0===r&&(r=e.toObjType(t[n])),"string"==typeof t[n]?r[n]=t[n]:"object"==typeof t[n]?this.handleObj(n,t[n],r):Array.isArray(t[n])&&(r[n]=e.handleValue(t[n])));return r},e}();t.StateMergePatch=i},function(e,t){e.exports=require("jsondiffpatch")}]);
//# sourceMappingURL=index.js.map