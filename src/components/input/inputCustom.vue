<template>
  <div>
    <label :for="placeholder" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{
        label
      }}</label>
    <input :type="type" :id="placeholder"
           :value="modelValue"
           @input="$emit('update:modelValue', $event.target.value)"
           class="bg-gray-50 border border-gray-300
           text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
           dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
           :placeholder="placeholder" :required="isRequired">
  </div>
</template>

<script setup>
defineEmits(['update:modelValue'])
defineProps({
  modelValue: {},
  placeholder: String,
  type: String,
  isRequired: {
    type: Boolean,
    default() {
      return true;
    }
  },
  label: String,
});
</script>

<style scoped>

</style>