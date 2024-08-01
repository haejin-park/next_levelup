import { getTopCategories } from "@/data/category";
import { ClickCounter } from "@/ui/click-counter";
import { TabGroup } from "@/ui/tab-group";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: '레벨업 Next.js 에러처리 UI'
}

export default async function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    const categories = getTopCategories();
    return(
        <div className="space-y-9">
            <div>
                <div className="flex justify-between">
                    <TabGroup 
                        path='/error-handling'
                        items={[
                            {
                                text: '홈',
                            },
                            ...categories.map((x) => ({
                                text: x.name,
                                slug: x.slug,
                            })),
                        ]}
                    />
                    <div className="self-start">
                        <ClickCounter />
                    </div>
                </div>
            </div>
            <div>{children}</div>
        </div>
    )
}