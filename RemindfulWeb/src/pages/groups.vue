<script setup>
import { ref } from 'vue';
const groups = ref([
    {
        id: 1,
        membership: 'Administrador',
        groupName: 'Familia Suarez',
        members: 6,
        bellIcon: 'mdi-bell'
    },
    {
        id: 2,
        membership: 'Miembro',
        groupName: 'Entrenamiento calistenia',
        members: 20,
        bellIcon: 'mdi-bell-off'
    },
])

const toggleBellIcon = (group) => {
    group.bellIcon = group.bellIcon === 'mdi-bell' ? 'mdi-bell-off' : 'mdi-bell';
};

</script>

<template>
    <div class="menu-bar-content">
        <v-row align="center" no-gutters>
            <v-col cols="1"></v-col>
            <v-col cols="10" class="d-flex flex-column">
                <p class="title-text">Grupos</p>
            </v-col>
            <v-col cols="1"></v-col>
        </v-row>
    </div>

    <div class="alarm-container">
        <div class="alarm-cards" v-for="group in groups">
            <v-row no-gutters justify="center">
                <v-col cols="10">
                    <v-card color="primary" height="140" align="center" elevation="4">
                        <v-row no-gutters align="center" class="card-body-row">
                            <v-col cols="1"><v-icon icon="mdi-account-group" color="text" size="80"></v-icon></v-col>
                            <v-col cols="3">
                                <v-row justify="start" no-gutters class="ml-10">
                                    <p class="body-text">{{ group.membership }}</p>
                                </v-row>
                            </v-col>
                            <v-col cols="4"><v-row justify="start" no-gutters>
                                    <p class="body-text">{{ group.groupName }}</p>
                                </v-row></v-col>
                            <v-col cols="2"><v-row justify="start" no-gutters>
                                    <p class="body-text">{{ group.members }} usuarios</p>
                                </v-row></v-col>
                            <v-col cols="2">
                                <div class="group-actions">
                                    <v-btn rounded="0" variant="elevated" id="menu-button" size="48"
                                        color="white"><v-icon :icon="group.bellIcon" color="primary" size="40"
                                            @click="toggleBellIcon(group)" /></v-btn>
                                    <v-btn rounded="0" variant="elevated" id="menu-button" size="48"
                                        color="white"><v-icon icon="mdi-logout" color="primary" size="40" /></v-btn>
                                    <v-btn rounded="0" variant="elevated" id="menu-button" size="48"
                                        color="white"><v-icon icon="mdi-delete" color="primary" size="40" /></v-btn>
                                </div>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<style>
.alarm-cards {
    margin-bottom: 40px;
}

.alarm-container {
    margin-top: 60px;
}

.group-actions {
    display: flex;
    justify-content: space-evenly;
}

.group-membership {
    display: flex;
}
</style>