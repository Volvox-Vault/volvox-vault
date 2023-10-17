<template>

    <DiaryEntries></DiaryEntries>

</template>


<script>
import MainLayout from '../../layouts/MainLayout'
import DiaryEntries from '../../components/diaryEntries'

export default {
  name: 'Diary',
  components: {
    MainLayout,
    DiaryEntries
  }
  
};
</script>
