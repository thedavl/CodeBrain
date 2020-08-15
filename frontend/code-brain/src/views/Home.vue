<template>
  <div>
    <div id="main-flex">
      <div id="left-stuff-container">
        <div id="queue">
          <p class="subtitle">
            Queue
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
              <p>{{ item.name }}</p>
            </div>
          </div>
        </div>
      </div>
      <div id="right-stuff-container">
        <div id="detail-box" v-if="selected && !isEditing">
          <p id="detail-title" class="subtitle">{{ selected.name }}</p>
          <br />
          <div class="button-flex">
            <div v-if="selected.isComplete" class="btn-spacer"></div>
            <div v-else>
              <button
                class="btn btn-outline-dark"
                id="white-dark-button"
                @click="completeProblem"
              >
                Finish
              </button>
            </div>
            <a
              class="btn btn-outline-dark"
              id="white-dark-button"
              :href="selected.link"
              target="_blank"
              >Problem Link</a
            >
            <button
              class="btn btn-outline-dark"
              id="white-dark-button"
              @click="startEditing"
            >
              Edit
            </button>
          </div>
          <br />
          <div id="notes">
            <p class="detail-text">{{ selected.notes }}</p>
          </div>
          <div id="solution">
            <p class="detail-text">{{ selected.solution }}</p>
          </div>
        </div>
        <div id="detail-box" v-if="isEditing">
          <br /><br />
          <input
            class="editBox"
            type="text"
            v-model="newName"
            :defaultValue="selected.name"
          /><br /><br /><br />
          <input
            class="editBox"
            type="url"
            v-model="newLink"
            :defaultValue="selected.link"
          /><br /><br /><br />
          <textarea
            rows="12"
            cols="106"
            v-model="newNotes"
            :defaultValue="selected.notes"
          /><br /><br />
          <textarea
            rows="15"
            cols="106"
            v-model="newSolution"
            :defaultValue="selected.solution"
          /><br />
          <button
            class="btn btn-outline-dark"
            id="white-dark-button"
            @click="performEdits"
          >
            Finish
          </button>
          <button
            class="btn btn-outline-dark"
            id="white-dark-button"
            @click="cancelEdits"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      todo: [],
      finished: [],
      selected: null,
      isEditing: false,
      activeCard: null,
      newName: null,
      newLink: null,
      newNotes: null,
      newSolution: null,
      REST_ENDPOINT: "http://localhost:8000"
    };
  },
  created() {
    this.getUserProblems();
  },
  methods: {
    async completeProblem() {
      await axios({
        url: `${this.REST_ENDPOINT}/problems/` + this.selected._id,
        method: "PATCH",
        data: {
          isComplete: true
        },
        headers: {
          Authorization: "Bearer " + localStorage.getItem("authToken")
        }
      });
      window.location.reload();
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
          this.selected = arr[item];
          console.log("new selected", this.selected);
          this.activeCard = name;
          return;
        }
      }
      console.log("not found uh oh");
    },
    addNewProblem() {
      this.$router.push("/create");
    },
    startEditing() {
      this.isEditing = true;
      this.newName = this.selected.name;
      this.newLink = this.selected.link;
      this.newNotes = this.selected.notes;
      this.newSolution = this.selected.solution;
    },
    async performEdits() {
      var data = {
        name: this.newName,
        link: this.newLink,
        notes: this.newNotes,
        solution: this.newSolution
      };
      try {
        await axios({
          url: `${this.REST_ENDPOINT}/problems/` + this.selected._id,
          method: "PATCH",
          data: data,
          headers: {
            Authorization: "Bearer " + localStorage.getItem("authToken")
          }
        });
        await this.getUserProblems();
        console.log("nw", this.todo);
        if (this.selected.isCompleted) {
          this.showDetails(this.newName, this.finished);
        } else {
          this.showDetails(this.newName, this.todo);
        }
        this.isEditing = false;
      } catch (err) {
        console.log(err);
      }
    },
    cancelEdits() {
      this.isEditing = false;
    }
  }
};
</script>

<style>
#detail-title {
  margin-top: 30px;
}
.btn-spacer {
  width: 70px;
}
.button-flex {
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 0 auto;
}
.editBox {
  width: 300px;
}
#white-dark-button {
  background: white;
}
#white-dark-button:hover {
  background: #343a40;
}
#addProblem {
  margin-left: 265px;
}
.active {
  /* box-shadow: 3px 3px 5px #999; */
  background-color: #a8fffa;
}
.detail-text {
  margin-top: 10px;
  width: 100%;
  word-break: break-all;
}
#notes {
  border: solid 1px black;
  width: 43vw;
  min-width: 340px;
  height: 32%;
  border-radius: 6px;
  margin: 0 auto;
  margin-top: 20px;
  text-align: left;
  padding-left: 20px;
  background: white;
  white-space: pre-wrap;
  overflow-y: auto;
}
#solution {
  border: solid 1px black;
  width: 43vw;
  min-width: 340px;
  height: 45%;
  border-radius: 6px;
  margin: 0 auto;
  margin-top: 20px;
  text-align: left;
  padding-left: 20px;
  background: white;
  white-space: pre-wrap;
  overflow-y: auto;
}
.subtitle {
  font-size: 25px;
}
.single-card {
  position: relative;
  border: solid 1px black;
  width: 380px;
  height: 50px;
  margin: 0 auto;
  border-radius: 8px;
  line-height: 20px;
  margin-top: 10px;
  padding-left: 10px;
  /* new stuff */
  overflow: hidden;
  transition: 0.5s all ease;
  cursor: pointer;
}
.single-card::before {
  background: #a8fffa;
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: -1;
  transition: all 0.6s ease;
  width: 100%;
  height: 0%;
  transform: translate(-50%, -50%) rotate(-20deg);
}
.single-card:hover::before {
  height: 400%;
}
.single-card p {
  line-height: 47px;
  font-size: 18px;
}
#detail-box {
  width: 100%;
  height: 96.9%;
  background: #a8fffa;
}
#main-flex {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100vw;
  margin-top: -85px;
}
#left-stuff-container {
  width: 50vw;
  min-width: 400px;
  margin-top: 100px;
}
#right-stuff-container {
  background: #a8fffa;
  width: 50vw;
  min-width: 400px;
  height: 100vh;
}
.scrollerBox {
  height: 250px;
  overflow-y: auto;
}
#queue {
  height: 30vh;
  width: 400px;
  text-align: left;
  margin: 0 auto;
  margin-top: 85px;
  margin-bottom: 80px;
}
#finished {
  height: 30vh;
  width: 400px;
  text-align: left;
  margin: 0 auto;
}
</style>