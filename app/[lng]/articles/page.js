import Articles from "@/components/ArticleRelated/Articles";

import Container from "@/components/Container";
import Header from "@/components/Header";
import { getArticles } from "@/lib/api";

const page = async ({ params: { lng } }) => {
  const articles = await getArticles({ page: 1 });

  return (
    <div className="mb-12">
      <Container>
        <Header>Articles </Header>
        {/* <div className="grid grid-cols-12 md:gap-12 gap-8">
          {articles.map((article) => {
            return (
              <div key={article.id} className="col-span-12 md:col-span-3">
                <Card lang={lng} info={article.attributes} cardType="article" />
              </div>
            );
          })}
        </div> */}
        <Articles articles={articles} lang={lng} />
      </Container>
    </div>
  );
};

export default page;
