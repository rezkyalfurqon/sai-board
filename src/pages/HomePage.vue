<template>
  <div>
    <!-- Card  -->
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
    <!-- Card  -->

    <!-- Chart Survei -->
    <div class="d-flex justify-center mt-5">
      <div class="text-center chart">
        <h4>JUMLAH SURVEI PER RESPONDEN</h4>
        <apexchart
          width="100%"
          height="100%"
          type="bar"
          :options="options"
          :series="series"
        >
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
    <!-- Chart Survei -->

    <!-- TABEL SURVEI -->
    <v-card class="mt-10">
      <v-card-title>
        <div class="d-flex flex-column justifiy-space-between">
          TABEL SURVEI TELKOM UNIVERSITY
          <div class="mt-2 d-flex">
            <!-- Add Survei -->
            <v-dialog v-model="dialog" persistent max-width="800px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="primary" outlined small v-bind="attrs" v-on="on">
                  NEW SURVEY
                  <v-icon right dark> mdi-plus-circle-outline </v-icon>
                </v-btn>
              </template>
              <v-card>
                <v-card-title class="primary white--text">
                  <span class="text-h5"
                    >Add New Survey SAI - Telkom University</span
                  >
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <!-- <div class="myFontSubtitle text-h7 text--primary">
                        Nama Survei<span class="red--text">*</span>
                      </div>
                      <v-col cols="12">
                        <v-text-field
                          label="Nama Survei"
                          dense
                          hide-details
                          solo
                        ></v-text-field>
                        <small class="red--text"
                          >Contoh : Edom / CSI / Kepuasan Orang Tua</small
                        >
                      </v-col>
                      <div class="myFontSubtitle text-h7 text--primary">
                        Tahun Survei <span class="red--text">*</span>
                      </div>
                      <v-col cols="12">
                        <v-text-field
                          label="Tahun"
                          dense
                          hide-details
                          solo
                        ></v-text-field>
                        <small class="red--text"
                          >Contoh : 2021/2022 - Ganjil</small
                        >
                      </v-col>
                      <div class="myFontSubtitle text-h7 text--primary">
                        Responden <span class="red--text">*</span>
                      </div>
                      <v-col cols="12">
                        <v-select
                          :items="responden"
                          label="Solo field"
                          dense
                          solo
                        ></v-select>
                      </v-col>
                      <div class="myFontSubtitle text-h7 text--primary">
                        Link Survei<span class="red--text">*</span>
                      </div>
                      <v-col cols="12">
                        <v-text-field
                          label="Link Survei"
                          dense
                          hide-details
                          solo
                        ></v-text-field>
                      </v-col> -->

                      <v-col cols="2">
                        <div class="myFontSubtitle text-h7 text--primary">
                          Nama Survei<span class="red--text">*</span>
                        </div>
                      </v-col>
                      <v-col cols="10">
                        <v-text-field
                          label="Nama Survei"
                          dense
                          hide-details
                          solo
                        ></v-text-field>
                        <small class="red--text"
                          >Contoh : Edom / CSI / Kepuasan Orang Tua</small
                        >
                      </v-col>
                      <v-col cols="2">
                        <div class="myFontSubtitle text-h7 text--primary">
                          Tahun Survei <span class="red--text">*</span>
                        </div>
                      </v-col>
                      <v-col cols="10">
                        <v-text-field
                          label="Tahun"
                          dense
                          hide-details
                          solo
                        ></v-text-field>
                        <small class="red--text"
                          >Contoh : 2021/2022 - Ganjil</small
                        >
                      </v-col>
                      <v-col cols="2">
                        <div class="myFontSubtitle text-h7 text--primary">
                          Responden <span class="red--text">*</span>
                        </div>
                      </v-col>
                      <v-col cols="10">
                        <v-select
                          :items="responden"
                          label="Responden"
                          dense
                          solo
                        ></v-select>
                      </v-col>
                      <v-col cols="2">
                        <div class="myFontSubtitle text-h7 text--primary">
                          Link Survei<span class="red--text">*</span>
                        </div>
                      </v-col>
                      <v-col cols="10">
                        <v-text-field
                          label="Link Survei"
                          dense
                          hide-details
                          solo
                        ></v-text-field>
                      </v-col>

                      <!-- <v-col cols="12">
                        <div class="black--text ma-0">Nama Survei</div>
                        <v-text-field
                          hide-details
                          label="Nama Survei*"
                          required
                          outlined
                          dense
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          hide-details
                          label="Tahun Survei*"
                          required
                          outlined
                          dense
                          solo
                        ></v-text-field>
                        <div class="red--text ma-0">
                          Contoh : 2021/2022 - Ganjil
                        </div>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          hide-details
                          label="Link Survei*"
                          required
                          outlined
                          dense
                        ></v-text-field>
                      </v-col> -->
                    </v-row>
                  </v-container>
                  <small class="red--text">*wajib di isi</small>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="error" @click="dialog = false"> Close </v-btn>
                  <v-btn color="primary" @click="dialog = false"> Save </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <!-- Add Survei -->
          </div>
        </div>
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table :headers="headers" :items="tableHome" :search="search">
        <template v-slot:top>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h6"
                >Apakah Yakin Akan Menghapus Item Ini?</v-card-title
              >
              <v-card-text>
                Tekan OK akan menghapus data secara permanent.
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete"
                  >Cancel</v-btn
                >
                <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                  >OK</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-dialog>
        </template>
        <template v-slot:[`item.actions`]="{ item }">
          <v-icon small class="mr-2" @click="viewItem(item)"> mdi-eye </v-icon>
          <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
        </template>
      </v-data-table>
    </v-card>
    <!-- TABEL SURVEI -->
  </div>
</template>

<script>
export default {
  name: "HomePage",

  data() {
    return {
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
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          text: "No",
          align: "start",
          sortable: false,
          value: "nomor",
        },
        { text: "Nama Survei", value: "namaSurvei" },
        { text: "Actions", value: "actions", sortable: false },
      ],
      tableHome: [],
      editedIndex: -1,
      editedItem: {
        nomor: "",
        namaSurvei: "",
        linkLaporan: null,
      },
      defaultItem: {
        nomor: "",
        namaSurvei: "",
        linkLaporan: null,
      },
      responden: ["Mahasiswa", "Wisudawan", "Pegawai", "Mitra", "Orang Tua"],
    };
  },

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Input Data" : "Edit Data";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.initialize();
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Input Data" : "Edit Data";
    },
  },

  methods: {
    initialize() {
      this.tableHome = [
        {
          nomor: 1,
          namaSurvei: "Edom 2021/2022 - Ganjil ",
          linkLaporan:
            "https://telkomuniversityofficial-my.sharepoint.com/:b:/r/personal/sai_365_telkomuniversity_ac_id/Documents/LAPORAN%20LAPORAN%20SAI%20DI%20WEB/SURVEI/EDOM/2021-2022/LAPORAN%20EDOM%20GANJIL%202021%202022.pdf?csf=1&web=1&e=L3x3V1",
        },
        {
          nomor: 2,
          namaSurvei: "CSI 2021 - Unit",
          linkLaporan:
            "https://drive.google.com/file/d/1C6752pV3yAmmUGWt_89g_YcoUdRXCmZq/view",
        },
        {
          nomor: 3,
          namaSurvei: "Kepuasan Orang Tua",
          linkLaporan:
            "https://drive.google.com/file/d/1C6752pV3yAmmUGWt_89g_YcoUdRXCmZq/view",
        },
        {
          nomor: 4,
          namaSurvei: "Kepuasan Wisudawan",
          linkLaporan:
            "https://drive.google.com/file/d/1C6752pV3yAmmUGWt_89g_YcoUdRXCmZq/view",
        },
        {
          nomor: 5,
          namaSurvei: "Kepuasan Mhs Genap 2021/2022",
          linkLaporan:
            "https://drive.google.com/file/d/1C6752pV3yAmmUGWt_89g_YcoUdRXCmZq/view",
        },
        {
          nomor: 6,
          namaSurvei: "Visi Misi - Mahasiswa",
          linkLaporan:
            "https://drive.google.com/file/d/1C6752pV3yAmmUGWt_89g_YcoUdRXCmZq/view",
        },
        {
          nomor: 7,
          namaSurvei: "EDOM Medio Genap 2021/2022",
          linkLaporan:
            "https://drive.google.com/file/d/1C6752pV3yAmmUGWt_89g_YcoUdRXCmZq/view",
        },
        {
          nomor: 8,
          namaSurvei: "EDOM Genap 2021/2022",
          linkLaporan:
            "https://telkomuniversityofficial-my.sharepoint.com/personal/sai_365_telkomuniversity_ac_id/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fsai%5F365%5Ftelkomuniversity%5Fac%5Fid%2FDocuments%2FLAPORAN%20LAPORAN%20SAI%20DI%20WEB%2FSURVEI%2FEDOM%2F2021%2D2022%2FLAPORAN%20EDOM%20GENAP%202021%202022%2Epdf&parent=%2Fpersonal%2Fsai%5F365%5Ftelkomuniversity%5Fac%5Fid%2FDocuments%2FLAPORAN%20LAPORAN%20SAI%20DI%20WEB%2FSURVEI%2FEDOM%2F2021%2D2022&ga=1",
        },
      ];
    },
    viewItem(item) {
      // this.editedIndex = this.tableHome.indexOf(item);
      // this.editedItem = Object.assign({}, item);
      // this.dialog = true;

      window.location.href = item.linkLaporan || "";
    },

    deleteItem(item) {
      this.editedIndex = this.tableHome.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.tableHome.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.tableHome[this.editedIndex], this.editedItem);
      } else {
        this.tableHome.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>

<style>
.chart {
  width: 600px;
  height: 400px;
}
</style>
