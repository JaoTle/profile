<template>
  <div class="mt-32 mb-8 xl:mb-28 lg:mb-28  md:mb-28 text-center">
    <h1 class="text-8xl xl:text-9xl lg:text-9xl md:text-9xl font-rubik text-softblue animate-bounce">LITTLE</h1>
    <div class="px-12 xl:px-24 lg:px-24 md:px-24 py-12 text-left flex flex-col lg:flex-row xl:flex-row md:flex-row space-y-12 xl:space-x-50 lg:space-x-36 md:space-x-20">
      <img :src="proPic" class="rounded-full h-54 w-54 xl:h-64 xl:w-64 lg:h-64 lg:w-64 md:h-64 md:w-64">
      <span class="space-y-6">
        <p class="text-3xl text-center xl:text-left lg:text-left md:text-left xl:text-5xl lg:text-5xl md:text-5xl text-softblue font-comfortaa font-bold">Hi,👋</p>
        <p class="text-blurblue font-comfortaa text-center xl:text-left lg:text-left md:text-left xl:text-xl lg:text-xl md:text-xl">
          My name is Chutikarn Mongkolthanachok.<br>
          I'm a new graduate with B.S. (Computer Science) from Kasetsart University.</p>
          <p class="text-xxs font-comfortaa text-softblue italic  text-center pt-8 xl:pt-16 lg:pt-16 md:pt-16  xl:text-left lg:text-left md:text-left">
            Interested in the position of 
            <br>Software Engineer / Software Developer.
          </p>
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