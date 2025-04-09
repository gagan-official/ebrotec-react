import CardsAsideContent from "./components/CardsAsideContent";
import ButtonComp from "./components/common/ButtonComp";
import ContainerComp from "./components/common/ContainerComp";
import HeadingComp from "./components/common/HeadingComp";
import ContentAsideImage from "./components/ContentAsideImage";
import InfoSection from "./components/InfoSection";

function App() {
  return (
    <main>
      <ContainerComp className="my-[30px] md:my-[60px]">
        <HeadingComp heading="Our Works" />
      </ContainerComp>
      <ContentAsideImage
        heading="Helping Blind & leprosy patients"
        para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
      >
        <ButtonComp as="a" href="/" className="inline-block">
          Contribute
        </ButtonComp>
      </ContentAsideImage>
      <InfoSection infoData={infoData} />
      <CardsAsideContent />
    </main>
  );
}

const infoData = [
  {
    id: 1,
    imgSrc: "/images/image2.webp",
    title: "Blood donation & medical camps",
    imgClass: "lg:aspect-square",
  },
  {
    id: 2,
    imgSrc: "/images/image3.webp",
    title: "Food Distribution",
    imgClass: "lg:max-h-[304px] xl:max-h-[389px] 2xl:max-h-[476px]",
    className: "lg:col-span-2",
  },
  {
    id: 3,
    imgSrc: "/images/image4.webp",
    title: "Old age home",
    imgClass: "lg:max-h-[304px] xl:max-h-[389px] 2xl:max-h-[476px]",
    className: "lg:col-span-2",
  },
  {
    id: 4,
    imgSrc: "/images/image5.webp",
    title: "Helping underprivilege",
    imgClass: "lg:aspect-square",
  },
];

export default App;
