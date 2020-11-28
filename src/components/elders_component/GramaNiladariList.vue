<template>
        <b-colxx xxs="12" xs="6" lg="4">
        <router-link tag="a" :to="detailPath">
          <b-card class="mb-4" no-body>
            <div class="position-relative">
              <img src="/assets/img/profiles/4.jpg" class="card-img-top" />
            </div>
            <b-card-body>
              <h6 class="lead text-large text-center">{{ data.name }}</h6>
              <p class="card-text text-center  mb-0 font-weight-semibold">{{ data.phone }}</p>
              <p class="card-text text-center  mb-0 font-weight-semibold">{{ data.email }}</p>
            </b-card-body>
          </b-card>
        </router-link>
        </b-colxx>
</template>
<script>

    export default {
        props: ["data", "detailPath"],
    }
</script>


