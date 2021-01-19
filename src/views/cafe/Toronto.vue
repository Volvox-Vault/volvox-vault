<template>
  <CafeLayout class="cafePage">
    <div>
    <p class="city-time"><span>toronto</span>—<span id="toronto-time">time</span></p>
    </div>
  </CafeLayout>
</template>


<script>
import CafeLayout from '../../layouts/cafe/CafeLayout.vue'

export default {
  name: 'CafeToronto',
  components: {
    CafeLayout
  }
};
</script>