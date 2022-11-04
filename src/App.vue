<template>
  <div>
    <component :is="layout">
      <div>
        <router-view></router-view>
      </div>
    </component>
  </div>
</template>
<script>
export default {
  name: "App",
  computed: {
    layout() {
      let pageLayout;
      if (this.$route && this.$route.meta.layout) {
        pageLayout = this.$route.meta.layout;
      }

      return pageLayout;
    },
  },
};
</script>
