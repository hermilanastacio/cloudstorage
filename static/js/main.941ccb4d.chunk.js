(this["webpackJsonpdemo.linkedin"]=this["webpackJsonpdemo.linkedin"]||[]).push([[0],{28:function(e,t,a){e.exports=a(58)},33:function(e,t,a){},34:function(e,t,a){},52:function(e,t,a){e.exports=a.p+"static/media/loading.9aed57e1.gif"},58:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),o=a(25),l=a.n(o);a(33),a(34);var r=function(){return n.a.createElement("div",{className:"App",style:{justifyContent:"center",alignItems:"center",display:"flex"}},n.a.createElement("a",{href:"".concat("https://accounts.google.com/o/oauth2/v2/auth","?scope=").concat("https%3A//www.googleapis.com/auth/drive.metadata.readonly","&access_type=").concat("offline","&response_type=").concat("code","&redirect_uri=").concat("http%3A%2F%2Flocalhost%3A3000%2Fcallback","&client_id=").concat("1017093778699-droqbb1kcsci9vsernj23hsb2m67lo3u.apps.googleusercontent.com"),style:{backgroundColor:"blue",color:"white"}},"Authenticate"))},i=a(2),s=a(9),d=a.n(s),u=function(){var e=a(52),t=Object(i.e)(),n=new URLSearchParams(Object(i.f)().search).get("code");return d.a.post("".concat("https://oauth2.googleapis.com/token","?code=").concat(n,"&client_id=").concat("1017093778699-droqbb1kcsci9vsernj23hsb2m67lo3u.apps.googleusercontent.com","&client_secret=").concat("Fc2aYwhQxp-fNHek7tgjWCV2","&redirect_uri=").concat("http%3A%2F%2Flocalhost%3A3000%2Fcallback","&grant_type=").concat("authorization_code")).then((function(e){localStorage.GDRIVE_TOKEN=e.data.access_token,t.push("/dashboard")})).catch((function(e){return console.log(e)})),c.createElement("div",{style:{height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}},c.createElement("img",{src:e,alt:"loading"}))},p=a(27),h=function(){var e=Object(c.useState)(),t=Object(p.a)(e,2),a=t[0],n=t[1],o={height:25,width:25,marginRight:10};return Object(c.useEffect)((function(){d.a.get("https://www.googleapis.com/drive/v3/files?fields=*",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("GDRIVE_TOKEN"))}}).then((function(e){n(e.data.files),console.log(e.data)})).catch((function(e){return console.log(e)}))}),[]),c.createElement("div",null,a&&a.map((function(e){return c.createElement("div",{style:{padding:"15px 10px",borderBottom:"1px solid gray",display:"flex",alignItems:"center"},key:e.id},c.createElement("img",{style:o,src:e.iconLink,alt:"thumbnail"}),c.createElement("span",null,e.name))})))},m=a(12);l.a.render(n.a.createElement(m.a,{basename:Object({NODE_ENV:"production",PUBLIC_URL:"/cloudstorage",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_CLIENT_ID:"1017093778699-droqbb1kcsci9vsernj23hsb2m67lo3u.apps.googleusercontent.com",REACT_APP_CLIENT_SECRET:"Fc2aYwhQxp-fNHek7tgjWCV2",REACT_APP_REDIRECT_URI:"http%3A%2F%2Flocalhost%3A3000%2Fcallback"}).REACT_PUBLIC_URL},n.a.createElement(i.a,{exact:!0,path:"/"},n.a.createElement(r,null)),n.a.createElement(i.a,{path:"/callback"},n.a.createElement(u,null)),n.a.createElement(i.a,{path:"/dashboard"},n.a.createElement(h,null))),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.941ccb4d.chunk.js.map