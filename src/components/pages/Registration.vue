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
                      <q-select v-model="model" :options="options" :dense="dense" :options-dense="denseOpts">
                      </q-select>
                    </div>
                    <div><q-checkbox>Выбрать врача</q-checkbox></div>
                    <div>
                      <q-select v-model="model" :options="options" :dense="dense" :options-dense="denseOpts">
                      </q-select>
                    </div>
                  </div>
                  <div class="q-gutter-md row items-start">
                    <q-date v-model="model" mask="YYYY-MM-DD HH:mm" color="blue" />
                    <q-time v-model="model" mask="YYYY-MM-DD HH:mm" color="blue" />
                  </div>
                </div>
                <div class="button-check"><q-btn class="blue">Проверить наличие свободных окон</q-btn></div>
            </div>
            <div class="reg-button"><q-btn size="xl" class="red reg">ЗАПИСАТЬСЯ НА ПРИЕМ</q-btn></div>
            <!-- <div class="container">
              <div class="container__top-inputs column">
                <q-input
                  class="mainItem"
                  outlined
                  type="number"
                  v-model="income"
                  label="Предполагаемый доход"
                  :rules="[ val => val && val.length > 0 || '']"
                />
                <q-input
                  class="mainItem"
                  outlined
                  type="number"
                  v-model="costs"
                  label="Расходы"
                  :rules="[ val => val && val.length > 0 || '']"
                />
                <q-btn-dropdown color="grey-5" class="mainItem DropDown" :label="dropdown" dropdown-icon="change_history">
                  <q-list>

                    <div style="display: flex; flex-wrap: wrap; justify-content: space-evenly">
                      <q-item clickable v-close-popup @click="dropdown = 'Ип ОСНО'" style="width: 75%; justify-content: center;">
                        <q-item-label style="display: flex; justify-content: center; align-items: center;">Ип ОСНО</q-item-label>
                      </q-item>
                      <q-item clickable href="https://www.regberry.ru/nalogooblozhenie/osno-obshchaya-sistema-nalogooblozheniya" v-close-popup style="width: 25%; justify-content: center;">
                        <q-icon size="200%" style="display: flex; justify-content: center; align-items: center;" name="help" color="grey-8" />
                      </q-item>
                    </div>
                    <div style="display: flex; flex-wrap: wrap; justify-content: space-evenly">
                      <q-item clickable v-close-popup @click="dropdown = 'Ип УСН %6'" style="width: 75%; justify-content: center;">
                        <q-item-label style="display: flex; justify-content: center; align-items: center;">Ип УСН %6</q-item-label>
                      </q-item>
                      <q-item clickable href="https://www.regberry.ru/nalogooblozhenie/usn" v-close-popup style="width: 25%; justify-content: center;">
                        <q-icon size="200%" style="display: flex; justify-content: center; align-items: center;" name="help" color="grey-8" />
                      </q-item>
                    </div>
                    <div style="display: flex; flex-wrap: wrap; justify-content: space-evenly">
                      <q-item clickable v-close-popup @click="dropdown = 'Ип УСН %15'" style="width: 75%; justify-content: center;">
                        <q-item-label style="display: flex; justify-content: center; align-items: center;">Ип УСН %15</q-item-label>
                      </q-item>
                      <q-item clickable href="https://www.regberry.ru/nalogooblozhenie/usn" v-close-popup style="width: 25%; justify-content: center;">
                        <q-icon size="200%" style="display: flex; justify-content: center; align-items: center;" name="help" color="grey-8" />
                      </q-item>
                    </div>
                    <div style="display: flex; flex-wrap: wrap; justify-content: space-evenly">
                      <q-item clickable v-close-popup @click="dropdown = 'Ип ЕСХ'" style="width: 75%; justify-content: center;">
                        <q-item-label style="display: flex; justify-content: center; align-items: center;">Ип ЕСХ</q-item-label>
                      </q-item>
                      <q-item clickable href="https://www.nalog.gov.ru/rn77/taxation/taxes/eshn/" v-close-popup style="width: 25%; justify-content: center;">
                        <q-icon size="200%" style="display: flex; justify-content: center; align-items: center;" name="help" color="grey-8" />
                      </q-item>
                    </div>
                    <div style="display: flex; flex-wrap: wrap; justify-content: space-evenly">
                      <q-item clickable v-close-popup @click="dropdown = 'Ип ПСН'" style="width: 75%; justify-content: center;">
                        <q-item-label style="display: flex; justify-content: center; align-items: center;">Ип ПСН</q-item-label>
                      </q-item>
                      <q-item clickable href="https://www.regberry.ru/nalogooblozhenie/patentnaya-sistema-nalogooblozheniya" v-close-popup style="width: 25%; justify-content: center;">
                        <q-icon size="200%" style="display: flex; justify-content: center; align-items: center;" name="help" color="grey-8" />
                      </q-item>
                    </div>
                    <div style="display: flex; flex-wrap: wrap; justify-content: space-evenly">
                      <q-item clickable v-close-popup @click="dropdown = 'Ип НПД'" style="width: 75%; justify-content: center;">
                        <q-item-label style="display: flex; justify-content: center; align-items: center;">Ип НПД</q-item-label>
                      </q-item>
                      <q-item clickable href="https://www.regberry.ru/nalogooblozhenie/nalogi-samozanyatyh-grazhdan-v-2019" v-close-popup style="width: 25%; justify-content: center;">
                        <q-icon size="200%" style="display: flex; justify-content: center; align-items: center;" name="help" color="grey-8" />
                      </q-item>
                    </div>

                  </q-list>
                </q-btn-dropdown>
              </div>
              <div class="payments row">
                <q-input class="mainItem" outlined v-model="paymentCosts" label="Расчёт расхода" readonly />
                <q-input class="mainItem" outlined v-model="paymentMargin" label="Расчёт маржи" readonly/>
                <p class="validation" v-if="isValid">Налоговая ставка <br> не указана </p>
              </div>
              <div class="container-button"><q-btn color="grey-9" type="submit" size='lg'>Сохранить</q-btn></div>
            </div> -->
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
  name: 'PageIndex',
  components: { Footer, Header },
  watch: {
    income: function () {
      this.calculatePayment()
    },
    costs: function () {
      this.calculatePayment()
    },
    dropdown: function () {
      this.isValid = false
      this.calculatePayment()
    }
  },
  methods: {
    SaveCalculate () {
      const data = {
        name: this.name,
        income: this.income,
        costs: this.costs,
        nalogS: this.dropdown,
        paymentMargin: this.paymentMargin,
        paymentCosts: this.paymentCosts
      }
      if (this.dropdown !== 'Выберите врача') {
        console.log(data)
      }
      else {
        this.isValid = true
      }
    }
  },
  setup () {
    return {
      name: ref(''),
      surname: ref(''),
      lastname: ref(''),
      income: ref(null),
      costs: ref(null),
      paymentMargin: ref(null),
      paymentCosts: ref(null),
      dropdown: ref('Выберите врача'),
      isValid: ref(false),
      model: ref(null),
      options: [
        'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
      ],
      dense: ref(false),
      denseOpts: ref(false),
      calculatePayment () {
        if (this.income && this.costs !== null) {
          switch (this.dropdown) {
            case 'Ип ОСНО':
              this.paymentCosts = (this.income - this.costs) * 0.13
              this.paymentMargin = this.income - this.costs - ((this.income - this.costs) * 0.13)
              break
            case 'Ип УСН %6':
              this.paymentCosts = Number(this.costs) + Number(this.income * 0.06)
              this.paymentMargin = this.income - this.costs - this.income * 0.06
              break
            case 'Ип УСН %15':
              this.paymentCosts = (this.income - this.costs) * 0.15
              this.paymentMargin = this.income - this.costs - ((this.income - this.costs) * 0.15)
              break
            case 'Ип ЕСХ':
              this.paymentCosts = (this.income - this.costs) * 0.06
              this.paymentMargin = this.income - this.costs - ((this.income - this.costs) * 0.06)
              break
            case 'Ип ПСН':
              this.paymentCosts = (this.income - this.costs) * 0.06
              this.paymentMargin = this.income - this.costs - ((this.income - this.costs) * 0.06)
              break
            case 'Ип НПД':
              this.paymentCosts = (this.income - this.costs) * 0.4
              this.paymentMargin = this.income - this.costs - ((this.income - this.costs) * 0.4)
              break
          }
        }
      }
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
