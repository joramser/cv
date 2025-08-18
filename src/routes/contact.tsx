import { data } from "@cv/data";
import { Box, Newline, Text } from "ink";

export const Contact = () => {
  return (
    <Box flexDirection="column" padding={1}>
      <Text bold color="blue">
        Where to else find me
      </Text>
      <Text dimColor>Feel free to reach out!</Text>
      <Newline />
      <Box flexDirection="column">
        <Box flexDirection="column" marginBottom={1}>
          <Text>🌐 Website: </Text>
          <Text>{data.contact.website}</Text>
        </Box>
        <Box flexDirection="column" marginBottom={1}>
          <Text>🔗 LinkedIn: </Text>
          <Text>{data.contact.linkedin}</Text>
        </Box>
        <Box flexDirection="column" marginBottom={1}>
          <Text>🐙 GitHub: </Text>
          <Text>{data.contact.github}</Text>
        </Box>
      </Box>
    </Box>
  );
};
