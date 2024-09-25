<script setup>
import { ref } from 'vue';
const drawer = ref(null)
const setAlarms = ref([
  {
    id: 1,
    title: "Gimnasio",
    time: "18:30",
    date: "vie, 11 oct",
    icon: "mdi-dumbbell",
    category: "Entrenamiento",
    switchState: true,
  },
  {
    id: 2,
    title: "Practicar Noruego",
    time: "18:00",
    date: "L, M, X, J, V",
    icon: "mdi-library",
    category: "Estudio",
    switchState: false,
  },
  {
    id: 3,
    title: "Hora de dormir",
    time: "22:00",
    date: "L, M, X, J",
    icon: "mdi-power-sleep",
    category: "Despertador",
    switchState: true,
  },
])
</script>

<template>
  <div class="menu-bar-content">
    <v-row align="center" no-gutters>
      <v-col cols="1"></v-col>
      <v-col cols="10" class="d-flex flex-column">
        <v-text-field hide-details="auto" color="white" variant="solo" placeholder="Buscar alarma por nombre"></v-text-field>
      </v-col>
      <v-col cols="1"></v-col>
    </v-row>
  </div>

  <div class="title-row">
    <v-row no-gutters justify="center">
      <p class="title-text">Alarmas</p>
    </v-row>
  </div>

  <div class="alarm-cards" v-for="alarm in setAlarms">
    <v-row no-gutters justify="center">
      <v-col cols="8">
        <v-card color="primary" height="140" align="center" elevation="4">
          <v-row no-gutters align="center" class="card-body-row">
            <v-col cols="2"><v-icon :icon="alarm.icon" color="text" size="80"></v-icon></v-col>
            <v-col cols="2">
              <p class="body-text">{{ alarm.time }}</p>
            </v-col>
            <v-col cols="4"><v-row justify="start" no-gutters>
              <p class="body-text">{{ alarm.title }}</p>
            </v-row></v-col>
            <v-col cols="2">
              <p class="body-text">{{ alarm.date }}</p>
            </v-col>
            <v-col cols="2"><v-row justify="center" no-gutters><v-switch color="accent" hide-details
                  :model-value="alarm.switchState"></v-switch></v-row></v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>

</template>

<style>
.alarm-cards {
  margin-bottom: 40px;
}

.card-body-row {
  height: 100%;
}

.menu-bar-content {
  position: absolute;
  top: 40px;
  text-align: center;
  max-height: 40px;
  width: 100%
}

.v-field__field, .v-field__input {
  max-height: 50px; /* Ensures the input control height */
}

.title-row {
  margin-bottom: 40px;
}

#menu-button {
  border-radius: 5px !important;
}
</style>
