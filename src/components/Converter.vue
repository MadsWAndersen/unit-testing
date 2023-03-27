<template>
    <div class="converter-container">
        <h1 class="title">Unit Converter</h1>
        <div class="input-container">
            <input class="input-field" type="number" v-model.number="inputVal" />
            <select class="unit-dropdown" v-model="inputUnit">
                <option value="mm">mm</option>
                <option value="cm">cm</option>
                <option value="m">m</option>
                <option value="km">km</option>
                <option value="C">C</option>
                <option value="K">K</option>
                <option value="F">F</option>
                <option value="min">min</option>
                <option value="sek">sek</option>
                <option value="timer">timer</option>
            </select>
        </div>
        <div class="output-container">
            <input class="output-field" type="number" :value="outputVal" readonly />
            <select class="unit-dropdown" v-model="outputUnit">
                <option value="mm">mm</option>
                <option value="cm">cm</option>
                <option value="m">m</option>
                <option value="km">km</option>
                <option value="C">C</option>
                <option value="K">K</option>
                <option value="F">F</option>
                <option value="min">min</option>
                <option value="sek">sek</option>
                <option value="timer">timer</option>
            </select>
        </div>
    </div>
</template>
  
<script setup>
import { ref, watch } from 'vue';

const inputVal = ref(0);
const inputUnit = ref('mm');
const outputVal = ref(0);
const outputUnit = ref('mm');

function convert() {
    switch (inputUnit.value) {
        case 'mm':
            switch (outputUnit.value) {
                case 'mm':
                    outputVal.value = inputVal.value;
                    break;
                case 'cm':
                    outputVal.value = inputVal.value / 10;
                    break;
                case 'm':
                    outputVal.value = inputVal.value / 1000;
                    break;
                case 'km':
                    outputVal.value = inputVal.value / 1000000;
                    break;
            }
            break;
        case 'cm':
            switch (outputUnit.value) {
                case 'mm':
                    outputVal.value = inputVal.value * 10;
                    break;
                case 'cm':
                    outputVal.value = inputVal.value;
                    break;
                case 'm':
                    outputVal.value = inputVal.value / 100;
                    break;
                case 'km':
                    outputVal.value = inputVal.value / 100000;
                    break;
            }
            break;
        case 'm':
            switch (outputUnit.value) {
                case 'mm':
                    outputVal.value = inputVal.value * 1000;
                    break;
                case 'cm':
                    outputVal.value = inputVal.value * 100;
                    break;
                case 'm':
                    outputVal.value = inputVal.value;
                    break;
                case 'km':
                    outputVal.value = inputVal.value / 1000;
                    break;
            }
            break;
        case 'km':
            switch (outputUnit.value) {
                case 'mm':
                    outputVal.value = inputVal.value * 1000000;
                    break;
                case 'cm':
                    outputVal.value = inputVal.value * 100000;
                    break;
                case 'm':
                    outputVal.value = inputVal.value * 1000;
                    break;
                case 'km':
                    outputVal.value = inputVal.value;
                    break;
            }
            break;
        case 'C':
            switch (outputUnit.value) {
                case 'C':
                    outputVal.value = inputVal.value;
                    break;
                case 'K':
                    outputVal.value = inputVal.value + 273.15;
                    break;
                case 'F':
                    outputVal.value = (inputVal.value * 9 / 5) + 32;
                    break;
            }
            break;
        case 'K':
            switch (outputUnit.value) {
                case 'C':
                    outputVal.value = inputVal.value - 273.15;
                    break;
                case 'K':
                    outputVal.value = inputVal.value;
                    break;
                case 'F':
                    outputVal.value = (inputVal.value - 273.15) * 9 / 5 + 32;
                    break;
            }
            break;
        case 'F':
            switch (outputUnit.value) {
                case 'C':
                    outputVal.value = (inputVal.value - 32) * 5 / 9;
                    break;
                case 'K':
                    outputVal.value = (inputVal.value - 32) * 5 / 9 + 273.15;
                    break;
                case 'F':
                    outputVal.value = inputVal.value;
                    break;
            }
            break;
        case 'min':
            switch (outputUnit.value) {
                case 'min':
                    outputVal.value = inputVal.value;
                    break;
                case 'sek':
                    outputVal.value = inputVal.value * 60;
                    break;
                case 'timer':
                    outputVal.value = inputVal.value / 60;
                    break;
            }
            break;
        case 'sek':
            switch (outputUnit.value) {
                case 'min':
                    outputVal.value = inputVal.value / 60;
                    break;
                case 'sek':
                    outputVal.value = inputVal.value;
                    break;
                case 'timer':
                    outputVal.value = inputVal.value / 3600;
                    break;
            }
            break;
        case 'timer':
            switch (outputUnit.value) {
                case 'min':
                    outputVal.value = inputVal.value * 60;
                    break;
                case 'sek':
                    outputVal.value = inputVal.value * 3600;
                    break;
                case 'timer':
                    outputVal.value = inputVal.value;
                    break;
            }
            break;
    }
}

watch(
    [inputVal, inputUnit, outputUnit],
    () => {
        convert();
    },
    { deep: true }
);
</script>

<style scoped>
.converter-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
}

.title {
    font-size: 32px;
    margin-bottom: 20px;
}

.input-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
}

.input-field {
    padding: 10px;
    font-size: 20px;
    margin-right: 10px;
}

.output-container {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.output-field {
    padding: 10px;
    font-size: 20px;
    margin-right: 10px;
    background-color: #f2f2f2;
    border: none
}

.select-container {
    display: flex;
    flex-direction: column;
    margin-right: 10px;
}

.select-label {
    font-size: 16px;
    margin-bottom: 5px;
}

.select-field {
    padding: 10px;
    font-size: 16px;
}

.button-container {
    margin-top: 20px;
}

.convert-button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #4caf50;
    color: white;
    border: none;
    cursor: pointer;
}

.convert-button:hover {
    background-color: #3e8e41;
}

@media screen and (max-width: 600px) {

    .input-container,
    .output-container {
        flex-direction: column;
        align-items: flex-start;
    }
}
</style>
