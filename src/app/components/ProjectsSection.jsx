"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Sky Ticker",
    description:
      "QR-Code Based Attendance Tracking System For Our Faculty Students. Students can scan their QR-Code and get their attendance status through the mobile application. Lectures can create lecture for students and manage their attendance. ",
    image: "/images/projects/skyticker.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl:
      "https://github.com/JaanuGopan/Software-Project-QRBATS-WebApp-FrontEnd.git",
    previewUrl: "https://skyticker-9zjk9v2ag-janugopans-projects.vercel.app/",
  },
  {
    id: 2,
    title: "Cloud Storage Management System",
    description:
      "Users can upload their files through the web application and they can add password protection for their files.",
    image: "/images/projects/cloudstoragemanagement.png",
    tag: ["All", "Web"],
    gitUrl:
      "https://github.com/JaanuGopan/WebApplicationProject-MyCloud-FrontEnd.git",
    previewUrl:
      "https://web-application-project-my-cloud-front-end.vercel.app/",
  },
  {
    id: 3,
    title: "Smart Garden",
    description:
      "This is a social media mobile application to share plant and garden related information.",
    image: "/images/projects/smartgarden.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/JaanuGopan/mobileapp.git",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Student Management System",
    description: "This is WPF based project. It is used to manage students. ",
    image: "/images/projects/studentmanagement.png",
    tag: ["All"],
    gitUrl: "https://github.com/JaanuGopan/StudentManagementSysterm.git",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Database Project - Financial Service Company",
    description:
      "This is MySQL based project. It is user for financial service company database management.",
    image: "/images/projects/dbproject.png",
    tag: ["All"],
    gitUrl: "/",
    previewUrl:
      "https://drive.google.com/file/d/1Gtljl9JiQUdNGD1Cog_Gpfl567odNhQE/view?usp=sharing",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
