Vue.component('dual-list', {
   template: `<div class="row">
    <div class="col-xs-5">
      <select class="form-control" style="height: 135px" v-model="selectedLeft" multiple :disabled="disable">
      	<option v-for="disponivel in disponiveis" :value="disponivel" @dblclick="goRight(disponivel)">{{getDescription(disponivel)}}</option>	
      </select>
    </div>
    <div class="col-xs-2 text-center">
      <div class="btn-group-vertical" role="group">
        <button class="btn btn-default" @click="rightOne" :disabled="disable"><i class="fa fa-angle-right"></i></button>
        <button class="btn btn-default" @click="leftOne" :disabled="disable"><i class="fa fa-angle-left"></i></button>
        <button class="btn btn-default" @click="rightAll" :disabled="disable"><i class="fa fa-angle-double-right"></i></button>
        <button class="btn btn-default" @click="leftAll" :disabled="disable"><i class="fa fa-angle-double-left"></i></button>
      </div>
    </div>
    <div class="col-xs-5">
      <select class="form-control" style="height: 135px" v-model="selectedRight" multiple :disabled="disable">
      	<option v-for="utilizado in utilizados" :value="utilizado" @dblclick="goLeft(utilizado)">{{getDescription(utilizado)}}</option>
      </select>
    </div>
  </div>`,
   props: {
      dados: {
         type: Array,
         required: true,
         twoWay: true
      },
      disable: {
         type: Boolean,
         default: false
      },
      description: {
         type: String,
         default: 'description'
      }
   },
   data: function() {
      return {
         selectedLeft: [],
         selectedRight: [],
      }
   },
   methods: {
      getDescription: function(item){
         return item[this.description];
      },
      rightOne: function() {
         if(!this.disable){
            this.selectedLeft.forEach(function(selected) {
               selected.utilizado = true;
            });
            this.selectedLeft = [];
         }
      },
      rightAll: function() {
         if(!this.disable){
            this.dados.forEach(function(dado) {
               dado.utilizado = true;
            });
         }
      },
      leftOne: function() {
         if(!this.disable){
            this.selectedRight.forEach(function(selected) {
               selected.utilizado = false;
            });
            this.selectedRight = [];
         }
      },
      leftAll: function() {
         if(!this.disable){
            this.dados.forEach(function(dado) {
               dado.utilizado = false;
            });
         }
      },
      goRight: function(a, b) {
         if(!this.disable){
            a.utilizado = true;
         }
      },
      goLeft: function(a, b) {
         if(!this.disable){
            a.utilizado = false;
         }
      }
   },
   computed: {
      disponiveis: function() {
         var self = this;
         return this.dados.filter(function(el) {
            return el.utilizado == false;
         }).sort(function(a, b) {
            if (a[self.description] < b[self.description]) return -1;
            if (a[self.description] > b[self.description]) return 1;
            return 0;
         });
      },
      utilizados: function() {
         var self = this;
         return this.dados.filter(function(el) {
            return el.utilizado == true;
         }).sort(function(a, b) {
            if (a[self.description] < b[self.description]) return -1;
            if (a[self.description] > b[self.description]) return 1;
            return 0;
         });
      }
   }
});