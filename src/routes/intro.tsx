import { Markdown } from "@cv/components/markdown";
import { data } from "@cv/data";
import { Box, Newline, Text, useInput } from "ink";
import Link from "ink-link";
import open from "open";
import { useEffect, useState } from "react";

const ABOUT_URL = `${data.contact.website}/about`;

export const Intro = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible((visible) => !visible);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  useInput((input) => {
    if (input === "o") {
      open(ABOUT_URL);
    }
  });

  return (
    <Box flexDirection="column" padding={1} justifyContent="space-between" height="100%">
      <Box flexDirection="column">
        <Box>
          <Text bold color="magenta">
            {data.name}
          </Text>
          <Text color="blue"> ({data.handle}) </Text>
          {visible && <Text backgroundColor="red"> </Text>}
        </Box>
        <Text color="green">{data.title}</Text>
        <Text color="cyan">📍{data.contact.location}</Text>
        <Newline />
        <Markdown>{data.shortIntro}</Markdown>
      </Box>
      <Box alignSelf="flex-end">
        <Text>
          More about me at{" "}
          <Text color="blue">
            <Link url={ABOUT_URL} fallback={false}>
              jorge.rs/about (o)
            </Link>
          </Text>
        </Text>
      </Box>
    </Box>
  );
};
