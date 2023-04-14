<template>
  <div class="w-full grid justify-center bg-gradient-to-b from-lightblue to-lightpur">
    <div class="hidden sm:block">
        <div class="w-full px-24 py-8 flex justify-center">
            <div class="flex items-center space-x-6">
                <img :src="pic" class="rounded-full w-[10%]">
                <p class="font-comfortaa text-softblue font-bold leading-loose">Chutikarn Mongkolthanachok
                    <br><font-awesome-icon :icon="['far', 'envelope']" class="text-xl"/>&nbsp; chutikarn.t44@gmail.com
                </p>  
            </div>
            <div class="flex items-center space-x-5"> 
                <a href="https://www.linkedin.com/in/chutikarn-mongkolthanachok-ba4b33251/" class="text-5xl text-softblue">
                    <font-awesome-icon :icon="['fab', 'linkedin']" />
                </a>
                <a href="https://github.com/JaoTle" class="text-5xl text-softblue">
                    <font-awesome-icon :icon="['fab', 'github']" />
                </a>
            </div>
        </div> 
    </div>
    <div class="sm:hidden">
        <div class="flex flex-col items-center py-10 space-y-4">
            <img :src="pic" class="rounded-full w-32">
            <p class="font-comfortaa text-softblue font-bold text-sm leading-loose">
                Chutikarn Mongkolthanachok
                <br><font-awesome-icon :icon="['far', 'envelope']"/>&nbsp; chutikarn.t44@gmail.com
            </p>
            <div class="flex items-center space-x-5"> 
                <a href="https://www.linkedin.com/in/chutikarn-mongkolthanachok-ba4b33251/" class="text-3xl text-softblue">
                    <font-awesome-icon :icon="['fab', 'linkedin']" />
                </a>
                <a href="https://github.com/JaoTle" class="text-3xl text-softblue">
                    <font-awesome-icon :icon="['fab', 'github']" />
                </a>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name : 'ContactPart',
    data(){
        return {
            pic : require('@/assets/images/pro_pic.jpg')
        }
    }
}
</script>

<style>

</style>