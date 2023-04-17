<template>
    <div class="bg-darkblue min-h-screen bg-scroll">
      <NavHead></NavHead>
      <InfoBody id="info"></InfoBody>
      <skill id="skill"></skill>
      <Exp id="exp"></Exp>
      <contact id="contact"></contact>
    </div>
  </template>
  
  <script>
  import NavHead from '@/components/Nav.vue'
  import InfoBody from '@/components/Profile.vue'
  import skill from '@/components/Skills.vue'
  import Exp from '@/components/Exp.vue'
  import contact from '@/components/Contact.vue'
  
  export default {
    name: 'app',
    components : {
      NavHead,
      InfoBody,
      skill,
      Exp,
      contact
    }
  }
  </script>
  
  <style>
  
  </style>
  