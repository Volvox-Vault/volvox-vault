<template>
  <MainLayout>

    <BulletinPost></BulletinPost>

  </MainLayout>
</template>


<script>
import MainLayout from '../../layouts/MainLayout'
import BulletinPost from '../../components/bulletinPost'

export default {
  name: 'Bulletin',
  components: {
    MainLayout,
    BulletinPost
  }
  
};
</script>
