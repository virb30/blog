import { defineNuxtPlugin } from 'nuxt/app'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
    faChevronLeft,
    faChevronRight,
    faEnvelope,
    faLightbulb as fasLightbulb,
    faSpinner,
    faArrowLeft
} from '@fortawesome/free-solid-svg-icons'
import { faLightbulb as farLightbulb } from '@fortawesome/free-regular-svg-icons'
import {
    faLinkedinIn,
    faGithub,
} from '@fortawesome/free-brands-svg-icons'

library.add(
    faChevronLeft,
    faChevronRight,
    faLinkedinIn,
    faGithub,
    faEnvelope,
    fasLightbulb,
    farLightbulb,
    faSpinner,
    faArrowLeft
)

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})