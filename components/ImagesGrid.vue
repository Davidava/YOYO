<template>
  <div class="images-grid">
    <div class="row">
      <div class="col-md-8">
        <ImageItem
          v-for="image in gridImages.firstColumn"
          :key="image.src"
          :url="image.src"
          :width="image.width"
          :height="image.height"
          :color="image.color"
        />
      </div>
      <div class="col-md-8">
        <ImageItem
          v-for="image in gridImages.secondColumn"
          :key="image.src"
          :url="image.src"
          :width="image.width"
          :height="image.height"
          :color="image.color"
        />
      </div>
      <div class="col-md-8">
        <ImageItem
          v-for="image in gridImages.thirdColumn"
          :key="image.src"
          :url="image.src"
          :width="image.width"
          :height="image.height"
          :color="image.color"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    ImageItem: () => import('../components/Image-item'),
  },

  props: {
    gridImages: {
      type: Object,
      required: true,
    },
  },
};
</script>
