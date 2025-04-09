function ContainerComp({ children, as = "div", className = "", ...props }) {
  const Element = as;
  return (
    <Element className={`container mx-auto px-[1rem] ${className}`} {...props}>
      {children}
    </Element>
  );
}

export default ContainerComp;
