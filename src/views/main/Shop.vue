<template>
  <MainLayout>

    <ShopPost></ShopPost>

  </MainLayout>
</template>


<script>
import MainLayout from '../../layouts/MainLayout'
import ShopPost from '../../components/shopPost'

export default {
  name: 'Shop',
  components: {
    MainLayout,
    ShopPost
  }
  
};
</script>
