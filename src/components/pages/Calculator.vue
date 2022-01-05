<template>
  <Header name="unaftorise" avatar="person_off" user-settings="/profile" />
  <q-page class="flex flex-center">
    <div class="main">
        <div class="name"><q-input v-model="name" label="Название отчета" /></div>
        <div class="container">
            <div class="container__top-inputs">
                <div><q-input outlined type="number" v-model="income" label="Предполагаемый доход" /></div>
                <div><q-input outlined type="number" v-model="costs"  label="Расходы" /></div>
              <q-btn-dropdown color="grey-5" :label="dropdown" dropdown-icon="change_history">
                <q-list>

                  <div style="display: flex; flex-wrap: wrap; justify-content: space-evenly">
                    <q-item clickable v-close-popup @click="dropdown = 'Ип ОСНО'" style="width: 75%; justify-content: center;">
                        <q-item-label style="display: flex; justify-content: center; align-items: center;">Ип ОСНО</q-item-label>
                    </q-item>
                    <q-item clickable href="https://www.regberry.ru/nalogooblozhenie/osno-obshchaya-sistema-nalogooblozheniya" v-close-popup style="width: 25%; justify-content: center;">
                      <q-icon size="200%" style="display: flex; justify-content: center; align-items: center;" name="info" color="amber" />
                    </q-item>
                  </div>
                  <div style="display: flex; flex-wrap: wrap; justify-content: space-evenly">
                    <q-item clickable v-close-popup @click="dropdown = 'Ип УСН %6'" style="width: 75%; justify-content: center;">
                      <q-item-label style="display: flex; justify-content: center; align-items: center;">Ип УСН %6</q-item-label>
                    </q-item>
                    <q-item clickable href="https://www.regberry.ru/nalogooblozhenie/usn" v-close-popup style="width: 25%; justify-content: center;">
                      <q-icon size="200%" style="display: flex; justify-content: center; align-items: center;" name="info" color="amber" />
                    </q-item>
                  </div>
                  <div style="display: flex; flex-wrap: wrap; justify-content: space-evenly">
                    <q-item clickable v-close-popup @click="dropdown = 'Ип УСН %15'" style="width: 75%; justify-content: center;">
                      <q-item-label style="display: flex; justify-content: center; align-items: center;">Ип УСН %15</q-item-label>
                    </q-item>
                    <q-item clickable href="https://www.regberry.ru/nalogooblozhenie/usn" v-close-popup style="width: 25%; justify-content: center;">
                      <q-icon size="200%" style="display: flex; justify-content: center; align-items: center;" name="info" color="amber" />
                    </q-item>
                  </div>
                  <div style="display: flex; flex-wrap: wrap; justify-content: space-evenly">
                    <q-item clickable v-close-popup @click="dropdown = 'Ип ЕСХ'" style="width: 75%; justify-content: center;">
                      <q-item-label style="display: flex; justify-content: center; align-items: center;">Ип ЕСХ</q-item-label>
                    </q-item>
                    <q-item clickable href="https://www.nalog.gov.ru/rn77/taxation/taxes/eshn/" v-close-popup style="width: 25%; justify-content: center;">
                      <q-icon size="200%" style="display: flex; justify-content: center; align-items: center;" name="info" color="amber" />
                    </q-item>
                  </div>
                  <div style="display: flex; flex-wrap: wrap; justify-content: space-evenly">
                    <q-item clickable v-close-popup @click="dropdown = 'Ип ПСН'" style="width: 75%; justify-content: center;">
                      <q-item-label style="display: flex; justify-content: center; align-items: center;">Ип ПСН</q-item-label>
                    </q-item>
                    <q-item clickable href="https://www.regberry.ru/nalogooblozhenie/patentnaya-sistema-nalogooblozheniya" v-close-popup style="width: 25%; justify-content: center;">
                      <q-icon size="200%" style="display: flex; justify-content: center; align-items: center;" name="info" color="amber" />
                    </q-item>
                  </div>
                  <div style="display: flex; flex-wrap: wrap; justify-content: space-evenly">
                    <q-item clickable v-close-popup @click="dropdown = 'Ип НПД'" style="width: 75%; justify-content: center;">
                      <q-item-label style="display: flex; justify-content: center; align-items: center;">Ип НПД</q-item-label>
                    </q-item>
                    <q-item clickable href="https://www.regberry.ru/nalogooblozhenie/nalogi-samozanyatyh-grazhdan-v-2019" v-close-popup style="width: 25%; justify-content: center;">
                      <q-icon size="200%" style="display: flex; justify-content: center; align-items: center;" name="info" color="amber" />
                    </q-item>
                  </div>

                </q-list>
              </q-btn-dropdown>
            </div>
            <div class="container__bottom-inputs">
                <div><q-input outlined v-model="paymentCosts" label="Расчёт расхода" readonly /></div>
                <div><q-input outlined v-model="paymentMargin" label="Расчёт маржи" readonly/></div>
            </div>
            <div class="container-button"><q-btn color="grey-9" size='lg' >Сохранить</q-btn></div>
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
  watch: {
    income: function () {
      this.calculatePayment()
    },
    costs: function () {
      this.calculatePayment()
    },
    dropdown: function () {
      this.calculatePayment()
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
      popupQuestion: ref(''),
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
    border-radius: 3px;
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
