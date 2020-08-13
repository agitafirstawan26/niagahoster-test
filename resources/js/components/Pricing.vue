<template>
    <div>
        <div class="container" >
            <p> {{data.name}} </p>
        </div>
    </div>
</template>


<script>
export default {
    name: 'PricingTable',
    props: ['data']
}
</script>

<style scoped>
    .container {
        max-width: 400px;
        margin: auto;
        min-height: 200px;
        border: 1px solid rgb(0, 0, 0, .2);
    }
</style>
