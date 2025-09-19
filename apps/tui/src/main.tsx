#!/usr/bin/env bun
import { Layout } from "@tui/components/layout";
import { Contact } from "@tui/routes/contact";
import { Experience } from "@tui/routes/experience";
import { ExperienceDetail } from "@tui/routes/experience/experience-detail";
import { ExperienceDetailTools } from "@tui/routes/experience/experience-tools";
import { Intro } from "@tui/routes/intro";
import { Projects } from "@tui/routes/projects";
import { Skills } from "@tui/routes/skills";
import { Splash } from "@tui/routes/splash";
import { render } from "ink";
import { MemoryRouter, Route, Routes } from "react-router";

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
        <Route path="/projects" element={<Projects />} />
        <Route path="skills" element={<Skills />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  </MemoryRouter>,
);
