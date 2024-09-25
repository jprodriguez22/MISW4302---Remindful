<script setup>
import { onMounted, ref } from 'vue';
const history = ref([
    {
        id: 1,
        icon: 'mdi-library',
        time: '18:30',
        alarm: 'Practicar Noruego',
        date: 'jue, 22 ago',
        action: 'Descartado',
        category: 'Estudio'
    },
    {
        id: 2,
        icon: 'mdi-library',
        time: '18:25',
        alarm: 'Practicar Noruego',
        date: 'jue, 22 ago',
        action: 'Pospuesto',
        category: 'Estudio'
    },
    {
        id: 3,
        icon: 'mdi-library',
        time: '18:20',
        alarm: 'Practicar Noruego',
        date: 'jue, 22 ago',
        action: 'Pospuesto',
        category: 'Estudio'
    },
    {
        id: 4,
        icon: 'mdi-library',
        time: '18:15',
        alarm: 'Practicar Noruego',
        date: 'jue, 22 ago',
        action: 'Pospuesto',
        category: 'Estudio'
    },
    {
        id: 5,
        icon: 'mdi-library',
        time: '18:10',
        alarm: 'Practicar Noruego',
        date: 'jue, 22 ago',
        action: 'Pospuesto',
        category: 'Estudio'
    },
    {
        id: 6,
        icon: 'mdi-library',
        time: '18:05',
        alarm: 'Practicar Noruego',
        date: 'jue, 22 ago',
        action: 'Pospuesto',
        category: 'Estudio'
    },
    {
        id: 7,
        icon: 'mdi-library',
        time: '18:00',
        alarm: 'Practicar Noruego',
        date: 'jue, 22 ago',
        action: 'Pospuesto',
        category: 'Estudio'
    },
    {
        id: 8,
        icon: 'mdi-power-sleep',
        time: '22:00',
        alarm: 'Hora de dormir',
        date: 'jue, 22 ago',
        action: 'Confirmado',
        category: 'Despertador'
    },
    {
        id: 9,
        icon: 'mdi-power-sleep',
        time: '22:00',
        alarm: 'Hora de dormir',
        date: 'mie, 21 ago',
        action: 'Confirmado',
        category: 'Despertador'
    },
    {
        id: 10,
        icon: 'mdi-power-sleep',
        time: '22:00',
        alarm: 'Hora de dormir',
        date: 'mar, 20 ago',
        action: 'Confirmado',
        category: 'Despertador'
    },
])

const categories = ref(['Despertador', 'Estudio', 'Finanzas', 'Gimnasio', 'Medicina'])
const actions = ref(['Confirmado', 'Descartado', 'Pospuesto'])
const selectedCategory = ref(null)
const selectedAction = ref(null)
const searchName = ref(null)

const filteredHistory = computed(() => filterHistory());

onMounted(() => {
    filteredHistory.value = history.value
})

const filterHistory = () => {
    return history.value.filter(item => {
        const matchName = searchName.value ? item.alarm.toLowerCase().includes(searchName.value.toLowerCase()) : true;
        const matchAction = selectedAction.value ? item.action === selectedAction.value : true;
        const matchCategory = selectedCategory.value ? item.category === selectedCategory.value : true;
        return matchName && matchAction && matchCategory
    })
}


</script>

<template>
    <div class="menu-bar-content">
        <v-row align="center" no-gutters>
            <v-col cols="1"></v-col>
            <v-col cols="10" class="d-flex flex-column">
                <p class="title-text">Historial</p>
            </v-col>
            <v-col cols="1"></v-col>
        </v-row>
    </div>

    <div class="select-containers">
        <v-row align="center" no-gutters>
            <v-col cols="1"></v-col>
            <v-col cols="6">
                <v-text-field clearable label="Nombre" variant="underlined" color="text" base-color="text"
                    v-model="searchName"></v-text-field>
            </v-col>
            <v-col cols="2" class="px-10">
                <v-select clearable label="Categoría" :items="categories" variant="underlined"
                    v-model="selectedCategory"></v-select>
            </v-col>
            <v-col cols="2" class="px-10">
                <v-select clearable label="Acción" :items="actions" variant="underlined"
                    v-model="selectedAction"></v-select>
            </v-col>
            <v-col cols="1"></v-col>
        </v-row>
    </div>

    <div class="alarm-container">
        <div class="alarm-cards" v-for="alarm in filteredHistory">
            <v-row no-gutters justify="center">
                <v-col cols="8">
                    <v-card color="primary" height="140" align="center" elevation="4">
                        <v-row no-gutters align="center" class="card-body-row">
                            <v-col cols="2"><v-icon :icon="alarm.icon" color="text" size="80"></v-icon></v-col>
                            <v-col cols="2">
                                <v-row justify="start" no-gutters>
                                    <p class="body-text">{{ alarm.time }}</p>
                                </v-row>
                            </v-col>
                            <v-col cols="4"><v-row justify="start" no-gutters>
                                    <p class="body-text">{{ alarm.alarm }}</p>
                                </v-row></v-col>
                            <v-col cols="2"><v-row justify="start" no-gutters>
                                    <p class="body-text">{{ alarm.date }}</p>
                                </v-row></v-col>
                            <v-col cols="2">
                                <v-row no-gutters>
                                    <p class="body-text" justify="center">{{ alarm.action }}</p>
                                </v-row>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<style>
label {
    color: white;
}

.alarm-cards {
    margin-bottom: 40px;
}

.alarm-container {
    margin-top: 30px;
}

.group-actions {
    display: flex;
    justify-content: space-evenly;
}

.group-membership {
    display: flex;
}
</style>