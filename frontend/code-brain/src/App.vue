<template>
    <div id="app">
    <div id="header" class="flex-nav">
      <img id="logo" @click="toHome" src="@/assets/CodeBrain.png" />
      <div v-if="isLogged" id="loggedInMsg">
        <p class="welcome-message">{{ getName }} <button id="logout" class="btn btn-outline-dark" @click="logout">Logout</button></p>
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
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

.welcome-message {
  font-size: 20px; 
  margin: 0 30px 0 0;
}

.spacer {
  margin: 0 5px 0 5px;
}

option {
  color: black;
}

.subtitle {
  font-size: 25px;
}
.flex {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 36vw;
  margin: 0 auto;
}
.difficulty-bubble {
  width: 12px;
  height: 12px;
  border-radius: 6px;
}
.difficulty-bubble-easy {
  background-color: rgb(0, 204, 10);
}
.difficulty-bubble-medium {
  background-color: rgb(255, 208, 0);
}
.difficulty-bubble-hard {
  background-color: rgb(255, 47, 10);
}
.tag-bubble {
  height: 29px;
  line-height: 29px;
  border-radius: 15px;
  padding: 0 14px 0 14px;
  border: none;
  color: white;
  display: inline-block;
}
.tag-bubble-easy {
  background: rgb(0, 204, 10);
}

.tag-bubble-medium {
  background: rgb(255, 208, 0);
}

.tag-bubble-hard {
  background: rgb(255, 47, 10);
}

.tag-bubble-Design {
  background-color:rgb(143, 219, 0)
}

.tag-bubble-Array {
  background-color: #00c721;
}

.tag-bubble-String {
  background-color: #0068f0;
}

.tag-bubble-Dynamic-Programming {
  background-color: #f00084;
}

.tag-bubble-Tree {
  background-color: #b000f0;
}

.tag-bubble-Math {
  background-color: #2cfc9b;
}

.tag-bubble-Linked-List {
  background-color: #2cf5fc;
}

.tag-bubble-BFS {
  background-color: #6a2cfc;
}

.tag-bubble-DFS {
  background-color: #fc9b2c;
}

.tag-bubble-Matrix {
  background-color: #e42cfc;
}

.tag-bubble-Recursion {
  background-color: #ff41aa;
}

.tag-bubble-Sliding-Window {
  background-color: #1900ff;
}

.tag-bubble-Hash-Table {
  background-color: #8f0000;
}

#loggedInMsg {
  min-width: 300px;
  margin-left: 30px;
}
.flex-nav {
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
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
}
#logo {
  margin: 0 0 0 50px;
  width: 250px;
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