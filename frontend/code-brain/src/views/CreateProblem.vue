<template>
    <div>
        <p class="subtitle">Add New Interview Problem</p>
        <br>
        <form class="problem-form">
            <label>Question Name</label><br>
            <input type="text" v-model="name" required /><br>
            <label>Link</label><br>
            <input type="url" v-model="link" required /><br>
            <label>Notes</label><br>
            <textarea rows="10" cols="80" v-model="notes" /><br>
            <label>Solution</label><br>
            <textarea rows="10" cols="80" v-model="solution" /><br>
        </form>
        <button class="btn btn-outline-dark" @click="addNewProblem">Finish</button>
        <button class="btn btn-outline-dark" @click="cancel">Cancel</button>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    name: "CreateProblem",
    data() {
        return {
            name: "",
            link: "",
            notes: "",
            solution: "",
            REST_ENDPOINT: "http://localhost:8000"
        }
    },
    methods: {
        addNewProblem() {
            var data = {
                name: this.name,
                link: this.link
            }
            if (this.notes.length > 0) {
                data['notes'] = this.notes;
            }
            if (this.solution.length > 0) {
                data['solution'] = this.solution;
            }
            try {
                axios({
                    url: `${this.REST_ENDPOINT}/problems`,
                    method: 'POST',
                    data: data,
                    headers: {
                        'Authorization': "Bearer " + localStorage.getItem('authToken')
                    }
                })
                .then(res => {
                    console.log(res);
                    this.$router.push("/");
                })
            } catch (err) {
                console.log(err);
            }
        },
        cancel() {
            this.$router.push("/");
        }
    }
}
</script>
<style scoped>
textarea {
  resize: none;
}
.problem-form label {
    margin-right: 10px;
}
</style>