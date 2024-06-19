import React, { useState } from "react";
import styled from "styled-components";
import { FaTags } from "react-icons/fa"; // Replace with appropriate icons for your tags
import { Dropdown, DropdownItem, DropdownMenu, Button, FilterContainer, FilterHeading } from "./ProjectsFilterStyles";

const ProjectsFilter = ({ filter, filterBy, projects }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Function to get unique tags
  const getUniqueTags = (projects) => {
    const tags = projects.flatMap((project) => project.tags);
    return [...new Set(tags)];
  };

  const uniqueTags = getUniqueTags(projects);

  return (
    <section>
      <FilterHeading>
        Filtered by: <b>{filterBy}</b>
      </FilterHeading>
      <FilterContainer>
        <Dropdown>
          <Button 
            id="dropdownUsersButton" 
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
          >
            <FaTags className="icon" /> Projects
          </Button>
          <DropdownMenu isOpen={isOpen}>
            {uniqueTags.map((tag) => (
              <DropdownItem key={tag} onClick={() => { filter(tag); setIsOpen(false); }}>
                <FaTags className="icon" /> {/* Replace FaTags with the appropriate icon for each tag */}
                {tag}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </FilterContainer>
    </section>
  );
};

export default ProjectsFilter;
