<template>
  <div>
    <div id="main-flex">
      <div id="left-stuff-container">
        <div id="queue">
          <p class="subtitle">
            ToDo
            <button
              id="addProblem"
              class="btn btn-outline-dark"
              @click="addNewProblem"
            >
              +
            </button>
          </p>
          <div class="scrollerBox">
            <div
              v-for="item in todo"
              :key="item.name"
              class="single-card"
              :class="{ active: activeCard == item.name }"
              @click="showDetails(item.name, todo)"
            >
              <p>{{ item.name }}</p>
            </div>
            <br />
          </div>
        </div>
        <div id="finished">
          <p class="subtitle">Recently Finished</p>
          <div class="scrollerBox">
            <div
              v-for="item in finished"
              :key="item.name"
              class="single-card"
              :class="{ active: activeCard == item.name }"
              @click="showDetails(item.name, finished)"
            >
              <p class="single-card-title">{{ item.name }}</p>
              <p>{{ getFormattedDate(item.finishedAt) }}</p>
            </div>
          </div>
        </div>
      </div>
      <transition name="fade">
        <DetailBoxComponent v-if="selected != null" :selectedItem="selected" />
      </transition>
      <div v-if="activeCard == null" id="spacer" />
    </div>
  </div>
</template>

<script>
import axios from "axios";

import DetailBoxComponent from "@/components/DetailBoxComponent.vue"

export default {
  name: "Home",
  components: {
    DetailBoxComponent
  },
  data() {
    return {
      todo: [],
      finished: [],
      selected: null,
      activeCard: null,
      REST_ENDPOINT: "http://localhost:8000"
    };
  },
  created() {
    this.getUserProblems();
  },
  methods: {
    getFormattedDate(unformattedDate) {
      var split = unformattedDate.split(":");
      var onlyDate = split[0].split("T")[0].split("-");
      // formattedDate = date[0];
      return onlyDate[1] + "/" + onlyDate[2];
    },
    async getUserProblems() {
      try {
        await axios({
          url: `${this.REST_ENDPOINT}/problems/`,
          method: "GET",
          params: {
            isComplete: false
          },
          headers: {
            Authorization: "Bearer " + localStorage.getItem("authToken")
          }
        }).then(res => {
          this.todo = res.data.problems;
        });
        await axios({
          url: `${this.REST_ENDPOINT}/problems/`,
          method: "GET",
          params: {
            isComplete: true
          },
          headers: {
            Authorization: "Bearer " + localStorage.getItem("authToken")
          }
        }).then(res => {
          this.finished = res.data.problems;
        });
      } catch (err) {
        console.log(err);
      }
    },
    showDetails(name, arr) {
      console.log(name, arr);
      for (var item in arr) {
        if (arr[item].name == name) {
          this.selected = null;
          setTimeout(() => {
            this.selected = arr[item];
            this.activeCard = name;
          }, 200);
          console.log("new selected", this.selected);
          return;
        }
      }
      console.log("not found uh oh");
    },
    addNewProblem() {
      this.$router.push("/create");
    }
  }
};
</script>

<style>
.single-card-title {

}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
#addProblem {
  margin-left: 306px;
}
.active {
  /* box-shadow: 3px 3px 5px #999; */
  background-color: #121212;
  color: white;
}
.single-card {
  position: relative;
  border: solid 1px black;
  width: 380px;
  height: 45px;
  margin: 0 auto;
  border-radius: 4px;
  line-height: 20px;
  margin-top: 10px;
  padding: 0 10px 0 10px;
  /* new stuff */
  overflow: hidden;
  transition: 0.5s all ease;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
}
.single-card p {
  line-height: 45px;
  font-size: 18px;
}
.single-card:hover{
  background: #121212;
  color: white;
}
#main-flex {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100vw;
}
#left-stuff-container {
  width: 50vw;
  min-width: 400px;
  border-right: 1px solid rgb(206, 206, 206)
}
#queue {
  height: 30vh;
  width: 400px;
  text-align: left;
  margin: 0 auto;
  margin-top: 30px;
}
#finished {
  height: 30vh;
  width: 400px;
  text-align: left;
  margin: 0 auto;
  margin-top: 85px;
}
.scrollerBox {
  height: 100%;
  overflow-y: auto;
}
#spacer {
  width: 50vw;
  min-width: 400px;
  height: 85vh;
}
</style>