<template>
  <div id="container">
    <v-row>
      <!-- telkom university logo -->
      <v-col md="6" cols="12">
        <div class="d-flex flex-column justify-center">
          <div>
            <v-img
              :src="require('../assets/logo-telkom.png')"
              contain
              widht="409"
              height="370"
            />
          </div>
          <label class="text-center FontTitle" style="color: #b6252a">
            SURVEY<span class="FontTitle" style="color: #55565b">-BOARD</span>
          </label>
        </div>
      </v-col>
      <!-- ! telkon university logo -->

      <!-- form login -->
      <v-col md="6" cols="12">
        <v-card color="#ABABAB" class="py-16">
          <header class="text-center">
            <h1 class="text-center FontHeader">
              HELLO ! WELCOME TO <br />
              SURVEY DASHBOARD
            </h1>
            <p class="FontSubHeader">Silahkan Login dengan Akun SSO Anda</p>
          </header>

          <!-- form -->
          <form class="text-center px-10" @submit.prevent="handleLogin">
            <v-text-field
              v-model="form.username"
              label="Username"
              prepend-icon="mdi-account"
            ></v-text-field>

            <v-text-field
              v-model="form.password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show1 ? 'text' : 'password'"
              label="Password"
              prepend-icon="mdi-lock"
              @click:append="show1 = !show1"
            ></v-text-field>

            <v-btn
              class="FontButton px-8 py-3 my-3 white--text"
              color="#B6252A"
              type="submit"
              :loading="loading"
              >Login</v-btn
            >
          </form>
          <!-- ! form -->
        </v-card>
      </v-col>
      <!-- ! form login -->
    </v-row>
  </div>
</template>
<script>
import { HTTP } from "../plugins/axios";

export default {
  name: "Login",
  data() {
    return {
      show1: false,
      show2: true,
      show3: false,
      show4: false,
      form: { username: null, password: null },
      loading: false,
    };
  },
  methods: {
    async handleLogin() {
      this.loading = true;
      try {
        const http = HTTP("http://localhost:3000/", {
          "Content-Type": "application/json",
        });
        const respons = await http.post("user/login/", this.form);
        localStorage.token = respons.data.data.token;
        localStorage.isAdmin = respons.data.data.isAdmin;
        this.$router.push({
          path: "/home",
        });
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Germania+One&family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Roboto:ital,wght@0,500;0,700;1,900&display=swap");
.FontTitle {
  font-family: "Germania One";
  font-size: 70px;
  line-height: 30px;
  text-align: center;
  color: black;
}

.FontHeader {
  font-family: "Germania One";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  text-align: center;
  color: black;
}
.FontSubHeader {
  font-family: "Battambang";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  text-align: center;
  color: black;
}
.FontButton {
  font-family: "Battambang";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 23px;
  text-align: center;
  color: #b6252a;
  border-radius: 7px;
}

#container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
