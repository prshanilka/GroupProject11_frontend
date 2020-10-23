<template>
  <div class="icon-cards-row">
    <glide-component :settings="glideIconsOption">
      <icon-card :title="$t('dashboards.pending-orders')" icon="iconsminds-clock" :value="14" />
      <icon-card
        :title="$t('dashboards.completed-orders')"
        icon="iconsminds-basket-coins"
        :value="32"
      />
      <icon-card
        :title="$t('dashboards.refund-requests')"
        icon="iconsminds-arrow-refresh"
        :value="74"
      />
      <icon-card :title="$t('dashboards.new-comments')" icon="iconsminds-mail-read" :value="25" />
    </glide-component>
  </div>
</template>
<script>
import GlideComponent from "../../components/Carousel/GlideComponent";
import IconCard from "../../components/Cards/IconCard";

export default {
  components: {
    "glide-component": GlideComponent,
    "icon-card": IconCard
  },
  data() {
    return {
      glideIconsOption: {
        gap: 5,
        perView: 4,
        type: "carousel",
        breakpoints: {
          320: {
            perView: 1
          },
          576: {
            perView: 2
          },
          1600: {
            perView: 3
          },
          1800: {
            perView: 4
          }
        },
        hideNav: true
      }
    };
  }
};
</script>
