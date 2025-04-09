function HeadingComp({ heading = "Give your Heading here" }) {
  return (
    <h1 class="text-[40px] sm:text-[50px] md:text-[60px] xl:text-[70px] font-medium leading-[normal]">
      {heading}
    </h1>
  );
}

export default HeadingComp;
