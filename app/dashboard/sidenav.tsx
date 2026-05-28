import Link from 'next/link';
import { signOut } from '@/auth';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 bg-gray-50 border-r">
      {/* 로고 영역 */}
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40"
        href="/"
      >
        <div className="w-32 text-white md:w-40 font-bold text-xl uppercase tracking-wider">
          Emnet Dash
        </div>
      </Link>

      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        {/* 메뉴 영역 (추후 여기에 링크들을 추가할 수 있습니다) */}
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        
        {/* 로그아웃 버튼 (텍스트 중심) */}
        <form
          action={async () => {
            'use server';
            await signOut();
          }}
        >
          <button className="flex h-[48px] w-full grow items-center justify-center rounded-md bg-white p-3 text-sm font-semibold text-red-600 hover:bg-red-50 md:flex-none md:justify-start md:p-2 md:px-3 border border-red-100 transition-colors">
            <span>SIGN OUT</span>
          </button>
        </form>
      </div>
    </div>
  );
}