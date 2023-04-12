<template>
  <div class="bg-darkblue min-h-screen">
    <NavHead></NavHead>
    <InfoBody></InfoBody>
  </div>
</template>

<script>
import NavHead from '@/components/Nav.vue'
import InfoBody from '@/components/Profile.vue'

export default {
  name: 'app',
  components : {
    NavHead,
    InfoBody
  }
}
</script>

<style>

</style>
