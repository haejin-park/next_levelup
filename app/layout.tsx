import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'

const inter = Inter({subsets:['latin']});

export const metadata: Metadata = {
  title: '레벨업 리액트 프로그래밍 with Next.js',
  description: 'Next.js를 활용하여 현대적인 웹 애플리케이션을 구축합니다.'
}

export default function RootLayout({children,}: {children: React.ReactNode;}) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
