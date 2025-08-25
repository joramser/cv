import { data } from "@tui/data";
import { Box, Text } from "ink";
import { useParams } from "react-router";

export const ExperienceDetailTools = () => {
  const { id } = useParams<{ id: string }>();
  const experienceId = id ? parseInt(id, 10) : -1;

  const experience = data.experience[experienceId];

  if (!experience) {
    return null;
  }

  return (
    <Box flexDirection="column" marginTop={1}>
      <Text>Stack and tools used</Text>
      <Box
        borderStyle="single"
        borderColor="cyan"
        paddingX={1}
        flexDirection="column"
        flexWrap="wrap"
      >
        {experience.tools?.map((tool) => (
          <Box key={tool}>
            <Text color="cyan">• </Text>
            <Text color="blue">{tool} </Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
