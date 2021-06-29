# Card

常用的卡片布局。

## 基础用法

基础的卡片用法。

:::demo 112

```vue
<template>
  <div class="card-wrap">
    <div class="card">{{ title }}</div>
  </div>
</template>

<script>
import { ref, defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const title = ref('vitepress-theme-demoblock')

    return { title }
  }
})
</script>

<style>
.card-wrap {
  text-align: center;
}

.card {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 500;
  color: var(--c-brand);
  background: #fff;
  border: 1px solid var(--c-brand);
  height: 80px;
  width: 600px;
}
</style>
```

:::