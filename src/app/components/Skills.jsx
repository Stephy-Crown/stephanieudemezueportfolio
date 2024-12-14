// // import Image from "next/image";
// // export default function Skills() {
// //   const skills = {
// //     frontend: [
// //       { name: "React", image: "/images/react.png", level: 90 },
// //       { name: "Next.js", image: "/images/nextjs.png", level: 85 },
// //       { name: "Vue.js", image: "/images/vue.png", level: 80 },
// //       { name: "TypeScript", image: "/images/typescript.png", level: 85 },
// //       { name: "TailwindCSS", image: "/images/tailwindcss.png", level: 95 },
// //       { name: "SASS", image: "/images/sass.png", level: 88 },
// //     ],
// //     backend: [
// //       { name: "Node.js", image: "/images/nodejs.png", level: 85 },
// //       { name: "Python", image: "/images/python.png", level: 80 },
// //       { name: "Express.js", image: "/images/express.png", level: 85 },
// //       { name: "MongoDB", image: "/images/mongodb.png", level: 82 },
// //       { name: "PostgreSQL", image: "/images/postgresql.png", level: 78 },
// //       { name: "Firebase", image: "/images/firebase.png", level: 88 },
// //     ],
// //     tools: [
// //       { name: "Git", image: "/images/git.png", level: 90 },
// //       { name: "Docker", image: "/images/docker.png", level: 75 },
// //       { name: "VS Code", image: "/images/vscode.png", level: 95 },
// //       { name: "Figma", image: "/images/figma.png", level: 85 },
// //       { name: "AWS", image: "/images/aws.png", level: 70 },
// //       { name: "Jest", image: "/images/jest.png", level: 80 },
// //     ],
// //   };

// //   return (
// //     <section id="skills" className="py-24 bg-white">
// //       <div className="container mx-auto px-6">
// //         <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
// //           Skills & Technologies 🛠️
// //         </h2>

// //         <div className="max-w-6xl mx-auto space-y-16">
// //           {/* Frontend Skills */}
// //           <div>
// //             <h3 className="text-2xl font-bold mb-8 text-purple-600 flex items-center">
// //               🎨 Frontend Development
// //             </h3>
// //             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
// //               {skills.frontend.map((skill) => (
// //                 <div
// //                   key={skill.name}
// //                   className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all group text-center"
// //                 >
// //                   <div className="h-16 relative mb-4">
// //                     <Image
// //                       src={skill.image}
// //                       alt={skill.name}
// //                       layout="fill"
// //                       objectFit="contain"
// //                       className="group-hover:scale-110 transition-transform duration-300"
// //                     />
// //                   </div>
// //                   <h4 className="font-semibold text-gray-800">{skill.name}</h4>
// //                   {/* <div className="mt-2 w-full bg-gray-200 rounded-full h-1.5">
// //                       <div
// //                         className="bg-purple-600 h-1.5 rounded-full transition-all duration-1000"
// //                         style={{ width: `${skill.level}%` }}
// //                       ></div>
// //                     </div> */}
// //                 </div>
// //               ))}
// //             </div>
// //           </div>

// //           {/* Development Tools */}
// //           <div>
// //             <h3 className="text-2xl font-bold mb-8 text-purple-600 flex items-center">
// //               🔧 Development Tools
// //             </h3>
// //             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
// //               {skills.tools.map((skill) => (
// //                 <div
// //                   key={skill.name}
// //                   className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all group text-center"
// //                 >
// //                   <div className="h-16 relative mb-4">
// //                     <Image
// //                       src={skill.image}
// //                       alt={skill.name}
// //                       layout="fill"
// //                       objectFit="contain"
// //                       className="group-hover:scale-110 transition-transform duration-300"
// //                     />
// //                   </div>
// //                   <h4 className="font-semibold text-gray-800">{skill.name}</h4>
// //                   {/* <div className="mt-2 w-full bg-gray-200 rounded-full h-1.5">
// //                       <div
// //                         className="bg-purple-600 h-1.5 rounded-full transition-all duration-1000"
// //                         style={{ width: `${skill.level}%` }}
// //                       ></div>
// //                     </div> */}
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGit,
  FaDocker,
  FaAws,
  FaFigma,
  FaGithub,
  FaCss3,
  FaDatabase,
  FaJsSquare,
} from "react-icons/fa";

// export default function Skills() {
//   const skills = {
//     frontend: [
//       { name: "React", icon: <FaReact size={40} />, level: 90 },
//       { name: "Next.js", icon: <FaJsSquare size={40} />, level: 85 },
//       { name: "Vue.js", icon: <FaJsSquare size={40} />, level: 80 },
//       { name: "TypeScript", icon: <FaJsSquare size={40} />, level: 85 },
//       { name: "TailwindCSS", icon: <FaCss3 size={40} />, level: 95 },
//       { name: "SASS", icon: <FaCss3 size={40} />, level: 88 },
//     ],
//     backend: [
//       { name: "Node.js", icon: <FaNodeJs size={40} />, level: 85 },
//       { name: "Python", icon: <FaPython size={40} />, level: 80 },
//       { name: "Express.js", icon: <FaNodeJs size={40} />, level: 85 },
//       { name: "MongoDB", icon: <FaDatabase size={40} />, level: 82 },
//       { name: "PostgreSQL", icon: <FaDatabase size={40} />, level: 78 },
//       { name: "Firebase", icon: <FaGithub size={40} />, level: 88 },
//     ],
//     tools: [
//       { name: "Git", icon: <FaGit size={40} />, level: 90 },
//       { name: "Docker", icon: <FaDocker size={40} />, level: 75 },
//       { name: "VS Code", icon: <FaGithub size={40} />, level: 95 },
//       { name: "Figma", icon: <FaFigma size={40} />, level: 85 },
//       { name: "AWS", icon: <FaAws size={40} />, level: 70 },
//     ],
//   };

//   return (
//     <section
//       id="skills"
//       className="py-24 bg-gradient-to-r from-gray-100/70 to-gray-200/70 "
//     >
//       <div className="container mx-auto px-6">
//         <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
//           Skills & Technologies
//         </h2>

//         <div className="max-w-6xl mx-auto space-y-16">
//           {/* Frontend Skills */}
//           <div>
//             <h3 className="text-2xl font-bold mb-8 text-purple-600 flex items-center">
//               Frontend Development
//             </h3>
//             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
//               {skills.frontend.map((skill) => (
//                 <div
//                   key={skill.name}
//                   className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all group text-center"
//                 >
//                   <div className="h-16 relative mb-4">
//                     {skill.icon} {/* Display icon */}
//                   </div>
//                   <h4 className="font-semibold text-gray-800">{skill.name}</h4>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Backend Skills */}
//           <div>
//             <h3 className="text-2xl font-bold mb-8 text-purple-600 flex items-center">
//               Backend Development
//             </h3>
//             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
//               {skills.backend.map((skill) => (
//                 <div
//                   key={skill.name}
//                   className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all group text-center"
//                 >
//                   <div className="h-16 relative mb-4">
//                     {skill.icon} {/* Display icon */}
//                   </div>
//                   <h4 className="font-semibold text-gray-800">{skill.name}</h4>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Development Tools */}
//           <div>
//             <h3 className="text-2xl font-bold mb-8 text-purple-600 flex items-center">
//               Development Tools
//             </h3>
//             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
//               {skills.tools.map((skill) => (
//                 <div
//                   key={skill.name}
//                   className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all group text-center"
//                 >
//                   <div className="h-16 relative mb-4">
//                     {skill.icon} {/* Display icon */}
//                   </div>
//                   <h4 className="font-semibold text-gray-800">{skill.name}</h4>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

export default function Skills() {
  const skills = {
    frontend: [
      { name: "React", icon: <FaReact size={40} />, level: 90 },
      { name: "Next.js", icon: <FaJsSquare size={40} />, level: 85 },
      { name: "Vue.js", icon: <FaJsSquare size={40} />, level: 80 },
      { name: "TypeScript", icon: <FaJsSquare size={40} />, level: 85 },
      { name: "TailwindCSS", icon: <FaCss3 size={40} />, level: 95 },
      { name: "SASS", icon: <FaCss3 size={40} />, level: 88 },
    ],
    backend: [
      { name: "Node.js", icon: <FaNodeJs size={40} />, level: 85 },
      { name: "Python", icon: <FaPython size={40} />, level: 80 },
      { name: "Express.js", icon: <FaNodeJs size={40} />, level: 85 },
      { name: "MongoDB", icon: <FaDatabase size={40} />, level: 82 },
      { name: "PostgreSQL", icon: <FaDatabase size={40} />, level: 78 },
      { name: "Firebase", icon: <FaGithub size={40} />, level: 88 },
    ],
    tools: [
      { name: "Git", icon: <FaGit size={40} />, level: 90 },
      { name: "Docker", icon: <FaDocker size={40} />, level: 75 },
      { name: "VS Code", icon: <FaGithub size={40} />, level: 95 },
      { name: "Figma", icon: <FaFigma size={40} />, level: 85 },
      { name: "AWS", icon: <FaAws size={40} />, level: 70 },
    ],
  };

  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-r from-gray-900/50  to-purple-800/30"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          Skills & Technologies
        </h2>

        <div className="max-w-6xl mx-auto space-y-16">
          {/* Frontend Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-purple-600 flex items-center">
              Frontend Development
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {skills.frontend.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all group text-center"
                >
                  <div className="h-16 relative mb-4">
                    {skill.icon} {/* Display icon */}
                  </div>
                  <h4 className="font-semibold text-gray-800">{skill.name}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-purple-600 flex items-center">
              Backend Development
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {skills.backend.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all group text-center"
                >
                  <div className="h-16 relative mb-4">
                    {skill.icon} {/* Display icon */}
                  </div>
                  <h4 className="font-semibold text-gray-800">{skill.name}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Development Tools */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-purple-600 flex items-center">
              Development Tools
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {skills.tools.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all group text-center"
                >
                  <div className="h-16 relative mb-4">
                    {skill.icon} {/* Display icon */}
                  </div>
                  <h4 className="font-semibold text-gray-800">{skill.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
