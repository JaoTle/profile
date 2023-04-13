<template>
  <div class="bg-darkblue min-h-screen bg-scroll">
    <NavHead></NavHead>
    <InfoBody></InfoBody>
    <skill></skill>
  </div>
</template>

<script>
import NavHead from '@/components/Nav.vue'
import InfoBody from '@/components/Profile.vue'
import skill from '@/components/Skills.vue'

export default {
  name: 'app',
  components : {
    NavHead,
    InfoBody,
    skill
  }
}
</script>

<style>

</style>
