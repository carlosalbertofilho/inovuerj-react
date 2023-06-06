/* eslint-disable react/prop-types */

export const Section = ({ children }) => {
  return (
    <section className="section">
      <div className="container">{children}</div>
    </section>
  );
};
