import { data } from "@tui/data";
import { Box, Newline, Text } from "ink";

export const Projects = () => (
  <Box flexDirection="column" padding={1}>
    <Text bold color="magenta">
      Projects
    </Text>
    <Newline />
    {data.projects.map((project) => (
      <Box key={project.description} flexDirection="column" marginBottom={1}>
        <Box>
          <Text bold>{project.name}</Text>
          <Text color="gray"> • {project.tech}</Text>
        </Box>
        <Text>{project.description}</Text>
        {project.url && <Text color="blue">🔗 {project.url}</Text>}
      </Box>
    ))}
  </Box>
);
