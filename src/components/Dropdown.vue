<template>
  <div class="dropdown">
    <a
      class="btn btn-secondary dropdown-toggle"
      href="#"
      role="button"
      id="dropdownMenuLink"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
      @click.prevent="downstatus"
    >{{title}}</a>

    <div
      class="dropdown-menu"
      aria-labelledby="dropdownMenuLink"
      :style="{display:'block'}"
      v-if="isOpen"
    >
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'Dropdown',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup () {
    const isOpen = ref(false)
    const downstatus = () => {
      isOpen.value = !isOpen.value
    }
    return {
      isOpen,
      downstatus
    }
  }
})
</script>
