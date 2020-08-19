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
                <div class="button-flex">
                    <div class="tag-bubble spacer" :class="'tag-bubble-' + selectedItem.mainTag">{{ selectedItem.mainTag }}</div>
                    <div v-for="(tag, index) in selectedItem.otherTags" :key="index" :class="'tag-bubble-' + tag" class="tag-bubble spacer">{{ tag }}</div>
                </div>
                <div v-if="selectedItem.isComplete">
                    <p>Completed on <strong>{{ getFormattedDate(selectedItem.finishedAt) }}</strong></p>
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
            <div class="edit-box-top">
                <input
                    class="editBox"
                    id="edit-title"
                    type="text"
                    v-model="newName"
                    :defaultValue="selectedItem.name"
                    />
                <input
                    class="editBox"
                    type="url"
                    v-model="newLink"
                    :defaultValue="selectedItem.link"
                />
                <br />
                <div class="button-flex">
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
            <br>
            <div class="button-flex">
                <div class="tag-bubble tag-bubble-delete spacer" :class="'tag-bubble-' + selectedItem.mainTag" @click="changeMainTag()">{{ selectedItem.mainTag }}</div>
                <div v-for="(tag, index) in selectedItem.otherTags" :key="index" :class="'tag-bubble-' + tag" class="tag-bubble tag-bubble-delete spacer" @click="queueTagToDelete(tag)">{{ tag }}</div>
                <div class="tag-bubble tag-bubble-add" :id="'tag-bu bble-add'">
                    <div class="tag-bubble-add-flex">
                        <span>
                            <select class="tag-bubble-add-input" v-model="tagToAdd">
                                <option disabled value="">Select a Tag</option>
                                <option v-for="(tag, index) in allTagOptions" :key="index">{{ tag }}</option>
                            </select> 
                        </span>
                        <div class="tag-bubble-add-confirm" @click="queueTagToAdd()"></div>
                    </div>
                </div>
            </div>
            <div v-if="selectedItem.isComplete">
                <p>Completed on <strong>{{ getFormattedDate(selectedItem.finishedAt) }}</strong></p>
            </div>
            <textarea
                rows="12"
                cols="106"
                class="notes"
                v-model="newNotes"
                :defaultValue="selectedItem.notes"
            />
            <textarea
                rows="15"
                cols="106"
                class="solution"
                v-model="newSolution"
                :defaultValue="selectedItem.solution"
            />
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
            REST_ENDPOINT: "http://localhost:8000",
            tagsToDelete: [],
            tagsToAdd: [],
            tagToAdd: "",
            addingNewTag: false,
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
            ]
        }
    },
    props: {
        selectedItem: Object
    },
    mounted() {
        console.log(this.selectedItem.solution);
    },
    methods: {
        queueTagToAdd() {
            this.selectedItem.otherTags.push(this.tagToAdd);
            this.tagsToAdd.push(this.tagToAdd);
            this.tagToAdd = "";
        },
        queueTagToDelete(tag) {
            if (this.tagsToAdd.includes(tag)) {
                this.tagsToAdd.forEach(tag => {
                    this.selectedItem.otherTags.splice(this.selectedItem.otherTags.indexOf(tag), 1);
                })
            } else {
                this.selectedItem.otherTags.splice(this.selectedItem.otherTags.indexOf(tag), 1);
                this.tagsToDelete.push(tag);
            }
        },
        async deleteOtherTags() {
            await axios({
                url: `${this.REST_ENDPOINT}/problems/` + this.selectedItem._id + '/deleteOtherTag',
                method: "DELETE",
                data: {
                    otherTags: this.tagsToDelete
                },
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("authToken")
                }
            });
        },
        async addOtherTags() {
            await axios({
                url: `${this.REST_ENDPOINT}/problems/` + this.selectedItem._id + '/addOtherTag',
                method: "POST",
                data: {
                    otherTags: this.tagsToAdd
                },
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("authToken")
                }
            });
        },
        getFormattedDate(unformattedDate) {
            var formatted = new Date(unformattedDate);
            var dateOnly = formatted.toDateString().split(" ");
            var timeOnly = formatted.toTimeString().split(":");
            return dateOnly[1] + " " + dateOnly[2] + ", " + dateOnly[3] + " @ " + timeOnly[0] + ":" + timeOnly[1];
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
                await this.deleteOtherTags();
                await this.addOtherTags();
                this.tagsToDelete = [];
                this.$emit("updatedProblemElement");
                this.isEditing = false;
            } catch (err) {
                console.log(err);
            }
        },
        cancelEdits() {
            this.tagsToDelete = [];
            this.tagsToAdd.forEach(tag => {
                this.selectedItem.otherTags.splice(this.selectedItem.otherTags.indexOf(tag), 1);
            })
            this.tagsToDelete.forEach(tag => {
                this.selectedItem.otherTags.push(tag);
            })
            this.addingNewTag = false;
            this.isEditing = false;
        }
    }
}
</script>

<style scoped>
.tag-bubble-add-flex {
    display: flex;
}
.tag-bubble-add-confirm {
    color: black;
}
.tag-bubble-add-input {
    background: transparent;
    border: none;
    border-bottom: 1px solid black;
    outline: none;
}
.tag-bubble-add {
    min-width: 20px;
    margin: 0 0 0 5px;
    border: 1px solid black;
    color: rgb(255, 255, 255);
    cursor: pointer;
    transition: 0.5s all ease;
}
.tag-bubble-add span {
    white-space: nowrap;
    overflow: hidden;
    display: inline-block;
    max-width: 0;
    -webkit-transition: max-width 1s;
    transition: max-width 1s;
}
.tag-bubble-add-confirm {
    transition: 0.2s all ease;
}
.tag-bubble-add-confirm:hover {
    font-size: 25px;
}
.tag-bubble-add:hover span, .tag-bubble-add span:focus {
    max-width: 200px;
}
.tag-bubble-add-confirm:after {
    content:'+';
    font-size: 18px;
}
.tag-bubble-add:hover .tag-bubble-add-confirm:after {
    content:'✓';
    margin-left: 5px;
}
.tag-bubble-delete {
    cursor: pointer;
    transition: 0.5s all ease;
}
.tag-bubble-delete:hover {
    box-shadow: 0 0 6px #8d8d8d;
}
.tag-bubble-add:hover{
    box-shadow: 0 0 6px #8d8d8d;
    border: none;
}
.spacer {
    margin: 0 5px 0 5px;
}
.edit-box-top {
    height: 91px;
}
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
  justify-content: center;
  margin: 0 auto;
  flex-wrap: wrap;
  width: 80%;
}
.button-flex .btn {
    margin: 0 8px 0 8px;
}
.notes {
  width: 43vw;
  min-width: 340px;
  height: 32%;
  border-radius: 4px;
  margin: 0 auto;
  margin-top: 20px;
  text-align: left;
  padding: 0 20px 0 20px;
  white-space: pre-wrap;
  word-break: break-all;
  color: black;
  overflow-y: auto;
  border: 1px solid #cecece;
}
.solution {
  width: 43vw;
  min-width: 340px;
  height: 45%;
  border-radius: 4px;
  margin: 0 auto;
  margin-top: 20px;
  text-align: left;
  padding: 0 20px 0 20px;
  white-space: pre-wrap;
  word-break: break-all;
  color: black;
  overflow-y: auto;
  border: 1px solid #cecece;
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
    margin: 10px 6px 13px 0;
}
.detail-text {
  margin-top: 10px;
}
</style>