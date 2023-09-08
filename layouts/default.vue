<template>
  <div class="min-h-screen bg-gradient-to-tr from-lime-100 to-lime-50">
    <template v-if="isReady">
      <nuxt-child />
      <h5 class="mt-5 font-sans text-sm font-light text-center text-zinc-400">
        © 2023 made with <span class="text-pink-500">❤</span> by faruuhan
      </h5>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isReady: false,
    };
  },
  mounted() {
    this.getViewport();
  },
  beforeMount() {
    window.addEventListener("resize", this.getViewport);
  },
  destroyed() {
    window.removeEventListener("resize", this.getViewport);
  },
  methods: {
    getViewport() {
      const viewport = window.innerWidth;
      if (viewport < 1024) return this.$router.push("/support");
      this.isReady = true;
    },
  },
};
</script>
