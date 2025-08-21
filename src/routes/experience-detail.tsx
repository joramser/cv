import { data } from "@cv/data";
import { Box, Newline, Text, useInput } from "ink";
import { useNavigate, useParams } from "react-router";

export const ExperienceDetail = () => {
  const { id } = useParams<{ id: string }>();

  const navigate = useNavigate();

  const experience = data.experience[id ? parseInt(id, 10) : -1];

  useInput((input) => {
    if (input === "b") {
      navigate(`/experience?from=${id}`);
    }
  });

  if (!experience) {
    return (
      <Box flexDirection="column" padding={1} overflowY="hidden">
        <Text color="red">Experience not found</Text>
      </Box>
    );
  }

  return (
    <Box flexDirection="column" width="100%" justifyContent="space-between">
      <Box flexDirection="column" padding={1} overflowY="hidden">
        <Text bold color="green">
          Experience - {experience?.title} at {experience?.company}
        </Text>
        <Newline />
        <Text>{experience.description}</Text>
      </Box>
      <Box
        width="100%"
        marginTop={1}
        borderStyle="single"
        borderColor="gray"
        justifyContent="space-around"
      >
        <Box>
          <Text>b</Text>
          <Text dimColor> Back</Text>
        </Box>
      </Box>
    </Box>
  );
};
