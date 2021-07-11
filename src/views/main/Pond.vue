<template>
  <MainLayout>
    <div>
      <div>The Pond</div>
      <Chat />
    </div>
  </MainLayout>
</template>


<script>
import MainLayout from "../../layouts/MainLayout";
import Chat from "../../components/chat";

export default {
  name: "Chat",
  components: {
    MainLayout,
    Chat,
  },
};
</script>
