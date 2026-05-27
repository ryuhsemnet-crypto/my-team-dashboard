import AcmeLogo from '@/app/ui/acme-logo';
import LoginForm from '@/app/ui/login-form';

export default function LoginPage() {
  return (
    // mt-6 md:mt-10을 추가하여, 상단 여백을 넓힘
    <main className="flex items-center justify-center min-h-screen p-6 mt-6 md:mt-10">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5">
        {/* 상단 파란색 영역: flex-col items-center justify-center를 추가하여, AcmeLogo를 중앙에 배치 */}
        <div className="flex h-20 w-full items-center justify-center rounded-lg bg-blue-500 p-4 flex-col md:h-36">
          <div className="w-full text-white">
            <AcmeLogo />
          </div>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}