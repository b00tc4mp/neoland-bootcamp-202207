import NextAuth from "next-auth"
// import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from 'next-auth/providers/credentials'
import authenticateUser from '../../../logic/authenticateUser'

export default NextAuth({
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: 'credentials',
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                email: {
                    label: 'email',
                    type: 'email',
                    placeholder: 'Introduce tu email',
                },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials, req) {
                try {
                    const tokenFromAPI = await authenticateUser(credentials, req)

                    if (tokenFromAPI) return tokenFromAPI
                    
                } catch (error) {
                    throw new Error(error)
                }
            },
        }),
        // GoogleProvider({
        //     clientId: process.env.GOOGLE_CLIENT_ID,
        //     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        //     profile(profile) {
        //         return profile
        //     }
        // }),
    ],
    secret: process.env.JWT_SECRET,
    pages: {
        signIn: '/login',
    },
    callbacks: {
        async jwt({ token, user, account }) {
            if (account && user) {
                token.tokenFromApi = user
            }

            return token;
        },

        async session({ session, token }) {
            session.tokenFromApi = token.tokenFromApi.token
            return session;
        },
    },
    
    // Enable debug messages in the console if you are having problems
    // debug: process.env.NODE_ENV === 'development',
});