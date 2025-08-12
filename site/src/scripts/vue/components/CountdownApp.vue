<template>
    <div class="countdown">
        <h1>{{ seriesName }}</h1>
        <div class="timer">
            <span>{{ time.days }}d : </span>
            <span>{{ time.hours }}h : </span>
            <span>{{ time.minutes }}m : </span>
            <span>{{ time.seconds }}s</span>
        </div>
    </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
    props: {
        seriesName: {
            type: String,
            default: 'Countdown'
        },
        target: {
            type: String,
            required: true
        }
    },
    setup(props) {
        const time = ref({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        
        let timerInterval = null

        const updateCountdown = () => {
            const now = new Date().getTime()
            const target = new Date(props.target).getTime()
            const distance = target - now;

            if (distance <= 0){
                clearInterval(timerInterval)
                time.value = { days: 0, hours: 0, minutes: 0, seconds: 0}
                return
            }
    
            time.value.days = Math.floor(distance / (1000 * 60 * 60 * 24))
            time.value.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            time.value.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
            time.value.seconds = Math.floor((distance % (1000 * 60)) / 1000)
        }

        onMounted(() => {
            updateCountdown()
            timerInterval = setInterval(updateCountdown, 1000)
        })

        onUnmounted(() => {
            clearInterval(timerInterval)
        })

        return {
            time,
            seriesName: props.seriesName
        }
    }
}

</script>

<style scoped>

    /* This can be styled after it is all coded in */

</style>