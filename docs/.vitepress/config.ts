import { defineConfig } from 'vitepress'
import { transformerTwoslash } from '@shikijs/vitepress-twoslash'
import { groupIconMdPlugin } from 'vitepress-plugin-group-icons'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'wechatferry',
  description: '基于 WechatFerry 的微信机器人底层框架',

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 'https://api.iconify.design/unjs:automd.svg',
    nav: [
      { text: '主页', link: '/' },
    ],

    sidebar: [
      {
        text: '指南',
        items: [
          { text: '快速开始', link: '/guide' },
          { text: '特性', link: '/features' },
        ],
      },
      {
        text: '集成',
        items: [
          { text: 'Node', link: '/integrations/node' },
          { text: 'Wechaty', link: '/integrations/wechaty' },
          { text: 'Nuxt', link: '/integrations/nuxt' },
        ],
      },
      {
        text: '插件',
        link: '/plugins',
        items: [
          { text: '安全模式', link: '/plugins/safe-mode' },
          { text: '群聊禁言', link: '/plugins/room-mute' },
          { text: '群聊踢人', link: '/plugins/room-kick' },
        ],
      },
      {
        text: 'API',
        items: [
          { text: '@wechatferryxxx/core', link: 'https://www.jsdocs.io/package/@wechatferryxxx/core' },
          { text: '@wechatferryxxx/agent', link: 'https://www.jsdocs.io/package/@wechatferryxxx/agent' },
          { text: '@wechatferryxxx/puppet', link: 'https://www.jsdocs.io/package/@wechatferryxxx/puppet' },
          { text: '@wechatferryxxx/nuxt', link: 'https://www.jsdocs.io/package/@wechatferryxxx/nuxt' },
          { text: '@wechatferryxxx/robot', link: 'https://www.jsdocs.io/package/@wechatferryxxx/robot' },
          { text: '@wechatferryxxx/plugins', link: 'https://www.jsdocs.io/package/@wechatferryxxx/plugins' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/wechatferry/wechatferry' },
    ],
  },
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
    codeTransformers: [
      transformerTwoslash() as any,
    ],
    config(md) {
      md.use(groupIconMdPlugin)
    },
  },
})
