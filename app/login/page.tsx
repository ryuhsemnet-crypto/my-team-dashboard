import LoginForm from '@/app/ui/login-form';
 
export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-cols-md flex-col space-y-2.5 p-4 md:-mt-32">
        {/* 우리가 수정한 그 폼을 여기서 불러옵니다! */}
        <LoginForm />
      </div>
    </main>
  );
}