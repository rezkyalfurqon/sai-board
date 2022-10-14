<template>
  <div>
    <div class="pa-3 d-flex">
      <v-col cols="2">
        <v-select
          :items="tahunSelect"
          :menu-props="{ top: false, offsetY: true }"
          label="Tahun"
        ></v-select>
      </v-col>
      <v-col cols="2">
        <v-select
          :items="fakultasSelect"
          :menu-props="{ top: false, offsetY: true }"
          label="Fakultas"
        ></v-select>
      </v-col>
      <v-col cols="2">
        <v-select
          :items="prodiSelect"
          :menu-props="{ top: false, offsetY: true }"
          label="Prodi"
        ></v-select>
      </v-col>
    </div>
    <div class="d-flex">
      <v-card class="ma-5" width="300" height="80" color="#E3E3E3">
        <v-card-text class="text-center pa-2">
          <div class="text-h7 card-text">JUMLAH SURVEI</div>
          <p class="text-h5 text--primary">2.500</p>
        </v-card-text>
      </v-card>
      <v-card class="ma-5" width="300" height="80" color="#E3E3E3">
        <v-card-text class="text-center pa-2">
          <div class="text-h7">JUMLAH KATEGORI</div>
          <p class="text-h5 text--primary">2.500</p>
        </v-card-text>
      </v-card>
    </div>
    <!-- Chart Survei -->
    <div class="d-flex justify-center mt-5">
      <div class="text-center chart">
        <apexchart
          width="100%"
          height="100%"
          type="bar"
          :options="options"
          :series="series"
        >
          <h4>JUMLAH SURVEI PER RESPONDEN</h4>
        </apexchart>
      </div>
      <div class="text-center chart">
        <h4>JUMLAH SURVEI PER PERIODE</h4>
        <apexchart
          width="100%"
          height="100%"
          type="bar"
          :options="options"
          :series="series2"
        >
        </apexchart>
      </div>
    </div>

    <!-- Button Button -->
    <div
      class="mt-10 text-decoration-underline d-flex flex-column justifiy-space-between"
    >
      Download as :
    </div>
    <div class="mt-2 d-flex">
      <div>
        <v-btn depressed class="mx-2" color="error" @click="generatePDF">
          PDF
        </v-btn>
        <v-btn depressed class="mx-2" color="error"> Excel </v-btn>
        <v-btn depressed class="mx-2" color="error"> CSV </v-btn>
      </div>
      <div>
        <v-btn depressed class="mx-2 button" color="#1AC635"> Copy </v-btn>
        <v-btn depressed class="mx-2" color="#A19E9E"> Print </v-btn>
      </div>
    </div>
    <!-- TABEL SURVEI -->
    <v-card class="mt-2">
      <v-card-title>
        TABEL SURVEI TELKOM UNIVERSITY
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="tableHome"
        :search="search"
      ></v-data-table>
    </v-card>
  </div>
</template>

<script>
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import ExportExcelSheetVueJs from "export-excel-sheet-vue-js";
import Vue from "vue";

Vue.use(ExportExcelSheetVueJs);

export default {
  name: "ExecutiveSummary",

  data() {
    return {
      heading: "LAPORAN SURVEI EVALUASI DOSEN OLEH MAHASISWA",
      moreText: [
        "Tabel menampilkan rata-rata skor kepuasan untuk setiap Program Studi di Universitas Telkom pada survei EDOM",
      ],
      options: {
        chart: {
          type: "bar",
        },
      },
      series: [
        {
          data: [
            {
              x: "Mahasiswa",
              y: 20,
              fillColor: "#ED7D31",
            },
            {
              x: "Wisudawan",
              y: 18,
              fillColor: "#EDCF31",
            },
            {
              x: "Pegawai",
              y: 7,
              fillColor: "#023915",
            },
            {
              x: "Mitra",
              y: 10,
              fillColor: "#AFEFB2",
            },
            {
              x: "Orang Tua",
              y: 3,
              fillColor: "#43A8F1",
            },
            {
              x: "CSI",
              y: 5,
              fillColor: "#EE2424",
            },
          ],
        },
      ],
      series2: [
        {
          data: [
            {
              x: "19/20 Ganjil",
              y: 20,
              fillColor: "#ED7D31",
            },
            {
              x: "19/20 Genap",
              y: 18,
              fillColor: "#EDCF31",
            },
            {
              x: "20/21 Ganjil",
              y: 15,
              fillColor: "#023915",
            },
            {
              x: "20/21 Genap",
              y: 27,
              fillColor: "#AFEFB2",
            },
            {
              x: "21/22 Ganjil",
              y: 15,
              fillColor: "#43A8F1",
            },
            {
              x: "21/22 Ganjil",
              y: 20,
              fillColor: "#EE2424",
            },
          ],
        },
      ],
      search: "",
      headers: [
        { text: "Nama Survei", value: "namaSurvei" },
        { text: "Link Laporan", value: "linkLaporan", sortable: false },
        { text: "Action", value: "action", sortable: false },
      ],
      tableHome: [
        {
          namaSurvei: "Edom Ganjil 2021-2011",
          linkLaporan: "Link",
          action: "View",
        },
        {
          namaSurvei: "CSI 2021 - Unit",
          linkLaporan: "Link",
          action: "View",
        },
        {
          namaSurvei: "Kepuasan Orang Tua",
          linkLaporan: "Link",
          action: "View",
        },
        {
          namaSurvei: "Kepuasan Wisudawan",
          linkLaporan: "Link",
          action: "View",
        },
        {
          namaSurvei: "Kepuasan Mhs Genap 2021/2022",
          linkLaporan: "abc",
          action: "View",
        },
        {
          namaSurvei: "Visi Misi - Mahasiswa",
          linkLaporan: "Link",
          action: "View",
        },
        {
          namaSurvei: "EDOM Medio Genap 2021/2022",
          linkLaporan: "Link",
          action: "View",
        },
        {
          namaSurvei: "EDOM Genap 2021/2022",
          linkLaporan: "Link",
          action: "View",
        },
      ],
      tahunSelect: [
        "2019/2020 - Genap",
        "2020/2021 - Ganjil",
        "2020/2021 - Genap",
        "2021/2022 - Ganjil",
      ],
      fakultasSelect: [
        "Fakultas Teknik Elektro",
        "Fakultas Teknik Informatika",
        "Fakultas Teknik Industri",
        "Fakultas Ekonomi dan Bisnis",
        "Fakultas Komunikasi dan Bisnis",
        "Fakultas Teknik Industri Kreatif",
        "Fakultas Teknik Ilmu Terapan",
      ],
      prodiSelect: ["Foo", "Bar", "Fizz", "Buzz"],
    };
  },
  // GENERATOR PDF
  methods: {
    generatePDF() {
      const columns = [
        { title: "Nama Survei", dataKey: "namaSurvei" },
        { title: "Link Laporan", dataKey: "linkLaporan" },
      ];
      const doc = new jsPDF({
        orientation: "portrait",
        unit: "in",
        format: "letter",
      });
      doc.setFontSize(16).text(this.heading, 0.5, 1.0);
      // create a line under heading
      doc.setLineWidth(0.01).line(0.5, 1.1, 8.0, 1.1);
      doc
        .setFont("helvetica")
        .setFontSize(11)
        .text(this.moreText, 0.5, 1.5, { align: "left", maxWidth: "7.5" });
      doc.autoTable({
        columns,
        body: this.tableHome,
        margin: { left: 0.5, top: 1.75, bottom: 1.25 },
      });
      doc.save(`Tabel EDoM.pdf`);
    },
  },
  // GENERATOR PDF
};
</script>

<style>
.chart {
  width: 800px;
  height: 400px;
}
</style>
