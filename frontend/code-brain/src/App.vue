<template>
  <div id="app">
    <div id="header">
      <a id="logo" @click="toHome">CodeBrain</a>
      <div v-if="isLogged">
        <p style="font-size: 20px; margin: 0 30px 0 0;">{{ getName }} <button id="logout" class="btn btn-outline-dark" @click="logout">Logout</button></p>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import { isLoggedIn, logoutUser } from './utils/auth'
export default {
  methods: {
    logout() {
      logoutUser();
      window.location.reload();
    },
    toHome() {
      if (this.$route.name != "Home") {
        this.$router.push('/')
      }
    }
  },
  computed: {
    isLogged() {
      return isLoggedIn();
    },
    getName() {
      var name = localStorage.getItem("userName");
      if (name) {
        return "Welcome " + name;
      } else {
        return "err"
      }
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

#logout {
  margin-left: 20px;
}

::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  border: solid 1px black;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #898989; 
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #6F6F6F; 
}

#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#logo {
  font-size: 35px;
  margin: 0 0 0 50px;
}

#logo:hover {
  cursor: pointer;
}

#header {
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
