<template>
  <div class="mx-12 xl:mx-24 lg:mx-24 md:mx-24 space-y-6">
    <div class="space-y-1 grid place-items-center xl:place-items-start xl:space-y-2 lg:place-items-start lg:space-y-2 md:place-items-start md:space-y-2">
        <h1 class="text-softblue font-bold font-quicksand
        text-3xl xl:text-5xl lg:text-5xl md:text-4xl">SKILLS</h1>
        <div class="w-28 h-1 ml-12 xl:w-48 xl:h-2 xl:ml-7 bg-gradient-to-r from-lightblue to-lightpur rounded-lg"></div>
    </div>
    <div class="w-full h-1/3 xl:h-3/6 lg:h-3/6 bg-gradient-to-br from-lightblue to-lightpur rounded-lg p-1 xl:p-2 lg:p-2 md:p-2">
        <div class="w-full h-full bg-darkblue rounded-lg px-2 py-3 flex space-x-3">
            <div class="flex flex-col h-full hidden sm:block">
                <div class="bg-lightblue px-2 font-quicksand font-bold text-softblue rounded-r-full ">
                    STACK
                </div>
                <div class="w-1 h-64 bg-gradient-to-br from-lightblue to-softblue "></div>
                <div class="bg-softblue px-2 font-quicksand font-bold text-slightblue rounded-r-full ">
                    BASIC
                </div>
            </div>
            <div class="sm:hidden h-full flex flex-col space-y-20 bg-gradient-to-br from-lightblue to-softblue rounded-full">
                <p class="py-5 -mx-4 rotate-90 font-quicksand font-bold text-darkblue">STACK</p>
                <p class="py-5 -mx-4 rotate-90 font-quicksand font-bold text-darkblue">BASIC</p>
            </div>
            <skillBlock></skillBlock>
        </div>
    </div>
  </div>
</template>

<script>
import skillBlock from '@/components/SkillBlock.vue'
export default {
    name : 'SkillBody',
    components :{
        skillBlock
    }
}
</script>

<style>

</style>