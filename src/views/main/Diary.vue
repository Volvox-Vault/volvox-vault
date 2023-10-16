<template>
    <MainLayout>
        <div id="blocks-Diary">
            <!-- diary -->
            <div class="block-Diary">
                <p class="block-Diary-header">WRITE A DIARY ENTRY</p>

                
                <div class="diary-bg-wrap">
                    <img class="diary-bg" src="https://cdn.glitch.global/31c7994a-ff45-4592-b835-14262460c504/pexels-dlkr-5676478.jpg?v=1697471798740"/>
                <div class="main-Diary diary-bg-content">
    
    <div class="notes-wrap">
                <div class="block-Diary-link notes">

                    <div class="note">
                    <p>
                        Write a diary entry for our public diary collection (coming soon).
                    </p>
                    </div>

                    <div class="note">
                    <details>
                        <summary>HOW TO CONTRIBUTE...</summary>
                        • Share your recent revelations, opinions, wishes, dreams, ambient thoughts, manifestations.<br>
                        • Word count must be between 100 - 4000.<br>
                        • Submissions will be reviewed before posting. You will be notified via email when your entry is published.<br>
                        • Want to include images/videos? Share a link to them (Google Drive, Dropbox, etc).<br>
                        • Please be friendly and kind in your entries. We encourage you to be vulnerable!<br>
                        • Please note that disturbing and unpeaceful content may be denied for the safety of our readers.
                    </details>
                    </div>

                
                
    
                <div class="form note">

                    <form ref="diaryEntry" class="diaryForm" @submit.prevent="submitForm" @submit="submitFormReset">

                    <input type="hidden" name="subject" value="new public diary entry">
    
                        <p style="margin-top: 15px;">Dear diary,</p>

                        <br>

                        <textarea id="volvox-diary" name="message" v-model="message" minlength="600" maxlength="20000" placeholder="your diary entry + public social media/contact info (optional)" required></textarea>
    
                        <br><br>

                        <p>Love,</p>

                        <br>
    
                        <input type="text" name="name" v-model="name" class="nameArea" placeholder="your name or alias" required>
                        <input type="email" name="email" v-model="email" placeholder="your email" required>
                        <div class="h-captcha" data-captcha="true"></div>

                        <input type="checkbox" name="botcheck" class="hidden" style="display: none;">
        
                        <button type="submit">send</button>
    
                    </form>
                </div>

                </div>
                </div>
    
    
    </div>
    <br><br>
            </div>

            

            </div>
        </div>
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
        submitFormReset() {
            // Your form submission
            this.$refs.diaryEntry.reset(); // This will clear that form
        },
    },
};
</script>



<style scoped>
.notes-wrap {
    margin: 0 auto;
    display: block;
    width: 640px;
}

.notes {
    margin: 0 auto;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    margin-top:20px;
    margin-bottom: 20px;
    text-align: left;
}

.note {
    width: auto;
    height: 200px;
    padding: 20px;
    color: #664b71;
    background: #f3f9e6;
    overflow-y: auto;
    border: 1px dotted #664b71;
}

.form {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 2;

    padding-bottom: 0px;
    text-align: left;
    font-size: 15pt;
    color: #664b71;
    border: 1px dotted #664b71;
    background: #fbfdf7;
    height: 100%;
}

form {
    margin: 0 auto;
    display: inline-block;
    width: 100%;
}

textarea,
input {
    display: inline-block;
    padding: 5px;
    line-height: 1.6;
    font-size: 15pt;
    color: #664b71;
    background: #f3f9e6;
    border: none;
    margin: 0px;
    outline: none !important;
}

textarea {
  width: 99%;
  height: 300px;
}

textarea:focus,
input:focus {
    outline: none !important;
    border: 1px dotted #664b71;
  }

input:invalid:focus, textarea:invalid:focus {
  background: #cbbad2;
}


form p {
    padding: 0px;
    margin: 0px;
    margin-bottom: 25px;
    margin-top: 20px;
    line-height: 0;
}

.diary-bg-wrap {
  overflow: hidden;
  position: relative;
  height: 100%;
  min-height: 100vh;
}

.diary-bg {
  opacity: 0.3;
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  min-height: 100vh;
  width: auto;
  min-width: 100vw;
  object-fit: cover;
}

.diary-bg img {
    min-height: 100vh;
}

.diary-bg-content {
  position: relative;
}

/* BLOCKS */

#blocks-Diary {
    margin: 0px;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 0;
    grid-gap: 10px;
    height: 100vh;
    width: 100%;
    overflow-y: auto;
}

.block-Diary {
    background-color: #f3f9e6;
    color: #212121;
    border-collapse: collapse;
    width: 100%;
    margin: 0 auto;
    line-height: 1.6;
}

.block-Diary-header {
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
  text-transform: uppercase;
}

.block-Diary-link,
.block-Diary-link p {
    font-size: 15pt;
}

.block-Diary-link p {
    margin: 0px;
    padding: 0px;
}

.nameArea {
    margin-right: 20px;
}

button {
    margin-top: 20px;
    margin-bottom:0px !important;
    font-family: hersheyFut, arial, sans-serif;
    color: #f3f9e6;
    background: #664b71;
    border: 1px dotted #f3f9e6;
    font-size: 15pt;
    padding: 10px;
}

@media (max-width: 800px) {
    textarea {
      width: 340px;
    }
    form {
      margin: 10px;
    }
}

@media only screen and (max-device-width: 566px) {
    textarea {
      width: 340px;
    }
    form {
      margin: 10px;
    }
}
</style>