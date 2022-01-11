(this["webpackJsonpreact-rails-api-project-template-client"]=this["webpackJsonpreact-rails-api-project-template-client"]||[]).push([[0],{36:function(e,t,n){},42:function(e,t,n){},94:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(37),r=n.n(s),l=(n(42),n(2)),o=n(5),i=n(0),d=a.a.createContext();function j(e){var t=e.children,n=Object(c.useState)(),a=Object(l.a)(n,2),s=a[0],r=a[1];return Object(i.jsx)(d.Provider,{value:{user:s,setUser:r},children:t})}var b=n(20);function u(e){var t=e.setUser;return Object(i.jsx)("nav",{className:"navbar navbar-expand-xl text-light bg-dark",children:Object(i.jsxs)("div",{className:"container-fluid",children:[Object(i.jsx)("a",{className:"navbar-brand text-light ",children:" | MapBook Memories  |"}),Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarWithDropdown","aria-controls":"navbarWithDropdown","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsx)("div",{className:"collapse navbar-collapse show",id:"navbarWithDropdown",children:Object(i.jsxs)("ul",{className:"navbar-nav",children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("a",{className:"nav-link active text-light","aria-current":"",href:"/",children:"DashBoard"})}),Object(i.jsxs)("li",{className:"nav-item dropdown",children:[Object(i.jsx)("a",{className:"nav-link dropdown-toggle text-light",href:"#",id:"navbarDropdownMenuLink",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Places"}),Object(i.jsxs)("ul",{className:"dropdown-menu","aria-labelledby":"navbarDropdownMenuLink",children:[Object(i.jsx)("li",{children:Object(i.jsx)("a",{className:"dropdown-item",href:"/places/collection",children:"Collection"})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{className:"dropdown-item",href:"/places/new",children:"Add Place"})})]})]}),Object(i.jsxs)("li",{className:"nav-item dropdown",children:[Object(i.jsx)("a",{className:"nav-link dropdown-toggle text-light",href:"#",id:"navbarDropdownMenuLink",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Trips"}),Object(i.jsxs)("ul",{className:"dropdown-menu","aria-labelledby":"navbarDropdownMenuLink",children:[Object(i.jsx)("li",{children:Object(i.jsx)("a",{className:"dropdown-item",href:"/trips/collection",children:"Collection"})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{className:"dropdown-item",href:"/trips/gallery",children:"Gallery"})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{className:"dropdown-item",href:"/trips/new",children:"Add Trip"})})]})]}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(b.GoogleLogout,{className:"nav-link",buttonText:"Logout",onLogoutSuccess:function(e){fetch("/logout",{method:"DELETE"}).then(t())}})})]})})]})})}var m=n(4),h=n.n(m),O=(n(10),n(7)),p=n.n(O),f=(n(11),{width:"90vw",height:"50vh",padding:"5em",border:"5px solid"}),x=function(){var e=Object(c.useState)(null),t=Object(l.a)(e,2),n=t[0],a=t[1],s=Object(c.useRef)(null),r=Object(c.useState)(-98.1),o=Object(l.a)(r,2),d=o[0],j=o[1],b=Object(c.useState)(39.5),u=Object(l.a)(b,2),m=u[0],O=u[1],x=Object(c.useState)(3),g=Object(l.a)(x,2),v=g[0],k=g[1],N=Object(c.useState)({lng:"",lat:""}),w=Object(l.a)(N,2),C=(w[0],w[1],Object(c.useState)([{id:1,lng:d,lat:m}])),S=Object(l.a)(C,2);S[0],S[1];return Object(c.useEffect)((function(){fetch("/places").then((function(e){return e.json()})).then((function(e){return console.log(e)}))}),[]),Object(c.useEffect)((function(){fetch("/trips").then((function(e){return e.json()})).then((function(e){return console.log(e)}))}),[]),Object(c.useEffect)((function(){h.a.accessToken="pk.eyJ1IjoiYWRhbW1vb3JlMjEiLCJhIjoiY2t4NTY4MmxkMjE3MTJ1bXI0c2hkcWF4MCJ9.4mGlkslBlwc6tAmqbmUuoA";n||function(e){var t=e.setMap,n=e.mapContainer,c=new h.a.Map({container:n.current,style:"mapbox://styles/mapbox/streets-v11",center:[-98.1,39.5],zoom:3}),a=new p.a({accessToken:h.a.accessToken,mapboxgl:h.a,marker:!1});c.addControl(a,"top-right"),c.on("load",(function(){t(c),c.resize()})),c.on("move",(function(){j(c.getCenter().lng.toFixed(6)),O(c.getCenter().lat.toFixed(6)),k(c.getZoom().toFixed(3))}))}({setMap:a,mapContainer:s})}),[n]),Object(i.jsxs)("div",{className:"row",children:[Object(i.jsxs)("div",{className:"sidebar text center col-xs-5",children:["Center Of Map: Longitude: ",d," | Latitude: ",m," | Zoom: ",v]}),Object(i.jsx)("div",{ref:function(e){return s.current=e},style:f})]})},g=n(14),v=n.n(g),k=n(21);function N(e){var t=e.setUser,n=Object(o.f)();function c(e){return a.apply(this,arguments)}function a(){return(a=Object(k.a)(v.a.mark((function e(c){var a,s;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/auth_users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:c.profileObj.name,givenName:c.profileObj.givenName,email:c.profileObj.email,imageUrl:c.profileObj.imageUrl,password:c.profileObj.googleId,password_confirmation:c.profileObj.googleId})});case 2:return a=e.sent,e.next=5,a.json();case 5:s=e.sent,a.ok?(console.log(s),fetch("/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:c.profileObj.email,password:c.profileObj.googleId})}).then((function(e){return e.json()})).then((function(e){n("/"),t(e)}))):alert(s.errors.join("\n \n"));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(i.jsxs)("div",{className:"landingpage center",children:[Object(i.jsx)("img",{className:"logo",src:"https://i.imgur.com/rsLrCNh.png",alt:"logo"}),Object(i.jsx)(b.GoogleLogin,{clientId:"135982098217-qg8k3ulv2qcbmjvb5jc0qjdmb6ehbtnr.apps.googleusercontent.com",buttonText:"Access",onSuccess:c,onFailure:c,cookiePolicy:"single_host_origin",fetchBasicProfile:"true"})]})}n(36);var w=n(3),C={width:"80vw",height:"50vh",margin:"10em",border:"5px solid"};function S(e){var t=e.setPlaceData,n=e.placeData,a=Object(c.useState)(null),s=Object(l.a)(a,2),r=s[0],o=s[1],d=Object(c.useRef)(null);return Object(c.useEffect)((function(){h.a.accessToken="pk.eyJ1IjoiYWRhbW1vb3JlMjEiLCJhIjoiY2t4NTY4MmxkMjE3MTJ1bXI0c2hkcWF4MCJ9.4mGlkslBlwc6tAmqbmUuoA";r||function(e){var c=e.setMap,a=e.mapContainer,s=new h.a.Map({container:a.current,style:"mapbox://styles/mapbox/streets-v11",center:[-98.1,39.5],zoom:3}),r=new p.a({accessToken:h.a.accessToken,mapboxgl:h.a,marker:!1});s.addControl(r,"top-right"),s.on("load",(function(){c(s),s.resize()})),s.on("click",(function(e){console.log(e.lngLat),t(Object(w.a)(Object(w.a)({},n),{},{latitude:e.lngLat.lat.toFixed(6),longitude:e.lngLat.lng.toFixed(6)}))}))}({setMap:o,mapContainer:d})}),[r]),Object(i.jsx)("div",{children:Object(i.jsx)("div",{ref:function(e){return d.current=e},style:C})})}var T={width:"80vw",height:"50vh",margin:"10em",border:"5px solid"};function M(e){var t=e.setPlaceData,n=e.placeData,a=Object(c.useState)(null),s=Object(l.a)(a,2),r=s[0],o=s[1],d=Object(c.useRef)(null),j=Object(c.useState)(n),b=Object(l.a)(j,2),u=(b[0],b[1],Object(c.useState)(!1)),m=Object(l.a)(u,2),O=m[0],f=m[1];Object(c.useEffect)((function(){console.log(n),h.a.accessToken="pk.eyJ1IjoiYWRhbW1vb3JlMjEiLCJhIjoiY2t4NTY4MmxkMjE3MTJ1bXI0c2hkcWF4MCJ9.4mGlkslBlwc6tAmqbmUuoA";r||function(e){var n=e.setMap,c=e.mapContainer,a=(e.placeData,new h.a.Map({container:c.current,style:"mapbox://styles/mapbox/streets-v11",center:[-98.1,39.5],zoom:3})),s=new p.a({accessToken:h.a.accessToken,mapboxgl:h.a,marker:!1});a.addControl(s,"top-right"),a.on("load",(function(){n(a),a.resize()})),a.on("click",(function(e){t({latitude:e.lngLat.lat.toFixed(6),longitude:e.lngLat.lng.toFixed(6)})}))}({setMap:o,mapContainer:d})}),[r]);return Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{ref:function(e){return d.current=e},style:T}),Object(i.jsx)("button",{onClick:function(){return function(){console.log(n);var e=new h.a.Marker({color:"black",draggable:!0});O||e.setLngLat([n.longitude,n.latitude]).addTo(r),e.on("dragend",(function(e){var n=e.target.getLngLat();t({latitude:n.lat,longitude:n.lng})})),f(!0)}()},children:"Show Editable Marker"})]})}function y(){var e=Object(o.g)(),t=Object(o.f)(),n=Object(c.useState)({name:"",longitude:"",latitude:"",description:"",visited:!1}),a=Object(l.a)(n,2),s=a[0],r=a[1];Object(c.useEffect)((function(){e.id&&fetch("/places/".concat(e.id)).then((function(e){return e.json()})).then((function(e){r(e)}))}),[]);var d=function(){var n=Object(k.a)(v.a.mark((function n(c){var a,r;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c.preventDefault(),console.log(s),n.next=4,fetch(e.id?"/places/".concat(e.id):"/places",{method:e.id?"PATCH":"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});case 4:return a=n.sent,n.next=7,a.json();case 7:r=n.sent,a.ok?(console.log(r),t("/places/".concat(r.id))):(console.log(r),t("/"));case 9:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(i.jsxs)("div",{children:[e.id?Object(i.jsx)(M,{setPlaceData:r,placeData:s}):Object(i.jsx)(S,{setPlaceData:r,placeData:s}),Object(i.jsx)("div",{className:"container-fluid mt-5 ",children:Object(i.jsx)("div",{className:"row",children:Object(i.jsxs)("form",{className:"",onSubmit:d,children:[Object(i.jsx)("label",{className:"form-label",children:"Location Name:"}),Object(i.jsx)("input",{className:"form-control border-dark",type:"text",name:"name",value:s.name,onChange:function(e){r(Object(w.a)(Object(w.a)({},s),{},{name:e.target.value}))},required:!0}),Object(i.jsx)("label",{className:"form-label",children:"Latitude:"}),Object(i.jsx)("input",{className:"form-control border-dark",type:"text",name:"latitude",value:s.latitude,placeholder:"Click on Map",required:!0}),Object(i.jsx)("label",{className:"form-label",children:"Longitude:"}),Object(i.jsx)("input",{className:"form-control border-dark",type:"text",name:"longitude",value:s.longitude,placeholder:"Click on Map",required:!0}),Object(i.jsx)("br",{}),Object(i.jsx)("label",{className:"form-label",children:"Visited: "}),Object(i.jsx)("input",{type:"checkbox",name:"visited",value:s.visited,onChange:function(e){r(Object(w.a)(Object(w.a)({},s),{},{visited:e.target.checked}))}}),Object(i.jsx)("br",{}),Object(i.jsx)("label",{className:"form-label",children:"Description:"}),Object(i.jsx)("textarea",{id:"placeDescription",className:"form-control border-dark",name:"description",value:s.description,onChange:function(e){r(Object(w.a)(Object(w.a)({},s),{},{description:e.target.value}))}}),Object(i.jsx)("button",{id:"form-submit-button",className:"btn btn-dark mt-5",children:"Submit"})]})})})]})}var D=n(6);function L(e){var t=e.placeData,n=t?t.filter((function(e){return!0===e.visited})).length:null,c=t?t.filter((function(e){return!1===e.visited})).length:null;return Object(i.jsx)("div",{className:"row",children:Object(i.jsxs)("div",{className:"col-xs-6 mt-5 border center",children:[Object(i.jsxs)("h6",{className:"text",children:["Places Visited:",n," "]}),Object(i.jsxs)("h6",{className:"text",children:["Dream Places:",c," "]}),Object(i.jsx)(D.b,{to:"/places/collection",children:Object(i.jsx)("button",{className:"btn btn-dark m-2",children:"See All"})}),Object(i.jsx)(D.b,{to:"/places/new",children:Object(i.jsx)("button",{className:"btn btn-dark m-2",children:"Add"})})]})})}function E(e){var t=e.tripData,n=t?t.filter((function(e){return!0===e.taken})).length:null,c=t?t.filter((function(e){return!1===e.taken})).length:null;return Object(i.jsx)("div",{className:"row",children:Object(i.jsxs)("div",{className:"col-xs-3 mt-5 border center",children:[Object(i.jsxs)("h6",{className:"text",children:["Trips Taken:",n," "]}),Object(i.jsxs)("h6",{className:"text",children:["Trips Planned:",c," "]}),Object(i.jsx)(D.b,{to:"/trips/gallery",children:Object(i.jsx)("button",{className:"btn btn-dark m-2",children:"Gallery"})}),Object(i.jsx)(D.b,{to:"/trips/collection",children:Object(i.jsx)("button",{className:"btn btn-dark m-2",children:"See All"})}),Object(i.jsx)(D.b,{to:"/trips/new",children:Object(i.jsx)("button",{className:"btn btn-dark m-2",children:"Add"})})]})})}function P(e){var t=e.setPlaces,n=e.setTrips,a=Object(c.useContext)(d),s=(a.user,a.setUser,Object(c.useState)()),r=Object(l.a)(s,2),o=r[0],j=r[1],b=Object(c.useState)(),u=Object(l.a)(b,2),m=u[0],h=u[1];return Object(c.useEffect)((function(){fetch("/places").then((function(e){return e.json()})).then((function(e){t(e),j(e)}))}),[]),Object(c.useEffect)((function(){fetch("/trips").then((function(e){return e.json()})).then((function(e){n(e),h(e)}))}),[]),Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)(L,{placeData:o}),Object(i.jsx)(E,{tripData:m}),Object(i.jsx)(x,{})]})}n(93),n(92);function J(e){var t=e.place,n=Object(o.f)();return Object(i.jsxs)("div",{className:"card border-dark m-3 blogcard",children:[Object(i.jsx)("div",{className:"card-header ",children:Object(i.jsxs)("div",{className:"d-inline-block ms-3",children:[Object(i.jsx)("h5",{className:"card-title",children:t.name}),Object(i.jsxs)("h6",{className:"card-subtitle mb-2 text-muted",children:["Latitude: ",t.latitude," , Longitude: ",t.longitude]}),Object(i.jsxs)("p",{children:["Visit Status:",t.visited?"Congrats! You've been here":"Not yet visited"]})]})}),Object(i.jsxs)("div",{className:"card-body",children:[Object(i.jsx)("p",{className:"card-text",children:t.description}),Object(i.jsx)("button",{className:"btn btn-dark",onClick:function(){n("/places/".concat(t.id))},children:"Full Details"})]})]})}var I={width:"80vw",height:"50vh",margin:"10em",border:"5px solid"};function _(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)([]),r=Object(l.a)(s,2),o=r[0],j=r[1],b=Object(c.useState)(null),u=Object(l.a)(b,2),m=u[0],O=u[1],f=Object(c.useRef)(null),x=Object(c.useState)(!1),g=Object(l.a)(x,2),v=(g[0],g[1],Object(c.useState)()),k=Object(l.a)(v,2),N=(k[0],k[1],Object(c.useContext)(d)),w=N.user;N.setUser;return console.log(w),Object(c.useEffect)((function(){h.a.accessToken="pk.eyJ1IjoiYWRhbW1vb3JlMjEiLCJhIjoiY2t4NTY4MmxkMjE3MTJ1bXI0c2hkcWF4MCJ9.4mGlkslBlwc6tAmqbmUuoA";fetch("/places").then((function(e){return e.json()})).then((function(e){console.log(e),a(e),j(e)})),n.map((function(e){var t=new h.a.Popup({offset:25}).setHTML("<h6>".concat(e.name,"</h6>"));console.log(e.visited),e.visited?new h.a.Marker({color:"green",offset:[0,-25]}).setLngLat([e.longitude,e.latitude]).setPopup(t).addTo(m):e.visted||new h.a.Marker({color:"red",offset:[0,-25]}).setLngLat([e.longitude,e.latitude]).setPopup(t).addTo(m)})),m||function(e){var t=e.setMap,n=e.mapContainer,c=new h.a.Map({container:n.current,style:"mapbox://styles/mapbox/streets-v11",center:[-98.1,39.5],zoom:3}),a=new p.a({accessToken:h.a.accessToken,mapboxgl:h.a,marker:!1});c.addControl(a,"top-right"),c.on("load",(function(){t(c),c.resize()}))}({setMap:O,mapContainer:f})}),[m]),o===[]&&console.log("yay"),Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{ref:function(e){return f.current=e},style:I}),Object(i.jsx)("form",{onSubmit:function(e){e.preventDefault()},className:"d-flex ms-auto z-1",children:Object(i.jsx)("input",{className:"form-control me-2 ",role:"search",type:"search",placeholder:"Search by place name","aria-label":"Search",onChange:function(e){var t=n.filter((function(t){return t.name.toLowerCase().includes(e.target.value.toLowerCase())}));j(t)}})}),Object(i.jsx)("div",{className:"mt-5",children:o.map((function(e){return Object(i.jsx)(J,{className:"mt-2",place:e},e.id)}))})]})}var A={width:"90vw",height:"50vh",margin:"10em",padding:"5em",border:"5px solid"};function W(e){var t=e.placeDetails,n=(t.visited,Object(c.useState)(null)),a=Object(l.a)(n,2),s=a[0],r=a[1],o=Object(c.useRef)(null),d=Object(c.useState)({}),j=Object(l.a)(d,2),b=j[0],u=j[1];return Object(c.useEffect)((function(){h.a.accessToken="pk.eyJ1IjoiYWRhbW1vb3JlMjEiLCJhIjoiY2t4NTY4MmxkMjE3MTJ1bXI0c2hkcWF4MCJ9.4mGlkslBlwc6tAmqbmUuoA";if(fetch("/places/".concat(t.id)).then((function(e){return e.json()})).then((function(e){console.log(e),u(e)})),b.latitude){var e=new h.a.Popup({offset:25}).setHTML("<h6>".concat(b.name,"</h6>"));b.visited?new h.a.Marker({color:"green",offset:[0,-25]}).setLngLat([b.longitude,b.latitude]).setPopup(e).addTo(s):b.visted||new h.a.Marker({color:"red",offset:[0,-25]}).setLngLat([b.longitude,b.latitude]).setPopup(e).addTo(s)}s||function(e){var t=e.setMap,n=e.mapContainer,c=(e.placeDetails,new h.a.Map({container:n.current,style:"mapbox://styles/mapbox/streets-v11",center:[-98.1,39.5],zoom:3})),a=new p.a({accessToken:h.a.accessToken,mapboxgl:h.a,marker:!1});c.addControl(a,"top-right"),c.on("load",(function(){t(c),c.resize()}))}({setMap:r,mapContainer:o})}),[s]),Object(i.jsx)("div",{children:Object(i.jsx)("div",{ref:function(e){return o.current=e},style:A})})}function F(){var e=Object(o.g)(),t=Object(o.f)(),n=Object(c.useState)(),a=Object(l.a)(n,2),s=a[0],r=a[1],d=Object(c.useState)(!1),j=Object(l.a)(d,2),b=j[0],u=j[1];return Object(c.useEffect)((function(){fetch("/places/".concat(e.id)).then((function(e){e.ok?e.json().then((function(e){return r(e)})):e.json().then((function(e){return console.log(e.errors[0])}))}))}),[]),console.log(s),s||t("/"),console.log(s),s?Object(i.jsxs)("div",{children:[b?Object(i.jsx)(W,{placeDetails:s}):null,Object(i.jsxs)("div",{className:"card",children:[Object(i.jsx)("div",{className:"card-header",children:Object(i.jsx)("h3",{children:s.name})}),Object(i.jsxs)("div",{className:"card-body",children:[Object(i.jsxs)("h6",{className:"card-title",children:["Latitude: ",s.latitude," Longitude: ",s.longitude]}),Object(i.jsx)("em",{className:"card-text",children:s.visited?"Visited: True":"Visited: False"}),Object(i.jsxs)("p",{classNameName:"card-text",children:[" Description: ",s.description]}),Object(i.jsx)("button",{className:"btn btn-dark m-2",onClick:function(){return u(!b)},children:"Show Interactive Map"}),Object(i.jsx)("button",{className:"btn btn-dark m-2",onClick:function(e){return function(e){t("/places/".concat(e.id,"/edit"))}(s)},children:"Edit Place"}),Object(i.jsx)("button",{className:"btn btn-dark m-2",onClick:function(n){!0===window.confirm("Delete Place?")?(fetch("/places/".concat(e.id),{method:"DELETE"}).then((function(e){return e.json()})).then((function(e){return console.log(e)})).catch((function(e){return console.log(e.errors)})),t("/")):console.log("Delete canceled")},children:"Delete Place"})]}),Object(i.jsx)("div",{class:"card-footer text-muted"})]})]}):Object(i.jsx)("div",{children:Object(i.jsx)("h3",{children:"No Place Found"})})}function Y(e){var t=e.trip,n=Object(o.f)();return Object(i.jsxs)("div",{className:"card border-dark m-3 blogcard",children:[Object(i.jsx)("div",{className:"card-header ",children:Object(i.jsxs)("div",{className:"d-inline-block ms-3",children:[Object(i.jsx)("h5",{className:"card-title",children:t.name}),Object(i.jsxs)("h6",{className:"card-subtitle mb-2 text-muted",children:["Start Date: ",t.start_date," End Date: ",t.end_date]}),Object(i.jsxs)("p",{children:["Status: ",t.taken?"Taken":"Planned"]})]})}),Object(i.jsx)("div",{className:"card-body",children:Object(i.jsx)("button",{className:"btn btn-dark",onClick:function(){n("/trips/".concat(t.id))},children:"Full Details"})})]})}function U(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=(t[0],t[1]),a=Object(c.useState)([]),s=Object(l.a)(a,2),r=s[0],o=s[1],j=Object(c.useContext)(d);j.user,j.setUser;return Object(c.useEffect)((function(){fetch("/trips").then((function(e){return e.json()})).then((function(e){console.log(e),n(e),o(e)}))}),[]),Object(i.jsx)("div",{children:r.map((function(e){return Object(i.jsx)(Y,{trip:e},e.id)}))})}var q={width:"90vw",height:"50vh",margin:"10em",padding:"5em",border:"5px solid"};function z(e){var t=e.place,n=Object(c.useState)(null),a=Object(l.a)(n,2),s=a[0],r=a[1],o=Object(c.useRef)(null);return Object(c.useEffect)((function(){h.a.accessToken="pk.eyJ1IjoiYWRhbW1vb3JlMjEiLCJhIjoiY2t4NTY4MmxkMjE3MTJ1bXI0c2hkcWF4MCJ9.4mGlkslBlwc6tAmqbmUuoA";s||function(e){var n=e.setMap,c=e.mapContainer,a=new h.a.Map({container:c.current,style:"mapbox://styles/mapbox/streets-v11",center:[-98.1,39.5],zoom:3}),s=new p.a({accessToken:h.a.accessToken,mapboxgl:h.a,marker:!1});a.addControl(s,"top-right"),a.on("load",(function(){n(a),a.resize()}));var r=new h.a.Popup({offset:45});t&&r.setHTML("<h6> Location: ".concat(t.name,"</h6>")),t.visited?new h.a.Marker({color:"green",anchor:"bottom"}).setLngLat([t.longitude,t.latitude]).setPopup(r).addTo(a):new h.a.Marker({color:"red",anchor:"bottom"}).setLngLat([t.longitude,t.latitude]).setPopup(r).addTo(a)}({setMap:r,mapContainer:o})}),[s]),Object(i.jsx)("div",{children:Object(i.jsx)("div",{ref:function(e){return o.current=e},style:q})})}function R(){var e=Object(o.g)(),t=Object(o.f)(),n=Object(c.useState)(),a=Object(l.a)(n,2),s=a[0],r=a[1],d=Object(c.useState)(!1),j=Object(l.a)(d,2),b=j[0],u=j[1],m=Object(c.useState)({}),h=Object(l.a)(m,2),O=h[0],p=h[1];return Object(c.useEffect)((function(){fetch("/trips/".concat(e.id)).then((function(e){e.ok?e.json().then((function(e){console.log(e),r(e),fetch("/places/".concat(e.place_id)).then((function(e){return e.json()})).then((function(e){return p(e)}))})):e.json().then((function(e){return console.log(e)}))}))}),[]),s?(console.log(s),Object(i.jsxs)("div",{children:[b?Object(i.jsx)(z,{tripDetails:s,place:O}):null,Object(i.jsxs)("div",{className:"card",children:[Object(i.jsx)("div",{className:"card-header",children:Object(i.jsx)("h3",{children:s.name})}),Object(i.jsxs)("div",{className:"card-body",children:[Object(i.jsxs)("h6",{className:"card-title",children:["Start Date: ",s.start_date," End Date: ",s.end_date]}),Object(i.jsxs)("em",{className:"card-text",children:["Status: ",s.taken?"Taken":"Planned"]}),Object(i.jsxs)("p",{classNameName:"card-text",children:[" Description: ",s.description]}),Object(i.jsx)("button",{className:"btn btn-dark m-2",onClick:function(){u((function(e){return!e}))},children:b?"Hide Map":"Show Map"}),Object(i.jsx)("button",{className:"btn btn-dark m-2",onClick:function(n){!0===window.confirm("Delete Trip? All images will also be deleted!")?(fetch("/trips/".concat(e.id),{method:"DELETE"}).then((function(e){return e.json()})).then((function(e){return console.log(e)})).catch((function(e){return console.log(e.errors)})),t("/trips/collection")):console.log("Delete canceled")},children:"Delete Trip"}),Object(i.jsx)("button",{className:"btn btn-dark m-2",onClick:function(){return t("/trips/".concat(s.id,"/edit"))},children:"Edit Trip Info"})]}),Object(i.jsx)("div",{class:"card-footer text-muted"})]})]})):null}var B=n(9);function G(e){var t=e.user,n=Object(o.g)(),a=Object(o.f)(),s=Object(c.useState)(""),r=Object(l.a)(s,2),d=r[0],j=r[1],b=Object(c.useState)(""),u=Object(l.a)(b,2),m=u[0],h=u[1],O=Object(c.useState)(""),p=Object(l.a)(O,2),f=p[0],x=p[1],g=Object(c.useState)(""),v=Object(l.a)(g,2),k=v[0],N=v[1],w=Object(c.useState)(""),C=Object(l.a)(w,2),S=C[0],T=C[1],M=Object(c.useState)(""),y=Object(l.a)(M,2),D=y[0],L=y[1],E=Object(c.useState)({attachments:[]}),P=Object(l.a)(E,2),J=P[0],I=P[1],_=Object(c.useState)([]),A=Object(l.a)(_,2),W=A[0],F=A[1];Object(c.useEffect)((function(){n.id?fetch("/trips/".concat(n.id)).then((function(e){return e.json()})).then((function(e){j(e.name),h(e.start_date),x(e.end_date),N(e.description),L(e.taken),console.log(e.attachment_urls),console.log(e),console.log(e.place_id),fetch("/places/".concat(e.place_id)).then((function(e){return e.json()})).then((function(e){console.log(e),F(e)}))})):fetch("/places").then((function(e){return e.json()})).then((function(e){console.log(e),F(e)}))}),[]);var Y=function(e){e.preventDefault(),console.log(J);var c=e.target;console.log(d),console.log(m),console.log(D);var s=new FormData;if(s.append("name",d),s.append("user_id",t.id),s.append("place_id",S),s.append("description",k),s.append("start_date",m),s.append("end_date",f),s.append("taken",D),D)for(var r=0;r<c.attachments.files.length;r++)s.append("attachments[]",c.attachments.files[r]);fetch(n.id?"/trips/".concat(n.id):"/trips",{method:n.id?"PATCH":"POST",body:s}).then((function(e){return e.json()})).then((function(e){a("/trips/".concat(e.id))}))},U=function(e){console.log(e.target.files),I({attachments:Object(B.a)(e.target.files)})},q=function(e){T(e.target.value)};return n.id?Object(i.jsx)("div",{className:"container-fluid mt-5",children:Object(i.jsx)("div",{className:"row",children:Object(i.jsxs)("form",{className:"col-8",onSubmit:Y,children:[Object(i.jsx)("label",{className:"form-label",children:"Place:"}),Object(i.jsxs)("select",{name:"place",className:"form-control border-dark",onChange:q,required:!0,children:[Object(i.jsx)("option",{value:"Select a Place",children:" -- Select a Place -- "}),Object(i.jsx)("option",{value:W.id,children:W.name})]}),Object(i.jsx)("label",{className:"form-label",children:"Name:"}),Object(i.jsx)("input",{className:"form-control border-dark",name:"name",value:d,onChange:function(e){return j(e.target.value)},placeholder:"Trip Name",required:!0}),Object(i.jsx)("label",{className:"form-label",children:"Start Date:"}),Object(i.jsx)("input",{className:"form-control border-dark",type:"date",value:m,name:"start_date",onChange:function(e){return h(e.target.value)}}),Object(i.jsx)("label",{className:"form-label",children:"End Date:"}),Object(i.jsx)("input",{className:"form-control border-dark",type:"date",value:f,name:"end_date",onChange:function(e){return x(e.target.value)}}),Object(i.jsx)("label",{className:"form-label",children:"Trip Description:"}),Object(i.jsx)("textarea",{className:"form-control border-dark",name:"description",value:k,onChange:function(e){return N(e.target.value)}}),Object(i.jsx)("label",{className:"form-label",children:"Check if Trip Taken:"}),Object(i.jsx)("input",{type:"checkbox",name:"taken",checked:D,onChange:function(e){return L(e.target.checked)}}),Object(i.jsx)("br",{}),D?Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{className:"form-label",children:"Trip Images:"}),Object(i.jsx)("input",{className:"form-control border-dark",name:"attachments",type:"file",accept:"image/*",multiple:!0,onChange:U})]}):null,Object(i.jsx)("button",{className:"btn btn-dark",type:"submit",children:"Submit"})]})})}):Object(i.jsx)("div",{className:"container-fluid mt-5",children:Object(i.jsx)("div",{className:"row",children:Object(i.jsxs)("form",{className:"col-6",onSubmit:Y,children:[Object(i.jsx)("label",{className:"form-label",children:"Place:"}),Object(i.jsxs)("select",{required:!0,name:"place",className:"form-control border-dark",onChange:q,children:[Object(i.jsx)("option",{value:"Select a Place",children:" -- Select a Place -- "}),W.map((function(e){return Object(i.jsx)("option",{value:e.id,children:e.name})}))]}),Object(i.jsx)("label",{className:"form-label",children:"Name:"}),Object(i.jsx)("input",{className:"form-control border-dark",name:"name",value:d,onChange:function(e){return j(e.target.value)},placeholder:"Trip Name"}),Object(i.jsx)("label",{className:"form-label",children:"Start Date:"}),Object(i.jsx)("input",{className:"form-control border-dark",type:"date",value:m,name:"start_date",onChange:function(e){return h(e.target.value)}}),Object(i.jsx)("label",{className:"form-label",children:"End Date:"}),Object(i.jsx)("input",{className:"form-control border-dark",type:"date",value:f,name:"end_date",onChange:function(e){return x(e.target.value)}}),Object(i.jsx)("label",{className:"form-label",children:"Trip Description:"}),Object(i.jsx)("textarea",{className:"form-control border-dark",name:"description",value:k,onChange:function(e){return N(e.target.value)}}),Object(i.jsx)("label",{className:"form-label",children:"Check if Trip Taken:"}),Object(i.jsx)("input",{type:"checkbox",name:"taken",checked:D,onChange:function(e){return L(e.target.checked)}}),Object(i.jsx)("br",{}),D?Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{className:"form-label",children:"Trip Images:"}),Object(i.jsx)("input",{className:"form-control border-dark",name:"attachments",type:"file",accept:"image/*",multiple:!0,onChange:U})]}):null,Object(i.jsx)("button",{className:"btn btn-dark",children:"Submit"})]})})})}function H(e){var t=e.images,n=e.info;console.log(t);var a=Object(c.useState)({}),s=Object(l.a)(a,2),r=s[0],o=s[1],d=Object(c.useState)(0),j=Object(l.a)(d,2),b=j[0];j[1];console.log(n.start_date);return Object(c.useEffect)((function(){fetch("/places/".concat(n.place_id)).then((function(e){return e.json()})).then((function(e){return o(e)}))}),[]),Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{className:"card",children:Object(i.jsxs)("div",{className:"card-header",children:[Object(i.jsxs)("h2",{children:["TRIP: ",n.name]}),Object(i.jsxs)("h5",{children:["Start: ",n.start_date,", End: ",n.end_date," "]})]})}),Object(i.jsx)("div",{className:"m-3",children:t.map((function(e){return Object(i.jsx)("div",{className:"polaroid center",children:Object(i.jsx)("a",{title:r.name,children:Object(i.jsx)("img",{src:e,alt:b})})})}))})]})}function X(){var e=Object(c.useState)(!0),t=Object(l.a)(e,2),n=t[0],a=(t[1],Object(c.useState)([])),s=Object(l.a)(a,2),r=(s[0],s[1]),o=Object(c.useState)([]),d=Object(l.a)(o,2),j=d[0],b=d[1];return Object(c.useEffect)((function(){fetch("/trips").then((function(e){return e.json()})).then((function(e){r(e),b(e),console.log(e)}))}),[]),Object(i.jsx)("div",{children:j.map((function(e){var t=e,c=e.attachment_urls;return Object(i.jsx)(H,{carousel:n,images:c,info:t})}))})}var V=function(){var e=Object(c.useContext)(d),t=e.user,n=e.setUser,a=Object(c.useState)([]),s=Object(l.a)(a,2),r=(s[0],s[1]),j=Object(c.useState)([]),b=Object(l.a)(j,2),m=(b[0],b[1]);return Object(c.useEffect)((function(){fetch("/me").then((function(e){e.ok?e.json().then((function(e){return n(e)})):e.json().then((function(e){return console.log(e)})),console.log(t)}))}),[]),t?Object(i.jsxs)("div",{children:[Object(i.jsx)(u,{setUser:n}),Object(i.jsxs)(o.c,{children:[Object(i.jsx)(o.a,{path:"/",element:Object(i.jsx)(P,{setPlaces:r,setTrips:m})}),Object(i.jsx)(o.a,{path:"/places/new",element:Object(i.jsx)(y,{})}),Object(i.jsx)(o.a,{path:"/places/collection",element:Object(i.jsx)(_,{})}),Object(i.jsx)(o.a,{path:"/places/:id",element:Object(i.jsx)(F,{})}),Object(i.jsx)(o.a,{path:"/places/:id/edit",element:Object(i.jsx)(y,{})}),Object(i.jsx)(o.a,{path:"/trips/collection",element:Object(i.jsx)(U,{})}),Object(i.jsx)(o.a,{path:"/trips/:id",element:Object(i.jsx)(R,{})}),Object(i.jsx)(o.a,{path:"/trips/new",element:Object(i.jsx)(G,{user:t})}),Object(i.jsx)(o.a,{path:"/trips/:id/edit",element:Object(i.jsx)(G,{user:t})}),Object(i.jsx)(o.a,{path:"/trips/gallery",element:Object(i.jsx)(X,{})})]})]}):Object(i.jsx)(N,{setUser:n})};r.a.render(Object(i.jsx)(D.a,{children:Object(i.jsx)(j,{children:Object(i.jsx)(V,{})})}),document.getElementById("root"))}},[[94,1,2]]]);
//# sourceMappingURL=main.c52710af.chunk.js.map