<template>
    <div v-if="isShowResultModal" @click="close" class="modal-backdrop d-flex justify-center">
      <div class="modal" :class="changeResultModalStyles">
        <section class="modal-body" >
          <div class="modal-body-item"> {{ resultMsgText }} <span class="result-number"> {{ resultMsgNumber }}</span></div>  
        </section>

        <footer class="modal-footer" @click.stop>
          <div class="btn-wrapp">
            <v-btn 
              v-if="isShowCorrectResultBtn"            
              @click="showCorrectResult(); matematicOperation()"  
              id="correctResult"          
              outlined
              plain             
              block
              class="result-modal-btn py-7"
            >
              Իմանալ <br> պատասխանը
            </v-btn>
          </div>

          <div class="btn-wrapp">
            <v-btn
              @click="close"  
              outlined
              plain
              block
              class="result-modal-btn py-7"
            >
              Փակել
              <v-icon dark
                x-large
              >
                mdi-close
              </v-icon>
            </v-btn>
          </div>
        </footer>
      </div>
    </div>
</template>

<script>
export default {
  name: 'ResultModal',
  props: {
    inputValue: String,
    result: Number,
    resultMsgNumber: String,
    resultMsgText: String,
    isShowResultModal: Boolean,
    isShowCorrectResultBtn: Boolean,
    isShowStartBtn: Boolean,
    isResultTrue: String,
  },
  data: () => ({}),

  computed: {
    changeResultModalStyles() {
      return  {
        'succsess-result-modal': this.isResultTrue == 'true',
        'warning-result-modal': this.isResultTrue == '',
        'error-result-modal': this.isResultTrue == 'false',  
        'not-correct': this.isResultTrue == 'not-correct'      
      }
    }
  },

  methods: {
    close() {
      this.$emit('closeResultModal')
    },

    matematicOperation() {
      this.$emit('matematicOperation')
    },

    showCorrectResult() {
      this.$emit('showCorrectResult')
    },
  }
}
</script>

<style>
  .succsess-result-modal {     
    box-shadow: 2px 2px 20px 1px #28a745 !important;
    color: #28a745ba !important;
    font-size: 35px
  }
  .error-result-modal {
    box-shadow: 2px 2px 20px 1px #ff000091 !important;
    color: #ff00008f !important;
    font-size: 35px
  }
  .warning-result-modal {
    box-shadow: 2px 2px 20px 1px #cece0078 !important;
    color: #cdcd00b0 !important;
    font-size: 28px;
  }
  .not-correct {
    box-shadow: 2px 2px 20px 1px #1769c7 !important;
    color: #0077ffa1 !important;
    font-size: 1.23em;
  }

  .modal-backdrop {
    width: 93%;
    margin: 4% auto;
  }

  .modal {
    width: 100%;
    max-height: 440px;
    min-height: 290px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border-radius: 10px;
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
  }

.modal-body {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 3%;
    font-weight: bold;
    line-break: anywhere;
}

  .modal-body-item {
    text-align: center;
  }

  .modal-header,
  .modal-footer {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 50%;
    width: 95%;
    margin: 0 auto;
  }

  .result-number {
    display: block;
    font-size: 55px;
    margin-top: 5px
  }
  
  @media (min-width: 600px) {
    .modal { width: 600px !important}

    .succsess-result-modal, .error-result-modal, .warning-result-modal {
      font-size: 38px
    }

    .not-correct { font-size: 1.47em }
  }

  @media (min-width:960px){
    .modal-backdrop {
      margin: 25px auto 54px;
    }
    .modal {
      min-height: 290px
    }
    .modal-body {
      padding: 1% 3% 0;
    }
    .not-correct {
      font-size: 1.44em;
    }
  }
</style>

