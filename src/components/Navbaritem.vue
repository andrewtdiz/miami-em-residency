<template>
  <div class="text-gray-200 cursor-pointer flex items-center" @mouseenter="hovering = true" @mouseleave="hovering = false">
      <router-link class="mx-1" :to="route">
          <div class="relative">
            <p class="text-sm text-black font-medium py-2 px-2 rounded uppercase">{{title}}</p>
            <div class="absolute bottom-0 pointer-events-none bg-blue-500 navbarbottom" style='height:2px;' :class="hovering ? ['w-full', 'opacity-100'] : ['w-0', 'opacity-0']"></div>

          </div>
        </router-link>
  </div>
</template>

<script>
export default {
    props: ['title', 'route'],
    data() {
        return{ 
            hovering: false,
        }
    }  
}
</script>

<style scoped>
.navbarbottom {
    transition: all 0.3s ease-out;;
}
</style>