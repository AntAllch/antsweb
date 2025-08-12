<script>
    import Countdown from './components/CountdownApp.vue'

    export default {
        components: { Countdown }
    }
</script>

<template>
    <div>
        <Countdown/>
    </div>
</template>


<style>
    h1,
    h2,
    span{
        color: white;
        text-align: center;
    }

    .timer{
        text-align: center;
    }
</style>