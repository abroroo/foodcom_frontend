if(!self.define){let e,i={};const a=(a,s)=>(a=new URL(a+".js",s).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(s,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let o={};const t=e=>a(e,n),d={module:{uri:n},exports:o,require:t};i[n]=Promise.all(s.map((e=>d[e]||t(e)))).then((e=>(c(...e),o)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/129-69e40bd9b8b2f9ec.js",revision:"69e40bd9b8b2f9ec"},{url:"/_next/static/chunks/155-95a7a711dd0eb9c4.js",revision:"95a7a711dd0eb9c4"},{url:"/_next/static/chunks/243-549cfe9bfdface84.js",revision:"549cfe9bfdface84"},{url:"/_next/static/chunks/2cca2479-79f06283604ef740.js",revision:"79f06283604ef740"},{url:"/_next/static/chunks/742-7913e7f3c31792be.js",revision:"7913e7f3c31792be"},{url:"/_next/static/chunks/framework-0c7baedefba6b077.js",revision:"0c7baedefba6b077"},{url:"/_next/static/chunks/main-f7a58e1565c9da1d.js",revision:"f7a58e1565c9da1d"},{url:"/_next/static/chunks/pages/_app-0d0d31aea08e53bb.js",revision:"0d0d31aea08e53bb"},{url:"/_next/static/chunks/pages/_error-08a9db0f433628d8.js",revision:"08a9db0f433628d8"},{url:"/_next/static/chunks/pages/about-4f5d811d40488547.js",revision:"4f5d811d40488547"},{url:"/_next/static/chunks/pages/form-3c0a04cb1062a54c.js",revision:"3c0a04cb1062a54c"},{url:"/_next/static/chunks/pages/index-6b96a4de5271db77.js",revision:"6b96a4de5271db77"},{url:"/_next/static/chunks/pages/test/testR-113ddb8cdd0ce940.js",revision:"113ddb8cdd0ce940"},{url:"/_next/static/chunks/pages/thank-you-aaac44599d4dbb3b.js",revision:"aaac44599d4dbb3b"},{url:"/_next/static/chunks/pages/work-6d74bf244a2361f6.js",revision:"6d74bf244a2361f6"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-a2c3559e16fc66cf.js",revision:"a2c3559e16fc66cf"},{url:"/_next/static/css/7b233cd83a8cff1c.css",revision:"7b233cd83a8cff1c"},{url:"/_next/static/css/e749ea11e6d8c67e.css",revision:"e749ea11e6d8c67e"},{url:"/_next/static/lBU6p7Hs3Wte8TzDSLsPP/_buildManifest.js",revision:"0c28e14936c2b3ed0b45f7c0f0c3a58f"},{url:"/_next/static/lBU6p7Hs3Wte8TzDSLsPP/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/1.0b61838e.jpg",revision:"03cf0f183432acde62f747fe31e61de0"},{url:"/_next/static/media/1.6dc21ea2.jpeg",revision:"87097af87ca3aff36b2bae6b44c45f7a"},{url:"/_next/static/media/2.0b61838e.jpg",revision:"03cf0f183432acde62f747fe31e61de0"},{url:"/_next/static/media/2.96a1c32d.jpeg",revision:"2b27f7e8d06a3038a32ff9dcdc8cdf11"},{url:"/_next/static/media/3.0b61838e.jpg",revision:"03cf0f183432acde62f747fe31e61de0"},{url:"/_next/static/media/3.2e9eb7d4.jpeg",revision:"df611685413778c52b635e2644a0c01b"},{url:"/_next/static/media/4.0b61838e.jpg",revision:"03cf0f183432acde62f747fe31e61de0"},{url:"/_next/static/media/4.919af4be.jpeg",revision:"7861a977986f9fae268f715201bebf82"},{url:"/_next/static/media/5.0b61838e.jpg",revision:"03cf0f183432acde62f747fe31e61de0"},{url:"/_next/static/media/5.e28f29a4.jpeg",revision:"e9842cd048804a77775bc1d543eb5983"},{url:"/_next/static/media/6.8c4e8fe2.jpeg",revision:"a456f9f5ab34008a3717b79ddcd58e24"},{url:"/_next/static/media/6.dcc88f65.jpg",revision:"e269d80c13548d09c02d2c7cd98de117"},{url:"/_next/static/media/7.985aa599.jpeg",revision:"6f0d23455d17523a5be0b278465708b5"},{url:"/_next/static/media/8.182388b3.jpeg",revision:"6f1cc4314b8e7be2fbd6b94cea48b841"},{url:"/_next/static/media/9.e1198787.jpeg",revision:"ea9c9020b2b50f04a75cadbdca9604c6"},{url:"/_next/static/media/스몰웨딩5.9ffce674.jpg",revision:"7eeb777d6a04b9138a7fd08bd59c1eb8"},{url:"/_next/static/media/스몰웨딩6.7be2d3b5.jpg",revision:"0c9cfd8d229cd7757625c19643569763"},{url:"/_next/static/media/스테이크2.72fd40ff.jpg",revision:"b36a4dc3c79b46d01326a553c3002642"},{url:"/_next/static/media/스테이크3.e0a4da7c.jpg",revision:"28e2c1d16da18262d4ee9736794badaf"},{url:"/_next/static/media/스테이크4.7c6deb30.jpg",revision:"11d743c520503d0ce26cb65090e5d4df"},{url:"/fonts/NEXON_Lv1_Gothic_total/NEXON Lv1 Gothic Low_OTF/NEXON Lv1 Gothic Low OTF Bold.otf",revision:"f94da97214a675fa884c40413e794f63"},{url:"/fonts/NEXON_Lv1_Gothic_total/NEXON Lv1 Gothic Low_OTF/NEXON Lv1 Gothic Low OTF Light.otf",revision:"77784795835fe8a497e1c2820914ea80"},{url:"/fonts/NEXON_Lv1_Gothic_total/NEXON Lv1 Gothic Low_OTF/NEXON Lv1 Gothic Low OTF.otf",revision:"8b5a99bcd74529e9c288338d68e426e1"},{url:"/fonts/NEXON_Lv1_Gothic_total/NEXON Lv1 Gothic_OTF_TTF/NEXON Lv1 Gothic_OTF/NEXON Lv1 Gothic OTF Bold.otf",revision:"ae60ced5de8fd85e165083af39d1e71e"},{url:"/fonts/NEXON_Lv1_Gothic_total/NEXON Lv1 Gothic_OTF_TTF/NEXON Lv1 Gothic_OTF/NEXON Lv1 Gothic OTF Light.otf",revision:"28a76d3ed2a31669856be70bffc84d0d"},{url:"/fonts/NEXON_Lv1_Gothic_total/NEXON Lv1 Gothic_OTF_TTF/NEXON Lv1 Gothic_OTF/NEXON Lv1 Gothic OTF.otf",revision:"b688fb240420e287279d0bb07247b63d"},{url:"/fonts/NEXON_Lv1_Gothic_total/NEXON Lv1 Gothic_OTF_TTF/NEXON Lv1 Gothic_TTF/NEXONLv1GothicBold.ttf",revision:"7cd69ecabe29877103cc281b845a4f5f"},{url:"/fonts/NEXON_Lv1_Gothic_total/NEXON Lv1 Gothic_OTF_TTF/NEXON Lv1 Gothic_TTF/NEXONLv1GothicLight.ttf",revision:"13c4c62a1b104ee114aace64cad2fdb2"},{url:"/fonts/NEXON_Lv1_Gothic_total/NEXON Lv1 Gothic_OTF_TTF/NEXON Lv1 Gothic_TTF/NEXONLv1GothicRegular.ttf",revision:"55dc432119576b32bea3c555cbcbc53e"},{url:"/fonts/NEXON_Lv1_Gothic_total/WEB_NEXON Lv1 Gothic Low/NEXON Lv1 Gothic Low OTF Bold.eot",revision:"d96c9825a96d32f5beeed673979107d3"},{url:"/fonts/NEXON_Lv1_Gothic_total/WEB_NEXON Lv1 Gothic Low/NEXON Lv1 Gothic Low OTF Bold.woff",revision:"326914fd25d26360655376ff086dc6dc"},{url:"/fonts/NEXON_Lv1_Gothic_total/WEB_NEXON Lv1 Gothic Low/NEXON Lv1 Gothic Low OTF Light.eot",revision:"2faade680d11d29b47f5024cc96d1d2a"},{url:"/fonts/NEXON_Lv1_Gothic_total/WEB_NEXON Lv1 Gothic Low/NEXON Lv1 Gothic Low OTF Light.woff",revision:"06dd5d730236b2b9f31aa61b670ed147"},{url:"/fonts/NEXON_Lv1_Gothic_total/WEB_NEXON Lv1 Gothic Low/NEXON Lv1 Gothic Low OTF.eot",revision:"72293bbbef7de79ff3694f61953465a2"},{url:"/fonts/NEXON_Lv1_Gothic_total/WEB_NEXON Lv1 Gothic Low/NEXON Lv1 Gothic Low OTF.woff",revision:"b1bbb768bffd1f565179da3837e83804"},{url:"/fonts/NEXON_Lv1_Gothic_total/WEB_NEXON Lv1 Gothic/NEXON Lv1 Gothic OTF Bold.eot",revision:"e6ccdfda26779da32c639289a04576c9"},{url:"/fonts/NEXON_Lv1_Gothic_total/WEB_NEXON Lv1 Gothic/NEXON Lv1 Gothic OTF Bold.woff",revision:"1ec5e5be9824777549545226bf9d3183"},{url:"/fonts/NEXON_Lv1_Gothic_total/WEB_NEXON Lv1 Gothic/NEXON Lv1 Gothic OTF Light.eot",revision:"99c4d4173aa8dc8b0f2589c3397bd7fc"},{url:"/fonts/NEXON_Lv1_Gothic_total/WEB_NEXON Lv1 Gothic/NEXON Lv1 Gothic OTF Light.woff",revision:"90e24b5bfaf03bb5c1376520f459ec62"},{url:"/fonts/NEXON_Lv1_Gothic_total/WEB_NEXON Lv1 Gothic/NEXON Lv1 Gothic OTF.eot",revision:"295665f19d34432374d11a055a013d69"},{url:"/fonts/NEXON_Lv1_Gothic_total/WEB_NEXON Lv1 Gothic/NEXON Lv1 Gothic OTF.woff",revision:"23f41a277eb53b594f7218e45370dd23"},{url:"/images/about_pic.jpeg",revision:"ba70b7c464c43f6340ab0965a6f4cd17"},{url:"/images/female-chef.jpg",revision:"ad90c6380aeae77cdf03e70beaf455b2"},{url:"/images/icons/beef.svg",revision:"9d5c3d9471c677c18fa62b4888332541"},{url:"/images/icons/birthday.png",revision:"7beb122f933c8ec123a7cd99ee180d96"},{url:"/images/icons/bussiness.png",revision:"1de392ebe3f505e07b5f977a667a201d"},{url:"/images/icons/bussiness2.png",revision:"d2532b51315f87100d5b88f20b626e08"},{url:"/images/icons/eventPlace/banquet-white.png",revision:"13390d968cc859b9202f69f3f7165dca"},{url:"/images/icons/eventPlace/banquet.png",revision:"e458c24daae3b9b595ebafbe1bea12d2"},{url:"/images/icons/eventPlace/custom-white.png",revision:"66875b0c63ec1f8fd1bb46a6f5c22948"},{url:"/images/icons/eventPlace/custom.png",revision:"28e5817b15ea726f740352af6ef58af7"},{url:"/images/icons/eventPlace/gym-white.png",revision:"8b0607e1bc01fd49fa8815e2dc3ac832"},{url:"/images/icons/eventPlace/gym.png",revision:"4ea70ada090f8cc9d5fe205e3826ff32"},{url:"/images/icons/eventPlace/hotel-white.png",revision:"d1c0a3309efce969d0e45b4f6decd193"},{url:"/images/icons/eventPlace/hotel.png",revision:"e7d66965565a784cd1489c88d2bfb6f0"},{url:"/images/icons/eventPlace/indoor-white.png",revision:"340baa3d17374119254ae05933889a9a"},{url:"/images/icons/eventPlace/indoor.png",revision:"ab2678189eb452d2e8cefb618b657dde"},{url:"/images/icons/eventPlace/outdoor-white.png",revision:"d97e6f3da38c2a313f1c662ae15da021"},{url:"/images/icons/eventPlace/outdoor.png",revision:"9597482cce621a927daea9cbb4b3c95e"},{url:"/images/icons/eventPlace/unknown-white.png",revision:"098ec4bbc1d620defd103416b813c064"},{url:"/images/icons/eventPlace/unknown.png",revision:"d6cb0047561c0df034fec4c448b37ab2"},{url:"/images/icons/festival.png",revision:"e2ed18dc04a3782a8ac39fafb99b301f"},{url:"/images/icons/festival2.png",revision:"ae9ae8bb6bdae5880f68245dba06d72b"},{url:"/images/icons/fingerfood.png",revision:"9adccbf22f825cb94ea56bfb055cd4f0"},{url:"/images/icons/flag.png",revision:"1e4cfacfe92ae0b9f42abf83a09c3ba6"},{url:"/images/icons/hanbok.png",revision:"7a44390f33895d9b9d971b5acb4fe620"},{url:"/images/icons/hanbok2.png",revision:"1440ff2b20c86a0bce27559bb9776fd6"},{url:"/images/icons/name.png",revision:"572a2e4fc9bcc4ab68aeffceb3a09022"},{url:"/images/icons/note.png",revision:"c20861e8a9747a7df4992994869a72d4"},{url:"/images/icons/other.png",revision:"87b6a08ea4bbe219a2f8e15742368a35"},{url:"/images/icons/pen.png",revision:"843130e865c4243440431ad6a8089339"},{url:"/images/icons/phone.png",revision:"e42b12229007dff8ebfd22a3db617cd6"},{url:"/images/icons/public.png",revision:"bdf591ef27d12897d6320a1908f79d78"},{url:"/images/icons/steak.png",revision:"321bbe0c76d4d9ba738b93f98cb9be75"},{url:"/images/icons/steak2.png",revision:"8ffb261f1aec70ab41392e509bc37d0f"},{url:"/images/icons/wedding.png",revision:"1cc5395d2dd4a136482fbee3587c4d6a"},{url:"/images/icons/wedding2.png",revision:"5ca1564c4080fa42b85575da7ede0020"},{url:"/images/icons/wedding3.png",revision:"0d0c98aa728617a5dae9090ba1c41b32"},{url:"/images/icons/wedding4.png",revision:"f88f680d0ea167c7282f6e17eb26b9e7"},{url:"/images/icons/write.png",revision:"365221933e82efc571de74110f91bf7d"},{url:"/images/logo-removebg.png",revision:"57e4e11433879d51dd79a4d7e1b1f8ff"},{url:"/images/logo.png",revision:"50f60d803ba53d18649c7e4ca7e87eae"},{url:"/images/optimized/africa.jpeg",revision:"42b419f57837d59415d70bf55c250291"},{url:"/images/optimized/bert-hall.jpeg",revision:"0ce9e683a37abe975483684dd3cd352c"},{url:"/images/optimized/bert-wedd.jpeg",revision:"90f5814e5f166d73f32b4b8cbb79275c"},{url:"/images/optimized/bertelli.jpeg",revision:"1935423bad44da7def16505fdb74b1b2"},{url:"/images/optimized/brett.jpeg",revision:"c12d067b86666e09b6f98b49ce5adbde"},{url:"/images/optimized/ciling.jpeg",revision:"71364ab542dab18f19f4c34f08db24bd"},{url:"/images/optimized/govea.jpeg",revision:"409e7c9c2ff96a4c92ee95277c12789e"},{url:"/images/optimized/naim.jpeg",revision:"1fc2ec52c4b7fd0f39a3542964c7a05f"},{url:"/images/optimized/optimized_trivet.jpeg",revision:"9679afb4951744f9217d5c8296ac8e63"},{url:"/images/optimized/pietro.jpeg",revision:"8d2aef06acf4e024adae63bbc98deb5d"},{url:"/images/optimized/rene.jpeg",revision:"0ff7423cb769cb442ba0cd5f6e998e7e"},{url:"/images/optimized/reserveHero.jpeg",revision:"ff18937e6820aa6d8550c230b48cbe8a"},{url:"/images/optimized/skyline.jpeg",revision:"4aab6cd7605e82358a646d28d0c0570b"},{url:"/images/optimized/trivet.jpeg",revision:"6b7cca0857d1f613b7256a3d6fa54897"},{url:"/images/real/birthday.jpg",revision:"03cf0f183432acde62f747fe31e61de0"},{url:"/images/real/business.jpg",revision:"03cf0f183432acde62f747fe31e61de0"},{url:"/images/real/bussiness/1.jpeg",revision:"87097af87ca3aff36b2bae6b44c45f7a"},{url:"/images/real/bussiness/2.jpeg",revision:"2b27f7e8d06a3038a32ff9dcdc8cdf11"},{url:"/images/real/bussiness/3.jpeg",revision:"df611685413778c52b635e2644a0c01b"},{url:"/images/real/bussiness/4.jpeg",revision:"7861a977986f9fae268f715201bebf82"},{url:"/images/real/bussiness/5.jpeg",revision:"e9842cd048804a77775bc1d543eb5983"},{url:"/images/real/bussiness/6.jpeg",revision:"a456f9f5ab34008a3717b79ddcd58e24"},{url:"/images/real/bussiness/7.jpeg",revision:"6f0d23455d17523a5be0b278465708b5"},{url:"/images/real/bussiness/8.jpeg",revision:"6f1cc4314b8e7be2fbd6b94cea48b841"},{url:"/images/real/bussiness/9.jpeg",revision:"ea9c9020b2b50f04a75cadbdca9604c6"},{url:"/images/real/bussiness/large_business.jpeg",revision:"9816184cbfe311c20061e23ca70f0322"},{url:"/images/real/default/1.jpg",revision:"03cf0f183432acde62f747fe31e61de0"},{url:"/images/real/default/2.jpg",revision:"03cf0f183432acde62f747fe31e61de0"},{url:"/images/real/default/3.jpg",revision:"03cf0f183432acde62f747fe31e61de0"},{url:"/images/real/default/4.jpg",revision:"03cf0f183432acde62f747fe31e61de0"},{url:"/images/real/default/5.jpg",revision:"03cf0f183432acde62f747fe31e61de0"},{url:"/images/real/default/6.jpg",revision:"e269d80c13548d09c02d2c7cd98de117"},{url:"/images/real/festival.jpg",revision:"03cf0f183432acde62f747fe31e61de0"},{url:"/images/real/fingerFood.jpg",revision:"03cf0f183432acde62f747fe31e61de0"},{url:"/images/real/outside/야외2.jpg",revision:"9d5c94a0448fa55331cd1e1e1a6dbb22"},{url:"/images/real/outside/야외4.jpg",revision:"41fb0cb2591b5bcd53659c767cabf6e9"},{url:"/images/real/outside/야외7.jpg",revision:"428524958be0af70aecc0586563af4ae"},{url:"/images/real/outside/야외행사(오스갤러리1).jpg",revision:"fc019b8e42b72afa2e2063b9dee4a451"},{url:"/images/real/outside/야외행사(오스갤러리2.jpg",revision:"08e4ba8191e9d606015b22231e4b3434"},{url:"/images/real/outside/야외행사(오스갤러리3.jpg",revision:"7d8f21b522f23f6342623b252824f371"},{url:"/images/real/outside/야외행사(오스갤러리4.jpg",revision:"b03ab3e3b0f8b5096e1d8be332e85b74"},{url:"/images/real/outside/야외행사2.jpg",revision:"03cf0f183432acde62f747fe31e61de0"},{url:"/images/real/outside/야외행사3.jpg",revision:"d70f6958ced2fde0f6ae788dccba770b"},{url:"/images/real/public.jpg",revision:"03cf0f183432acde62f747fe31e61de0"},{url:"/images/real/steak.jpg",revision:"03cf0f183432acde62f747fe31e61de0"},{url:"/images/real/wedding.jpg",revision:"e269d80c13548d09c02d2c7cd98de117"},{url:"/images/real/wedding/스몰웨딩5.jpg",revision:"7eeb777d6a04b9138a7fd08bd59c1eb8"},{url:"/images/real/wedding/스몰웨딩6.jpg",revision:"0c9cfd8d229cd7757625c19643569763"},{url:"/images/real/wedding/스테이크2.jpg",revision:"b36a4dc3c79b46d01326a553c3002642"},{url:"/images/real/wedding/스테이크3.jpg",revision:"28e2c1d16da18262d4ee9736794badaf"},{url:"/images/real/wedding/스테이크4.jpg",revision:"11d743c520503d0ce26cb65090e5d4df"},{url:"/images/team-work.gif",revision:"0db187a3613ac874485a10e777a89ef5"},{url:"/manifest.json",revision:"c8db405625797c0d7967ee5bbc0cb392"},{url:"/manifest/icon-192x192.png",revision:"8a105e6ed21262eceb786610fae9590f"},{url:"/manifest/icon-256x256.png",revision:"bfa2e744f11ace76a13d913fb140d7fa"},{url:"/manifest/icon-384x384.png",revision:"3dfb130920fdbf8f3c6a09e388a950d3"},{url:"/manifest/icon-512x512.png",revision:"74bc9efd1d66abe57d2086eea9094e27"},{url:"/sw 2.js",revision:"8b9bd3abef0b653c0e9edc3b49db6acc"},{url:"/sw.js 2.map",revision:"f6036e23503ed33090b436b8221c0b81"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:i,event:a,state:s})=>i&&"opaqueredirect"===i.type?new Response(i.body,{status:200,statusText:"OK",headers:i.headers}):i}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const i=e.pathname;return!i.startsWith("/api/auth/")&&!!i.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
