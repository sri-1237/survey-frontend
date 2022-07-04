<template>
  <div class="container">
    <h2>Users</h2>
   <button type="button" class="btn btn-outline-primary" @click="createUser">Add New User</button>
  </div>
</template>

<script>
// import UserService from '../services/user.service';

export default {
  name: 'Adduser',
  data() {
    return {
      content: ''
    };
  },
  mounted() {
   
  },
   methods: {
    createUser(){
      
    }
   }
};
</script>
