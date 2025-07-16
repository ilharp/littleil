import { Schema } from 'koishi'

export interface Config {
  env: string
  tgBotName: string
  neilharpId: number
}

export const Config: Schema<Config> = Schema.object({
  env: Schema.string().required(),
  tgBotName: Schema.string().required(),
  neilharpId: Schema.number().required(),
})
