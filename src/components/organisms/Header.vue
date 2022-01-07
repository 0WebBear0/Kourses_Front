<template>
  <q-header class="header" elevated reveal>
    <q-toolbar>
      <div class="drawer HeaderLayout">
        <q-btn
          flat
          dense
          round
          icon="menu"
          color="white"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-item-label>Название организации</q-item-label>

        <a :href="userSettings" class="nullification UserLabelOnHeader" >
          <q-icon :name="avatar" size="150%" class="UserLabelOnHeader-icon"/>
          <q-item-label class="roundByImg">{{name[0]}}</q-item-label>
        </a>
      </div>

      <q-toolbar-title class="headerDesktop">
          <div class="logo"> <img src="../../assets/logo.png"> </div>
          <div class="header-items">
            <div v-for="link in essentialLinks" :key="link.title" v-bind="link">
                <q-item class="header-item" clickable tag="a" :href="link.link">{{link.title}}</q-item>
            </div>
          </div>

              <!-- <a :href="userSettings" class="header-item nullification UserLabelOnHeader" >
                <q-icon :name="avatar" size="150%" class="UserLabelOnHeader-icon"/>
                <q-item-label class="roundByImg">{{name}}</q-item-label>
              </a> -->
      </q-toolbar-title>

    </q-toolbar>
  </q-header>

  <q-drawer
    v-model="leftDrawerOpen"
    bordered
    overlay
    class="drawer"
  >
    <div class="layoutGrid">
      <q-list>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
      <q-icon @click="toggleLeftDrawer" color="black" name="menu" size="150%" class="nullification Brg"/>

    </div>
  </q-drawer>
</template>

<script>
import EssentialLink from 'components/molecules/EssentialLink'

const linksList = [
  {
    title: 'Главная',
    icon: 'home',
    link: '/'
  },
  {
    title: 'Cписок пациентов',
    icon: 'playlist_play',
    link: '/list'
  },
  {
    title: 'Запись на прием',
    icon: 'today',
    link: '/registration'
  }
]

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Header',

  components: {
    EssentialLink
  },
  props: {
    avatar: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    userSettings: {
      type: String,
      required: true
    }
  },
  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,

      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>

<style scoped>
  .logo img {
    width: 350px;
  }
  .logo {
    align-self: left;
  }
  .header{
    background: #29AAE3;
  }
 .UserLabelOnHeader{
   display: flex;
   justify-content: center;
   padding: 8px 16px;
 }
 .UserLabelOnHeader-icon{
   margin-right: 15%;
 }
 .headerDesktop{
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
   margin-right: 5rem;
 }
 .HeaderLayout{
   width: 100%;
   font-size: clamp(14px,5vw,16px);
   display: flex;
   align-items: center;
   justify-content: space-between;
 }
 .layoutGrid{
   display: flex;
   flex-direction: row;
   justify-content: space-between;
 }
 .Brg{
   padding-top: 13px;
   padding-right: 20px;
 }
 .roundByImg{
   margin-top: 3px;
 }
 @media (min-width: 1024px) {
   .drawer{
     display: none;
   }
 }
 @media (max-width: 1023px) {
   .headerDesktop{
     display: none;
   }
 }
 .header-items {
   display: flex;
   gap: 2rem;
 }
 .header-item {
  padding: 20px 20px;
}
</style>
