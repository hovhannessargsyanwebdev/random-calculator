<template>
  <div
    v-if="isShowStatisticModal"
    class="statistic-wrapp d-flex flex-column justify-space-between flex-md-wrap justify-md-space-around"
  >
    <div class="statistic-header d-flex flex-column justify-center align-center">
      <div class="statistic-title d-flex align-center">
        <h3 class="d-inline-block">Number of Questions</h3>
        <span class="statistic-title-number">{{ countCallFuncMatematicOperation }}</span>
      </div>    
  
      <div class="statistic-title d-flex align-center">
        <h3 class="d-inline-block">Duration</h3>
        <span class="statistic-title-number">
        {{ formattedTime }} </span>
      </div>
    </div>
  
    <div class="statistic-body d-flex flex-column flex-md-row">
      <div class="statistic-body-item">
        <p class="statistic-body-text correct-title">
          Correct answer
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
        <p class="statistic-body-text wrong-title">
          Incorrect answer
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
          Close
      </v-btn>
    </div>
  </div>
  </template>
  
  <script>
  export default {
    name: 'StatisticModal',
    props: {
      isShowStatisticModal: Boolean,
      countCallFuncMatematicOperation: Number,
      countCorrectAnswer: Number,
      countWrongAnswer: Number,
      correctAnswer: Array,
      wrongAnswer: Array,
      finalDuration: {
        type: Number,
        default: 0
      },
      elapsedSeconds: Number, 
    },
    
    data: () => ({}),
  
    computed: {
      formattedTime() {
        if (this.finalDuration === undefined || this.finalDuration === null) {
          return '00 : 00 : 00';
        }
  
        const totalSeconds = this.finalDuration; 
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        
        const formattedHours = String(hours).padStart(2, '0');
        const formattedMinutes = String(minutes).padStart(2, '0');  
        const formattedSeconds = String(seconds).padStart(2, '0');

        return `${formattedHours} : ${formattedMinutes} : ${formattedSeconds}`;
      }
    },
  
    methods: {
      // timer()
      close() {
        this.$emit('closeResultModal')
      },
    },
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
