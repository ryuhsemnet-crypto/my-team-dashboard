// app/ui/dashboard/sidenav.tsx
import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import { signOut } from '@/auth';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 bg-white border-r">
      <Link className="mb-8 flex flex-col px-2" href="/">
        <span className="text-xl font-bold text-black uppercase">EMNET DASHBOARD</span>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow md:block"></div>
        <form
          action={async () => {
            'use server';
            await signOut();
          }}
        >
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-white p-3 text-sm font-medium hover:bg-red-50 hover:text-red-600 md:flex-none md:justify-start md:p-2 md:px-3 border">
            <div>LOGOUT</div>
          </button>
        </form>
      </div>
    </div>
  );
}