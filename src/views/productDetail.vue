<template>
<div>
  <h1>{{product.id}}</h1>
  <li>{{product.color}}</li>
</div>
  
</template>

<script>
export default {
  props: ['product']
}
</script>
