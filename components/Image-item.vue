<template>
  <div class="image">
    <figure
      v-lazyload
      class="image__wrapper"
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
  directives: {
    lazyload: {
      inserted: (el) => {
        function loadImage() {
          const imageElement = Array.from(el.children).find(
            (item) => item.nodeName === 'IMG',
          );

          if (imageElement.dataset.url) {
            imageElement.addEventListener('load', () => {
              el.classList.add('loaded');
            });
            imageElement.src = imageElement.dataset.url;
          }
        }

        function handleIntersect(entries, observer) {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              loadImage();
              observer.unobserve(el);
            }
          });
        }

        function createObserver() {
          const options = {
            root: null,
            threshold: '0',
            rootMargin: '100px',
          };
          const observer = new IntersectionObserver(handleIntersect, options);
          observer.observe(el);
        }

        if (!window.IntersectionObserver) {
          loadImage();
        } else {
          createObserver();
        }
      },
    },
  },
  props: {
    url: {
      type: String,
      default: '',
    },
    height: {
      type: String,
      default: '',
    },
    width: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '',
    },
  },
};
</script>
