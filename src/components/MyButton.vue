// week 3 challenge 2
<template>
  <button>
    {{ label }}
  </button>
</template>

<script setup>
defineProps({
  label: String,
  color: String,
  size: String,
  disabled: Boolean,
  onClick: Function,
  style: String
})
</script>
