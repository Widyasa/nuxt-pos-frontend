<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import { useField } from "vee-validate";

const props = defineProps({
  inputTitle: String,
  inputName: String,
  inputPlaceholder: String,
  inputType: String,
  modelValue: { type: [String, Number], default: null },
  customClass: [String],
  options: { default: () => [] },
  optionLabel: String,
  optionValue: [String, Number],
  disabled: Boolean,
});

const selectValue = ref(props.modelValue);
const { field, setValue, errorMessage, meta } = useField(props.inputName, undefined, {
  validateOnMount: false,
  validateOnBlur: true,
  validateOnChange: true,
  validateOnInput: true
});

// Initialize field value on mount
onMounted(() => {
  setValue(selectValue.value);
});

// Watch for changes in modelValue and update selectValue and field.value
watch(
    () => props.modelValue,
    (newValue) => {
      selectValue.value = newValue;
      setValue(newValue);
    }
);

// Emit updated value and update vee-validate field value
function updateValue(event) {
  const value = event.value;
  selectValue.value = value;
  setValue(value);
  emit("update:modelValue", value);
}
</script>

<template>
  <div class="flex flex-col gap-1 w-full">
    <label :for="props.inputName">{{ props.inputTitle }}</label>
    <VeeField :name="props.inputName" v-slot="{ field }">
      <Select
          v-bind="field"
          :model-value="selectValue"
          :options="props.options"
          :option-label="props.optionLabel"
          :option-value="props.optionValue"
          filter
          :placeholder="props.inputPlaceholder"
          class="w-full input-text text-sm p-1"
          @change="updateValue"
          @input="updateValue"
      />
    </VeeField>
    <!-- Error message display only if field is touched -->
    <vee-error-message v-if="meta.touched" :name="props.inputName" class="text-red-500 text-[13px]" />
  </div>
</template>

<style scoped>
</style>
