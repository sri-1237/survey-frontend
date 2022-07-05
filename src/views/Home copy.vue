<!-- <template>
  <div class="container">
    <header class="jumbotron">
      <h3>{{content}}</h3>
    </header>
  </div>
</template>

<script>
import UserService from '../services/user.service';

export default {
  name: 'Home',
  data() {
    return {
      content: ''
    };
  },
  mounted() {
    UserService.getPublicContent().then(
      response => {
        this.content = response.data;
      },
      error => {
        this.content =
          (error.response && error.response.data && error.response.data.message) ||
          error.message ||
          error.toString();
      }
    );
  }
};
</script> -->


<template>
    <div id="app">
        <vue-bootstrap4-table :rows="rows" :columns="columns" :config="config">
        <template slot="refresh-button-text">
        <i class="fas fa-sync-alt"></i> My refresh
    </template>
        </vue-bootstrap4-table>
    </div>
</template>
 
<script>
import VueBootstrap4Table from 'vue-bootstrap4-table'
 
export default {
    name: 'App',
    data: function() {
        return {
            rows: [{
                    "id": 1,
                    "name": {
                        "first_name": "Vladimir",
                        "last_name": "Nitzsche"
                    },
                    "address": {
                        "country": "Mayotte"
                    },
                    "email": "franecki.anastasia@gmail.com",
                },
                {
                    "id": 2,
                    "name": {
                        "first_name": "Irwin",
                        "last_name": "Bayer"
                    },
                    "age": 23,
                    "address": {
                        "country": "Guernsey"
                    },
                    "email": "rlittle@macejkovic.biz",
                },
                {
                    "id": 3,
                    "name": {
                        "first_name": "Don",
                        "last_name": "Herman"
                    },
                    "address": {
                        "country": "Papua New Guinea"
                    },
                    "email": "delia.becker@cormier.com",
                }],
            columns: [{
                    label: "Survey Name",
                    name: "id",
                    filter: {
                        type: "simple",
                        placeholder: "Enter survey name"
                    },
                    sort: true,
                },
                {
                    label: "Created By",
                    name: "name.first_name",
                    filter: {
                        type: "simple",
                        placeholder: "Enter user name"
                    },
                    sort: true,
                },
                {
                    label: "Actions",
                    name: "actions",
                  
                },
               ],
            config: {
                checkbox_rows: false,
                rows_selectable: true,
                card_title: "Surveys",
                show_refresh_button: false,
                show_reset_button: false,

                pagination: true, // default true
                    pagination_info: true, // default true
                    num_of_visibile_pagination_buttons: 7, // default 5
                    per_page: 5, // default 10
                    per_page_options:  [5,  10,  20,  30],
            }
        }
    },
    components: {
        VueBootstrap4Table
    }
}
</script>
