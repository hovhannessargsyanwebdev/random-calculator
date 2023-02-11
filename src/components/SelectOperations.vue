<template>
  <div v-if="!isShowStatisticModal" class="select-operations d-flex flex-column justify-space-around flex-sm-row justify-sm-center align-sm-center">
    <div class="mathematic-operation d-flex flex-column align-sm-center">
      <h3 class="title-select-btns" :class="changeBtnsTitleTextColor.operations">Ընտրիր կոճակներից մեկը</h3>
      <div class="select-btn-group d-flex flex-sm-wrap flex-sm-column flex-md-nowrap flex-md-row align-center justify-md-space-between">
        <v-btn
          id="plus"                
          x-large
          fab
          dark      
          class="select-btn-group-item plus"    
          color="blue darken-3"
          @click="$emit('selectOperation', $event.id = 'plus')"          
        >
          +
        </v-btn>
        <v-btn    
          id="minus"
          x-large
          fab
          dark  
          class="select-btn-group-item minus"
          color="blue darken-3"
          @click="$emit('selectOperation', $event.id = 'minus')"
        >
          -
        </v-btn>
        <v-btn
          id="multiply"          
          x-large
          fab
          dark  
          class="select-btn-group-item"
          color="blue darken-3"
          @click="$emit('selectOperation', $event.id = 'multiply')"
        >
          x
        </v-btn>
        <v-btn
          id="separate"          
          x-large
          fab
          dark  
          class="select-btn-group-item"
          color="blue darken-3"
          @click="$emit('selectOperation', $event.id = 'separate')"
        >
          /
        </v-btn>
      </div>
    </div>

    <div class="mathematic-operation d-flex flex-column align-sm-center">
      <h3 class="title-select-btns" :class="changeBtnsTitleTextColor.numbers" >Ընտրիր կոճակներից մեկը</h3>
      <div class="select-btn-group d-flex flex-sm-wrap flex-sm-column flex-md-nowrap flex-md-row align-center justify-md-space-between">
        <v-btn
          id="1"
          class="select-btn-group-item"
          fab
          dark
          x-large
          color="blue darken-3"
          @click="$emit('selectOperation', $event.id = '1')"
        >
          1-9
        </v-btn>
        <v-btn
          id="2"  
          class=" select-btn-group-item"
          fab
          dark
          x-large
          color="blue darken-3"
          @click="$emit('selectOperation', $event.id = '2')"
      >
          1-99
        </v-btn>
        <v-btn
          id="3"
          class="select-btn-group-item"
          fab
          dark
          x-large
          color="blue darken-3"
          @click="$emit('selectOperation', $event.id = '3')"
        >
          1-999
        </v-btn>
        <v-btn
          id="4"
          class="select-btn-group-item"
          fab
          dark
          x-large              
          color="blue darken-3"
          @click="$emit('selectOperation', $event.id = '4')"
        >
          1-9999
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectOperations',
  computed: {
    changeBtnsTitleTextColor() {
      return {
        operations: {
          'title-select-btns': this.isAlertMsgOperation == false,
          'title-select-btns-error': this.isAlertMsgOperation == true,
        },
        numbers: {
          'title-select-btns': this.isAlertMsgNumber == false,
          'title-select-btns-error': this.isAlertMsgNumber == true,
        }      
      }
    }
  },
  props: {
    isShowStatisticModal: Boolean,
    isAlertMsgOperation: Boolean,
    isAlertMsgNumber: Boolean,
    isShowTitle: Boolean,
    alertMsg: String,
    numberId: Number,
    operationId: String,
  },
  data: () => ({}),
}
</script>

<style>
 .v-btn--is-elevatedn:hover, .v-btn--fab:hover {
  -moz-box-shadow:    inset 0px 0px 7px 1px #00000085 !important;
  -webkit-box-shadow: inset 0px 0px 7px 1px #00000085 !important; 
  box-shadow:         inset 0px 0px 7px 1px #00000085 !important;
}

.select-operations {
  background: #1769c7;
  height: 39%;
  min-height: 233px;
}

.is-active-select-operations {
  height: 31%;
}

.mathematic-operation {
  color: #fff;
  text-align: center;
}

.select-btn-group {
  justify-content: space-evenly;
} 

.title-select-btns {
  margin: 0 0 2%;
  font-size: 22px;
  font-weight: normal;
  font-family: 'Dancing Script', cursive;
}

.title-select-btns-error {
  font-weight: bold;
  color: rgb(251, 115, 115);
}

@media (min-width: 600px) {
  .title-select-btns {
    margin: 1% 6.5% 2%;
  }

  .select-operations {
    max-height: 340px;
    min-height: 250px;
  } 

  .select-btn-group {
    height: 90%;
    width: 50%;
    min-width: 230px;
    min-height: 205px;
    max-height: 269px;
  }
  .select-btn-group-item {
    padding: 45px !important;
  }

  .mathematic-operation {
    justify-content: space-around;
    width: 50%;
    height: 93%;
  }
}

@media (min-width: 960px) {
  .title-select-btns {
    margin: 0;
    font-size: 25px;
  }

  .select-operations {
    height: 33%;
    min-height: 233px;
  }

  .is-active-select-operations {
    height: 25%;
    min-height: 225px;
  }

  .mathematic-operation {
    justify-content: inherit;
    height: 70%;
  }

  .is-active-select-operations  .mathematic-operation {
    height: 80%;
    justify-content: space-evenly;
  }

  .select-btn-group {
    flex-wrap: nowrap !important;
    width: 70%;
    min-width: 400px;
    max-width: 465px;
    min-height: max-content;
  }

  .is-active-select-operations .select-btn-group {
    height: 75%;
  }
}

@media (min-width: 1264px) {
  .mathematic-operation {
    max-width: 640px;
  }
}

</style>