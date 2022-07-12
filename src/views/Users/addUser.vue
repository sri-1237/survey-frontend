<template>
  <div class="container">
   <div class="tableHeader">
    <!-- <h2>Users</h2> -->
   <button type="button" class="btn btn-outline-primary float-right" style="margin-left:65%;"  @click="createUser">+ Add New Admin</button>
    </div>

   <table class="table">
    <thead>
      <tr>
        <th class="col-3">Username</th>
        <th>Role</th>
        <th></th>
      </tr>
    </thead>
    <tbody v-for="user in users" :key="user.id" :user="user">
      <tr v-if="user.id != currentUser.id">
        <td>{{user.username}}</td>
        <td>User</td>
        <td>
          <button class="btn btn-primary btn-circle btn-sm m-1" @click="View()"><i class="fa fa-eye"></i></button>
          <button class="btn btn-default btn-circle btn-sm m-1" @click="Edit()"><i class="fa fa-pencil-square-o"></i></button>
          <button class="btn btn-danger btn-circle btn-sm m-1" @click="Delete()"><i class="fa fa-trash-o"></i></button>
        </td>
      </tr>     
    </tbody>
  </table>

  </div>
</template>

<script>
import UserService from '../../services/user.service';

export default {
  name: 'Adduser',
  data() {
    return {
      content: '',
      users:[],

    };
  },
   computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  mounted() {
    this.getAllUsers();
   
  },
   methods: {
    createUser(){
      
    },
    getAllUsers(){
UserService.getAll()
        .then(response => {
          this.users = response.data;
          console.log("survey1111..",response.data);
        })
    },
    View(){

    },
    Edit(){

    },
    Delete(){

    }
   }
};
</script>

<style scoped>
.tableHeader{
   display: inline-flex;
  width:100%;
}
</style>
