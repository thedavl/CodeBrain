<template>
  <div>
    <div id="main-flex">
      <div id="left-stuff-container">
        <div id="queue">
          <p class="subtitle">Queue <button id="addProblem" class="btn btn-outline-dark" @click="addNewProblem">+</button></p>
          <div class="scrollerBox">
            <div v-for="item in todo" :key="item.name" class="single-card" :class="{ active : activeCard == item.name }" @click="showDetails(item.name, todo)">
              <p>{{ item.name }}</p>
            </div>
            <br>
          </div>
        </div>
        <div id="finished">
          <p class="subtitle">Recently Finished</p>
          <div class="scrollerBox">
            <div v-for="item in finished" :key="item.name" class="single-card" :class="{ active : activeCard == item.name }" @click="showDetails(item.name, finished)">
              <p>{{ item.name }}</p>
            </div>
          </div>
        </div>
      </div>
      <div id="right-stuff-container">
        <div id="detail-box" v-if="selected && !isEditing">
          <br>
          <p class="subtitle">{{ selected.name }}</p>
          <div class="button-flex">
            <div v-if="selected.isComplete" class="btn-spacer">
            </div>
            <div v-else>
              <button class="btn btn-outline-dark" id="white-dark-button" @click="completeProblem">Finish</button>
            </div>
            <a class="btn btn-outline-dark" id="white-dark-button" :href="selected.link" target="_blank">Problem Link</a>
            <button class="btn btn-outline-dark" id="white-dark-button" @click="startEditing">Edit</button>
          </div>
          <div id="notes">
            <p class="detail-text">{{ selected.notes }}</p>
          </div>
          <div id="solution">
            <p class="detail-text">{{ selected.solution }}</p>
          </div>
        </div>
        <div id="detail-box" v-if="isEditing">
          <br>
          <input class="editBox" type="text" v-model="newName" :defaultValue="selected.name" /><br><br>
          <input class="editBox" type="url" v-model="newLink" :defaultValue="selected.link" /><br><br>
          <textarea rows="10" cols="52" v-model="newNotes" :defaultValue="selected.notes" /><br><br>
          <textarea rows="10" cols="52" v-model="newSolution" :defaultValue="selected.solution" /><br>
          <button class="btn btn-outline-dark" id="white-dark-button" @click="performEdits">Finish</button>
          <button class="btn btn-outline-dark" id="white-dark-button" @click="cancelEdits">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

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
    }
  },
  created() {
    this.getUserProblems();
  },
  methods: {
    async completeProblem() {
      await axios({
        url: `${this.REST_ENDPOINT}/problems/` + this.selected._id,
        method: 'PATCH',
        data: {
          isComplete: true
        },
        headers: {
          'Authorization': "Bearer " + localStorage.getItem('authToken')
        }
      })
    },
    async getUserProblems() {
      try {
        await axios({
          url: `${this.REST_ENDPOINT}/problems/`,
          method: 'GET',
          params: {
            isComplete: false
          },
          headers: {
            'Authorization': "Bearer " + localStorage.getItem('authToken')
          }
        })
        .then(res => {
          this.todo = res.data.problems;
        })
        await axios({
          url: `${this.REST_ENDPOINT}/problems/`,
          method: 'GET',
          params: {
            isComplete: true
          },
          headers: {
            'Authorization': "Bearer " + localStorage.getItem('authToken')
          }
        })
        .then(res => {
          this.finished = res.data.problems;
        })
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
      console.log("not found uh oh")
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
      }
      try {
        await axios({
          url: `${this.REST_ENDPOINT}/problems/` + this.selected._id,
          method: 'PATCH',
          data: data,
          headers: {
            'Authorization': "Bearer " + localStorage.getItem('authToken')
          }
        })

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
}
</script>

<style>
.btn-spacer {
  width: 70px;
}

.button-flex {
  display: flex;
  justify-content: space-between;
  margin: 0 60px 0 60px;
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
  margin-left: 355px;
}
.active {
  /* box-shadow: 3px 3px 5px #999; */
  background-color: #A8FFFA;
}

.detail-text {
  margin-top: 10px;
}

#notes {
  border: solid 1px black;
  width: 480px;
  border-radius: 6px;
  margin: 0 auto;
  margin-top: 20px;
  height: 28vh;
  text-align: left;
  padding-left: 20px;
  background: white;
  white-space: pre-wrap;
  overflow-y: auto;
}

#solution {
  border: solid 1px black;
  width: 480px;
  border-radius: 6px;
  margin: 0 auto;
  margin-top: 20px;
  height: 28vh;
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
  width: 450px;
  height: 50px;
  margin: 0 auto;
  border-radius: 8px;
  line-height: 20px;
  margin-top: 10px;
  padding-left: 5px;
  /* new stuff */
  overflow: hidden;
  transition: 0.5s all ease;
  cursor: pointer;
}

.single-card::before {
  background: #A8FFFA;
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: -1;
  transition: all 0.6s ease;
  width: 100%;
  height: 0%;
  transform: translate(-50%,-50%) rotate(-20deg);
}

.single-card:hover::before {
  height: 400%;
}

.single-card p {
  line-height: 47px;
  font-size: 20px;
}

#detail-box {
  width: 600px;
  height: 75vh;
  border: solid 1px black;
  border-radius: 8px;
  background:#A8FFFA;
}

#main-flex {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100vw;
}

#left-stuff-container {
  width: 500px;
  margin-right: 40px;
  margin-top: 6vh;
}

#right-stuff-container {
  width: 500px;
  margin-left: 40px;
  margin-top: 3vh;
}

.scrollerBox {
  height: 250px;
  overflow-y: auto;
}

#queue {
  height: 30vh;
  width: 500px;
  text-align: left;
}

#finished {
  height: 30vh;
  width: 500px;
  margin-top: 40px;
  text-align: left;
}
</style>
