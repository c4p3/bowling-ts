<template>
  <div class="hello">
    <p>{{ points }}</p>
    <p>{{ token }}</p>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import axios from "axios";

axios.defaults.baseURL = "http://13.74.31.101";

export default class BowlingBoard extends Vue {
  data() {
    return {
      points: Array,
      token: String,
    };
  }

  points!: Array<number>;
  token!: string;

  async created() {
    await axios.get("/api/points", {}).then(response => {
      this.points = response.data.points,
      this.token = response.data.token;
    });
  }
}
</script>
