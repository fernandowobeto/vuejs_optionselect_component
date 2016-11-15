new Vue({
   el: 'body',
   data: {
      disabled: true,
      dados: [{
         id: 1,
         nome: 'Rio Grande do Sul',
         utilizado: false
      }, {
         id: 2,
         nome: 'Rio Grande do Norte',
         utilizado: false
      }, {
         id: 3,
         nome: 'Paraná',
         utilizado: false
      }, {
         id: 4,
         nome: 'Santa Catarina',
         utilizado: false
      }, {
         id: 5,
         nome: 'São Paulo',
         utilizado: false
      }, {
         id: 6,
         nome: 'Rio de Janeiro',
         utilizado: false
      }, {
         id: 7,
         nome: 'Manaus',
         utilizado: false
      }, {
         id: 8,
         nome: 'Acre',
         utilizado: false
      }]
   },
   methods: {
      enableDisable: function(){
         this.disabled = !this.disabled;
      }
   }
});