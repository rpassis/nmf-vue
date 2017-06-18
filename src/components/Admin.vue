<template>
  <div class="admin">
    <p>User admin</p>
    <ul is="transition-group">
        <li v-for="user in users" class="user" :key="user['.key']">
          <span>{{user.name}} - {{user.email}}</span>
          <button v-on:click="removeUser(user)">X</button>
        </li>
    </ul>
    <form id="form" v-on:submit.prevent="addUser">
      <input v-model="newUser.name">
      <input v-model="newUser.email">
      <input type="submit" value="Add User">
    </form>
    <ul class="errors">
      <li v-show="!validation.name">Name cannot be empty.</li>
      <li v-show="!validation.email">Please provide a valid email address.</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'user',
  data () {
    return {
      newUser: {
        name: '',
        email: ''
      }
    }
  }
}
</script>
