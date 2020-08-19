<template>
  <div>
    <p class="subtitle">Add New Interview Problem</p>
    <br />
    <label>Question Name</label><br />
    <input type="text" v-model="name" required /><br />
    <label>Link</label><br />
    <input type="text" v-model="link" /><br />
    Main Tag
    <br />
    <select v-model="mainTag">
      <option v-for="(tag, index) in allTagOptions" :key="index">{{ tag }}</option>
    </select><br /><br />
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
    </div>
    <label>Notes</label><br />
    <textarea rows="10" cols="80" v-model="notes" /><br />
    <label>Solution</label><br />
    <textarea rows="10" cols="80" v-model="solution" /><br />
    <button class="btn btn-outline-dark" @click="addNewProblem">Finish</button>
    <button class="btn btn-outline-dark" @click="cancel">Cancel</button>
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
          "Hash-Table"
      ],
      REST_ENDPOINT: "http://localhost:8000"
    };
  },
  methods: {
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
        mainTag: this.mainTag
      };
      if (this.notes.length > 0) {
        data["notes"] = this.notes;
      }
      if (this.solution.length > 0) {
        data["solution"] = this.solution;
      }
      try {
        axios({
          url: `${this.REST_ENDPOINT}/problems`,
          method: "POST",
          data: data,
          headers: {
            Authorization: "Bearer " + localStorage.getItem("authToken")
          }
        }).then(res => {
          console.log(res);
          this.$router.push("/");
        });
      } catch (err) {
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
.flex {
  display: flex;
  justify-content: center;
  max-width: 36vw;
  margin: 0 auto;
}
.active {
  box-shadow:
    0 0 0 4px white,
    0 0 0 5px black;
  color: white;
}
.tag-bubble {
  display: inline-block;
  cursor: pointer;
  margin: 6px 10px 6px 10px;
  box-shadow: 0;
  -webkit-user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -ms-user-select: none;
}
.tag-bubble:focus {
  border: none;
  outline: none;
}
textarea {
  resize: none;
}
</style>
