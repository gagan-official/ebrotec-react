import ContainerComp from "./common/ContainerComp";
import ImageWithHeading from "./ImageWithHeading";

function InfoSection({ infoData }) {
  return (
    <ContainerComp as="section" className="my-[50px] grid grid-cols-3 gap-[40px]">
      {infoData.map(({ id, imgSrc, title, className }) => (
        <ImageWithHeading
          key={id}
          imgSrc={imgSrc}
          title={title}
          className={className}
        />
      ))}
    </ContainerComp>
  );
}

export default InfoSection;
