(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,a,t){},21:function(e,a,t){e.exports=t.p+"static/media/GoT-Song.66e4d8a0.mp3"},22:function(e,a,t){e.exports=t(54)},27:function(e,a,t){},54:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),l=t(19),s=t.n(l),h=(t(27),t(4)),r=t(5),c=t(8),o=t(6),d=t(7),m=(t(10),t(9)),u=t(1),p=t(20),g=t.n(p),v=t(3),E=t.n(v),y=t(21),C=t.n(y),A=function(e){function a(e){var t;return Object(h.a)(this,a),(t=Object(c.a)(this,Object(o.a)(a).call(this,e))).state={group:null,groupResults:[],search:"",current:null,points:[]},t.handleChange=t.handleChange.bind(Object(u.a)(Object(u.a)(t))),t.handleFindGroup=t.handleFindGroup.bind(Object(u.a)(Object(u.a)(t))),t.pointChecker=t.pointChecker.bind(Object(u.a)(Object(u.a)(t))),t}return Object(d.a)(a,e),Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;E.a.get("/current/").then(function(a){e.setState({current:a.data}),console.log("Test For Current Get"),console.log(a)}).catch(function(e){return console.log(e)})}},{key:"handleChange",value:function(e){this.setState(Object(m.a)({},e.target.name,e.target.value))}},{key:"pointChecker",value:function(e,a,t){var n=this;if(e[t][a].DoA===this.state.current[0][a].DoA){var i=this.state.points;i[t]+=1,this.setState({points:i},function(){if(!0===n.state.current[0][a].Wight&&!0===e[t][a].Wight&&"Dead"===e[t][a].DoA){var i=n.state.points;i[t]+=1,n.setState({points:i})}})}}},{key:"handleFindGroup",value:function(){var e=this,a=this.state.search.toLocaleLowerCase();E.a.get("/find/group/".concat(a,"/")).then(function(a){e.setState({groupResults:a.data},function(){for(var a=e.state.groupResults,t=[],n=0;n<a.length;n++)t.push(0);e.setState({points:t},function(){for(var t=0;t<a.length;t++){var n=e.state.groupResults;e.pointChecker(n,"jonSnow",t),e.pointChecker(n,"sansaStark",t),e.pointChecker(n,"aryaStark",t),e.pointChecker(n,"branStark",t),e.pointChecker(n,"daenerysTargaryen",t),e.pointChecker(n,"branStark",t),e.pointChecker(n,"cerseiLannister",t),e.pointChecker(n,"jaimeLannister",t),e.pointChecker(n,"tyrionLannister",t),e.pointChecker(n,"yaraGreyjoy",t),e.pointChecker(n,"theonGreyjoy",t),e.pointChecker(n,"melisandre",t),e.pointChecker(n,"jorahMormont",t),e.pointChecker(n,"hound",t),e.pointChecker(n,"mountain",t),e.pointChecker(n,"samwellTarley",t),e.pointChecker(n,"gilly",t),e.pointChecker(n,"littleSam",t),e.pointChecker(n,"varys",t),e.pointChecker(n,"brienneOfTarth",t),e.pointChecker(n,"davosSeaworth",t),e.pointChecker(n,"bronn",t),e.pointChecker(n,"pod",t),e.pointChecker(n,"tormund",t),e.pointChecker(n,"greyworm",t),e.pointChecker(n,"missandei",t),e.pointChecker(n,"gendry",t),e.pointChecker(n,"beric",t),e.pointChecker(n,"euronGreyjoy",t)}})})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{style:{height:this.props.height},className:"Form"},i.a.createElement("input",{className:"Input",type:"text",name:"search",onChange:this.handleChange}),i.a.createElement("button",{className:"Button",onClick:this.handleFindGroup},"Search"),this.state.groupResults.length>0?i.a.createElement("div",null,i.a.createElement("table",{className:"CharacterTable"},i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("th",null,"Username"),i.a.createElement("th",null,"Points")),this.state.groupResults.map(function(a,t){return i.a.createElement("tr",{key:a._id},i.a.createElement("td",null,a.username),i.a.createElement("td",null,e.state.points[t]))})))):null)}}]),a}(n.Component),b=function(e){function a(e){var t;return Object(h.a)(this,a),(t=Object(c.a)(this,Object(o.a)(a).call(this,e))).state={username:"",group:"",Jon:"Alive",JonWight:!1,Sansa:"Alive",SansaWight:!1,Arya:"Alive",AryaWight:!1,Bran:"Alive",BranWight:!1,Dany:"Alive",DanyWight:!1,Cersei:"Alive",CerseiWight:!1,Jaime:"Alive",JaimeWight:!1,Tyrion:"Alive",TyrionWight:!1,Yara:"Alive",YaraWight:!1,Theon:"Alive",TheonWight:!1,Melisandre:"Alive",MelisandreWight:!1,Jorah:"Alive",JorahWight:!1,Hound:"Alive",HoundWight:!1,Mountain:"Alive",MountainWight:!1,Samwell:"Alive",SamwellWight:!1,Gilly:"Alive",GillyWight:!1,Sam:"Alive",SamWight:!1,Varys:"Alive",VarysWight:!1,Brienne:"Alive",BrienneWight:!1,Davos:"Alive",DavosWight:!1,Bronn:"Alive",BronnWight:!1,Pod:"Alive",PodWight:!1,Tormund:"Alive",TormundWight:!1,Grey:"Alive",GreyWight:!1,Missandei:"Alive",MissandeiWight:!1,Gendry:"Alive",GendryWight:!1,Beric:"Alive",BericWight:!1,Euron:"Alive",EuronWight:!1,result:[],show:"Form",database:[],form:1483,table:0,search:0},t.handleChange=t.handleChange.bind(Object(u.a)(Object(u.a)(t))),t.handleSubmit=t.handleSubmit.bind(Object(u.a)(Object(u.a)(t))),t.handleCheckBox=t.handleCheckBox.bind(Object(u.a)(Object(u.a)(t))),t.handleForm=t.handleForm.bind(Object(u.a)(Object(u.a)(t))),t.handleReview=t.handleReview.bind(Object(u.a)(Object(u.a)(t))),t.handleGroup=t.handleGroup.bind(Object(u.a)(Object(u.a)(t))),t.handleTest=t.handleTest.bind(Object(u.a)(Object(u.a)(t))),t.handleClick=t.handleClick.bind(Object(u.a)(Object(u.a)(t))),t}return Object(d.a)(a,e),Object(r.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(m.a)({},e.target.name,e.target.value))}},{key:"handleCheckBox",value:function(e){this.setState(Object(m.a)({},e.target.name,e.target.checked))}},{key:"handleTest",value:function(){var e=this;E.a.get("/find/").then(function(a){e.setState({database:a.data})}).catch(function(e){return console.log(e)})}},{key:"handleSubmit",value:function(e){var a=this;e.preventDefault();var t=[{Name:"Jon Snow",DoA:this.state.Jon,Wight:this.state.JonWight},{Name:"Sansa Stark",DoA:this.state.Sansa,Wight:this.state.SansaWight},{Name:"Arya Stark",DoA:this.state.Arya,Wight:this.state.AryaWight},{Name:"Bran Stark",DoA:this.state.Bran,Wight:this.state.BranWight},{Name:"Daenerys Targaryen",DoA:this.state.Dany,Wight:this.state.DanyWight},{Name:"Cersei Lannister",DoA:this.state.Cersei,Wight:this.state.CerseiWight},{Name:"Jaime Lannister",DoA:this.state.Jaime,Wight:this.state.JaimeWight},{Name:"Tyrion Lannister",DoA:this.state.Tyrion,Wight:this.state.TyrionWight},{Name:"Yara Greyjoy",DoA:this.state.Yara,Wight:this.state.YaraWight},{Name:"Theon Greyjoy",DoA:this.state.Theon,Wight:this.state.TheonWight},{Name:"Melisandre",DoA:this.state.Melisandre,Wight:this.state.MelisandreWight},{Name:"Jorah Mormont",DoA:this.state.Jorah,Wight:this.state.JorahWight},{Name:"The Hound",DoA:this.state.Hound,Wight:this.state.HoundWight},{Name:"The Mountain",DoA:this.state.Mountain,Wight:this.state.MountainWight},{Name:"Samwell Tarley",DoA:this.state.Samwell,Wight:this.state.SamwellWight},{Name:"Gilly",DoA:this.state.Gilly,Wight:this.state.GillyWight},{Name:"Little Same",DoA:this.state.Sam,Wight:this.state.SamWight},{Name:"Varys",DoA:this.state.Varys,Wight:this.state.VarysWight},{Name:"Brienne of Tarth",DoA:this.state.Brienne,Wight:this.state.BrienneWight},{Name:"Davos Seaworth",DoA:this.state.Davos,Wight:this.state.DavosWight},{Name:"Bronn of the Blackwater",DoA:this.state.Bronn,Wight:this.state.BronnWight},{Name:"Podrick Payne",DoA:this.state.Pod,Wight:this.state.PodWight},{Name:"Tormund Giantsbane",DoA:this.state.Tormund,Wight:this.state.TormundWight},{Name:"Greyworm",DoA:this.state.Grey,Wight:this.state.GreyWight},{Name:"Missandei",DoA:this.state.Missandei,Wight:this.state.MissandeiWight},{Name:"Gendry",DoA:this.state.Gendry,Wight:this.state.GendryWight},{Name:"Beric Dondarrion",DoA:this.state.Beric,Wight:this.state.BericWight},{Name:"Euron Greyjoy",DoA:this.state.Euron,Wight:this.state.EuronWight}],n=this.state.username.toLocaleLowerCase(),i=this.state.group.toLocaleLowerCase();E.a.post("/submit/",{username:n,group:i,jonSnow:t[0],sansaStark:t[1],aryaStark:t[2],branStark:t[3],daenerysTargaryen:t[4],cerseiLannister:t[5],jaimeLannister:t[6],tyrionLannister:t[7],yaraGreyjoy:t[8],theonGreyjoy:t[9],melisandre:t[10],jorahMormont:t[11],hound:t[12],mountain:t[13],samwellTarley:t[14],gilly:t[15],littleSam:t[16],varys:t[17],brienneOfTarth:t[18],davosSeaworth:t[19],bronn:t[20],pod:t[21],tormund:t[22],greyworm:t[23],missandei:t[24],gendry:t[25],beric:t[26],euronGreyjoy:t[27]}).then(function(e){console.log(e),a.setState({show:"Review",form:0,table:1483,search:0})}).catch(function(e){return console.log(e)}),this.setState({result:t,show:"Review"})}},{key:"handleClick",value:function(e){switch(console.log(e.target.innerHTML),e.target.innerHTML){case"Form":this.setState({show:"Form",form:1483,table:0,search:0});break;case"Group":this.setState({show:"Group",form:0,table:0,search:1483});break;case"Review":this.setState({show:"Review",form:0,table:1483,search:0})}}},{key:"handleForm",value:function(e){switch(console.log(e.target.innerHTML),e.target.innerHTML){case"Form":this.setState({show:"Form"})}}},{key:"handleReview",value:function(){this.setState({show:"Review"})}},{key:"handleGroup",value:function(){this.setState({show:"Group"})}},{key:"handleCurrent",value:function(e){e.preventDefault(),E.a.post("/current/",{jonSnow:{Wight:!1,DoA:"Alive"},sansaStark:{Wight:!1,DoA:"Alive"},aryaStark:{Wight:!1,DoA:"Alive"},branStark:{Wight:!1,DoA:"Alive"},daenerysTargaryen:{Wight:!1,DoA:"Alive"},cerseiLannister:{Wight:!1,DoA:"Alive"},jaimeLannister:{Wight:!1,DoA:"Alive"},tyrionLannister:{Wight:!1,DoA:"Alive"},yaraGreyjoy:{Wight:!1,DoA:"Alive"},theonGreyjoy:{Wight:!1,DoA:"Alive"},melisandre:{Wight:!1,DoA:"Alive"},jorahMormont:{Wight:!1,DoA:"Alive"},hound:{Wight:!1,DoA:"Alive"},mountain:{Wight:!1,DoA:"Alive"},samwellTarley:{Wight:!1,DoA:"Alive"},gilly:{Wight:!1,DoA:"Alive"},littleSam:{Wight:!1,DoA:"Alive"},varys:{Wight:!1,DoA:"Alive"},brienneOfTarth:{Wight:!1,DoA:"Alive"},davosSeaworth:{Wight:!1,DoA:"Alive"},bronn:{Wight:!1,DoA:"Alive"},pod:{Wight:!1,DoA:"Alive"},tormund:{Wight:!1,DoA:"Alive"},greyworm:{Wight:!1,DoA:"Alive"},missandei:{Wight:!1,DoA:"Alive"},gendry:{Wight:!1,DoA:"Alive"},beric:{Wight:!1,DoA:"Alive"},euronGreyjoy:{Wight:!1,DoA:"Alive"}}).then(function(e){console.log("Sent Current Data")}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"Main"},i.a.createElement(g.a,{src:C.a,playing:!0,loop:!0,ref:function(a){return e.player=a}}),i.a.createElement("h1",null,"Game of Thrones Pool"),"Form"===this.state.show?i.a.createElement("div",null,i.a.createElement("span",null,i.a.createElement("button",{onClick:this.handleClick,className:"Button",id:"selectedSection"},"Form"),i.a.createElement("button",{onClick:this.handleClick,className:"Button"},"Review"),i.a.createElement("button",{onClick:this.handleClick,className:"Button"},"Group"))):null,"Review"===this.state.show?i.a.createElement("span",null,i.a.createElement("button",{onClick:this.handleClick,className:"Button"},"Form"),i.a.createElement("button",{onClick:this.handleClick,className:"Button",id:"selectedSection"},"Review"),i.a.createElement("button",{onClick:this.handleClick,className:"Button"},"Group")):null,"Group"===this.state.show?i.a.createElement("span",null,i.a.createElement("button",{onClick:this.handleClick,className:"Button"},"Form"),i.a.createElement("button",{onClick:this.handleClick,className:"Button"},"Review"),i.a.createElement("button",{onClick:this.handleClick,className:"Button",id:"selectedSection"},"Group")):null,i.a.createElement("div",{className:"Form",style:{height:this.state.form}},i.a.createElement("form",null,i.a.createElement("div",{className:"Character"},i.a.createElement("fieldset",{id:"Jon",onChange:this.handleChange},i.a.createElement("span",{className:"Name"},"Jon Snow"),i.a.createElement("input",{defaultChecked:!0,type:"radio",name:"Jon",value:"Alive"}),"Alive",i.a.createElement("input",{type:"radio",name:"Jon",value:"Dead"}),"Dead"),"Dead"===this.state.Jon?i.a.createElement("span",null,i.a.createElement("input",{onChange:this.handleCheckBox,type:"checkbox",name:"JonWight",disabled:null===this.state.Jon||"Alive"===this.state.Jon}),"Wight"):i.a.createElement("span",{className:"disabled"},i.a.createElement("input",{onChange:this.handleCheckBox,type:"checkbox",name:"JonWight",disabled:null===this.state.Jon||"Alive"===this.state.Jon}),"Wight")),i.a.createElement("div",{className:"Character"},i.a.createElement("fieldset",{id:"Sansa",onChange:this.handleChange},i.a.createElement("span",{className:"Name"},"Sansa Stark"),i.a.createElement("input",{defaultChecked:!0,type:"radio",name:"Sansa",value:"Alive"}),"Alive",i.a.createElement("input",{type:"radio",name:"Sansa",value:"Dead"}),"Dead"),"Dead"===this.state.Sansa?i.a.createElement("span",null,i.a.createElement("input",{onChange:this.handleCheckBox,type:"checkbox",name:"SansaWight",disabled:null===this.state.Sansa||"Alive"===this.state.Sansa}),"Wight"):i.a.createElement("span",{className:"disabled"},i.a.createElement("input",{onChange:this.handleCheckBox,type:"checkbox",name:"SansaWight",disabled:null===this.state.Sansa||"Alive"===this.state.Sansa}),"Wight")),i.a.createElement("div",{className:"Character"},i.a.createElement("fieldset",{id:"Arya",onChange:this.handleChange},i.a.createElement("span",{className:"Name"},"Arya Stark"),i.a.createElement("input",{defaultChecked:!0,type:"radio",name:"Arya",value:"Alive"}),"Alive",i.a.createElement("input",{type:"radio",name:"Arya",value:"Dead"}),"Dead"),"Dead"===this.state.Arya?i.a.createElement("span",null,i.a.createElement("input",{onChange:this.handleCheckBox,type:"checkbox",name:"AryaWight",disabled:null===this.state.Arya||"Alive"===this.state.Arya}),"Wight"):i.a.createElement("span",{className:"disabled"},i.a.createElement("input",{onChange:this.handleCheckBox,type:"checkbox",name:"AryaWight",disabled:null===this.state.Arya||"Alive"===this.state.Arya}),"Wight")),i.a.createElement("div",{className:"Character"},i.a.createElement("fieldset",{id:"Bran",onChange:this.handleChange},i.a.createElement("span",{className:"Name"},"Bran Stark"),i.a.createElement("input",{defaultChecked:!0,type:"radio",name:"Bran",value:"Alive"}),"Alive",i.a.createElement("input",{type:"radio",name:"Bran",value:"Dead"}),"Dead"),"Dead"===this.state.Bran?i.a.createElement("span",null,i.a.createElement("input",{onChange:this.handleCheckBox,type:"checkbox",name:"BranWight",disabled:null===this.state.Bran||"Alive"===this.state.Bran}),"Wight"):i.a.createElement("span",{className:"disabled"},i.a.createElement("input",{onChange:this.handleCheckBox,type:"checkbox",name:"BranWight",disabled:null===this.state.Bran||"Alive"===this.state.Bran}),"Wight")),i.a.createElement("div",{className:"Character"},i.a.createElement("fieldset",{id:"Dany",onChange:this.handleChange},i.a.createElement("span",{className:"Name"},"Daenerys Targaryen"),i.a.createElement("input",{defaultChecked:!0,type:"radio",name:"Dany",value:"Alive"}),"Alive",i.a.createElement("input",{type:"radio",name:"Dany",value:"Dead"}),"Dead"),"Dead"===this.state.Dany?i.a.createElement("span",null,i.a.createElement("input",{onChange:this.handleCheckBox,type:"checkbox",name:"DanyWight",disabled:null===this.state.Dany||"Alive"===this.state.Dany}),"Wight"):i.a.createElement("span",{className:"disabled"},i.a.createElement("input",{onChange:this.handleCheckBox,type:"checkbox",name:"DanyWight",disabled:null===this.state.Dany||"Alive"===this.state.Dany}),"Wight")),i.a.createElement("div",{className:"Character"},i.a.createElement("fieldset",{id:"Cersei",onChange:this.handleChange},i.a.createElement("span",{className:"Name"},"Cersei Lannister"),i.a.createElement("input",{defaultChecked:!0,type:"radio",name:"Cersei",value:"Alive"}),"Alive",i.a.createElement("input",{type:"radio",name:"Cersei",value:"Dead"}),"Dead"),"Dead"===this.state.Cersei?i.a.createElement("span",null,i.a.createElement("input",{onChange:this.handleCheckBox,type:"checkbox",name:"CerseiWight",disabled:null===this.state.Cersei||"Alive"===this.state.Cersei}),"Wight"):i.a.createElement("span",{className:"disabled"},i.a.createElement("input",{onChange:this.handleCheckBox,type:"checkbox",name:"CerseiWight",disabled:null===this.state.Cersei||"Alive"===this.state.Cersei}),"Wight")),i.a.createElement("div",{className:"Character"},i.a.createElement("fieldset",{id:"Jaime",onChange:this.handleChange},i.a.createElement("span",{className:"Name"},"Jaime Lannister"),i.a.createElement("input",{defaultChecked:!0,type:"radio",name:"Jaime",value:"Alive"}),"Alive",i.a.createElement("input",{type:"radio",name:"Jaime",value:"Dead"}),"Dead"),"Dead"===this.state.Jaime?i.a.createElement("span",null,i.a.createElement("input",{onChange:this.handleCheckBox,type:"checkbox",name:"JaimeWight",disabled:null===this.state.Jaime||"Alive"===this.state.Jaime}),"Wight"):i.a.createElement("span",{className:"disabled"},i.a.createElement("input",{onChange:this.handleCheckBox,type:"checkbox",name:"JaimeWight",disabled:null===this.state.Jaime||"Alive"===this.state.Jaime}),"Wight")),i.a.createElement("div",{className:"Character"},i.a.createElement("fieldset",{id:"Tyrion",onChange:this.handleChange},i.a.createElement("span",{className:"Name"},"Tyrion Lannister"),i.a.createElement("input",{defaultChecked:!0,type:"radio",name:"Tyrion",value:"Alive"}),"Alive",i.a.createElement("input",{type:"radio",name:"Tyrion",value:"Dead"}),"Dead"),"Dead"===this.state.Tyrion?i.a.createElement("span",null,i.a.createElement("input",{onChange:this.handleCheckBox,type:"checkbox",name:"TyrionWight",disabled:null===this.state.Tyrion||"Alive"===this.state.Tyrion}),"Wight"):i.a.createElement("span",{className:"disabled"},i.a.createElement("input",{onChange:this.handleCheckBox,type:"checkbox",name:"TyrionWight",disabled:null===this.state.Tyrion||"Alive"===this.state.Tyrion}),"Wight")),i.a.createElement("div",{className:"Character"},i.a.createElement("fieldset",{id:"Yara",onChange:this.handleChange},i.a.createElement("span",{className:"Name"},"Yara Greyjoy"),i.a.createElement("input",{defaultChecked:!0,type:"radio",name:"Yara",value:"Alive"}),"Alive",i.a.createElement("input",{type:"radio",name:"Yara",value:"Dead"}),"Dead"),"Dead"===this.state.Yara?i.a.createElement("span",null,i.a.createElement("input",{onChange:this.handleCheckBox,type:"checkbox",name:"YaraWight",disabled:null===this.state.Yara||"Alive"===this.state.Yara}),"Wight"):i.a.createElement("span",{className:"disabled"},i.a.createElement("input",{onChange:this.handleCheckBox,type:"checkbox",name:"YaraWight",disabled:null===this.state.Yara||"Alive"===this.state.Yara}),"Wight")),i.a.createElement("div",{className:"Character"},i.a.createElement("fieldset",{id:"Theon",onChange:this.handleChange},i.a.createElement("span",{className:"Name"},"Theon Greyjoy"),i.a.createElement("input",{defaultChecked:!0,type:"radio",name:"Theon",value:"Alive"}),"Alive",i.a.createElement("input",{type:"radio",name:"Theon",value:"Dead"}),"Dead"),"Dead"===this.state.Theon?i.a.createElement("span",null,i.a.createElement("input",{onChange:this.handleCheckBox,type:"checkbox",name:"TheonWight",disabled:null===this.state.Theon||"Alive"===this.state.Theon}),"Wight"):i.a.createElement("span",{className:"disabled"},i.a.createElement("input",{onChange:this.handleCheckBox,type:"checkbox",name:"TheonWight",disabled:null===this.state.Theon||"Alive"===this.state.Theon}),"Wight")),i.a.createElement("div",{className:"Character"},i.a.createElement("fieldset",{id:"Melisandre",onChange:this.handleChange},i.a.createElement("span",{className:"Name"},"Melisandre"),i.a.createElement("input",{defaultChecked:!0,type:"radio",name:"Melisandre",value:"Alive"}),"Alive",i.a.createElement("input",{type:"radio",name:"Melisandre",value:"Dead"}),"Dead"),"Dead"===this.state.Melisandre?i.a.createElement("span",null,i.a.createElement("input",{onChange:this.handleCheckBox,type:"checkbox",name:"MelisandreWight",disabled:null===this.state.Melisandre||"Alive"===this.state.Melisandre}),"Wight"):i.a.createElement("span",{className:"disabled"},i.a.createElement("input",{onChange:this.handleCheckBox,type:"checkbox",name:"MelisandreWight",disabled:null===this.state.Melisandre||"Alive"===this.state.Melisandre}),"Wight")),i.a.createElement("div",{className:"Character"},i.a.createElement("fieldset",{id:"Jorah",onChange:this.handleChange},i.a.createElement("span",{className:"Name"},"Jorah Mormont"),i.a.createElement("input",{defaultChecked:!0,type:"radio",name:"Jorah",value:"Alive"}),"Alive",i.a.createElement("input",{type:"radio",name:"Jorah",value:"Dead"}),"Dead"),"Dead"===this.state.Jorah?i.a.createElement("span",null,i.a.createElement("input",{onChange:this.handleCheckBox,type:"checkbox",name:"JorahWight",disabled:null===this.state.Jorah||"Alive"===this.state.Jorah}),"Wight"):i.a.createElement("span",{className:"disabled"},i.a.createElement("input",{onChange:this.handleCheckBox,type:"checkbox",name:"JorahWight",disabled:null===this.state.Jorah||"Alive"===this.state.Jorah}),"Wight")),i.a.createElement("div",{className:"Character"},i.a.createElement("fieldset",{id:"Hound",onChange:this.handleChange},i.a.createElement("span",{className:"Name"},"The Hound"),i.a.createElement("input",{defaultChecked:!0,type:"radio",name:"Hound",value:"Alive"}),"Alive",i.a.createElement("input",{type:"radio",name:"Hound",value:"Dead"}),"Dead"),"Dead"===this.state.Hound?i.a.createElement("span",null,i.a.createElement("input",{onChange:this.handleCheckBox,type:"checkbox",name:"HoundWight",disabled:null===this.state.Hound||"Alive"===this.state.Hound}),"Wight"):i.a.createElement("span",{className:"disabled"},i.a.createElement("input",{onChange:this.handleCheckBox,type:"checkbox",name:"HoundWight",disabled:null===this.state.Hound||"Alive"===this.state.Hound}),"Wight")),i.a.createElement("div",{className:"Character"},i.a.createElement("fieldset",{id:"Mountain",onChange:this.handleChange},i.a.createElement("span",{className:"Name"},"The Mountain"),i.a.createElement("input",{defaultChecked:!0,type:"radio",name:"Mountain",value:"Alive"}),"Alive",i.a.createElement("input",{type:"radio",name:"Mountain",value:"Dead"}),"Dead"),"Dead"===this.state.Mountain?i.a.createElement("span",null,i.a.createElement("input",{onChange:this.handleCheckBox,type:"checkbox",name:"MountainWight",disabled:null===this.state.Mountain||"Alive"===this.state.Mountain}),"Wight"):i.a.createElement("span",{className:"disabled"},i.a.createElement("input",{onChange:this.handleCheckBox,type:"checkbox",name:"MountainWight",disabled:null===this.state.Mountain||"Alive"===this.state.Mountain}),"Wight")),i.a.createElement("div",{className:"Character"},i.a.createElement("fieldset",{id:"Samwell",onChange:this.handleChange},i.a.createElement("span",{className:"Name"},"Samwell Tarley"),i.a.createElement("input",{defaultChecked:!0,type:"radio",name:"Samwell",value:"Alive"}),"Alive",i.a.createElement("input",{type:"radio",name:"Samwell",value:"Dead"}),"Dead"),"Dead"===this.state.Samwell?i.a.createElement("span",null,i.a.createElement("input",{onChange:this.handleCheckBox,type:"checkbox",name:"SamwellWight",disabled:null===this.state.Samwell===this.state.Samwell==="Alive"}),"Wight"):i.a.createElement("span",{className:"disabled"},i.a.createElement("input",{onChange:this.handleCheckBox,type:"checkbox",name:"SamwellWight",disabled:null===this.state.Samwell===this.state.Samwell==="Alive"}),"Wight")),i.a.createElement("div",{className:"Character"},i.a.createElement("fieldset",{id:"Gilly",onChange:this.handleChange},i.a.createElement("span",{className:"Name"},"Gilly"),i.a.createElement("input",{defaultChecked:!0,type:"radio",name:"Gilly",value:"Alive"}),"Alive",i.a.createElement("input",{type:"radio",name:"Gilly",value:"Dead"}),"Dead"),"Dead"===this.state.Gilly?i.a.createElement("span",null,i.a.createElement("input",{onChange:this.handleCheckBox,type:"checkbox",name:"GillyWight",disabled:null===this.state.Gilly||"Alive"===this.state.Gilly}),"Wight"):i.a.createElement("span",{className:"disabled"},i.a.createElement("input",{onChange:this.handleCheckBox,type:"checkbox",name:"GillyWight",disabled:null===this.state.Gilly||"Alive"===this.state.Gilly}),"Wight")),i.a.createElement("div",{className:"Character"},i.a.createElement("fieldset",{id:"Sam",onChange:this.handleChange},i.a.createElement("span",{className:"Name"},"Little Sam"),i.a.createElement("input",{defaultChecked:!0,type:"radio",name:"Sam",value:"Alive"}),"Alive",i.a.createElement("input",{type:"radio",name:"Sam",value:"Dead"}),"Dead"),"Dead"===this.state.Sam?i.a.createElement("span",null,i.a.createElement("input",{onChange:this.handleCheckBox,type:"checkbox",name:"SamWight",disabled:null===this.state.Sam||"Alive"===this.state.Sam}),"Wight"):i.a.createElement("span",{className:"disabled"},i.a.createElement("input",{onChange:this.handleCheckBox,type:"checkbox",name:"SamWight",disabled:null===this.state.Sam||"Alive"===this.state.Sam}),"Wight")),i.a.createElement("div",{className:"Character"},i.a.createElement("fieldset",{id:"Varys",onChange:this.handleChange},i.a.createElement("span",{className:"Name"},"Varys"),i.a.createElement("input",{defaultChecked:!0,type:"radio",name:"Varys",value:"Alive"}),"Alive",i.a.createElement("input",{type:"radio",name:"Varys",value:"Dead"}),"Dead"),"Dead"===this.state.Varys?i.a.createElement("span",null,i.a.createElement("input",{onChange:this.handleCheckBox,type:"checkbox",name:"VarysWight",disabled:null===this.state.Varys||"Alive"===this.state.Varys}),"Wight"):i.a.createElement("span",{className:"disabled"},i.a.createElement("input",{onChange:this.handleCheckBox,type:"checkbox",name:"VarysWight",disabled:null===this.state.Varys||"Alive"===this.state.Varys}),"Wight")),i.a.createElement("div",{className:"Character"},i.a.createElement("fieldset",{id:"Brienne",onChange:this.handleChange},i.a.createElement("span",{className:"Name"},"Brienne of Tarth"),i.a.createElement("input",{defaultChecked:!0,type:"radio",name:"Brienne",value:"Alive"}),"Alive",i.a.createElement("input",{type:"radio",name:"Brienne",value:"Dead"}),"Dead"),"Dead"===this.state.Brienne?i.a.createElement("span",null,i.a.createElement("input",{onChange:this.handleCheckBox,type:"checkbox",name:"BrienneWight",disabled:null===this.state.Brienne||"Alive"===this.state.Brienne}),"Wight"):i.a.createElement("span",{className:"disabled"},i.a.createElement("input",{onChange:this.handleCheckBox,type:"checkbox",name:"BrienneWight",disabled:null===this.state.Brienne||"Alive"===this.state.Brienne}),"Wight")),i.a.createElement("div",{className:"Character"},i.a.createElement("fieldset",{id:"Davos",onChange:this.handleChange},i.a.createElement("span",{className:"Name"},"Davos Seaworth"),i.a.createElement("input",{defaultChecked:!0,type:"radio",name:"Davos",value:"Alive"}),"Alive",i.a.createElement("input",{type:"radio",name:"Davos",value:"Dead"}),"Dead"),"Dead"===this.state.Davos?i.a.createElement("span",null,i.a.createElement("input",{onChange:this.handleCheckBox,type:"checkbox",name:"DavosWight",disabled:null===this.state.Davos||"Alive"===this.state.Davos}),"Wight"):i.a.createElement("span",{className:"disabled"},i.a.createElement("input",{onChange:this.handleCheckBox,type:"checkbox",name:"DavosWight",disabled:null===this.state.Davos||"Alive"===this.state.Davos}),"Wight")),i.a.createElement("div",{className:"Character"},i.a.createElement("fieldset",{id:"Bronn",onChange:this.handleChange},i.a.createElement("span",{className:"Name"},"Bronn of The Blackwater"),i.a.createElement("input",{defaultChecked:!0,type:"radio",name:"Bronn",value:"Alive"}),"Alive",i.a.createElement("input",{type:"radio",name:"Bronn",value:"Dead"}),"Dead"),"Dead"===this.state.Bronn?i.a.createElement("span",null,i.a.createElement("input",{onChange:this.handleCheckBox,type:"checkbox",name:"BronnWight",disabled:null===this.state.Bronn||"Alive"===this.state.Bronn}),"Wight"):i.a.createElement("span",{className:"disabled"},i.a.createElement("input",{onChange:this.handleCheckBox,type:"checkbox",name:"BronnWight",disabled:null===this.state.Bronn||"Alive"===this.state.Bronn}),"Wight")),i.a.createElement("div",{className:"Character"},i.a.createElement("fieldset",{id:"Pod",onChange:this.handleChange},i.a.createElement("span",{className:"Name"},"Podrick Payne"),i.a.createElement("input",{defaultChecked:!0,type:"radio",name:"Pod",value:"Alive"}),"Alive",i.a.createElement("input",{type:"radio",name:"Pod",value:"Dead"}),"Dead"),"Dead"===this.state.Pod?i.a.createElement("span",null,i.a.createElement("input",{onChange:this.handleCheckBox,type:"checkbox",name:"PodWight",disabled:null===this.state.Pod||"Alive"===this.state.Pod}),"Wight"):i.a.createElement("span",{className:"disabled"},i.a.createElement("input",{onChange:this.handleCheckBox,type:"checkbox",name:"PodWight",disabled:null===this.state.Pod||"Alive"===this.state.Pod}),"Wight")),i.a.createElement("div",{className:"Character"},i.a.createElement("fieldset",{id:"Tormund",onChange:this.handleChange},i.a.createElement("span",{className:"Name"},"Tormund Giantsbane"),i.a.createElement("input",{defaultChecked:!0,type:"radio",name:"Tormund",value:"Alive"}),"Alive",i.a.createElement("input",{type:"radio",name:"Tormund",value:"Dead"}),"Dead"),"Dead"===this.state.Tormund?i.a.createElement("span",null,i.a.createElement("input",{onChange:this.handleCheckBox,type:"checkbox",name:"TormundWight",disabled:null===this.state.Tormund||"Alive"===this.state.Tormund}),"Wight"):i.a.createElement("span",{className:"disabled"},i.a.createElement("input",{onChange:this.handleCheckBox,type:"checkbox",name:"TormundWight",disabled:null===this.state.Tormund||"Alive"===this.state.Tormund}),"Wight")),i.a.createElement("div",{className:"Character"},i.a.createElement("fieldset",{id:"Grey",onChange:this.handleChange},i.a.createElement("span",{className:"Name"},"Grey Worm"),i.a.createElement("input",{defaultChecked:!0,type:"radio",name:"Grey",value:"Alive"}),"Alive",i.a.createElement("input",{type:"radio",name:"Grey",value:"Dead"}),"Dead"),"Dead"===this.state.Grey?i.a.createElement("span",null,i.a.createElement("input",{onChange:this.handleCheckBox,type:"checkbox",name:"GreyWight",disabled:null===this.state.Grey||"Alive"===this.state.Grey}),"Wight"):i.a.createElement("span",{className:"disabled"},i.a.createElement("input",{onChange:this.handleCheckBox,type:"checkbox",name:"GreyWight",disabled:null===this.state.Grey||"Alive"===this.state.Grey}),"Wight")),i.a.createElement("div",{className:"Character"},i.a.createElement("fieldset",{id:"Missandei",onChange:this.handleChange},i.a.createElement("span",{className:"Name"},"Missandei"),i.a.createElement("input",{defaultChecked:!0,type:"radio",name:"Missandei",value:"Alive"}),"Alive",i.a.createElement("input",{type:"radio",name:"Missandei",value:"Dead"}),"Dead"),"Dead"===this.state.Missandei?i.a.createElement("span",null,i.a.createElement("input",{onChange:this.handleCheckBox,type:"checkbox",name:"MissandeiWight",disabled:null===this.state.Missandei||"Alive"===this.state.Missandei}),"Wight"):i.a.createElement("span",{className:"disabled"},i.a.createElement("input",{onChange:this.handleCheckBox,type:"checkbox",name:"MissandeiWight",disabled:null===this.state.Missandei||"Alive"===this.state.Missandei}),"Wight")),i.a.createElement("div",{className:"Character"},i.a.createElement("fieldset",{id:"Gendry",onChange:this.handleChange},i.a.createElement("span",{className:"Name"},"Gendry"),i.a.createElement("input",{defaultChecked:!0,type:"radio",name:"Gendry",value:"Alive"}),"Alive",i.a.createElement("input",{type:"radio",name:"Gendry",value:"Dead"}),"Dead"),"Dead"===this.state.Gendry?i.a.createElement("span",null,i.a.createElement("input",{onChange:this.handleCheckBox,type:"checkbox",name:"GendryWight",disabled:null===this.state.Gendry||"Alive"===this.state.Gendry}),"Wight"):i.a.createElement("span",{className:"disabled"},i.a.createElement("input",{onChange:this.handleCheckBox,type:"checkbox",name:"GendryWight",disabled:null===this.state.Gendry||"Alive"===this.state.Gendry}),"Wight")),i.a.createElement("div",{className:"Character"},i.a.createElement("fieldset",{id:"Beric",onChange:this.handleChange},i.a.createElement("span",{className:"Name"},"Beric Dondarrion"),i.a.createElement("input",{defaultChecked:!0,type:"radio",name:"Beric",value:"Alive"}),"Alive",i.a.createElement("input",{type:"radio",name:"Beric",value:"Dead"}),"Dead"),"Dead"===this.state.Beric?i.a.createElement("span",null,i.a.createElement("input",{onChange:this.handleCheckBox,type:"checkbox",name:"BericWight",disabled:null===this.state.Beric||"Alive"===this.state.Beric}),"Wight"):i.a.createElement("span",{className:"disabled"},i.a.createElement("input",{onChange:this.handleCheckBox,type:"checkbox",name:"BericWight",disabled:null===this.state.Beric||"Alive"===this.state.Beric}),"Wight")),i.a.createElement("div",{className:"Character"},i.a.createElement("fieldset",{id:"Euron",onChange:this.handleChange},i.a.createElement("span",{className:"Name"},"Euron Greyjoy"),i.a.createElement("input",{defaultChecked:!0,type:"radio",name:"Euron",value:"Alive"}),"Alive",i.a.createElement("input",{type:"radio",name:"Euron",value:"Dead"}),"Dead"),"Dead"===this.state.Euron?i.a.createElement("span",null,i.a.createElement("input",{onChange:this.handleCheckBox,type:"checkbox",name:"EuronWight",disabled:null===this.state.Euron||"Alive"===this.state.Euron}),"Wight"):i.a.createElement("span",{className:"disabled"},i.a.createElement("input",{onChange:this.handleCheckBox,type:"checkbox",name:"EuronWight",disabled:null===this.state.Euron||"Alive"===this.state.Euron}),"Wight")),i.a.createElement("br",null),i.a.createElement("input",{className:"Input",type:"text",name:"username",onChange:this.handleChange,placeholder:"Username"}),i.a.createElement("br",null),i.a.createElement("input",{className:"Input",type:"text",name:"group",onChange:this.handleChange,placeholder:"Group Name"}),i.a.createElement("br",null),i.a.createElement("button",{className:"Button",onClick:this.handleSubmit,disabled:""===this.state.username||""===this.state.group},"Submit"))),i.a.createElement("div",{className:"Form",style:{height:this.state.table}},this.state.result.length>0?i.a.createElement("table",{className:"CharacterTable"},i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("th",null,"Character Name"),i.a.createElement("th",null,"Dead or Alive"),i.a.createElement("th",null,"Wight")),this.state.result.map(function(e){return!0===e.Wight&&"Dead"===e.DoA?i.a.createElement("tr",{key:e.Name},i.a.createElement("td",null,e.Name),i.a.createElement("td",null,e.DoA),i.a.createElement("td",null,"Yes")):(!0===e.Wight&&e.DoA,i.a.createElement("tr",{key:e.Name},i.a.createElement("td",null,e.Name),i.a.createElement("td",null,e.DoA),i.a.createElement("td",null,"No")))}))):null),i.a.createElement(A,{height:this.state.search}))}}]),a}(n.Component),k=function(e){function a(){return Object(h.a)(this,a),Object(c.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(b,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[22,1,2]]]);
//# sourceMappingURL=main.8c584c75.chunk.js.map