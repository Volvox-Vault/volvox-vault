<template>
  <MainLayout>
    
<div id="blocks-Submit">

  <!-- WEB SUB -->
  <div class="block-Submit">
    <p class="block-Submit-header">website</p>

      <ul>
        <li>Any kind of creative article / project can be submitted / pitched to the website.</li>
        <li>Volvox Vault prioritizes showcasing works with gentle, mindful, and organic vibrations.</li>
        <li>Articles, stories, paintings, photographs, films, generative art, etc.</li>
        <li>For visual submissions, include at least 200 word artist's statement.</li>
        <li>Email submissions / pitches to hello@volvoxvault.com</li>
      </ul>

  </div>

  <!-- MAG SUB -->
  <div class="block-Submit">
    <p class="block-Submit-header">magazine</p>

      <ul>
        <li>Deadline May 1st.</li>
        <li>The theme for this issue is Metamorphosis: An issue about transformation, growth, and change.</li>
        <li>You can create new art, or submit something you made in the past which fits the theme.</li>
        <li>Volvox Vault prioritizes showcasing works with gentle, mindful, and organic vibrations.</li>
        <li>For visual submissions, include at least 200 word artist's statement.</li>
        <li>Written pieces for the magazine may be 1-6 pages long.</li>
        <li><a>Subscribe to the newsletter for updates.</a></li>
        <li>Email submissions / pitches to hello@volvoxvault.com</li>
      </ul>

  </div>

  <!-- NEWS SUB -->
  <div class="block-Submit">
    <p class="block-Submit-header">newspaper</p>
    <p class="block-Submit-link">
      Fill out <a>this form</a> or email hello@volvoxvault.com<br>
      <a>Subscribe to Volvox Times</a>
    </p>
  </div>

  </div>

  <br><br><br>

  </MainLayout>
</template>


<script>
import MainLayout from '../../layouts/MainLayout'

export default {
  name: 'Submit',
  components: {
    MainLayout
  }
};
</script>

<style scoped>

/* BLOCKS */
#blocks-Submit {
  margin: 20px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-row-gap: 0;
  padding: 0;
  grid-gap: 10px;
}

.block-Submit {
  background-color: #f0f7de;
  color: grey;
  border: 1px solid yellowgreen;
    border-collapse: collapse;
  overflow: auto;
  max-height: 100vh;
  width: 100%;
  min-width: 500px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.8;
}


.block-Submit-header {
  font-size: 15pt;
  font-weight: bold;
  color: grey;

  background-color: Gainsboro;

  padding: 15px;

  border-bottom: 1px solid yellowgreen;
  align-items: center;
}

.block-Submit-link {
  font-size: 12pt;

  padding: 15px;

  align-items: center;
}

.block-Submit-link a, .block-shop a, li a {
  color: #9879a6;
  text-decoration: none;
}

.block-Submit-link a:hover, .block-shop a:hover, li a:hover {
  text-decoration: underline;
  cursor: pointer;
}

.block-Submit-shop {
  text-align: center;
  text-decoration: none;
  margin-top: 35%;
  margin-bottom: 45%;
  font-size: 10vh;
  max-height: 50vh;
}


.block-Submit-image {
  display: flex;
  justify-content: center;
  align-items: center;
}


@media(min-width: 800px) {
  .chat-block-Submit {
    grid-column-start: 3;
    grid-column-end: 5;
    grid-row-start: 2;
    grid-row-end: 2;
  }
}


@media(max-width: 800px) {
  #blocks-Submit {
    display: grid;
    grid-template-columns: 1fr;
  }
  .block-Submit-image {
      overflow: hidden;
  }

}

@media only screen and (max-device-width: 566px) {
  #blocks-Submit {
    display: grid;
    grid-template-columns: 1fr;
  }
  .block-Submit-image {
      overflow: hidden;
  }

}
</style>