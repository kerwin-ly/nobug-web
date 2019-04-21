<template>
  <div id="app" v-loading="loading" element-loading-text="拼命加载中" element-loading-background="rgba(255,255,255,0.1)">
    <router-view :style="{height:bgheight+'px'}"></router-view>
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
      bgheight: 0
    };
  },
  mounted() {
    this.bgheight = document.documentElement.clientHeight;
  },
  computed: {
    ...mapState(['loading'])
  }
};
</script>
