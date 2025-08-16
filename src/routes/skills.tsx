import { data } from "@cv/data";
import { Box, Newline, Text } from "ink";

export const Skills = () => (
  <Box flexDirection="column" padding={1}>
    <Text bold color="yellow">
      Skills & Technologies
    </Text>
    <Text dimColor>Things I am familiar with</Text>
    <Newline />
    {Object.entries(data.skills).map(([category, skills]) => (
      <Box key={category} flexDirection="column" marginBottom={1}>
        <Text bold color="cyan">
          {category}
        </Text>
        <Box marginLeft={2}>
          <Text>{skills.join(" • ")}</Text>
        </Box>
      </Box>
    ))}
  </Box>
);
