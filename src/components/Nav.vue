<template>
  <Disclosure as="nav" class="bg-navblue sticky top-0">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6 text-softblue" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6 text-softblue" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex flex-shrink-0 items-center">
            <img class="block h-8 w-auto lg:hidden"  :src="logo"  />
            <img class="hidden h-8 w-auto lg:block"  :src="logo"  />
          </div>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4 font-comfortaa text-lg">  
              <span v-for="item in navigation" :key="item.name" :class="[item.current ? 'text-blurblue' : 'text-softblue hover:text-blurblue', 'px-3 space-x-2']" :aria-current="item.current ? 'page' : undefined">
                <font-awesome-icon :icon="item.icon"/>
                <a href="#" v-scroll-to="item.href" @click="stateTab(item)" >{{ item.name }}</a>
              </span>
                
            </div>
          </div>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pb-3 pt-2 font-comfortaa text-base">
        <DisclosureButton v-for="item in navigation" :key="item.name" as="a" href="#" v-scroll-to="item.href" @click="stateTab(item)" :class="[item.current ? 'text-blurblue' : 'text-softblue hover:text-blurblue', 'block rounded-md px-3 py-2 text-base font-medium']" :aria-current="item.current ? 'page' : undefined">
          <font-awesome-icon :icon="item.icon"/>
          {{ item.name }}
      </DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'


export default{
  name : 'NavHead',
  components : {
    Disclosure, DisclosureButton, DisclosurePanel,Bars3Icon, XMarkIcon
  },
  data(){
    return {
      navigation,
      logo : require('@/assets/images/LG.png')
    }
  },
  methods :{
    stateTab(item){
      navigation[0].current = false
      navigation[1].current = false
      navigation[2].current = false
      navigation[3].current = false
      item.current = true;
    }
  }
}
const navigation = [
  { name: 'About', href: '#info', current: true ,icon : ['far', 'face-smile-wink']},
  { name: 'Skills', href: '#skill', current: false ,icon : ['fas', 'bars-progress']},
  { name: 'Experience', href: '#exp', current: false ,icon :['fas', 'angles-up']},
  { name: 'Contact', href: '#contact', current: false,icon : ['far', 'address-book'] },
  { name: 'Life Style', href: '#', current: false,icon : ['fas', 'icons'] },
]
</script>