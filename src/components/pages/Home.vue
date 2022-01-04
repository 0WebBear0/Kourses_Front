<template>
  <Header name="unaftorise" avatar="person_off" user-settings="/profile" />
  <q-page class="flex flex-center">
    <div class="main">
      <div class="info-block">
        f
      </div>
      <div class="blue-block">
        <h3>Создать отчет</h3>
        <div class="container">
          <div class="container-info">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quas distinctio voluptate officiis, eius voluptatum aut odio blanditiis aliquid.
              Nam a tempore perferendis ex sunt eaque, amet dolor impedit. Suscipit, provident.
            </p>
            <q-btn to="/calculator" rounded>Добавить отчет</q-btn>
          </div>
          <div class="container-img">
            <img src=""/>
          </div>
        </div>
      </div>
      <div class="red-block">
        <h3>Управляйте своими отчетами</h3>
        <div class="container">
          <div class="conatiner-img">
            <img src=""/>
          </div>
          <div class="container-info">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quas distinctio voluptate officiis, eius voluptatum aut odio blanditiis aliquid.
              Nam a tempore perferendis ex sunt eaque, amet dolor impedit. Suscipit, provident.
            </p>
            <q-btn to="/profile" rounded>Посмотреть</q-btn>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="links">
        <a href="/f">Об организации</a>
        <a href="/f">Блог</a>
        <a href="/f">Контакты</a>
        <a href="/f">+7 (888) 888-88-88</a>
      </div>
      <hr/>
      <div class="copyright">Copyright 2021-2022, BUH. All rights reserved.
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

.footer {
  background: #8B8B8B;
  display: flex;
  width: 100%;
  min-height: 100px;
  justify-content: center;
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
