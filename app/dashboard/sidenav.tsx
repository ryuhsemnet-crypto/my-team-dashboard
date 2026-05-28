import Link from 'next/link';
import { signOut } from '@/auth';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 bg-white border-r">
      {/* 로고 박스 대신 단순 텍스트 링크로 변경 */}
      <Link
        className="mb-8 flex flex-col justify-start px-2"
        href="/"
      >
        <span className="text-xl font-bold text-black tracking-tighter">
          EMNET DASHBOARD
        </span>
        <span className="text-xs text-gray-500">Management System</span>
      </Link>

      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-4">
        {/* 메뉴 영역 */}
        <div className="flex flex-col gap-2">
          {/* 나중에 메뉴가 필요하면 여기에 <Link>글자만</Link> 넣으면 됩니다 */}
        </div>
        
        <div className="hidden h-auto w-full grow md:block"></div>
        
        {/* 로그아웃 버튼 (아이콘 없이 검정 글자만) */}
        <form
          action={async () => {
            'use server';
            await signOut();
          }}
        >
          <button className="flex w-full items-center justify-start py-2 px-2 text-sm font-medium text-gray-600 hover:text-red-600 hover:underline transition-all">
            LOGOUT
          </button>
        </form>
      </div>
    </div>
  );
}