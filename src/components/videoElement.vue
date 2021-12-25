  <template>
      <div class="video-player">
        <video class="video" ref="video" poster="https://cdn.glitch.me/31c7994a-ff45-4592-b835-14262460c504/alex%20pond.jpg?v=1640405702449" controls>
          <source src="@/assets/pond/alexnunesbedholidaypicnic_2.mp4" type="video/mp4">
        </video>
      </div>
    </template>
    
<script>
export default {
  name: "VideoPlayer",
   computed: {
    videoElement () {
      return this.$refs.video;
    }, 
  }
}
</script>