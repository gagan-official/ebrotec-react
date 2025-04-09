function ButtonComp({
  children,
  className = "",
  link,
  as = "button",
  ...props
}) {
  const Element = as;
  return (
    <Element
      className={`${
        link
          ? "text-[var(--button)] hover:text-[var(--buttonHover)]"
          : "px-[1.6rem] py-[.6rem] rounded-full text-[#fff] bg-[var(--button)] hover:bg-[var(--buttonHover)]"
      } cursor-pointer active:scale-95 transition-all ${className}`}
      {...props}
    >
      {children}
    </Element>
  );
}

export default ButtonComp;
