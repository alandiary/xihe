<template>
    <section>
        <h2>Hello X-Table</h2>
        <tr>
            <td v-for="(value, index) in values" :key="index">
                {{ value }}
            </td>
        </tr>
    </section>
</template>

<script>
export default {
    name: 'JTableRow',
    props: {
        values: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
    tr {
        background-color: white;
        border-radius: 4px;
        box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.08);
    }
    td {
        padding: 8px;
    }
</style>
