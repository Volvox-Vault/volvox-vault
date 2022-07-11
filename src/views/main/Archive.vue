<template>
  <MainLayout>

    <ArchivePost sort="item.type === 'interview'"/>

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
  },
  metaInfo: {
    // title will be injected into parent titleTemplate
    title: "Archive",
  },
};
</script>
