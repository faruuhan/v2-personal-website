<template>
  <div class="flex items-center justify-center min-h-screen bg-lime-50">
    <div class="px-4">
      <h4 class="text-4xl text-center font-cursive text-zinc-700">Sorry!</h4>
      <p class="font-sans text-center text-gray-400">
        your device not support, because your device screen less than 1024px.
        please access with desktop or tablet.
        <a href="/" class="font-sans text-gray-500 hover:text-gray-300"
          >back to homepage</a
        >
      </p>
    </div>
  </div>
</template>
<script>
export default {
  layout: "exception",
};
</script>
