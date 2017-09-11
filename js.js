new Vue({
   el: 'body',
   data: {
      disabled: true,
      dados: []
   },
   methods: {
      enableDisable: function(){
         this.disabled = !this.disabled;
      },
     getSelected: function(){

     }
   },
  ready: function(){
      this.data = [{
        id: 1,
        nome: 'Rio Grande do Sul'
      }, {
        id: 2,
        nome: 'Rio Grande do Norte'
      }, {
        id: 3,
        nome: 'Paraná'
      }, {
        id: 4,
        nome: 'Santa Catarina'
      }, {
        id: 5,
        nome: 'São Paulo'
      }, {
        id: 6,
        nome: 'Rio de Janeiro'
      }, {
        id: 7,
        nome: 'Manaus'
      }, {
        id: 8,
        nome: 'Acre'
      }];
  }
});