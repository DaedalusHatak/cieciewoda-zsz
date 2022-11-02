<template>
    <v-table :class="{'w-100': $vuetify.breakpoint.xs}"
    class="border mx-auto w-50" theme="dark">
        <thead>
            <tr>
                <th class="text-center">Usługa</th>
                <th class="text-center"> Cena </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in priceTags" :key="item.name">
                <td>{{ item.name }}</td>
                <td>{{ item.price }}</td>
            </tr>
        </tbody>
    </v-table>
</template>

<script setup>
const priceTags = [{ name: 'Cięcie płytek (kąt prosty)', price: "15zł" },{ name: 'Cięcie płytek (kąt 45st)', price: "30zł" },{ name: 'Minuta cięcia', price: "6zł" }];
</script>