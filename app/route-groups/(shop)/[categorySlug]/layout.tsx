// 동적 라우팅을 하는 레이아웃(data폴더에서 가져온 데이터를 바탕으로 선택된 항목에 대한 하위리스트 표시)

import { getCategories, getCategory } from "@/data/category";
import { ClickCounter } from "@/ui/click-counter";
import { TabGroup } from "@/ui/tab-group";

export default async function Layout({
    children,
    params,
}: {
    children: React.ReactNode;
    params:{categorySlug: string};
}) {
    const category = getCategory(params.categorySlug);
    const items = getCategories(params.categorySlug);

    return(
        <div className="space-y-9">
            <div className="flex justify-between">
                <TabGroup
                    path={`/route-groups/${category.slug}`}
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
                <div className="self-start">
                    <ClickCounter/>
                </div>
            </div>
            <div>{children}</div>
        </div>
    )
}