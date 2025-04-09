import ContainerComp from "./common/ContainerComp";
import ImageWithHeading from "./ImageWithHeading";

function InfoSection({ infoData }) {
  return (
    <ContainerComp as="section" className="my-[50px] grid lg:grid-cols-3 gap-[20px] sm:gap-[40px]">
      {infoData.map(({ id, imgSrc, title, className, imgClass }) => (
        <ImageWithHeading
          key={id}
          imgSrc={imgSrc}
          title={title}
          className={className}
          imgClass={imgClass}
        />
      ))}
    </ContainerComp>
  );
}

export default InfoSection;
