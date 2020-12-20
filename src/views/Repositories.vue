<script>
  import Repository from "../components/Repository";
  
  export default {
    data: function () {
      return {
        searchStr: '',
        repositories: [],
        loading: false
      }
    },
    components: {
      Repository: Repository
    },
    methods: {
      searchRepositories () {
        this.loading = true;
        fetch("https://api.github.com/users/" + this.searchStr + "/repos").then(response => {
          return response.json();
        }).then(data => {
          this.repositories = data;
          this.loading = false;
        });
      },
      check(event) {
        this.$emit('setMode', event.target.checked);
      }
    }
  }
</script>

<template>
  <div class="container">
    <h1>Repo Finder</h1>
    <input type="checkbox" class='theme-switch' @change="check($event)" />Dark Mode<br>
    <input type="text" v-model="searchStr" placeholder="Ener Github User Name" />
    <button @click="searchRepositories()">Search</button>
    <h3 v-if="loading">Loading...</h3>
    <div v-else class="repositories">
      <Repository v-for="repository in repositories" :repository="repository" :key="repository.id" />
    </div>
  </div>
</template>

<style scoped lang="scss">
  h1 {
    margin: 5px 5px 10px 0;
    display: inline-block;
  }
  input[type="text"] {
    border-radius: 3px;
    border: 1px solid #d4d4d4;
    height: 25px;
    width: 200px;
    font-size: 1.15em;
    padding: 5px;
    vertical-align: middle;
    color: #585858;
  }
  input:focus{
    outline-color: #a4dfb5;
  }
  .repositories {
    margin: 0 auto;
    max-width: 900px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    
  }
  button {
    margin-left: 10px;
  }
  @media screen and (max-width: 785px) {
    .repositories {
      max-width: 600px;
    }
  }
    @media screen and (max-width: 543px) {
    .repositories {
      max-width: 241px;
    }
  }
</style>