<template>
  <div>
    <div class="inputs">
      <p id="login-signup">Login</p>
      <label>Email</label>
      <input class="login-input" type="text" v-model="email" /><br />
      <label>Password</label>
      <input class="login-input" type="password" v-model="password" />
    </div>
    <div class="flex">
      <button class="btn btn-outline-dark" v-on:click="login">Login</button>
      <div class="signup-login-btn" @click="toSignup">Signup</div>
    </div>
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
    },
    toSignup() {
      this.$router.push("/signup");
    }
  }
};
</script>

<style>
.login-input {
  border: 1px solid rgb(190, 189, 204);
  border-radius: 8px;
  transition: 0.5s all ease;
  padding-left: 6px;
  max-width: 204px;
}
.login-input:hover, .login-input:focus {
  border: 1px solid rgb(39, 39, 39);
  outline: none;
}

.flex {
  display: flex;
  justify-content: center;
  margin-top: 5px;
}
.signup-login-btn {
  text-decoration: none;
  margin-top: 7px;
  margin-left: 15px;
  color: #b5b5b5;
  transition: 0.5s all ease;
}
.signup-login-btn:hover {
  text-decoration: none;
  cursor: pointer;
  color: black;
}

#login-signup {
  font-size: 25px;
  margin-right: 125px;
}
.inputs {
  width: 355px;
  margin: 0 auto;
  margin-top: 26vh;
  text-align: right;
}

.inputs label {
  margin-right: 10px;
}

.inputs input {
  margin-right: 40px;
}

.input-group label {
  margin-right: 0.5rem;
}
</style>
