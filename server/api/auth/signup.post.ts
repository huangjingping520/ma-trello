import { User } from './../../models/User.model'
import { Validator } from '#nuxt-server-utils'
import SignupSchema from '~/schemas/Signup.schema'

export default defineEventHandler(async (e) => {
  const body = await readBody(e)

  Validator.validateSchema(SignupSchema, body)

  const user = await User.create(body)

  return { ...user.toObject(), password: undefined }
})
