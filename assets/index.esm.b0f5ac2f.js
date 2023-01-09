import{g as y,_ as Ne,a as De,b as $e,F as ze,i as je,c as Xe,d as Ge,C as We,r as ue,S as Ke}from"./index.esm2017.194074ca.js";/**
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
 */const ge="firebasestorage.googleapis.com",me="storageBucket",Ye=2*60*1e3,Ve=10*60*1e3,Je=1e3;/**
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
 */class h extends ze{constructor(e,n,s=0){super(V(e),`Firebase Storage: ${n} (${V(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,h.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return V(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function V(t){return"storage/"+t}function te(){const t="An unknown error occurred, please check the error payload for server response.";return new h("unknown",t)}function Ze(t){return new h("object-not-found","Object '"+t+"' does not exist.")}function Qe(t){return new h("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function et(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new h("unauthenticated",t)}function tt(){return new h("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function nt(t){return new h("unauthorized","User does not have permission to access '"+t+"'.")}function be(){return new h("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function Re(){return new h("canceled","User canceled the upload/download.")}function st(t){return new h("invalid-url","Invalid URL '"+t+"'.")}function rt(t){return new h("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function ot(){return new h("no-default-bucket","No default bucket found. Did you set the '"+me+"' property when initializing the app?")}function ke(){return new h("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function it(){return new h("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.")}function at(){return new h("no-download-url","The given file does not have any download URLs.")}function ut(t){return new h("unsupported-environment",`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Q(t){return new h("invalid-argument",t)}function we(){return new h("app-deleted","The Firebase app was deleted.")}function ct(t){return new h("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function N(t,e){return new h("invalid-format","String does not match format '"+t+"': "+e)}function H(t){throw new h("internal-error","Internal error: "+t)}/**
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
 */class k{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=k.makeFromUrl(e,n)}catch{return new k(e,"")}if(s.path==="")return s;throw rt(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function o(m){m.path.charAt(m.path.length-1)==="/"&&(m.path_=m.path_.slice(0,-1))}const i="(/(.*))?$",u=new RegExp("^gs://"+r+i,"i"),a={bucket:1,path:3};function c(m){m.path_=decodeURIComponent(m.path)}const l="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",_=new RegExp(`^https?://${d}/${l}/b/${r}/o${p}`,"i"),g={bucket:1,path:3},T=n===ge?"(?:storage.googleapis.com|storage.cloud.google.com)":n,f="([^?#]*)",U=new RegExp(`^https?://${T}/${r}/${f}`,"i"),b=[{regex:u,indices:a,postModify:o},{regex:_,indices:g,postModify:c},{regex:U,indices:{bucket:1,path:2},postModify:c}];for(let m=0;m<b.length;m++){const q=b[m],B=q.regex.exec(e);if(B){const K=B[q.indices.bucket];let L=B[q.indices.path];L||(L=""),s=new k(K,L),q.postModify(s);break}}if(s==null)throw st(e);return s}}class lt{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function ht(t,e,n){let s=1,r=null,o=null,i=!1,u=0;function a(){return u===2}let c=!1;function l(...f){c||(c=!0,e.apply(null,f))}function d(f){r=setTimeout(()=>{r=null,t(_,a())},f)}function p(){o&&clearTimeout(o)}function _(f,...U){if(c){p();return}if(f){p(),l.call(null,f,...U);return}if(a()||i){p(),l.call(null,f,...U);return}s<64&&(s*=2);let b;u===1?(u=2,b=0):b=(s+Math.random())*1e3,d(b)}let g=!1;function T(f){g||(g=!0,p(),!c&&(r!==null?(f||(u=2),clearTimeout(r),d(0)):f||(u=1)))}return d(0),o=setTimeout(()=>{i=!0,T(!0)},n),T}function dt(t){t(!1)}/**
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
 */function ft(t){return t!==void 0}function pt(t){return typeof t=="function"}function _t(t){return typeof t=="object"&&!Array.isArray(t)}function G(t){return typeof t=="string"||t instanceof String}function ce(t){return ne()&&t instanceof Blob}function ne(){return typeof Blob<"u"&&!je()}function ee(t,e,n,s){if(s<e)throw Q(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw Q(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function A(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function ye(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
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
 */var I;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(I||(I={}));/**
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
 */function Te(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,o=e.indexOf(t)!==-1;return n||r||o}/**
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
 */class gt{constructor(e,n,s,r,o,i,u,a,c,l,d,p=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=o,this.additionalRetryCodes_=i,this.callback_=u,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=l,this.connectionFactory_=d,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((_,g)=>{this.resolve_=_,this.reject_=g,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new z(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const i=u=>{const a=u.loaded,c=u.lengthComputable?u.total:-1;this.progressCallback_!==null&&this.progressCallback_(a,c)};this.progressCallback_!==null&&o.addUploadProgressListener(i),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(i),this.pendingConnection_=null;const u=o.getErrorCode()===I.NO_ERROR,a=o.getStatus();if((!u||Te(a,this.additionalRetryCodes_))&&this.retry){const l=o.getErrorCode()===I.ABORT;s(!1,new z(!1,null,l));return}const c=this.successCodes_.indexOf(a)!==-1;s(!0,new z(c,o))})},n=(s,r)=>{const o=this.resolve_,i=this.reject_,u=r.connection;if(r.wasSuccessCode)try{const a=this.callback_(u,u.getResponse());ft(a)?o(a):o()}catch(a){i(a)}else if(u!==null){const a=te();a.serverResponse=u.getErrorText(),this.errorCallback_?i(this.errorCallback_(u,a)):i(a)}else if(r.canceled){const a=this.appDelete_?we():Re();i(a)}else{const a=be();i(a)}};this.canceled_?n(!1,new z(!1,null,!0)):this.backoffId_=ht(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&dt(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class z{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function mt(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function bt(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function Rt(t,e){e&&(t["X-Firebase-GMPID"]=e)}function kt(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function wt(t,e,n,s,r,o,i=!0){const u=ye(t.urlParams),a=t.url+u,c=Object.assign({},t.headers);return Rt(c,e),mt(c,n),bt(c,o),kt(c,s),new gt(a,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,i)}/**
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
 */function yt(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Tt(...t){const e=yt();if(e!==void 0){const n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(ne())return new Blob(t);throw new h("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function St(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function Ct(t){if(typeof atob>"u")throw ut("base-64");return atob(t)}/**
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
 */const C={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class J{constructor(e,n){this.data=e,this.contentType=n||null}}function Se(t,e){switch(t){case C.RAW:return new J(Ce(e));case C.BASE64:case C.BASE64URL:return new J(xe(t,e));case C.DATA_URL:return new J(Et(e),Ut(e))}throw te()}function Ce(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const o=s,i=t.charCodeAt(++n);s=65536|(o&1023)<<10|i&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function xt(t){let e;try{e=decodeURIComponent(t)}catch{throw N(C.DATA_URL,"Malformed data URL.")}return Ce(e)}function xe(t,e){switch(t){case C.BASE64:{const r=e.indexOf("-")!==-1,o=e.indexOf("_")!==-1;if(r||o)throw N(t,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case C.BASE64URL:{const r=e.indexOf("+")!==-1,o=e.indexOf("/")!==-1;if(r||o)throw N(t,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Ct(e)}catch(r){throw r.message.includes("polyfill")?r:N(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}class Ee{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw N(C.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=Pt(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function Et(t){const e=new Ee(t);return e.base64?xe(C.BASE64,e.rest):xt(e.rest)}function Ut(t){return new Ee(t).contentType}function Pt(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class v{constructor(e,n){let s=0,r="";ce(e)?(this.data_=e,s=e.size,r=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,n){if(ce(this.data_)){const s=this.data_,r=St(s,e,n);return r===null?null:new v(r)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new v(s,!0)}}static getBlob(...e){if(ne()){const n=e.map(s=>s instanceof v?s.data_:s);return new v(Tt.apply(null,n))}else{const n=e.map(i=>G(i)?Se(C.RAW,i).data:i.data_);let s=0;n.forEach(i=>{s+=i.byteLength});const r=new Uint8Array(s);let o=0;return n.forEach(i=>{for(let u=0;u<i.length;u++)r[o++]=i[u]}),new v(r,!0)}}uploadData(){return this.data_}}/**
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
 */function se(t){let e;try{e=JSON.parse(t)}catch{return null}return _t(e)?e:null}/**
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
 */function vt(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function At(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function Ue(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function It(t,e){return e}class R{constructor(e,n,s,r){this.server=e,this.local=n||e,this.writable=!!s,this.xform=r||It}}let j=null;function Ot(t){return!G(t)||t.length<2?t:Ue(t)}function D(){if(j)return j;const t=[];t.push(new R("bucket")),t.push(new R("generation")),t.push(new R("metageneration")),t.push(new R("name","fullPath",!0));function e(o,i){return Ot(i)}const n=new R("name");n.xform=e,t.push(n);function s(o,i){return i!==void 0?Number(i):i}const r=new R("size");return r.xform=s,t.push(r),t.push(new R("timeCreated")),t.push(new R("updated")),t.push(new R("md5Hash",null,!0)),t.push(new R("cacheControl",null,!0)),t.push(new R("contentDisposition",null,!0)),t.push(new R("contentEncoding",null,!0)),t.push(new R("contentLanguage",null,!0)),t.push(new R("contentType",null,!0)),t.push(new R("metadata","customMetadata",!0)),j=t,j}function qt(t,e){function n(){const s=t.bucket,r=t.fullPath,o=new k(s,r);return e._makeStorageReference(o)}Object.defineProperty(t,"ref",{get:n})}function Bt(t,e,n){const s={};s.type="file";const r=n.length;for(let o=0;o<r;o++){const i=n[o];s[i.local]=i.xform(s,e[i.server])}return qt(s,t),s}function Pe(t,e,n){const s=se(e);return s===null?null:Bt(t,s,n)}function Mt(t,e,n,s){const r=se(e);if(r===null||!G(r.downloadTokens))return null;const o=r.downloadTokens;if(o.length===0)return null;const i=encodeURIComponent;return o.split(",").map(c=>{const l=t.bucket,d=t.fullPath,p="/b/"+i(l)+"/o/"+i(d),_=A(p,n,s),g=ye({alt:"media",token:c});return _+g})[0]}function re(t,e){const n={},s=e.length;for(let r=0;r<s;r++){const o=e[r];o.writable&&(n[o.server]=t[o.local])}return JSON.stringify(n)}/**
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
 */const le="prefixes",he="items";function Ft(t,e,n){const s={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[le])for(const r of n[le]){const o=r.replace(/\/$/,""),i=t._makeStorageReference(new k(e,o));s.prefixes.push(i)}if(n[he])for(const r of n[he]){const o=t._makeStorageReference(new k(e,r.name));s.items.push(o)}return s}function Lt(t,e,n){const s=se(n);return s===null?null:Ft(t,e,s)}class E{constructor(e,n,s,r){this.url=e,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function x(t){if(!t)throw te()}function W(t,e){function n(s,r){const o=Pe(t,r,e);return x(o!==null),o}return n}function Ht(t,e){function n(s,r){const o=Lt(t,e,r);return x(o!==null),o}return n}function Nt(t,e){function n(s,r){const o=Pe(t,r,e);return x(o!==null),Mt(o,r,t.host,t._protocol)}return n}function F(t){function e(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=tt():r=et():n.getStatus()===402?r=Qe(t.bucket):n.getStatus()===403?r=nt(t.path):r=s,r.status=n.getStatus(),r.serverResponse=s.serverResponse,r}return e}function $(t){const e=F(t);function n(s,r){let o=e(s,r);return s.getStatus()===404&&(o=Ze(t.path)),o.serverResponse=r.serverResponse,o}return n}function ve(t,e,n){const s=e.fullServerUrl(),r=A(s,t.host,t._protocol),o="GET",i=t.maxOperationRetryTime,u=new E(r,o,W(t,n),i);return u.errorHandler=$(e),u}function Dt(t,e,n,s,r){const o={};e.isRoot?o.prefix="":o.prefix=e.path+"/",n&&n.length>0&&(o.delimiter=n),s&&(o.pageToken=s),r&&(o.maxResults=r);const i=e.bucketOnlyServerUrl(),u=A(i,t.host,t._protocol),a="GET",c=t.maxOperationRetryTime,l=new E(u,a,Ht(t,e.bucket),c);return l.urlParams=o,l.errorHandler=F(e),l}function Ae(t,e,n){const s=e.fullServerUrl(),r=A(s,t.host,t._protocol)+"?alt=media",o="GET",i=t.maxOperationRetryTime,u=new E(r,o,(a,c)=>c,i);return u.errorHandler=$(e),n!==void 0&&(u.headers.Range=`bytes=0-${n}`,u.successCodes=[200,206]),u}function $t(t,e,n){const s=e.fullServerUrl(),r=A(s,t.host,t._protocol),o="GET",i=t.maxOperationRetryTime,u=new E(r,o,Nt(t,n),i);return u.errorHandler=$(e),u}function zt(t,e,n,s){const r=e.fullServerUrl(),o=A(r,t.host,t._protocol),i="PATCH",u=re(n,s),a={"Content-Type":"application/json; charset=utf-8"},c=t.maxOperationRetryTime,l=new E(o,i,W(t,s),c);return l.headers=a,l.body=u,l.errorHandler=$(e),l}function jt(t,e){const n=e.fullServerUrl(),s=A(n,t.host,t._protocol),r="DELETE",o=t.maxOperationRetryTime;function i(a,c){}const u=new E(s,r,i,o);return u.successCodes=[200,204],u.errorHandler=$(e),u}function Xt(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function Ie(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=Xt(null,e)),s}function Oe(t,e,n,s,r){const o=e.bucketOnlyServerUrl(),i={"X-Goog-Upload-Protocol":"multipart"};function u(){let b="";for(let m=0;m<2;m++)b=b+Math.random().toString().slice(2);return b}const a=u();i["Content-Type"]="multipart/related; boundary="+a;const c=Ie(e,s,r),l=re(c,n),d="--"+a+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+l+`\r
--`+a+`\r
Content-Type: `+c.contentType+`\r
\r
`,p=`\r
--`+a+"--",_=v.getBlob(d,s,p);if(_===null)throw ke();const g={name:c.fullPath},T=A(o,t.host,t._protocol),f="POST",U=t.maxUploadRetryTime,P=new E(T,f,W(t,n),U);return P.urlParams=g,P.headers=i,P.body=_.uploadData(),P.errorHandler=F(e),P}class X{constructor(e,n,s,r){this.current=e,this.total=n,this.finalized=!!s,this.metadata=r||null}}function oe(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{x(!1)}return x(!!n&&(e||["active"]).indexOf(n)!==-1),n}function Gt(t,e,n,s,r){const o=e.bucketOnlyServerUrl(),i=Ie(e,s,r),u={name:i.fullPath},a=A(o,t.host,t._protocol),c="POST",l={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${s.size()}`,"X-Goog-Upload-Header-Content-Type":i.contentType,"Content-Type":"application/json; charset=utf-8"},d=re(i,n),p=t.maxUploadRetryTime;function _(T){oe(T);let f;try{f=T.getResponseHeader("X-Goog-Upload-URL")}catch{x(!1)}return x(G(f)),f}const g=new E(a,c,_,p);return g.urlParams=u,g.headers=l,g.body=d,g.errorHandler=F(e),g}function Wt(t,e,n,s){const r={"X-Goog-Upload-Command":"query"};function o(c){const l=oe(c,["active","final"]);let d=null;try{d=c.getResponseHeader("X-Goog-Upload-Size-Received")}catch{x(!1)}d||x(!1);const p=Number(d);return x(!isNaN(p)),new X(p,s.size(),l==="final")}const i="POST",u=t.maxUploadRetryTime,a=new E(n,i,o,u);return a.headers=r,a.errorHandler=F(e),a}const de=256*1024;function Kt(t,e,n,s,r,o,i,u){const a=new X(0,0);if(i?(a.current=i.current,a.total=i.total):(a.current=0,a.total=s.size()),s.size()!==a.total)throw it();const c=a.total-a.current;let l=c;r>0&&(l=Math.min(l,r));const d=a.current,p=d+l;let _="";l===0?_="finalize":c===l?_="upload, finalize":_="upload";const g={"X-Goog-Upload-Command":_,"X-Goog-Upload-Offset":`${a.current}`},T=s.slice(d,p);if(T===null)throw ke();function f(m,q){const B=oe(m,["active","final"]),K=a.current+l,L=s.size();let Y;return B==="final"?Y=W(e,o)(m,q):Y=null,new X(K,L,B==="final",Y)}const U="POST",P=e.maxUploadRetryTime,b=new E(n,U,f,P);return b.headers=g,b.body=T.uploadData(),b.progressCallback=u||null,b.errorHandler=F(t),b}/**
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
 */const kn={STATE_CHANGED:"state_changed"},w={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Z(t){switch(t){case"running":case"pausing":case"canceling":return w.RUNNING;case"paused":return w.PAUSED;case"success":return w.SUCCESS;case"canceled":return w.CANCELED;case"error":return w.ERROR;default:return w.ERROR}}/**
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
 */class Yt{constructor(e,n,s){if(pt(e)||n!=null||s!=null)this.next=e,this.error=n!=null?n:void 0,this.complete=s!=null?s:void 0;else{const o=e;this.next=o.next,this.error=o.error,this.complete=o.complete}}}/**
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
 */function M(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class ie{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=I.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=I.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=I.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,r){if(this.sent_)throw H("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),r!==void 0)for(const o in r)r.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,r[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw H("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw H("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw H("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw H("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Vt extends ie{initXhr(){this.xhr_.responseType="text"}}function S(){return new Vt}class Jt extends ie{initXhr(){this.xhr_.responseType="arraybuffer"}}function Zt(){return new Jt}class Qt extends ie{initXhr(){this.xhr_.responseType="blob"}}function en(){return new Qt}/**
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
 */class tn{constructor(e,n,s=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=s,this._mappings=D(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=r=>{if(this._request=void 0,this._chunkMultiplier=1,r._codeEquals("canceled"))this._needToFetchStatus=!0,this.completeTransitions_();else{const o=this.isExponentialBackoffExpired();if(Te(r.status,[]))if(o)r=be();else{this.sleepTime=Math.max(this.sleepTime*2,Je),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=r,this._transition("error")}},this._metadataErrorHandler=r=>{this._request=void 0,r._codeEquals("canceled")?this.completeTransitions_():(this._error=r,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((r,o)=>{this._resolve=r,this._reject=o,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,s])=>{switch(this._state){case"running":e(n,s);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const s=Gt(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(s,S,e,n);this._request=r,r.getPromise().then(o=>{this._request=void 0,this._uploadUrl=o,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,s)=>{const r=Wt(this._ref.storage,this._ref._location,e,this._blob),o=this._ref.storage._makeRequest(r,S,n,s);this._request=o,o.getPromise().then(i=>{i=i,this._request=void 0,this._updateProgress(i.current),this._needToFetchStatus=!1,i.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=de*this._chunkMultiplier,n=new X(this._transferred,this._blob.size()),s=this._uploadUrl;this._resolveToken((r,o)=>{let i;try{i=Kt(this._ref._location,this._ref.storage,s,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(a){this._error=a,this._transition("error");return}const u=this._ref.storage._makeRequest(i,S,r,o,!1);this._request=u,u.getPromise().then(a=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(a.current),a.finalized?(this._metadata=a.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){de*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const s=ve(this._ref.storage,this._ref._location,this._mappings),r=this._ref.storage._makeRequest(s,S,e,n);this._request=r,r.getPromise().then(o=>{this._request=void 0,this._metadata=o,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const s=Oe(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(s,S,e,n);this._request=r,r.getPromise().then(o=>{this._request=void 0,this._metadata=o,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=Re(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Z(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,s,r){const o=new Yt(n||void 0,s||void 0,r||void 0);return this._addObserver(o),()=>{this._removeObserver(o)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Z(this._state)){case w.SUCCESS:M(this._resolve.bind(null,this.snapshot))();break;case w.CANCELED:case w.ERROR:const n=this._reject;M(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Z(this._state)){case w.RUNNING:case w.PAUSED:e.next&&M(e.next.bind(e,this.snapshot))();break;case w.SUCCESS:e.complete&&M(e.complete.bind(e))();break;case w.CANCELED:case w.ERROR:e.error&&M(e.error.bind(e,this._error))();break;default:e.error&&M(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class O{constructor(e,n){this._service=e,n instanceof k?this._location=n:this._location=k.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new O(e,n)}get root(){const e=new k(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Ue(this._location.path)}get storage(){return this._service}get parent(){const e=vt(this._location.path);if(e===null)return null;const n=new k(this._location.bucket,e);return new O(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw ct(e)}}function nn(t,e){t._throwIfRoot("getBytes");const n=Ae(t.storage,t._location,e);return t.storage.makeRequestWithTokens(n,Zt).then(s=>e!==void 0?s.slice(0,e):s)}function sn(t,e){t._throwIfRoot("getBlob");const n=Ae(t.storage,t._location,e);return t.storage.makeRequestWithTokens(n,en).then(s=>e!==void 0?s.slice(0,e):s)}function qe(t,e,n){t._throwIfRoot("uploadBytes");const s=Oe(t.storage,t._location,D(),new v(e,!0),n);return t.storage.makeRequestWithTokens(s,S).then(r=>({metadata:r,ref:t}))}function rn(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new tn(t,new v(e),n)}function on(t,e,n=C.RAW,s){t._throwIfRoot("uploadString");const r=Se(n,e),o=Object.assign({},s);return o.contentType==null&&r.contentType!=null&&(o.contentType=r.contentType),qe(t,r.data,o)}function an(t){const e={prefixes:[],items:[]};return Be(t,e).then(()=>e)}async function Be(t,e,n){const r=await Me(t,{pageToken:n});e.prefixes.push(...r.prefixes),e.items.push(...r.items),r.nextPageToken!=null&&await Be(t,e,r.nextPageToken)}function Me(t,e){e!=null&&typeof e.maxResults=="number"&&ee("options.maxResults",1,1e3,e.maxResults);const n=e||{},s=Dt(t.storage,t._location,"/",n.pageToken,n.maxResults);return t.storage.makeRequestWithTokens(s,S)}function un(t){t._throwIfRoot("getMetadata");const e=ve(t.storage,t._location,D());return t.storage.makeRequestWithTokens(e,S)}function cn(t,e){t._throwIfRoot("updateMetadata");const n=zt(t.storage,t._location,e,D());return t.storage.makeRequestWithTokens(n,S)}function ln(t){t._throwIfRoot("getDownloadURL");const e=$t(t.storage,t._location,D());return t.storage.makeRequestWithTokens(e,S).then(n=>{if(n===null)throw at();return n})}function hn(t){t._throwIfRoot("deleteObject");const e=jt(t.storage,t._location);return t.storage.makeRequestWithTokens(e,S)}function Fe(t,e){const n=At(t._location.path,e),s=new k(t._location.bucket,n);return new O(t.storage,s)}/**
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
 */function dn(t){return/^[A-Za-z]+:\/\//.test(t)}function fn(t,e){return new O(t,e)}function Le(t,e){if(t instanceof ae){const n=t;if(n._bucket==null)throw ot();const s=new O(n,n._bucket);return e!=null?Le(s,e):s}else return e!==void 0?Fe(t,e):t}function pn(t,e){if(e&&dn(e)){if(t instanceof ae)return fn(t,e);throw Q("To use ref(service, url), the first argument must be a Storage instance.")}else return Le(t,e)}function fe(t,e){const n=e==null?void 0:e[me];return n==null?null:k.makeFromBucketSpec(n,t)}function _n(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:r}=s;r&&(t._overrideAuthToken=typeof r=="string"?r:Xe(r,t.app.options.projectId))}class ae{constructor(e,n,s,r,o){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=o,this._bucket=null,this._host=ge,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Ye,this._maxUploadRetryTime=Ve,this._requests=new Set,r!=null?this._bucket=k.makeFromBucketSpec(r,this._host):this._bucket=fe(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=k.makeFromBucketSpec(this._url,e):this._bucket=fe(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){ee("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){ee("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new O(this,e)}_makeRequest(e,n,s,r,o=!0){if(this._deleted)return new lt(we());{const i=wt(e,this._appId,s,r,n,this._firebaseVersion,o);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const pe="@firebase/storage",_e="0.10.0";/**
 * @license
 * Copyright 2020 Google LLC
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
 */const He="storage";/**
 * @license
 * Copyright 2020 Google LLC
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
 */function wn(t,e){return t=y(t),nn(t,e)}function yn(t,e,n){return t=y(t),qe(t,e,n)}function Tn(t,e,n,s){return t=y(t),on(t,e,n,s)}function Sn(t,e,n){return t=y(t),rn(t,e,n)}function Cn(t){return t=y(t),un(t)}function xn(t,e){return t=y(t),cn(t,e)}function En(t,e){return t=y(t),Me(t,e)}function Un(t){return t=y(t),an(t)}function Pn(t){return t=y(t),ln(t)}function vn(t){return t=y(t),hn(t)}function An(t,e){return t=y(t),pn(t,e)}function In(t,e){return Fe(t,e)}function On(t=$e(),e){t=y(t);const s=Ne(t,He).getImmediate({identifier:e}),r=De("storage");return r&&gn(s,...r),s}function gn(t,e,n,s={}){_n(t,e,n,s)}/**
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
 */function qn(t,e){return t=y(t),sn(t,e)}function Bn(t,e){throw new Error("getStream() is only supported by NodeJS builds")}function mn(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new ae(n,s,r,e,Ke)}function bn(){Ge(new We(He,mn,"PUBLIC").setMultipleInstances(!0)),ue(pe,_e,""),ue(pe,_e,"esm2017")}bn();export{C as StringFormat,v as _FbsBlob,k as _Location,kn as _TaskEvent,w as _TaskState,tn as _UploadTask,Se as _dataFromString,In as _getChild,Q as _invalidArgument,ct as _invalidRootOperation,gn as connectStorageEmulator,vn as deleteObject,qn as getBlob,wn as getBytes,Pn as getDownloadURL,Cn as getMetadata,On as getStorage,Bn as getStream,En as list,Un as listAll,An as ref,xn as updateMetadata,yn as uploadBytes,Sn as uploadBytesResumable,Tn as uploadString};
