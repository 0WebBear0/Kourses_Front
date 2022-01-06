<template>
  <Header name="unaftorise" class="header-block" avatar="person_off" user-settings="/profile" />
  <q-page class="flex flex-center">
    <div class="main">
      <div class="main__container">
        <div>
          <h1>JavaMED</h1>
          <div class="info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Beatae illo harum consectetur. Ipsum possimus, veritatis nulla dolor sapiente quos placeat
            nihil deleniti corporis omnis ratione exercitationem distinctio dolore doloremque magnam!
          </div>
          <div class="buttons">
            <q-btn class="blue">Войти</q-btn>
            <q-btn class="red">Зарегистрироваться</q-btn>
          </div>
        </div>
      </div>
      <div class="info-block">
        <div class="column-block">
          <img src="../../assets/drug.png">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia sint temporibus neque, corporis totam inventore delectus voluptate. Inventore atque in eveniet sapiente quisquam illum facilis illo ducimus, ex enim nihil?
        </div>
        <div class="column-block">
          <img src="../../assets/caduceus.png">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia sint temporibus neque, corporis totam inventore delectus voluptate. Inventore atque in eveniet sapiente quisquam illum facilis illo ducimus, ex enim nihil?
        </div>
        <div class="column-block">
          <img src="../../assets/cardiogram.png">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia sint temporibus neque, corporis totam inventore delectus voluptate. Inventore atque in eveniet sapiente quisquam illum facilis illo ducimus, ex enim nihil?
        </div>
        <div class="column-block">
          <img src="../../assets/medical-checkup.png">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia sint temporibus neque, corporis totam inventore delectus voluptate. Inventore atque in eveniet sapiente quisquam illum facilis illo ducimus, ex enim nihil?
        </div>
      </div>
      <div class="blue-block">
        <h3>Запись на прием</h3>
        <div class="container">
          <div class="container-info">
            <p>
              Онлайн-система Shifton разработана для оптимизации времени и
              ресурсов в создании рабочих расписаний сотрудников. Shifton -
              прекрасное решение для компаний любых сфер деятельности и
              размеров.
            </p>
            <q-btn class="blue" to="/registration" rounded>Записаться на прием</q-btn>
          </div>
          <div class="container-img">
            <img src="../../assets/firstImg.jpg"/>
          </div>
        </div>
      </div>
      <div class="red-block">
        <h3>Список зарегистривовшихся на прием пациентов</h3>
        <div class="container">
          <div class="conatiner-img">
            <img src="../../assets/secondImg.jpg"/>
          </div>
          <div class="container-info">
            <p>
              У нас на сайте хранится база записавшихся на прием людей. Вы можете найти себя в данном списке или изменить свои данные прямо там.
              ПРОСЬБА не удалять данные без имеющейся на то причины!
            </p>
            <q-btn class="red" to="/list" rounded>Посмотреть</q-btn>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import Header from 'components/organisms/Header'
import Footer from 'components/organisms/Footer'

export default defineComponent({
  name: 'PageIndex',
  components: { Footer, Header }
})
</script>

<style lang="scss" scoped>
.main__container {
  padding: 20vh 10%;
  background-image: url("../../assets/main.jpg");
  background-size: 100vw 120vh;  width: 100vw;
  height: 90vh;
  h1 {
    margin-bottom: 2rem;
    font-weight: 700;
    color: #434449;
  }
  .info {
    max-width: 40vw;
    font-size: 14px;
  }
  .buttons {
    display: flex;
    gap: 20px;
    margin-top: 1rem;
  }
}
.red-block, .blue-block {
  width: 100vw;
  padding: 1rem 1rem 0;
}

.red-block {
  h3 {
    color: #FF5966;
  }
  img {
    width: 30rem;
  }
}

.blue-block {
  background: #f5f6f6;
  h3 {
    color: #29AAE3;
  }
  img {
    width: 40rem;
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
  }
}

.q-btn {
      padding: 10px 30px;
      margin-top: 15px;
      color: #FFFFFF;
      &.red {
        background: #FF5966;
        opacity: 0.9;
      }
      &.blue {
        background: #29AAE3;
        opacity: 0.9;
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

</style>
