import AcmeLogo from '@/app/ui/acme-logo';
import LoginForm from '@/app/ui/login-form';

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5">
        {/* 상단 파란색 박스: 아이콘 없이 글자만 중앙에 오게 만든 AcmeLogo가 여기 들어갑니다 */}
        <div className="flex h-24 w-full items-center justify-center rounded-lg bg-blue-500 p-4 md:h-32">
          <div className="text-white w-full">
            <AcmeLogo />
          </div>
        </div>
        
        {/* 하단 흰색 박스: ID/PW 입력창 부품(LoginForm)을 불러옵니다 */}
        <LoginForm />
      </div>
    </main>
  );
}