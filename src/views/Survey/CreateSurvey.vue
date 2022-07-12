<template>
  <div id="surveyCreator" />
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
  name: "survey-creator",
  mounted() {
    const creator = new SurveyCreator(creatorOptions);  
   
    creator.saveSurveyFunc = (saveNo, callback) => { 
      // window.localStorage.setItem("survey-json", creator.text);
      callback(saveNo, true);
       SurveyDataService.createSurvey(creator.JSON.title, creator.text,this.$store.state.auth.user.id)
        .then(response => {
           this.$router.push('/admin');
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

.svc-creator__banner{
  display:none !important;
}
</style>