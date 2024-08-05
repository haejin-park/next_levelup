// 동적 라우팅을 하는 레이아웃(data폴더에서 가져온 데이터를 바탕으로 선택된 항목에 대한 하위리스트 표시)

import { getCategories, getCategory } from "@/data/category";
import { Boundary } from "@/ui/boundary";
import { ClickCounter } from "@/ui/click-counter";
import { TabGroup } from "@/ui/tab-group";
import { Counter } from "../context-click-counter";

export default function Layout({
    children,
    params,
}: {
    children: React.ReactNode;
    params:{categorySlug: string};
}) {
    const category = getCategory(params.categorySlug);
    const items = getCategories(params.categorySlug);

    return(
        <Boundary labels={['Layout[Server Component]']} animateRerendering={false}>
            <div className="space-y-9">
                <TabGroup
                    path={`/context/${category.slug}`}
                    items={[
                        {
                            text:'전체'
                        },
                        ...items.map((x)=> ({
                            text:x.name,
                            slug:x.slug,
                        })),
                    ]}
                />
                <Counter/>
                <div>{children}</div>
            </div>
        </Boundary>
    )
}