<template>
  <div>

          <user-card-elder></user-card-elder>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import UserCardElder from "../../../containers/elder/UserCardElder";
export default {
  components: {
   "user-card-elder": UserCardElder
  }
};
</script>
