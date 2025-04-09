import ButtonComp from "./components/common/ButtonComp";
import HeadingComp from "./components/common/HeadingComp";
import ContentAsideImage from "./components/ContentAsideImage";
import InfoSection from "./components/InfoSection";

function App() {
  return (
    <main>
      <HeadingComp heading="Our Works" />
      <ContentAsideImage
        heading="Helping Blind & leprosy patients"
        para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
      >
        <ButtonComp as="a" href="/">
          Contribute
        </ButtonComp>
      </ContentAsideImage>
      <InfoSection infoData={infoData} />
    </main>
  );
}

const infoData = [
  {
    id: 1,
    imgSrc: "/images/image2.webp",
    title: "Blood donation & medical camps",
  },
  {
    id: 2,
    imgSrc: "/images/image3.webp",
    title: "Food Distribution",
    className: "col-span-2",
  },
  {
    id: 3,
    imgSrc: "/images/image4.webp",
    title: "Old age home",
    className: "col-span-2",
  },
  {
    id: 4,
    imgSrc: "/images/image5.webp",
    title: "Helping underprivilege",
  },
];

export default App;
