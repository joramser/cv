import { data } from "@cv/data";
import { Box, Newline, Text, useInput } from "ink";
import { useState } from "react";
import { useNavigate } from "react-router";

export const Experience = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const navigate = useNavigate();

  useInput((input, key) => {
    const experience = data.experience[selectedIndex];
    if (key.return && !!experience) {
      navigate(`/experience/${experience.title};${experience.company}`);
    } else if (input === "j" || key.downArrow) {
      setSelectedIndex((prev) =>
        prev === null ? 0 : Math.min(prev + 1, data.experience.length - 1),
      );
    } else if (input === "k" || key.upArrow) {
      setSelectedIndex((prev) => (prev === null ? 0 : Math.max(prev - 1, 0)));
    }
  });

  return (
    <Box flexDirection="column" width="100%" justifyContent="space-between">
      <Box flexDirection="column" padding={1} overflowY="visible">
        <Text bold color="green">
          Experience
        </Text>
        <Newline />
        {data.experience.map((experience, index) => (
          <Box
            key={`${experience.title};${experience.company}`}
            flexDirection="column"
            marginBottom={1}
            backgroundColor={selectedIndex === index ? "gray" : "transparent"}
          >
            <Box>
              <Text color="cyanBright" bold>
                {experience.title} at
              </Text>
              <Text color="magenta" bold>
                {" "}
                {experience.company}
              </Text>
            </Box>
            <Text color="white">
              {experience.startYear} - {experience.endYear} • {experience.location}
            </Text>
          </Box>
        ))}
      </Box>
      <Box
        width="100%"
        marginTop={1}
        borderStyle="single"
        borderColor="gray"
        justifyContent="space-around"
      >
        <Box>
          <Text>j/k - ↑/↓</Text>
          <Text dimColor> Navigate</Text>
        </Box>
        <Box>
          <Text>enter</Text>
          <Text dimColor> View Details</Text>
        </Box>
      </Box>
    </Box>
  );
};
