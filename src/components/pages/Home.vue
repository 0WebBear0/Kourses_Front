<template>
  <Header name="unaftorise" avatar="person_off" user-settings="/setting" />
  <q-page class="flex flex-center">
    <div class="main">
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
            <q-btn class="blue" rounded>зарегистрироваться</q-btn>
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
            <q-btn class="red" rounded>Посмотреть</q-btn>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="links">
        <a href="/f">О клинике</a>
        <a href="/f">Блог</a>
        <a href="/f">Контакты</a>
        <a href="/f">+7 (888) 888-88-88</a>
      </div>
      <hr/>
      <div class="copyright">Copyright 2021-2022, JavaMED. All rights reserved.
        Privacy Policy  |  Terms of Use  |  Сookies
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import Header from 'components/organisms/Header'

export default defineComponent({
  name: 'PageIndex',
  components: { Header }
})
</script>

<style lang="scss" scoped>
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

.footer {
  background: #53a8dd;
  width: 100%;
  display: flex;
  justify-content: center;
  min-height: 100px;
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
    button{
      padding: 10px 30px;
      margin-top: 15px;
      color: #FFFFFF;
      &.red {
        background: #FF5966;
      }
      &.blue {
        background: #29AAE3;
      }
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

.footer {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  padding: 2rem 1rem;
  color: #FFFFFF;
  hr {
    height: 2px;
    border: 0;
    background: #000000;
    width: 50%
  }
  a {
    text-decoration: none;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    color: #FFFFFF;
    &:hover {
      text-decoration: underline;
    }
  }
}

.links {
  display: flex;
  gap: 2rem;
}
</style>
