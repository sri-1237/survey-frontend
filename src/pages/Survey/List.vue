<template>
<div class="content">
        <md-table v-model="surveys" md-sort="name" md-sort-order="asc" md-card md-fixed-header>
            <md-table-toolbar>
                <!-- <div class="md-toolbar-section-start">
          <h1 class="md-title">Users</h1>
        </div> -->

                <md-field md-clearable class="md-toolbar-section-end">
                    <md-input placeholder="Search by name..." v-model="search" @input="searchOnTable" />
                    
                </md-field>
                <md-field md-clearable class="md-toolbar-section-end">
                    <md-button class="md-primary md-raised" @click="createSurvey()">Create New Survey</md-button>
                    </md-field>
                
            </md-table-toolbar>

            <md-table-empty-state md-label="No surveys found"
                :md-description="`No survey found for this '${search}' query. Try a different search term or create a new survey.`">
                <md-button class="md-primary md-raised" @click="createSurvey()">Create New Survey</md-button>
            </md-table-empty-state>

            <md-table-row slot="md-table-row" slot-scope="{ item }">
                <md-table-cell md-label="ID" md-sort-by="id" md-numeric>{{ item.id }}</md-table-cell>
                <md-table-cell md-label="Survey Name" md-sort-by="name">{{ item.name }}</md-table-cell>
                <md-table-cell md-label="Created By" md-sort-by="email">{{ item.email }}</md-table-cell>
                <md-table-cell md-label="Role" md-sort-by="gender">{{ item.gender }}</md-table-cell>
                <md-table-cell>
                     <md-button class="md-just-icon md-simple md-secondary" @click="View(item)">
                        <md-icon>visibility</md-icon>
                        <md-tooltip md-direction="top">View</md-tooltip>
                    </md-button>
                    <md-button class="md-just-icon md-simple md-primary" @click="Edit(item)">
                        <md-icon>edit</md-icon>
                        <md-tooltip md-direction="top">Edit</md-tooltip>
                    </md-button>
                    <md-button class="md-just-icon md-simple md-danger" @click="Delete(item)">
                        <md-icon>close</md-icon>
                        <md-tooltip md-direction="top">Delete</md-tooltip>
                    </md-button>
                    <md-button class="md-just-icon md-simple md-success" @click="Share(item)">
                        <md-icon>share</md-icon>
                        <md-tooltip md-direction="top">Share</md-tooltip>
                    </md-button>
                </md-table-cell>
            </md-table-row>
        </md-table>
    </div>
</template>

<script>
import SurveyDataService from "../../services/surveyDataService";

const toLower = text => {
    return text.toString().toLowerCase()
}

const searchByName = (items, term) => {
    console.log(items + "testt--" + items.filter(item => toLower(item.name).includes(toLower(term))))
    if (term) {
        return items.filter(item => toLower(item.name).includes(toLower(term)))
    }

    return items
}

export default {
    name: 'TableSearch',
    data: () => ({
        search: null,
        searched: [],
        surveys: [
        ]
    }),
    methods: {
        retrieveSurveys() {
            SurveyDataService.getAll()
                .then(response => {
                    this.surveys = response.data;
                    console.log("survey1111..", response.data);
                })
        },
         createSurvey(){
       this.$router.push({ name:'createSurvey'});
    },
        View(survey) {

            this.$router.push({ name: 'viewSurvey', params: { id: survey.id } });
        },
        Edit(survey) {

            this.$router.push({ name: 'editSurvey', params: { id: survey.id } });
        },
        Share(survey) {

            this.$router.push({ name: 'shareSurvey'});
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
        newUser() {
            window.alert('Noop')
        },
        searchOnTable() {
            this.searched = searchByName(this.surveys, this.search)
        },

        created() {
            this.searched = this.surveys;
        }
    },
    mounted() {
        this.retrieveSurveys();
    }
}
</script>

<style lang="scss" scoped>
.md-field {
    max-width: 300px;
}
</style>