<template>
  <div>
    <div v-if="isLoading" class="popup-window">
      <br><br><br><br><br>
      Loading...
      <br><br>
      <img src="@/assets/30.gif" class="loading-img"/>
    </div>
    <p class="subtitle">Add New Interview Problem</p>
    <br />
    <label>Question Name</label><br />
    <input type="text" v-model="name" required /><br />
    <label>Link</label><br />
    <input type="text" v-model="link" /><br />
    Main Tag
    <br />
    <div class="tag-bubble tag-bubble-edit" :class="'tag-bubble-' + mainTag">
      <select class="tag-bubble-edit-input" v-model="mainTag">
        <option v-for="(tag, index) in allTagOptions" :key="index" :value="tag">{{ tag }}</option>
      </select>
    </div>
    <br />
    Other Tags
    <br />
    <div class="flex">
      <div 
        v-for="(tag, index) in allTagOptions" 
        :key="index" 
        :class="getClass(tag)"
        class="tag-bubble"
        @click="toggleAddOtherTag(tag)">
          {{ tag }}
        </div>
    </div><br />
    Difficulty
    <br />
    <div class="flex">
      <div class="tag-bubble tag-bubble-easy" :class="{ active: difficulty == 'easy' }" @click="toggleDifficulty('easy')">Easy</div>
      <div class="tag-bubble tag-bubble-medium" :class="{ active: difficulty == 'medium' }" @click="toggleDifficulty('medium')">Medium</div>
      <div class="tag-bubble tag-bubble-hard" :class="{ active: difficulty == 'hard' }" @click="toggleDifficulty('hard')">Hard</div>
    </div>
    <label>Notes</label><br />
    <textarea rows="10" cols="80" v-model="notes" /><br />
    <label>Solution</label><br />
    <textarea rows="10" cols="80" v-model="solution" /><br /><br />
    <button class="btn btn-outline-dark spacer" @click="addNewProblem">Finish</button>
    <button class="btn btn-outline-dark spacer" @click="cancel">Cancel</button>
    <br /><br /><br />
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "CreateProblem",
  data() {
    return {
      name: "",
      link: "",
      notes: "",
      solution: "",
      mainTag: "",
      otherTags: [],
      allTagOptions: [
          "Array",
          "String",
          "Dynamic-Programming",
          "Tree",
          "Math",
          "Linked-List",
          "BFS",
          "DFS",
          "Matrix",
          "Recursion",
          "Sliding-Window",
          "Hash-Table",
          "Design"
      ],
      difficulty: null,
      isLoading: false,
      REST_ENDPOINT: 'https://code-brain-backend-291804.appspot.com' // "http://localhost:8000"
    };
  },
  methods: {
    toggleDifficulty(d) {
      this.difficulty = d;
    },
    getClass(tag) {
      var c = "";
      c += "tag-bubble-" + tag;
      if (this.otherTags.includes(tag)) c += " active";
      return c;
    },
    toggleAddOtherTag(tag) {
      if (this.otherTags.includes(tag)) {
        this.otherTags.splice(this.otherTags.indexOf(tag), 1);
      } else {
        this.otherTags.push(tag);
      }
    },
    addNewProblem() {
      var data = {
        name: this.name,
        link: this.link,
        mainTag: this.mainTag,
        otherTags: this.otherTags,
        difficulty: this.difficulty
      };
      if (this.notes.length > 0) {
        data["notes"] = this.notes;
      }
      if (this.solution.length > 0) {
        data["solution"] = this.solution;
      }
      try {
        this.isLoading = true;
        axios({
          url: `${this.REST_ENDPOINT}/problems`,
          method: "POST",
          data: data,
          headers: {
            Authorization: "Bearer " + localStorage.getItem("authToken")
          }
        }).then(res => {
          console.log(res);
          this.isLoading = false;
          this.$router.push("/");
        });
      } catch (err) {
        this.isLoading = false;
        console.log(err);
      }
    },
    cancel() {
      this.$router.push("/");
    }
  }
};
</script>
<style scoped>
/* --------------- */
/* TAG BUBBLE EDIT */
/* --------------- */
.tag-bubble-edit {
  box-shadow: 0 0 6px #8d8d8d;
  color: black;
  cursor: pointer;
  transition: 0.5s all ease;
  display: inline-block;
}
.tag-bubble-edit:hover {
  background-color: transparent;
}
.tag-bubble-edit:hover .tag-bubble-edit-input {
    border-bottom: 1px solid black;
    color: black;
    background-color: transparent;
}
.tag-bubble-edit-input {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid white;
    outline: none;
    max-width: 100px;
    color: white;
    cursor: pointer;
}
/*  */
.active {
  box-shadow:
    0 0 0 4px white,
    0 0 0 5px black;
  color: white;
}
.tag-bubble {
  cursor: pointer;
  margin: 6px 10px 6px 10px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -ms-user-select: none;
  transition: 0.5s all ease;
}
.tag-bubble:focus {
  border: none;
  outline: none;
}
textarea {
  resize: none;
}
</style>
