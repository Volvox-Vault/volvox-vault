<template>
  <MainLayout>

    <ArchivePost></ArchivePost>

  </MainLayout>
</template>


<script>
import MainLayout from '../../layouts/MainLayout'
import ArchivePost from '../../components/archivePost'

export default {
  name: 'Archive',
  components: {
    MainLayout,
    ArchivePost
  }
};
</script>
