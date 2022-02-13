<template>
 <v-app>
   <Header />
   <v-main style="padding: 0px">

     <MyBody/>



   </v-main>
   <Footer/>
 </v-app>

</template>

<script>


  import Header from "../components/Header";
  import Footer from "../components/Footer"
  import MyBody from "../components/MyBody";
  import About from "../components/About";
  export default {
    name: 'Home',

    components: {
      About,
      MyBody,
      Header,
      Footer
      
    },
  }
</script>

<style scoped>

</style>
