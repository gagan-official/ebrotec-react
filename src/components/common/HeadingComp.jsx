import ContainerComp from "./ContainerComp";

function HeadingComp({ heading = "Give your Heading here" }) {
  return (
    <ContainerComp className="my-[2rem]">
      <h1 class="text-[40px] sm:text-[50px] md:text-[60px] xl:text-[70px] font-medium">{heading}</h1>
    </ContainerComp>
  );
}

export default HeadingComp;
