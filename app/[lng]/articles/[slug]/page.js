import Container from "@/components/Container";
import { getArticles, getArticleBySlug } from "@/lib/api";
import Image from "next/image";
import { getStrapiMedia } from "@/lib/media";
import { Title } from "@/components/Heading";
import MarkDown from "@/components/MarkDown";
import { FadeInTopWrapper } from "@/components/InViewAnimatedWrappers/Wrapper";

export async function generateStaticParams() {
  const { data: articles } = await getArticles({ pageSize: 5 });

  return articles.map((article) => ({
    slug: article.attributes.slug,
  }));
}

export const page = async ({ params }) => {
  const articleData = await getArticleBySlug(params.lng, params.slug);
  const { imageUrl } = getStrapiMedia(articleData?.media);
  return (
    <div className="mb-12">
      {" "}
      <Container>
        <FadeInTopWrapper>
          {" "}
          <div className="flex items-center justify-center my-12  ">
            {" "}
            <Image
              src={imageUrl ?? "/placeholder.jpg"}
              width={1000}
              height={400}
              alt={articleData?.title}
              className="md:w-3/4 w-full mx-auto rounded-md object-cover object-center max-h-[600px]"
              priority
            />
          </div>
        </FadeInTopWrapper>

        <Title>{articleData?.title}</Title>
        <FadeInTopWrapper>
          {" "}
          <article className=" prose lg:prose-xl max-w-none dark:prose-dark">
            <MarkDown content={articleData?.content} />
          </article>
        </FadeInTopWrapper>
      </Container>
    </div>
  );
};

export default page;
