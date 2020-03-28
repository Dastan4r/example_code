<template>
  <div
    class="person-card"
    @click="showInfo"
  >
    <div class="person-card_detailed">
      <div class="person-card_detailed_photo">
        <img :src="user.picture.large" alt="photo">
      </div>
      <p>{{user.name.first}} {{user.name.last}}</p>
    </div>
    <ul class="person-card_list-info">
      <li class="person-card_list-info_name"></li>
      <li class="person-card_list-info_email"></li>
      <li class="person-card_list-info_dob"></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "CardPerson",
    props: ['user'],
    methods: {
      showInfo() {
        alert(`My email is: ${this.user.email}
        Gender is: ${this.user.gender}
        Age is: ${this.user.dob.age}`)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .person-card {
    position: relative;
    width: 730px;
    margin: 20px auto;
    border-radius: 3px;
    box-shadow: 0 0 1px rgba(0, 0, 0, .5);
    background-color: #fff;
    text-align: center;

    &_detailed {
      position: relative;
      padding: 20px 0;

      &:before {
        content: '';
        display: block;
        height: 1px;
        border-bottom: 1px solid rgba(0, 0, 0, .15);
        position: absolute;
        top: 50%;
        width: 100%;
      }

      p {
        color: #2c2e31;
        font-size: 38px;
        margin: 15px 0;
      }

      &_photo {
        padding: 5px;
        margin: 0 auto;
        width: 155px;
        height: 155px;
        background-color: #fff;
        z-index: 1;
        position: relative;
        border-radius: 50%;
        border: 1px solid rgba(0, 0, 0, .15);

        img {
          width: 143px;
          border-radius: 50%;
        }
      }
    }

    &_list-info {
      list-style: none;
      margin: 0 auto;
      padding: 0;
      position: relative;

      li {
        cursor: pointer;
        display: inline-block;
        width: 40px;
        height: 48px;
        margin: 10px;
        background-image: url(../assets/card_icons.png);
        background-size: 378px;
        background-position-y: -48px;
        transition: all .25s ease-out;
      }

      &_name,
      &_email,
      &_dob {
        background-position: 0 -48px;

        &:hover {
          background-position: 0 -96px;
        }
      }

      &_email {
        background-position: -68px -48px;

        &:hover {
          background-position: -68px -96px;
        }
      }

      &_dob {
        background-position: -135px -48px;

        &:hover {
          background-position: -135px -96px;
        }
      }
    }
  }

</style>
