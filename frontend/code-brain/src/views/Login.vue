<template>
    <div>
        <div class="input-group">
            <label>Email</label>
            <input type="text" v-model="email">
        </div>       
        
        <div class="input-group">
            <label>Password</label>
            <input type="password" v-model="password">
        </div>
        
        <button type="button" v-on:click="login">Login</button>
    </div>
</template>

<script>
import { loginUser } from '../utils/auth'

    export default {
        name: 'Login',
        data() {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            async login() {
                try {
                    await loginUser(this.email, this.password)
                    this.$router.push('/');
                    window.location.reload();
                }
                catch (err) {
                    alert(`Error: ${err}`)
                }
            }
        }
    }
</script>

<style>
    .input-group {
        margin: 1rem;
    }

    .input-group label {
        margin-right: 0.5rem;
    }
</style>