(this["webpackJsonp8086.js"]=this["webpackJsonp8086.js"]||[]).push([[0],{68:function(e,t,n){e.exports=n(89)},77:function(e,t,n){},78:function(e,t,n){},89:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),a=n(11),s=n.n(a),o=n(6),u=(n(77),n(78),n(60)),l=n(114),c=n(113),m=n(110),h=n(56),p=n.n(h),f=(n(84),n(85),n(63)),b=n(41),v=n(61),g=n(3),d=n(9),E=[" ","\t"],N=[].concat(["AX","BX","CX","DX","AL","BL","CL","DL","AH","BH","CH","DH"],["DI","SI","BP","SP"],["DS","ES","SS","CS"]),O=["AAA","AAD","AAM","AAS","ADC","ADD","AND","CALL","CBW","CLC","CLD","CLI","CMC","CMP","CMPSB","CMPSW","CWD","DAA","DAS","DEC","DIV","HLT","IDIV","IMUL","IN","INC","INT","INTO","IRET","JA","JAE","JB","JBE","JC","JCXZ","JE","JG","JGE","JL","JLE","JMP","JNA","JNAE","JNB","JNBE","JNC","JNE","JNG","JNGE","JNL","JNLE","JNO","JNP","JNS","JNZ","JO","JP","JPE","JPO","JS","JZ","LAHF","LDS","LEA","LES","LODSB","LODSW","LOOP","LOOPE","LOOPNE","LOOPNZ","LOOPZ","MOV","MOVSB","MOVSW","MUL","NEG","NOP","NOT","OR","OUT","POP","POPA","POPF","PUSH","PUSHA","PUSHF","RCL","RCR","REP","REPE","REPNE","REPNZ","REPZ","RET","RETF","ROL","ROR","SAHF","SAL","SAR","SBB","SCASB","SCASW","SHL","SHR","STC","STD","STI","STOSB","STOSW","SUB","TEST","XCHG","XLATB","XOR"],y=function(e){return 1<<e},w={sign:y(7),zero:y(6),auxilliary:y(4),carry:y(0),overflow:y(11),directional:y(10),interrupt:y(9),trap:y(8),parity:y(2)},A=function e(t){var n=t.value,i=t.position,r=t.lineNumber;Object(g.a)(this,e),this.name="NEWLINE",this.value=n,this.position=i,this.lineNumber=r},k=function e(t){var n=t.value,i=t.position,r=t.lineNumber;Object(g.a)(this,e),this.name="COMMENT",this.value=n,this.position=i,this.lineNumber=r},S=function e(t){var n=t.value,i=t.position,r=t.lineNumber;Object(g.a)(this,e),this.name="MNEMONIC",this.value=n,this.position=i,this.lineNumber=r},j=function e(t){var n=t.value,i=t.position,r=t.lineNumber;Object(g.a)(this,e),this.name="SEPARATOR",this.value=n,this.position=i,this.lineNumber=r},C=function e(t){var n=t.value,i=t.position,r=t.lineNumber;Object(g.a)(this,e),this.name="STRING",this.value=n,this.position=i,this.lineNumber=r},L=function e(t){var n=t.mnemonic,i=t.op1,r=t.op2;Object(g.a)(this,e),this.mnemonic=n,this.op1=i,this.op2=r},I=n(12),R=n(13),M=n(34),x=function(e){Object(I.a)(n,e);var t=Object(R.a)(n);function n(e){var i,r=e.token,a=e.position,s=e.lineNumber;return Object(g.a)(this,n),(i=t.call(this)).name="Invalid Token",i.position=a,i.lineNumber=s,i.token=r,i}return n}(Object(M.a)(Error)),P=function(e){Object(I.a)(n,e);var t=Object(R.a)(n);function n(e){var i,r=e.position,a=e.lineNumber;return Object(g.a)(this,n),(i=t.call(this)).name="Unterminated Quote",i.position=r,i.lineNumber=a,i}return n}(Object(M.a)(Error)),D=function(e){Object(I.a)(n,e);var t=Object(R.a)(n);function n(e){var i,r=e.position,a=e.lineNumber;return Object(g.a)(this,n),(i=t.call(this)).name="Unterminated Bracket",i.position=r,i.lineNumber=a,i}return n}(Object(M.a)(Error)),B=function(e){Object(I.a)(n,e);var t=Object(R.a)(n);function n(e){var i,r=e.position,a=e.lineNumber;return Object(g.a)(this,n),(i=t.call(this)).name="Syntax Error",i.position=r,i.lineNumber=a,i}return n}(Object(M.a)(Error));function J(e){var t;t=e.startsWith("0B")?parseInt(e,2):e.startsWith("0X")?parseInt(e,16):e.startsWith("0")?parseInt(e,8):parseInt(e,10);var n=Math.ceil(Math.log2(t));if(t>Math.pow(2,16))throw Error("Immediate Value too large, only max 16 bit allowd");return{value:t,size:n}}var X=function e(t,n,i){Object(g.a)(this,e),this.name="OPERAND",this.value=t,this.size=0,this.position=n,this.lineNumber=i},T=function(e){Object(I.a)(n,e);var t=Object(R.a)(n);function n(e){var i,r=e.value,a=e.position,s=e.lineNumber;Object(g.a)(this,n),(i=t.call(this,r,a,s)).type="IMMEDIATE";var o=J(r);if(i.value=o.value,i.size=o.size,Number.isNaN(i.value))throw new x({position:i.position,lineNumber:i.lineNumber});return i}return n}(X),z=function(e){Object(I.a)(n,e);var t=Object(R.a)(n);function n(e){var i,r=e.value,a=e.position,s=e.lineNumber;return Object(g.a)(this,n),(i=t.call(this,r,a,s)).type="RELATIVE",i.size=16,i}return n}(X),F=function(e){Object(I.a)(n,e);var t=Object(R.a)(n);function n(e){var i,r=e.value,a=e.position,s=e.lineNumber;return Object(g.a)(this,n),(i=t.call(this,r,a,s)).type="REGISTER",i.value.endsWith("L")||i.value.endsWith("H")?i.size=8:i.size=16,i}return n}(X),H=function(e){Object(I.a)(n,e);var t=Object(R.a)(n);function n(e){var i,r=e.value,a=e.position,s=e.lineNumber;return Object(g.a)(this,n),(i=t.call(this,r,a,s)).type="MEMORY",i.size=16,i.value=J(r.slice(1,-1)).value,i}return n}(X),W=function(){function e(t){Object(g.a)(this,e),this.position=0,this.buffer=t,this.bufferLength=t.length,this.lineNumber=1}return Object(d.a)(e,[{key:"skipNonTokens",value:function(){for(;this.position<this.bufferLength;){var e=this.buffer[this.position];if(!E.includes(e))break;this.position+=1}}},{key:"processNewLine",value:function(e){this.lineNumber+=1;var t=new A({value:e,position:this.position,lineNumber:this.lineNumber});return this.position+=1,t}},{key:"processComment",value:function(){for(var t=this.position+1;t<this.bufferLength&&!e.isNewLine(this.buffer[t]);)t+=1;var n=new k({value:this.buffer.substring(this.position,t),position:this.position,lineNumber:this.lineNumber});return this.position=t,n}},{key:"processAlphaNum",value:function(){for(var t=this.position+1;t<this.bufferLength&&e.isAlphaNum(this.buffer[t]);)t+=1;var n=this.buffer.substring(this.position,t).toUpperCase();if(O.includes(n)){var i=new S({value:n,position:this.position,lineNumber:this.lineNumber});return this.position=t,i}if(N.includes(n)){var r=new F({value:n,position:this.position,lineNumber:this.lineNumber});return this.position=t,r}if(new RegExp("^".concat("(0X|0B|0|)[0-9A-F]+","$")).test(n)){var a=new T({value:n,position:this.position,lineNumber:this.lineNumber});return this.position=t,a}throw new x({token:n,position:this.position,lineNumber:this.lineNumber})}},{key:"processBrackets",value:function(){var e=this.buffer.indexOf("]",this.position+1);if(-1===e)throw new D({position:this.position,lineNumber:this.lineNumber});var t=this.buffer.substring(this.position,e+1).toUpperCase();if(new RegExp("\\[".concat("(0X|0B|0|)[0-9A-F]+","\\]")).test(t)){var n=new H({value:t,position:this.position,lineNumber:this.lineNumber});return this.position=e+1,n}if(/^\[[A-Z]{2}\+[A-Z]{2}\]$/.test(t)){var i=new z({value:t,position:this.position,lineNumber:this.lineNumber});return this.position=e+1,i}throw new x({token:t,position:this.position,lineNumber:this.lineNumber})}},{key:"processQuote",value:function(e){var t=this.buffer.indexOf(e,this.position+1);if(-1===t)throw new P({position:this.position,lineNumber:this.lineNumber});var n=new C({value:this.buffer.substring(this.position,t+1),position:this.position,lineNumber:this.lineNumber});return this.position=t+1,n}},{key:"processSeparator",value:function(e){var t=this.position+1,n=new j({value:e,position:this.position,lineNumber:this.lineNumber});return this.position=t,n}},{key:"nextToken",value:function(){if(this.skipNonTokens(),!(this.position>=this.bufferLength)){var t=this.buffer[this.position];if(e.isNewLine(t))return this.processNewLine(t);if(e.isComment(t))return this.processComment();if(e.isAlphaNum(t))return this.processAlphaNum();if(e.isBracket(t))return this.processBrackets();if(e.isQuote(t))return this.processQuote(t);if(e.isSeparator(t))return this.processSeparator(t);throw new x({token:t,position:this.position,lineNumber:this.lineNumber})}}},{key:"tokenize",value:function(){for(var e=[];this.position<this.bufferLength;){var t=this.nextToken();t&&e.push(t)}return e.push(new A({value:"\n",position:this.positon+1,lineNumber:this.lineNumber+1})),e}}],[{key:"isNewLine",value:function(e){return/^[\n\r]$/.test(e)}},{key:"isComment",value:function(e){return/^[;]$/.test(e)}},{key:"isAlpha",value:function(e){return/^[A-Za-z]$/.test(e)}},{key:"isNum",value:function(e){return/^[0-9]$/.test(e)}},{key:"isAlphaNum",value:function(e){return/^[A-Za-z0-9]$/.test(e)}},{key:"isBracket",value:function(e){return/^[[]$/.test(e)}},{key:"isQuote",value:function(e){return/^['"]$/.test(e)}},{key:"isSeparator",value:function(e){return/^[,]$/.test(e)}}]),e}(),U=function(){function e(t){Object(g.a)(this,e),this.value=t||0,this.h=0,this.l=0}return Object(d.a)(e,[{key:"get",value:function(e){return e?"L"===e?this.l:"H"===e?this.h:void 0:this.value}},{key:"set",value:function(e,t){if(t){if(e>Math.pow(2,8))throw Error("Can't set more than 8 bit value to an 8 bit register")}else if(e>Math.pow(2,16))throw Error("Can't set more than 8 bit value to an 16 bit register");if(!t)return this.value=e,this.l=255&e,void(this.h=e>>>8);"L"===t?this.l=e:"H"===t&&(this.h=e),this.value=(this.h<<8)+this.l}}]),e}(),V=function(e){Object(I.a)(n,e);var t=Object(R.a)(n);function n(){return Object(g.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"setFlag",value:function(e){this.set(this.get()|e)}},{key:"unsetFlag",value:function(e){this.set(this.get()&~e)}},{key:"getFlag",value:function(e){return 0===(this.get()&e)?0:1}}]),n}(U),Z=function e(){Object(g.a)(this,e),this.regs={AX:new U,BX:new U,CX:new U,DX:new U,IP:new U,DI:new U,SI:new U,BP:new U(400),SP:new U(400),DS:new U(0),ES:new U(400),CS:new U(600),SS:new U(200),flags:new V}},$=function(){function e(){Object(g.a)(this,e),this.mem=[],this.initializeMem()}return Object(d.a)(e,[{key:"initializeMem",value:function(){for(var e=0;e<1e3;e+=1)this.mem.push(0)}},{key:"set",value:function(e,t){if(t>Math.pow(2,16))throw Error("Can't set greater than 16 bit value in memory location");this.mem[e]=t}},{key:"get",value:function(e){return this.mem[e]}}]),e}(),G=function(){function e(t,n){Object(g.a)(this,e),this.registers=t,this.memory=n}return Object(d.a)(e,[{key:"get",value:function(e){if(!e)return null;var t=this.registers.regs;switch(e.type){case"IMMEDIATE":return e.value;case"REGISTER":if(["L","H"].includes(e.value[1])){if(!["A","B","C","D"].includes(e.value[0]))throw SyntaxError("Only AX,BX,CX,DX registers can have 'L' or 'H' suffix");return t["".concat(e.value[0],"X")].get(e.value[1])}return t[e.value].get();case"MEMORY":return this.memory.get(t.DS.get()+e.value);case"RELATIVE":throw SyntaxError("Not implemented");default:throw SyntaxError("Invalid Adressing mode, this shoudln't happen ideally")}}},{key:"set",value:function(e,t){var n=this.registers.regs;switch(e.type){case"IMMEDIATE":throw SyntaxError("Can't set to immediate value???");case"REGISTER":if(["L","H"].includes(e.value[1])){if(!["A","B","C","D"].includes(e.value[0]))throw SyntaxError("Only AX,BX,CX,DX registers can have 'L' or 'H' suffix");return n["".concat(e.value[0],"X")].set(t,e.value[1])}return n[e.value].set(t);case"MEMORY":return this.memory.set(n.DS.get()+e.value,t);case"RELATIVE":throw SyntaxError("Not implemented");default:throw SyntaxError("Invalid Adressing mode, this shoudln't happen ideally")}}}]),e}(),Q=function(){function e(){Object(g.a)(this,e),this.registers=new Z,this.memory=new $,this.addressing=new G(this.registers,this.memory)}return Object(d.a)(e,[{key:"loadCode",value:function(e){var t=this,n=this.registers.regs.CS.get();e.forEach((function(e,i){t.memory.set(n+i,e)}))}},{key:"step",value:function(){var e=this,t=this.registers.regs.IP.get(),n=this.memory.get(this.registers.regs.CS.get()+t),i=n.mnemonic,r=n.op1,a=n.op2,s=this.registers.regs,o=function(t){return e.addressing.get(t)},u=function(t,n){return e.addressing.set(t,n)};if(!i)throw SyntaxError("Invalid instruction at the current instruction pointer");switch(i.value){case"MOV":if(r.size<a.size)throw SyntaxError("Can't move larger ".concat(a.size," bit value to ").concat(r.size," bit location"));u(r,o(a));break;case"JS":1===s.flags.getFlag(w.sign)&&(t=o(r)-1);break;case"JNS":0===s.flags.getFlag(w.sign)&&(t=o(r)-1);break;case"JO":1===s.flags.getFlag(w.overflow)&&(t=o(r)-1);break;case"JNO":0===s.flags.getFlag(w.overflow)&&(t=o(r)-1);break;case"JP":case"JPE":1===s.flags.getFlag(w.parity)&&(t=o(r)-1);break;case"JNP":0===s.flags.getFlag(w.parity)&&(t=o(r)-1);break;case"ADD":if(a){var l=o(r);u(r,l+=o(a))}else{var c=8===r.size?s.AX.get("l"):s.AX.get();c+=o(r),s.AX.set(c)}break;case"DIV":if(8===r.size){var m=s.AX.get("l")/o(r),h=s.AX.get("l")%o(r);s.AX.set(m,"l"),s.AX.set(h,"h")}else{var p=s.AX.get()/o(r),f=s.AX.get()%o(r);s.AX.set(p),s.DX.set(f)}break;case"MUL":if(8===r.size){var b=s.AX.get("l")*o(r);s.AX.set(b)}else{var v=s.AX.get()*o(r);s.AX.set(v)}break;case"AND":u(r,o(r)&o(a));break;case"OR":u(r,o(r)|o(a));break;case"SUB":u(r,o(r)-o(a));break;case"CMP":var g=o(r),d=o(a);g===d?(s.flags.setFlag(w.zero),s.flags.unsetFlag(w.carry)):g>d?(s.flags.unsetFlag(w.zero),s.flags.unsetFlag(w.carry)):(s.flags.setFlag(w.carry),s.flags.unsetFlag(w.zero));break;case"NOT":u(r,~o(r));break;case"JMP":t=o(r)-1;break;case"JE":case"JZ":1===s.flags.getFlag(w.zero)&&(t=o(r)-1);break;case"JNE":case"JNZ":0===s.flags.getFlag(w.zero)&&(t=o(r)-1)}s.IP.set(t+1)}}]),e}(),Y=function(){function e(t){Object(g.a)(this,e),this.rawInstructions=e.getInstructionsFromTokens(t),this.instructions=[]}return Object(d.a)(e,[{key:"parse",value:function(){var e=this;return this.rawInstructions.forEach((function(t){if(t.length>4)throw new B;if(t.length>2&&"SEPARATOR"!==t[2].name)throw new B;e.instructions.push(new L({mnemonic:t[0],op1:t[1]||null,op2:t[3]||null}))})),this.instructions}}],[{key:"getInstructionsFromTokens",value:function(e){var t=[],n=[];return e.forEach((function(e){"NEWLINE"===e.name?(n.length&&t.push(n),n=[]):"COMMENT"!==e.name&&n.push(e)})),t}}]),e}(),_=new(function(){function e(){Object(g.a)(this,e),this.cpu=new Q}return Object(d.a)(e,[{key:"loadCode",value:function(e){var t=new W(e).tokenize(),n=new Y(t).parse();this.cpu.loadCode(n)}},{key:"getRegisters",value:function(){var e={};return Object.entries(this.cpu.registers.regs).forEach((function(t){["A","B","C","D"].includes(t[0][0])&&(e["".concat(t[0][0],"H")]=t[1].get("H"),e["".concat(t[0][0],"L")]=t[1].get("L")),e[t[0]]=t[1].get()})),e}},{key:"getMemory",value:function(){return Object(v.a)(this.cpu.memory.mem)}},{key:"resetState",value:function(){this.cpu=new Q}}]),e}()),q={registers:_.getRegisters(),memory:_.getMemory(),code:"",error:{isRaised:!1}},K=Object(b.b)({name:"emulator",initialState:q,reducers:{updateCode:function(e,t){e.code=t.payload},updateRegisters:function(e,t){e.registers=t.payload},updateMemory:function(e,t){e.memory=t.payload},raiseError:function(e,t){e.error=Object(f.a)({isRaised:!0},t.payload)},clearError:function(e){e.error={isRaised:!1}}}}),ee=function(e){return e.emulator.code},te=function(e){return e.emulator.memory},ne=function(e){return e.emulator.registers},ie=function(e){return e.emulator.error},re=K.actions,ae=re.updateCode,se=re.updateRegisters,oe=(re.updateMemory,re.raiseError),ue=re.clearError,le=K.reducer,ce=n(32),me=n(33),he=Object(m.a)((function(e){return{buttonsContainer:{background:e.palette.background.default,color:e.palette.text.primary,padding:"1.2rem"},fontAwesomeIcon:{width:"3rem",height:"2rem",outline:"none",display:"inline-block",textAlign:"center",background:"none",color:e.palette.text.primary}}}));function pe(){var e=he(),t=Object(o.b)(),n=Object(o.c)(ee);return r.a.createElement("div",{className:e.buttonsContainer},r.a.createElement("button",{type:"button",className:e.fontAwesomeIcon},r.a.createElement(ce.a,{icon:me.a})),r.a.createElement("button",{type:"button",className:e.fontAwesomeIcon},r.a.createElement(ce.a,{icon:me.d})),r.a.createElement("button",{type:"button",className:e.fontAwesomeIcon,onClick:function(){try{_.loadCode(n),_.cpu.step(),t(se(_.getRegisters()))}catch(e){t(oe({name:e.name,token:e.token,message:e.message,position:e.position,lineNumber:e.lineNumber}))}}},r.a.createElement(ce.a,{icon:me.b})),r.a.createElement("button",{type:"button",className:e.fontAwesomeIcon},r.a.createElement(ce.a,{icon:me.c})))}var fe=n(115),be=n(117),ve=n(116);function ge(){var e=Object(o.b)(),t=Object(o.c)(ie);return r.a.createElement(ve.a,{in:t.isRaised},r.a.createElement(fe.a,{severity:"error",onClose:function(){e(ue())}},r.a.createElement(be.a,null,"".concat(t.name,": ").concat(t.message||t.token)),t.position?r.a.createElement(r.a.Fragment,null,"Please check out line:",r.a.createElement("strong",null," ".concat(t.lineNumber))):null))}function de(){var e=Object(o.b)(),t=Object(o.c)(ie),n=Object(o.c)(ee),i={};t.isRaised&&(i={row:t.lineNumber-1,column:0,type:"error",text:"".concat(t.name,": ").concat(t.message||t.token)});return r.a.createElement("div",null,r.a.createElement(ge,null),r.a.createElement(pe,null),r.a.createElement(p.a,{mode:"assembly_x86",fontSize:"1rem",theme:"dracula",onChange:function(t){e(ae(t))},value:n||"; Welcome to 8086.js!\n;\n; This is still under development and supports few instructions such as MOV, ADD, AND, etc.\n; Currently, it does not support pre-processor directives or interrupts.\n; Contribute to 8086.js at https://github.com/roerohan/8086.js :D\n\n",showPrintMargin:!1,height:"100vh",width:"50vw",name:"editor",annotations:[i],editorProps:{$blockScrolling:!0}}))}var Ee=n(112),Ne=Object(m.a)((function(){return{display:{width:"inherit",height:"40%",background:"#21222C",borderRadius:"0.5rem",padding:"0.5rem",border:"1px solid #44475A"},heading:{borderBottom:"1px solid #44475A",paddingBottom:"0.5rem"}}}));function Oe(){var e=Ne();return r.a.createElement("div",{className:e.display},r.a.createElement("div",{className:e.heading},"Display"))}var ye=n(62),we=Object(m.a)((function(e){return{register:{backgroundColor:e.palette.background.default,color:e.palette.text.primary,width:"4rem",fontSize:"1.2rem",padding:"0.3rem",textAlign:"center",border:"1px solid ".concat(e.palette.text.secondary)},label:{width:"3rem",display:"inline-block",color:e.palette.text.secondary},regContainer:{height:"5rem"}}})),Ae=function(e,t){return e.toString(t).padStart(4,"0")};function ke(e){var t=we(),n=e.base,a=e.name,s=Object(o.c)(ne),u=Object(o.b)(),l=Object(i.useState)(Ae(s[a],n)),c=Object(ye.a)(l,2),m=c[0],h=c[1],p=s[a];Object(i.useEffect)((function(){h(Ae(s[a],n))}),[p,a,s,n]);var f=Object(i.useCallback)((function(e){var t=e.target;h(t.value.padStart(4,"0"))}),[]);return r.a.createElement("div",{className:t.regContainer},r.a.createElement("span",{className:t.label},a),r.a.createElement("input",{id:a,value:m,onBlur:f,onChange:function(e){var t=e.target,i=parseInt(t.value,n)||0;i<=65535&&i.toString(n)===(t.value.replace(/^0+/,"")||"0")&&(console.log(t.value,i),_.cpu.registers.regs[a].set(i),h(t.value),u(se(s)))},className:t.register}))}ke.defaultProps={base:16};var Se=Object(m.a)((function(e){return{regAndMem:{textAlign:"left",marginTop:"2vh",display:"flex",overflowX:"auto"},regRow:{width:"10.5rem"},paper:{color:e.palette.text.primary,borderRadius:"0.5rem",padding:"0.5rem",border:"1px solid #44475A",width:"23rem",height:"43vh",background:"#21222C",overflowY:"scroll"},heading:{borderBottom:"1px solid #44475A",paddingBottom:"0.5rem",textAlign:"center",position:"sticky"},memoryRow:{width:"100%",marginTop:"0.1rem",paddingBottom:"0.5rem",borderBottom:"1px solid #44475A"},memHeading:{fontWeight:"bold",marginTop:"0.5rem",paddingBottom:"0.5rem",borderBottom:"1px solid #44475A"},address:{width:"3rem",display:"inline-block",textAlign:"center",marginLeft:"4rem"},value:{textAlign:"center",display:"inline-block",width:"15rem"}}}));function je(){var e=Se(),t=Object(o.c)(te);return r.a.createElement("div",{className:e.regAndMem},r.a.createElement("div",{className:e.regRow},r.a.createElement(ke,{name:"AX"}),r.a.createElement(ke,{name:"BX"}),r.a.createElement(ke,{name:"CX"}),r.a.createElement(ke,{name:"DX"}),r.a.createElement(ke,{name:"BP"}),r.a.createElement(ke,{name:"SP"})),r.a.createElement("div",{className:e.regRow},r.a.createElement(ke,{name:"SI"}),r.a.createElement(ke,{name:"DI"}),r.a.createElement(ke,{name:"DS"}),r.a.createElement(ke,{name:"ES"}),r.a.createElement(ke,{name:"SS"}),r.a.createElement(ke,{name:"CS"})),r.a.createElement("div",{className:e.regRow},r.a.createElement(ke,{name:"IP"}),r.a.createElement(ke,{name:"flags"})),r.a.createElement("div",null,r.a.createElement(Ee.a,{className:e.paper},r.a.createElement("div",{className:e.heading},"Memory"),r.a.createElement("div",null,r.a.createElement("div",{className:e.memHeading},r.a.createElement("span",{className:e.address},"Address"),r.a.createElement("span",{className:e.value},"Value")),t.map((function(t,n){return r.a.createElement("div",{key:1e4*Math.random(),className:e.memoryRow},r.a.createElement("span",{className:e.address},n),r.a.createElement("span",{className:e.value},t))}))))))}var Ce=Object(m.a)((function(e){return{paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.primary,height:"100vh",display:"flex",flexDirection:"column"}}}));function Le(){var e=Ce();return r.a.createElement(Ee.a,{className:e.paper},r.a.createElement(Oe,null),r.a.createElement(je,null))}var Ie=Object(m.a)((function(){return{root:{flexGrow:1,height:"100vh"}}}));function Re(){var e=Ie();return r.a.createElement("div",{className:e.root},r.a.createElement(c.a,{container:!0,spacing:1},r.a.createElement(c.a,{item:!0,xs:6},r.a.createElement(Le,null)),r.a.createElement(c.a,{item:!0,xs:6},r.a.createElement(de,null))))}var Me=Object(u.a)({palette:{type:"dark",background:{default:"#282a36",paper:"#282a36"},text:{primary:"#f8f8f2",secondary:"#6272a4"}}});var xe=function(){return r.a.createElement(l.a,{theme:Me},r.a.createElement(Re,null))},Pe=Object(b.a)({reducer:{emulator:le}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,{store:Pe},r.a.createElement(xe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[68,1,2]]]);