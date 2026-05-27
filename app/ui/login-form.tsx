import { lusitana } from '@/app/ui/fonts';
import { Button } from './button';

export default function LoginForm() {
  return (
    <form className="space-y-3">
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className={`${lusitana.className} mb-3 text-2xl`}>
          로그인하여 계속 진행해 주세요.
        </h1>
        <div className="w-full">
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="email"
            >
              이메일 주소
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] px-3 text-sm outline-2 placeholder:text-gray-500"
                id="email"
                type="email"
                name="email"
                placeholder="이메일을 입력하세요"
                required
              />
              {/* AtSymbolIcon 삭제 완료 */}
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="password"
            >
              비밀번호
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] px-3 text-sm outline-2 placeholder:text-gray-500"
                id="password"
                type="password"
                name="password"
                placeholder="비밀번호를 입력하세요"
                required
                minLength={6}
              />
              {/* KeyIcon 삭제 완료 */}
            </div>
          </div>
        </div>
        <Button className="mt-4 w-full justify-center">
          로그인
          {/* ArrowRightIcon 삭제 완료 */}
        </Button>
      </div>
    </form>
  );
}