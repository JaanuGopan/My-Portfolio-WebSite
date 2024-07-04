"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Spring Boot</li>
        <li>React</li>
        <li>Flutter</li>
        <li>Java</li>
        <li>JavaScript</li>
        <li>C++</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>University of Ruhuna Faculty of Engineering</li>
        <li>St. Michael's College National School, Batticaloa</li>
      </ul>
    ),
  },
  {
    title: "Contact",
    id: "contact",
    content: (
      <ul className="list-disc pl-2">
        <li>Email : sjanugopan@gmail.com</li>
        <li>Phone : 0754164532</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("contact");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image-2.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg text-left">
            I am Sundaramoorthy Janugopan, 3rd year Computer Engineering
            Undergraduate in University of Ruhuna Faculty of Engineering. I am a
            motivated undergraduate student with foundational knowledge in
            backend development using Spring Boot. Familiar with front-end
            development using React and mobile application development with
            Flutter. Basic experience in database management with MySQL.
            Enthusiastic about learning new technologies and applying them to
            solve real-world problems through innovative solutions.
          </p>

          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("contact")}
              active={tab === "contact"}
            >
              {" "}
              Contact{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
