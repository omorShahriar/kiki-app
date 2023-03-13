import { useTranslation } from "@/app/i18n";
import Container from "@/components/Container";
import Header from "@/components/Header";
import Products from "@/components/ProductRelated/Products";
import { getProducts } from "@/lib/api";

export const metadata = {
  title: "Products",
};
const page = async ({ params: { lng } }) => {
  const products = await getProducts({ page: 1, locale: lng });
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await useTranslation(lng);
  return (
    <Container>
      <Header>{t("products")} </Header>

      <Products products={products} lang={lng} />
    </Container>
  );
};

export default page;
