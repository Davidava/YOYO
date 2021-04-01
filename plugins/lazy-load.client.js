import Vue from 'vue'

Vue.directive('lazyload', {
  inserted: el => {
    function loadImage() {
      const imageElement = Array.from(el.children).find(
        el => el.nodeName === "IMG"
      );

      if (imageElement.dataset.url) {
        imageElement.addEventListener("load", () => {
          el.classList.add("loaded")
        });
        imageElement.addEventListener("error", () => console.log("error"));
        imageElement.src = imageElement.dataset.url;
      }
    }

    function handleIntersect(entries, observer) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          return;
        } else {
          loadImage();
          observer.unobserve(el);
        }
      });
    }

    function createObserver() {
      const options = {
        root: null,
        threshold: "0",
        rootMargin: "40px"

      };
      const observer = new IntersectionObserver(handleIntersect, options);

      observer.observe(el);
    }

  if (!window["IntersectionObserver"]) {
    loadImage();
  } else {
    createObserver();
  }
}
})