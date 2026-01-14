import PageWrapper from "../PageWrapper";

export default function About() {
  return (
    <PageWrapper>
      <section className="bg-black text-white min-h-[calc(100svh-4rem)] overflow-y-auto">
        <div className="max-w-screen-xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-start">
          <div className="flex md:block justify-center">
            <div className="aspect-[4/5] w-64 md:w-[22rem] rounded-2xl overflow-hidden bg-gray-800 shadow-2xl ring-1 ring-white/10">
              <div className="h-full w-full flex items-center justify-center text-gray-400">
                <img src="/Images/Portrait.jpg" alt="" />
              </div>
            </div>
          </div>

          <div className="space-y-10">
            <header className="space-y-4">
              <h1
                className="
                  text-5xl md:text-6xl font-extrabold leading-tight
                  bg-clip-text text-transparent
                  [background-image:linear-gradient(270deg,#00f6ff,#ff6ec7,#8b5cf6,#00f6ff)]
                  bg-[length:300%_300%]
                  [animation:gradient-shift_8s_linear_infinite]
                "
              >
                Hi Everyone,
              </h1>

              <p className="text-lg leading-relaxed text-gray-300">
                I’m <span className="font-semibold text-white">Luis Saravia</span>, a{" "}
                <span className="text-blue-400 font-medium">
                  Software Engineering Gradute from Miami Dade College
                </span>{" "}
                who loves building practical, user-focused applications. I started my technical 
                journey in 2023, when i first touched my line of code in CodeCademy. I enrolled
                in Miami Dade College in January 2024 and finished my Bachelor's Degree in Information 
                Systems Technology with a Software Engineering Focus.
                <br />
                Some of the courses that i have taken during my time in college included:
              </p>
              <ul className="text-blue-400 font-medium pl-4 list-disc list-inside">
                <li>Software Engineering I & II</li>
                <li>iPhone Development I & II</li>
                <li>C++, Python, Java, and SQL Courses</li>
                <li>System Analysis and Design</li>
                <li>Discrete Structures, Data Structures, and Design and Analysis of Algorithms</li>
                <li>Natural Language Processing</li>
                <li>Introduction to Artificial Intelligence</li>
              </ul>

              <p className="text-lg leading-relaxed text-gray-300">
                Outside of code, I’m a competitive <strong>pool player 🎱</strong> overseeing my 8-ball team as captain, a{" "}
                <strong>musician 🎶</strong>, and a <strong>chef 👨‍🍳</strong>. Those
                hobbies sharpen creativity, discipline, and attention to detail—qualities I bring
                to every project.
              </p>

              <p className="text-lg leading-relaxed text-gray-300">
                I bring a mix of <span className="font-medium text-white">technical skills</span>,
                a <span className="font-medium text-white">team-first mindset</span>, and a drive to{" "}
                <span className="font-medium text-white">solve real problems</span> with clean,
                thoughtful solutions.
              </p>

              <p className="text-2xl">
                Yours Truly, Luis Saravia 
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="/Luis_Saravia_Tech_Resume2025.pdf" target="_blank"
                  className="px-6 py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition"
                >
                  Check My Resume
                </a>
                <a
                  href="mailto:luissaraviawd@gmail.com?subject=Project%20inquiry"
                  className="px-6 py-3 rounded-lg border border-white/20 hover:bg-white/10 transition"
                >
                  Email Me
                </a>
              </div>
            </header>

            <section aria-labelledby="stack" className="space-y-6">
              <h2 id="stack" className="text-2xl font-semibold">Technology Stack</h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <StackGroup
                  title="Languages"
                  items={[
                    "JavaScript (ES6+)",
                    "TypeScript",
                    "Java",
                    "C++",
                    "C#",
                    "Python",
                    "Swift",
                  ]}
                />
                <StackGroup
                  title="Frontend"
                  items={[
                    "React / Vite",
                    "Tailwind CSS",
                    "HTML5 / CSS3",
                    "Framer Motion",
                    "SwiftUI (iOS)",
                  ]}
                />
                <StackGroup
                  title="Backend"
                  items={[
                    "Node.js & Express",
                    ".NET (C#)",
                    "REST APIs",
                  ]}
                />
                <StackGroup
                  title="Databases"
                  items={["SQL / EF Core", "MongoDB", "Azure AI Search", "DynamoDB", "MariaDB"]}
                />
                <StackGroup
                  title="Cloud & DevOps"
                  items={["Azure & DevOps", "Netlify / Vercel", "GitHub / Git"]}
                />
                <StackGroup
                  title="Tools"
                  items={["Figma", "Visual Studio / VS Code", "Postman"]}
                />
              </div>
            </section>
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto px-6 pb-6 pt-10">
          <div className="border-t border-white/10 pt-10">
            <h2 className="text-2xl font-semibold">Life Outside of Code</h2>
            <p className="text-gray-300 mt-2 mb-6 max-w-2xl">
              A few snapshots from my world—competition, music, cooking, and time with people
              I care about.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <PhotoCard label="Pool" src="/Images/pool.JPEG"/>
              <PhotoCard label="Cooking" src="/Images/food.jpg" />
              <PhotoCard label="Music" src="/Images/band.JPG"/>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}

function StackGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="font-medium text-white mb-3">{title}</h3>
      <ul className="flex flex-wrap gap-2">
        {items.map((t) => (
          <li
            key={t}
            className="text-sm rounded-md px-3 py-1 bg-white/5 text-gray-300 hover:bg-white/10 transition"
          >
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}

function PhotoCard({ src, label }: { src: string; label: string }) {
  return (
    <figure className="group rounded-xl overflow-hidden bg-white/5 shadow-lg ring-1 ring-white/10">
      <img
        src={src}
        alt={label}
        className="aspect-square w-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <figcaption className="px-3 py-2 text-xs text-gray-400 bg-black/40 backdrop-blur-sm">
        {label}
      </figcaption>
    </figure>
  );
}