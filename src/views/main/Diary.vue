<template>
  <MainLayout>
    <div id="blocks-About">
      <!-- diary -->
      <div class="block-About">
        <p class="block-About-header">diary entries</p>
        <p class="block-About-link" style="text-align: center">
           submit your diary entry to our archive. 
</p>
<div class="form">
<form action="/action_page.php">
      <label for="column-selection">which column? — </label>

      <select name="column-selection" id="column-selection">
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
      <textarea id="volvox-submit" name="volvox-submit" rows="20" cols="56">
dear diary,
</textarea
      >
<br />
      <input type="submit" value="send" />
    </form>
</div>
</div>

    <br /><br /><br />
  </MainLayout>
</template>


<script>
import MainLayout from "../../layouts/MainLayout";

export default {
  name: "Diary",
  components: {
    MainLayout,
  },
};
</script>



<style scoped>

.form {
  width: 100%;
  margin: 0 auto;
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