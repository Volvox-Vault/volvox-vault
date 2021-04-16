<template>
  <MainLayout>

    <VolvoxColony></VolvoxColony>
    
  </MainLayout>
</template>


<script>
import MainLayout from '../../layouts/MainLayout'
import VolvoxColony from '../../components/userColony.vue'

export default {
  name: 'Colony',
  components: {
    MainLayout,
    VolvoxColony
  }
};
</script>



