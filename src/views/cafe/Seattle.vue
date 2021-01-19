<template>
  <CafeLayout class="cafePage">
      <p class="city-time"><span>seattle</span>—<span id="seattle-time">time</span></p>
  </CafeLayout>
</template>


<script>
import CafeLayout from '../../layouts/cafe/CafeLayout.vue'

export default {
  name: 'CafeSeattle',
  components: {
    CafeLayout
  }
};
</script>