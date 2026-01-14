import PageWrapper from "../PageWrapper";
import SS1 from "../../public/Images/ChatbotScreenshots/ss1.png";
import SS2 from "../../public/Images/ChatbotScreenshots/ss2.png";
import SS3 from "../../public/Images/ChatbotScreenshots/ss3.png";
import SS4 from "../../public/Images/ChatbotScreenshots/ss4.png";
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

        
      </section>
    </PageWrapper>
  );
};

export default Projects;
