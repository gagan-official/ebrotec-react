function ImageWithHeading({
  imgSrc = "/images/image2.webp",
  title = "Title here",
  className = "",
}) {
  return (
    <div
      className={`photoWithHeadingContainer flex flex-col items-center group ${className}`}
    >
      <img
        src={imgSrc}
        alt="helper image"
        className="border-[15px] border-[var(--primary)] rounded-[30px] object-cover w-full h-full group-hover:border-[var(--button)]"
      />
      <h3 className="text-[20px] font-semibold text-center py-[15px] px-[30px] mx-[40px] rounded-b-[30px] bg-[var(--primary)] group-hover:bg-[var(--button)] group-hover:text-[#fff]">
        {title}
      </h3>
    </div>
  );
}

export default ImageWithHeading;
