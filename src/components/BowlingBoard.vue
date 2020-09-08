<template>
  <div class="hello">
    <p data-testid="token">{{ token }}</p>
    <ul>
      <p data-testid="points">
        {{ points }}
      </p>
      <p data-testid="totals"> {{ totals }}</p>
    </ul>
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
    console.log("TOTALS", totals);

    const response = await axios.post("http://13.74.31.101/api/points", {
      token,
      points: totals,
    });
    console.log(response);

    return {
      token,
      points,
      totals
    };
  },
};
</script>
