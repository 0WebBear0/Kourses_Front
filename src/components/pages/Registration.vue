<template class="row">
  <Header name="unaftorise" avatar="person_off" user-settings="/profile" />
    <q-page class="flex flex-center">
        <div class="main justify-center">
          <q-form
            @submit="this.SaveCalculate"
            class="q-gutter-md"
          >
            <h4>Ваши данные</h4>
            <div class="blue-box inputs">
              <div class="input-default">
                  <q-input
                    v-model="surname"
                    label="Фамилия"
                    :rules="[ val => val && val.length > 0 || 'Введите свою фамилию']"
                  />
              </div>
              <div class="input-default">
                <q-input
                  v-model="name"
                  label="Имя"
                  :rules="[ val => val && val.length > 0 || 'Введите свое имя']"
                />
              </div>
              <div class="input-default">
                <q-input
                  v-model="lastname"
                  label="Отчество"
                  :rules="[ val => val && val.length > 0 || 'Введите свое отчество']"
                />
              </div>
            </div>
            <h4>Выберите врача и дату</h4>
            <div class="blue-box doctor-block">
                <div class="inputs">
                  <div>
                    <div>
                      <p>К какому врачу хотите записаться?</p>
                      <q-select v-model="specialnost" :options="spec" :dense="dense" :options-dense="denseOpts">
                      </q-select>
                    </div>
                    <div><q-checkbox>Выбрать врача</q-checkbox></div>
                    <div>
                      <q-select v-model="doctor" :options="doctors" :dense="dense" :options-dense="denseOpts">
                      </q-select>
                    </div>
                  </div>
                  <div class="q-gutter-md row items-start">
                    <q-date v-model="date" mask="YYYY-MM-DD HH:mm" color="blue" />
                    <q-time v-model="time" mask="YYYY-MM-DD HH:mm" color="blue" />
                  </div>
                </div>
                <div class="button-check"><q-btn class="blue">Проверить наличие свободных окон</q-btn></div>
            </div>
            <div class="reg-button"><q-btn size="xl" class="red reg">ЗАПИСАТЬСЯ НА ПРИЕМ</q-btn></div>
          </q-form>
        </div>
    </q-page>
  <Footer/>
</template>

<script>
import { defineComponent, ref } from 'vue'
import Header from 'components/organisms/Header'
import axios from 'axios'
import Footer from 'components/organisms/Footer'

export default defineComponent({
  name: 'Registration',
  components: { Footer, Header },
  watch: {
    
  },
  methods: {
    getAllPosts () {
      axios.get('http://localhost:8080/register/all').then(Response => console.log(Response)).catch(e => console.log(e))
    }
  },
  created () {
    this.getAllPosts()
  },
  setup () {
    return {
      date: ref(''),
      time: ref(''),
      name: ref(''),
      surname: ref(''),
      lastname: ref(''),
      income: ref(null),
      costs: ref(null),
      paymentMargin: ref(null),
      paymentCosts: ref(null),
      dropdown: ref('Выберите врача'),
      isValid: ref(false),
      specialnost: ref(null),
      doctor: ref(null),
      spec: [
        'Стоматолог', 'Ортопед', 'Окулист', 'Терапевт'
      ],
      doctors: [
        'Александр Михайлович Жуков', 'Владислав Иванович Карпухин'
      ],
      dense: ref(false),
      denseOpts: ref(false),
    }
  }
})
</script>

<style lang="scss" scoped>

// .main {
// }

h4 {
  margin: 3rem;
  margin-bottom: 0.3rem;
}

.blue-box {
  padding: 1.5rem 2rem;
  border-radius: 10px;
  background: rgba(19, 187, 238, 0.04);
  border: 2px solid #00000009;
  p {
    font-size: 20px;
  }
  .q-checkbox {
    margin-top: 1rem;
    font-size: 20px;
  }
}

.doctor-block {
  margin-bottom: 2rem;
}
.button-check {
  margin: 2rem 0 1rem 0;
  display: flex;
  justify-content: flex-end;
}
.inputs {
  display: flex;
  flex-wrap: wrap;
  column-gap: 3rem;
  justify-content: flex-start;
}
.input-default {
    width: 45%;
    margin-bottom: 1rem;
}
.payments{
  padding-top: 2vh;
}
.container {
    margin-bottom: 6rem;
    border: 2px solid #000000;
    border-radius: 7px;
    padding: 1.5rem 1.5rem;
    display: flex;
    flex-direction: column;
}
.container__top-inputs{
    height: 100%;
}
.container-button {
    display: flex;
    justify-content: right;
    button {
        width: clamp(10rem,10vw,20rem);
        margin-top: 5rem;
    }
}


.validation{
  display: flex;
  color: #C10015;
  height: 3.5rem;
  padding-left: 1vw;
  padding-top: 1.5vw;
}
@media (min-width: 700px) {
  .mainItem{
    padding: 1vw;
    width: 18vw;
    height: 2.5vw;
  }
  .DropDown{
    height: 3.5rem;
    margin-left: 1vw;
    margin-right: 1vw;
    margin-top: 1vw;
    font-size: clamp(10px, 1.25vw, 14px)
  }
  .container__top-inputs{
    flex-direction: row;
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
      &.reg {
        padding: 0.75rem 7rem;
        border-radius: 10px;
      }
}

.reg-button {
  display: flex;
  justify-content: center;
  margin-bottom: 5rem;
}
</style>
