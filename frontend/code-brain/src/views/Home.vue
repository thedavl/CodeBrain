<template>
  <div>
    <div id="main-flex">
      <div id="left-stuff-container">
        <div id="queue">
          Queue
          <div v-for="item in todo" :key="item.name" class="single-card">
            <p>{{ item.name }} <button :href="item.link">Link</button></p>
            <p>{{ item.notes }}</p>
            <p>{{ item.solution }}</p>
          </div>
        </div>
        <div id="finished">
          Recently Finished
          <div v-for="item in finished" :key="item.name" class="single-card">
              <p>{{ item.name }}</p>
              <button :href="item.link">Link</button>
              <p>{{ item.notes }}</p>
              <p>{{ item.solution }}</p>
            </div>
        </div>
      </div>
      <div id="right-stuff-container">
        <div id="detail-box">
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
      selected: [],
      REST_ENDPOINT: "http://localhost:8000"
    }
  },
  created() {
    axios({
      url: `${this.REST_ENDPOINT}/user/` + localStorage.getItem('email'),
      method: 'GET',
    })
    .then(res => {
      console.log(res);
      this.todo = res.data.user.todo;
      this.finished = res.data.user.finished;
    })
  }
}
</script>

<style scoped>
.single-card {
  border: solid 1px black;
  width: 400px;
  margin: 0 auto;
  border-radius: 8px;
  margin-bottom: 10px;
}

#detail-box {
  width: 600px;
  height: 70vh;
  border: solid 1px black;
  border-radius: 8px;
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
  margin-top: 10vh;
}

#right-stuff-container {
  width: 500px;
  margin-left: 40px;
  margin-top: 7vh;
}

#queue {
  border: solid 1px black;
  height: 30vh;
  width: 500px;
}

#finished {
  border: solid 1px black;
  height: 30vh;
  width: 500px;
  margin-top: 40px;
}
</style>
