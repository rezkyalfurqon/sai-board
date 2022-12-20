<template>
  <v-container>
    <div>
      <p class="d-flex align-start mb-6 myFontTitle" style="color: #b6252a">
        SAI<span class="myFontTitle" style="color: #55565b">-BOARD</span>
      </p>
      <br />
    </div>
    <p class="myFontSubtitle text-h7 text--primary text-bold">
      Pastikan Data sudah sesuai dengan Template yang disediakan.
    </p>
    <br />
    <v-form>
      <v-row>
        <v-col cols="2">
          <div class="myFontSubtitle text-h7 text--primary">
            Download Template
          </div>
        </v-col>
        <v-col>
          <v-btn class="mr-2" color="#D6E4E5">Edom Dosen</v-btn>
          <v-btn color="#D6E4E5">Edom Mata Kuliah</v-btn>
        </v-col>
      </v-row>

      <!-- tahun edom -->
      <v-row>
        <v-col cols="2">
          <div class="myFontSubtitle text-h7 text--primary">Tahun Edom</div>
        </v-col>
        <v-col cols="4">
          <v-text-field
            label="Ex. (2021/2022 - Ganjil)"
            outlined
            dense
            class="mb-0 red"
          ></v-text-field>
          <label class="mt-0 yellow">Contoh : 2021/2022 - Ganjil</label>
        </v-col>
      </v-row>

      <!-- choose file edom -->
      <v-row>
        <v-col cols="2">
          <div class="myFontSubtitle text-h7 text--primary">
            Choose File Edom Dosen
          </div>
        </v-col>
        <v-col cols="3">
          <input type="file" filled />
        </v-col>
      </v-row>
      <!--  choose file-->
      <v-row>
        <v-col cols="2">
          <div class="myFontSubtitle text-h7 text--primary">
            Choose File Edom Mata Kuliah
          </div>
        </v-col>
        <v-col cols="3">
          <input type="file" filled />
        </v-col>
      </v-row>

      <div class="d-flex mt-10">
        <v-col cols="5"></v-col>
        <v-btn
          href="/edom"
          class="myFontButton px-8 white--text"
          color="#B6252A"
          >Submit</v-btn
        >
      </div>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: "InputEdom",
  // data() {
  //   return {
  //     items: [
  //       "2021/2022 - Ganjil",
  //       "2021/2022 - Genap",
  //       "2022/2023 - Ganjil",
  //       "2022/2023 - Genap",
  //     ],
  //   };
  // },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Germania+One&family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Roboto:ital,wght@0,500;0,700;1,900&display=swap");
.myFontTitle {
  font-family: "Germania One";
  font-size: 40px;
  line-height: 50px;
  text-align: center;
  color: black;
}

.myFontSubtitle {
  /* font-family: "Battambang"; */
  font-style: normal;
  font-weight: 400;

  line-height: 30.71px;
  text-align: left;
  color: black;
}
.myFontButton {
  /* font-family: "Battambang"; */
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 23px;
  text-align: center;
  color: #b6252a;
  border-radius: 7px;
}
</style>
