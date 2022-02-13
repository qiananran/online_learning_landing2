<template>
  <v-container fluid>
    <div >
      <div class="my_header" style="">
        <v-row no-gutters>
          <v-col
              cols="12"
              style="display: flex;"
          >
            <v-col
                cols="5"
                style="margin-left: 140px"
            >
              <div style="margin-top: 115px; width: 400px">
                <span class="my_sub" style="color: #F48C06; font-size: 35px">Studying</span>
                <span class="my_sub" style="color: #2F327D; font-size: 30px; margin-left: 20px; margin-top: -1px">Online is now much easier</span>
              </div>
              <div class="my_subtitle" style="user-select: none">
                Skilline is an interesting platform that will teach you in more an interactive way
              </div>
              <div style="margin-top: 30px">
                <v-btn
                    color="#F48C06"
                    width="150px"
                    height="55px"
                    style="color: white;box-shadow: 2px 20px 60px rgba(61, 155, 185, 0.1); border-radius: 80px;"
                >Join for free</v-btn>
                <v-btn
                    color="white"
                    fab
                    dark
                    style="box-shadow: 2px 20px 60px rgba(61, 155, 185, 0.1); margin-left: 26px"
                >
                  <v-icon color="primary" x-large>mdi-play</v-icon>
                </v-btn>
                <span class="my_subtitle" style="margin-left: 30px;user-select: none">Watch how it works</span>
              </div>
            </v-col>
            <v-col
                cols="7"
                style=""
            >
              <div style="margin-top: 120px">
                <v-card elevation="0" class="rounded-lg" style="display: flex; justify-content: center; align-items: center; width: 300px;height: 100px;background: rgba(255, 255, 255, 0.8);backdrop-filter: blur(10px); margin-left: -120px">
                  <div >
                    <v-btn color="#23BDEE" width="50px" height="60px" elevation="0"  style="border-radius: 15px">
                      <v-icon color="white">mdi-calendar-month</v-icon>
                    </v-btn>
                  </div>
                  <div style="margin-left: 32px; margin-top: 10px">
                    <h2>250k</h2>
                    <p style="font-size: 18px; margin-top: 5px">Assisted Student</p>
                  </div>
                </v-card>

                <v-card elevation="0" class="rounded-lg" style="margin-top: 193px; width: 390px;height: 187px;background: rgba(255, 255, 255, 0.8);backdrop-filter: blur(10px); margin-left: 274px">
                  <div style="width: 390px;height: 187px;padding: 24px">
                    <v-row style="">
                      <div style="display: flex; justify-content: center; align-items: center">
                        <v-col cols="2">
                          <v-avatar
                              size="64"
                          >
                            <img
                                src="https://cdn.vuetifyjs.com/images/john.jpg"
                                alt="John"
                            >
                          </v-avatar>
                        </v-col>
                        <v-col cols="9" class="ml-5">
                          <span style="font-size: 24px;color: #595959;">User Experience Class <br></span>
                          <span style="color: #545567;">Today at 12.00 PM</span>
                        </v-col>
                      </div>
                    </v-row>
                    <v-row>
                      <v-col cols="12" style="display: flex; justify-content: center; align-items: center">
                        <v-btn
                          width="180"
                          height="50"
                          elevation="0"
                          color="#D8587E"
                          class="rounded-pill"
                        >
                          <span style="color: white; font-size: 24px">Join Now</span>
                        </v-btn>
                      </v-col>
                    </v-row>
                  </div>
                </v-card>

                <v-card elevation="0" class="rounded-lg" color="back" style="margin-top: -63px; width: 80px;height: 80px; margin-left: -87px">
                  <div style="width: 80px;height: 80px; padding: 15px; background-image: linear-gradient( 135deg, #FFF886 10%, #F072B6 100%);">
                    <v-icon size="50" color="white">mdi-airplane-takeoff</v-icon>
                  </div>
                </v-card>
              </div>
            </v-col>

          </v-col>
        </v-row>

      </div>
    </div>

    <div>
      <v-row
          justify="center"
          no-gutters
          class="lighten-2 text--white my_row"
      >
        <v-container>
          <v-col
              cols="12"
              style="display: flex; justify-content: center; align-items: center; margin-top: 20px"
          >
            <span class="my_text">Trusted by 5,000+ Companies Worldwide</span>
          </v-col>
          <v-col cols="12" style="display: flex; justify-content: center; align-items: center; margin-top: 20px; margin-left: 20px">
            <v-img src="https://cdn.jsdelivr.net/gh/qiananran/myImage/img/Group16.png" width="48px" height="60px"></v-img>
          </v-col>
        </v-container>
        <v-col cols="12">
          <div style="display: flex; justify-content: center; align-items: center">
            <div class="my_text" style="font-size: 32px; margin-top: 40px">
              <span style="color: #2F327D">All-In-One <span style="color: #F48C06;">Cloud Software.</span></span>
            </div>
          </div>
          <div style="display: flex; justify-content: center; align-items: center;margin-top: 30px ">
            <p class="my_text" style="text-align: center;width: 675px; font-size: 20px">Skilline is one powerful online software suite that combines all the tools needed to run a successful school or office.</p>
          </div>

          <div  style="display: flex; justify-content: center; align-items: center; margin-top: 80px;">
            <v-card style="text-align: center; padding: 30px" class="rounded-lg">
              <div style="width: 300px">
                <v-card-text class="card_text" >
                  Online Billing,<br/>Invoicing, & Contracts
                </v-card-text>
                <v-card-text >
                  Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts
                </v-card-text>
              </div>
            </v-card>
            <v-card class="rounded-lg" style="margin-left: 60px;text-align: center; padding: 30px">
              <div>
                <v-card-text class="card_text" style="text-align: center;">
                  Customer Tracking

                </v-card-text>
                <v-card-text style="width: 260px">
                  Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization
                </v-card-text>
              </div>
            </v-card>
            <v-card class="rounded-lg"  style="margin-left: 60px;text-align: center; padding: 30px; width: 350px;">
              <div style="width: 280px">
                <v-card-text class="card_text">
                  Easy Scheduling & <br/> Attendance Tracking

                </v-card-text>
                <v-card-text >
                  Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance
                </v-card-text>
              </div>
            </v-card>
          </div>
        </v-col>
        <v-col cols="12">
          <div style="display: flex; justify-content: center; align-items: center">
            <div class="my_text" style="font-size: 32px; margin-top: 40px">
              <span style="color: #2F327D">What is<span style="color: #F48C06; margin-left: 10px">  Skilline?</span></span>
            </div>
          </div>
          <div style="display: flex; justify-content: center; align-items: center;margin-top: 30px ">
            <p class="my_text" style="text-align: center;width: 966px; font-size: 20px">Skilline is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.</p>
          </div>

          <div  style="display: flex; justify-content: center; align-items: center; margin-top: 80px;">
            <div style="width: 500px; height: 300px; border-radius: 20px;  ">

              <v-img style="text-align: center;" src="https://cdn.jsdelivr.net/gh/qiananran/myImage/img/Rectangle19.png">
                <br><br><br><br>
                <span class="my_text" style="color:#333399; margin-top: 60px">FOR INSTRUCTORS</span>
                <div>
                  <br><br>
                  <v-btn width="240px" height="62px" outlined color="white" style="font-size: 20px; " class="rounded-pill m-3">Start a class today</v-btn>
                </div>
              </v-img>
            </div>

            <div style="width: 500px; height: 300px; margin-left: 70px">

              <v-img style="text-align: center;"  src="https://cdn.jsdelivr.net/gh/qiananran/myImage/img/Rectangle21.png">
                <br><br><br><br>
                <span class="my_text" style="color:#ffffff; margin-top: 60px">FOR STUDENTS</span>
                <div>
                  <br><br>
                  <v-btn width="240px" height="62px" outlined color="white" style="font-size: 20px; background: #23BDEE;" class="rounded-pill m-3">Enter access code</v-btn>
                </div>
              </v-img>
            </div>
          </div>
        </v-col>

        <v-col cols="12" style="margin-top: 200px">
          <div style="display: flex; justify-content: center; align-items: center;">
            <div style="width: 1149px">
              <v-img src="https://cdn.jsdelivr.net/gh/qiananran/myImage/img/YouCanDoWith Skilline.png">
                <div style="display: flex; ">
                  <div style="margin-top: 50px; margin-left: 20px; width: 499px">
                    <span style="color: #2F327D; font-size: 24px; width: 200px">Everything you can do in a physical classroom, <span style="color: #F48C06">you can do with Skilline</span></span>
                    <p style="margin-top: 10px;line-height: 180%;">Skilline’s school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.</p>
                    <div class="text-decoration-underline">
                      Learn More
                    </div>
                  </div>

                  <div style="margin-top: 20px; margin-left: 90px">
                    <v-card class="rounded-xl">
                      <v-sheet width="520px" height="335px">
                      </v-sheet>
                    </v-card>
                  </div>
                </div>
              </v-img>
            </div>
          </div>
        </v-col>

        <v-col cols="12" style="margin-top: 80px">
          <div style="display: flex; justify-content: center; align-items: center; flex-direction: column">
            <div class="my_text" style="font-size: 32px; margin-top: 40px; text-align: center">
              <span style="color: #2F327D">Our <span style="color: #F48C06; margin-left: 10px">  Features</span></span>
              <br>
              <p style="font-size: 24px">This very extraordinary feature, can make learning activities more efficient</p>
            </div>
            <div style="display: flex; flex-direction: column; margin-top: 50px">
              <div>
                <div style="display: flex;">
                  <v-col cols="7">
                    <v-img width="650" src="https://cdn.jsdelivr.net/gh/qiananran/myImage/img/Group83.png"></v-img>
                  </v-col>
                  <v-col cols="5">
                    <p class="my_text" style="color: #2F327D; font-weight: bold; width: 400px">A <span style="color: #F48C06">user interface</span> designed for the classroom</p>
                    <div style="display: flex; justify-content: center; align-items: center;margin-top: 40px">
                      <v-btn
                          class="mx-2"
                          fab
                          dark
                          color="white"
                          small
                      >
                        <v-icon color="primary">
                          mdi-account-heart
                        </v-icon>
                      </v-btn>
                      <span class="ml-4" style="width: 400px;line-height: 180%;letter-spacing: 0.02em;color: #696984;">Teachers don’t get lost in the grid view and have a dedicated Podium space.
                      </span>
                    </div>
                    <div style="display: flex; justify-content: center; align-items: center;margin-top: 40px">
                      <v-btn
                          class="mx-2"
                          fab
                          dark
                          color="white"
                          small
                      >
                        <v-icon color="success">
                          mdi-coffee-maker
                        </v-icon>
                      </v-btn>
                      <span class="ml-4" style="width: 400px;line-height: 180%;letter-spacing: 0.02em;color: #696984;">Teachers don’t get lost in the grid view and have a dedicated Podium space.
                      </span>
                    </div>
                    <div style="display: flex; justify-content: center; align-items: center; margin-top: 40px">
                      <v-btn
                          class="mx-2"
                          fab
                          dark
                          color="white"
                          small
                      >
                        <v-icon color="red">
                          mdi-cards-heart
                        </v-icon>
                      </v-btn>
                      <span class="ml-4" style="width: 400px;line-height: 180%;letter-spacing: 0.02em;color: #696984;">Teachers don’t get lost in the grid view and have a dedicated Podium space.
                      </span>
                    </div>
                  </v-col>
                </div>
              </div>
              <div style="margin-top: 120px">
                <div style="display: flex;">
                  <v-col cols="5" style="display: flex; flex-direction: column; align-items: center; justify-content: center">
                    <div >
                      <div style="width: 300px">
                        <p class="my_text" style="color: #2F327D; font-weight: bold;"> <span style="color: #F48C06">Tools</span>  For Teachers And Learners</p>
                      </div>

                      <div style="width: 400px">
                        <span style="line-height: 180%;letter-spacing: 0.02em;color: #696984;">Class has a dynamic set of teaching tools built to be deployed and used during class.Teachers can handout assignments in real-time for students to complete and submit.</span>
                      </div>
                    </div>
                  </v-col>
                  <v-col cols="7" class="ml-15">
                    <v-img width="600" height="610" src="https://cdn.jsdelivr.net/gh/qiananran/myImage/img/Group122.png"></v-img>
                  </v-col>
                </div>
              </div>
              <div style="margin-top: 120px">
                <div style="display: flex;">
                  <v-col cols="7" class="ml-15">
                    <div style="width: 600px; height: 400px">
                      <v-img  src="https://cdn.jsdelivr.net/gh/qiananran/myImage/img/Group92.png"></v-img>
                    </div>
                  </v-col>
                  <v-col cols="5" style="display: flex; flex-direction: column; align-items: center; justify-content: center">
                    <div >
                      <div style="width: 300px">
                        <p class="my_text" style="color: #2F327D; font-weight: bold;"> <span style="color: #F48C06">Quizzes,</span>  Assessments,  Tests</p>
                      </div>

                      <div style="width: 400px">
                        <span style="line-height: 180%;letter-spacing: 0.02em;color: #696984;">Easily launch live assignments, quizzes, and tests.Student results are automatically entered in the online gradebook.</span>
                      </div>
                    </div>
                  </v-col>
                </div>
              </div>
              <div style="margin-top: 220px">
                <div style="display: flex;">
                  <v-col cols="5" style="display: flex; flex-direction: column; align-items: center; justify-content: center">
                    <div >
                      <div style="width: 300px">
                        <p class="my_text" style="color: #2F327D; font-weight: bold;"> <span style="color: #F48C06">Class Management</span>   Tools for Educators</p>
                      </div>

                      <div style="width: 400px">
                        <span style="line-height: 180%;letter-spacing: 0.02em;color: #696984;">Class provides tools to help run and manage the class such as Class Roster, Attendance, and more. With the Gradebook, teachers can review and grade tests and quizzes in real-time.</span>
                      </div>
                    </div>
                  </v-col>
                  <v-col cols="7" class="ml-15">
                    <div style="width: 650px; height: 400px">
                      <v-img src="https://cdn.jsdelivr.net/gh/qiananran/myImage/img/Group124.png"></v-img>
                    </div>

                  </v-col>
                </div>
              </div>
              <div style="margin-top: 220px">
                <div style="display: flex;">

                  <v-col cols="7" >
                    <div style="width: 650px; height: 450px">
                      <v-img src="https://cdn.jsdelivr.net/gh/qiananran/myImage/img/Group106.png"></v-img>
                    </div>

                  </v-col>
                  <v-col cols="5" style="display: flex; flex-direction: column; align-items: center; justify-content: center">
                    <div >
                      <div style="width: 300px">
                        <p class="my_text" style="color: #2F327D; font-weight: bold;">One-on-One <span style="color: #F48C06">Discussions</span>   </p>
                      </div>

                      <div style="width: 400px">
                        <span style="line-height: 180%;letter-spacing: 0.02em;color: #696984;">Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.</span>
                      </div>
                    </div>
                  </v-col>

                </div>
              </div>
            </div>
          </div>

        </v-col>

        <v-col cols="12" style="margin-top: 80px">
          <div style="display: flex; justify-content: center; align-items: center;">
            <div style="height: 300px; width: 300px">
              <v-img src="https://cdn.jsdelivr.net/gh/qiananran/myImage/img/Integrations.png"></v-img>
            </div>
            <div style="margin-left: 230px">
              <div style="display: flex; justify-content: left; align-items: center">
                <div style="width: 80px;height: 0px;border: 1px solid #525596;"></div>
                <span style="margin-left: 20px">INTEGRATIONS</span>
              </div>
              <div style="margin-top: 20px">
                <p style="margin-top: 20px;color: #2F327D; font-size: 24px; ">200+ educational tools and platform <br> <span style="color: #F48C06">integrations</span></p>
                <p style="margin-top: 20px;width: 550px;font-size: 20px;line-height: 150%;color: #696984;">Schoology has every tool your classroom needs and comes pre-integrated with more than 200+ tools, student information systems (SIS), and education platforms.</p>
              </div>
              <div style="margin-top: 40px">
                <v-btn width="240px" height="50px" style="font-size: 18px; border: 2px #F48C06 solid; " color="#F48C06" outlined class="rounded-pill">
                  See All Integrations
                </v-btn>
              </div>
              <br>
              <br>
            </div>
          </div>
        </v-col>

        <v-col cols="12" style="margin-top: 160px">
          <div style="display: flex; justify-content: center; align-items: center;">
            <div style="margin-right: 180px;">
              <div style="display: flex; justify-content: left; align-items: center">
                <div style="width: 80px;height: 0px;border: 1px solid #525596;"></div>
                <span style="margin-left: 20px">INTEGRATIONS</span>
              </div>
              <div style="margin-top: 20px; ">
                <p style="margin-top: 20px;color: #2F327D; font-size: 32px; ">What They Say?</p>
                <p style="margin-top: 20px;width: 550px;font-size: 20px;line-height: 150%;color: #696984;">Schoology has every tool your , student information systems (SIS), and education platforms.</p>
                <p>classroom needs and comes pre-integrated with more than 200+ tools</p>
                <p>classroom needs and comes pre-integrated with more than 200+ tools</p>
              </div>
              <div style="margin-top: 40px">
                <v-btn width="240px" height="50px" style="font-size: 18px; border: 2px #F48C06 solid" color="#F48C06" outlined class="rounded-pill">
                  See All Integrations
                </v-btn>
              </div>
              <br>
              <br>
            </div>
            <div  >
              <div style="display: flex; ">
                <div style="height: 300px; width: 300px; margin-top: -105px; ">
                  <v-img src="https://cdn.jsdelivr.net/gh/qiananran/myImage/img/MaskGroup.png"></v-img>
                </div>

                <div style="margin-left: -30px; height: 60px">
                  <v-btn
                      class="mx-2"
                      fab
                      dark
                      large
                      color="white"
                      height="60px"
                  >
                    <v-icon color="#1EA4CE">
                      mdi-chevron-right
                    </v-icon>
                  </v-btn>
                </div>
              </div>
              <div style="margin-left: 50px; margin-top: -50px">
                <v-card
                  width="450px"
                  height="230px"
                  class=""
                  style="background: rgba(255, 255, 255, 0.8);box-shadow: 2px 4px 60px rgba(41, 44, 124, 0.1);border-radius: 20px;padding: 20px;backdrop-filter: blur(10px);"
                >
                  <v-card-text>
                    "Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. Skilline is exactly what our business has been lacking."
                  </v-card-text>
                  <v-card-text>Gloria Rose</v-card-text>
                  <v-rating
                      :value="4"
                      color="amber"
                      dense
                      half-increments
                      readonly
                      size="14"
                  ></v-rating>
                </v-card>
              </div>
              <br>
            </div>
          </div>
        </v-col>

        <v-col cols="12" style="margin-top: 80px; margin-bottom: 100px">
          <div style=" justify-content: center; align-items: center;">
            <div >
              <div style="text-align: center">
                <h2 style="color: #2F327D;">Lastest News and Resources</h2>
                <p style="color: #696984;line-height: 180%; margin-top: 20px">See the developments that have occurred to Skillines in the world</p>
              </div>
              <div style="display: flex; justify-content: center; align-items: center;">
                <v-card
                    class="m-auto rounded-lg"
                    max-width="450"
                    elevation="0"

                >
                  <template slot="progress">
                    <v-progress-linear
                        color="deep-purple"
                        height="10"
                        indeterminate
                    ></v-progress-linear>
                  </template>

                  <v-img
                      height="250"
                      src="https://cdn.jsdelivr.net/gh/qiananran/myImage/img/pexels-photo-3862130.jpeg"
                  ></v-img>

                  <v-card-text class="mt-5">
                    <v-row
                        align="center"
                        class="mx-0"
                    >
                      <v-btn class="rounded-pill orange lighten-2" width="100px">NEWS</v-btn>
                    </v-row>

                    <div class="mt-9">Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</div>
                  </v-card-text>

                  <v-divider class="mx-4"></v-divider>

                  <v-card-title>Tonight's availability</v-card-title>

                  <v-card-text>
                    Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...
                  </v-card-text>

                  <v-card-actions>
                    <v-btn
                        color="deep-purple lighten-2"
                        text
                    >
                      Learn more
                    </v-btn>
                  </v-card-actions>
                </v-card>
                <div style="margin-left: 120px">
                  <div >
                    <v-card
                        class="mt-5"
                        max-height="200px"
                        style="display: flex; background: #FFFFFF;box-shadow: 2px 4px 60px rgba(41, 44, 124, 0.1); border-radius: 20px"
                    >
                      <div>
                        <v-img
                            height="200"
                            width="200"
                            src="https://cdn.jsdelivr.net/gh/qiananran/myImage/img/pexels-photo-1326947.jpeg"
                        ></v-img>
                      </div>

                      <div style="width: 500px">
                        <v-card-title>Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand</v-card-title>
                        <v-card-text>
                          Class Technologies Inc., the company that created Class,...
                        </v-card-text>
                      </div>
                    </v-card>
                  </div>
                  <div>
                    <v-card
                        class="mt-5"
                        max-height="200px"
                        style="display: flex; background: #FFFFFF;box-shadow: 2px 4px 60px rgba(41, 44, 124, 0.1); border-radius: 20px"
                    >
                      <div>
                        <v-img
                            height="200"
                            width="200"
                            src="https://cdn.jsdelivr.net/gh/qiananran/myImage/img/pexels-photo-1329571.jpeg"
                        ></v-img>
                      </div>

                      <div style="width: 500px">
                        <v-card-title>Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand</v-card-title>
                        <v-card-text>
                          Class Technologies Inc., the company that created Class,...
                        </v-card-text>
                      </div>
                    </v-card>
                  </div>
                  <div>
                    <v-card
                        class="mt-5"
                        max-height="200px"
                        style="display: flex; background: #FFFFFF;box-shadow: 2px 4px 60px rgba(41, 44, 124, 0.1); border-radius: 20px"
                    >
                      <div>
                        <v-img
                            height="200"
                            width="200"
                            src="https://cdn.jsdelivr.net/gh/qiananran/myImage/img/pexels-photo-9572561.jpeg"
                        ></v-img>
                      </div>

                      <div style="width: 500px">
                        <v-card-title>Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand</v-card-title>
                        <v-card-text>
                          Class Technologies Inc., the company that created Class,...
                        </v-card-text>
                      </div>


                    </v-card>
                  </div>
                </div>
                <v-card></v-card>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>

  </v-container>
</template>

<script>
export default {
  name: "MyBody",
  data(){
    return{
      manufactorlogo: [
          'https://cdn.jsdelivr.net/gh/qiananran/myImage/img/airbnb1.png',
          'https://cdn.jsdelivr.net/gh/qiananran/myImage/img/amazon-21.png',
          'https://cdn.jsdelivr.net/gh/qiananran/myImage/img/facebook.png',
          'https://cdn.jsdelivr.net/gh/qiananran/myImage/img/google-20151.png',
          'https://cdn.jsdelivr.net/gh/qiananran/myImage/img/grab-logo.png',
          'https://cdn.jsdelivr.net/gh/qiananran/myImage/img/netflix-31.png',
      ]
    }
  }
}
</script>

<style scoped>


.container{
  padding: 0px;
}
.my_header{
  background: url("https://cdn.jsdelivr.net/gh/qiananran/myImage/img/header1.png") no-repeat;
  background-size: 100%;
  height: 800px;
  width: 100%;
  padding: 0px;
}
.v-btn {
  text-transform: none;
}
.my_sub{
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  user-select: none; /* Chrome and Opera */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */



}
.my_subtitle{
  margin-top: 40px;
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

.my_text{
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 160%;
  /* identical to box height, or 45px */
  letter-spacing: 0.02em;
  color: #696984;
}

.card_text{
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 45px;
  text-align: center;

  color: #2F327D;
}
</style>