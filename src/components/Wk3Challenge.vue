<script setup>
import CustomButton from './CustomButton.vue'
import PrimevueTesting from './icons/PrimevueTesting.vue'
</script>

<template>
  <p style="padding-top: 30px">//Challenge</p>
  <CustomButton
    label="BootstrapComponentButton"
    color="primary"
    size="small"
    disabled
    btnStyle="filled"
    @click="onClick"
  />
  <PrimevueTesting />
</template>
