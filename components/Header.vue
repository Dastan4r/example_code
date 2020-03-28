<template>
  <header class="header">
    <div class="header-content-wrapper">
      <div class="card-quantity">
        <p>Please enter cards quantity:</p>
        <input v-model="quantity" type="number" min="1" max="20" required>
        <button
          @click="getPersons()"
        >Show Cards
        </button>

        <button
          @click="getMorePersons()"
        >See More
        </button>

        <button
          @click="clearAll()"
        >Clear All
        </button>

        <button
          @click="goToNextPage()"
        >Next Page
        </button>

      </div>

      <div class="filter-cards">
        <p>Select filter:</p>
        <p><input v-model="filter" name="gender-filter" type="radio" value="male">Male</p>
        <p><input v-model="filter" name="gender-filter" type="radio" value="female">Female</p>
        <p><input v-model="filter" name="gender-filter" type="radio" checked value="all">All</p>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: "Header",
    data() {
      return {
        quantity: '1',
        filter: 'all',
        page: 1
      }
    },
    methods: {
      getPersons() {
        if (this.quantity > 20) {
          alert('Please enter number less than 20 or equal')
        } else {
          const params = {
            quantity: this.quantity,
            filter: this.filter
          }
          this.$store.dispatch('getUser', params)
        }
      },
      getMorePersons() {
        if (this.quantity > 20) {
          alert('Please enter number less than 20 or equal')
        } else {
          const params = {
            quantity: this.quantity,
            filter: this.filter
          }
          this.$store.dispatch('getMoreUser', params)
        }
      },
      clearAll () {
        this.$store.dispatch('clearAll')
      },
      goToNextPage () {
        this.page++
        const params = {
          quantity: this.quantity,
          filter: this.filter,
          page: this.page
        }
        this.$store.dispatch('goToNextPage', params)
      }
    }
  }
</script>

<style lang="scss" scoped>
  header {
    padding: 20px 0;
    background-color: #457aa3;
    position: sticky;
    left: 0;
    z-index: 10;
    top: 0;

    .header-content-wrapper {
      max-width: 1170px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;

      .card-quantity,
      .filter-cards {
        display: flex;
        justify-content: space-between;

        p {
          color: #fff;
          margin-right: 20px;
        }

        button {
          padding: 5px 10px;
          background-color: #457aa3;
          border: 1px solid #fff;
          color: #fff;
          transition: all 0.3s ease;
          border-radius: 6px;
          margin-right: 20px;

          &:hover {
            background-color: #fff;
            border: 1px solid #457aa3;
            color: #457aa3;
            cursor: pointer;
          }

          &:focus {
            outline: none;
          }
        }

        input {
          margin-right: 20px;

          &:focus {
            outline: none;
          }
        }
      }
    }
  }
</style>
