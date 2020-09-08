<template>
  <Suspense>
    <template #default>
      <div id="app">
        <h1>Bowling point board project</h1>
        <BowlingBoard />
      </div>
    </template>
    <template #fallback>
      Loading...
    </template>
  </Suspense>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import BowlingBoard from "./components/BowlingBoard.vue";

@Options({
  components: {
    BowlingBoard,
  },
})
export default class App extends Vue {}
</script>
