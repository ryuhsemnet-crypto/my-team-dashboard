import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-col items-center justify-center gap-1.5`}
    >
      {/* 아이콘: 크기를 h-6 w-6으로 크게 축소 (기존 h-10 w-10) */}
      <GlobeAltIcon className="h-6 w-6" />
      {/* 대시보드 이름: 화면 중앙에 배치하기 위해 text-center 추가 */}
      <p className="text-xl text-center md:text-2xl lg:text-3xl">
        <strong>우리 팀 대시보드</strong>
      </p>
    </div>
  );
}