<template>
  <div class="flex flex-col">
    <div class="flex flex-col w-full">
        <Navbar />
        <div class="absolute flex flex-col justify-center items-center w-full z-0" style="height: 100vh">
        </div>
        <div class="absolute pt-40 flex flex-col justify-start items-center w-full" style="height: 100vh; z-index: 5;">
          <p class="text-6xl text-white font-medium">Welcome</p>
          <p class="text-xl text-white font-normal w-1/3">To the official website of the Jackson Memorial Hospital Emergency Medicine program</p>
        </div>
        <div class="absolute pt-40 flex flex-col justify-end mb-6 items-center w-full" style="height: 100vh; z-index: 5;">
          <p class="text-xl text-white font-normal mb-6 hover:underline cursor-pointer" v-scroll-to="'#learn'">Scroll down to see more</p>
        </div>
        <div class="app w-full" style="height: 100vh">

        </div>
      </div>


      <section class="text-gray-700 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
            <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">Producing the next generation of Emergency Phyisicians</h1>
            <button class="flex-shrink-0 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg mt-10 sm:mt-0" v-scroll-to="'#learn'">Learn More</button>
          </div>
        </div>
      </section>

      <section class="text-gray-700 bg-gray-200 body-font" id="learn">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap justify-between sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div v-for="(about, ind) in abouts" :key="ind+1000" class="max-w-xs mx-auto md:mx-0 p-4 md:w-1/3 sm:mb-0 mb-6">
              <div class="rounded h-64  overflow-hidden">
                <img alt="content" class="object-cover object-center h-full w-full" :src="require('../assets/' + about.image)">
              </div>
              <h2 class="text-xl font-medium text-left title-font text-gray-900 mt-5">{{about.title}}</h2>
              <p class="text-base text-left leading-relaxed mt-2">{{about.descriptions[0]}}</p>
              <router-link class="flex justify-start w-full hover:underline" :to="'/'">
                <p class="text-indigo-500 mr-auto inline-flex items-center mt-3">Learn More
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </p>
              </router-link>
              
            </div>
          </div>
        </div>
      </section>

      <section class="text-gray-700 body-font" >
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img class="object-cover object-center rounded-lg" alt="hero" src="../assets/freeman.jpg">
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font leading-tight sm:text-5xl text-3xl mb-4 font-normal text-gray-900">Statement from the <br> Program Director
            </h1>
            <p class="mb-8 leading-relaxed">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum, enim id malesuada venenatis, enim ante aliquam eros, sit amet fringilla dolor justo non mi. Fusce vel augue sed lacus consequat bibendum. Pellentesque faucibus eros vitae est fermentum commodo. Praesent viverra ut neque et varius. Nullam libero mi, efficitur ut lobortis in, eleifend et ligula. Pellentesque semper neque sit amet tincidunt aliquam. "</p>
            <h2 class="font-bold title-font text-black text-md">Christopher Freeman, MD, FACEP</h2>
            <h3 class="tracking-wide text-gray-500 text-xs font-normal title-font mb-4 uppercase">Program Director</h3>


          </div>
          
        </div>
      </section>

      <section class="text-gray-700 body-font w-full flex justify-center ">
        <div class="container px-5 py-16 mx-auto">
          <div class="xl:w-1/2 lg:w-4/5 w-full bg-gray-200 px-12 py-6 mx-auto rounded-md text-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p class="leading-relaxed font-normal text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum, enim id malesuada venenatis, enim ante aliquam eros, sit amet fringilla dolor justo non mi. Fusce vel augue sed lacus consequat bibendum. Pellentesque faucibus eros vitae est fermentum commodo. Praesent viverra ut neque et varius. Nullam libero mi, efficitur ut lobortis in, eleifend et ligula. Pellentesque semper neque sit amet tincidunt aliquam.</p>
            <span class="inline-block h-1 w-10 rounded bg-blue-500 mt-8 mb-6"></span>
            <div class="flex justify-center">
              <img class="h-12 mr-3 object-cover w-12 rounded-full" src="../assets/timothy.png" alt="">
              <div class="flex flex-col">
                  <h2 class="font-bold title-font text-black text-md">Timothy Montrief, MD</h2>
                  <p class="text-gray-600">PGY3</p>
              </div>
                
            </div>
            
          </div>
        </div>
      </section>

      <Sidescroll class="hidden md:block"/>

      

      <section class="text-gray-700 body-font relative">
        <div class="absolute inset-0">
          <iframe width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="map" scrolling="no" src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJPcLgOca22YgRKJ7iNl4Z3d4&key=AIzaSyB4AiLq7zckAx0hozUKJL8TRJ-W3oz5L1A&zoom=13&center=25.795079,-80.2"></iframe>
        </div>
        
        <!-- <div class="container px-5 py-32 mx-auto flex">
          <div class="lg:w-1/3 md:w-1/2 bg-white p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-1">
            <h1 class="flex-grow text-2xl font-medium title-font text-gray-900">Where we're located</h1>

            <p class="leading-relaxed mb-5 text-gray-600">In the heart of Miami, just off of exit 3A from I-95. Less than 20 minutes from Miami International Airport</p>
            <p class="leading-relaxed my-5 text-gray-700">For applicants and interviewees</p>

            <button class="flex-shrink-0 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg mt-10 sm:mt-0">Directions</button>
    
          </div>
          
        </div> -->
        <div class="container px-5 py-32 mx-auto flex justify-end">
          <div class="opacity-0 lg:opacity-100 flip-card rounded flex flex-col mr-12" >
            <div class="flip-card-inner" :style="{transform: flipDirections ? 'rotateY(180deg)' : ''}">
              <div class="flip-card-front pt-8 px-6">
                <h1 class="flex-grow text-2xl font-medium title-font text-gray-900">Where we're located</h1>

                <p class="leading-relaxed mb-5 text-gray-600">In the heart of Miami, just off of exit 3A from I-95. Less than 20 minutes from Miami International Airport</p>
                <p class="leading-relaxed my-5 text-gray-700">For applicants and interviewees</p>

                <button @click="flipDirections = !flipDirections" class="flex-shrink-0 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg mt-10 sm:mt-0">Directions</button>
              </div>
              <div class="flip-card-back pt-4 px-6">
                <h1 class="flex-grow text-2xl font-medium title-font text-gray-900">Directions</h1>

                <p class="leading-relaxed mb-1 text-left text-gray-700">1. Take I-95 toward exit 3A</p>
                <p class="leading-relaxed mb-1 text-left text-gray-700">2. Take exit 3A on the left to merge onto toward Airport/U M / Jackson/VA Hospitals </p>
                <p class="leading-relaxed mb-1 text-left text-gray-700">3. Keep right at the fork and merge onto NW 12th Ave </p>
                <p class="leading-relaxed mb-3 text-left text-gray-700">4. Turn right onto NW 19th St </p>
                <button @click="flipDirections = !flipDirections" class="flex-shrink-0 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg mt-10 sm:mt-0">Go back</button>

              </div>
            </div>
          </div>
        </div>
        

      </section>

      


      <footer class="text-gray-700 body-font">
        <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-no-wrap flex-wrap flex-col">
          <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <img class="-ml-8" src="../assets/jackson_memorial.png" style="height: auto; width: auto" alt="">
            </a>
            <p class="mt-2 text-sm text-gray-500">© Copyright 2020 <br> Jackson Memorial Hospital System</p>
          </div>
          <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div class="ml-auto lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-bold text-gray-800 tracking-wide text-sm mb-3">EDUCATION</h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="text-gray-600 cursor-pointer hover:text-gray-800">Clinical Sites</a>
                </li>
                <li>
                  <a class="text-gray-600 cursor-pointer hover:text-gray-800">Clinical Curriculum</a>
                </li>
                <li>
                  <a class="text-gray-600 cursor-pointer hover:text-gray-800">Didactic Curriculum</a>
                </li>
                <li>
                  <a class="text-gray-600 cursor-pointer hover:text-gray-800">Electives</a>
                </li>
                <li>
                  <a class="text-gray-600 cursor-pointer hover:text-gray-800">Research</a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-bold text-gray-800 tracking-wide text-sm mb-3">CLINICAL</h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="text-gray-600 cursor-pointer hover:text-gray-800">Ultrasound</a>
                </li>
                <li>
                  <a class="text-gray-600 cursor-pointer hover:text-gray-800">Toxicology</a>
                </li>
                <li>
                  <a class="text-gray-600 cursor-pointer hover:text-gray-800">EMS</a>
                </li>
                <li>
                  <a class="text-gray-600 cursor-pointer hover:text-gray-800">Fellowships</a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-bold text-gray-800 tracking-wide text-sm mb-3">PEOPLE</h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="text-gray-600 cursor-pointer hover:text-gray-800">Faculty</a>
                </li>
                <li>
                  <a class="text-gray-600 cursor-pointer hover:text-gray-800">Class of 2021</a>
                </li>
                <li>
                  <a class="text-gray-600 cursor-pointer hover:text-gray-800">Class of 2022</a>
                </li>
                <li>
                  <a class="text-gray-600 cursor-pointer hover:text-gray-800">Class of 2023</a>
                </li>
                <li>
                  <a class="text-gray-600 cursor-pointer hover:text-gray-800">Alumni</a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div class="bg-gray-200">
          <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p class="text-gray-500 text-sm text-center sm:text-left">
            </p>
            <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a class="text-gray-500">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a class="ml-3 text-gray-500">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a class="ml-3 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a class="ml-3 text-gray-500">
                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                  <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Sidescroll from '../components/Sidescroll.vue'
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    Navbar,
    Sidescroll,
  },
  data() {
    return {
      flipDirections: false,
      abouts: [{
          title: 'Curriculum',
          image: 'clinical.jpg',
          descriptions: ['Our curriculum was developed to incorporate multiple modalities of learning; simulation, small group sessions, review and lectures to develop outstanding future clinicians and scholars. ',
          'Residents rotate in private, academic and county hospital settings, preparing them for private and academic careers in emergency medicine.'],
        },
        {
          title: 'The Jackson Experience',
          image: 'jackson.jpg',
          descriptions: ['Established in the heart of Miami in 1918, Jackson Memorial Hospital is the largest public hospital in the nation with over 1550 beds, with an average of 110,000 ER patient visits annually.', 
          'Jackson Memorial Hospital is a safety net hospital that serves a large indigent population and immigrant population impacting and making a difference in people who have limited access to medical care ']
        },
        {
          title: 'Clinical Exposure',
          image: 'trauma.jpg',
          descriptions: ['Residents rotate in private, academic and county hospital settings, preparing them for private and academic careers in emergency medicine.', 'Ryder Trauma Center serves as the only Level 1 Trauma Center in Miami-Dade County, which sees a vast amount of penetrating and blunt trauma. ']
        }]

    }
  },
}
</script>


<style>
.app {
  background-image: url("../assets/jackson.jpg");
  background-attachment: fixed;
  background-position: 0px 50px;
  background-repeat: no-repeat;
  background-size: cover;
}

/* The flip card container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
.flip-card {
  background-color: transparent;
  width: 400px;
  height: 300px;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
}

/* This container is needed to position the front and back side */
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.4s;
  transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
/* .flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
} */

/* Position the front and back side */
.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}

/* Style the front side (fallback if image is missing) */
.flip-card-front {
  background-color: #ffffff;
  color: black;
}

/* Style the back side */
.flip-card-back {
  background-color: #ffffff;
  color: white;
  transform: rotateY(180deg);
}

</style>