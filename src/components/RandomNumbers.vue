<template>
  <div v-if="isShowRandomNumbers" class="random-numbers d-flex flex-column justify-space-around">
    <div class="d-flex justify-center random-numbers-item">
      <span class="random-number inline-block"> {{ firstRandomNumber }} </span>
      <span class="operation-symbol inline-block"> {{ matemamitcSymbol }} </span>
      <span class="random-number inline-block"> {{ secondRandomNumber }} </span>
    </div>

    <div class="d-flex justify-center random-numbers-item">
      <slot></slot>  
    </div>    
  </div>  
</template>

<script>
  export default {
    name: 'RandomNumbers',
    props: {
      isShowRandomNumbers: Boolean,
      isShowStartBtn: Boolean,
      firstRandomNumber: Number,
      secondRandomNumber: Number,
      matemamitcSymbol: String,
    }
  }
</script>

<style>
.random-numbers {
  height: 45%;
  min-height: 270px;
  text-align: center;
}

.random-numbers-item {
  width: 100%;
}

.random-number, .operation-symbol {
  font-size: 60px;  
  color: #828282;
  padding: 0 1%;
}

@media (min-width: 600px) {
  .random-numbers {
    margin-top: 0px;
    min-height: 290px;
  }
  .random-number, .operation-symbol {
    font-size: 100px;
  }
}

@media (min-width: 960px) {
  .random-numbers {
    justify-content: inherit !important;
    height: initial;
    max-width: 850px;
    min-height: 335px;
    margin: 0 auto;   
  }
  .random-number, .operation-symbol {
    font-size: 135px;
    padding: 0 15px;
  }
}
</style>