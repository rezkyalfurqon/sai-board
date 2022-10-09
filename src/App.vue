<template>
  <div>
    <PrivateLayout>
      <div>
        <router-view></router-view>
      </div>
    </PrivateLayout>
  </div>
</template>
<script>
import { PrivateLayout } from "./layout";

export default {
  name: "App",
  components: { PrivateLayout },
};
</script>
