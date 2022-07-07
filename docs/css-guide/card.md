# css布局技巧


## image

### 固定宽高比图片, 可以 根据宽度变化

:::demo 使用`padding-bottom百分比`

```vue
<template>
  <div class="wrapper">
    <img src="https://ms.bdimg.com/pacific/0/pic/1387596952_1422974677.png?x=0&y=0&h=150&w=242&vh=150.00&vw=242.00&oh=150.00&ow=242.00" />
  </div>
</template>

<style lang="less" scoped>
.wrapper {
  position:relative;
  width: 100%;
  padding-bottom: 75%;
  img {
    position: absolute;
    width: 100%;
    height: 100%;
  }
}
</style>
```
:::


## 文字

### 多行文字垂直居中

:::demo 使用 table
```vue
<template>
  <ul class="list">
    <li class="item">
      <span class="text">这是一行文字文字温斯顿hi凡事都会覅</span>
    </li>
    <li class="item">
    <span class="text">这是一行文字</span></li>
  </ul>
</template>

<style lang="less" scoped>
.item {
  width:80px;
  border:1px solid red;
  height: 50px;
  display: table;
  padding: 10px 0;
  .text {
    display:block;
    text-align:center;
    font-size: 12px;
    display: table-cell;
    vertical-align:middle;
  }
}
</style>
```
:::
