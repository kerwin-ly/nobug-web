<template>
  <div id="app">
    <router-view class="route-container" :style="{height: clientHeight + 'px'}"></router-view>
  </div>
</template>
<style lang="scss" scoped>
#app {
  min-width: 770px;
}
</style>
<script>
import { mapState } from 'vuex';

export default {
  name: 'app',
  data() {
    return {
      clientHeight: 0
    };
  },
  mounted() {
    this.clientHeight = document.documentElement.clientHeight;
  },
  computed: {
    ...mapState(['loading'])
  }
};
</script>
