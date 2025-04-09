import ContainerComp from "./common/ContainerComp";
import HeadingComp from "./common/HeadingComp";
import PillCard from "./common/PillCard";

function CardsAsideContent({}) {
  return (
    <ContainerComp
      as="section"
      className="flex items-center lg:flex-row flex-col gap-[30px] lg:gap-[50px] my-[30px] md:my-[70px]"
    >
      <div className="leftContainer">
        <HeadingComp heading="Stories Of Change" />
        <p className="sm:text-[20px] lg:text-[24px] mt-[10px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu
        </p>
      </div>
      <div className="rightContainer flex flex-wrap gap-[30px] md:gap-0 lg:w-auto justify-around w-full shrink-0">
        {cardData.map(({ id, ...items }) => (
          <PillCard key={id} {...items} />
        ))}
      </div>
    </ContainerComp>
  );
}

const cardData = [
  {
    id: 1,
    heading: "A Journey of Hope and Support",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    imgSrc: "/images/image6.webp",
  },
  {
    id: 2,
    heading: "A Journey of Hope and Support",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    imgSrc: "/images/image7.webp",
    className: "lg:scale-90 lg:origin-right",
  },
];

export default CardsAsideContent;
