<template>
  <div id="app">
    <BowlingBoard />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import BowlingBoard from './components/BowlingBoard.vue';

@Options({
  components: {
    BowlingBoard,
  },
})
export default class App extends Vue {}
</script>
