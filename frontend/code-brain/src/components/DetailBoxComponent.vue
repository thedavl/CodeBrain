<template>
    <div id="right-stuff-container">
        <div class="detail-box" v-if="!isEditing" >
            <p id="detail-title" class="subtitle">{{ selectedItem.name }}</p>
                <div class="button-flex">
                    <a
                        class="btn btn-outline-dark"
                        id="white-dark-button"
                        :href="selectedItem.link"
                        target="_blank"
                        >Problem Link</a
                    >
                    <div v-if="!selectedItem.isComplete">
                        <button
                        class="btn btn-outline-dark"
                        id="white-dark-button"
                        @click="completeProblem"
                        >
                        Finish
                        </button>
                    </div>
                    <button
                        class="btn btn-outline-dark"
                        id="white-dark-button"
                        @click="startEditing"
                    >
                        Edit
                    </button>
                    <button
                        class="btn btn-outline-dark"
                        id="white-dark-button"
                        @click="bump"
                        v-if="!selectedItem.isComplete"
                    >
                        Bump To Top
                    </button>
                </div>
                <br>
                <div v-if="selectedItem.isComplete">
                    <p>Completed on: {{ getFormattedDate(selectedItem.finishedAt) }}</p>
                </div>
                <div class="notes">
                    <p class="detail-text" v-if="selectedItem.hasOwnProperty('notes')">{{ selectedItem.notes }}</p>
                    <p class="detail-text" v-else>no notes...</p>
                </div>
                <div class="solution">
                    <p class="detail-text" v-if="selectedItem.hasOwnProperty('solution')">{{ selectedItem.solution }}</p>
                    <p class="detail-text" v-else>no solution...</p>
                </div>
        </div>
        <div class="detail-box" v-else>
            <input
                class="editBox"
                id="edit-title"
                type="text"
                v-model="newName"
                :defaultValue="selectedItem.name"
                />
            <br /><br />
            <input
                class="editBox"
                type="url"
                v-model="newLink"
                :defaultValue="selectedItem.link"
            />
            <br /><br />
            <div class="button-flex">
                <div class="btn-spacer" />
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
                <div class="btn-spacer" />
            </div>
            <div class="notes">
                <textarea
                    rows="12"
                    cols="106"
                    class="detail-text"
                    v-model="newNotes"
                    :defaultValue="selectedItem.notes"
                />
            </div>
            <div class="solution">
                <textarea
                    rows="15"
                    cols="106"
                    class="detail-text"
                    v-model="newSolution"
                    :defaultValue="selectedItem.solution"
                />
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "DetailBoxComponent",
    data() {
        return {
            isEditing: false,
            newName: null,
            newLink: null,
            newNotes: null,
            newSolution: null,
            REST_ENDPOINT: "http://localhost:8000"
        }
    },
    props: {
        selectedItem: Object
    },
    mounted() {
        console.log(this.selectedItem.solution);
    },
    methods: {
        getFormattedDate(unformattedDate) {
            // var split;
            var formatted = new Date(unformattedDate)
            var dateOnly = formatted.toDateString();
            var timeOnly = formatted.toTimeString().split(":");
            return dateOnly + " @ " + timeOnly[0] + ":" + timeOnly[1];
        },
        async bump() {
            await axios({
                url: `${this.REST_ENDPOINT}/problems/` + this.selectedItem._id + '/bump',
                method: "POST",
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("authToken")
                }
            });
            window.location.reload();
        },
        async completeProblem() {
            await axios({
                url: `${this.REST_ENDPOINT}/problems/` + this.selectedItem._id + '/finish',
                method: "POST",
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("authToken")
                }
            });
            window.location.reload();
        },
        startEditing() {
            this.isEditing = true;
            this.newName = this.selectedItem.name;
            this.newLink = this.selectedItem.link;
            this.newNotes = this.selectedItem.notes;
            this.newSolution = this.selectedItem.solution;
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
                url: `${this.REST_ENDPOINT}/problems/` + this.selectedItem._id,
                method: "PATCH",
                data: data,
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("authToken")
                }
                });
                await this.getUserProblems();
                console.log("nw", this.todo);
                if (this.selectedItem.isCompleted) {
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

<style scoped>
#right-stuff-container {
  width: 50vw;
  min-width: 400px;
  height: 85vh;
}
.detail-box {
  width: 100%;
  height: 96.9%;
  transition: 0.5s all ease;
}
#detail-title {
  color: black;
}
.subtitle {
  font-size: 25px;
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
.notes {
  width: 43vw;
  min-width: 340px;
  height: 32%;
  border-radius: 4px;
  margin: 0 auto;
  margin-top: 20px;
  text-align: left;
  padding-left: 20px;
  white-space: pre-wrap;
  word-break: break-all;
  color: black;
  overflow-y: auto;
  border: 1px solid black;
}
.solution {
  width: 43vw;
  min-width: 340px;
  height: 45%;
  border-radius: 4px;
  margin: 0 auto;
  margin-top: 20px;
  text-align: left;
  padding-left: 20px;
  white-space: pre-wrap;
  word-break: break-all;
  color: black;
  overflow-y: auto;
  border: 1px solid black;
}
.notes textarea, .solution textarea {
  margin-top: 8.5px;
  margin-left: -2px;
  max-width: 100%;
  min-height: 94%;
  border: 0;
}
.notes textarea:focus, .solution textarea:focus {
    outline: none;
}
#white-dark-button {
  background: white;
}
#white-dark-button:hover {
  background: #343a40;
}
#edit-title {
  margin-top: 30.5px;
}
.detail-text {
  margin-top: 10px;
}
</style>