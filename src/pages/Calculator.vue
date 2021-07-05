<template>
    <section class="flex w-full">
        <div class="m-auto">
            <h1 class="text-4xl text-center">Calculator</h1>
            <div class="my-5 p-2 w-full border">
                <p class="text-3xl text-right h-16" style="direction: rtl">{{currentNum}}</p>
                <div class="h-5 text-right text-lg">
                    <small v-if="selectedOperation">
                        {{ prevNum }} {{ selectedOperation }} {{ currentNum }}
                    </small>
                </div>
            </div>
            <div class="grid grid-cols-4 gap-2">
                <button @click="pressed('1')" class="p-2 w-20 h-20 border rounded shadow-md text-2xl">1</button>
                <button @click="pressed('2')" class="p-2 w-20 h-20 border rounded shadow-md text-2xl">2</button>
                <button @click="pressed('3')" class="p-2 w-20 h-20 border rounded shadow-md text-2xl">3</button>
                <button @click="pressed('+')" class="p-2 w-20 h-20 border rounded shadow-md text-2xl">+</button>
                <button @click="pressed('4')" class="p-2 w-20 h-20 border rounded shadow-md text-2xl">4</button>
                <button @click="pressed('5')" class="p-2 w-20 h-20 border rounded shadow-md text-2xl">5</button>
                <button @click="pressed('6')" class="p-2 w-20 h-20 border rounded shadow-md text-2xl">6</button>
                <button @click="pressed('-')" class="p-2 w-20 h-20 border rounded shadow-md text-2xl">-</button>
                <button @click="pressed('7')" class="p-2 w-20 h-20 border rounded shadow-md text-2xl">7</button>
                <button @click="pressed('8')" class="p-2 w-20 h-20 border rounded shadow-md text-2xl">8</button>
                <button @click="pressed('9')" class="p-2 w-20 h-20 border rounded shadow-md text-2xl">9</button>
                <button @click="pressed('*')" class="p-2 w-20 h-20 border rounded shadow-md text-2xl">*</button>
                <button @click="pressed('c')" class="p-2 w-20 h-20 border rounded shadow-md text-2xl">C</button>
                <button @click="pressed('0')" class="p-2 w-20 h-20 border rounded shadow-md text-2xl">0</button>
                <button @click="pressed('=')" class="p-2 w-20 h-20 border rounded shadow-md text-2xl">=</button>
                <button @click="pressed('/')" class="p-2 w-20 h-20 border rounded shadow-md text-2xl">/</button>
            </div>
        </div>
    </section>
</template>

<script>
import {ref} from 'vue';
import useWindowEvent from "../utilities/hooks/useWindowEvent";
export default {
    setup() {
    const operations = ["+", "-", "*", "/"];
    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    const currentNum = ref("");
    const prevNum = ref("");
    const selectedOperation = ref("");

    function pressed(value) {
      if (value === "=" || value === "Enter") calculate();
      else if (value === "c") clear();
      else if (operations.includes(value)) applyOperation(value);
      else if (numbers.includes(value)) appendNumber(value);
    }

    function appendNumber(value) {
      currentNum.value = currentNum.value + value;
    }

    function applyOperation(value) {
      calculate();
      prevNum.value = currentNum.value;
      currentNum.value = "";
      selectedOperation.value = value;
    }

    function calculate() {
      if (selectedOperation.value === "*") multiply();
      else if (selectedOperation.value === "/") divide();
      else if (selectedOperation.value === "-") subtract();
      else if (selectedOperation.value === "+") sum();

      prevNum.value = "";
      selectedOperation.value = "";
    }

    function multiply() {
      currentNum.value = prevNum.value * currentNum.value;
    }
    function divide() {
      currentNum.value = prevNum.value / currentNum.value;
    }
    function subtract() {
      currentNum.value = prevNum.value - currentNum.value;
    }
    function sum() {
      currentNum.value = +prevNum.value + +currentNum.value;
    }

    const clear = () => (currentNum.value = "");

    const handleKeydown = (e) => pressed(e.key);
    useWindowEvent("keydown", handleKeydown);

    return { currentNum, pressed, selectedOperation, prevNum };
  },
}
</script>

<style>

</style>