<template>
  <!-- App.vue -->

  <v-app>
    <!-- TOPBAR NAVIGATION -->
    <v-app-bar app color="#B91432" :style="{ 'z-index': '100' }">
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        color="white"
      ></v-app-bar-nav-icon>
      <div class="d-flex align-center" @click="directHome">
        <LabelComponent
          label="SURVEY BOARD"
          class="ml-2"
          fontFamily="Germania One"
          fontSize="25px"
        />
      </div>

      <v-spacer></v-spacer>
      <v-btn small color="#222d32" class="white--text" @click="directLogout">
        Logout
        <span class="mdi mdi-logout-variant"></span
      ></v-btn>
    </v-app-bar>
    <!-- TOPBAR NAVIGATION -->

    <!-- SIDEBAR NAVIGATION -->
    <v-navigation-drawer
      v-model="drawer"
      app
      color="#222d32"
      :style="{ 'z-index': '100' }"
    >
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="100">
            <img src="../assets/img1.png" alt="" />
          </v-avatar>
          <p class="white--text subheading mt-4 text-center text-nav">
            Username
          </p>
        </v-flex>
      </v-layout>

      <v-list>
        <v-list-item @click="directHome">
          <div>
            <v-icon color="white" class="mr-2" size="20">mdi-home</v-icon>
            <label class="text-title white--text text-nav">Home</label>
          </div>
        </v-list-item>

        <v-list-group color="white">
          <template v-slot:activator>
            <v-icon color="white" class="mr-2" size="20"
              >mdi-book-multiple</v-icon
            >
            <label class="text-title white--text text-nav"
              >Survei Kepuasan Dosen</label
            >
          </template>
          <template #appendIcon>
            <v-icon color="white">mdi-chevron-down</v-icon>
          </template>
          <v-list-item
            v-for="([title, icon, routeName], i) in edom"
            :key="i"
            link
          >
            <div @click="redirect(routeName)" class="d-flex menu">
              <v-list-item-icon>
                <v-icon v-text="icon" color="white" size="18"></v-icon>
              </v-list-item-icon>
              <v-list-item-title
                v-text="title"
                class="white--text text-nav"
              ></v-list-item-title>
            </div>
          </v-list-item>
        </v-list-group>

        <v-list-group>
          <template v-slot:activator>
            <v-icon color="white" class="mr-2" size="20">mdi-library</v-icon>
            <label class="text-title white--text text-nav"
              >Survei Kepuasan</label
            >
          </template>
          <template #appendIcon>
            <v-icon color="white">mdi-chevron-down</v-icon>
          </template>
          <v-list-item
            v-for="([title, icon, routeName], i) in kepuasan"
            :key="i"
            link
          >
            <div class="d-flex menu">
              <v-list-item-icon>
                <v-icon
                  v-text="icon"
                  color="white"
                  size="18"
                  class="mr-0"
                ></v-icon>
              </v-list-item-icon>
              <v-list-item-title
                v-text="title"
                class="white--text text-nav"
              ></v-list-item-title>
            </div>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <!-- SIDEBAR NAVIGATION -->

    <!-- Sizes your content based upon application components -->
    <v-main>
      <v-container>
        <div>
          <slot />
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import { LabelComponent } from "@/components";

export default {
  name: "PrivateLayout",
  props: {
    title: { type: String, default: "" },
  },
  components: { LabelComponent },
  data: () => ({
    drawer: true,
    edom: [
      ["EDoM", "mdi-pencil-circle-outline", "edom"],
      ["EDPoM", "mdi-pencil-circle-outline", "edpom"],
      ["EDWoM", "mdi-pencil-circle-outline", "edwom"],
    ],
    kepuasan: [
      ["Create", "mdi-plus-outline"],
      ["Read", "mdi-file-outline"],
      ["Update", "mdi-update"],
      ["Delete", "mdi-delete"],
    ],
  }),
  methods: {
    directHome() {
      this.$router.push({ name: "HomePage" });
    },
    redirect(routeName) {
      this.$router.push({ name: routeName });
    },
    directLogout() {
      this.$router.replace({ name: "Login" });
    },
  },
};
</script>
<style>
.text-title {
  position: relative;
}
.menu {
  margin-left: 0px;
}
.text-nav {
  font-size: 13.5px;
  font-weight: 500;
}
</style>
