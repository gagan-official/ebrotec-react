import ButtonComp from "./ButtonComp";

function PillCard({
  heading = "Your Heading here",
  desc = "Your description here",
  linkUrl = "/",
  imgSrc = "/images/image6.webp",
  className = "",
}) {
  return (
    <div
      className={`rounded-[25px] transition-transform duration-700 overflow-hidden bg-[var(--secondary)] w-full md:max-w-[313px] shrink-0 ${className}`}
    >
      <img
        src={imgSrc}
        alt="card helper image"
        className="aspect-[4/3] object-cover w-full"
      />
      <div className="innerCont p-[20px]">
        <h4 className="text-[17px] lg:text-[19px] font-semibold capitalize">
          {heading}
        </h4>
        <p className="text-[15px] lg:text-[18px] mt-[5px]">{desc}</p>
        <ButtonComp
          as="a"
          link
          href={linkUrl}
          className="mt-[20px] inline-block sm:text-[20px] lg:text-[24px] font-semibold"
        >
          Read More
        </ButtonComp>
      </div>
    </div>
  );
}

export default PillCard;
