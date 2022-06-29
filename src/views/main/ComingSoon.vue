<template>
  <MainLayout>
    <p style="text-align: center; max-width: 450px; margin: 40px auto;padding: 50px; background: #fbfdf7; border-radius: 100px; color: #212121;">
      <b>This column is coming soon.</b><br><br>
      
      We are seeking 1-2 contributers per month.<br>
      As a small community effort, we offer...<br> 
      $50 for pieces over 1000 words<br> 
      $30 for pieces between 500-999 words<br> 
      $20 for mini pieces between 300-500 words<br> 
      Email us about pricing for visual focused pieces.
      <br><br>
  
      Got an idea? Send your pitch to hello@volvoxvault.com (email change coming soon)
      <br><br>
      Want to support us so we can pay our contributors?
      <br>
<a href="https://patreon.com/volvoxvault">Join our Patreon</a>
      or email us about buying ad space.
    </p>


  </MainLayout>
</template>


<script>
import MainLayout from "../../layouts/MainLayout";

export default {
  name: "ComingSoon",
  components: {
    MainLayout,
  },
  metaInfo: {
    // title will be injected into parent titleTemplate
    title: "Coming Soon",
  },
};
</script>


<style scoped>

</style>