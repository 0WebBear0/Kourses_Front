<template>
  <Header name="unaftorise" avatar="person_off" user-settings="/profile" />
  <q-page class="flex flex-center">
    <div class="main">
        <div class="name"><q-input v-model="text" label="Название отчета" /></div>
        <div class="container">
            <div class="container__top-inputs">
                <div><q-input outlined v-model="text" label="Предполагаемый доход" /></div>
                <div><q-input outlined v-model="text" label="РАСХОДЫ" /></div>
                <div><q-input outlined v-model="text" label="Налоговая ставка" /></div>
            </div>
            <div class="container__bottom-inputs">
                <div><q-input outlined v-model="text" label="Ррасход" /></div>
                <div><q-input outlined v-model="text" label="Р маржи" readonly/></div>
            </div>
            <div class="container-button"><q-btn color="black" size='lg' >Сохранить</q-btn></div>
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
import { defineComponent, ref } from 'vue'
import Header from 'components/organisms/Header'

export default defineComponent({
  name: 'PageIndex',
  components: { Header },
  setup () {
    return {
      text: ref('')
    }
  }
})
</script>

<style lang="scss" scoped>
.name {
    width: 600px;
    margin: 1rem;
    margin-top: 3rem;
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

.container {
    margin-bottom: 8rem;
    border: 1px solid #000000;
    padding: 3rem 1.5rem;
    width: 60vw;
    &__top-inputs, &__bottom-inputs {
        display: flex;
        justify-content: space-between;
        div {
            min-width: 30%;
        }
    }
    &__top-inputs {
        div {
            width: 30%;
        }
    }
    &__bottom-inputs {
        margin-top: 2rem;
        gap: 3rem;
        justify-content: left;
        div {
            width: 40%;
        }
    }
}
.container-button {
    display: flex;
    justify-content: right;
    button {
        width: 20rem;
        margin-top: 5rem;
    }
}
</style>
