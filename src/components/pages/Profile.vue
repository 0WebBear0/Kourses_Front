<template>
  <Header name="unaftorise" avatar="person_off" user-settings="/profile" />
  <q-page class="flex flex-center">
    <div class="main">
      <q-list dense bordered padding class="rounded-borders">
        <q-item clickable v-ripple>
          <q-item-section>
            Item
          </q-item-section>
        </q-item>
      </q-list>
    </div>
    <Footer/>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import Header from 'components/organisms/Header'
import Footer from 'components/organisms/Footer'
import $api from 'src/AxiosBase'

export default defineComponent({
  name: 'PageIndex',
  components: { Footer, Header },
  created () {
    $api.get('taxation')
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
})
</script>

<style lang="scss" scoped>
.block {
  width: 100vw;
  padding: 1rem 1rem 0;
  h3 {
    color: #CD0000;
  }
  img {
    width: 30rem;
  }
  &:nth-child(2) {
    background: #f5f6f6;
  }
}

h3 {
    margin-bottom: 0;
    text-align: center;
    font-size: 42px;
    font-weight: 500;
}

.container {
  display: flex;
  padding: 5rem;
  justify-content: space-around;
  align-items: center;
  &-info {
    width: 40%;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 2rem;
    color: #000000;
    a{
      padding: 10px 30px;
      margin-top: 15px;
      color: #FFFFFF;
      background: #CD0000;
    }
  }
}

.info-block {
  margin: 8rem 2rem;
  display: flex;
  justify-content: space-around;
  .column-block {
    background: #F9F9F9;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 2rem;
    padding: 10px 15px;
    align-items: center;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    max-width: 17.5rem;
    font-size: 18px;
    min-height: 50vh;
    &:hover {
      img {
        transition: 1s;
        width: 8rem;
      }
    }
    img {
      transition: 0.5s;
      width: 6rem;
    }
  }
}

.links {
  display: flex;
  gap: 2rem;
}
</style>
