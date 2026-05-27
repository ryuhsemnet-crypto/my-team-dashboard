import LoginForm from '@/app/ui/login-form';

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col">
        
        {/* 파란색 박스와 AcmeLogo를 그리던 <div className="bg-blue-500..."> 영역을 완전히 삭제했습니다. */}
        
        {/* 오직 하얀색 로그인 폼(ID/PW 입력창)만 렌더링합니다. */}
        <LoginForm />
        
      </div>
    </main>
  );
}