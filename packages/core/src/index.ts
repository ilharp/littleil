import type { Context } from 'koishi'
import type { Config } from './config'
import type TelegramBot from 'koishi-plugin-nekoil-adapter-telegram'

export * from './config'

export const name = 'littleil-core'

export const apply = (ctx: Context, config: Config) => {
  ctx.platform('telegram').on('message', async (session) => {
    const data = session.event._data

    if (data?.message?.external_reply?.origin?.chat.id === config.neilharpId) {
      await (session.bot as unknown as TelegramBot).internal.forwardMessage({
        chat_id: Number(session.channelId),
        from_chat_id: config.neilharpId,
        disable_notification: true,
        message_id: data?.message?.external_reply?.origin?.message_id,
      })
    }
  })
}
