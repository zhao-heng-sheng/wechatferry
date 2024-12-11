import type { WechatyInterface } from 'wechaty/impls'
import type { WechatferryPuppet } from '@wechatferryxxx/puppet'
import { defineNitroPlugin } from 'nitropack/runtime'
import { useBotPuppet } from '../utils/useBotPuppet'
import { useBot } from '../utils/useBot'

export default defineNitroPlugin(async (nitroApp) => {
  const puppet = useBotPuppet()
  const bot = useBot()
  bot.on('ready', () => {
    // @ts-expect-error untyped
    import('#internal/wcferry/skills')
    bot.on('message', async (msg) => {
      bot.hooks.callHook('message', msg)
      const room = msg.room()
      if (room) {
        bot.hooks.callHook('message:room', msg)
        if (await msg.mentionSelf()) {
          bot.hooks.callHook('message:room:mention', msg)
        }
      }
      else {
        bot.hooks.callHook('message:contact', msg)
      }
    })
    bot.on('room-join', (...args) => {
      bot.hooks.callHook('room', ...args)
      bot.hooks.callHook('room:join', ...args)
    })
    bot.on('room-leave', (...args) => {
      bot.hooks.callHook('room', ...args)
      bot.hooks.callHook('room:leave', ...args)
    })
    bot.on('room-topic', (...args) => {
      bot.hooks.callHook('room', ...args)
      bot.hooks.callHook('room:topic', ...args)
    })
    bot.on('room-invite', (...args) => {
      // @ts-expect-error ignore
      bot.hooks.callHook('room', ...args)
      bot.hooks.callHook('room:invite', ...args)
    })
  })

  nitroApp.wcferry = {
    puppet,
    bot,
  }

  nitroApp.hooks.hook('close', async () => {
    await bot.stop()
  })

  bot.start()
})

declare module 'nitropack' {
  interface NitroApp {
    wcferry: {
      bot: WechatyInterface
      puppet: WechatferryPuppet
    }
  }
}
