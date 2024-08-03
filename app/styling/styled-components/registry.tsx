'use client';

import React, { useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  // Only create stylesheet once with lazy initial state
  // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

    // useServerInsertedHTML을 사용하여 서버에서 생성된 스타일 요소 html에 삽입, 스타일 태그 초기화
  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

//   클라이언트 사이드에서 렌더링될 때는 스타일 시트 관리할 필요가 없으므로 children 반환
  if (typeof window !== 'undefined') return <>{children}</>;

  return (
    // 서버사이드에서는 StyleSheetManager로 스타일 시트 관리
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children as React.ReactChild}
    </StyleSheetManager>
  );
}