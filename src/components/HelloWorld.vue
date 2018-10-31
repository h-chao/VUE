<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <test-test ref="test"/>
    <vc-copy :value="msg">简洁版复制</vc-copy>
  </div>
</template>

<script>
import Vue from 'vue'
import { Copy } from 'wya-vc'
export default {
  data: function () {
    return {
      msg: 'Huang Chao1'
    }
  },
  components: {
    'vc-copy': Copy
  },
  mounted () {
    // eslint-disable-next-line
    console.log(this, Vue.$test1, this.$refs)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
