import { beforeAll, describe, expect, it } from 'vitest'
import { WechatferryAgent } from '../packages/agent/src'

const wcf = new WechatferryAgent()

beforeAll(() => {
  wcf.start()
})

it.skip('contacts', () => {
  const contactList = wcf.getContactList()
  expect(contactList[0]).toBeTypeOf('object')
})

it.skip('rooms', () => {
  const rooms = wcf.getChatRoomDetailList()
  const room = rooms[0]
  expect(room).toBeTypeOf('object')
  expect(room.memberIdList?.[0]).toBeTypeOf('string')
})

it.skip('history', () => {
  const id = wcf.wcf.getSelfWxid()
  const messages = wcf.getHistoryMessageList(id, (sql) => {
    sql.limit(10)
  })
  const talkerWxid = messages[0].talkerWxid

  expect(talkerWxid).toBeTypeOf('string')
  expect(talkerWxid).toBe(id)
})

it.skip('say', () => {
  const id = wcf.wcf.getSelfWxid()
  wcf.sendText(id, 'hello')
})
