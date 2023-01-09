/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},ne=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const a=t[n++];e[s++]=String.fromCharCode((r&31)<<6|a&63)}else if(r>239&&r<365){const a=t[n++],o=t[n++],c=t[n++],i=((r&7)<<18|(a&63)<<12|(o&63)<<6|c&63)-65536;e[s++]=String.fromCharCode(55296+(i>>10)),e[s++]=String.fromCharCode(56320+(i&1023))}else{const a=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(a&63)<<6|o&63)}}return e.join("")},J={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const a=t[r],o=r+1<t.length,c=o?t[r+1]:0,i=r+2<t.length,h=i?t[r+2]:0,P=a>>2,g=(a&3)<<4|c>>4;let E=(c&15)<<2|h>>6,y=h&63;i||(y=64,o||(E=64)),s.push(n[P],n[g],n[E],n[y])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(G(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ne(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const a=n[t.charAt(r++)],c=r<t.length?n[t.charAt(r)]:0;++r;const h=r<t.length?n[t.charAt(r)]:64;++r;const g=r<t.length?n[t.charAt(r)]:64;if(++r,a==null||c==null||h==null||g==null)throw Error();const E=a<<2|c>>4;if(s.push(E),h!==64){const y=c<<4&240|h>>2;if(s.push(y),g!==64){const te=h<<6&192|g;s.push(te)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},re=function(t){const e=G(t);return J.encodeByteArray(e,!0)},I=function(t){return re(t).replace(/\./g,"")},se=function(t){try{return J.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Ct(){try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ae(){try{return typeof indexedDB=="object"}catch{return!1}}function oe(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var a;e(((a=r.error)===null||a===void 0?void 0:a.message)||"")}}catch(n){e(n)}})}function ie(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ce=()=>ie().__FIREBASE_DEFAULTS__,le=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},he=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&se(t[1]);return e&&JSON.parse(e)},K=()=>{try{return ce()||le()||he()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},de=t=>{var e,n;return(n=(e=K())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},At=t=>{const e=de(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},fe=()=>{var t;return(t=K())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,a=t.sub||t.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},t),c="";return[I(JSON.stringify(n)),I(JSON.stringify(o)),c].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pe="FirebaseError";class _ extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=pe,Object.setPrototypeOf(this,_.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Y.prototype.create)}}class Y{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,a=this.errors[e],o=a?me(a,s):"Error",c=`${this.serviceName}: ${o} (${r}).`;return new _(r,c,s)}}function me(t,e){return t.replace(ge,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const ge=/\{\$([^}]+)}/g;function T(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const a=t[r],o=e[r];if(x(a)&&x(o)){if(!T(a,o))return!1}else if(a!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function x(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(t){return t&&t._delegate?t._delegate:t}class D{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new ue;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(a){if(r)return null;throw a}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ee(e))try{this.getOrInitializeService({instanceIdentifier:u})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const a=this.getOrInitializeService({instanceIdentifier:r});s.resolve(a)}catch{}}}}clearInstance(e=u){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=u){return this.instances.has(e)}getOptions(e=u){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[a,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(a);s===c&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),a=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;a.add(e),this.onInitCallbacks.set(r,a);const o=this.instances.get(r);return o&&e(o,r),()=>{a.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:_e(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=u){return this.component?this.component.multipleInstances?e:u:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _e(t){return t===u?void 0:t}function Ee(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new be(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R=[];var l;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(l||(l={}));const X={debug:l.DEBUG,verbose:l.VERBOSE,info:l.INFO,warn:l.WARN,error:l.ERROR,silent:l.SILENT},Ie=l.INFO,De={[l.DEBUG]:"log",[l.VERBOSE]:"log",[l.INFO]:"info",[l.WARN]:"warn",[l.ERROR]:"error"},ve=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=De[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class we{constructor(e){this.name=e,this._logLevel=Ie,this._logHandler=ve,this._userLogHandler=null,R.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in l))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?X[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,l.DEBUG,...e),this._logHandler(this,l.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,l.VERBOSE,...e),this._logHandler(this,l.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,l.INFO,...e),this._logHandler(this,l.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,l.WARN,...e),this._logHandler(this,l.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,l.ERROR,...e),this._logHandler(this,l.ERROR,...e)}}function Se(t){R.forEach(e=>{e.setLogLevel(t)})}function Ce(t,e){for(const n of R){let s=null;e&&e.level&&(s=X[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(r,a,...o)=>{const c=o.map(i=>{if(i==null)return null;if(typeof i=="string")return i;if(typeof i=="number"||typeof i=="boolean")return i.toString();if(i instanceof Error)return i.message;try{return JSON.stringify(i)}catch{return null}}).filter(i=>i).join(" ");a>=(s!=null?s:r.logLevel)&&t({level:l[a].toLowerCase(),message:c,args:o,type:r.name})}}}const Ae=(t,e)=>e.some(n=>t instanceof n);let F,j;function Be(){return F||(F=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Oe(){return j||(j=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Z=new WeakMap,M=new WeakMap,Q=new WeakMap,S=new WeakMap,H=new WeakMap;function Te(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",a),t.removeEventListener("error",o)},a=()=>{n(f(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",a),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Z.set(n,t)}).catch(()=>{}),H.set(e,t),e}function Me(t){if(M.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",a),t.removeEventListener("error",o),t.removeEventListener("abort",o)},a=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",a),t.addEventListener("error",o),t.addEventListener("abort",o)});M.set(t,e)}let N={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return M.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Q.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return f(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ne(t){N=t(N)}function $e(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(C(this),e,...n);return Q.set(s,e.sort?e.sort():[e]),f(s)}:Oe().includes(t)?function(...e){return t.apply(C(this),e),f(Z.get(this))}:function(...e){return f(t.apply(C(this),e))}}function Le(t){return typeof t=="function"?$e(t):(t instanceof IDBTransaction&&Me(t),Ae(t,Be())?new Proxy(t,N):t)}function f(t){if(t instanceof IDBRequest)return Te(t);if(S.has(t))return S.get(t);const e=Le(t);return e!==t&&(S.set(t,e),H.set(e,t)),e}const C=t=>H.get(t);function Re(t,e,{blocked:n,upgrade:s,blocking:r,terminated:a}={}){const o=indexedDB.open(t,e),c=f(o);return s&&o.addEventListener("upgradeneeded",i=>{s(f(o.result),i.oldVersion,i.newVersion,f(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),c.then(i=>{a&&i.addEventListener("close",()=>a()),r&&i.addEventListener("versionchange",()=>r())}).catch(()=>{}),c}const He=["get","getKey","getAll","getAllKeys","count"],Pe=["put","add","delete","clear"],A=new Map;function k(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(A.get(e))return A.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=Pe.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||He.includes(n)))return;const a=async function(o,...c){const i=this.transaction(o,r?"readwrite":"readonly");let h=i.store;return s&&(h=h.index(c.shift())),(await Promise.all([h[n](...c),r&&i.done]))[0]};return A.set(e,a),a}Ne(t=>({...t,get:(e,n,s)=>k(e,n)||t.get(e,n,s),has:(e,n)=>!!k(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Fe(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Fe(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const $="@firebase/app",U="0.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p=new we("@firebase/app"),je="@firebase/app-compat",ke="@firebase/analytics-compat",Ue="@firebase/analytics",Ve="@firebase/app-check-compat",ze="@firebase/app-check",We="@firebase/auth",Ge="@firebase/auth-compat",Je="@firebase/database",Ke="@firebase/database-compat",Ye="@firebase/functions",Xe="@firebase/functions-compat",Ze="@firebase/installations",Qe="@firebase/installations-compat",qe="@firebase/messaging",et="@firebase/messaging-compat",tt="@firebase/performance",nt="@firebase/performance-compat",rt="@firebase/remote-config",st="@firebase/remote-config-compat",at="@firebase/storage",ot="@firebase/storage-compat",it="@firebase/firestore",ct="@firebase/firestore-compat",lt="firebase",ht="9.15.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v="[DEFAULT]",dt={[$]:"fire-core",[je]:"fire-core-compat",[Ue]:"fire-analytics",[ke]:"fire-analytics-compat",[ze]:"fire-app-check",[Ve]:"fire-app-check-compat",[We]:"fire-auth",[Ge]:"fire-auth-compat",[Je]:"fire-rtdb",[Ke]:"fire-rtdb-compat",[Ye]:"fire-fn",[Xe]:"fire-fn-compat",[Ze]:"fire-iid",[Qe]:"fire-iid-compat",[qe]:"fire-fcm",[et]:"fire-fcm-compat",[tt]:"fire-perf",[nt]:"fire-perf-compat",[rt]:"fire-rc",[st]:"fire-rc-compat",[at]:"fire-gcs",[ot]:"fire-gcs-compat",[it]:"fire-fst",[ct]:"fire-fst-compat","fire-js":"fire-js",[lt]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m=new Map,w=new Map;function ft(t,e){try{t.container.addComponent(e)}catch(n){p.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Tt(t,e){t.container.addOrOverwriteComponent(e)}function L(t){const e=t.name;if(w.has(e))return p.debug(`There were multiple attempts to register component ${e}.`),!1;w.set(e,t);for(const n of m.values())ft(n,t);return!0}function ut(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Mt(t,e,n=v){ut(t,e).clearInstance(n)}function Nt(){w.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},d=new Y("app","Firebase",pt);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new D("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw d.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t=ht;function gt(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:v,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw d.create("bad-app-name",{appName:String(r)});if(n||(n=fe()),!n)throw d.create("no-options");const a=m.get(r);if(a){if(T(n,a.options)&&T(s,a.config))return a;throw d.create("duplicate-app",{appName:r})}const o=new ye(r);for(const i of w.values())o.addComponent(i);const c=new mt(n,s,o);return m.set(r,c),c}function Lt(t=v){const e=m.get(t);if(!e&&t===v)return gt();if(!e)throw d.create("no-app",{appName:t});return e}function Rt(){return Array.from(m.values())}async function Ht(t){const e=t.name;m.has(e)&&(m.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function B(t,e,n){var s;let r=(s=dt[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const a=r.match(/\s|\//),o=e.match(/\s|\//);if(a||o){const c=[`Unable to register library "${r}" with version "${e}":`];a&&c.push(`library name "${r}" contains illegal characters (whitespace or "/")`),a&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),p.warn(c.join(" "));return}L(new D(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}function Pt(t,e){if(t!==null&&typeof t!="function")throw d.create("invalid-log-argument");Ce(t,e)}function xt(t){Se(t)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt="firebase-heartbeat-database",_t=1,b="firebase-heartbeat-store";let O=null;function q(){return O||(O=Re(bt,_t,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(b)}}}).catch(t=>{throw d.create("idb-open",{originalErrorMessage:t.message})})),O}async function Et(t){try{return(await q()).transaction(b).objectStore(b).get(ee(t))}catch(e){if(e instanceof _)p.warn(e.message);else{const n=d.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});p.warn(n.message)}}}async function V(t,e){try{const s=(await q()).transaction(b,"readwrite");return await s.objectStore(b).put(e,ee(t)),s.done}catch(n){if(n instanceof _)p.warn(n.message);else{const s=d.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});p.warn(s.message)}}}function ee(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt=1024,It=30*24*60*60*1e3;class Dt{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new wt(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=z();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const a=new Date(r.date).valueOf();return Date.now()-a<=It}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=z(),{heartbeatsToSend:n,unsentEntries:s}=vt(this._heartbeatsCache.heartbeats),r=I(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function z(){return new Date().toISOString().substring(0,10)}function vt(t,e=yt){const n=[];let s=t.slice();for(const r of t){const a=n.find(o=>o.agent===r.agent);if(a){if(a.dates.push(r.date),W(n)>e){a.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),W(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class wt{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ae()?oe().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Et(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return V(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return V(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function W(t){return I(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(t){L(new D("platform-logger",e=>new xe(e),"PRIVATE")),L(new D("heartbeat",e=>new Dt(e),"PRIVATE")),B($,U,t),B($,U,"esm2017"),B("fire-js","")}St("");export{D as C,v as D,_ as F,$t as S,ut as _,At as a,Lt as b,Bt as c,L as d,ft as e,Tt as f,Ot as g,m as h,Ct as i,Nt as j,w as k,Mt as l,Ht as m,Rt as n,gt as o,Pt as p,B as r,xt as s};
