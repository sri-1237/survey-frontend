<template>
  <div class="container">
    <h2>Surveys</h2>
    
   <button type="button" class="btn btn-outline-primary" @click="createSurvey">Add New Survey</button>
      <SurveyList />
  </div>
</template>

<script>
// import UserService from '../services/user.service';
import SurveyDataService from "../services/surveyDataService";
import SurveyList from './Survey/SurveyList.vue';


export default {
  name: 'Admin',
  data() {
    return {
      content: '',
       surveys: [],
    };
  },
  components: { SurveyList},
  mounted() {
     this.retrieveSurveys();   
  },
   methods: {
    createSurvey(){
       this.$router.push('/survey');
    },
    retrieveSurveys(){
       SurveyDataService.getAll()
        .then(response => {
          this.surveys = response.data;
          console.log("survey..",response.data);
        })
    }
   }
};
</script>
