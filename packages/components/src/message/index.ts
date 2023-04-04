import { createApp, h } from 'vue'
import MessageComponent from './message.vue'
import type { MessageParams } from './types'

const Message = {
  open(params: MessageParams) {
    const dom = document.createElement('div')
    const body = document.querySelector('body') as HTMLBodyElement
    let duration: number | undefined = params.duration
    if (duration === undefined) {
      duration = 3000
    }
    body.appendChild(dom)
    const msg = h(MessageComponent, {
      text: params.text,
      type: params.type,
      placement: params.placement
    })
    const app = createApp({
      render() {
        return msg
      }
    })
    app.mount(dom)

    const internalClose = () => {
      msg.component?.exposed?.['closeMessage']?.()
      app.unmount()
      dom.remove()
    }

    setTimeout(() => {
      internalClose()
    }, duration)
  }
}

export default Message
export type { MessageType } from './types'
