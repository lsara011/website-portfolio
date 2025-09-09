import { forwardRef, useLayoutEffect, useRef } from "react";
import "./Styling/App.css";
import PageWrapper from "./PageWrapper";

const TITLES = [
  "Web Developer",
  "Applications Developer",
  "Miami Based",
  "Pool Player",
  "Musician",
  "Chef",
  "Frontend Engineer",
  "Full-Stack Developer",
  "React & TypeScript",
  "C# / .NET Developer",
  "iOS / SwiftUI",
  "Node.js & Express",
  "SQL & EF Core",
  "Azure & DevOps",
  "RAG / AI Apps",
  "Clean UI Designer",
  "Accessibility-Minded",
  "Performance Focused",
  "Problem Solver",
  "Team Player",
  "Lifelong Learner",
];

export default function MainSection() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const firstListRef = useRef<HTMLDivElement>(null);

  // Measure the first list so the loop distance equals its exact pixel height.
  useLayoutEffect(() => {
    const setVars = () => {
      const h = firstListRef.current?.getBoundingClientRect().height ?? 0;
      if (!viewportRef.current) return;
      viewportRef.current.style.setProperty("--list-h", `${h}px`);
      // Speed scales with list length; tweak 1.1 to taste or set a fixed value.
      viewportRef.current.style.setProperty(
        "--marquee-duration",
        `${Math.max(12, TITLES.length * 1.1)}s`
      );
    };
    setVars();
    window.addEventListener("resize", setVars);
    return () => window.removeEventListener("resize", setVars);
  }, []);

  return (
    <PageWrapper>
<section className="bg-black text-white min-h-[100svh] overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 h-[calc(100svh-4rem)] flex items-start justify-start">
        <div
          ref={viewportRef}
          className="relative w-full overflow-hidden"
          aria-label="scrolling titles"
        >

          <div
            className="
              will-change-transform
              bg-clip-text text-transparent
              [background-image:linear-gradient(270deg,#ff0080,#7928ca,#2af598,#00f0ff,#ff0080)]
              bg-[length:300%_300%]
            "
            style={{
              animation: `v-marquee var(--marquee-duration, 28s) linear infinite, gradient-shift 8s linear infinite`,
            }}
          >
            <List ref={firstListRef} />
            <List />
          </div>
        </div>
      </div>
    </section>
    </PageWrapper>
    
  );
}

const List = forwardRef<HTMLDivElement, {}>(function List(_, ref) {
  return (
    <div ref={ref} className="flex flex-col gap-0 leading-none flex-none">
      {TITLES.map((t, i) => (
        <h1
          key={`${t}-${i}`}
          className="
            m-0 select-none text-left tracking-tight
            text-[clamp(32px,12vw,160px)]
            leading-[0.9]
          "
        >
          {t}
        </h1>
      ))}
    </div>
  );
});
