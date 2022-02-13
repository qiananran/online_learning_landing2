<template>

    <v-footer
      class="my_footer"
      padless
    >
      <v-row
          justify="center"
          no-gutters
          class="lighten-2 text--white my_row"
      >
        <v-col
          cols="12"
          class=""
          style="display: flex; justify-content: center; align-items: center;"

        >
          <div style="display: flex; justify-content: center; align-items: center; width: 370px;height: 83px; margin-top: 68px;">
            <div style="width: 147px;height: 83px; ">
              <v-img src="https://cdn.jsdelivr.net/gh/qiananran/myImage/img/Group111.png"></v-img>
            </div>
            <div style="width: 83px;height: 0px;border: 1px solid #626381;transform: rotate(90deg); margin-left: 10px; margin-right: 10px"></div>
            <div style="  ">
              <span class="my_font" >Virtual Class for Zoom</span>
            </div>
          </div>
        </v-col>
        <v-col
            class="text-center white--text"
            cols="12"
        >
          <div style="margin-top: 70px">
            <p class="my_sub">Subscribe to get our Newsletter</p>
          </div>
        </v-col>

        <v-col
            class="text-center white--text"
            cols="12"
        >
          <div style="margin-top: 20px; display: flex;justify-content: center;align-items: center;">
            <div >
              <input v-bind="input" class="my_input" placeholder="You Email" type="text">
            </div>
            <div class="my_btn">
              <button style="font-family: Poppins;font-style: normal;font-weight: 500;font-size: 22px;line-height: 33px;color: #FFFFFF;">Subscribe</button>
            </div>
          </div>
        </v-col>

        <v-col
            class="text-center white--text"
            cols="12"

        >
          <div style="margin-top: 70px; display: flex; justify-content: center; align-items: center">
            <div class="my_text">Careers</div>
            <div class="my_line"></div>
            <div class="my_text">Privacy Policy</div>
            <div class="my_line"></div>
            <div class="my_text">Terms & Conditions</div>
          </div>
        </v-col>

        <v-col
            class="text-center white--text"
            cols="12"
            style="margin: 48px"
        >
          <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-4 white--text"
              icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-col>
      </v-row>
  </v-footer>
</template>
<script>
export default {
    name: 'Footer',
    data: () => ({
      input: '',
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
}
</script>

<style scoped>
   .my_font{
        font-family: Poppins;
        font-style: normal;
        font-weight: 600;
        font-size: 22px;
        line-height: 33px;
        letter-spacing: 0.04em;
        width:auto;
        display:block;
        text-align:left;

        color: #FFFFFF;
   }

   .my_sub{
     font-family: Poppins;
     font-style: normal;
     font-weight: 500;
     font-size: 25px;
     line-height: 39px;
     /* identical to box height */
     text-align: center;
     letter-spacing: 0.04em;
     color: #B2B3CF;
   }

   .my_input{
     width: 400px;
     height: 60px;
     box-sizing: border-box;
     border-radius: 80px;
     font-size: larger;
     text-emphasis-color: white;
     border: 1px solid #83839A;
     color: white !important;
     padding-left: 30px;

   }
   .my_row{
     background: #252641;
   }

   .my_btn{
     width: 179px;
     display: flex;
     justify-content: center;
     align-items: center;
     height: 58px;
     background: linear-gradient(105.5deg, #545AE7 19.57%, #393FCF 78.85%);
     margin-left: 18px;
     border-radius: 60px;
   }

   input:focus{
     border-color: #66afe9;
     outline: 0;
     -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
     box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)
   }

   .my_line{
     width: 17px;
     height: 0px;border: 1px solid #626381;
     transform: rotate(90deg);
   }

   .my_text{
     font-family: Poppins;
     font-style: normal;
     font-weight: normal;
     font-size: 20px;
     line-height: 33px;
     /* identical to box height */
     text-align: center;
     letter-spacing: 0.04em;
     color: #B2B3CF;
   }

</style>