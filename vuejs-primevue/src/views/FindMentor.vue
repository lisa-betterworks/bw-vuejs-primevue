<template>
  <div class="find">
    <div op80 text-lg fw300 m1 w100>
      <h1>Find a Betterworks Mentor</h1>
    </div>
    <div op30 text-lg fw300 m1>
      <span class="p-float-label">
        <InputText id="search" type="text" />
        <label for="search">Search</label>
      </span>
      <Button label="Search" />
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .find {
    min-height: 100vh;
    display: flex;
    align-items: center;
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
