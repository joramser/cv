import { data } from "@cv/data";
import { Box, Newline, Text } from "ink";
import { useEffect, useState } from "react";

export const Intro = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible((visible) => !visible);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box flexDirection="column" padding={1}>
      <Box>
        <Text bold color="cyan">
          {data.name}
        </Text>
        <Text color="blue"> ({data.handle}) </Text>
        {visible && <Text backgroundColor="red"> </Text>}
      </Box>
      <Text color="green">{data.title} transforming ideas into reality</Text>
      <Text color="magenta">📍{data.contact.location}</Text>
      <Newline />
      <Box flexDirection="column">
        <Text>{data.shortIntro}</Text>
      </Box>
    </Box>
  );
};
