<template>
  <div>
    <div class="inputs">
      <p id="login">Login</p>
      <label>Email</label>
      <input type="text" v-model="email" /><br>
      <label>Password</label>
      <input type="password" v-model="password" />
    </div>
    <br>
    <button class="btn btn-outline-dark" v-on:click="login">Login</button>
  </div>
</template>

<script>
import { loginUser } from "../utils/auth";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    async login() {
      try {
        await loginUser(this.email, this.password);
        this.$router.push("/");
        window.location.reload();
      } catch (err) {
        alert(`Error: ${err}`);
      }
    }
  }
};
</script>

<style>
#login{
  font-size: 25px;
  margin-right: 125px;
}
.inputs {
  width: 320px;
  margin: 0 auto;
  margin-top: 26vh;
  text-align: right;
}

.inputs label  {
  margin-right: 10px;
}

.inputs input {
  margin-right: 40px;
}

.input-group label {
  margin-right: 0.5rem;
}
</style>