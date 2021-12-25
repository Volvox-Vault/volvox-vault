<template>
  <div class="video-wrap">
    <video  poster="https://cdn.glitch.me/31c7994a-ff45-4592-b835-14262460c504/alex%20pond.jpg?v=1640405702449"  controls="true">
      <source :src="mp4" type="video/mp4">
    </video>
  </div>
</template>
<script>
export default {
  name: "Video",
  props: {
    mp4: String,
  },
};
</script>