import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          // 실습을 위해 특정 계정으로 로그인을 허용합니다.
          if (email === 'user@nextmail.com' && password === '123456') {
            return { id: '1', email: 'user@nextmail.com', name: 'User' };
          }
        }
        return null;
      },
    }),
  ],
});