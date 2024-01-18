import CredentialsProvider from 'next-auth/providers/credentials'
import { NuxtAuthHandler } from '#auth'
import { User } from '~/server/models/User.model'

async function getUser(id: string) {
  const user = await User.findById(id)
  return user?.toObject()
}

export default NuxtAuthHandler({
  secret: useRuntimeConfig().auth.secret,
  providers: [
    // @ts-expect-error no types this package
    CredentialsProvider.default({
      name: 'credentials',
      origin: useRuntimeConfig().auth.origin,
      async authorize(credentials: {
        email: string
        password: string
      }) {
        const user = await User.findOne({ email: credentials.email })

        if (!user)
          return null

        const isValid = await user.comparePassword(credentials.password)

        if (!isValid)
          return null

        return user.toObject()
      }
    })
  ],
  session: {
    strategy: 'jwt'
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user)
        token = { ...token, ...user }

      return token
    },

    async session({ session, token }) {
      // @ts-expect-error the id is must in the token
      const refreshUser = await getUser(token._id)

      session.user = {
        ...token,
        ...session.user,
        ...refreshUser
      }

      return session
    }
  }
})
