import {createAvatar} from '@dicebear/core'
import {lorelei} from '@dicebear/collection'

const avatar = createAvatar(lorelei, {
  seed:'John Doe',

})

export const svg = avatar.toString()


