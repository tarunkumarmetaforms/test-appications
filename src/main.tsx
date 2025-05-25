import  App  from './App.tsx'

import r2wc from "@r2wc/react-to-web-component"

const WebGreeting = r2wc(App)

customElements.define("quick-discovery", WebGreeting)