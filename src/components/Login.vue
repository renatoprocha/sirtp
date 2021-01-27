<template>
    <div>
        {{info}}
        Nome: <input type="text" v-model="nome" /><br>
        Password<input type="password" v-model="password" /><br>
        <button @click="fetch()">Login</button>
        
        <p>{{ resposta }}</p>

    </div>
   
    

</template>
<script>
import axios from 'axios';
export default {
    name: 'Login',
    data() {
        return {
            info: '' ,
            nome: '' ,
            password: '', 
            resposta: ''         
        }
    },


    methods: {

    fetch() {  
      axios.get('http://localhost:3000/login/'+this.nome+'/'+this.password)
     .then((response) => {
     
         if(response.data.result == 1){
             location.href = 'http://localhost:8080/Dashboard';
         }
         else{
             this.resposta = "Login incorreto!";
         }
     })
        
    
        }
   
    }
}
 
    


    
</script>



