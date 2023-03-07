import MarkDown from "@/components/MarkDown";
import Container from "@/components/Container";
import { getPageData, getPages } from "@/lib/api";
import { notFound } from "next/navigation";
export async function generateMetadata({ params: { lng, p } }) {
  const data = await getPageData(lng, p);

  return {
    title: data?.title ?? "Not found",
  };
}
export async function generateStaticParams() {
  const { data } = await getPages();
  return data.map((page) => ({
    p: page.attributes.slug,
  }));
}

const page = async ({ params }) => {
  const data = await getPageData(params.lng, params.p);
  if (!data) {
    return notFound();
  }
  return (
    <Container>
      <div className="prose-p:text-black prose lg:prose-xl dark:prose-dark max-w-none py-20 min-h-[calc(100vh-176.5px)]">
        <MarkDown content={data.blocks[0].content} />
      </div>
    </Container>
  );
};

export default page;
