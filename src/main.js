import { createApp } from 'vue'
import App from './App.vue'
import './assets/style/tailwind.css'
import router from '@/routes/index.js'
import VueScrollTo from 'vue-scrollto';
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faSmileWink , faAddressBook,faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faBarsProgress ,faIcons } from '@fortawesome/free-solid-svg-icons'
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faSmileWink,faBarsProgress,faAddressBook,faIcons,faAnglesUp,faEnvelope,faLinkedin,faGithub)

createApp(App).use(router).use(VueScrollTo)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
