import AcmeLogo from '@/app/ui/acme-logo';
import LoginForm from '@/app/ui/login-form';

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5">
        
        {/* 상단 파란색 박스: 중앙 정렬된 타이틀 */}
        <div className="flex h-24 w-full items-center justify-center rounded-lg bg-blue-500 p-4 md:h-32">
          <div className="text-white w-full">
            <AcmeLogo />
          </div>
        </div>
        
        {/* 하단 로그인 폼: ID/PW 입력창 */}
        <LoginForm />
        
      </div>
    </main>
  );
}