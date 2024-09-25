<template>
  <v-layout>
    <v-navigation-drawer v-model="drawer" temporary :width="currentWidth / 4" class="bg-background">
      <div class="sidebar-body">

        <div class="sidebar-body-title-div">
          <v-row no-gutters class="sidebar-body-title" align="center">
            <v-col cols="3" align="center"><v-img :width="60" aspect-ratio="1/1" cover src="/Logo.png"></v-img></v-col>
            <v-col cols="6" align="center">
              <p class="title-text" style="font-weight: 500;">Remindful</p>
            </v-col>
            <v-col cols="3" align="center"><v-btn icon="mdi-close" rounded="lg" variant="elevated" size="48"
                color="white" @click.stop="drawer = !drawer"></v-btn></v-col>
          </v-row>
        </div>

        <div class="navigation-section">
          <v-row no-gutters align="center">
            <router-link to="/">
              <v-btn rounded="lg" variant="elevated" size="48" color="white">
                <v-icon icon="mdi-home" color="primary" size="40" />
              </v-btn>
            </router-link>
            <p class="body-text sidebar-category">Inicio</p>
          </v-row>
        </div>

        <div class="navigation-section">
          <v-row no-gutters align="center">
            <v-btn rounded="lg" variant="elevated" size="48" color="white">
              <v-icon icon="mdi-alarm-plus" color="primary" size="40" />
            </v-btn>
            <p class="body-text sidebar-category">Crear alarma remota</p>
          </v-row>
        </div>

        <div class="navigation-section">
          <v-row no-gutters align="center">
            <router-link to="/groups">
              <v-btn rounded="lg" variant="elevated" size="48" color="white">
                <v-icon icon="mdi-account-group" color="primary" size="40" />
              </v-btn>
            </router-link>
            <p class="body-text sidebar-category">Grupos</p>
          </v-row>
        </div>

        <div class="navigation-section">
          <v-row no-gutters align="center">
            <v-btn rounded="lg" variant="elevated" size="48" color="white">
              <v-icon icon="mdi-history" color="primary" size="40" />
            </v-btn>
            <p class="body-text sidebar-category">Historial</p>
          </v-row>
        </div>

        <v-divider /><br />

        <div class="navigation-section">
          <v-row no-gutters align="center">
            <v-icon icon="mdi-shape" color="text" size="48"></v-icon>
            <p class="body-text sidebar-category">Categorías</p>
          </v-row>
        </div>

        <div class="navigation-category-section">
          <v-row no-gutters align="center">
            <v-btn rounded="lg" variant="elevated" size="48" color="white">
              <v-icon icon="mdi-power-sleep" color="primary" size="40" />
            </v-btn>
            <p class="body-text sidebar-category">Despertador</p>
          </v-row>
        </div>

        <div class="navigation-category-section">
          <v-row no-gutters align="center">
            <v-btn rounded="lg" variant="elevated" size="48" color="white">
              <v-icon icon="mdi-library" color="primary" size="40" />
            </v-btn>
            <p class="body-text sidebar-category">Estudio</p>
          </v-row>
        </div>

        <div class="navigation-category-section">
          <v-row no-gutters align="center">
            <v-btn rounded="lg" variant="elevated" size="48" color="white">
              <v-icon icon="mdi-currency-usd" color="primary" size="40" />
            </v-btn>
            <p class="body-text sidebar-category">Finanzas</p>
          </v-row>
        </div>

        <div class="navigation-category-section">
          <v-row no-gutters align="center">
            <v-btn rounded="lg" variant="elevated" size="48" color="white">
              <v-icon icon="mdi-dumbbell" color="primary" size="40" />
            </v-btn>
            <p class="body-text sidebar-category">Gimnasio</p>
          </v-row>
        </div>

        <div class="navigation-category-section">
          <v-row no-gutters align="center">
            <v-btn rounded="lg" variant="elevated" size="48" color="white">
              <v-icon icon="mdi-mortar-pestle-plus" color="primary" size="40" />
            </v-btn>
            <p class="body-text sidebar-category">Medicina</p>
          </v-row>
        </div>

      </div>
    </v-navigation-drawer>
  </v-layout>

  <div class="menu-bar">
    <v-row align="center" no-gutters>
      <v-col cols="1">
        <v-btn icon="mdi-menu" rounded="0" variant="elevated" id="menu-button" size="50" color="white"
          @click.stop="drawer = !drawer"></v-btn>
      </v-col>
    </v-row>
  </div>
  <v-row>
    <v-col>
      <router-view />
    </v-col>
  </v-row>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const drawer = ref(null)
const currentWidth = ref(window.innerWidth)

const updateWindowSize = () => {
  currentWidth.value = window.innerWidth;
};


onMounted(() => {
  window.addEventListener('resize', updateWindowSize);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateWindowSize);
});
</script>

<style>
body {
  background-color: #2E3440;
}

p {
  color: white;
}

.clock-text {
  font-size: 96px;
}

.title-text {
  font-size: 34px;
}

.body-text {
  font-size: 24px;
}

.menu-bar {
  margin-top: 40px;
  margin-bottom: 40px;
  text-align: center;
}

.navigation-section {
  margin-bottom: 20px;
  margin-left: 20px;
}

.navigation-category-section {
  margin-bottom: 20px;
  margin-left: 60px;
}

.sidebar-body-title {
  margin-top: 30px !important;
}

.sidebar-body-title-div {
  margin-bottom: 40px !important;
}

.sidebar-category {
  margin-left: 20px;
}

.subtitle-text {
  font-size: 20px;
}

#menu-button {
  z-index: 10;
}
</style>