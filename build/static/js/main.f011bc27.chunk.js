(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{215:function(e,t,i){"use strict";i.r(t);var a=i(0),l=i.n(a),n=i(18),o=i.n(n),s=(i(91),i(83)),r=i(76),c=i(77),u=i(84),f=i(78),h=i(85),d=i(30),m=i(79),p=i.n(m),b=i(80),v=i.n(b),g=i(81),E=i.n(g),w=i(82),O=i.n(w),j=function(e){function t(e){var i;return Object(r.a)(this,t),(i=Object(u.a)(this,Object(f.a)(t).call(this,e))).state={fileName:"",fileErr:"",fileObject:{},fileList:[]},i.fileUpload=i.fileUpload.bind(Object(d.a)(Object(d.a)(i))),i}return Object(h.a)(t,e),Object(c.a)(t,[{key:"fileUpload",value:function(e){var t=this.state.fileList,i=Object(s.a)(e.target.files),a=i[0].name.split(".")[i[0].name.split(".").length-1],l=this.validateFile(i[0],a),n=i[0].name,o=i[0];l?this.setState({fileName:n,fileObject:o,fileList:O()(t,{$push:[n]})}):this.setState({fileName:"",fileObject:null}),console.log("This is the file",i,l),e.target.value=""}},{key:"validateFile",value:function(e,t){return e.size>=41943040?(this.setState({fileErr:"File size cannot exceed 40mb."}),!1):"txt"!==t&&"TXT"!==t&&"docx"!==t&&"DOCX"!==t&&"doc"!==t&&"DOC"!==t&&"pdf"!==t&&"PDF"!==t?(this.setState({fileErr:"Fis is not suported."}),!1):(this.setState({fileErr:""}),!0)}},{key:"render",value:function(){return console.log("FileList",this.state.fileList),l.a.createElement("div",null,l.a.createElement(v.a,null,l.a.createElement("div",null,l.a.createElement(p.a,{floatingLabelText:"Upload File...",style:{marginLeft:"30px",marginTop:"10px"},value:this.state.fileName,errorText:this.state.fileErr}),l.a.createElement(E.a,{label:"Upload",primary:!0,style:{margin:12}},l.a.createElement("input",{type:"file",style:{width:100,height:35,opacity:0,position:"absolute",left:0,top:0,cursor:"pointer",zIndex:100},onChange:this.fileUpload,"data-default-file":"",value:null}))),l.a.createElement("div",null,l.a.createElement("ul",null,this.state.fileList.length?this.state.fileList.map(function(e){return l.a.createElement("li",null," ",e," ")}):null))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},86:function(e,t,i){e.exports=i(215)},91:function(e,t,i){}},[[86,2,1]]]);
//# sourceMappingURL=main.f011bc27.chunk.js.map