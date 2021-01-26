<template>
    <div>
        Nome: <input type="text" v-model="nome" /><br>
        Email: <input type="text" v-model="email" /><br>
        Password<input type="password" v-model="password" /><br>
        <button @click="signup">Signup</button>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    name: 'Signup',
    data() {
        return {
            nome: '',
            email: '',
            password: ''
        }
    },
    methods: {
        signup() {
            let newUser = {
                username: this.nome,
                password: this.password
            }
            axios.post('http://localhost:3000/signup', newUser)
            console.log(newUser)
        }
    }
}
</script>
