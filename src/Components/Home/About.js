import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full  bg-gradient-to-b from-gray-900 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-lg mt-20">
          I work as a full-stack web application developer. I am fully equipped
          with knowledge, skills, and experience. As a web developer, I am also
          a self-motivated and hard worker. I try to learn new technology on a
          regular basis. To become a prominent developer, I want to learn a lot
          more about technology.
        </p>

        <br />

        <p className="text-lg mb-2">
          <h2 className="mb-2">
            I have Web Technical Skills in the following areas:
          </h2>
          <ul>
            <li>
              <span className="font-bold">Experiences :</span> HTML 5, CSS 3,
              Bootstrap 5, Tailwind CSS JavaScript, ES 6, React.js, React
              Router, REST API, Firebase Authentication, JSON.
            </li>
            <li>
              <span className="font-bold">Comfortable :</span> React Bootstrap,
              React Hooks, Daisy UI, Mongo DB, Express JS, Node JS.
            </li>
            <li>
              <span className="font-bold">Familiar :</span> React Native, Next
              JS, Type Scripts.
            </li>
            <li>
              <span className="font-bold">Tools :</span> VS Code Editor, GitHub,
              Netlify, Heroku.{" "}
            </li>
          </ul>
        </p>

        <br />

        <p className="text-lg">
          <ul>
            <li>
              <span className="font-bold">GitHub Link :</span>{" "}
              https://github.com/Abdul-Rakib92
            </li>
            <li>
              <span className="font-bold">Email :</span>{" "}
              abdul.rakib1792@gmail.com
            </li>
            <li>
              <span className="font-bold">Phone :</span> +8801791757929
            </li>
            <li>
              <span className="font-bold">My Resume :</span>{" "}
              https://drive.google.com/file/d/1Y9qWIBdkGcFTlkZNG9qdakBh-ma0vpjO/view?usp=sharing
            </li>
          </ul>
        </p>

        <br />

        <p className="text-lg">
          If you have questions regarding my credentials or anything else about
          myself, please feel free to email me. Thank you for your time and
          consideration.
        </p>
      </div>
    </div>
  );
};

export default About;
