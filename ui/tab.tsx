// 동적 메뉴인 탭 항목
'use client'

import { useSelectedLayoutSegment } from "next/navigation";
import { Item } from "./tab-group";
import Link from "next/link";
import clsx from "clsx";

export const Tab = ({
    path,
    parallelRoutesKey,
    item,
}: {
    path: string;
    parallelRoutesKey?: string;
    item: Item;
}) => {
    const segment = useSelectedLayoutSegment(parallelRoutesKey);
    const href = item.slug ? path + '/' + item.slug : path;
    const isActive = 
    // ex) home pages -> `/layouts`
    (!item.slug && segment === null) || 
    segment === item.segment ||
    // ex) nested pages -> `/layouts/electronics`
    segment === item.slug;
    return (
        <Link
            href={href}
            className={clsx('rounded-lg px-3 py-1 text-sm font-medium', {
                'bg-gray-50 text-gray-400 hover:bg-gray-500 hover:text-white': !isActive,
                'bg-vercel-blue text-gray-800': isActive
            })}
        >
            {item.text}
        </Link>
    )
}