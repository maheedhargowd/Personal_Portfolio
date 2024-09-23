// App.js
import { projects } from "./Data";
import "./App.css";
import { useState } from "react";
import BubbleBackground from "./BubbleBackground";

function App() {
  const [showmail, setShowmail] = useState(false);

  function IntroSection() {
    return (
      <div className="blur-bg">
        <div className="font-medium text-4xl md:text-6xl ">Maheedhar Gowd</div>
        <div className="text-black text-2xl font-semibold mt-4 ml-1">
          Data Science Intern.
        </div>
        <div className="flex flex-col mt-2 md:flex-row ">
          <div className="flex items-center">
            <img src="./githublogo.png" className="w-8 h-8" />
            <a
              href="https://github.com/maheedhargowd"
              target="_blank"
              className="font-semibold underline hover:no-underline"
            >
              maheedhargowd
            </a>
          </div>
          <div
            className="flex items-center ml-0 md:ml-4 mt-1 md:mt-0 font-semibold underline hover:no-underline cursor-pointer"
            onClick={() => {
              showmail ? setShowmail(false) : setShowmail(true);
            }}
          >
            <img src="./gmailogo.png" className="w-6 h-6 mx-1" />
            <a href="mailto:maheedhargowd@gmail.com">Get in touch</a>
          </div>
          <div className="flex items-center ml-0 md:ml-4 mt-2 md:mt-0 font-semibold underline">
            {showmail && (
              <a href="mailto:maheedhargowd@gmail.com">
                maheedhargowd@gmail.com
              </a>
            )}
          </div>
        </div>
        <div className="mt-16 font-semibold text-2xl w-80 md:w-96 slide-in-right">
          Data Sceince enthusiast curious to transform DATA into INSIGHTS .
        </div>
      </div>
    );
  }

  function WorkExperience() {
    return (
      <div className="blur-bg bg-opacity-20 backdrop-blur-lg">
        <div className="flex flex-col md:flex-row p-8 md:p-12 mt-8 rounded-3xl shadow-lg border-2 hover:shadow-xl slide-in">
          <div className="w-full md:w-2/5 font-bold text-2xl flex flex-col ">
            <div className="cursor-pointer underline hover:no-underline">
              <a href="https://corizo.in/" target="_blank">
                Data Sceince Intern @ Corizo.
              </a>
            </div>
            <div className="text-xl mt-1">06/2024-08/2024</div>
          </div>
          <div className="w-full md:w-3/5 flex text-lg mt-8 md:mt-0">
            <div className="flex flex-col text-lg">
              <ul className="list-disc pl-5">
                <li>
                  <div className="flex flex-wrap">
                   <span>Helped launch the</span>
                     <a
                      href="https://github.com/maheedhargowd/corizo_major.git"
                      className="font-bold underline mx-1"
                      target="_blank"
                      rel="noopener noreferrer"
                      >
                      Multidimensional Data Analysis
                    </a>
                    {/* <span>with 50M+ users.</span> */}
                  </div>
                </li>
                <li className="mt-2">
                  Acquired comprehensive training in data science, focusing on advanced data analysis techniques and
                  model building .
                </li>
                <li className="mt-2">
                  Worked with Numpy Matrices for Multidimensional Data Analysis .
                </li>
                <li className="mt-2">
                  Optimized Semiconductor Manufacturing Yield Prediction through Feature Selection and Classification
                  Modeling .
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function RecentProjects() {
    return (
      <div className="blur-bg ">
        <div className="font-bold text-4xl mt-16 ">Recent Projects</div>
        <div className="grid grid-cols-1 mt-4  md:grid-cols-2 md:gap-x-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col justify-between p-4 border-2 rounded-xl shadow-lg my-4 hover:shadow-xl bg-opacity-20 backdrop-blur-lg"
            >
              <div className="flex mb-4 ">
                <div className="flex w-3/4 font-bold text-2xl underline hover:no-underline cursor-pointer">
                  <a href={project.sitelink} target="_blank">
                    {project.title}
                  </a>
                </div>
                <div className="flex w-1/4   justify-end">
                  <a href={project.github} target="_blank">
                    <img src="./githublogo.png" className="w-8 h-8" />
                  </a>
                </div>
              </div>
              <div className="mb-2 text-lg">{project.description}</div>
              <div className=" text-md">
                <div className="font-semibold mt-2 ">Built With:</div>
                <div className="flex flex-wrap">
                  {project.stack.map((tech, index) => (
                    <div
                      key={index}
                      className="py-1 px-2 border-2 border-gray-400 rounded-lg m-1 flex justify-center"
                      id="techblock"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className=" p-6 md:py-14 md:px-28">
      <BubbleBackground />
      <div className=" ">
        <IntroSection /> 
        <div className="">
        <WorkExperience />
        <RecentProjects />
        </div>
      </div>
    </div>
  );
}

export default App;
