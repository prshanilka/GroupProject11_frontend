<template>
  <div>
          <user-card-elder></user-card-elder>
          <div>{{ EApplicationStatus }}</div>
        <b-row>
          <b-colxx lg="4" xl="12" class="mb-4">
            <gradient-with-radial-progress-card
              icon="iconsminds-bell"
              :title="`4 ${$t('dashboards.alerts')}`"
              :detail="$t('dashboards.waiting-for-notice')"
              :percent="1*100/10"
              progressText="0"
            />
          </b-colxx>
        </b-row>


  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import UserCardElder from "../../../containers/elder/UserCardElder";
import GradientWithRadialProgressCard from "../../../components/Cards/GradientWithRadialProgressCard";
export default {
  components: {
   "user-card-elder": UserCardElder,
   "gradient-with-radial-progress-card": GradientWithRadialProgressCard

  },
  computed: {
    ...mapGetters(["EApplicationStatus"])
	},
  methods: {
    ...mapActions(["getApplicationStatus"]),
  },
  mounted() {
    this.getApplicationStatus();
  }
};
</script>
