<template>
    <div id="app">
        <vue-bootstrap4-table :rows="rows" :columns="columns" :config="config">
       
     <template slot="actions" slot-scope="props">
        <b-button size="sm">
           Edit
        </b-button>
        
    </template>
     <template slot="actions" slot-scope="props"><b-button size="sm" @click="editSurvey(props.row)">
          Edit
        </b-button></template>
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
    editSurvey(survey){
      console.log("sssss",survey);
      this.$router.push({ name: 'editsurvey', params: { id: survey.id } });
    },
   
    },
    mounted() {
      this.retrieveSurveys();
    },
}
</script>
