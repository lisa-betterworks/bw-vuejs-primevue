<template>
  <div class="wrapper">
    <div text-lg fw300>
      <h1>Find a Betterworks Mentor</h1>
    </div>
    <div text-lg fw300>
      <span class="p-float-label">
        <InputText id="search" type="text" />
      </span>
      <Button label="Search" />
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>

<script lang="ts">
export default {
  data() {
    return {};
  },
  method() {},
};
</script>
