<template >
  <v-app>
    <v-main class="main">
      <div class="title-wrapp d-flex justify-center align-center"
        v-if="!isShowStatisticModal"
        :isShowStatisticModal="isShowStatisticModal"
        :class="changeTitleStyle"
      >
        <h1 class="title-text">
          Սովորիր Հաշվել
        </h1>
      </div>
      <v-container
        :class="changeContainerHeight"
        class="container d-flex flex-column"
      >
        <!-- select component -->
        <SelectOperations
          @selectOperation="selectOperation"
          :isShowStatisticModal="isShowStatisticModal"
          :isAlertMsgNumber="isAlertMsgNumber"
          :isAlertMsgOperation="isAlertMsgOperation"
          :alertMsg="alertMsg"
          :isActiveTitle="isActiveTitle"
          :class="changeSelectBtnsStyles"
        />

        <!-- start btn -->
        <div class="btn-start-wrapp d-flex justify-center align-end align-sm-center" v-if="isShowStartBtn">
          <v-btn
            @click="start"
            class="btn-start d-flex justify-center"     
            large          
          >
            Սկսել            
          </v-btn>
        </div>  

        <transition name="component-fade" mode="out-in"> 
          <RandomNumbers
            :isShowRandomNumbers="isShowRandomNumbers"
            :isShowStartBtn="isShowStartBtn"
            :firstRandomNumber="firstRandomNumber"
            :secondRandomNumber="secondRandomNumber"
            :matemamitcSymbol="matemamitcSymbol"
          >    
            <InputValue 
              v-model="inputValue"
              @checkResult="checkResult"
            />
          </RandomNumbers>  
        </transition>

        <!-- modal windows -->
        <transition name="component-fade" mode="out-in"> 
          <ResultModal
            :isShowResultModal="isShowResultModal"
            :isShowCorrectResultBtn="isShowCorrectResultBtn"
            :isResultTrue="isResultTrue"
            :resultMsgNumber="resultMsgNumber"
            :resultMsgText="resultMsgText"
            :result="result"                     
            :inputValue="inputValue"  
            @showCorrectResult="showCorrectResult"
            @closeResultModal="closeResultModal"
            @matematicOperation="matematicOperation"
          >  
          </ResultModal>
        </transition>        

        <transition name="component-fade" mode="out-in"> 
          <StatisticModal
            ref="statisticModal"
            :isActiveTitle="isActiveTitle"
            :isShowStatisticModal="isShowStatisticModal"
            :countCallFuncMatematicOperation="countCallFuncMatematicOperation"
            :countCorrectAnswer="countCorrectAnswer"
            :countWrongAnswer="countWrongAnswer"
            :correctAnswer="correctAnswer"
            :wrongAnswer="wrongAnswer"
            @closeResultModal="closeResultModal"
          >             
          </StatisticModal>
        </transition> 

        <!-- btns footer -->
        <div v-if="!isShowStatisticModal"
          class="btn-group d-flex"
          :isActiveTitle="isActiveTitle"
          :class="changeFooterBtnsStyle"
        >
          <v-btn
            x-large
            fab
            class="btn-group-item"
            @click="matematicOperation"
          >
            Փոխել <br> թվերը
          </v-btn>

          <v-btn          
            x-large
            fab
            class="btn-group-item"
            @click="checkResult"
          >
            Ստուգել
          </v-btn>

          <v-btn
            x-large
            fab
            class="btn-group-item"
            @click="showFinishResults"
          >
            Ավարտել
          </v-btn>
        </div> 
      </v-container>  
    </v-main>
  </v-app>
</template>

<script>
import SelectOperations from '@/components/SelectOperations.vue'
import RandomNumbers from '@/components/RandomNumbers.vue'
import InputValue from '@/components/InputValue.vue'
import ResultModal from '@/components/ResultModal.vue'
import StatisticModal from '@/components/StatisticModal.vue'

export default {
  name: 'App',
  components: {
    SelectOperations,
    RandomNumbers,
    InputValue,
    ResultModal,
    StatisticModal    
  },
  data: () => ({
    operationId: '',
    numberId: 0,
    currentOperationid : '',
    currentNumberId : 0,
    firstRandomNumber: 0,
    secondRandomNumber: 0,
    matemamitcSymbol: '',
    inputValue: '',
    currentInputValue : '',
    resultMsgNumber: '',
    resultMsgText: '',
    result: 0,
    countSelectOperation: 0,
    countResultBtnShow: 0,
    countCallFuncMatematicOperation: 0,
    countCorrectAnswer: 0,
    countWrongAnswer: 0,
    correctAnswer: [],
    wrongAnswer: [],
    currentMatemOperation: {},    
    isActiveTitle: true,
    isShowStartBtn: true,
    isShowCorrectResultBtn: false,  
    isShowResultModal: false,
    isResultShow: false,
    toggleStatisticModal: false,  
    isShowStatisticModal: false,
    isShowRandomNumbers: false,   
    isResultTrue: '',  // change color result modal
    isAlertMsgOperation: false,
    isAlertMsgNumber: false,
    alertMsg: 'Ընտրիր տարբերակներից մեկը',   
  }),
    
    // close modal window with esc
    mounted() { 
      document.addEventListener("keydown", (e) => {
        if (e.keyCode == 27) {
          this.closeResultModal()
        }
      })
    },

  computed: {
    changeTitleStyle() {
      return {
        'title-text-lg': this.isActiveTitle == true,
        'title-text-sm': this.isActiveTitle == false,
      }
    },

    changeSelectBtnsStyles() {
      return {
        'is-active-select-operations': this.isActiveTitle == false,
      }
    },

    changeFooterBtnsStyle() {
      return {
        'active-footer-btn-group': this.isActiveTitle == false,
      }
    },

    changeContainerHeight() {
      return {       
        'container-height': this.isActiveTitle == true,  
        'container-show-statistic': this.toggleStatisticModal == true,                
      }
    },
  },

  methods: {
    start() {
      if (this.countSelectOperation <= 1) {
        if (this.numberId == 0 || this.operationId == '') {
          this.checkAvailability();
          return
        }
      }

      this.countSelectOperation = 0
      this.isShowRandomNumbers = true   
      this.isActiveTitle = false
      this.isShowStartBtn = false
      this.matematicOperation()  
      this.$refs.statisticModal.timer()      
    },

    OpenResultModal() {     
      if (this.countResultBtnShow >= 2) {
        if (this.result != this.currentInputValue && this.currentInputValue !== '') {            
          this.isShowCorrectResultBtn = true
        }
        
        if (this.currentInputValue === '') {
          this.isShowCorrectResultBtn = false  
        }
      }
      if (this.toggleStatisticModal) {
        this.isShowRandomNumbers = false
        return
      }

      this.isShowResultModal = true
      this.isShowRandomNumbers = false
    },

    closeResultModal() {
      this.isShowResultModal = false
      this.isShowRandomNumbers = true  
      this.inputValue = ''

      // if show Result
      if (this.isResultShow) {
        this.matematicOperation()
        this.isResultShow = false
      }

      // if finish 
      if (this.toggleStatisticModal) {  
        this.resetAll()  
      }  
    },

    showCorrectResult() {
      this.resultMsgText = `Ճիշտ պատասխան`
      this.resultMsgNumber = `${this.result}`  
      this.isShowCorrectResultBtn = false  
      this.isResultShow = true
      this.isResultTrue = '' 
    },

    selectOperation(e) {
      if (this.isShowResultModal || this.toggleStatisticModal) {
        return
      }
      if (this.isAlertMsgOperation == true || this.isAlertMsgNumber == true) {
        this.countSelectOperation++  
      }

      if (e == 1 || e == 2 || e == 3 || e == 4 ) {
        this.numberId = e;
        this.isAlertMsgNumber = false
      }

      switch (true) {
        case e == 'plus': 
          this.operationId = e
          this.matemamitcSymbol = '+';
          this.isAlertMsgOperation = false;
          break;
        case e == 'minus':
          this.operationId = e
          this.matemamitcSymbol = '-';
          this.isAlertMsgOperation = false;
          break;
        case e == 'multiply': 
          this.operationId = e
          this.matemamitcSymbol = '×';
          this.isAlertMsgOperation = false;
          break;
        case e == 'separate':
          this.operationId = e
          this.matemamitcSymbol = '/';
          this.isAlertMsgOperation = false;
          break;
      }   

      if (this.numberId != 0 && this.operationId != '') {
        if (this.currentNumberId != this.numberId || this.currentOperationid != this.operationId) {
          if (this.countSelectOperation > 0 || this.isShowRandomNumbers == true) {
            this.start() 
          }                            
        }
      }
      this.currentNumberId = this.numberId;
      this.currentOperationid = this.operationId; 
    },

    checkResult() {   
      if (this.isShowResultModal || this.toggleStatisticModal) {
        return
      }

      if (this.numberId == 0 || this.operationId == '') {
        this.countSelectOperation++
        this.checkAvailability();
        return
      }
    
      this.currentInputValue = this.inputValue

      this.currentMatemOperation = {
        firstRandomNumber: this.firstRandomNumber,
        secondRandomNumber: this.secondRandomNumber,
        matemamitcSymbol: this.matemamitcSymbol,
        currentInputValue: this.currentInputValue
      }
            
      // if correct answer
      if (this.currentInputValue != '' && this.currentInputValue == this.result) {        
        if (this.countResultBtnShow == 0) {
          this.resultMsgNumber = `${this.result}`;
          this.resultMsgText = `Ճիշտ է`;
          this.isResultTrue = 'true'     
          this.countCorrectAnswer++
          this.correctAnswer.push(this.currentMatemOperation) 
          this.countCallFuncMatematicOperation++ 
        }

        else if (this.countResultBtnShow >= 1) {
          this.resultMsgNumber = `${this.result}`;
          this.resultMsgText = `ճիշտ է, մեկ և ավել սխալի դեպքում պատասխանը համարվում է սխալ`;
          this.isResultTrue = 'not-correct' 
          this.isShowCorrectResultBtn = false                  
        }
         
        this.matematicOperation()      
      }

      // if empty answer 
      else if (this.currentInputValue === '') {
        this.resultMsgText = `Գրիր պատասխան`
        this.resultMsgNumber = ''
        this.isResultTrue = ''
      }

      // if wrong answer
      else if (this.currentInputValue != this.result) {        
        this.resultMsgNumber = `${this.currentInputValue}`;    
        this.resultMsgText = `Սխալ է`;    
        this.isResultTrue = 'false' 
        if (this.countResultBtnShow == 0) {
          this.countCallFuncMatematicOperation++ 
          this.wrongAnswer.push(this.currentMatemOperation)
          this.countWrongAnswer++  
        }  
        this.countResultBtnShow++
      }    

      this.inputValue = '' 
      this.OpenResultModal();         
    },
    
    checkAvailability() {
      switch(true) {
        case this.numberId == 0 && this.operationId == '':
          this.alertMsg;
          this.isAlertMsgOperation = true;
          this.isAlertMsgNumber = true;
          break;
        case this.operationId == '':
          this.alertMsg;
          this.isAlertMsgOperation = true;
          break;
        case this.numberId == 0:
          this.alertMsg;
          this.isAlertMsgNumber = true;
          break;
      }
      this.countSelectOperation = 0
    },

    matematicOperation() {
      if (this.isShowResultModal || this.toggleStatisticModal) {
        return
      }

      if (this.numberId == 0 || this.operationId == '') {
        this.countSelectOperation++
        this.checkAvailability();        
        return
      } 
      
      // checked range between two random numbers
      if (this.numberId == 1) {
        this.firstRandomNumber = Math.floor(Math.random() * (10 - 1 + 1) + 1)
        this.secondRandomNumber = Math.floor(Math.random() * (10 - 1 + 1) + 1)
      }
      if (this.numberId == 2) {
        this.firstRandomNumber = Math.floor(Math.random() * (100 - 1 + 1) + 1)
        this.secondRandomNumber = Math.floor(Math.random() * (100 - 1 + 1) + 1)
      }
      if (this.numberId == 3) {
        this.firstRandomNumber = Math.floor(Math.random() * (1000 - 1 + 1) + 1)
        this.secondRandomNumber = Math.floor(Math.random() * (1000 - 1 + 1) + 1)
      }
      if (this.numberId == 4) {
        this.firstRandomNumber = Math.floor(Math.random() * (10000 - 1 + 1) + 1)
        this.secondRandomNumber = Math.floor(Math.random() * (10000 - 1 + 1) + 1)
      }

      // checked which matematic operation selected
      if (this.operationId == 'plus') {
        this.result = this.firstRandomNumber + this.secondRandomNumber
      }
      else if (this.operationId == 'minus') {
        if (this.firstRandomNumber < this.secondRandomNumber) {
          this.matematicOperation() 
          return           
        }
        else {
          this.result = this.firstRandomNumber - this.secondRandomNumber
        }
      }
      else if (this.operationId == 'multiply') {
        this.result = this.firstRandomNumber * this.secondRandomNumber
      }
      else if (this.operationId == 'separate') {
          // only even numbers
        if (this.firstRandomNumber < this.secondRandomNumber || 
            (this.firstRandomNumber % this.secondRandomNumber !== 0)) {
           this.matematicOperation()           
        }
        else {
          this.result = this.firstRandomNumber / this.secondRandomNumber          
        }
      }     
      this.countResultBtnShow = 0 
    }, 

    showFinishResults() {
      if (this.toggleStatisticModal) {
        return
      }

      if (this.numberId == 0 || this.operationId == '') {
        this.countSelectOperation++
        this.checkAvailability();        
        return
      }
      
      this.isActiveTitle = true
      this.isShowStatisticModal = true
      this.toggleStatisticModal = true
      this.isShowRandomNumbers = false
      this.isShowResultModal = false

      this.$refs.statisticModal.timer()       
      this.OpenResultModal()
    },

    resetAll() {
      this.isActiveTitle = true
      this.isShowStartBtn = true  
      this.isAlertMsgNumber = false
      this.isAlertMsgOperation = false
      this.isShowCorrectResultBtn = false
      this.isShowRandomNumbers = false 
      this.isShowStatisticModal = false 
      this.toggleStatisticModal = false
      this.operationId = ''
      this.currentOperationid = ''
      this.numberId = 0      
      this.currentNumberId = 0
      this.firstRandomNumber = 0
      this.secondRandomNumber = 0      
      this.result = 0
      this.countCallFuncMatematicOperation = 0
      this.countResultBtnShow = 0
      this.matemamitcSymbol = ''  
      this.inputValue = ''
      this.currentInputValue = ''
      this.resultMsgNumber = ''
      this.resultMsgText = ''           
      this.countCorrectAnswer = 0
      this.countWrongAnswer = 0
      this.correctAnswer = []
      this.wrongAnswer = []

      this.$refs.statisticModal.startTimer.hours = 0
      this.$refs.statisticModal.startTimer.minutes = 0
      this.$refs.statisticModal.startTimer.seconds = 0
      this.$refs.statisticModal.finishTimer.hours = 0
      this.$refs.statisticModal.finishTimer.minutes = 0
      this.$refs.statisticModal.finishTimer.seconds = 0
      this.$refs.statisticModal.hours = 0
      this.$refs.statisticModal.minutes = 0
      this.$refs.statisticModal.seconds = 0
    }
  },
};
</script>
<style>

/* CHANGE DEFAULT STYLES */
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  overflow-y:hidden
}

.v-btn:hover::before {
  opacity: 0 !important;
}
.v-btn--is-elevatedn:hover, .v-btn--fab:hover {
  box-shadow: 1px 3px 5px -1px rgb(25 118 210 / 20%),
              0px 6px 10px 0px rgb(25 118 210 / 14%),
              0px 1px 18px 0px rgb(25 118 210 / 12%);
}

.v-main {
  background: rgb(255, 255, 255, .3) !important;
}

.theme--dark.v-btn:focus::before,
.theme--light.v-btn:focus::before {
  opacity: 0 !important;
}

.v-application {
  line-height: 1.3 !important;
}

/* MY STYLES */
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .9s ease;
}
.component-fade-enter, .component-fade-leave-to {
  opacity: 0;
}

.title-wrapp {
  height: 10vh;
  min-height: 45px;
}

.title-text { 
  text-shadow: -1px 2px 2px #ffffff, 0px 2px 5px #1769c7;
  font-style: italic;
  color: transparent;
  text-align: center;
}

.title-text-lg { 
  font-size: 18px;
}
.title-text-sm {
  height: 7vh;
  font-size: 15px;
}

.container {
  padding: 0 !important;
  height: 93vh;
  min-height: 595px;
  justify-content: space-between;
} 

.container-height {
  height: 90vh;
  min-height: 470px;
}

.container-show-statistic {
  height: 100vh;
  justify-content: center;
  min-height: 610px;
}

/* buttons */
.btn-start-wrapp {
  height: 20%;
  min-height: 75px;
  padding: 0 12px
}
.btn-start {
  width: 90%;
  border: 2px solid #1769c7!important;
  padding: 30px !important;
  color: #1769c7!important;
  background: #fff!important;
  transition: ease-in-out .2s!important;
}

.btn-start:hover {
  background: #1769c7 !important;
  color: #fff !important;
}

.btn-group {
  justify-content: space-evenly;
  align-items: center;
  padding: 0 12px;  
  height: 30%;
  min-height: 105px;
}

.active-footer-btn-group {
  height: 20%;
  align-items: start;
}

.btn-group-item {
  padding: 44px !important;
  color: #1769c7 !important;
  background: #fff !important;
  box-shadow: 0px 3px 5px -1px rgb(23,105,199,0.25),
              0px 6px 10px 0px rgb(23,105,199,0.14), 
              0px 1px 18px 0px rgb(23,105,199,0.12) !important;
}
.btn-group-item:hover {
  box-shadow: inset 0px 0px 7px 1px rgb(23,105,199) !important;
}

.warning-alert-msg-text {
  margin: 0 10px;
} 

@media (min-width: 600px) {
  .container-height { min-height: 490px }

  .container { min-height: 660px }
  
  .container-show-statistic {min-height: 630px}

  .v-application { line-height: 1.5 !important }

  .title-text-lg {
    font-size: 28px;
    min-height: 70px;
  }
  
  .title-text-sm {
    font-size: 20px;
    min-height: 55px;
  }

  .v-btn__content { font-size: 20px !important }

  .btn-start-wrapp { min-height: 112px }

  .btn-start {
    height: initial !important;
    width: initial;
    padding: 30px 80px !important;
  }

  .btn-group {
    padding: 0;
    height: 21%;
    min-height: 135px;
  } 

  .btn-group-item { padding: 57px !important }
}

@media (min-width: 960px) {
  .container {
    max-width: inherit !important;
    min-height: 755px;
  }

  .container-height {
    height: 85vh;
    min-height: 505px;
  }

  .container-show-statistic {
    height: 100vh;
    min-height: 760px;
  }
  
  .v-application { line-height: 1.5 !important }

  .title-text-lg { 
    font-size: 40px;
    height: 15vh;
    min-height: 110px
   }

  .btn-group {
    height: 23%;
    min-height: 165px;
    width: 700px;
    margin: 0 auto;
    justify-content: space-between;
  }
  
  .active-footer-btn-group {
    align-items: center;
    min-height: 240px;
  }

  .btn-group-item { padding: 70px !important }
}

/*change default styles scrollbar*/
*::-webkit-scrollbar {
  width: 0;
  height: 0
} 

body::-webkit-scrollbar-track {
  background: #1a6bc75d;
}

body::-webkit-scrollbar-thumb {
  background-color: #1769c7;
  border-radius: 7px;
}

@media only screen and (max-width: 600px) and (max-height: 655px) {
  body::-webkit-scrollbar {
    width: .4em;
  } 
}

@media only screen and (min-width: 600px ) and (max-width: 960px) and (max-height: 780px) {
  body::-webkit-scrollbar {
    width: .4em;
  }
}

@media only screen and (min-width: 960px) and (max-height: 860px){
  body::-webkit-scrollbar {
    width: .4em;
  }
}
</style>