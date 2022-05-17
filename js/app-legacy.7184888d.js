(function(){"use strict";var t={8864:function(t,e,s){s(6992),s(8674),s(9601),s(7727);var i=s(144),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",[s("v-main",{staticClass:"main"},[t.isShowStatisticModal?t._e():s("div",{staticClass:"title-wrapp d-flex justify-center align-center",class:t.changeTitleStyle,attrs:{isShowStatisticModal:t.isShowStatisticModal}},[s("h1",{staticClass:"title-text"},[t._v(" Սովորիր Հաշվել ")])]),s("v-container",{staticClass:"container d-flex flex-column",class:t.changeContainerHeight},[s("SelectOperations",{class:t.changeSelectBtnsStyles,attrs:{isShowStatisticModal:t.isShowStatisticModal,isAlertMsgNumber:t.isAlertMsgNumber,isAlertMsgOperation:t.isAlertMsgOperation,alertMsg:t.alertMsg,isActiveTitle:t.isActiveTitle},on:{selectOperation:t.selectOperation}}),t.isShowStartBtn?s("div",{staticClass:"btn-start-wrapp d-flex justify-center align-end align-sm-center"},[s("v-btn",{staticClass:"btn-start d-flex justify-center",attrs:{large:""},on:{click:t.start}},[t._v(" Սկսել ")])],1):t._e(),s("transition",{attrs:{name:"component-fade",mode:"out-in"}},[s("RandomNumbers",{attrs:{isShowRandomNumbers:t.isShowRandomNumbers,isShowStartBtn:t.isShowStartBtn,firstRandomNumber:t.firstRandomNumber,secondRandomNumber:t.secondRandomNumber,matemamitcSymbol:t.matemamitcSymbol}},[s("InputValue",{on:{checkResult:t.checkResult},model:{value:t.inputValue,callback:function(e){t.inputValue=e},expression:"inputValue"}})],1)],1),s("transition",{attrs:{name:"component-fade",mode:"out-in"}},[s("ResultModal",{attrs:{isShowResultModal:t.isShowResultModal,isShowCorrectResultBtn:t.isShowCorrectResultBtn,isResultTrue:t.isResultTrue,resultMsgNumber:t.resultMsgNumber,resultMsgText:t.resultMsgText,result:t.result,inputValue:t.inputValue},on:{showCorrectResult:t.showCorrectResult,closeResultModal:t.closeResultModal,matematicOperation:t.matematicOperation}})],1),s("transition",{attrs:{name:"component-fade",mode:"out-in"}},[s("StatisticModal",{ref:"statisticModal",attrs:{isActiveTitle:t.isActiveTitle,isShowStatisticModal:t.isShowStatisticModal,countCallFuncMatematicOperation:t.countCallFuncMatematicOperation,countCorrectAnswer:t.countCorrectAnswer,countWrongAnswer:t.countWrongAnswer,correctAnswer:t.correctAnswer,wrongAnswer:t.wrongAnswer},on:{closeResultModal:t.closeResultModal}})],1),t.isShowStatisticModal?t._e():s("div",{staticClass:"btn-group d-flex",class:t.changeFooterBtnsStyle,attrs:{isActiveTitle:t.isActiveTitle}},[s("v-btn",{staticClass:"btn-group-item",attrs:{"x-large":"",fab:""},on:{click:t.matematicOperation}},[t._v(" Փոխել "),s("br"),t._v(" թվերը ")]),s("v-btn",{staticClass:"btn-group-item",attrs:{"x-large":"",fab:""},on:{click:t.checkResult}},[t._v(" Ստուգել ")]),s("v-btn",{staticClass:"btn-group-item",attrs:{"x-large":"",fab:""},on:{click:t.showFinishResults}},[t._v(" Ավարտել ")])],1)],1)],1)],1)},r=[],o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.isShowStatisticModal?t._e():s("div",{staticClass:"select-operations d-flex flex-column justify-space-around flex-sm-row justify-sm-center align-sm-center"},[s("div",{staticClass:"mathematic-operation d-flex flex-column align-sm-center"},[s("h3",{staticClass:"title-select-btns",class:t.changeBtnsTitleTextColor.operations},[t._v("Ընտրեք կոճակներից մեկը")]),s("div",{staticClass:"select-btn-group d-flex flex-sm-wrap flex-sm-column flex-md-nowrap flex-md-row align-center justify-md-space-between"},[s("v-btn",{staticClass:"select-btn-group-item plus",attrs:{id:"plus","x-large":"",fab:"",dark:"",color:"blue darken-3"},on:{click:function(e){return t.$emit("selectOperation",e.id="plus")}}},[t._v(" + ")]),s("v-btn",{staticClass:"select-btn-group-item minus",attrs:{id:"minus","x-large":"",fab:"",dark:"",color:"blue darken-3"},on:{click:function(e){return t.$emit("selectOperation",e.id="minus")}}},[t._v(" - ")]),s("v-btn",{staticClass:"select-btn-group-item",attrs:{id:"multiply","x-large":"",fab:"",dark:"",color:"blue darken-3"},on:{click:function(e){return t.$emit("selectOperation",e.id="multiply")}}},[t._v(" x ")]),s("v-btn",{staticClass:"select-btn-group-item",attrs:{id:"separate","x-large":"",fab:"",dark:"",color:"blue darken-3"},on:{click:function(e){return t.$emit("selectOperation",e.id="separate")}}},[t._v(" / ")])],1)]),s("div",{staticClass:"mathematic-operation d-flex flex-column align-sm-center"},[s("h3",{staticClass:"title-select-btns",class:t.changeBtnsTitleTextColor.numbers},[t._v("Ընտրեք կոճակներից մեկը")]),s("div",{staticClass:"select-btn-group d-flex flex-sm-wrap flex-sm-column flex-md-nowrap flex-md-row align-center justify-md-space-between"},[s("v-btn",{staticClass:"select-btn-group-item",attrs:{id:"1",fab:"",dark:"","x-large":"",color:"blue darken-3"},on:{click:function(e){return t.$emit("selectOperation",e.id="1")}}},[t._v(" 1-9 ")]),s("v-btn",{staticClass:" select-btn-group-item",attrs:{id:"2",fab:"",dark:"","x-large":"",color:"blue darken-3"},on:{click:function(e){return t.$emit("selectOperation",e.id="2")}}},[t._v(" 1-99 ")]),s("v-btn",{staticClass:"select-btn-group-item",attrs:{id:"3",fab:"",dark:"","x-large":"",color:"blue darken-3"},on:{click:function(e){return t.$emit("selectOperation",e.id="3")}}},[t._v(" 1-999 ")]),s("v-btn",{staticClass:"select-btn-group-item",attrs:{id:"4",fab:"",dark:"","x-large":"",color:"blue darken-3"},on:{click:function(e){return t.$emit("selectOperation",e.id="4")}}},[t._v(" 1-9999 ")])],1)])])},a=[],l=(s(9653),{name:"SelectOperations",computed:{changeBtnsTitleTextColor:function(){return{operations:{"title-select-btns":0==this.isAlertMsgOperation,"title-select-btns-error":1==this.isAlertMsgOperation},numbers:{"title-select-btns":0==this.isAlertMsgNumber,"title-select-btns-error":1==this.isAlertMsgNumber}}}},props:{isShowStatisticModal:Boolean,isAlertMsgOperation:Boolean,isAlertMsgNumber:Boolean,isShowTitle:Boolean,alertMsg:String,numberId:Number,operationId:String},data:function(){return{}}}),c=l,u=s(1001),h=s(3453),m=s.n(h),d=s(3077),p=(0,u.Z)(c,o,a,!1,null,null,null),f=p.exports;m()(p,{VBtn:d.Z});var b=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.isShowRandomNumbers?s("div",{staticClass:"random-numbers d-flex flex-column justify-space-around"},[s("div",{staticClass:"d-flex justify-center random-numbers-item"},[s("span",{staticClass:"random-number inline-block"},[t._v(" "+t._s(t.firstRandomNumber)+" ")]),s("span",{staticClass:"operation-symbol inline-block"},[t._v(" "+t._s(t.matemamitcSymbol)+" ")]),s("span",{staticClass:"random-number inline-block"},[t._v(" "+t._s(t.secondRandomNumber)+" ")])]),s("div",{staticClass:"d-flex justify-center random-numbers-item"},[t._t("default")],2)]):t._e()},g=[],M={name:"RandomNumbers",props:{isShowRandomNumbers:Boolean,isShowStartBtn:Boolean,firstRandomNumber:Number,secondRandomNumber:Number,matemamitcSymbol:String}},v=M,S=(0,u.Z)(v,b,g,!1,null,null,null),w=S.exports,R=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-text-field",{staticClass:"input-text",attrs:{label:"Գրեք պատասխանը","single-line":"",type:"number",autofocus:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.$emit("checkResult")}},model:{value:t.inputVal,callback:function(e){t.inputVal=e},expression:"inputVal"}})],1)},C=[],N={name:"InputValue",computed:{inputVal:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}},data:function(){return{}},methods:{checkResult:function(){this.$emit("checkResult")}}},T=N,x=s(236),y=(0,u.Z)(T,R,C,!1,null,null,null),A=y.exports;m()(y,{VTextField:x.Z});var O=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.isShowResultModal?s("div",{staticClass:"modal-backdrop d-flex justify-center",on:{click:t.close}},[s("div",{staticClass:"modal",class:t.changeResultModalStyles},[s("section",{staticClass:"modal-body"},[s("div",{staticClass:"modal-body-item"},[t._v(" "+t._s(t.resultMsgText)+" "),s("span",{staticClass:"result-number"},[t._v(" "+t._s(t.resultMsgNumber))])])]),s("footer",{staticClass:"modal-footer",on:{click:function(t){t.stopPropagation()}}},[s("div",{staticClass:"btn-wrapp"},[t.isShowCorrectResultBtn?s("v-btn",{staticClass:"result-modal-btn py-7",attrs:{id:"correctResult",outlined:"",plain:"",block:""},on:{click:function(e){t.showCorrectResult(),t.matematicOperation()}}},[t._v(" Իմանալ "),s("br"),t._v(" պատասխանը ")]):t._e()],1),s("div",{staticClass:"btn-wrapp"},[s("v-btn",{staticClass:"result-modal-btn py-7",attrs:{outlined:"",plain:"",block:""},on:{click:t.close}},[t._v(" Փակել "),s("v-icon",{attrs:{dark:"","x-large":""}},[t._v(" mdi-close ")])],1)],1)])])]):t._e()},_=[],k={name:"ResultModal",props:{inputValue:String,result:Number,resultMsgNumber:String,resultMsgText:String,isShowResultModal:Boolean,isShowCorrectResultBtn:Boolean,isShowStartBtn:Boolean,isResultTrue:String},data:function(){return{}},computed:{changeResultModalStyles:function(){return{"succsess-result-modal":"true"==this.isResultTrue,"warning-result-modal":""==this.isResultTrue,"error-result-modal":"false"==this.isResultTrue,"not-correct":"not-correct"==this.isResultTrue}}},methods:{close:function(){this.$emit("closeResultModal")},matematicOperation:function(){this.$emit("matematicOperation")},showCorrectResult:function(){this.$emit("showCorrectResult")}}},I=k,B=s(6428),V=(0,u.Z)(I,O,_,!1,null,null,null),$=V.exports;m()(V,{VBtn:d.Z,VIcon:B.Z});var j=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.isShowStatisticModal?s("div",{staticClass:"statistic-wrapp d-flex flex-column justify-space-between flex-md-wrap justify-md-space-around"},[s("div",{staticClass:"statistic-header d-flex flex-column justify-center align-center"},[s("div",{staticClass:"statistic-title d-flex align-center"},[s("h3",{staticClass:"d-inline-block"},[t._v("Հարցերի Քանակ")]),s("span",{staticClass:"statistic-title-number"},[t._v(t._s(t.countCallFuncMatematicOperation))])]),s("div",{staticClass:"statistic-title d-flex align-center"},[s("h3",{staticClass:"d-inline-block"},[t._v("Ժամանակ")]),s("span",{staticClass:"statistic-title-number"},[t._v(" "+t._s(t.hours+" : "+t.minutes+" : "+t.seconds)+" ")])])]),s("div",{staticClass:"statistic-body d-flex flex-column flex-md-row"},[s("div",{staticClass:"statistic-body-item"},[s("p",{staticClass:"statistic-body-text correct-title"},[t._v("ճիշտ պատասխան "),s("span",{staticClass:"correct-title-number d-block"},[t._v(t._s(t.countCorrectAnswer))])]),s("div",{staticClass:"statistic-item-list scroll-color-succsess"},[s("ul",t._l(t.correctAnswer,(function(e,i){return s("li",{key:i},[t._v(" "+t._s(e.firstRandomNumber)+" "+t._s(e.matemamitcSymbol)+" "+t._s(e.secondRandomNumber)+" = "+t._s(e.currentInputValue)+" ")])})),0)])]),s("div",{staticClass:"statistic-body-item"},[s("p",{staticClass:"statistic-body-text wrong-title"},[t._v("Սխալ պատասխան "),s("span",{staticClass:"correct-title-number d-block"},[t._v(t._s(t.countWrongAnswer))])]),s("div",{staticClass:"statistic-item-list scroll-color-error"},[s("ul",t._l(t.wrongAnswer,(function(e,i){return s("li",{key:i},[t._v(" "+t._s(e.firstRandomNumber)+" "+t._s(e.matemamitcSymbol)+" "+t._s(e.secondRandomNumber)+" = "+t._s(e.currentInputValue)+" ")])})),0)])])]),s("div",{staticClass:"close-statistic-modal-wrapp d-flex justify-center"},[s("v-btn",{staticClass:"close-statistic-modal primary",attrs:{"x-large":""},on:{click:function(e){return t.$emit("closeResultModal")}}},[t._v(" Փակել ")])],1)]):t._e()},Z=[],F={name:"StatisticModal",props:{isActiveTitle:Boolean,isShowStatisticModal:Boolean,countCallFuncMatematicOperation:Number,countCorrectAnswer:Number,countWrongAnswer:Number,correctAnswer:Array,wrongAnswer:Array,currentInputValue:String,firstRandomNumber:String},data:function(){return{startTimer:{hours:0,minutes:0,seconds:0},finishTimer:{hours:0,minutes:0,seconds:0},hours:0,minutes:0,seconds:0,currentMinute:0,currentSeconds:0}},methods:{close:function(){this.$emit("closeResultModal")},timer:function(){if(1==this.isActiveTitle){var t=new Date;this.startTimer.hours=t.getHours(),this.startTimer.minutes=t.getMinutes(),this.startTimer.seconds=t.getSeconds()}if(0==this.isActiveTitle){var e=new Date;this.finishTimer.hours=e.getHours(),this.finishTimer.minutes=e.getMinutes(),this.finishTimer.seconds=e.getSeconds()}this.currentSeconds=Math.abs(this.finishTimer.seconds-this.startTimer.seconds),this.startTimer.seconds<=this.finishTimer.seconds&&(this.seconds=this.currentSeconds),this.startTimer.seconds>this.finishTimer.seconds&&(this.seconds=60-this.startTimer.seconds+this.finishTimer.seconds),this.currentMinute=Math.abs(this.startTimer.minutes-this.finishTimer.minutes),this.startTimer.seconds<this.finishTimer.seconds?this.minutes=this.currentMinute:this.startTimer.seconds>this.finishTimer.seconds&&(this.minutes=this.currentMinute-1),this.startTimer.hours<this.finishTimer.hours&&(this.minutes=this.finishTimer.minutes-this.startTimer.minutes,this.hours+=1),0==this.isActiveTitle&&(this.hours<10&&(this.hours="0".concat(this.hours)),this.minutes<10&&(this.minutes="0".concat(this.minutes)),this.seconds<10&&(this.seconds="0".concat(this.seconds)))}}},E=F,W=(0,u.Z)(E,j,Z,!1,null,"3c7813c5",null),P=W.exports;m()(W,{VBtn:d.Z});var H={name:"App",components:{SelectOperations:f,RandomNumbers:w,InputValue:A,ResultModal:$,StatisticModal:P},data:function(){return{operationId:"",numberId:0,currentOperationid:"",currentNumberId:0,firstRandomNumber:0,secondRandomNumber:0,matemamitcSymbol:"",inputValue:"",currentInputValue:"",resultMsgNumber:"",resultMsgText:"",result:0,countSelectOperation:0,countResultBtnShow:0,countCallFuncMatematicOperation:0,countCorrectAnswer:0,countWrongAnswer:0,correctAnswer:[],wrongAnswer:[],currentMatemOperation:{},isActiveTitle:!0,isShowStartBtn:!0,isShowCorrectResultBtn:!1,isShowResultModal:!1,isResultShow:!1,toggleStatisticModal:!1,isShowStatisticModal:!1,isShowRandomNumbers:!1,isResultTrue:"",isAlertMsgOperation:!1,isAlertMsgNumber:!1,alertMsg:"Ընտրեք տարբերակներից մեկը"}},mounted:function(){var t=this;document.addEventListener("keydown",(function(e){27==e.keyCode&&t.closeResultModal()}))},computed:{changeTitleStyle:function(){return{"title-text-lg":1==this.isActiveTitle,"title-text-sm":0==this.isActiveTitle}},changeSelectBtnsStyles:function(){return{"is-active-select-operations":0==this.isActiveTitle}},changeFooterBtnsStyle:function(){return{"active-footer-btn-group":0==this.isActiveTitle}},changeContainerHeight:function(){return{"container-height":1==this.isActiveTitle,"container-show-statistic":1==this.toggleStatisticModal}}},methods:{start:function(){this.countSelectOperation<=1&&(0==this.numberId||""==this.operationId)?this.checkAvailability():(this.countSelectOperation=0,this.isShowRandomNumbers=!0,this.isActiveTitle=!1,this.isShowStartBtn=!1,this.matematicOperation(),this.$refs.statisticModal.timer())},OpenResultModal:function(){this.countResultBtnShow>=2&&(this.result!=this.currentInputValue&&""!==this.currentInputValue&&(this.isShowCorrectResultBtn=!0),""===this.currentInputValue&&(this.isShowCorrectResultBtn=!1)),this.toggleStatisticModal||(this.isShowResultModal=!0),this.isShowRandomNumbers=!1},closeResultModal:function(){this.isShowResultModal=!1,this.isShowRandomNumbers=!0,this.inputValue="",this.isResultShow&&(this.matematicOperation(),this.isResultShow=!1),this.toggleStatisticModal&&this.resetAll()},showCorrectResult:function(){this.resultMsgText="Ճիշտ պատասխան",this.resultMsgNumber="".concat(this.result),this.isShowCorrectResultBtn=!1,this.isResultShow=!0,this.isResultTrue=""},selectOperation:function(t){if(!this.isShowResultModal&&!this.toggleStatisticModal){switch(1!=this.isAlertMsgOperation&&1!=this.isAlertMsgNumber||this.countSelectOperation++,1!=t&&2!=t&&3!=t&&4!=t||(this.numberId=t,this.isAlertMsgNumber=!1),!0){case"plus"==t:this.operationId=t,this.matemamitcSymbol="+",this.isAlertMsgOperation=!1;break;case"minus"==t:this.operationId=t,this.matemamitcSymbol="-",this.isAlertMsgOperation=!1;break;case"multiply"==t:this.operationId=t,this.matemamitcSymbol="×",this.isAlertMsgOperation=!1;break;case"separate"==t:this.operationId=t,this.matemamitcSymbol="/",this.isAlertMsgOperation=!1;break}0!=this.numberId&&""!=this.operationId&&(this.currentNumberId==this.numberId&&this.currentOperationid==this.operationId||(this.countSelectOperation>0||1==this.isShowRandomNumbers)&&this.start()),this.currentNumberId=this.numberId,this.currentOperationid=this.operationId}},checkResult:function(){if(!this.isShowResultModal&&!this.toggleStatisticModal){if(0==this.numberId||""==this.operationId)return this.countSelectOperation++,void this.checkAvailability();this.currentInputValue=this.inputValue,this.currentMatemOperation={firstRandomNumber:this.firstRandomNumber,secondRandomNumber:this.secondRandomNumber,matemamitcSymbol:this.matemamitcSymbol,currentInputValue:this.currentInputValue},""!=this.currentInputValue&&this.currentInputValue==this.result?(0==this.countResultBtnShow?(this.resultMsgNumber="".concat(this.result),this.resultMsgText="Ճիշտ է",this.isResultTrue="true",this.countCorrectAnswer++,this.correctAnswer.push(this.currentMatemOperation),this.countCallFuncMatematicOperation++):this.countResultBtnShow>=1&&(this.resultMsgNumber="".concat(this.result),this.resultMsgText="ճիշտ է, մեկ և ավել սխալի դեպքում պատասխանը համարվում է սխալ",this.isResultTrue="not-correct",this.isShowCorrectResultBtn=!1),this.matematicOperation()):""===this.currentInputValue?(this.resultMsgText="Գրեք պատասխան",this.resultMsgNumber="",this.isResultTrue=""):this.currentInputValue!=this.result&&(this.resultMsgNumber="".concat(this.currentInputValue),this.resultMsgText="Սխալ է",this.isResultTrue="false",0==this.countResultBtnShow&&(this.countCallFuncMatematicOperation++,this.wrongAnswer.push(this.currentMatemOperation),this.countWrongAnswer++),this.countResultBtnShow++),this.inputValue="",this.OpenResultModal()}},checkAvailability:function(){switch(!0){case 0==this.numberId&&""==this.operationId:this.alertMsg,this.isAlertMsgOperation=!0,this.isAlertMsgNumber=!0;break;case""==this.operationId:this.alertMsg,this.isAlertMsgOperation=!0;break;case 0==this.numberId:this.alertMsg,this.isAlertMsgNumber=!0;break}this.countSelectOperation=0},matematicOperation:function(){if(!this.isShowResultModal&&!this.toggleStatisticModal){if(0==this.numberId||""==this.operationId)return this.countSelectOperation++,void this.checkAvailability();if(1==this.numberId&&(this.firstRandomNumber=Math.floor(10*Math.random()+1),this.secondRandomNumber=Math.floor(10*Math.random()+1)),2==this.numberId&&(this.firstRandomNumber=Math.floor(100*Math.random()+1),this.secondRandomNumber=Math.floor(100*Math.random()+1)),3==this.numberId&&(this.firstRandomNumber=Math.floor(1e3*Math.random()+1),this.secondRandomNumber=Math.floor(1e3*Math.random()+1)),4==this.numberId&&(this.firstRandomNumber=Math.floor(1e4*Math.random()+1),this.secondRandomNumber=Math.floor(1e4*Math.random()+1)),"plus"==this.operationId)this.result=this.firstRandomNumber+this.secondRandomNumber;else if("minus"==this.operationId){if(this.firstRandomNumber<this.secondRandomNumber)return void this.matematicOperation();this.result=this.firstRandomNumber-this.secondRandomNumber}else"multiply"==this.operationId?this.result=this.firstRandomNumber*this.secondRandomNumber:"separate"==this.operationId&&(this.firstRandomNumber<this.secondRandomNumber||this.firstRandomNumber%this.secondRandomNumber!==0?this.matematicOperation():this.result=this.firstRandomNumber/this.secondRandomNumber);this.countResultBtnShow=0}},showFinishResults:function(){if(!this.toggleStatisticModal){if(0==this.numberId||""==this.operationId)return this.countSelectOperation++,void this.checkAvailability();this.isActiveTitle=!0,this.isShowStatisticModal=!0,this.toggleStatisticModal=!0,this.isShowRandomNumbers=!1,this.isShowResultModal=!1,this.$refs.statisticModal.timer(),this.OpenResultModal()}},resetAll:function(){this.isActiveTitle=!0,this.isShowStartBtn=!0,this.isAlertMsgNumber=!1,this.isAlertMsgOperation=!1,this.isShowCorrectResultBtn=!1,this.isShowRandomNumbers=!1,this.isShowStatisticModal=!1,this.toggleStatisticModal=!1,this.operationId="",this.currentOperationid="",this.numberId=0,this.currentNumberId=0,this.firstRandomNumber=0,this.secondRandomNumber=0,this.result=0,this.countCallFuncMatematicOperation=0,this.countResultBtnShow=0,this.matemamitcSymbol="",this.inputValue="",this.currentInputValue="",this.resultMsgNumber="",this.resultMsgText="",this.countCorrectAnswer=0,this.countWrongAnswer=0,this.correctAnswer=[],this.wrongAnswer=[],this.$refs.statisticModal.startTimer.hours=0,this.$refs.statisticModal.startTimer.minutes=0,this.$refs.statisticModal.startTimer.seconds=0,this.$refs.statisticModal.finishTimer.hours=0,this.$refs.statisticModal.finishTimer.minutes=0,this.$refs.statisticModal.finishTimer.seconds=0,this.$refs.statisticModal.hours=0,this.$refs.statisticModal.minutes=0,this.$refs.statisticModal.seconds=0}}},D=H,L=s(7524),q=s(2255),z=s(1009),G=(0,u.Z)(D,n,r,!1,null,null,null),J=G.exports;m()(G,{VApp:L.Z,VBtn:d.Z,VContainer:q.Z,VMain:z.Z});var K=s(858);i.Z.use(K.Z);var Q=new K.Z({});i.Z.directive("visible",(function(t,e){t.style.visibility=e.value?"visible":"hidden"})),i.Z.config.productionTip=!1,new i.Z({vuetify:Q,render:function(t){return t(J)}}).$mount("#app")}},e={};function s(i){var n=e[i];if(void 0!==n)return n.exports;var r=e[i]={exports:{}};return t[i](r,r.exports,s),r.exports}s.m=t,function(){var t=[];s.O=function(e,i,n,r){if(!i){var o=1/0;for(u=0;u<t.length;u++){i=t[u][0],n=t[u][1],r=t[u][2];for(var a=!0,l=0;l<i.length;l++)(!1&r||o>=r)&&Object.keys(s.O).every((function(t){return s.O[t](i[l])}))?i.splice(l--,1):(a=!1,r<o&&(o=r));if(a){t.splice(u--,1);var c=n();void 0!==c&&(e=c)}}return e}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[i,n,r]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var i in e)s.o(e,i)&&!s.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};s.O.j=function(e){return 0===t[e]};var e=function(e,i){var n,r,o=i[0],a=i[1],l=i[2],c=0;if(o.some((function(e){return 0!==t[e]}))){for(n in a)s.o(a,n)&&(s.m[n]=a[n]);if(l)var u=l(s)}for(e&&e(i);c<o.length;c++)r=o[c],s.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return s.O(u)},i=self["webpackChunkcalculate"]=self["webpackChunkcalculate"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=s.O(void 0,[998],(function(){return s(8864)}));i=s.O(i)})();
//# sourceMappingURL=app-legacy.7184888d.js.map