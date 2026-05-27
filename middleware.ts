import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
 
export default NextAuth(authConfig).auth;
 
export const config = {
  // 반드시 이 경로 설정이 정확해야 합니다.
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};