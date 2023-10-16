<template>
  <MainLayout>
    <div id="blocks-About">
      <!-- diary -->
      <div class="block-About">
        <p class="block-About-header">WRITE A DIARY ENTRY</p>
        <p class="block-About-link" style="text-align: center">
           submit your diary entry to our archive.
</p>
<div class="form">
<form @submit.prevent="submitForm" @submit="submitFormReset">
        <label for="diarySubmissionColumn">which column? — </label>
  
        <select name="diarySubmissionColumn" id="column-selection">
          <option value="dear">
            dear diary (opinion, etc. open with "dear diary,")
          </option>
          <option value="notebook">notebook (research)</option>
          <option value="feelings">feelings (write about a feeling)</option>
          <option value="personal">personal gossip (community updates)</option>
          <option value="oscillations">
            oscillations (audio + text, chats about creativity)
          </option>
        </select>

        <br /><br />

        <textarea id="volvox-diary" rows="20" cols="56" name="message" v-model="message" required>dear diary,</textarea>

        <br><br>

        sincerly,

        <br>
        
        <input type="text" name="name" v-model="name" placeholder="your name" required> 
        <input type="email" name="email"  v-model="email" placeholder="your email" required>
        <div class="h-captcha" data-captcha="true"></div>

        <br><br>

        <button type="submit">sent</button>

    </form>

</div>
</div>

    <br /><br /><br />
  </MainLayout>
</template>


<script>
import MainLayout from "../../layouts/MainLayout";
const WEB3FORMS_ACCESS_KEY = "e9365dd6-7b23-4d4c-a2e4-c46386e4a99a";

export default {
  name: "Diary",
  components: {
    MainLayout,
  },
    data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    async submitForm() {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: this.name,
          email: this.email,
          message: this.message,
        }),
      });
      const result = await response.json();
      if (result.success) {
        console.log(result);
      }
    },
    submitFormReset(){
         // Your form submission
         this.$refs.anyName.reset(); // This will clear that form
      },
  },
};
</script>



<style scoped>

div.form
{
    display: block;
    text-align: center;
}
form
{
    display: inline-block;
    margin-left: auto;
    margin-right: auto;
    text-align: left;
}
/* BLOCKS */
#blocks-About {
  margin: 0px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-row-gap: 0;
  grid-gap: 10px;
}

.block-About {
  background-color: #f3f9e6;
  color: #212121;
  border-collapse: collapse;
  overflow: auto;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.8;
}

.block-About-header {
  font-size: 20pt;
  font-weight: bold;
  color: #212121;
  font-family: hersheyTrip;
  text-align: center;

  background-color: #cbbad2;

  padding: 15px;
  margin: 0px;

  border-bottom: 1px dotted #212121;
  align-items: center;
}

.block-About-link {
  font-size: 15pt;

  padding: 15px;

  align-items: center;
}

.block-About-link img {
  float: right;
  max-width: 250px;
  padding-bottom: 15px;
  padding-left: 25px;
}

.block-About-link a,
.block-shop a {
  color: #9879a6;
  text-decoration: none;
}

.block-About-link a:hover,
.block-shop a:hover,
a:hover {
  text-decoration: underline;
  cursor: pointer;
}

.block-About-shop {
  text-align: center;
  text-decoration: none;
  margin-top: 35%;
  margin-bottom: 45%;
  font-size: 10vh;
  max-height: 50vh;
}

.block-About-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 800px) {
  .block-About-link img {
    width: 35%;
  }
}

@media only screen and (max-device-width: 566px) {
  .block-About-link img {
    width: 35%;
  }
}
</style>