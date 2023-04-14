<template>
  <div class="mx-12 xl:mx-24 lg:mx-24 md:mx-24 space-y-6 pt-12 xl:pt-24 lg:pt-24 md:pt-24">
    <div class="space-y-1 grid place-items-center xl:place-items-start xl:space-y-2 lg:place-items-start lg:space-y-2 md:place-items-start md:space-y-2">
        <h1 class="text-softblue font-bold font-quicksand
        text-3xl xl:text-5xl lg:text-5xl md:text-4xl">EXPERIENCE</h1>
        <div class="w-48 h-1 ml-12 xl:w-80 xl:h-2 xl:ml-7 bg-gradient-to-r from-lightblue to-lightpur rounded-lg"></div>
    </div>
    <div class="py-6">
        <timeline ></timeline>
    </div>
  </div>
</template>

<script>

import timeline from '@/components/TImeline.vue'
export default {
    name : 'ExpBody',
    components :{
        timeline
    }
}
</script>

<style>

</style>