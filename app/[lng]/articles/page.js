import Articles from "@/components/ArticleRelated/Articles";
import { useTranslation } from "@/app/i18n";
import Container from "@/components/Container";
import Header from "@/components/Header";
import { getArticles } from "@/lib/api";

export const metadata = {
  title: "Articles",
};

const page = async ({ params: { lng } }) => {
  const articles = await getArticles({ page: 1 });
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await useTranslation(lng);
  return (
    <div className="mb-12">
      <Container>
        <Header>{t("articles")}</Header>

        <Articles articles={articles} lang={lng} />
      </Container>
    </div>
  );
};

export default page;
