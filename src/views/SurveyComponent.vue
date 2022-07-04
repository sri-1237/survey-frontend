<template>
    <survey :survey="survey" />
</template>

<script>

    import { StylesManager, Model } from "survey-vue";

    import 'bootstrap/dist/css/bootstrap.css';
    import "survey-vue/survey.css";
    // import "./index.css";


    StylesManager.applyTheme("bootstrap");
     var test = window.localStorage.getItem("survey-json");
            // console.log("Form11..",test);

    export default {
        name: "surveyjs-component",
        data() {

           

            const survey = new Model(test);

            return {
                survey: survey
            };
        }
    };
</script>

<style scoped>
</style>
