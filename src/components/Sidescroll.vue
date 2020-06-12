<template>
  <section class="text-gray-700 body-font ">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap w-full mb-6">
      <div class="w-full flex items-center text-left mb-2 lg:mb-0">
        <h1  class="sm:text-5xl text-2xl font-medium title-font mb-2 text-gray-900 mr-auto">Faculty Spotlight</h1>
        <div class="flex">
            <div @click="move(1)" class="flex p-2 justify-center items-center border border-gray-300 hover:border-gray-500 rounded text-gray-500 fill-current hover:text-gray-700 cursor-pointer mr-6">
                    <svg version="1.1" class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 492.004 492.004" style="enable-background:new 0 0 492.004 492.004; transform:rotate(180deg)" xml:space="preserve">
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
            <div @click="move(-1)" class="flex p-2 justify-center items-center border border-gray-300 hover:border-gray-500 rounded text-gray-500 fill-current hover:text-gray-700 cursor-pointer">
                    <svg version="1.1" class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 492.004 492.004" style="enable-background:new 0 0 492.004 492.004;" xml:space="preserve">
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
            
        </div>
        
      </div>
    </div>
    <div class="flex overflow-x-hidden -m-4 relative" >
        <div class="xl:w-1/4 md:w-1/2 p-4 opacity-0" style="min-width: 25%">
                <div class=" p-6 rounded-lg">
                    <img class="h-40 rounded h-full w-auto mx-auto object-cover object-center mb-6" src="https://img1.wsimg.com/isteam/ip/98c1f477-09ba-4d4d-87bc-8ed1076615eb/82715be3-a50d-4f94-9f28-62bbd9b49995.jpg/:/cr=t:14.34%25,l:0%25,w:100%25,h:74.94%25/rs=w:388,h:194,cg:true" alt="content">
                    <h2 class="text-lg text-gray-900 font-medium title-font">test</h2>
                    <h3 class="tracking-widest text-blue-500 text-xs font-medium title-font mb-4">SUBTITLE</h3>
                    <p class="leading-relaxed text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum, enim id malesuada venenatis, enim ante aliquam eros, sit amet fringilla dolor justo non mi.</p>
                </div>
            </div>
        <div class="flex w-full absolute top-0 faculty" :class="noTransition ? 'notransition' : ''" :style="{left: offset+'%'}">
            <div v-for="(val, ind) in displaying" :key="ind+66" class="xl:w-1/4 md:w-1/2 p-4" style="min-width: 25%" >
                <div class=" p-6 rounded-lg">
                    <div class="w-full h-48 relative flex overflow-x-hidden mb-6">
                        <img class=" h-full w-auto rounded object-cover object-center" :src="content[val].img" alt="content">

                    </div>
                <h2 class="text-lg text-left text-blue-700 font-medium title-font">{{content[val].name}}</h2>
                <h3 class="tracking-wide text-left text-gray-500 text-xs font-normal title-font mb-4 uppercase">{{content[val].institution}}</h3>
                <p class="hidden lg:block leading-relaxed text-left text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum, enim id malesuada venenatis, sit amet fringilla dolor justo non mi. </p>
                </div>
            </div>
        </div>
      
    </div>
  </div>
</section>
</template>

<script>
export default {
    data() {
        return {
            first: false,
            offset: -25,
            content: [
        {
            name: "Dr. Jeffrey N. Bernstein",
            institution: "Jackson Memorial",
            img: 'https://img1.wsimg.com/isteam/ip/98c1f477-09ba-4d4d-87bc-8ed1076615eb/82715be3-a50d-4f94-9f28-62bbd9b49995.jpg/:/cr=t:14.34%25,l:0%25,w:100%25,h:74.94%25/rs=w:388,h:194,cg:true',
            interest: "All things Poison"
        },
        {
            name: "Dr. Hector Chavez",
            institution: "Jackson Memorial",
            img: 'https://img1.wsimg.com/isteam/ip/98c1f477-09ba-4d4d-87bc-8ed1076615eb/IMG_0746.jpeg/:/cr=t:17.66%25,l:0%25,w:100%25,h:39.06%25/rs=w:388,h:194,cg:true',
            interest: "All things Poison"
        },
        {
            name: "Dr. Armando Clift",
            institution: "Jackson Memorial",
            img: 'https://img1.wsimg.com/isteam/ip/98c1f477-09ba-4d4d-87bc-8ed1076615eb/Clift.jpg/:/cr=t:4.97%25,l:0%25,w:100%25,h:52%25/rs=w:388,h:194,cg:true',
            interest: "All things Poison"
        },
        {
            name: "Dr. Sara Cortes",
            institution: "Jackson Memorial",
            img: 'https://img1.wsimg.com/isteam/ip/98c1f477-09ba-4d4d-87bc-8ed1076615eb/image003.jpg/:/cr=t:4.8%25,l:0%25,w:100%25,h:84.75%25/rs=w:388,h:194,cg:true',
            interest: "All things Poison"
        },
        {
            name: "Dr. John A. Esin",
            institution: "Jackson Memorial",
            img: 'https://img1.wsimg.com/isteam/ip/98c1f477-09ba-4d4d-87bc-8ed1076615eb/IMG_9128.JPG/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:388,h:194,cg:true',
            interest: "All things Poison"
        },
        {
            name: "Dr. Laura Eliseo",
            institution: "Jackson Memorial",
            img: 'https://img1.wsimg.com/isteam/ip/98c1f477-09ba-4d4d-87bc-8ed1076615eb/image1.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:388,h:194,cg:true',
            interest: "All things Poison"
        },
        {
            name: "Dr. Yoram Gutfreund",
            institution: "Jackson Memorial",
            img: 'https://img1.wsimg.com/isteam/ip/98c1f477-09ba-4d4d-87bc-8ed1076615eb/36be098d-5ee7-4828-8170-1c6cba7e8d91-0001.jpeg/:/cr=t:12.09%25,l:0%25,w:100%25,h:70.42%25/rs=w:388,h:194,cg:true',
            interest: "All things Poison"
        },
        {
            name: "Dr. Brooke Hensley",
            institution: "Jackson Memorial",
            img: 'https://img1.wsimg.com/isteam/ip/98c1f477-09ba-4d4d-87bc-8ed1076615eb/image1-0001.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:76.92%25/rs=w:388,h:194,cg:true',
            interest: "All things Poison"
        },
        {
            name: "Dr. Jennifer S. Jackson",
            institution: "Jackson Memorial",
            img: 'https://img1.wsimg.com/isteam/ip/98c1f477-09ba-4d4d-87bc-8ed1076615eb/89fe216e-2524-4d7c-9d07-e0afa5588ff4.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:94.34%25/rs=w:388,h:194,cg:true',
            interest: "All things Poison"
        },
    ],
        displaying: [
            
        ],
        noTransition: false,
        count: 0,
        isMoving: false
        }
    },
    methods: {
        move(val) {
            if(this.isMoving) return
            this.isMoving = true
            if(val>=1) {
                this.noTransition = false
                this.offset+=25
                setTimeout(() => {
                    this.noTransition = true
                    this.offset=-25
                    if(this.displaying[0]==0) this.displaying.unshift(this.content.length-1)
                    else this.displaying.unshift(this.displaying[0]-1)
                    this.displaying.pop()
                    this.count--
                    this.isMoving = false
                }, 600)
            } else {
                this.noTransition = false
                this.offset-=25
                setTimeout(() => {
                    this.noTransition = true
                    this.offset= -25
                    if(this.displaying[this.displaying.length-1]==this.content.length-1) this.displaying.push(0)
                    else this.displaying.push(this.displaying[this.displaying.length-1]+1)
                    this.displaying.shift()
                    this.count++
                    this.isMoving = false
                }, 600)
            }
        },
        autoMove(){
            setTimeout(() => {
                this.count--
                this.move(-1)
                this.autoMove()
            }, 4000)
        },
    },
    mounted() {
        this.displaying = [this.content.length-1,0,1,2,3,4]
        this.autoMove()
    },
    
}
</script>

<style scoped>

.faculty {
    -webkit-transition:  all 0.6s ease;
    -moz-transition:  all 0.6s ease;
    -o-transition:  all 0.6s ease;
    transition:  all 0.6s ease;
}

.notransition {
  -webkit-transition: none !important;
  -moz-transition: none !important;
  -o-transition: none !important;
  transition: none !important;
}

</style>