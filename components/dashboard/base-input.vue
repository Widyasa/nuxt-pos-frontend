<script setup lang="ts">
import {useField} from "vee-validate";

const props = defineProps({
  'inputTitle' : String,
  'inputName' : String,
  'inputStep' : String,
  'inputPlaceholder' : String,
  'inputType' : String,
  'modelValue' : [String, Number],
  'customClass': [String],
  'readOnly' : Boolean,
  'required' : Boolean
})
function preventScrollChange(event:any) {
  event.preventDefault();
}
const name = toRef(props, 'name');
const {
  value: modelValue,
  errorMessage,
} = useField(name, undefined, {
  initialValue: props.value,
});
</script>

<template>
  <div class="flex flex-col gap-1 w-full">
    <label :for="props.inputName">{{props.inputTitle}}</label>
    <input :step="inputStep" @wheel="preventScrollChange" :required="props.required" :readonly="props.readOnly" :class="props.customClass" :name="props.inputName" :type="props.inputType" class="input-text" :placeholder="props.inputPlaceholder" :value="props.modelValue" @input="$emit('update:modelValue', $event.target.value)">
    <p class="help-message" v-show="errorMessage">
      {{ errorMessage }}
    </p>
  </div>
</template>

<style scoped>

</style>