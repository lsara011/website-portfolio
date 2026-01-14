import PageWrapper from "../PageWrapper";
import SS1 from "../../public/Images/ChatbotScreenshots/ss1.png";
import SS2 from "../../public/Images/ChatbotScreenshots/ss2.png";
import SS3 from "../../public/Images/ChatbotScreenshots/ss3.png";
import SS4 from "../../public/Images/ChatbotScreenshots/ss4.png";
import OSS1 from "../../public/Images/OutagentScreenshots/Outagentss1.png";
import OSS2 from "../../public/Images/OutagentScreenshots/Outagentss2.png";
import EPVid from "../../public/Images/EchoPathFinalCut (1).mp4";
import EPSS from "../../public/Images/EchoPath.png";
import { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="
        fixed bottom-6 right-6 z-50
        group flex items-center gap-2
        bg-black text-white
        rounded-full
        px-3 py-3
        shadow-lg
        overflow-hidden
        transition-all duration-300 ease-in-out
        hover:px-5
      "
    >
      {/* Arrow */}
      <span className="text-lg">↑</span>

      {/* Text */}
      <span
        className="
          max-w-0 overflow-hidden whitespace-nowrap
          opacity-0
          transition-all duration-300 ease-in-out
          group-hover:max-w-[120px]
          group-hover:opacity-100
        "
      >
        Scroll to top
      </span>
    </button>
  );
};

const Projects = () => {
  return (
    <PageWrapper>
      <section className="max-w-800 flex flex-col align-center">
        <div className="max-w-screen-xl mx-auto px-6 pt-14 pb-12 text-center">
          <h1
            className="
            text-4xl md:text-5xl font-extrabold
            bg-clip-text text-transparent
            [background-image:linear-gradient(270deg,#00f6ff,#ff6ec7,#8b5cf6,#00f6ff)]
            bg-[length:300%_300%]
            [animation:gradient-shift_8s_linear_infinite]
          "
          >
            Projects
          </h1>
        </div>
        <div className="text-white p-8 m-auto text-2xl max-w-200 flex justify-center border-b-1 border-gray-500">
          Throughout my time as a software engineering student, I have built a
          variety of projects to showcase my technical skills, problem-solving
          abilities, and interest in full-stack development. These projects
          include both academic work and independently built applications,
          reflecting my ability to take initiative, learn new technologies, and
          apply concepts beyond the classroom.
        </div>

        <div className=" flex justify-center flex-col m-auto border-white-200">
          <div className="max-w-screen-xl mx-auto px-8 pt-14 pb-12 text-left">
            <h1
              className="
            text-4xl md:text-5xl font-extrabold
            bg-clip-text text-transparent
            [background-image:linear-gradient(270deg,#00f6ff,#ff6ec7,#8b5cf6,#00f6ff)]
            bg-[length:300%_300%]
            [animation:gradient-shift_8s_linear_infinite]
          "
            >
              ChalkBot
            </h1>
          </div>
          <div className="text-white pl-8 pr-8 max-w-200 m-auto text-2xl flex justify-center">
            ChalkBot is an Artificial Intelligence chatbot that focuses on the
            American Poolplayers Association's (APA) rules and regulations.
            Chalkbot is grounded with APA's documentation on rules using the
            Retrieval Augemnted Generation (RAG) Architecture, meaning that the
            chatbot will focus solely on the documentation and will not answer
            questions outside on what it is trained on.
          </div>
          <div className="m-auto text-center p-5">
            <h3 className="m-auto text-white text-2xl font-semibold mb-3">
              Tech Stack
            </h3>

            <div className="m-auto flex flex-wrap gap-3">
              <span className="text-white border border-gray-600 px-3 py-1 rounded-full text-m">
                React
              </span>
              <span className="text-white border border-gray-600 px-3 py-1 rounded-full text-m">
                Tailwind CSS
              </span>
              <span className="text-white border border-gray-600 px-3 py-1 rounded-full text-m">
                .NET
              </span>
              <span className="text-white border border-gray-600 px-3 py-1 rounded-full text-m">
                OpenAI Platform
              </span>
              <span className="text-white border border-gray-600 px-3 py-1 rounded-full text-m">
                C#
              </span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-6 border-b border-grey-600 m-10">
            <img
              src={SS1}
              alt="ChalkBot screenshot 1"
              className="
      max-h-175
      rounded-xl
      border border-gray-700
      shadow-lg
      transition
      duration-300
      hover:scale-105
    "
            />

            <img
              src={SS2}
              alt="ChalkBot screenshot 2"
              className="
      max-h-175
      rounded-xl
      border border-gray-700
      shadow-lg
      transition
      duration-300
      hover:scale-105
    "
            />

            <img
              src={SS3}
              alt="ChalkBot screenshot 3"
              className="
      max-h-175
      rounded-xl
      border border-gray-700
      shadow-lg
      transition
      duration-300
      hover:scale-105
    "
            />

            <img
              src={SS4}
              alt="ChalkBot screenshot 4"
              className="
      max-h-175
      rounded-xl
      border border-gray-700
      shadow-lg
      transition
      duration-300
      hover:scale-105
    "
            />
          </div>
        </div>
        <div className="text-white pl-8 pr-8 max-w-200 m-auto text-2xl flex justify-center border-b border-gray-600">
          Since Artifical Intelligence is growing in our world, I wanted to
          create a project that can bridge the gap between my hobby and today's
          technology. During my internship, I have built an Artificial
          Intelligence chatbot for the company, which resulted in massive
          positive feedback from my team and the company as a whole. For this
          project, i wanted to leverage OpenAI's Platform to get quick and easy
          responses from the documentation that it is trained on. React is my
          go-to library for creating the user interface; Easy to learn after
          learning Javascript. After learning C# in my internship, this also
          became my go-to backend for connecting with AI Platform's API's
          Lastly, TailwindCSS became a huge toolset in styling my webpages, even
          in this website portfolio as well. I had alot of fun creating this
          project and hope that this can become something APA can use in the
          future!
        </div>
        <div className="max-w-screen-xl mx-auto px-6 pt-14 pb-12 text-center">
          <h1
            className="
            text-4xl md:text-5xl font-extrabold
            bg-clip-text text-transparent
            [background-image:linear-gradient(270deg,#00f6ff,#ff6ec7,#8b5cf6,#00f6ff)]
            bg-[length:300%_300%]
            [animation:gradient-shift_8s_linear_infinite]
          "
          >
            Outagent
          </h1>
        </div>
        <div className="text-white pl-8 pr-8 max-w-200 m-auto text-2xl flex justify-center">
          Outagent is a decentralized outage-forecasting system powered by
          machine learning models such as LightGBM, trained on weather and
          electric demand data from sources including FPL and NASA to estimate
          the probability of power outages under varying demand and inclement
          weather conditions. The system uses two dedicated models: a weather
          model trained on factors such as wet-bulb temperature, wind speed,
          precipitation, insulation, and humidity, and a demand model trained on
          electric load data within FPL’s service territory measured in
          megawatts. Both models generate up to 12-hour forecasts, which are
          visualized through interactive line charts in the application. I
          designed and implemented the front-end experience, connecting these
          predictive outputs to clear, user-friendly visualizations that make
          outage risk insights easy to interpret.
        </div>
        <div className="m-auto text-center p-5">
          <h3 className="m-auto text-white text-2xl font-semibold mb-4">
            Tech Stack
          </h3>

          <div className="m-auto flex flex-wrap justify-center gap-3 max-w-3xl">
            <span className="text-white border border-gray-600 px-4 py-1 rounded-full text-sm">
              React
            </span>
            <span className="text-white border border-gray-600 px-4 py-1 rounded-full text-sm">
              Tailwind CSS
            </span>

            <span className="text-white border border-gray-600 px-4 py-1 rounded-full text-sm">
              FastAPI
            </span>
            <span className="text-white border border-gray-600 px-4 py-1 rounded-full text-sm">
              Uvicorn
            </span>
            <span className="text-white border border-gray-600 px-4 py-1 rounded-full text-sm">
              Python
            </span>

            <span className="text-white border border-gray-600 px-4 py-1 rounded-full text-sm">
              Pandas
            </span>
            <span className="text-white border border-gray-600 px-4 py-1 rounded-full text-sm">
              NumPy
            </span>
            <span className="text-white border border-gray-600 px-4 py-1 rounded-full text-sm">
              scikit-learn
            </span>
            <span className="text-white border border-gray-600 px-4 py-1 rounded-full text-sm">
              LightGBM
            </span>
            <span className="text-white border border-gray-600 px-4 py-1 rounded-full text-sm">
              Joblib
            </span>

            <span className="text-white border border-gray-600 px-4 py-1 rounded-full text-sm">
              NOAA API
            </span>
            <span className="text-white border border-gray-600 px-4 py-1 rounded-full text-sm">
              FEMA API
            </span>
            <span className="text-white border border-gray-600 px-4 py-1 rounded-full text-sm">
              EIA API
            </span>
            <span className="text-white border border-gray-600 px-4 py-1 rounded-full text-sm">
              OpenStreetMap (Overpass)
            </span>
          </div>
        </div>

        <div className="flex m-auto flex-row flex-wrap justify-center items-center max-h-300 w-auto">
          <img
            src={OSS1}
            className="max-h-150 w-auto rounded-xl
      border border-gray-700
      shadow-lg
      transition
      duration-300
      hover:scale-105"
            alt=""
          />
          <img
            src={OSS2}
            className="max-h-150 w-auto rounded-xl
      border border-gray-700
      shadow-lg
      transition
      duration-300
      hover:scale-105"
            alt=""
          />
        </div>
        <div className="text-white pl-8 pr-8 pt-10 max-w-200 m-auto text-2xl flex justify-center border-b border-gray-600">
          This project was developed during the ShellHacks hackathon as a
          collaborative team effort and received positive feedback from both
          peers and sponsors. My primary contribution focused on the front-end
          implementation, where I integrated the Google Maps API and connected
          the interface to the backend services, enabling real-time
          visualization of predictive charts and geographic risk data in an
          intuitive and interactive dashboard.
        </div>
      </section>
      <div className="max-w-screen-xl mx-auto px-6 pt-14 pb-12 text-center">
        <h1
          className="
            text-4xl md:text-5xl font-extrabold
            bg-clip-text text-transparent
            [background-image:linear-gradient(270deg,#00f6ff,#ff6ec7,#8b5cf6,#00f6ff)]
            bg-[length:300%_300%]
            [animation:gradient-shift_8s_linear_infinite]
          "
        >
          EchoPath
        </h1>
      </div>

      <div className="text-white pl-8 pr-8 pt-10 max-w-200 m-auto text-2xl flex justify-center">
        EchoPath is a fully operational learning platform developed as a
        capstone project that delivers an end-to-end, role-based experience for
        children with communication challenges. The system consists of a Nuxt.js
        web frontend and a Django REST API backed by PostgreSQL, supporting
        secure authentication for admins, therapists, parents, and children. It
        enables therapists to create, assign, and track interactive lessons,
        while children engage in guided learning sessions featuring
        word-arrangement activities, progress tracking, and companion selection.
        The platform includes dashboards, analytics, reporting, and a
        progressive web app experience with offline support. All core features
        have been implemented, tested, and deployed, with APIs fully prepared to
        integrate with an Apple Vision Pro application built in visionOS and
        SwiftUI, allowing the immersive spatial experience to focus entirely on
        interactive learning while relying on the existing backend for data,
        sessions, and analytics.
      </div>
      <div className="m-auto text-center p-5">
        <h3 className="m-auto text-white text-2xl font-semibold mb-4">
          Tech Stack
        </h3>

        <div className="m-auto flex flex-wrap justify-center gap-3 max-w-4xl">
          {/* Vision App */}
          <span className="text-white border border-gray-600 px-4 py-1 rounded-full text-sm">
            visionOS
          </span>
          <span className="text-white border border-gray-600 px-4 py-1 rounded-full text-sm">
            SwiftUI
          </span>
          <span className="text-white border border-gray-600 px-4 py-1 rounded-full text-sm">
            Apple Vision Pro
          </span>

          {/* Web Frontend */}
          <span className="text-white border border-gray-600 px-4 py-1 rounded-full text-sm">
            Nuxt.js
          </span>
          <span className="text-white border border-gray-600 px-4 py-1 rounded-full text-sm">
            Vue.js
          </span>
          <span className="text-white border border-gray-600 px-4 py-1 rounded-full text-sm">
            TypeScript
          </span>
          <span className="text-white border border-gray-600 px-4 py-1 rounded-full text-sm">
            Tailwind CSS
          </span>

          {/* Backend */}
          <span className="text-white border border-gray-600 px-4 py-1 rounded-full text-sm">
            Django
          </span>
          <span className="text-white border border-gray-600 px-4 py-1 rounded-full text-sm">
            Python
          </span>
          <span className="text-white border border-gray-600 px-4 py-1 rounded-full text-sm">
            REST API
          </span>

          {/* Database */}
          <span className="text-white border border-gray-600 px-4 py-1 rounded-full text-sm">
            PostgreSQL
          </span>

          {/* Platform */}
          <span className="text-white border border-gray-600 px-4 py-1 rounded-full text-sm">
            Progressive Web App (PWA)
          </span>
          <span className="text-white border border-gray-600 px-4 py-1 rounded-full text-sm">
            JWT Authentication
          </span>
        </div>
      </div>

      <div className="flex flex-col align-center">
        <video src={EPVid} controls className="h-200 w-auto m-auto"></video>
        <img src={EPSS} className="max-w-[80%] h-auto m-auto" alt="" />
      </div>
      <div className="text-white pl-8 pr-8 pt-10 max-w-200 m-auto text-2xl flex justify-center pb-10">
        This project involved a significant learning curve due to the
        introduction of a new operating system and the use of SwiftUI; however,
        through continuous learning and iteration, our team successfully
        developed a functional prototype that received positive feedback from
        professors, administration, and fellow students. In addition to
        development, the project included comprehensive documentation such as
        the Software Design Specification (SDS) and Software Requirements
        Specification (SRS), which detailed the system design, architecture, and
        requirements, ensuring clarity and alignment throughout the process. The
        long-term vision for EchoPath is for it to evolve into a companion
        application that supports therapists by enhancing engagement and
        effectiveness in communication-focused therapy.
      </div>
      <ScrollToTopButton />
    </PageWrapper>
  );
};

export default Projects;
