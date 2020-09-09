<template>
  <div class="hello">
    <p>token: {{ token }}</p>
    <p>
      points:  {{ points }}
    </p>
    <p> point calculated: {{ totals }}</p>
    <p>response from api: {{response.data}}</p>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { calculate } from "../utils/bowling";

export default {
  async setup() {
    const {
      data: { points, token },
    } = await axios.get("http://13.74.31.101/api/points");

    const totals = calculate(points);

    const response = await axios.post("http://13.74.31.101/api/points", {
      token,
      points: totals,
    });

    return {
      token,
      points,
      totals,
      response
    };
  },
};
</script>
