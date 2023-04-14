<template>
  <div class="h-full flex flex-col self-center gap-8">
    <div class="flex gap-8">
        <img v-for="item in line1" :key="item" :src="item" class="w-[5%] object-contain">
    </div>
    <div class="flex gap-8">
        <img v-for="item in line2" :key="item" :src="item" class="w-[5%] object-contain">
    </div>
    <div class="flex gap-8">
        <img v-for="item in line3" :key="item" :src="item" class="w-[5%] object-contain">
    </div>
  </div>
</template>

<script>
export default {
    name : 'SkillBlock',
    data(){
        return {
            line1,line2,line3
        }
    }

}

const line1 = [require('@/assets/icons/java.png'),
            require('@/assets/icons/javascript.png'),
            require('@/assets/icons/html.png'),
            require('@/assets/icons/css.png'),
            require('@/assets/icons/springboot.png')
            ];
const line2 = [require('@/assets/icons/dart.png'),
            require('@/assets/icons/vue.png'),
            require('@/assets/icons/node.png'),
            require('@/assets/icons/flutter.png'),
            require('@/assets/icons/firebase.png'),
            require('@/assets/icons/mysql.png'),
            require('@/assets/icons/figma.png')
            ];
const line3 = [require('@/assets/icons/python.png'),
            require('@/assets/icons/c.png'),
            require('@/assets/icons/cplus2.png'),
            require('@/assets/icons/docker.png'),
            require('@/assets/icons/xd.png')
            ]
</script>

<style>

</style>