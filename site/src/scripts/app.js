import { createApp } from 'vue'
import App from './vue/App.vue'
import countdownApp from './vue/components/CountdownApp.vue';

const moment = require("moment") // For date formatting

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded')
    
    // Get the current year
    const yearElement = document.getElementById('is-year');
    if (yearElement) {
        yearElement.innerHTML = moment().year();
    }

    const elements = document.querySelectorAll('[data-series-name][data-target]');
    console.log('Found elements:', elements.length);
    
    elements.forEach((el, index) => {
        console.log(`Element ${index}:`, el);
        console.log('Dataset:', el.dataset);
        
        const seriesName = el.dataset.seriesName || "Series Name"
        const targetDate = el.dataset.target || "2025-12-31T00:00:00"
        
        console.log('Series Name:', seriesName);
        console.log('Target Date:', targetDate);

        try {
            const app = createApp(countdownApp, { 
                seriesName, 
                target: targetDate 
            });
            app.mount(el);
            console.log('Vue app mounted successfully');
        } catch (error) {
            console.error('Error mounting Vue app:', error);
        }
    })
    

})
