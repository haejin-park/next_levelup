import { getTopCategories } from '@/data/category';
import { ClickCounter } from '@/ui/click-counter';
import { TabGroup } from '@/ui/tab-group';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: '레벨업 Next.js: 페이지 없음 UI',
}

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categories = getTopCategories();
  return (
    <div className="space-y-9">
      <div className="flex justify-between">
        <TabGroup
          path="/not-found"
          items={[
            {
              text: '홈',
            },
            ...categories.map((x) => ({
              text: x.name,
              slug: x.slug,
            })),
            {
              text: '❗미존재 항목❗',
              slug: 'does-not-exist',
            },
          ]}
        />

        <div className="self-start">
          <ClickCounter />
        </div>
      </div>

      <div>{children}</div>
    </div>
  );
}