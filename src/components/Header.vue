<template>

  <v-app-bar
      style="padding: 0px 90px"
      app
      color="#FFF3E4"
      light
      elevation="6"
      elevate-on-scroll
  >
    <div class="my_bar">
      <div> <v-img width="110px" height="60px" src="https://cdn.jsdelivr.net/gh/qiananran/myImage/img/Group5394.png"></v-img> </div>
      <div>
        <v-btn text v-for="(text, index) in btnText" :key="index" class="my_text mr-7">
          {{ text }}
        </v-btn>
        <v-btn
            class="btn_login"
            color="white"
            width="110px"
            height="45px"
        >Login</v-btn>
        <v-btn style="color: white;box-shadow: 0px 20px 24px rgba(0, 0, 0, 0.05);border-radius: 80px; margin-left: 20px"
               color="#F48C06"
               height="45px"
               width="110px"
        >Sign Up</v-btn>
      </div>
    </div>
  </v-app-bar>


</template>

<script>
export default {
  name: "Header",
  data(){
    return{
      btnText: ['Home', 'Careers', 'Blog', 'About Us'],
      menus: [
        { title: 'Home', route: 'home'},
        { title: 'About us', route: 'about-us'},
        { title: 'Price', route: 'price'},
        { title: 'Project', route: 'project'},
        { title: 'Gallery', route: 'galley'},
        { title: 'Contact', route: 'contact'},
      ]
    }
  }
}
</script>

<style scoped>
.my_header{
  background-image: url("https://cdn.jsdelivr.net/gh/qiananran/myImage/img/Header.png");
  background-size: 100% 100%;
  height: 100%;
  position: fixed;
  width: 100%;
}
.v-btn {
  text-transform: none;
}
.my_bar{
  width: 1340px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.my_text{
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 33px;
  /* identical to box height */
  letter-spacing: 0.02em;
  color: #252641;
}
.btn_login{
  box-shadow: 0px 20px 24px rgba(0, 0, 0, 0.03);
  border-radius: 80px; margin-left: 20px; margin-right: 5px
}
.my_sub{
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
}
.my_subtitle{
  margin-top: 25px;
  width: 500px;
  height: 76px;
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 160%;
  /* or 38px */
  color: #464646;
}
</style>