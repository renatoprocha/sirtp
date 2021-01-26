<template>
    <div>
        {{info}}
        Nome: <input type="text" v-model="nome" /><br>
        Password<input type="password" v-model="password" /><br>
        <button @click="fetch()">Login</button>
        
        
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
        }
    },
  
    methods: {

    fetch() {  
      axios.get('http://localhost:3000/login/'+this.nome+'/'+this.password)
     .then((response) => {
     
         if(response.data == "utilizador encontrado"){
             alert("Login correto")
         }
         else{
             alert("Login incorreto")
         }
     })
        
    
        }
   
    }
}
       
      
    
</script>

