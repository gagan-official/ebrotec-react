import ContainerComp from "./common/ContainerComp";

function ContentAsideImage({
  heading = "Your Heading here",
  para = "Your para here",
  imgSrc = "/images/image1.webp",
  children,
}) {
  return (
    <ContainerComp as="section">
      <div className="bg-[var(--primary)] rounded-[25px] flex gap-[1rem] xl:gap-0 xl:flex-row flex-col-reverse">
        <img
          className="xl:my-[-5px] rounded-[25px] xl:w-[60%] aspect-[633/448] object-cover -scale-x-100"
          src={imgSrc}
          alt="helper image"
        />
        <div className="px-[30px] py-[20px] sm:px-[40px] sm:py-[30px] md:py-[80px] md:px-[100px]">
          <h2 className="font-['Open_Sans'] md:leading-[44px] font-semibold text-[25px] sm:text-[28px] md:text-[34px]">
            {heading}
          </h2>
          {para && (
            <p className="text-[18px] md:text-[20px] my-[20px]">{para}</p>
          )}
          {children}
        </div>
      </div>
    </ContainerComp>
  );
}

export default ContentAsideImage;
