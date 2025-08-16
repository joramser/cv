import { data } from "@cv/data";
import { Box, Newline, Text, useInput } from "ink";
import { useNavigate, useParams } from "react-router";

export const ExperienceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const experience = data.experience.find((experience) => {
    const [title, company] = id?.split(";") ?? [];
    if (!title || !company) return false;

    return experience.title === title && experience.company === company;
  });

  useInput((input) => {
    if (input === "b") {
      navigate("/experience");
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
