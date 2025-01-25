import { App } from 'vue'
import { setGlobalOptions } from 'vue-request'

export default function(app: App) {
    setGlobalOptions({})
}
