import Articles from "@/components/ArticleRelated/Articles";

import Container from "@/components/Container";
import Header from "@/components/Header";
import { getArticles } from "@/lib/api";

export const metadata = {
  title: "Articles",
};

const page = async ({ params: { lng } }) => {
  const articles = await getArticles({ page: 1 });

  return (
    <div className="mb-12">
      <Container>
        <Header>Articles </Header>

        <Articles articles={articles} lang={lng} />
      </Container>
    </div>
  );
};

export default page;
