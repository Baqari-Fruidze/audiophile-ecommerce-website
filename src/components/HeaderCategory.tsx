export default function HeaderCategory({
  category,
}: {
  category: string | undefined;
}) {
  return (
    <div className="py-[32px] bg-[#000] md:py-[103px]">
      <h1 className="  text-[28px] text-[#fff] uppercase text-center font-bold tracking-[2px] md:text-[40px] md:leading-[44px] md:tracking-[1.429px]">
        {category}
      </h1>
    </div>
  );
}
