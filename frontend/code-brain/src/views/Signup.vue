<template>
  <div>
    <div class="inputs">
      <p id="login-signup">Signup</p>
      <label>Email</label>
      <input type="text" v-model="email" /><br />
      <label>Name</label>
      <input type="text" v-model="name" /><br />
      <label>Password</label>
      <input type="password" v-model="password" />
    </div>
    <div class="flex">
      <button class="btn btn-outline-dark" v-on:click="signup">Signup</button>
      <div class="signup-login-btn" @click="toLogin">Login</div>
    </div>
  </div>
</template>

<script>
import { signupUser } from "../utils/auth";

export default {
  name: "Signup",
  data() {
    return {
      email: "",
      name: "",
      password: ""
    };
  },
  methods: {
    toLogin() {
      this.$router.push("/login");
    },
    async signup() {
      try {
        await signupUser(this.email, this.password, this.name);
        this.$router.push("/");
        window.location.reload();
      } catch (err) {
        alert(`Error: ${err}`);
      }
    }
  }
};
</script>

<style scoped></style>
