<template>
  <div>
    <div class="d-flex ">
      <InfopiphanyDatePicker v-model="selectedDate[1]" format="YYYY-MMM-DD" />
      <p>Selected Date: {{ selectedDate[1] }}</p>
    </div>

    <div class="d-flex  ">
      <InfopiphanyDatePicker v-model="selectedDate[0]" />
      <p>Selected Date: {{ selectedDate[0] }}</p>
    </div>

    <div class="dropdown">
      <button id="target1" class="dropdown-menu-toggle" type="button">
        <span class="dropdown-toggle-text">
          Start date: {{ formattedDate }}
        </span>
      </button>
      <InfopiphanyDatePicker
        v-model="selectedDate[2]"
        target="#target1"
        container="#target"
      />
    </div>
  </div>
</template>

<script>
import moment from 'moment';
export default {
  data() {
    return {
      selectedDate: [],
    };
  },
  computed: {
    formattedDate() {
      return moment(this.selectedDate[2]).format('L');
    },
  },
};
</script>
