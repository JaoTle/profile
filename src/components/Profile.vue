<template>
  <div class="my-32 text-center">
    <h1 class="text-8xl xl:text-9xl lg:text-9xl md:text-9xl font-rubik text-softblue animate-bounce">LITTLE</h1>
    <div class="px-20 py-12 text-left flex flex-col lg:flex-row xl:flex-row md:flex-row space-y-12 xl:space-x-52 lg:space-x-36 md:space-x-20">
      <img :src="proPic" class="rounded-full h-54 w-54 xl:h-64 xl:w-64 lg:h-64 lg:w-64 md:h-64 md:w-64">
      <span class="space-y-2">
        <p class="text-3xl xl:text-5xl lg:text-5xl md:text-5xl text-softblue font-comfortaa font-bold">Hi,👋</p>
        <p class="text-softblue">I'm a new graduate with B.S. (Computer Science) from Kasetsart University.</p>
      </span>
    </div>
  </div>
</template>

<script>

export default {
    name : "InfoBody",
    data(){
      return {
        proPic : require('@/assets/images/pro_pic.jpg')
      }
    }
}
</script>

<style>

</style>