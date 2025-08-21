#!/usr/bin/env bun
import { Layout } from "@cv/components/layout";
import { Contact } from "@cv/routes/contact";
import { Experience } from "@cv/routes/experience";
import { ExperienceDetail } from "@cv/routes/experience/experience-detail";
import { Intro } from "@cv/routes/intro";
// import { Projects } from "@cv/routes/projects";
import { Skills } from "@cv/routes/skills";
import { Splash } from "@cv/routes/splash";
import { render } from "ink";
import { MemoryRouter, Route, Routes } from "react-router";
import { ExperienceDetailTools } from "./routes/experience/experience-tools";

console.clear();

render(
  <MemoryRouter initialEntries={["/splash"]}>
    <Routes>
      <Route path="splash" element={<Splash />} />
      <Route element={<Layout />}>
        <Route index element={<Intro />} />
        <Route path="experience">
          <Route index element={<Experience />} />
          <Route path=":id" element={<ExperienceDetail />}>
            <Route path="tools" element={<ExperienceDetailTools />} />
          </Route>
        </Route>
        {/* <Route path="/projects" element={<Projects />} /> */}
        <Route path="skills" element={<Skills />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  </MemoryRouter>,
);
