import { Tab } from "@/ui/tab";
import { Metadata } from "next";
import { RandomPostTab } from "./random-post-tab";

export const metadata: Metadata = {
    title: '레벨업 Next.js: SSG',
}

export default function Layout({children}: {children:React.ReactNode}) {
    return (
        <div className="space-y-9">
            <div className="flex flex-wrap items-center gap-2">
                <Tab path="/ssg" item={{text: '홈'}}/>
                <Tab path="/ssg" item={{text: '포스트1', slug: '1'}}/>
                <Tab path="/ssg" item={{text: '포스트2', slug: '2'}}/>
                <RandomPostTab path="/ssg"/>
            </div>
            <div>{children}</div>
        </div>
    )
}