<template>
  <div >
    <a href="#" @click="gotoSignupComponent">
      <slot></slot>
    </a>
  </div>
</template>
<script>
export default {
  name: loginSignupLink,
  data: function data() {
    return {

    }
  },
  methods:{
    gotoSignupComponent(){
      this.$router.push('/');
    }
  }
}
</script>
<style>
</style>
