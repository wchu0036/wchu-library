// week 3 challenge 1
<template>
  <button :class="['btn', colorClass, sizeClass]" :disabled="disabled" @click="onClick">
    {{ label }}
  </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  label: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: 'primary'
  },
  size: {
    type: String,
    default: 'medium'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  btnStyle: {
    type: String,
    default: 'filled'
  },
  onClick: {
    type: Function,
    default: () => {}
  }
})

const sizeClass = computed(() => {
  if (props.size) {
    return props.size === 'small' ? 'btn-sm' : props.size === 'large' ? 'btn-lg' : 'btn-md'
  }
  return 'btn-md'
})

const colorClass = computed(() => {
  return props.btnStyle === 'outlined' ? 'btn-outline-' + props.color : 'btn-' + props.color
})
</script>
