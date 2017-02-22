<template>
  <div id="app">
    <h1>Consulta tu saldo Bip!</h1>
    <br>
    <h4>Ingresa el Numero de tu targeta Bip!</h4>
    <br>
    <input type="text" v-model="tarjeta">
    <br>
    <br>
    <button v-on:click="consultar">consultar saldo</button>
    <br>
    <br>
    <div class="resultado">
      <h5>El saldo de tu tarjeta bip! es de:</h5>
      <!--pasamos la bariable que trae el saldo -->
      <h3>{{saldo.saldoTarjeta}}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      saldo: [],
      tarjeta: ''
    }
  },
   methods: {
    // creamos el metodo de consulta hacia el web service
    consultar: function(){
      // indicamos la url
      this.$http.get('http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip='+ this.tarjeta).then(response => {

        // pasamos los datos obtenidos a nuestra variable saldo
        this.saldo = response.body;
      }, response => {
        // si tenemos algun error lo mostramos en consola
        console.log(response)
      });
    } 
   }
}
</script>

<style>
/* le damos algunos estilos a nuestro componente */

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h4 {
  font-weight: normal;
}

a {
  color: #42b983;
}
</style>
