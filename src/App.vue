<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
<div class="w-100 d-flex justify-content-center">
  <RouterView />
</div>
</template>

<style lang="scss">
@mixin kalameh-font-face() {
    @font-face {
      font-family: "Kalameh";
      font-weight: 400;
      src: url("../fonts/Kalameh/Kalameh-Regular.ttf") format("truetype");
    };
    @font-face {
      font-family: "Kalameh";
      font-weight: 500;
      src: url("../fonts/Kalameh/Kalameh-Medium.ttf") format("truetype");
    };
    @font-face {
      font-family: "Kalameh";
      font-weight: 700;
      src: url("../fonts/Kalameh/Kalameh-Bold.ttf") format("truetype");
    };
}
@mixin kalameh-farsi-number-font-face() {
  @font-face {
      font-family: "KalamehFarsiNumber";
      font-weight: 400;
      src: url("../fonts/Kalameh/Kalameh(FaNum)-Regular.ttf") format("truetype");
  };
  @font-face {
      font-family: "KalamehFarsiNumber";
      font-weight: 500;
      src: url("../fonts/Kalameh/Kalameh(FaNum)-Medium.ttf") format("truetype");
  };
  @font-face {
      font-family: "KalamehFarsiNumber";
      font-weight: 700;
      src: url("../fonts/Kalameh/Kalameh(FaNum)-Bold.ttf") format("truetype");
  };
}
* {
  font-family: 'Kalameh';
  font-style: normal;
}
</style>
