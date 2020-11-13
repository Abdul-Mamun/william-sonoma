<template>
    <div class="header">
      <div id="header-bar">
        <b-navbar fixed="top" class="head-bar" toggleable="lg" type="dark">
          <b-navbar-brand class="logo-brnd">
            <img class="logo-ws" src="../assets/williams-s.png" />
          </b-navbar-brand>
        </b-navbar>
      </div>
    </div>
</template>

<script>
export default {
  data: function() {
    return {
      currentDate: new Date()
    };
  }
};
</script>

<style scoped>
.header {
  height: 100px;
  width: 100%;
}
.head-bar {
  height: 70px;
  background: #c7c0c0;
  opacity: 1;
  z-index: 1;
}
.logo-brnd {
  text-align: center;
  width: 100%;
}
.logo-ws {
  width: 200px;
  opacity: 1;
}
</style>