import { useTranslation } from "@/app/i18n";
import { AiOutlineLine, AiOutlineRight } from "react-icons/ai";
import Link from "next/link";
const ViewAll = async ({ lang, page }) => {
  const { t } = await useTranslation(lang);
  return (
    <Link
      href={`/${lang}/${page}`}
      className="font-sans font-bold text-theme-purple-deep text-2xl"
    >
      <div className="  ">
        <span className="relative  "> {t("to-all")}</span>
      </div>
    </Link>
  );
};

export default ViewAll;
