<template>
<div
  v-if="isShowStatisticModal"
  class="statistic-wrapp d-flex flex-column justify-space-between flex-md-wrap justify-md-space-around"
>

  <div class="statistic-header d-flex flex-column justify-center align-center">
    <div class="statistic-title d-flex align-center">
      <h3 class="d-inline-block">Հարցերի Քանակ</h3>
      <span class="statistic-title-number">{{ countCallFuncMatematicOperation }}</span>
    </div>    

    <div class="statistic-title d-flex align-center">
      <h3 class="d-inline-block">Ժամանակ</h3>
      <span class="statistic-title-number">
      {{ `${hours} : ${minutes} : ${seconds}` }}
      </span>
    </div>
  </div>

  <div class="statistic-body d-flex flex-column flex-md-row">
    <div class="statistic-body-item">
      <p class="statistic-body-text correct-title">ճիշտ պատասխան
        <span class="correct-title-number d-block">{{ countCorrectAnswer }}</span>
      </p>
      <div class="statistic-item-list scroll-color-succsess">
        <ul>
          <li v-for="(answer,idx) in correctAnswer" :key="idx">
            {{ answer.firstRandomNumber }} {{ answer.matemamitcSymbol }} {{ answer.secondRandomNumber }} = {{ answer.currentInputValue }}
          </li>
        </ul>
      </div>
    </div>

    <div class="statistic-body-item">
      <p class="statistic-body-text wrong-title">Սխալ պատասխան
        <span class="correct-title-number d-block">{{ countWrongAnswer }}</span>
      </p>
      <div class="statistic-item-list scroll-color-error">
        <ul>
          <li v-for="(answer,idx) in wrongAnswer" :key="idx">
            {{ answer.firstRandomNumber }} {{ answer.matemamitcSymbol }} {{ answer.secondRandomNumber }} = {{ answer.currentInputValue }}
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div class="close-statistic-modal-wrapp d-flex justify-center">
    <v-btn
        x-large
        class="close-statistic-modal primary"
        @click="$emit('closeResultModal')"
      >
        Փակել
    </v-btn>
  </div>
</div>
</template>

<script>
export default {
  name: 'StatisticModal',
  props: {
    isActiveTitle: Boolean,
    isShowStatisticModal: Boolean,
    countCallFuncMatematicOperation: Number,
    countCorrectAnswer: Number,
    countWrongAnswer: Number,
    correctAnswer: Array,
    wrongAnswer: Array,
    currentInputValue: String,
    firstRandomNumber: String
  },
  data: () => ({
    startTimer: {
      hours: 0,
      minutes: 0,
      seconds: 0
    },
    finishTimer: {
      hours: 0,
      minutes: 0,
      seconds: 0
    },
    hours: 0,
    minutes: 0,
    seconds: 0,
    currentMinute: 0,
    currentSeconds: 0,
  }),

  methods: {
    close() {
      this.$emit('closeResultModal')
    },

    timer() {     
      if (this.isActiveTitle == true) {
        let dateStart = new Date();
        this.startTimer.hours = dateStart.getHours();
        this.startTimer.minutes = dateStart.getMinutes();
        this.startTimer.seconds = dateStart.getSeconds();        
      }

      if (this.isActiveTitle == false) {
        let dateFinish = new Date();
        this.finishTimer.hours = dateFinish.getHours();
        this.finishTimer.minutes = dateFinish.getMinutes();
        this.finishTimer.seconds = dateFinish.getSeconds();
      }

      // seconds
      this.currentSeconds = Math.abs(this.finishTimer.seconds - this.startTimer.seconds)
      if (this.startTimer.seconds <= this.finishTimer.seconds) {
        this.seconds = this.currentSeconds
      }
      if (this.startTimer.seconds > this.finishTimer.seconds) {
        this.seconds = 60 - this.startTimer.seconds + this.finishTimer.seconds
      }

      // minutes
      this.currentMinute = Math.abs(this.startTimer.minutes - this.finishTimer.minutes)      
      if (this.startTimer.seconds < this.finishTimer.seconds) {
        this.minutes = this.currentMinute  
      }
      else if (this.startTimer.seconds > this.finishTimer.seconds) {
        this.minutes = this.currentMinute - 1
      }       

      // hours
      if (this.startTimer.hours < this.finishTimer.hours) {
        this.minutes = this.finishTimer.minutes - this.startTimer.minutes
        this.hours += 1
      } 

      if (this.isActiveTitle == false) {
        if (this.hours < 10) {
          this.hours = `0${this.hours}`
        }
        if (this.minutes < 10) {
          this.minutes = `0${this.minutes}`
        }
        if (this.seconds < 10 ) {
          this.seconds = `0${this.seconds}`
        }
      }
    }
  }
}
</script>

<style scoped>
.statistic-wrapp {
  width: 93%;
  max-height: 92%;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 0px 2px 25px 11px #33333361;
}

.modal-statistic {
  margin: 50px 0 0;
  width: 100%;
  min-height: 450px;
  max-height: 700px;
  border-radius: 15px;
  box-shadow: 1px 1px 70px 5px #2b2b2b6b;
}

.statistic-header {
  line-height: 1.1;
  color: #828282;
  border-bottom: 1px solid #828282;
}

.statistic-title {
  font-size: 21px;
  text-align: center;
}

.statistic-title-number {
  margin-left: 10px;
  font-size: 30px;
}

/* statistic body */
.statistic-body {
  font-size: 30px;
  width: 95%; 
  height: 74%;
  max-height: 650px;
  margin: 0 auto
}

.statistic-body-item {
  height: 50%;
  max-height: 335px;
  min-height: 120px;
  text-align: center;
  overflow: hidden;
}

.statistic-item-list {
  height: 60%;
  min-height: 110px; 
  max-height: 60%;
  overflow-y: scroll;
}

.statistic-item-list::-webkit-scrollbar { width: .2em }

.statistic-item-list::-webkit-scrollbar-thumb { border-radius: 10px }

.scroll-color-succsess::-webkit-scrollbar-thumb { background-color: #28a745ba }

.scroll-color-error::-webkit-scrollbar-thumb { background-color: #ff00008f }

.statistic-body::-webkit-scrollbar-track { box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.3) } 

.correct-title { color: #28a745ba }

.wrong-title { color: #ff00008f }

.correct-title-number {
  font-size: 46px;
  font-weight: bold;
  padding-top: 5px;
  line-height: 1
}

.v-application ul { padding-left: 0 }

li {
  font-size: 23px;
  color: #828282
}

.close-statistic-modal {
  padding: 30px;
  width: 95%;
}

@media (min-width:400px) {
  .statistic-title-number {
     margin-left: 20px;
    font-size: 38px
  }
}
@media(min-width: 600px) {
  .statistic-title {font-size: 25px}

  .statistic-title-number {font-size: 40px}

  .statistic-body {height: 74%}
}

@media (min-width: 960px) {
  .statistic-wrapp {
    width: 80%;
    max-width: 930px;    
    min-height: 650px;
  }

  .statistic-header {
    width: 100%;
  }

  .statistic-body {
    height: 71%;
    min-height: 250px;
    max-height: 650px;   
  }

  .statistic-body-item {
    width: 50%;
    height: initial;
    max-height: 565px;
    min-height: 260px;
    text-align: center;
    margin: 0;
  }

  .statistic-item-list {
    height: 90%;
    min-height: 100px;
    max-height: 448px;
  }

  .close-statistic-modal-wrapp {
    width: 70%;
    align-items: center;
    margin: 35px auto 10px;
  }
}
</style>
