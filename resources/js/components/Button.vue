<template>
    <div :class="containerStyle" >
        <button :class="buttonStyle" class="btn" > {{title}} </button>
    </div>
</template>

<script>
export default {
    name: 'Button',
    props: ['title', 'containerStyle', 'buttonStyle']
}
</script>

<style scoped>
    .btn {
        background-color: #ddd;
        border-radius: 20px;
        padding-left: 20px;
        padding-right: 20px;
    }
</style>
