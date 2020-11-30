<template>
  <div>
          <user-card-elder></user-card-elder>

          <b-row  >
                    
          </b-row>
        <b-row >
          
          <b-colxx lg="4" xl="12" class="mb-4" >
            <b-alert show variant="danger" v-if="EApplicationStatus.correction">{{ $t(EApplicationStatus.correction) }}</b-alert>
            <gradient-with-radial-progress-card
              icon="iconsminds-bell"
              :title="$t(EApplicationStatus.title)"
              :detail="$t(Dfunc)"
              :percent="EApplicationStatus.presentage"
              :progressText="`${EApplicationStatus.presentage}%`"
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
   data() {
    return {
      title:"elder.gramaniladhari"
    }
    },
  components: {
   "user-card-elder": UserCardElder,
   "gradient-with-radial-progress-card": GradientWithRadialProgressCard
  },
  computed: {
    ...mapGetters(["EApplicationStatus"]),
    Dfunc: function () {
      if(this.EApplicationStatus.correction){
        return "elder.waiting-for-resubmit"
      }
      return "elder.waiting-for-approval"
    }
	},
  methods: {
    ...mapActions(["getApplicationStatus"]),
  },
  mounted() {
    this.getApplicationStatus();
  }
};
</script>