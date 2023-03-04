import { getAboutPageData } from "@/lib/api";
import MarkDown from "@/components/MarkDown";
import Container from "@/components/Container";

export const metadata = {
  title: "About Us",
};

const About = async ({ params: { lng } }) => {
  const blockData = await getAboutPageData(lng);

  return (
    <Container>
      <div className=" prose lg:prose-xl dark:prose-dark max-w-none mb-20">
        <MarkDown content={blockData.content} />
      </div>
    </Container>
  );
};

export default About;
