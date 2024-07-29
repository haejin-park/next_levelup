import type { Metadata } from 'next'
import '@/styles/globals.css'
import { GlobalNav } from "@/ui/global-nav";

export const metadata: Metadata = {
  title: '레벨업 리액트 프로그래밍 with Next.js',
  description: 'Next.js를 활용하여 현대적인 웹 애플리케이션을 구축합니다.'
}

export default function RootLayout({children,}: {children: React.ReactNode;}) {
  return (
    <html lang="en">
      <body className="bg-white overflow-y-scroll bg-[url('/grid.svg')] pb-36">
        <GlobalNav />
        <div className="lg:pl-72">
          <div className="max-w-4xl px-2 pt-20 mx-auto space-y-8 lg:px-8">
            <div className="p-px rounded-lg shadow-lg bg-vc-border-gradient shadow-black/20">
              <div className="rounded-lg bg-white p-3.5 lg:p-6">
                {children}
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
