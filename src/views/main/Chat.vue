<template>
  <MainLayout>

    <Chat></Chat>

  </MainLayout>
</template>


<script>
import MainLayout from '../../layouts/MainLayout'
import Chat from '../../components/chat'

export default {
  name: 'Chat',
  components: {
    MainLayout,
    Chat
  }
  
};
</script>
