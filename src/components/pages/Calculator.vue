<template class="row">
  <Header name="unaftorise" avatar="person_off" user-settings="/profile" />
    <q-page class="flex flex-center">
        <div class="main justify-center">
          <q-form
            @submit="this.SaveCalculate"
            class="q-gutter-md"
          >
            <div class="name">
              <q-input
                v-model="name"
                label="Название отчета"
                :rules="[ val => val && val.length > 0 || 'Введите название отчёта']"
              /></div>
            <div class="container">
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
            </div>
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
      if (this.dropdown !== 'Налоговая ставка') {
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
      income: ref(null),
      costs: ref(null),
      paymentMargin: ref(null),
      paymentCosts: ref(null),
      dropdown: ref('Налоговая ставка'),
      isValid: ref(false),
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
.name {
    width: 70%;
    margin: 1rem;
    margin-top: 3rem;
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
.mainItem{
  padding: 1vw;
}
.DropDown{
  height: 3.5rem;
  margin-left: 1vw;
  margin-right: 1vw;
  margin-top: 1vw;
  font-size: clamp(10px, 1.25vw, 14px)
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
</style>
