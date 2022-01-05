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
