<template>
<div>
  <v-text-field
    class="input-text"
    label="Գրիր պատասխանը"          
    single-line 
    v-model="inputVal"
    type="number"
    autofocus
    @keyup.enter="$emit('checkResult')"
  >
  </v-text-field>
</div>
</template>
<script>
  export default {
    name: 'InputValue',
    computed: {
      inputVal: {
        get() {
          return this.value;
        },
        set(val) {
          this.$emit('input', val)
        }
      },
    },
    data: () => ({}),

    methods: {
      checkResult() {
        this.$emit('checkResult')
      },
    }
  }
</script> 
<style>
input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0 !important; 
}

.v-input__slot {
  margin-bottom: 0 !important;
  padding: 0 30px !important;
} 

.v-text-field__slot { justify-content: center !important }

.v-input input {
  height: 85% !important;  
  padding: 95px 0!important;
  color: #828282!important;
  caret-color: inherit;
}

.v-input .v-label {
  height: 20px;
  position: absolute;
  letter-spacing: normal;
}

.v-text-field .v-label {
  overflow: inherit!important;
  top: 33px!important;
  left: initial !important;

}
.v-input input {max-height: initial !important}

.v-text-field input {
  padding: 0 !important;
  flex: 1 1 auto;
  line-height: 20px;
  padding: 8px 0 8px;
  max-width: 100%;
  min-width: 0px;
  width: 100%;
}
.v-text-field {
  margin: 0 !important;
  padding: 0 !important;
}
.input-text {  
  font-size: 65px!important;
}
.v-label {
  font-size: 30px !important;
}

@media (min-width: 600px) {
  .input-text {
    font-size: 100px !important;   
  }
  .v-input__slot {
    padding: 0 50px !important;
  }
  .v-text-field .v-label {
    top: 73px!important;
  }
}

@media (min-width: 960px) {
  .input-text {
    font-size: 135px !important;
  }
  .v-text-field .v-label {
    left: 32% !important;
  }
  .v-text-field .v-label {
    top: 110px !important
  }
}
</style>