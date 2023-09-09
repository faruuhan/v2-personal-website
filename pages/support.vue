<template>
  <div class="flex items-center justify-center min-h-screen bg-white-50">
    <div class="px-4">
      <h4 class="text-4xl text-center font-cursive text-zinc-700">Sorry!</h4>
      <p class="font-sans text-center text-gray-400">
        Your device isn't support, because your device screen less than 1024px.
        Please access from desktop or tablet.
        <NuxtLink to="/" class="font-sans text-gray-500 hover:text-gray-300"
          >back to homepage</NuxtLink
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
