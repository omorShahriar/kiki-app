import { getNavigationData } from "@/lib/api";
import MainMenu from "@/components/MainMenu";
import Container from "@/components/Container";
import ThemeToggle from "@/components/ThemeToggle";

import Image from "next/image";
import MobileMenu from "./MobileMenu";
import LanguageSelector from "./LanguageSelector";
import Link from "next/link";

const Navigation = async ({ lang }) => {
  const navElementsData = await getNavigationData(lang);

  return (
    <div className="py-4   ">
      <Container>
        <div className="flex justify-between items-center  ">
          <div className="logo rounded-md overflow-hidden ">
            <Link href="/">
              {" "}
              <Image
                src="/logo.png"
                width={100}
                height={60}
                alt="kiki and ami logo"
              />
            </Link>
          </div>
          <ul className="hidden md:flex gap-x-4">
            <MainMenu navElements={navElementsData} />
          </ul>
          <div className="flex gap-x-4 items-center">
            <div className="min-h-[32px] min-w-[32px] ">
              <LanguageSelector lang={lang} />
            </div>{" "}
            <div className=" w-12 h-12 flex items-center justify-center">
              {" "}
              <ThemeToggle />
            </div>
            <div className="md:hidden ">
              <MobileMenu navElements={navElementsData} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navigation;
