# online_learning_landing

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


```html

<v-text-field
                  label="You email"
                  placeholder="Dense & Rounded"
                  filled
                  rounded
                  dense
                  class="my_input text--white"
                  background-color="#252641"
                  color="white"
                  clearable
                  outlined
                  height="60px"
                  prepend-inner-icon="mdi-email"
              ></v-text-field>
```


```html

<div class="my_header">
      <div style="margin-left: 80px; margin-top: 32px; margin-right: 80px">
        <v-row>
          <v-col
              cols="12"
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
          </v-col>
          <v-col
              cols="12"
              style="display: flex; margin-top: 60px"
          >
            <v-col
                cols="5"
                style="margin-left: 20px"
            >
              <div >
                <span class="my_sub" style="color: #F48C06; font-size: 48px">Studying</span>
                <span class="my_sub" style="color: #2F327D; margin-left: 20px; margin-top: -1px">Online is now much easier</span>
              </div>
              <div class="my_subtitle" style="">
                Skilline is an interesting platform that will teach you in more an interactive way
              </div>
              <div style="margin-top: 25px">
                <v-btn
                    color="#F48C06"
                    width="140px"
                    height="55px"
                    style="color: white;box-shadow: 2px 20px 60px rgba(61, 155, 185, 0.1); border-radius: 80px;"
                >Join for free</v-btn>
                <v-btn
                    color="white"
                    fab
                    large
                    dark
                    style="box-shadow: 2px 20px 60px rgba(61, 155, 185, 0.1); margin-left: 25px"
                >
                  <v-icon color="primary" x-large>mdi-play</v-icon>
                </v-btn>
                <span class="my_subtitle" style="margin-left: 25px">Watch how it works</span>
              </div>
            </v-col>
            <v-col
                cols="7"
                style=""
            >

            </v-col>

          </v-col>
        </v-row>

      </div>
    </div>
```