<template>
  <router-view></router-view>
</template>

<script>
import Axios from 'axios';
import AuthService from './services/authentication.service'

export default {
  name: 'App',
  created: function () {
    Axios.interceptors.response.use( response => response, error => {
      const status = error.response ? error.response.status : null

      if (status === 401) {
        console.log(status)
          // will loop if refreshToken returns 401
          return this.refreshToken();
      }

      return Promise.reject(error);
    });
  },
  methods: {
    refreshToken() {
      const refreshingCall = AuthService.refreshToken()
      return refreshingCall;
}
  }
}
</script>

<style lang="scss">
  // Import Main styles for this application
  @import 'assets/scss/style';
</style>
