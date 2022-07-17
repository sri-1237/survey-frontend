<template>
  <div class="content" id="surveyCreator" />
</template>

<script>
import { SurveyCreator } from "survey-creator-knockout";
import "survey-core/defaultV2.min.css";
import "survey-creator-core/survey-creator-core.min.css";
import SurveyDataService from "../../services/surveyDataService";

const creatorOptions = {
  showLogicTab: true,
};



export default {
  name: "edit-survey-creator",
  props: ['id'],
  mounted() {
    const creator = new SurveyCreator(creatorOptions);
    console.log("iiiiiiii", this.id);
    if (this.id) {
      SurveyDataService.get(this.id)
        .then(response => {
          console.log("respp", JSON.stringify(response.data["json"]));
          creator.text = JSON.stringify(response.data["json"]);
        })
      //  creator.text = window.localStorage.getItem("survey-json");
      console.log("gggggg", window.localStorage.getItem("survey-json"))

    }

    creator.saveSurveyFunc = (saveNo, callback) => {
      window.localStorage.setItem("survey-json", creator.text);
      callback(saveNo, true);
      console.log("jjjjj...", creator.JSON.title)
      console.log("jjjjj...", creator.text)
      SurveyDataService.update(this.id, creator.JSON.title, creator.text)
        .then(response => {
          this.$router.push('/surveys');
        })
      // saveSurveyJson(
      //     "https://your-web-service.com/",
      //     creator.JSON,
      //     saveNo,
      //     callback
      // );
    };
    creator.render("surveyCreator");
  }
};

// function saveSurveyJson(url, json, saveNo, callback) {
//   const request = new XMLHttpRequest();
//   request.open('POST', url);
//   request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
//   request.addEventListener('load', () => {
//       callback(saveNo, true);
//   });
//   request.addEventListener('error', () => {
//       callback(saveNo, false);
//   });
//   request.send(JSON.stringify(json));
// }
</script>
<style scoped>
#surveyCreator {
  height: 100vh;
  width: auto;
}

.svc-creator__banner {
  display: none !important;
}
</style>