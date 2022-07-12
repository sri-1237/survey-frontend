<template>
    <div id="app">
        <vue-bootstrap4-table :rows="rows" :columns="columns" :config="config">
       
     <template slot="actions" slot-scope="props">
         <b-button variant="info" class="mr-3" size="sm" @click="View(props.row)">
        View
      </b-button>
      <b-button size="sm" class="mr-3" @click="Edit(props.row)">
        Edit
      </b-button>
      <b-button variant="danger" size="sm" @click="Delete(props.row)">
        Delete
      </b-button>
       </template>
        </vue-bootstrap4-table>
    </div>
</template>
 
<script>
import VueBootstrap4Table from 'vue-bootstrap4-table';
import SurveyDataService from "../../services/surveyDataService";
 
export default {
    name: 'App',
    data: function() {
        return {
            rows: [],
            columns: [{
                    label: "Survey Name",
                    name: "name",
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
                // card_title: "Surveys",
                show_refresh_button: false,
                show_reset_button: false,
                global_search:  {
                        placeholder:  "Enter custom Search text",
                        visibility:  false,
                        case_sensitive:  false
                    },

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
    },
    methods:{
       retrieveSurveys(){
       SurveyDataService.getAll()
        .then(response => {
          this.rows = response.data;
          console.log("survey1111..",response.data);
        })
    },
   View(survey) {

      this.$router.push({ name: 'viewSurvey', params: { id: survey.id } });
    },
    Edit(survey) {

      this.$router.push({ name: 'editSurvey', params: { id: survey.id } });
    },

    Delete(survey) {
      SurveyDataService.delete(survey.id)
        .then(() => {
          this.retrieveSurveys();
          // this.$router.push({ name: 'Home' });
        })
        .catch(e => {
          this.message = e.response.data.message;
        });
    },
   
    },
    mounted() {
      this.retrieveSurveys();
    },
}
</script>
