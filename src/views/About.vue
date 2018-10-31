<template>
  <div class="about">
    <h1>This is an Product page</h1>
    <ul>
      <li v-for="product in productLists" :key="product.id">
        <h2>{{product.color}}</h2>
      </li>
    </ul>
  </div>
</template>

<script>
const url = 'https://5baa388b53adf70014d15cca.mockapi.io/product'
export default {
  data: function () {
    return {
      productLists: []
    }
  },
  created: async function () {
    const res = await fetch(url)
    this.productLists = await res.json()
  }
}
</script>

<style lang="less" scoped>
  ul {
    list-style: none;
    float: left;
    border: 1px  solid red;
    li {
      list-style: none;
      color: red;
      float: left;
      width: 200px;
      cursor: pointer;
    }
  }
</style>
