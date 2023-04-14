<template>
<ol class="items-baseline justify-between sm:flex">
    <li class="relative mb-6 w-full sm:mb-0">
        <div class="flex items-center">
            <img :src="pic_2020" class="object-fill z-10 flex items-center justify-center w-24 aspect-square rounded-full">
            <div class="hidden sm:flex w-full bg-gradient-to-r from-lightblue to-lightpur h-1 mx-4"></div>
        </div>
        <div class="mt-3 sm:pr-8">
            <h1 class="text-xl font-semibold font-quicksand text-white">2020</h1>
            <p class="text-base font-normal  font-comfortaa text-softblue sm:text-sm">Join CNC Lab.</p>
        </div>
    </li>
    <li class="relative mb-6 w-full sm:mb-0">
        <div class="flex items-center">
            <img :src="pic_2021" class="object-fill z-10 flex items-center justify-center w-24 aspect-square rounded-full">
            <div class="hidden sm:flex w-full bg-gradient-to-r from-lightblue to-lightpur h-1 mx-5"></div>
        </div>
        <div class="mt-3 sm:pr-8">
            <h1 class="text-xl font-semibold font-quicksand text-white">2021</h1>
            <p class="text-base font-normal  font-comfortaa text-softblue sm:text-sm">Study Online because Covid19</p>
        </div>
    </li>
    <li class="relative mb-6 w-full sm:mb-0">
        <div class="flex items-center">
            <img :src="pic_2022" class="object-fill z-10 flex items-center justify-center w-24 aspect-square rounded-full">

            <div class="hidden sm:flex w-full bg-gradient-to-r from-lightblue to-lightpur h-1 mx-5"></div>
        </div>
        <div class="mt-3 sm:pr-8">
            <h1 class="text-xl font-semibold font-quicksand text-white">2022</h1>
            <p class="text-base font-normal  font-comfortaa text-softblue sm:text-sm">
                <ul class="list-disc">
                    <li>Kaset Fair’2022 3D Team</li>
                    <li>Internship @Zipevent</li>
                    <li>Graduationl Project</li>
                    <li>Organize & Staff DEVCAMP#9</li>
                </ul>
            </p>
        </div>
    </li>
    <li class="relative mb-6 w-full sm:mb-0">
        <div class="flex items-center">
            <img :src="pic_2020" class="object-fill z-10 flex items-center justify-center w-24 aspect-square rounded-full">
            <div class="hidden sm:flex w-full bg-darkblue h-1 mx-5"></div>
        </div>
        <div class="mt-3 sm:pr-8">
            <h1 class="text-xl font-semibold font-quicksand text-white">2022</h1>
            <p class="text-base font-normal  font-comfortaa text-softblue sm:text-sm">
                <ul class="list-disc">
                    <li>Internship @KISRA</li>
                    <li>Soon..</li>
                </ul>
            </p>
        </div>
    </li>
</ol>

</template>

<script>
export default {
    data(){
        return{
            pic_2020 : require('@/assets/images/2020_pic.jpg'),
            pic_2022 : require('@/assets/images/2022_pic.jpg'),
            pic_2021 : require('@/assets/images/2021_pic.jpg'),
        }
    }
}
</script>

<style>

</style>