<template>
  <div class="notes">
    <div class="note-header">
      <p>{{note.title}}</p>
      <p class="cross" style="cursor: pointer" @click="console.log('remove note')">x</p>
    </div>
    <div class="note-body">
      <p>{{note.description}}</p>
      <span>{{note.date}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    note: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss">
.notes {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 40px 0;
}
.note {
  width: 48%;
  padding: 18px 20px;
  margin-bottom: 20px;
  background-color: #fff;
  // border: solid;
  // border-color: #494ce8;

  &.full {
    width: 100%;
  }
  &.red {
    border: solid;
    border-color: rgb(255, 0, 0);
  }

  &.blue {
    border: solid;
    border-color: rgb(206, 29, 212);
  }
  &.green {
    border: solid;
    border-color: rgb(138, 124, 124);
  }
}

.note-body {
  p {
    margin: 20px 0px;
  }
  span {
    font-size: 14px;
    color: #999999;
  }
}
.note-header {
  display: flex;
  text-align: center;
  justify-content: space-between;

  p {
    font-size: 22px;
    color: rgb(45, 30, 255);
  }
}



svg {
  margin-right: 12px;
  color: #999999;
  &.active {
    color: blue;
  }

  &:last-child {
    margin-right: 0;
  }
}
</style>