<template>
  <div class="container">
    <h2>Surveys</h2>
   <button type="button" class="btn btn-outline-primary" @click="createSurvey">Add New Survey</button>
  </div>
</template>

<script>
// import UserService from '../services/user.service';

export default {
  name: 'Admin',
  data() {
    return {
      content: ''
    };
  },
  mounted() {
   
  },
   methods: {
    createSurvey(){
       this.$router.push('/survey');
    }
   }
};
</script>
