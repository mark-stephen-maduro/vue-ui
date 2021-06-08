# Datepicker

NOTE on SSR: Need to import the datepicker component in async manner because it needs to access Brower API.

### Basic Usage

```html
<template>
  <InfopiphanyDatePicker v-model="selectedDate" />
</template>
<script>
  export default {
    data() {
      return {
        selectedDate: null,
      };
    },
  };
</script>
```

### Custom Format

The custom format only affects the display value and does not reflect the actual value.

```html
<InfopiphanyDatePicker v-model="selectedDate" format="YYYY-MMM-DD" />
<p>Selected Date: {{ selectedDate }}</p>
```

### With custom target

To change the field that the datepicker uses, specify a `target`, also you can specify a `container` to avoid positioning errors.

```html
<template>
  <div class="dropdown">
    <button id="target1" class="dropdown-menu-toggle" type="button">
      <span class="dropdown-toggle-text">
        Start date: {{ maDate }}
      </span>
    </button>
    <InfopiphanyDatePicker
      v-model="selectedDate"
      target="#target1"
      container="#target"
    />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selectedDate: null,
      };
    },
    computed: {
      maDate() {
        return moment(this.selectedDate).format('L');
      },
    },
  };
</script>
```

## Component Reference

Importing as vue component

```js
import { InfopiphanyDatePicker } from '@infopiphany/infopiphany-ui';
Vue.component('InfopiphanyDatePicker', InfopiphanyDatePicker);
```
