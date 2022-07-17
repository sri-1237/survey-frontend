<template>
    <div class="content">
        <survey :survey="survey" />
    </div>

</template>

<script>

import { StylesManager, Model } from "survey-vue";

import 'bootstrap/dist/css/bootstrap.css';
import "survey-vue/survey.css";
import "survey-vue/defaultV2.css";
import SurveyDataService from "../../services/surveyDataService";
// import "./index.css";


StylesManager.applyTheme("defaultV2");
var test;



export default {
    name: "view-survey",
    props: ['id'],
    mounted() {
        console.log("iiiiiiii", this.id)
        SurveyDataService.get(this.id)
            .then(response => {
                console.log("survey view..", JSON.stringify(response.data));
                test = JSON.stringify(response.data["json"]);
                this.survey = new Model(test);
              
                
            }).then(response =>{
                this.survey.onComplete.add(function (sender) {
                    console.log("Result JSON:\n" + JSON.stringify(sender.data, null, 3));
                });

            })
        console.log("111111111..", this.survey);
    },
    data() {

        return {
            survey: Object
        };
    }
};
</script>


<style scoped>
</style>
