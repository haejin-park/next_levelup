import { Boundary } from "@/ui/boundary";

export default function Layout({children} : {children: React.ReactNode}) {
    return (
        <>
            <Boundary animateRerendering={false} labels={["제품"]} size="small">
                {children}
            </Boundary>
        </>
    )
}