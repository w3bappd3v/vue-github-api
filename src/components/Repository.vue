<script>
  export default {
    props: ['repository'],
    data: function () {
      return {
        loading: false
      }
    }
  }

</script>

<template>
    <div class="repository">
      <h3>{{ repository.name }}</h3>
      <div class="info-row">
        <div class="owner">
          <h4>{{ repository.owner.login}}</h4>
          <img :src="repository.owner.avatar_url" class="owner-avatar" />
        </div>
        <div class="languages">
          <h4>Stats</h4>
          <ul>
            <li>Language: {{ repository.language }}</li>
            <li>Forks: {{ repository.forks_count }}</li>
            <li>Watchers: {{ repository.watchers_count }}</li>
            <li>Stargazers: {{ repository.stargazers_count }}</li>
            
          </ul>
        </div>
      </div>
    </div>
</template>
l
<style scoped lang="scss">
  .repository {
    height: fit-content;
    border-radius: 5px;
    margin: 20px 10px;
    padding: 5px 10px;
    background: var(--item-background);
  }
  .info-row {
    display: flex;
    justify-content: center;
  }
  .owner-avatar {
    width: 75px;
    height: 75px;
    border-radius: 3px;
  }
  h3, h4, ul {
    margin: 0;
    padding: 0;
  }
  ul {
    list-style: none;
    text-align: left;
  }
  .owner, .languages {
    padding: 10px;
  }
</style>
