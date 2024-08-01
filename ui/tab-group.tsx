// 동적 메뉴인 탭그룹(탭 컴포넌트와 함께 사용할 메뉴 리스트)
import { Tab } from "./tab";

export type Item = {
    text: string;
    slug?: string; 
    segment?: string;
    parallelRoutesKey?: string;
};

export const TabGroup = ({
    path,
    parallelRoutesKey,
    items,
}: {
    path: string;
    parallelRoutesKey?: string;
    items: Item[];
}) => {
    return (
        <div className="flex flex-wrap items-center gap-2">
            {items.map((item) => (
                <Tab 
                    key={path + item.slug}
                    item={item}
                    path={path}
                    parallelRoutesKey={parallelRoutesKey}
                />
            ))}
        </div>
    )
}