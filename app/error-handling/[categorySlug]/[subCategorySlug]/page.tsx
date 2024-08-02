import { getCategory } from "@/data/category";
import BuggyButton from "@/ui/buggy-button";
import { SkeletonCard } from "@/ui/skeleton-card";

export default function Page({
    params,
}: {
    params: {subCategorySlug: string};
}) {
    const category = getCategory(params.subCategorySlug)
    
    return (
        <div className="space-y-4">
            <h1 className="text-xl font-medium text-gray-800/80">{category.name}</h1>
            <BuggyButton />
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                {Array.from({length:category.count}).map((_,i)=> (
                    <SkeletonCard key={i} />
                ))}
            </div>
        </div>
    )
}