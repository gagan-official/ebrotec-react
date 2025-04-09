function ImageWithHeading({
  imgSrc = "/images/image2.webp",
  title = "Title here",
  className = "",
  imgClass = "",
}) {
  return (
    <div
      className={`photoWithHeadingContainer flex flex-col items-center group ${className}`}
    >
      <img
        src={imgSrc}
        alt="helper image"
        className={`border-[10px] md:border-[15px] border-[var(--primary)] rounded-[20px] md:rounded-[30px] object-cover w-full group-hover:border-[var(--button)] transition-colors ${imgClass}`}
      />
      <h3 className="text-[14px] flex items-center md:text-[16px] xl:text-[20px] font-semibold text-center py-[10px] px-[20px] lg:py-[15px] lg:px-[30px] lg:min-h-[90px] mx-[40px] rounded-b-[20px] md:rounded-b-[30px] bg-[var(--primary)] group-hover:bg-[var(--button)] group-hover:text-[#fff] transition-colors">
        {title}
      </h3>
    </div>
  );
}

export default ImageWithHeading;
