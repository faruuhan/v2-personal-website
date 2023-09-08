<template>
  <div
    class="relative p-4 overflow-hidden rounded-2xl aspect-square"
    :class="{
      'bg-gradient-to-b from-cyan-800 to-cyan-700 animate-fadeIn':
        time === 'Night',
      'bg-gradient-to-b from-sky-400 to-sky-300 animate-fadeIn':
        time === 'Morning',
      'bg-gradient-to-b from-orange-400 to-orange-300 animate-fadeIn':
        time === 'Afternoon',
    }"
  >
    <h4 class="text-2xl text-white font-cursive">Good</h4>
    <h2 class="relative z-10 text-2xl text-white break-words font-cursive">
      {{ time }}!
    </h2>
    <img
      src="~/static/days/moon.png"
      class="absolute -top-3 w-14 right-2"
      alt=""
      v-if="time === 'Night'"
    />
    <img
      src="~/static/days/cloudy.png"
      class="absolute top-3 w-14 right-2 animate-fadeIn"
      alt=""
      v-if="time === 'Morning'"
    />
    <img
      src="~/static/days/sun.png"
      class="absolute z-0 top-3 w-14 right-2"
      alt=""
      v-if="time === 'Afternoon'"
    />
  </div>
</template>
<script>
import dayjs from "dayjs";

export default {
  data() {
    return {
      time: "",
    };
  },
  async mounted() {
    this.getTimestamp();
  },
  methods: {
    getTimestamp() {
      const timestamp = new Date();
      // dayjs(timestamp).format("H")
      const hour = dayjs(timestamp).format("H");
      if (hour >= 0 && hour < 12) {
        this.time = "Morning";
      }
      if (hour >= 12 && hour < 18) {
        this.time = "Afternoon";
      }
      if (hour >= 18 && hour < 24) {
        this.time = "Night";
      }
      setTimeout(this.getTimestamp, 1000);
    },
  },
};
</script>
