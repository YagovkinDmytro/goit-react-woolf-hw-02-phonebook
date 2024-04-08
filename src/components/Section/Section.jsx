const Section = ({ title, children }) => {
  return (
    <div>
      {title && <h2 className="section-title">{title}</h2>}
      {children}
    </div>
  );
};

export default Section;
