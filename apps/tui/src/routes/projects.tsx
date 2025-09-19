import { data } from "@cv/data";
import { Box, Newline, Text } from "ink";

export const Projects = () => (
  <Box flexDirection="column" padding={1}>
    <Text bold color="red">
      Projects
    </Text>
    <Newline />
    {data.projects.map((project) => (
      <Box key={project.description} flexDirection="column" marginBottom={1}>
        <Box>
          <Text color="magenta" bold>
            {project.name}
          </Text>
        </Box>
        <Text>{project.description}</Text>

        <Text color="cyan">{project.tech.join(" • ")}</Text>

        {project.url && <Text color="blue">🔗 {project.url}</Text>}
      </Box>
    ))}
  </Box>
);
