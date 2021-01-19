<template>
  <CafeLayout class="cafePage">
      <p class="city-time"><span>gothenburg</span>—<span id="gothenburg-time">time</span></p>
  </CafeLayout>
</template>


<script>
import CafeLayout from '../../layouts/cafe/CafeLayout.vue'

export default {
  name: 'CafeGothenburg',
  components: {
    CafeLayout
  }
};
</script>