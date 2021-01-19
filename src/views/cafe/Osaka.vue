<template>
  <CafeLayout class="cafePage">
      <p class="city-time"><span>osaka</span>—<span id="osaka-time">time</span></p>
  </CafeLayout>
</template>


<script>
import CafeLayout from '../../layouts/cafe/CafeLayout.vue'

export default {
  name: 'CafeOsaka',
  components: {
    CafeLayout
  }
};
</script>