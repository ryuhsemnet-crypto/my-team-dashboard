import Link from 'next/link';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-6">
      <div className="flex flex-col justify-center gap-6 rounded-lg bg-white px-6 py-10 md:w-[400px] md:px-10 shadow-sm border border-gray-100">
        <p className="text-xl text-gray-800 md:text-2xl text-center font-bold">
          우리 팀 대시보드
        </p>
        <Link
          href="/login"
          className="flex items-center justify-center rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 w-full"
        >
          {/* 화살표 아이콘 코드를 삭제하고 글자만 남겼습니다. */}
          <span>로그인하기</span>
        </Link>
      </div>
    </main>
  );
}