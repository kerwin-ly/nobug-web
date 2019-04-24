<template>
  <i class="fa fa-fw" :class="[prefix + name]"></i>
</template>
<script>
export default {
  name: 'icon',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      prefix: 'fa-'
    };
  }
};
</script>

