import{aI as ae,aJ as re,_ as o,g as ne,s as ce,t as oe,q as le,a as ue,b as de,c as K,d as dt,aK as fe,aL as he,aM as ke,e as ye,S as me,aN as ge,aO as V,l as kt,aP as pe,aQ as Pt,aR as Yt,aS as ve,aT as Te,aU as be,aV as xe,aW as _e,aX as we,aY as De,aZ as Rt,a_ as Nt,a$ as Bt,b0 as zt,b1 as jt,b2 as Ce,k as Ee,j as Se,z as Ie,u as Ae,b3 as Fe,b4 as Le}from"./theme.BTImaLaz.js";import"./framework.CatkIGlB.js";var Ut={exports:{}};(function(t,i){(function(a,n){t.exports=n()})(ae,function(){var a="day";return function(n,r,h){var f=function(E){return E.add(4-E.isoWeekday(),a)},F=r.prototype;F.isoWeekYear=function(){return f(this).year()},F.isoWeek=function(E){if(!this.$utils().u(E))return this.add(7*(E-this.isoWeek()),a);var w,I,W,M,P=f(this),b=(w=this.isoWeekYear(),I=this.$u,W=(I?h.utc:h)().year(w).startOf("year"),M=4-W.isoWeekday(),W.isoWeekday()>4&&(M+=7),W.add(M,a));return P.diff(b,"week")+1},F.isoWeekday=function(E){return this.$utils().u(E)?this.day()||7:this.day(this.day()%7?E:E-7)};var R=F.startOf;F.startOf=function(E,w){var I=this.$utils(),W=!!I.u(w)||w;return I.p(E)==="isoweek"?W?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):R.bind(this)(E,w)}}})})(Ut);var We=Ut.exports;const Me=re(We);var bt=function(){var t=o(function(x,l,d,k){for(d=d||{},k=x.length;k--;d[x[k]]=l);return d},"o"),i=[6,8,10,12,13,14,15,16,17,18,20,21,22,23,24,25,26,27,28,29,30,31,33,35,36,38,40],a=[1,26],n=[1,27],r=[1,28],h=[1,29],f=[1,30],F=[1,31],R=[1,32],E=[1,33],w=[1,34],I=[1,9],W=[1,10],M=[1,11],P=[1,12],b=[1,13],Z=[1,14],$=[1,15],tt=[1,16],et=[1,19],st=[1,20],it=[1,21],at=[1,22],rt=[1,23],m=[1,25],T=[1,35],p={trace:o(function(){},"trace"),yy:{},symbols_:{error:2,start:3,gantt:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NL:10,weekday:11,weekday_monday:12,weekday_tuesday:13,weekday_wednesday:14,weekday_thursday:15,weekday_friday:16,weekday_saturday:17,weekday_sunday:18,weekend:19,weekend_friday:20,weekend_saturday:21,dateFormat:22,inclusiveEndDates:23,topAxis:24,axisFormat:25,tickInterval:26,excludes:27,includes:28,todayMarker:29,title:30,acc_title:31,acc_title_value:32,acc_descr:33,acc_descr_value:34,acc_descr_multiline_value:35,section:36,clickStatement:37,taskTxt:38,taskData:39,click:40,callbackname:41,callbackargs:42,href:43,clickStatementDebug:44,$accept:0,$end:1},terminals_:{2:"error",4:"gantt",6:"EOF",8:"SPACE",10:"NL",12:"weekday_monday",13:"weekday_tuesday",14:"weekday_wednesday",15:"weekday_thursday",16:"weekday_friday",17:"weekday_saturday",18:"weekday_sunday",20:"weekend_friday",21:"weekend_saturday",22:"dateFormat",23:"inclusiveEndDates",24:"topAxis",25:"axisFormat",26:"tickInterval",27:"excludes",28:"includes",29:"todayMarker",30:"title",31:"acc_title",32:"acc_title_value",33:"acc_descr",34:"acc_descr_value",35:"acc_descr_multiline_value",36:"section",38:"taskTxt",39:"taskData",40:"click",41:"callbackname",42:"callbackargs",43:"href"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[19,1],[19,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,1],[9,2],[37,2],[37,3],[37,3],[37,4],[37,3],[37,4],[37,2],[44,2],[44,3],[44,3],[44,4],[44,3],[44,4],[44,2]],performAction:o(function(l,d,k,u,y,s,c){var e=s.length-1;switch(y){case 1:return s[e-1];case 2:this.$=[];break;case 3:s[e-1].push(s[e]),this.$=s[e-1];break;case 4:case 5:this.$=s[e];break;case 6:case 7:this.$=[];break;case 8:u.setWeekday("monday");break;case 9:u.setWeekday("tuesday");break;case 10:u.setWeekday("wednesday");break;case 11:u.setWeekday("thursday");break;case 12:u.setWeekday("friday");break;case 13:u.setWeekday("saturday");break;case 14:u.setWeekday("sunday");break;case 15:u.setWeekend("friday");break;case 16:u.setWeekend("saturday");break;case 17:u.setDateFormat(s[e].substr(11)),this.$=s[e].substr(11);break;case 18:u.enableInclusiveEndDates(),this.$=s[e].substr(18);break;case 19:u.TopAxis(),this.$=s[e].substr(8);break;case 20:u.setAxisFormat(s[e].substr(11)),this.$=s[e].substr(11);break;case 21:u.setTickInterval(s[e].substr(13)),this.$=s[e].substr(13);break;case 22:u.setExcludes(s[e].substr(9)),this.$=s[e].substr(9);break;case 23:u.setIncludes(s[e].substr(9)),this.$=s[e].substr(9);break;case 24:u.setTodayMarker(s[e].substr(12)),this.$=s[e].substr(12);break;case 27:u.setDiagramTitle(s[e].substr(6)),this.$=s[e].substr(6);break;case 28:this.$=s[e].trim(),u.setAccTitle(this.$);break;case 29:case 30:this.$=s[e].trim(),u.setAccDescription(this.$);break;case 31:u.addSection(s[e].substr(8)),this.$=s[e].substr(8);break;case 33:u.addTask(s[e-1],s[e]),this.$="task";break;case 34:this.$=s[e-1],u.setClickEvent(s[e-1],s[e],null);break;case 35:this.$=s[e-2],u.setClickEvent(s[e-2],s[e-1],s[e]);break;case 36:this.$=s[e-2],u.setClickEvent(s[e-2],s[e-1],null),u.setLink(s[e-2],s[e]);break;case 37:this.$=s[e-3],u.setClickEvent(s[e-3],s[e-2],s[e-1]),u.setLink(s[e-3],s[e]);break;case 38:this.$=s[e-2],u.setClickEvent(s[e-2],s[e],null),u.setLink(s[e-2],s[e-1]);break;case 39:this.$=s[e-3],u.setClickEvent(s[e-3],s[e-1],s[e]),u.setLink(s[e-3],s[e-2]);break;case 40:this.$=s[e-1],u.setLink(s[e-1],s[e]);break;case 41:case 47:this.$=s[e-1]+" "+s[e];break;case 42:case 43:case 45:this.$=s[e-2]+" "+s[e-1]+" "+s[e];break;case 44:case 46:this.$=s[e-3]+" "+s[e-2]+" "+s[e-1]+" "+s[e];break}},"anonymous"),table:[{3:1,4:[1,2]},{1:[3]},t(i,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:17,12:a,13:n,14:r,15:h,16:f,17:F,18:R,19:18,20:E,21:w,22:I,23:W,24:M,25:P,26:b,27:Z,28:$,29:tt,30:et,31:st,33:it,35:at,36:rt,37:24,38:m,40:T},t(i,[2,7],{1:[2,1]}),t(i,[2,3]),{9:36,11:17,12:a,13:n,14:r,15:h,16:f,17:F,18:R,19:18,20:E,21:w,22:I,23:W,24:M,25:P,26:b,27:Z,28:$,29:tt,30:et,31:st,33:it,35:at,36:rt,37:24,38:m,40:T},t(i,[2,5]),t(i,[2,6]),t(i,[2,17]),t(i,[2,18]),t(i,[2,19]),t(i,[2,20]),t(i,[2,21]),t(i,[2,22]),t(i,[2,23]),t(i,[2,24]),t(i,[2,25]),t(i,[2,26]),t(i,[2,27]),{32:[1,37]},{34:[1,38]},t(i,[2,30]),t(i,[2,31]),t(i,[2,32]),{39:[1,39]},t(i,[2,8]),t(i,[2,9]),t(i,[2,10]),t(i,[2,11]),t(i,[2,12]),t(i,[2,13]),t(i,[2,14]),t(i,[2,15]),t(i,[2,16]),{41:[1,40],43:[1,41]},t(i,[2,4]),t(i,[2,28]),t(i,[2,29]),t(i,[2,33]),t(i,[2,34],{42:[1,42],43:[1,43]}),t(i,[2,40],{41:[1,44]}),t(i,[2,35],{43:[1,45]}),t(i,[2,36]),t(i,[2,38],{42:[1,46]}),t(i,[2,37]),t(i,[2,39])],defaultActions:{},parseError:o(function(l,d){if(d.recoverable)this.trace(l);else{var k=new Error(l);throw k.hash=d,k}},"parseError"),parse:o(function(l){var d=this,k=[0],u=[],y=[null],s=[],c=this.table,e="",C=0,_=0,D=2,O=1,S=s.slice.call(arguments,1),A=Object.create(this.lexer),j={yy:{}};for(var gt in this.yy)Object.prototype.hasOwnProperty.call(this.yy,gt)&&(j.yy[gt]=this.yy[gt]);A.setInput(l,j.yy),j.yy.lexer=A,j.yy.parser=this,typeof A.yylloc>"u"&&(A.yylloc={});var pt=A.yylloc;s.push(pt);var se=A.options&&A.options.ranges;typeof j.yy.parseError=="function"?this.parseError=j.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function ie(N){k.length=k.length-2*N,y.length=y.length-N,s.length=s.length-N}o(ie,"popStack");function Ot(){var N;return N=u.pop()||A.lex()||O,typeof N!="number"&&(N instanceof Array&&(u=N,N=u.pop()),N=d.symbols_[N]||N),N}o(Ot,"lex");for(var Y,G,B,vt,H={},lt,q,Vt,ut;;){if(G=k[k.length-1],this.defaultActions[G]?B=this.defaultActions[G]:((Y===null||typeof Y>"u")&&(Y=Ot()),B=c[G]&&c[G][Y]),typeof B>"u"||!B.length||!B[0]){var Tt="";ut=[];for(lt in c[G])this.terminals_[lt]&&lt>D&&ut.push("'"+this.terminals_[lt]+"'");A.showPosition?Tt="Parse error on line "+(C+1)+`:
`+A.showPosition()+`
Expecting `+ut.join(", ")+", got '"+(this.terminals_[Y]||Y)+"'":Tt="Parse error on line "+(C+1)+": Unexpected "+(Y==O?"end of input":"'"+(this.terminals_[Y]||Y)+"'"),this.parseError(Tt,{text:A.match,token:this.terminals_[Y]||Y,line:A.yylineno,loc:pt,expected:ut})}if(B[0]instanceof Array&&B.length>1)throw new Error("Parse Error: multiple actions possible at state: "+G+", token: "+Y);switch(B[0]){case 1:k.push(Y),y.push(A.yytext),s.push(A.yylloc),k.push(B[1]),Y=null,_=A.yyleng,e=A.yytext,C=A.yylineno,pt=A.yylloc;break;case 2:if(q=this.productions_[B[1]][1],H.$=y[y.length-q],H._$={first_line:s[s.length-(q||1)].first_line,last_line:s[s.length-1].last_line,first_column:s[s.length-(q||1)].first_column,last_column:s[s.length-1].last_column},se&&(H._$.range=[s[s.length-(q||1)].range[0],s[s.length-1].range[1]]),vt=this.performAction.apply(H,[e,_,C,j.yy,B[1],y,s].concat(S)),typeof vt<"u")return vt;q&&(k=k.slice(0,-1*q*2),y=y.slice(0,-1*q),s=s.slice(0,-1*q)),k.push(this.productions_[B[1]][0]),y.push(H.$),s.push(H._$),Vt=c[k[k.length-2]][k[k.length-1]],k.push(Vt);break;case 3:return!0}}return!0},"parse")},v=function(){var x={EOF:1,parseError:o(function(d,k){if(this.yy.parser)this.yy.parser.parseError(d,k);else throw new Error(d)},"parseError"),setInput:o(function(l,d){return this.yy=d||this.yy||{},this._input=l,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:o(function(){var l=this._input[0];this.yytext+=l,this.yyleng++,this.offset++,this.match+=l,this.matched+=l;var d=l.match(/(?:\r\n?|\n).*/g);return d?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),l},"input"),unput:o(function(l){var d=l.length,k=l.split(/(?:\r\n?|\n)/g);this._input=l+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-d),this.offset-=d;var u=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),k.length-1&&(this.yylineno-=k.length-1);var y=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:k?(k.length===u.length?this.yylloc.first_column:0)+u[u.length-k.length].length-k[0].length:this.yylloc.first_column-d},this.options.ranges&&(this.yylloc.range=[y[0],y[0]+this.yyleng-d]),this.yyleng=this.yytext.length,this},"unput"),more:o(function(){return this._more=!0,this},"more"),reject:o(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},"reject"),less:o(function(l){this.unput(this.match.slice(l))},"less"),pastInput:o(function(){var l=this.matched.substr(0,this.matched.length-this.match.length);return(l.length>20?"...":"")+l.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:o(function(){var l=this.match;return l.length<20&&(l+=this._input.substr(0,20-l.length)),(l.substr(0,20)+(l.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:o(function(){var l=this.pastInput(),d=new Array(l.length+1).join("-");return l+this.upcomingInput()+`
`+d+"^"},"showPosition"),test_match:o(function(l,d){var k,u,y;if(this.options.backtrack_lexer&&(y={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(y.yylloc.range=this.yylloc.range.slice(0))),u=l[0].match(/(?:\r\n?|\n).*/g),u&&(this.yylineno+=u.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:u?u[u.length-1].length-u[u.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+l[0].length},this.yytext+=l[0],this.match+=l[0],this.matches=l,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(l[0].length),this.matched+=l[0],k=this.performAction.call(this,this.yy,this,d,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),k)return k;if(this._backtrack){for(var s in y)this[s]=y[s];return!1}return!1},"test_match"),next:o(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var l,d,k,u;this._more||(this.yytext="",this.match="");for(var y=this._currentRules(),s=0;s<y.length;s++)if(k=this._input.match(this.rules[y[s]]),k&&(!d||k[0].length>d[0].length)){if(d=k,u=s,this.options.backtrack_lexer){if(l=this.test_match(k,y[s]),l!==!1)return l;if(this._backtrack){d=!1;continue}else return!1}else if(!this.options.flex)break}return d?(l=this.test_match(d,y[u]),l!==!1?l:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:o(function(){var d=this.next();return d||this.lex()},"lex"),begin:o(function(d){this.conditionStack.push(d)},"begin"),popState:o(function(){var d=this.conditionStack.length-1;return d>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:o(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:o(function(d){return d=this.conditionStack.length-1-Math.abs(d||0),d>=0?this.conditionStack[d]:"INITIAL"},"topState"),pushState:o(function(d){this.begin(d)},"pushState"),stateStackSize:o(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:o(function(d,k,u,y){switch(u){case 0:return this.begin("open_directive"),"open_directive";case 1:return this.begin("acc_title"),31;case 2:return this.popState(),"acc_title_value";case 3:return this.begin("acc_descr"),33;case 4:return this.popState(),"acc_descr_value";case 5:this.begin("acc_descr_multiline");break;case 6:this.popState();break;case 7:return"acc_descr_multiline_value";case 8:break;case 9:break;case 10:break;case 11:return 10;case 12:break;case 13:break;case 14:this.begin("href");break;case 15:this.popState();break;case 16:return 43;case 17:this.begin("callbackname");break;case 18:this.popState();break;case 19:this.popState(),this.begin("callbackargs");break;case 20:return 41;case 21:this.popState();break;case 22:return 42;case 23:this.begin("click");break;case 24:this.popState();break;case 25:return 40;case 26:return 4;case 27:return 22;case 28:return 23;case 29:return 24;case 30:return 25;case 31:return 26;case 32:return 28;case 33:return 27;case 34:return 29;case 35:return 12;case 36:return 13;case 37:return 14;case 38:return 15;case 39:return 16;case 40:return 17;case 41:return 18;case 42:return 20;case 43:return 21;case 44:return"date";case 45:return 30;case 46:return"accDescription";case 47:return 36;case 48:return 38;case 49:return 39;case 50:return":";case 51:return 6;case 52:return"INVALID"}},"anonymous"),rules:[/^(?:%%\{)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:%%(?!\{)*[^\n]*)/i,/^(?:[^\}]%%*[^\n]*)/i,/^(?:%%*[^\n]*[\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:%[^\n]*)/i,/^(?:href[\s]+["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:call[\s]+)/i,/^(?:\([\s]*\))/i,/^(?:\()/i,/^(?:[^(]*)/i,/^(?:\))/i,/^(?:[^)]*)/i,/^(?:click[\s]+)/i,/^(?:[\s\n])/i,/^(?:[^\s\n]*)/i,/^(?:gantt\b)/i,/^(?:dateFormat\s[^#\n;]+)/i,/^(?:inclusiveEndDates\b)/i,/^(?:topAxis\b)/i,/^(?:axisFormat\s[^#\n;]+)/i,/^(?:tickInterval\s[^#\n;]+)/i,/^(?:includes\s[^#\n;]+)/i,/^(?:excludes\s[^#\n;]+)/i,/^(?:todayMarker\s[^\n;]+)/i,/^(?:weekday\s+monday\b)/i,/^(?:weekday\s+tuesday\b)/i,/^(?:weekday\s+wednesday\b)/i,/^(?:weekday\s+thursday\b)/i,/^(?:weekday\s+friday\b)/i,/^(?:weekday\s+saturday\b)/i,/^(?:weekday\s+sunday\b)/i,/^(?:weekend\s+friday\b)/i,/^(?:weekend\s+saturday\b)/i,/^(?:\d\d\d\d-\d\d-\d\d\b)/i,/^(?:title\s[^\n]+)/i,/^(?:accDescription\s[^#\n;]+)/i,/^(?:section\s[^\n]+)/i,/^(?:[^:\n]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[6,7],inclusive:!1},acc_descr:{rules:[4],inclusive:!1},acc_title:{rules:[2],inclusive:!1},callbackargs:{rules:[21,22],inclusive:!1},callbackname:{rules:[18,19,20],inclusive:!1},href:{rules:[15,16],inclusive:!1},click:{rules:[24,25],inclusive:!1},INITIAL:{rules:[0,1,3,5,8,9,10,11,12,13,14,17,23,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52],inclusive:!0}}};return x}();p.lexer=v;function g(){this.yy={}}return o(g,"Parser"),g.prototype=p,p.Parser=g,new g}();bt.parser=bt;var Oe=bt;V.extend(Me);V.extend(Fe);V.extend(Le);var qt={friday:5,saturday:6},z="",Dt="",Ct=void 0,Et="",nt=[],ct=[],St=new Map,It=[],yt=[],Q="",At="",Ht=["active","done","crit","milestone","vert"],Ft=[],ot=!1,Lt=!1,Wt="sunday",mt="saturday",xt=0,Ve=o(function(){It=[],yt=[],Q="",Ft=[],ft=0,wt=void 0,ht=void 0,L=[],z="",Dt="",At="",Ct=void 0,Et="",nt=[],ct=[],ot=!1,Lt=!1,xt=0,St=new Map,Ie(),Wt="sunday",mt="saturday"},"clear"),Pe=o(function(t){Dt=t},"setAxisFormat"),Ye=o(function(){return Dt},"getAxisFormat"),Re=o(function(t){Ct=t},"setTickInterval"),Ne=o(function(){return Ct},"getTickInterval"),Be=o(function(t){Et=t},"setTodayMarker"),ze=o(function(){return Et},"getTodayMarker"),je=o(function(t){z=t},"setDateFormat"),qe=o(function(){ot=!0},"enableInclusiveEndDates"),Xe=o(function(){return ot},"endDatesAreInclusive"),Ge=o(function(){Lt=!0},"enableTopAxis"),Ue=o(function(){return Lt},"topAxisEnabled"),He=o(function(t){At=t},"setDisplayMode"),Ke=o(function(){return At},"getDisplayMode"),Je=o(function(){return z},"getDateFormat"),Qe=o(function(t){nt=t.toLowerCase().split(/[\s,]+/)},"setIncludes"),Ze=o(function(){return nt},"getIncludes"),$e=o(function(t){ct=t.toLowerCase().split(/[\s,]+/)},"setExcludes"),ts=o(function(){return ct},"getExcludes"),es=o(function(){return St},"getLinks"),ss=o(function(t){Q=t,It.push(t)},"addSection"),is=o(function(){return It},"getSections"),as=o(function(){let t=Xt();const i=10;let a=0;for(;!t&&a<i;)t=Xt(),a++;return yt=L,yt},"getTasks"),Kt=o(function(t,i,a,n){const r=t.format(i.trim()),h=t.format("YYYY-MM-DD");return n.includes(r)||n.includes(h)?!1:a.includes("weekends")&&(t.isoWeekday()===qt[mt]||t.isoWeekday()===qt[mt]+1)||a.includes(t.format("dddd").toLowerCase())?!0:a.includes(r)||a.includes(h)},"isInvalidDate"),rs=o(function(t){Wt=t},"setWeekday"),ns=o(function(){return Wt},"getWeekday"),cs=o(function(t){mt=t},"setWeekend"),Jt=o(function(t,i,a,n){if(!a.length||t.manualEndTime)return;let r;t.startTime instanceof Date?r=V(t.startTime):r=V(t.startTime,i,!0),r=r.add(1,"d");let h;t.endTime instanceof Date?h=V(t.endTime):h=V(t.endTime,i,!0);const[f,F]=os(r,h,i,a,n);t.endTime=f.toDate(),t.renderEndTime=F},"checkTaskDates"),os=o(function(t,i,a,n,r){let h=!1,f=null;for(;t<=i;)h||(f=i.toDate()),h=Kt(t,a,n,r),h&&(i=i.add(1,"d")),t=t.add(1,"d");return[i,f]},"fixTaskDates"),_t=o(function(t,i,a){if(a=a.trim(),(i.trim()==="x"||i.trim()==="X")&&/^\d+$/.test(a))return new Date(Number(a));const r=/^after\s+(?<ids>[\d\w- ]+)/.exec(a);if(r!==null){let f=null;for(const R of r.groups.ids.split(" ")){let E=U(R);E!==void 0&&(!f||E.endTime>f.endTime)&&(f=E)}if(f)return f.endTime;const F=new Date;return F.setHours(0,0,0,0),F}let h=V(a,i.trim(),!0);if(h.isValid())return h.toDate();{kt.debug("Invalid date:"+a),kt.debug("With date format:"+i.trim());const f=new Date(a);if(f===void 0||isNaN(f.getTime())||f.getFullYear()<-1e4||f.getFullYear()>1e4)throw new Error("Invalid date:"+a);return f}},"getStartDate"),Qt=o(function(t){const i=/^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(t.trim());return i!==null?[Number.parseFloat(i[1]),i[2]]:[NaN,"ms"]},"parseDuration"),Zt=o(function(t,i,a,n=!1){a=a.trim();const h=/^until\s+(?<ids>[\d\w- ]+)/.exec(a);if(h!==null){let w=null;for(const W of h.groups.ids.split(" ")){let M=U(W);M!==void 0&&(!w||M.startTime<w.startTime)&&(w=M)}if(w)return w.startTime;const I=new Date;return I.setHours(0,0,0,0),I}let f=V(a,i.trim(),!0);if(f.isValid())return n&&(f=f.add(1,"d")),f.toDate();let F=V(t);const[R,E]=Qt(a);if(!Number.isNaN(R)){const w=F.add(R,E);w.isValid()&&(F=w)}return F.toDate()},"getEndDate"),ft=0,J=o(function(t){return t===void 0?(ft=ft+1,"task"+ft):t},"parseId"),ls=o(function(t,i){let a;i.substr(0,1)===":"?a=i.substr(1,i.length):a=i;const n=a.split(","),r={};Mt(n,r,Ht);for(let f=0;f<n.length;f++)n[f]=n[f].trim();let h="";switch(n.length){case 1:r.id=J(),r.startTime=t.endTime,h=n[0];break;case 2:r.id=J(),r.startTime=_t(void 0,z,n[0]),h=n[1];break;case 3:r.id=J(n[0]),r.startTime=_t(void 0,z,n[1]),h=n[2];break}return h&&(r.endTime=Zt(r.startTime,z,h,ot),r.manualEndTime=V(h,"YYYY-MM-DD",!0).isValid(),Jt(r,z,ct,nt)),r},"compileData"),us=o(function(t,i){let a;i.substr(0,1)===":"?a=i.substr(1,i.length):a=i;const n=a.split(","),r={};Mt(n,r,Ht);for(let h=0;h<n.length;h++)n[h]=n[h].trim();switch(n.length){case 1:r.id=J(),r.startTime={type:"prevTaskEnd",id:t},r.endTime={data:n[0]};break;case 2:r.id=J(),r.startTime={type:"getStartDate",startData:n[0]},r.endTime={data:n[1]};break;case 3:r.id=J(n[0]),r.startTime={type:"getStartDate",startData:n[1]},r.endTime={data:n[2]};break}return r},"parseData"),wt,ht,L=[],$t={},ds=o(function(t,i){const a={section:Q,type:Q,processed:!1,manualEndTime:!1,renderEndTime:null,raw:{data:i},task:t,classes:[]},n=us(ht,i);a.raw.startTime=n.startTime,a.raw.endTime=n.endTime,a.id=n.id,a.prevTaskId=ht,a.active=n.active,a.done=n.done,a.crit=n.crit,a.milestone=n.milestone,a.vert=n.vert,a.order=xt,xt++;const r=L.push(a);ht=a.id,$t[a.id]=r-1},"addTask"),U=o(function(t){const i=$t[t];return L[i]},"findTaskById"),fs=o(function(t,i){const a={section:Q,type:Q,description:t,task:t,classes:[]},n=ls(wt,i);a.startTime=n.startTime,a.endTime=n.endTime,a.id=n.id,a.active=n.active,a.done=n.done,a.crit=n.crit,a.milestone=n.milestone,a.vert=n.vert,wt=a,yt.push(a)},"addTaskOrg"),Xt=o(function(){const t=o(function(a){const n=L[a];let r="";switch(L[a].raw.startTime.type){case"prevTaskEnd":{const h=U(n.prevTaskId);n.startTime=h.endTime;break}case"getStartDate":r=_t(void 0,z,L[a].raw.startTime.startData),r&&(L[a].startTime=r);break}return L[a].startTime&&(L[a].endTime=Zt(L[a].startTime,z,L[a].raw.endTime.data,ot),L[a].endTime&&(L[a].processed=!0,L[a].manualEndTime=V(L[a].raw.endTime.data,"YYYY-MM-DD",!0).isValid(),Jt(L[a],z,ct,nt))),L[a].processed},"compileTask");let i=!0;for(const[a,n]of L.entries())t(a),i=i&&n.processed;return i},"compileTasks"),hs=o(function(t,i){let a=i;K().securityLevel!=="loose"&&(a=Se(i)),t.split(",").forEach(function(n){U(n)!==void 0&&(ee(n,()=>{window.open(a,"_self")}),St.set(n,a))}),te(t,"clickable")},"setLink"),te=o(function(t,i){t.split(",").forEach(function(a){let n=U(a);n!==void 0&&n.classes.push(i)})},"setClass"),ks=o(function(t,i,a){if(K().securityLevel!=="loose"||i===void 0)return;let n=[];if(typeof a=="string"){n=a.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);for(let h=0;h<n.length;h++){let f=n[h].trim();f.startsWith('"')&&f.endsWith('"')&&(f=f.substr(1,f.length-2)),n[h]=f}}n.length===0&&n.push(t),U(t)!==void 0&&ee(t,()=>{Ae.runFunc(i,...n)})},"setClickFun"),ee=o(function(t,i){Ft.push(function(){const a=document.querySelector(`[id="${t}"]`);a!==null&&a.addEventListener("click",function(){i()})},function(){const a=document.querySelector(`[id="${t}-text"]`);a!==null&&a.addEventListener("click",function(){i()})})},"pushFun"),ys=o(function(t,i,a){t.split(",").forEach(function(n){ks(n,i,a)}),te(t,"clickable")},"setClickEvent"),ms=o(function(t){Ft.forEach(function(i){i(t)})},"bindFunctions"),gs={getConfig:o(()=>K().gantt,"getConfig"),clear:Ve,setDateFormat:je,getDateFormat:Je,enableInclusiveEndDates:qe,endDatesAreInclusive:Xe,enableTopAxis:Ge,topAxisEnabled:Ue,setAxisFormat:Pe,getAxisFormat:Ye,setTickInterval:Re,getTickInterval:Ne,setTodayMarker:Be,getTodayMarker:ze,setAccTitle:de,getAccTitle:ue,setDiagramTitle:le,getDiagramTitle:oe,setDisplayMode:He,getDisplayMode:Ke,setAccDescription:ce,getAccDescription:ne,addSection:ss,getSections:is,getTasks:as,addTask:ds,findTaskById:U,addTaskOrg:fs,setIncludes:Qe,getIncludes:Ze,setExcludes:$e,getExcludes:ts,setClickEvent:ys,setLink:hs,getLinks:es,bindFunctions:ms,parseDuration:Qt,isInvalidDate:Kt,setWeekday:rs,getWeekday:ns,setWeekend:cs};function Mt(t,i,a){let n=!0;for(;n;)n=!1,a.forEach(function(r){const h="^\\s*"+r+"\\s*$",f=new RegExp(h);t[0].match(f)&&(i[r]=!0,t.shift(1),n=!0)})}o(Mt,"getTaskTags");var ps=o(function(){kt.debug("Something is calling, setConf, remove the call")},"setConf"),Gt={monday:De,tuesday:we,wednesday:_e,thursday:xe,friday:be,saturday:Te,sunday:ve},vs=o((t,i)=>{let a=[...t].map(()=>-1/0),n=[...t].sort((h,f)=>h.startTime-f.startTime||h.order-f.order),r=0;for(const h of n)for(let f=0;f<a.length;f++)if(h.startTime>=a[f]){a[f]=h.endTime,h.order=f+i,f>r&&(r=f);break}return r},"getMaxIntersections"),X,Ts=o(function(t,i,a,n){const r=K().gantt,h=K().securityLevel;let f;h==="sandbox"&&(f=dt("#i"+i));const F=h==="sandbox"?dt(f.nodes()[0].contentDocument.body):dt("body"),R=h==="sandbox"?f.nodes()[0].contentDocument:document,E=R.getElementById(i);X=E.parentElement.offsetWidth,X===void 0&&(X=1200),r.useWidth!==void 0&&(X=r.useWidth);const w=n.db.getTasks();let I=[];for(const m of w)I.push(m.type);I=rt(I);const W={};let M=2*r.topPadding;if(n.db.getDisplayMode()==="compact"||r.displayMode==="compact"){const m={};for(const p of w)m[p.section]===void 0?m[p.section]=[p]:m[p.section].push(p);let T=0;for(const p of Object.keys(m)){const v=vs(m[p],T)+1;T+=v,M+=v*(r.barHeight+r.barGap),W[p]=v}}else{M+=w.length*(r.barHeight+r.barGap);for(const m of I)W[m]=w.filter(T=>T.type===m).length}E.setAttribute("viewBox","0 0 "+X+" "+M);const P=F.select(`[id="${i}"]`),b=fe().domain([he(w,function(m){return m.startTime}),ke(w,function(m){return m.endTime})]).rangeRound([0,X-r.leftPadding-r.rightPadding]);function Z(m,T){const p=m.startTime,v=T.startTime;let g=0;return p>v?g=1:p<v&&(g=-1),g}o(Z,"taskCompare"),w.sort(Z),$(w,X,M),ye(P,M,X,r.useMaxWidth),P.append("text").text(n.db.getDiagramTitle()).attr("x",X/2).attr("y",r.titleTopMargin).attr("class","titleText");function $(m,T,p){const v=r.barHeight,g=v+r.barGap,x=r.topPadding,l=r.leftPadding,d=me().domain([0,I.length]).range(["#00B9FA","#F95002"]).interpolate(ge);et(g,x,l,T,p,m,n.db.getExcludes(),n.db.getIncludes()),st(l,x,T,p),tt(m,g,x,l,v,d,T),it(g,x),at(l,x,T,p)}o($,"makeGantt");function tt(m,T,p,v,g,x,l){m.sort((c,e)=>c.vert===e.vert?0:c.vert?1:-1);const k=[...new Set(m.map(c=>c.order))].map(c=>m.find(e=>e.order===c));P.append("g").selectAll("rect").data(k).enter().append("rect").attr("x",0).attr("y",function(c,e){return e=c.order,e*T+p-2}).attr("width",function(){return l-r.rightPadding/2}).attr("height",T).attr("class",function(c){for(const[e,C]of I.entries())if(c.type===C)return"section section"+e%r.numberSectionStyles;return"section section0"}).enter();const u=P.append("g").selectAll("rect").data(m).enter(),y=n.db.getLinks();if(u.append("rect").attr("id",function(c){return c.id}).attr("rx",3).attr("ry",3).attr("x",function(c){return c.milestone?b(c.startTime)+v+.5*(b(c.endTime)-b(c.startTime))-.5*g:b(c.startTime)+v}).attr("y",function(c,e){return e=c.order,c.vert?r.gridLineStartPadding:e*T+p}).attr("width",function(c){return c.milestone?g:c.vert?.08*g:b(c.renderEndTime||c.endTime)-b(c.startTime)}).attr("height",function(c){return c.vert?w.length*(r.barHeight+r.barGap)+r.barHeight*2:g}).attr("transform-origin",function(c,e){return e=c.order,(b(c.startTime)+v+.5*(b(c.endTime)-b(c.startTime))).toString()+"px "+(e*T+p+.5*g).toString()+"px"}).attr("class",function(c){const e="task";let C="";c.classes.length>0&&(C=c.classes.join(" "));let _=0;for(const[O,S]of I.entries())c.type===S&&(_=O%r.numberSectionStyles);let D="";return c.active?c.crit?D+=" activeCrit":D=" active":c.done?c.crit?D=" doneCrit":D=" done":c.crit&&(D+=" crit"),D.length===0&&(D=" task"),c.milestone&&(D=" milestone "+D),c.vert&&(D=" vert "+D),D+=_,D+=" "+C,e+D}),u.append("text").attr("id",function(c){return c.id+"-text"}).text(function(c){return c.task}).attr("font-size",r.fontSize).attr("x",function(c){let e=b(c.startTime),C=b(c.renderEndTime||c.endTime);if(c.milestone&&(e+=.5*(b(c.endTime)-b(c.startTime))-.5*g,C=e+g),c.vert)return b(c.startTime)+v;const _=this.getBBox().width;return _>C-e?C+_+1.5*r.leftPadding>l?e+v-5:C+v+5:(C-e)/2+e+v}).attr("y",function(c,e){return c.vert?r.gridLineStartPadding+w.length*(r.barHeight+r.barGap)+60:(e=c.order,e*T+r.barHeight/2+(r.fontSize/2-2)+p)}).attr("text-height",g).attr("class",function(c){const e=b(c.startTime);let C=b(c.endTime);c.milestone&&(C=e+g);const _=this.getBBox().width;let D="";c.classes.length>0&&(D=c.classes.join(" "));let O=0;for(const[A,j]of I.entries())c.type===j&&(O=A%r.numberSectionStyles);let S="";return c.active&&(c.crit?S="activeCritText"+O:S="activeText"+O),c.done?c.crit?S=S+" doneCritText"+O:S=S+" doneText"+O:c.crit&&(S=S+" critText"+O),c.milestone&&(S+=" milestoneText"),c.vert&&(S+=" vertText"),_>C-e?C+_+1.5*r.leftPadding>l?D+" taskTextOutsideLeft taskTextOutside"+O+" "+S:D+" taskTextOutsideRight taskTextOutside"+O+" "+S+" width-"+_:D+" taskText taskText"+O+" "+S+" width-"+_}),K().securityLevel==="sandbox"){let c;c=dt("#i"+i);const e=c.nodes()[0].contentDocument;u.filter(function(C){return y.has(C.id)}).each(function(C){var _=e.querySelector("#"+C.id),D=e.querySelector("#"+C.id+"-text");const O=_.parentNode;var S=e.createElement("a");S.setAttribute("xlink:href",y.get(C.id)),S.setAttribute("target","_top"),O.appendChild(S),S.appendChild(_),S.appendChild(D)})}}o(tt,"drawRects");function et(m,T,p,v,g,x,l,d){if(l.length===0&&d.length===0)return;let k,u;for(const{startTime:_,endTime:D}of x)(k===void 0||_<k)&&(k=_),(u===void 0||D>u)&&(u=D);if(!k||!u)return;if(V(u).diff(V(k),"year")>5){kt.warn("The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days.");return}const y=n.db.getDateFormat(),s=[];let c=null,e=V(k);for(;e.valueOf()<=u;)n.db.isInvalidDate(e,y,l,d)?c?c.end=e:c={start:e,end:e}:c&&(s.push(c),c=null),e=e.add(1,"d");P.append("g").selectAll("rect").data(s).enter().append("rect").attr("id",_=>"exclude-"+_.start.format("YYYY-MM-DD")).attr("x",_=>b(_.start.startOf("day"))+p).attr("y",r.gridLineStartPadding).attr("width",_=>b(_.end.endOf("day"))-b(_.start.startOf("day"))).attr("height",g-T-r.gridLineStartPadding).attr("transform-origin",function(_,D){return(b(_.start)+p+.5*(b(_.end)-b(_.start))).toString()+"px "+(D*m+.5*g).toString()+"px"}).attr("class","exclude-range")}o(et,"drawExcludeDays");function st(m,T,p,v){const g=n.db.getDateFormat(),x=n.db.getAxisFormat();let l;x?l=x:g==="D"?l="%d":l=r.axisFormat??"%Y-%m-%d";let d=pe(b).tickSize(-v+T+r.gridLineStartPadding).tickFormat(Pt(l));const u=/^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(n.db.getTickInterval()||r.tickInterval);if(u!==null){const y=u[1],s=u[2],c=n.db.getWeekday()||r.weekday;switch(s){case"millisecond":d.ticks(jt.every(y));break;case"second":d.ticks(zt.every(y));break;case"minute":d.ticks(Bt.every(y));break;case"hour":d.ticks(Nt.every(y));break;case"day":d.ticks(Rt.every(y));break;case"week":d.ticks(Gt[c].every(y));break;case"month":d.ticks(Yt.every(y));break}}if(P.append("g").attr("class","grid").attr("transform","translate("+m+", "+(v-50)+")").call(d).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10).attr("dy","1em"),n.db.topAxisEnabled()||r.topAxis){let y=Ce(b).tickSize(-v+T+r.gridLineStartPadding).tickFormat(Pt(l));if(u!==null){const s=u[1],c=u[2],e=n.db.getWeekday()||r.weekday;switch(c){case"millisecond":y.ticks(jt.every(s));break;case"second":y.ticks(zt.every(s));break;case"minute":y.ticks(Bt.every(s));break;case"hour":y.ticks(Nt.every(s));break;case"day":y.ticks(Rt.every(s));break;case"week":y.ticks(Gt[e].every(s));break;case"month":y.ticks(Yt.every(s));break}}P.append("g").attr("class","grid").attr("transform","translate("+m+", "+T+")").call(y).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10)}}o(st,"makeGrid");function it(m,T){let p=0;const v=Object.keys(W).map(g=>[g,W[g]]);P.append("g").selectAll("text").data(v).enter().append(function(g){const x=g[0].split(Ee.lineBreakRegex),l=-(x.length-1)/2,d=R.createElementNS("http://www.w3.org/2000/svg","text");d.setAttribute("dy",l+"em");for(const[k,u]of x.entries()){const y=R.createElementNS("http://www.w3.org/2000/svg","tspan");y.setAttribute("alignment-baseline","central"),y.setAttribute("x","10"),k>0&&y.setAttribute("dy","1em"),y.textContent=u,d.appendChild(y)}return d}).attr("x",10).attr("y",function(g,x){if(x>0)for(let l=0;l<x;l++)return p+=v[x-1][1],g[1]*m/2+p*m+T;else return g[1]*m/2+T}).attr("font-size",r.sectionFontSize).attr("class",function(g){for(const[x,l]of I.entries())if(g[0]===l)return"sectionTitle sectionTitle"+x%r.numberSectionStyles;return"sectionTitle"})}o(it,"vertLabels");function at(m,T,p,v){const g=n.db.getTodayMarker();if(g==="off")return;const x=P.append("g").attr("class","today"),l=new Date,d=x.append("line");d.attr("x1",b(l)+m).attr("x2",b(l)+m).attr("y1",r.titleTopMargin).attr("y2",v-r.titleTopMargin).attr("class","today"),g!==""&&d.attr("style",g.replace(/,/g,";"))}o(at,"drawToday");function rt(m){const T={},p=[];for(let v=0,g=m.length;v<g;++v)Object.prototype.hasOwnProperty.call(T,m[v])||(T[m[v]]=!0,p.push(m[v]));return p}o(rt,"checkUnique")},"draw"),bs={setConf:ps,draw:Ts},xs=o(t=>`
  .mermaid-main-font {
        font-family: ${t.fontFamily};
  }

  .exclude-range {
    fill: ${t.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${t.sectionBkgColor};
  }

  .section2 {
    fill: ${t.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${t.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${t.titleColor};
  }

  .sectionTitle1 {
    fill: ${t.titleColor};
  }

  .sectionTitle2 {
    fill: ${t.titleColor};
  }

  .sectionTitle3 {
    fill: ${t.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    font-family: ${t.fontFamily};
  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${t.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
  }

  .grid .tick text {
    font-family: ${t.fontFamily};
    fill: ${t.textColor};
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${t.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: ${t.fontFamily};
  }

  .taskTextOutsideRight {
    fill: ${t.taskTextDarkColor};
    text-anchor: start;
    font-family: ${t.fontFamily};
  }

  .taskTextOutsideLeft {
    fill: ${t.taskTextDarkColor};
    text-anchor: end;
  }


  /* Special case clickable */

  .task.clickable {
    cursor: pointer;
  }

  .taskText.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }


  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${t.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${t.taskBkgColor};
    stroke: ${t.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${t.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${t.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${t.activeTaskBkgColor};
    stroke: ${t.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${t.doneTaskBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .vert {
    stroke: ${t.vertLineColor};
  }

  .vertText {
    font-size: 15px;
    text-anchor: middle;
    fill: ${t.vertLineColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.titleColor||t.textColor};
    font-family: ${t.fontFamily};
  }
`,"getStyles"),_s=xs,Cs={parser:Oe,db:gs,renderer:bs,styles:_s};export{Cs as diagram};
