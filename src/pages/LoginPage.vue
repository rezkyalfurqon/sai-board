<template>
    <v-container>
        <v-row align="start" justify="center">
            <v-col md="4">
            <v-img
            :src="require('../assets/logo-telkom.png')"
            class="my-15"
            contain
            width="409"
            height="370"
            /> 
            <p class="justify-center myFontTitle" style="color:#B6252A;">SAI<span class="myFontTitle" style="color:#55565B;">-BOARD</span></p>
            </v-col>
            <v-col  md="4" class="my-10">
            <v-card  color="#ABABAE" min-widht="380" min-height="480" >
            <v-card-text align="center" class="mx-auto my-12" max-width="374" >
                        <br><br><br>
                        <h1 class="text-center myFontHeader">HELLO ! WELCOME TO <br> SAI DASHBOARD</h1>
                        <br>
                        <p class="myFontSubtitle">Silahkan Login dengan Akun SSO Anda</p>
                            <v-row >
                                <v-col >
                                    <v-form>
                                    <v-text-field  label="Username" prepend-icon="mdi-account"></v-text-field>
                                    <v-text-field label="Password" :type="ShowPassword ? 'text' : 'password'" 
                                    prepend-icon="mdi-lock"  ></v-text-field>
                                    <v-btn class="myFontButton" color="error">Login</v-btn>
                                </v-form>
                                </v-col>
                            </v-row>
                     </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<style>

@import url('https://fonts.googleapis.com/css?family=Poppins');
@import url('https://fonts.googleapis.com/css?family=Roboto');
@font-face{
    font-family: "Germania One";
    src: local("Germania One"),
    url(../assets/GermaniaOne-Regular.ttf);
}
.myFontTitle{
    font-family: 'Germania One';
    font-size: 70px;
    line-height: 30px;
    text-align: center;
    color:black;
}
    .myFontHeader{
        font-family: 'Germania One';
        font-style: bold;
        font-size: 30px;
        font-weight: 400;
        line-height: 30px;
        text-align: center;
        color:black;
    }
    .myFontSubtitle{
        font-family: 'Battambang';
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 23px;
        text-align: center;
        color:black;
    }
    .myFontButton{
        font-family: 'Battambang';
        font-style: normal;
        font-weight: 700;
        font-size: 13px;
        line-height: 23px;
        text-align: center;
        color:#B6252A;
        border-radius: 7px;
    }
   
</style>

<script>
    export default{
        name:'LoginPage',
        data(){
            return{
                ShowPassword: false
            }
        }
    };

</script>
