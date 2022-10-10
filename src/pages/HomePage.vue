<template>
  <v-layout row wrap>
    <v-flex sm6 xs12 md6 lg4>
      <v-card class="ma-5" width="300" height="80" color="#E3E3E3">
        <v-card-text class="text-center pa-2">
          <div class="text-h7 card-text">JUMLAH SURVEI</div>
          <p class="text-h5 text--primary">2.500</p>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex sm6 xs12 md6 lg4>
      <v-card class="ma-5" width="300" height="80" color="#E3E3E3">
        <v-card-text class="text-center pa-2">
          <div class="text-h7">JUMLAH KATEGORI</div>
          <p class="text-h5 text--primary">2.500</p>
        </v-card-text>
      </v-card>
    </v-flex>
    <div class="dark ml-5">
      <canvas id="Survei" width="450" height="300"></canvas>
    </div>
    <div class="dark ml-5">
      <canvas id="myChart2" width="450" height="300"></canvas>
    </div>
  </v-layout>
</template>
<script>
import Chart from "chart.js/auto";

export default {
  name: "HomePage",
  mounted() {
    const ctx = document.getElementById("Survei");
    const myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: [
          "Mahasiswa",
          "Wisudawan",
          "Pegawai",
          "Mitra",
          "Orang Tua",
          "CSI",
        ],
        datasets: [
          {
            label: "JUMLAH SURVEI PER RESPONDEN",
            data: [12, 10, 3, 5, 2, 3],
            backgroundColor: [
              "rgba(255, 99, 132, 2)",
              "rgba(54, 162, 235, 2)",
              "rgba(255, 206, 86, 2)",
              "rgba(75, 192, 192, 2)",
              "rgba(153, 102, 255,2)",
              "rgba(255, 159, 64, 2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  },
};
</script>
