<template>
  <div class="fixed w-full shadow-md flex h-20 justify-center  items-center bg-white z-10">
      <div class="flex items-stretch justify-between container h-full">
          <div class="h-full flex mx-12 mr-auto justify-between items-center">
            <img class="" src="../assets/jackson_memorial.png" style="height: 150%; width: auto" alt="">
          </div>
            <div  v-for="(route,ind) in routes" class="flex items-stretch" :key="ind">
                <Navbaritem v-if="route.path" class="mx-4" :title="route.name" :route="route.path" />
                <Navbardropdown v-else class="mx-4" :title="route.name" :list="route.list" />
            </div>
      </div>
        
        
    </div>
</template>

<script>
import Navbaritem from './Navbaritem.vue'
import Navbardropdown from './Navbardropdown'

export default {
    props: ['type'],
    components: {
        Navbaritem,
        Navbardropdown
    },
    data() {
        return {
        }
    },
    computed: {
        routes() {
            return this.$store.getters.getRoutes
        },
    },
}
</script>

<style>

</style>