import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div className={`${lusitana.className} flex flex-col items-center justify-center gap-1 text-white`}>
      {/* 아이콘: 크기를 확 줄였습니다 (h-6 w-6) */}
      <GlobeAltIcon className="h-6 w-6" />
      
      {/* 텍스트: 크기를 적당하게 조절하고 중앙 정렬했습니다 */}
      <p className="text-xl md:text-2xl font-bold">
        우리 팀 대시보드
      </p>
    </div>
  );
}