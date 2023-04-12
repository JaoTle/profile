import { createApp } from 'vue'
import App from './App.vue'
import './assets/style/tailwind.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faSmileWink , faAddressBook } from '@fortawesome/free-regular-svg-icons'
import { faBarsProgress ,faIcons } from '@fortawesome/free-solid-svg-icons'
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faSmileWink,faBarsProgress,faAddressBook,faIcons,faAnglesUp)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
