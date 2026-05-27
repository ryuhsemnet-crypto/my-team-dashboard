'use server';

import { signIn } from '../../auth';
import { AuthError } from 'next-auth';

// 로그인 처리를 담당하는 함수입니다.
export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return '비밀번호가 틀렸거나 잘못된 이메일입니다.';
        default:
          return '알 수 없는 에러가 발생했습니다.';
      }
    }
    throw error;
  }
}