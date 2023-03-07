import { getPageData } from "@/lib/api"



export const page = async ({ params }) => {
    const data = getPageData(params.lng, params.p)
    console.log(data)
    const pageSlug = params.p
    return (
        <div>
        {pageSlug ?? "not found"}
        </div>
    )
}