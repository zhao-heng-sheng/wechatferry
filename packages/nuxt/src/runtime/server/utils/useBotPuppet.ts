import { WechatferryPuppet } from '@wechatferryxxx/puppet'
import { createSafeModePuppet } from '@wechatferryxxx/plugins'
import { useRuntimeConfig } from 'nitropack/runtime'
import { useBotAgent } from './useBotAgent'

let puppet: WechatferryPuppet

export function useBotPuppet() {
  const agent = useBotAgent()
  const { wcferry: { safeMode } } = useRuntimeConfig()
  if (!puppet) {
    puppet = new WechatferryPuppet({ agent })
    if (safeMode) {
      puppet = createSafeModePuppet(puppet)
    }
  }

  return puppet
}
