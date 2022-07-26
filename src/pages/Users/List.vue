<template>
  <div>
    <md-table v-model="users" md-sort="name" md-sort-order="asc" md-card md-fixed-header>
      <md-table-toolbar>
        <!-- <div class="md-toolbar-section-start">
          <h1 class="md-title">Users</h1>
        </div> -->

        <md-field md-clearable class="md-toolbar-section-end">
          <md-input placeholder="Search by name..." v-model="search" @input="searchOnTable" />
        </md-field>
        <md-field md-clearable class="md-toolbar-section-end">
          <md-button class="md-primary md-raised" @click="createUser()">Create New User</md-button>
        </md-field>
      </md-table-toolbar>

      <md-table-empty-state md-label="No users found"
        :md-description="`No user found for this '${search}' query. Try a different search term or create a new user.`">
        <md-button class="md-primary md-raised" @click="newUser">Create New User</md-button>
      </md-table-empty-state>

      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="ID" md-sort-by="id" md-numeric>{{ item.id }} </md-table-cell>
        <md-table-cell md-label="Username     " md-sort-by="username">{{ item.username }}</md-table-cell>
        <md-table-cell md-label="Email" md-sort-by="email">{{ item.email }}</md-table-cell>
        <md-table-cell md-label="Role" md-sort-by="role">
          {{ item.roles[0].name }}
          
          </md-table-cell>
        <md-table-cell>
          <md-button class="md-just-icon md-simple md-primary">
            <md-icon>edit</md-icon>
            <md-tooltip md-direction="top">Edit</md-tooltip>
          </md-button>
          <md-button class="md-just-icon md-simple md-danger" @click="deleteUser()">
            <md-icon>delete</md-icon>
            <md-tooltip md-direction="top">Delete</md-tooltip>
          </md-button>
        </md-table-cell>
      </md-table-row>
    </md-table>

    <md-dialog class="dialogPopup" :md-active.sync="showDialog">
      <div>
        <md-dialog-title>Add New User</md-dialog-title>

        <md-field>
          <label>Username</label>
          <md-input v-model="initial"></md-input>
        </md-field>
        <md-field>
          <label for="password">Password</label>
          <md-input type="password" name="password" id="password" :disabled="sending" />

        </md-field>
        <md-field>
          <label for="roles">Roles</label>
          <md-select v-model="selectedRoles" name="roles" id="roles" multiple>
            <!-- <md-option value="superadmin">Superadmin</md-option> -->
            <md-option value="admin">Admin</md-option>
            <md-option value="User">User</md-option>
          </md-select>
        </md-field>


        <md-dialog-actions>
          <md-button class="md-primary" @click="showDialog = false">Cancel</md-button>
          <md-button class="md-primary" @click="showDialog = false">Save</md-button>
        </md-dialog-actions>
      </div>
    </md-dialog>
  </div>
</template>

<script>
import UserService from '../../services/user.service';

export default {
  name: 'TableSearch',
  data: () => ({
    search: null,
    searched: [],
    selectedRoles: [],
    users: [

    ],
    showDialog: false
  }),
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  mounted() {
    this.getAllUsers();

  },
  methods: {
    newUser() {
      window.alert('Noop')
    },
    searchOnTable() {
      UserService.findUser(this.search)
				.then(response => {
					this.users = response.data;
				})
    },
    createUser() {
      this.showDialog = true

    },
    getAllUsers() {
      UserService.getAll()
              .then(response => {
                this.users = response.data;
              })
    },
    View() {

    },
    Edit() {

    },
    deleteUser() {
      UserService.delete(user.id)
				.then(response => {
					this.getAllUsers();
				})

    }
  },
  created() {
    this.searched = this.users
  },

}
</script>

<style lang="scss" scoped>
// .md-field {
//   max-width: 300px;
// }

// .md-dialog /deep/.md-dialog-container {
//   max-width: 768px;
// }

.dialogPopup {
  width: 60% !important;
}

.md-dialog.md-dialog-container {
  max-width: 768px;
}

.md-dialog-container {
  max-width: 768px;

}
</style>