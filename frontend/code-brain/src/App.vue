<template>
    <div id="app">
    <div id="header" class="flex">
      <a id="logo" @click="toHome">CodeBrain</a>
      <div v-if="isLogged" id="loggedInMsg">
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

#tag-bubble-Array {
  background-color: #00c721;
  color: white !important;
}

#tag-bubble-String {
  background-color: #0068f0;
  color: white !important;
}

#tag-bubble-Dynamic-Programming {
  background-color: #f00084;
  color: white !important;
}

#tag-bubble-Tree {
  background-color: #b000f0;
  color: white !important;
}

#tag-bubble-Math {
  background-color: #2cfc9b;
  color: white !important;
}

#tag-bubble-Linked-Lists {
  background-color: #2cf5fc;
  color: white !important;
}

#tag-bubble-BFS {
  background-color: #6a2cfc;
  color: white !important;
}

#tag-bubble-DFS {
  background-color: #fc9b2c;
  color: white !important;
}

#tag-bubble-Matrix {
  background-color: #e42cfc;
  color: white !important;
}

#tag-bubble-Recursion {
  background-color: #ff41aa;
  color: white !important;
}

#tag-bubble-Sliding-Window {
  background-color: #1900ff;
  color: white !important;
}

#tag-bubble-Sliding-Hash-Table {
  background-color: #8f0000;
  color: white !important;
}

#loggedInMsg {
  width: 300px;
  margin-left: 10px;
}
.flex {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
#logout {
  margin-left: 20px;
  display: inline;
}
::-webkit-scrollbar {
  width: 8px;
}
/* Handle */
::-webkit-scrollbar-thumb {
  background: #c2c2c2; 
  border-radius: 10px;
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #a3a3a3; 
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