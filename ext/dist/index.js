(()=>{"use strict";({607:function(e,t){var n=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(o,c){function a(e){try{s(i.next(e))}catch(e){c(e)}}function l(e){try{s(i.throw(e))}catch(e){c(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,l)}s((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),window.globalThis.Biometrics=class{static call(){chrome.runtime.sendNativeMessage("me.dolphin2410.chrome_native",{task:"HelloTask",message:"Loolo"},(e=>{console.log("Received: "+JSON.stringify(e))}))}};let i=document.getElementById("communication");null==i||i.addEventListener("click",(()=>n(void 0,void 0,void 0,(function*(){Biometrics.call()}))))}})[607](0,{})})();