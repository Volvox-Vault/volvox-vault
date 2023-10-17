<template>
  <MainLayout>

    <DiaryEntries></DiaryEntries>

  </MainLayout>
</template>


<script>
import MainLayout from '../../layouts/MainLayout'
import DiaryEntries from '../../components/diaryEntries'

export default {
  name: 'DiaryEntries',
  components: {
    MainLayout,
    DiaryEntries
  }
  
};
</script>
