<template>
  <section class="contacts">
    <div class="container">
      <div class="row justify-content-center align-items-center">
        <div class="col-md-10">
          <div class="contacts__title">
            <h3> YOYO STUDIO </h3>
            <p>
              Минск, ул. Октябрьская 16/20, 2 этаж 
              <br> <span>+375298692000</span>
              <br> hello@yoyostudio.by
            </p>
            <p>&nbsp;</p>
            <p>
              <span>
              Работаем по предварительной записи
              всю неделю кроме субботы
              </span>
            </p>
            <p>&nbsp;</p>
            <p>
              Здание находится на улице Октябрьская
              Вход около Moby Dick cafe
            </p>
            <div class="contacts-icons">
              <a
                href="https://www.instagram.com/yoyo.studio/"
                target="_blank"
              >
                <i class="contacts-icons__instagram"/>
              </a>
              <a
                href="https://vk.com/yoyostudio"
                target="_blank"
              >
                <i class="contacts-icons__vk"/>
              </a>
              <a
                href="https://www.facebook.com/yoyostudio.minsk/?_rdc=1&_rdr"
                target="_blank"
              >
                <i class="contacts-icons__facebook"/>
              </a>
              <a
                href="https://www.youtube.com/channel/UCDQN41t0B47YKJvp3Xy7K9w"
                target="_blank"
              >
                <i class="contacts-icons__youtube"/>
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-1"></div>
        <div class="col-md-10">
          <div class="contatcts__map">
            <ImageItem
              url="/images/contatcts/contatcts-1.jpeg"
              width="500"
              height="500"
            />
          </div>
        </div>
      </div>
      <div class="contacts__google-map">
        <iframe
          style="width:100%; height:100%; border:0;"
          loading="lazy"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAlb21YToNOBTdDpv1ozMIwvPIElV3JoU0&amp;q=53.8909474,27.5713973&amp;center=53.8909474,27.5713973&amp;zoom=16">
        </iframe>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {
    ImageItem: () => import('../components/Image-item'),
  }
}
</script>