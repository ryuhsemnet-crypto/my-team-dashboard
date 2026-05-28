import SideNav from '@/app/ui/dashboard/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden bg-white">
      {/* 왼쪽 사이드바 영역 */}
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      
      {/* 오른쪽 메인 콘텐츠 영역 */}
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
        {children}
      </div>
    </div>
  );
}