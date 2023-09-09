<template>
  <div class="w-[1024px] mx-auto grid grid-cols-12 gap-6 pt-5">
    <div class="col-span-4">
      <h3 class="font-sans text-4xl text-black">{{ clock }}</h3>
      <h4 class="font-sans text-black">{{ today }}</h4>
    </div>
    <div class="col-span-8 row-span-3">
      <Summary />
    </div>
    <div class="col-span-4 row-span-2">
      <Stack />
    </div>
    <div class="col-span-2 row-span-2">
      <Weather />
    </div>
    <div class="col-span-2 row-span-2">
      <WorkAt />
    </div>
    <div class="col-span-4 row-span-4">
      <Career />
    </div>
    <div class="col-span-2 row-span-2">
      <SocialMedia />
    </div>
    <div class="col-span-2 row-span-2">
      <div class="flex items-end px-4 bg-yellow-200 rounded-2xl aspect-square">
        <div class="mb-4">
          <h3 class="text-xl text-orange-500 font-cursive">
            Hi, <br />
            There!
          </h3>
        </div>
      </div>
    </div>
    <div class="col-span-4 row-span-4">
      <Project />
    </div>
    <div class="col-span-4 row-span-2">
      <MusicPlayer />
    </div>
    <div class="col-span-4 row-span-2">
      <InstagramHighlight />
    </div>
    <div class="col-span-2 row-span-2">
      <div
        class="flex items-center justify-center h-full bg-gradient-to-b from-orange-400 to-orange-300 rounded-2xl"
      >
        <h4 class="text-4xl text-white font-cherry">ファ<br />ルハ<br />ン</h4>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";

export default {
  name: "IndexPage",
  data() {
    return {
      dateTime: new Date(),
    };
  },
  async mounted() {
    this.getTimestamp();
  },
  methods: {
    getTimestamp() {
      const timestamp = new Date();
      this.dateTime = timestamp;
      setTimeout(this.getTimestamp, 1000);
    },
  },
  computed: {
    clock() {
      return dayjs(this.dateTime).format("HH:mm");
    },

    today() {
      return dayjs(this.dateTime).format("dddd, MMMM YY");
    },
  },
};
</script>
