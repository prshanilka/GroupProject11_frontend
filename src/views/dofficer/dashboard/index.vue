<template>
  <div>
          <user-card-elder></user-card-elder>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import UserCardElder from "../../../containers/elder/UserCardElder";
export default {

  components: {
   "user-card-elder": UserCardElder,
  },
  computed: {
  

	},
  methods: {
    
  },
  mounted() {
  }
};
</script>
