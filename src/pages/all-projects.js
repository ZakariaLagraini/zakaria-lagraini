import React, { useEffect, useState } from "react";
import { AnimateSharedLayout } from "framer-motion";
import { Layout } from "../layout/Layout";
import { projects } from "../constants/constants";
import { Section, SectionDivider, PageTitle } from "../styles/GlobalComponents";
import { GridContainer } from "../components/Projects/ProjectsStyles";
import ProjectsFilter from "../components/ProjectsFilter/ProjectsFilter";
import ProjectCard from "../components/Cards/ProjectCard";

const AllProjects = () => {
  const [data, setData] = useState([]);
  const [filterBy, setFilterBy] = useState("All");

  useEffect(() => {
    setData(projects);
  }, []);

  const handleFilter = (type) => {
    if (type === "All") {
      setData([...projects]);
      setFilterBy("All");
      return;
    }

    // Filter by tags
    const filteredProjects = projects.filter((project) =>
      project.tags.includes(type)
    );

    setData(filteredProjects);
    setFilterBy(type);
  };

  return (
    <Layout>
      <Section nopadding id="projects">
        <SectionDivider divider style={{ marginBottom: 0 }} />
        <PageTitle>All My Relevant Projects</PageTitle>
        <ProjectsFilter filter={handleFilter} filterBy={filterBy} projects={projects} />
        <AnimateSharedLayout>
          <GridContainer layout>
            {data
              .sort((a, b) => a.order - b.order)
              .map((card) => (
                <ProjectCard item={card} key={card.id} />
              ))}
          </GridContainer>
        </AnimateSharedLayout>
      </Section>
    </Layout>
  );
};

export default AllProjects;
