<template>
  <Header name="webMen" avatar="person_off" user-settings="/profile" />
  <q-page class="flex flex-center">
    <div class="main">
      <div class="info-block">
        <q-carousel autoplay infinite animated v-model="slide">
          <q-carousel-slide :name="1" img-src="imgs/4.jpg"/>
          <q-carousel-slide :name="2" img-src="imgs/5.jpg"/>
        </q-carousel>
      </div>
      <div class="blue-block">
        <h3>Расчитать предпологаемую модель</h3>
        <div class="container">
          <div class="container-info">
            <p>
              В этом приложении вы можете расчитать маржинальность вашей бизнес модели,
              не прибегая к изучению каждой из систем налогообложения.
            </p>
            <q-btn to="/calculator" rounded>Расчитать</q-btn>
          </div>
          <div class="container-img">
            <img style="width: 60%;" src="imgs/1.jpg"/>
          </div>
        </div>
      </div>
      <div class="red-block">
        <h3>Управляйте своими расчётами</h3>
        <div class="container">
          <div class="container-img">
            <img style="width: 60%;" src="imgs/3.jpg"/>
          </div>
          <div class="container-info">
            <p>
              Все расчёты храняться в базе данных и в любой момент вы можете к ним вернуться.
              А так же можно сравнить предпологаемые расчёты и реальные траты.
            </p>
            <q-btn to="/profile" rounded>Посмотреть</q-btn>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import Header from 'components/organisms/Header'
import Footer from 'components/organisms/Footer'
import $api from 'src/AxiosBase'

export default defineComponent({
  name: 'PageIndex',
  components: { Footer, Header },
  // created () {
  //   this.registrations()
  // },
  methods: {
    registrations () {

    }
  },
  setup(){
    return{
      slide: ref(1)
    }
  }
})
</script>

<style lang="scss" scoped>
.block {
  width: 100%;
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
    width: 50%;
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
  &-img{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
    filter: brightness(75%);
  }
}

.info-block {
  width: 100%;
  height: 100%;
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
