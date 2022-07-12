<template>
    <survey :survey="survey" />
</template>

<script>

import { StylesManager, Model } from "survey-vue";

import 'bootstrap/dist/css/bootstrap.css';
import "survey-vue/survey.css";
import SurveyDataService from "../../services/surveyDataService";
// import "./index.css";


StylesManager.applyTheme("bootstrap");
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
            })
        console.log("111111111..", test);
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
