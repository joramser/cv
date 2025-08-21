import { data } from "@cv/data";
import { Box, Text, useInput } from "ink";
import open from "open";
import { Outlet, useLocation, useNavigate, useParams } from "react-router";

export const ExperienceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const navigate = useNavigate();

  const experience = data.experience[id ? parseInt(id, 10) : -1];
  const isDisplayingTools = location.pathname.endsWith("/tools");

  useInput((input) => {
    if (input === "o" && experience?.website) {
      open(experience.website);
    } else if (input === "t") {
      if (isDisplayingTools) {
        navigate(`/experience/${id}`);
      } else {
        navigate(`/experience/${id}/tools`);
      }
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
        {!isDisplayingTools && (
          <Box marginTop={1}>
            <Text>{experience.description}</Text>
          </Box>
        )}
        <Outlet />
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
        {experience.tools && (
          <Box>
            <Text>t</Text>
            <Text dimColor> Toggle Stack</Text>
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
