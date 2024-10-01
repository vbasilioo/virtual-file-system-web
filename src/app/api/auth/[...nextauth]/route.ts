import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import api from '@/app/services/api';
import { IUser, IUserLogin } from '@/interfaces/IUser';

const nextAuthOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials) throw new Error('Credentials not provided');
        try {
          const response = await api.post<IUserLogin>('/auth/login', {
            username: credentials.username,
            password: credentials.password,
          });

          const { user, token } = response.data.data;

          if (!user || !token) {
            throw new Error(
              'Authentication failed: missing user or token data',
            );
          }

          return { ...user, token };
        } catch (error: any) {
          console.error('Error in authorize function:', error);
          if (
            error.response &&
            error.response.data &&
            error.response.data.message
          ) {
            throw new Error(error.response.data.message);
          }
          throw new Error('Authentication failed');
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user as unknown as IUser;
        token.token = (user as any).token;
      }
      return token;
    },
    async session({ session, token }) {
      if (token.user) {
        session.user = token.user;
      }
      if (token.token) {
        session.token = token.token;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/auth',
    error: '/404',
  },
};

const handler = NextAuth(nextAuthOptions);

export { handler as GET, handler as POST };
