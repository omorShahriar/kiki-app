import { PrimaryHeading } from "@/components/Heading";
import { getCategories } from "@/lib/api";
import Link from "next/link";

export const metadata = {
  title: "Categories",
};

const layout = async ({ children, params: { lng } }) => {
  const categoryData = await getCategories();

  return (
    <>
      {" "}
      <div className="md:flex w-full min-h-[calc(100vh-82px-66px)] hidden">
        <div className=" max-h-[calc(100vh-82px-66px)] sticky top-[calc(82px+66px)] min-w-[270px] w-[270px] border-r-2 border-r-gray-300 dark:border-r-zinc-700 p-8">
          <PrimaryHeading>Categories</PrimaryHeading>
          <ul className="flex flex-col gap-y-8">
            {categoryData.map((category) => (
              <li
                key={category.attributes.slug}
                className="text-xl font-medium"
              >
                <Link href={`${lng}/category/${category.attributes.slug}`}>
                  {category.attributes.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-grow px-8 pb-16">{children}</div>
      </div>
      <div className="md:hidden">{children}</div>
    </>
  );
};

export default layout;
