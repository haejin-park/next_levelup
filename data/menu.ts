export type Item = {
    name: string;
    slug: string;
    description?: string;
};

export const menus: {name: string; items: Item[]}[] = [
    {
        name: '라우팅 레이아웃',
        items: [
            {name: '라우팅 기본', slug: 'route', description: '파일 시스템 기반 라우팅 기본'},
            {name: '동적 라우팅', slug: 'dynamic-routing', description: '동적으로 생성되는 라우팅'},
            {name: '라우팅 그룹', slug: 'route-groups', description: 'URL 경로에 영향을 주지 않고 라우트를 조직'},
            {name: '로딩', slug: 'loading', description:'의미가 있는 로딩 UI 생성'},
            {name: '예외처리', slug: 'error-handling', description:'예외 발생 시 보여주는 UI 생성'},
            {name: '페이지 없음404', slug: 'not-found', description:'페리지 없음 UI 생성'},
        ],
    },
];