<template>
  <div>
    <div v-if="isLoading" class="popup-window">
      <br><br><br><br><br>
      Loading...
      <br><br>
      <img src="@/assets/30.gif" class="loading-img"/>
    </div>
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
      password: "",
      isLoading: false
    };
  },
  methods: {
    toLogin() {
      this.$router.push("/login");
    },
    async signup() {
      this.isLoading = true;
      try {
        await signupUser(this.email, this.password, this.name);
        this.isLoading = false;
        this.$router.push("/");
        window.location.reload();
      } catch (err) {
        alert("Error: " + err.message);
        this.isLoading = false;
      }
    }
  }
};
</script>

<style scoped></style>
