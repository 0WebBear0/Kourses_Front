<template>
  <div class="footer">
    <div class="links">
      <a href="">Об организации</a>
      <a href="https://github.com/0WebBear0">Контакты</a>
    </div>
    <hr/>
    <div class="copyright">Copyright 2021-2022 "WebMen".
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
  background: #8B8B8B;
  display: flex;
  width: 100%;
  min-height: 60px;
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
    font-size: clamp(11px,1.5vw,20px);
    line-height: clamp(10px,1.5vw,20px);
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
