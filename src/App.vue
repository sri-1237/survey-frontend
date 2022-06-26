<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-light bg-light">
       <img src="../public/survey-check2.jpg" alt="..." height="50">
      <a href="/" class="navbar-brand">SurveyBuilder</a>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/" class="nav-link">
            <font-awesome-icon icon="home" /> Home
          </router-link>
        </li>
      </div>

      <div class="navbar-nav ml-auto">
       
        <li class="nav-item">
          <router-link to="/login" class="menuItems nav-link">
             <button class="btn btn-outline-success btn-sm my-2 my-sm-0" type="submit"> Login</button>
          </router-link>
        </li>
         <li class="nav-item">
          <router-link to="/register" class="nav-link">
             <button class="btn btn-success btn-sm my-2 my-sm-0" type="submit"><font-awesome-icon icon="user-plus" /> Sign Up</button>
          </router-link>
        </li>
      </div>

    </nav>

    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    currentUser() {
      return false;
    }
  },
  methods: {
  }
};
</script>


<style>

.navbar-dark .navbar-nav .nav-link {
color: rgb(255 255 255 / 83%) !important;
}

</style>
