
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

import { FirebaseApp } from '../fb'

var emailRE = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const db = FirebaseApp.database()
const usersRef = db.ref('users')

export default {
  name: 'user',
  data () {
    return {
      newUser: {
        name: '',
        email: ''
      }
    }
  },
  firebase: {
    users: usersRef
  },
  computed: {
    validation: function () {
      return {
        name: !!this.newUser.name.trim(),
        email: emailRE.test(this.newUser.email)
      }
    },
    isValid: function () {
      var validation = this.validation
      return Object.keys(validation).every(function (key) {
        return validation[key]
      })
    }
  },
  // methods
  methods: {
    addUser: function () {
      if (this.isValid) {
        usersRef.push(this.newUser)
        this.newUser.name = ''
        this.newUser.email = ''
      }
    },
    removeUser: function (user) {
      usersRef.child(user['.key']).remove()
    }
  }
}
</script>
