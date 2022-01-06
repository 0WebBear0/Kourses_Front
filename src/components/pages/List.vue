<template>
  <Header name="unaftorise" avatar="person_off" user-settings="/profile" />
  <q-page class="flex flex-center">
    <div class="main">
     <div class="main__title">
            <h2>Ваши записи</h2>
            <img src="../../assets/caduceus.png">
      </div>
      <div class="my-webinars">
              <div class="my-webinars__container">
                <div class="my-webinars__button">
                    <q-btn to="/registration" class="blue">ДОБАВИТЬ ЗАПИСЬ</q-btn>
                </div>
                <q-list class="my-webinars__items">
                  <!-- <q-item
                    class="my-webinars__item"
                    :key="index"
                    v-for="(webinar, index) in webinars"
                  > -->
                  <q-item
                    class="my-webinars__item"
                  >
                    <div class="my-webinars__item-top">
                      <div class="my-webinars__item-top-name">Имя врача</div>
                      <div>АЙДИ ЗАПИСИ</div>
                    </div>

                    <hr />
                    <div class="my-webinars__item-content">
                      <div class="my-webinars__item-content-sessions">
                        1212
                      </div>
                    </div>
                  </q-item>
                  <q-item
                    class="my-webinars__item"
                  >
                    <div class="my-webinars__item-top">
                      <div class="my-webinars__item-top-name">Имя врача</div>
                      <div>АЙДИ ЗАПИСИ</div>
                    </div>

                    <hr />
                    <div class="my-webinars__item-content">
                      <div class="my-webinars__item-content-sessions">
                        1212
                      </div>
                    </div>
                  </q-item>
                  <q-item
                    class="my-webinars__item"
                  >
                    <div class="my-webinars__item-top">
                      <div class="my-webinars__item-top-name">Имя врача</div>
                      <div>АЙДИ ЗАПИСИ</div>
                    </div>

                    <hr />
                    <div class="my-webinars__item-content">
                      <div class="my-webinars__item-content-sessions">
                        1212
                      </div>
                    </div>
                  </q-item>
                  <q-item
                    class="my-webinars__item"
                  >
                    <div class="my-webinars__item-top">
                      <div class="my-webinars__item-top-name">Имя врача</div>
                      <div>АЙДИ ЗАПИСИ</div>
                    </div>

                    <hr />
                    <div class="my-webinars__item-content">
                      <div class="my-webinars__item-content-sessions">
                        1212
                      </div>
                    </div>
                  </q-item>
                  <q-item
                    class="my-webinars__item"
                  >
                    <div class="my-webinars__item-top">
                      <div class="my-webinars__item-top-name">Имя врача</div>
                      <div>АЙДИ ЗАПИСИ</div>
                    </div>

                    <hr />
                    <div class="my-webinars__item-content">
                      <div class="my-webinars__item-content-sessions">
                        1212
                      </div>
                    </div>
                  </q-item>
                </q-list>
              </div>
            </div>
    </div>
    <Footer/>
  </q-page>
</template>

<script>
import Header from 'components/organisms/Header'
import Footer from 'components/organisms/Footer'

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'List',
  components: { Footer, Header },
  props: {
  },
  setup () {
    return {
      confirm: ref(false)
    }
  }
})
</script>

<style lang="scss" scoped>
a {
    -webkit-appearance: none;
    border: 0;
    outline: 0;
    display: flex;
    padding: 0 2rem;
    align-content: center;
    font-weight: 600;
    cursor: pointer;
    font-size: 1em;
    color: #FFFFFF;
    font-size: 25px;
    line-height: 26px;
    text-align: center;
    &:hover {
        cursor: pointer;
    }
    &.blue {
        box-shadow: 0px 1px 1px rgba(88, 165, 255, 0.25);
        background: #5EB7FB;
        border-radius: 5px;
        &:hover {
            box-shadow: 0px 6px 6px rgba(88, 165, 255, 0.25);
        }
    }
    &.large {
        width: 20rem;
        height: 3.25rem;
    }
}

.my-webinars {
  min-height: calc(100vh - 4rem);
  justify-content: center;
  width: 75vw;
  &__container {
    padding-top: 4rem;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  hr {
    border: 0;
    border-top: 2px solid #deeeff;
  }
  .header-text {
    margin-bottom: 1rem;
  }
  &__button {
    display: flex;
    justify-content: flex-end;
  }
  &__items {
    margin-top: 2.5rem;
    width: 100%;
  }
  &__item {
    margin-bottom: 1.8rem;
    background: #FFFFFF;
    border: 2px solid #eef0fc;
    box-shadow: 4px 4px 4px #eef0fc;
    padding: 1.5rem 1.5rem 0 1.5rem;
    border-radius: 6px;
    display: block;
    &-top {
      display: flex;
      justify-content: space-between;
      color: #4d4a4a;
      font-weight: 500;
      font-size: 1.1rem;
    }
    &-content {
      padding: 0.5rem 0 1rem 0;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      &-sessions {
        margin-bottom: 0.75rem;
        min-width: 35%;
      }
      &-actions {
        display: flex;
        flex-wrap: wrap;
      }
    }
  }
}

.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  &__title {
    display: flex;
    width: 40rem;
    align-items: center;
    justify-content: center;
    background: rgba(19, 187, 238, 0.04);
    border: 2px solid #00000009;
    border-radius: 30px;
    padding: 0 2rem;
    gap: 1rem;
    margin-top: 2rem;
    h2 {
      font-weight: 400;
      margin: 1.5rem;
      font-size: 55px;
    }
    img {
      height: 5rem;
      width: 5rem;
    }
  }
}

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
