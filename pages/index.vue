<template>
  <div>
    <Header></Header>
    <CardPerson
      v-for="(user, index) in allUser"
      :key="index"
      :user="user"
    ></CardPerson>
  </div>
</template>

<script>
  import Header from "../components/Header";
  import CardPerson from "../components/CardPerson";

  export default {
    components: {
      Header, CardPerson
    },
    computed: {
      allUser() {
        return this.$store.getters.getAllUsers
      }
    }
  }
</script>

<style>
</style>

