<template>
  <div class="text-gray-200 cursor-pointer flex items-center relative"  @mouseenter="hovering = true" @mouseleave="hovering = false">
        
        <div class="relative flex items-center">
            <p class="text-sm text-black font-medium py-2 px-2 rounded uppercase">{{title}}</p>
            <div class="absolute bottom-0 pointer-events-none bg-blue-500 navbarbottom" style='height:2px;' :class="hovering ? ['w-full', 'opacity-100'] : ['w-0', 'opacity-0']"></div>
            <svg version="1.1" class="h-2 w-2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 492.004 492.004" style="enable-background:new 0 0 492.004 492.004; transform:rotate(90deg)" xml:space="preserve">
                <g>
                    <g>
                        <path d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12
                            c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028
                            c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265
                            c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"/>
                    </g>
                </g>
            </svg>
          </div>
        <transition
        name="slide-fade"
        >
            <div class="absolute top-0 mt-20 w-48 flex flex-col items-stretch border border-gray-200 bg-white shadow-lg" v-if="hovering">
                <div v-for="(link, ind3) in list" :key="ind3" class="w-full py-3 text-black border-b border-gray-200 hover:bg-blue-400 hover:text-white">
                    <p class=" font-normal text-left px-4 ">{{link.name}}</p>
                </div>
            </div>
        </transition>
          
  </div>
</template>

<script>
export default {
    props: ['title', 'list'],
    data() {
        return{ 
            hovering: false,
        }
    }  
    
}
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all .2s ease;
}
.slide-fade-leave-active {
  transition: all .05s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter {
    opacity: 1;
    transform: translateY(-5px);
}

.slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>