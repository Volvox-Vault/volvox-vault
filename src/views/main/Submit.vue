<template>
  <MainLayout>
    <div id="blocks-Submit">
      <div class="block-Submit">
        <p class="block-Submit-header">submit</p>
        <p style="padding: 15px">We hope to see you in our inbox sometime.</p>
      </div>

      <!-- WEB SUB -->
      <div class="block-Submit">
        <p class="block-Submit-header">website</p>

        <ul class="block-Submit-ul">
          <li>
            Any kind of creative article / project can be submitted / pitched to
            the website.
          </li>
          <li>
            Volvox Vault prioritizes showcasing works with gentle, mindful, and
            organic vibrations.
          </li>
          <li>
            Articles, stories, paintings, photographs, films, generative art,
            etc.
          </li>
          <li>
            For visual submissions, include at least 200 word artist's
            statement.
          </li>
          <li>Email submissions / pitches to hello@volvoxvault.com</li>
        </ul>
      </div>

      <!-- MAG SUB -->
      <div class="block-Submit">
        <p class="block-Submit-header">magazine</p>

        <ul class="block-Submit-ul">
          <li><b>
            Heart: An issue reflecting on confidence, empowerment, and
            empathy.</b></li>
          <li>Deadline November 10th.</li>
          <li>
            You can create new art, or submit something you made in the past
            which fits the theme.
          </li>
          <li>
            Volvox Vault prioritizes showcasing works with gentle, mindful, and
            organic vibrations.
          </li>
          <li>
            For visual submissions, include at least 200 word artist's
            statement.
          </li>
          <li>Written pieces for the magazine may be 1-6 pages long.</li>
          <li>
            <router-link to="/support"
              >Subscribe to the newsletter for updates.</router-link
            >
          </li>
          <li>Email submissions / pitches to hello@volvoxvault.com, or through <a href="https://form.123formbuilder.com/5763218/form" target="_blank">this form</a>.</li>
        </ul>
      </div>

      <!-- NEWS SUB -->
      <div class="block-Submit">
        <p class="block-Submit-header">newspaper</p>
        <p class="block-Submit-link">
          Fill out <a href="https://form.123formbuilder.com/5763208/form" target="_blank">this form</a> or email hello@volvoxvault.com<br />
          <a
            href="https://checkout.square.site/buy/TWWRLYXJEZVU5BCM3W56HKSX"
            target="_blank"
            >Subscribe to Volvox Times</a
          >
        </p>
      </div>
    </div>

    <br /><br /><br />
  </MainLayout>
</template>


<script>
import MainLayout from "../../layouts/MainLayout";

export default {
  name: "Submit",
  components: {
    MainLayout,
  },
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

.block-Submit-ul {
  padding-right: 15px;
}

.block-Submit-link a,
li a {
  color: #9879a6;
  text-decoration: none;
}

.block-Submit-link a:hover,
.block-shop a:hover,
li a:hover {
  text-decoration: underline;
  cursor: pointer;
}

.block-Submit-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 800px) {
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