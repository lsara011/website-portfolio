import React from "react";
import Container from "./Container";

type Props = {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
};

const Section = ({ id, title, subtitle, children }: Props) => (
  <section id={id} className="py-16 sm:py-20">
    <Container>
      {title && (
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-2 max-w-2xl mx-auto text-gray-600">{subtitle}</p>
          )}
        </div>
      )}
      {children}
    </Container>
  </section>
);

export default Section;
