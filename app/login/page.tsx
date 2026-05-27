import AcmeLogo from '@/app/ui/acme-logo';
import LoginForm from '@/app/ui/login-form';

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5">
        {/* 상단 파란색 헤더 영역 - 크기를 줄여서 세련되게 만듭니다 */}
        <div className="flex h-24 w-full items-center justify-center rounded-lg bg-blue-500 p-4 md:h-32">
          <div className="text-white">
            <AcmeLogo />
          </div>
        </div>
        {/* 로그인 양식 부품을 여기에 불러옵니다 */}
        <LoginForm />
      </div>
    </main>
  );
}