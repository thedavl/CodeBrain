<template>
  <div id="app">
    <div id="header">
      <p id="logo">CodeBrain</p>
      <div v-if="isLogged">
        <p style="font-size: 30px; margin: 0 30px 0 0;">Welcome David!</p>
        <button @click="logout">Logout</button>
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
    }
  },
  computed: {
    isLogged() {
      return isLoggedIn();
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#logo {
  font-size: 40px;
  margin: 0 0 0 50px;
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
