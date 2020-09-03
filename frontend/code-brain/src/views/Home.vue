<template>
  <div>
    <div id="main-flex">
      <div id="left-stuff-container">
        <div id="queue">
          <div class="scroller-box-flex">
            <p class="subtitle">
              ToDo
            </p>
            <!-- <div class="filters">Filter</div> -->
            <button
              class="btn btn-outline-dark"
              @click="addNewProblem"
            >
              +
            </button>
          </div>
          <div class="scroller-box">
            <div
              v-for="item in todo"
              :key="item.name"
              class="single-card"
              :class="{ active: activeCard == item.name }"
              @click="showDetails(item._id, todo)"
            > 
              <div class="single-card-title-and-overflow">
                <div class="difficulty-bubble" :class="'difficulty-bubble-' + item.difficulty" />
                <p class="single-card-title">{{ item.name }}</p>
                <p class="single-card-overflow-indicator" v-if="item.name.length > 28">...</p>
              </div>
              <div class="tag-bubble" :class="'tag-bubble-' + item.mainTag">{{ item.mainTag }}</div>
            </div>
            <br />
          </div>
        </div>
        <div id="finished">
          <p class="subtitle">Recently Finished</p>
          <div class="scroller-box">
            <div
              v-for="item in finished"
              :key="item.name"
              class="single-card"
              :class="{ active: activeCard == item.name }"
              @click="showDetails(item._id, finished)"
            >
              <div class="single-card-title-and-overflow">
                <div class="difficulty-bubble" :class="'difficulty-bubble-' + item.difficulty" />
                <p class="single-card-title">{{ item.name }}</p>
                <p class="single-card-overflow-indicator" v-if="item.name.length > 28">...</p>
              </div>
              <p class="finished-date">{{ getFormattedDate(item.finishedAt) }}</p>
            </div>
          </div>
        </div>
      </div>
      <transition name="fade">
        <DetailBoxComponent 
          v-if="selected != null"
          :selectedItem="selected" 
          @updatedProblemElement="updateProblemElements"
        />
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
      filteredTodo: [],
      finished: [],
      filteredFinished: [],
      selected: null,
      activeCard: null,
      REST_ENDPOINT: 'https://code-brain-backend.uc.r.appspot.com' // "http://localhost:8000"
    };
  },
  created() {
    this.getUserProblems();
  },
  methods: {
    async updateProblemElements() {
      await this.getUserProblems();
      if (this.selected.isCompleted) {
        this.showDetails(this.selected._id, this.finished);
      } else {
        console.log("todo", this.todo)
        this.showDetails(this.selected._id, this.todo);
      }
    },
    getFormattedDate(unformattedDate) {
        // var split;
        var date = new Date(unformattedDate);
        var minutes = date.getMinutes();
        if (minutes < 10) minutes *= 10;
        return date.getMonth() + 1 + "/" + date.getDay() + " " + date.getHours() + ":" + minutes;
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
          this.filteredTodo = res.data.problems;
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
          this.filteredFinished = res.data.problems;
        });
      } catch (err) {
        console.log(err);
      }
    },
    showDetails(id, arr) {
      for (var item in arr) {
        if (arr[item]._id == id) {
          this.selected = null;
          setTimeout(() => {
            this.selected = arr[item];
            this.activeCard = this.selected.name;
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

<style scoped>
.finished-date {
  margin: 0;
}

.subtitle {
  margin: 0;
}
.single-card-title {
  max-width: calc(27em * 0.48);
  height: 45px;
  overflow: hidden;
  word-break: break-all;
  margin: 0;
  margin-left: 10px;
}
.single-card-overflow-indicator {
  margin: 0;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
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
  transition: 0.5s all ease;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.single-card-title-and-overflow {
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: start;
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
  border-right: 1px solid #cecece
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
.scroller-box {
  height: 100%;
  overflow-y: auto;
}
.scroller-box-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 380px;
}
#spacer {
  width: 50vw;
  min-width: 400px;
  height: 85vh;
}
</style>