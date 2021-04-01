<template>
<div class="image">
  <figure
    class="image__wrapper"
    v-lazyload
    :style="{
      'padding-top': height / width*100 + '%',
      'background-color': color,
    }"
  >
    <img
      class="image__item"
      :data-url="url"
    >
  </figure>
</div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
    },
    height: {
      type: String,
    },
    width: {
      type: String,
    },
    color: {
      type: String
    }
  },
}
</script>
