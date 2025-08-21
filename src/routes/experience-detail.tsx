import { data } from "@cv/data";
import { Box, Text, useInput } from "ink";
import open from "open";
import { useNavigate, useParams } from "react-router";

export const ExperienceDetail = () => {
  const { id } = useParams<{ id: string }>();

  const navigate = useNavigate();

  const experience = data.experience[id ? parseInt(id, 10) : -1];

  useInput((input) => {
    if (input === "o" && experience?.website) {
      open(experience.website);
    } else if (input === "b") {
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
    <Box flexDirection="column" width="100%" height="100%" justifyContent="space-between">
      <Box flexDirection="column" padding={1} overflowY="hidden">
        <Text bold color="green">
          {experience?.title} at {experience?.company}
        </Text>
        <Text dimColor>{experience.companySummary}</Text>
        <Box marginTop={1}>
          <Text>{experience.description}</Text>
        </Box>
      </Box>
      <Box
        width="100%"
        marginTop={1}
        borderStyle="single"
        borderColor="gray"
        justifyContent="space-around"
      >
        {experience.website && (
          <Box>
            <Text>o</Text>
            <Text dimColor> Open website</Text>
          </Box>
        )}
        <Box>
          <Text>b</Text>
          <Text dimColor> Back</Text>
        </Box>
      </Box>
    </Box>
  );
};
