(this["webpackJsonpdemo.linkedin"]=this["webpackJsonpdemo.linkedin"]||[]).push([[0],{27:function(e,t,a){e.exports=a(56)},32:function(e,t,a){},50:function(e,t,a){e.exports=a.p+"static/media/loading.9aed57e1.gif"},56:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),c=a(24),i=a.n(c),l=(a(32),a(11)),r=a(1),s=a(26),u=a(9),m=a.n(u),g=function(){var e=Object(o.useState)(),t=Object(s.a)(e,2),a=t[0],n=t[1],c={height:25,width:25,marginRight:10};return Object(o.useEffect)((function(){m.a.get("https://www.googleapis.com/drive/v3/files?fields=*",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("GDRIVE_TOKEN"))}}).then((function(e){n(e.data.files),console.log(e.data)})).catch((function(e){return console.log(e)}))}),[]),o.createElement("div",{className:"App"},a&&a.map((function(e){return o.createElement("div",{style:{padding:"15px 10px",borderBottom:"1px solid gray",display:"flex",alignItems:"center"},key:e.id},o.createElement("img",{style:c,src:e.iconLink,alt:"thumbnail"}),o.createElement("span",null,e.name))})))},d=function(){var e=a(50),t=Object(r.e)(),n=new URLSearchParams(window.location.search).get("code");if(n){m.a.post("".concat("https://oauth2.googleapis.com/token","?code=").concat(n,"&client_id=").concat("298900537007-v6978smgaflk5rpuvmjvqfuvomhfs6g1.apps.googleusercontent.com","&client_secret=").concat("Uw5Xv-P1gzhcabGqbzMiumko","&redirect_uri=").concat("https%3A%2F%2Fhermilanastacio.github.io%2Fcloudstorage%2F","&grant_type=").concat("authorization_code")).then((function(e){localStorage.GDRIVE_TOKEN=e.data.access_token,t.push("/dashboard")})).catch((function(e){return console.log(e)}))}else t.push("/login");return o.createElement("div",{style:{height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}},o.createElement("img",{src:e,alt:"loading"}))},p=function(){return o.createElement("div",{className:"App",style:{justifyContent:"center",alignItems:"center",display:"flex"}},o.createElement("a",{href:"".concat("https://accounts.google.com/o/oauth2/v2/auth","?scope=").concat("https%3A//www.googleapis.com/auth/drive.metadata.readonly","&access_type=").concat("offline","&response_type=").concat("code","&redirect_uri=").concat("https%3A%2F%2Fhermilanastacio.github.io%2Fcloudstorage%2F","&client_id=").concat("298900537007-v6978smgaflk5rpuvmjvqfuvomhfs6g1.apps.googleusercontent.com"),style:{backgroundColor:"blue",color:"white"}},"Authenticate"))};i.a.render(n.a.createElement(l.a,{basename:Object({NODE_ENV:"production",PUBLIC_URL:"/cloudstorage",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_CLIENT_ID:"298900537007-v6978smgaflk5rpuvmjvqfuvomhfs6g1.apps.googleusercontent.com",REACT_APP_CLIENT_SECRET:"Uw5Xv-P1gzhcabGqbzMiumko",REACT_APP_REDIRECT_URI:"https%3A%2F%2Fhermilanastacio.github.io%2Fcloudstorage%2F"}).REACT_PUBLIC_URL},n.a.createElement(r.a,{exact:!0,path:"/"},n.a.createElement(d,null)),n.a.createElement(r.a,{exact:!0,path:"/login"},n.a.createElement(p,null)),n.a.createElement(r.a,{path:"/dashboard"},n.a.createElement(g,null))),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.b4b98660.chunk.js.map