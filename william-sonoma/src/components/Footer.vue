<template>
    <div>
      <footer id="appFooter">
        <div>
          <p>© {{ currentDate.getFullYear() }} - - Williams-Sonoma Inc., All Rights Reserved</p>
        </div>
      </footer>
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
#appFooter {
  background: #c7c0c0;
  height: 37px;
  color: #6f4e06;
  font-size: 12px;
  width: 100%;
  text-align: center;
  float: left;
  font-family: "Segoe UI";
}
.footer {
  height: 50px;
  width: 100%;
}
footer p {
  padding-top: 8.5px;
  margin-bottom: 0px;
}
</style>
