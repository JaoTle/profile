<template>
  <div class="mx-12 xl:mx-24 lg:mx-24 md:mx-24 space-y-6 h-screen">
    <div class="space-y-1 grid place-items-center xl:place-items-start xl:space-y-2 lg:place-items-start lg:space-y-2 md:place-items-start md:space-y-2">
        <h1 class="text-softblue font-bold font-quicksand
        text-3xl xl:text-5xl lg:text-5xl md:text-4xl">SKILLS</h1>
        <div class="w-28 h-1 ml-12 xl:w-48 xl:h-2 xl:ml-7 bg-gradient-to-r from-lightblue to-lightpur rounded-lg"></div>
    </div>
    <div class="w-full h-1/3 xl:h-3/6 lg:h-3/6 bg-gradient-to-br from-lightblue to-lightpur rounded-lg p-2">
        <div class="w-full h-full bg-darkblue rounded-lg px-2 py-3 flex space-x-16">
            <div class="h-full w-16 py-2 grid bg-gradient-to-b from-lightblue to-softblue rounded-md" ref="stamina">
                <p class="text-softblue px-2 self-start font-quicksand font-semibold text-sm">STACK</p>
                <div :class="['h-full w-10/12 bg-darkblue rounded-l-md place-self-end self-center','my-[200%]']" ></div>
                <p class="text-lightblue px-2 self-end font-quicksand font-semibold text-sm">BASIC</p>
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