<template>
  <div class="Dash">
    <AdminDash/>
  </div>
</template>

<script>
// @ is an alias to /src
import AdminDash from '@/components/AdminDash.vue'


export default {
  name: 'Dash',
  components: {
    AdminDash,

  }
}
</script>
