<template>
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
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Footer',
  components: {

  }
})
</script>

<style lang="scss" scoped>

.footer {
  background: #53a8dd;
  width: 100%;
  display: flex;
  justify-content: center;
  min-height: 100px;
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
