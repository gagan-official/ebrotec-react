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
          : "px-[25px] py-[12px] rounded-full text-[#fff] bg-[var(--button)] hover:bg-[var(--buttonHover)]"
      } cursor-pointer active:scale-95 transition-all ${className}`}
      {...props}
    >
      {children}
    </Element>
  );
}

export default ButtonComp;
