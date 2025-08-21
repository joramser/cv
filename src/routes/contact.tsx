import { data } from "@cv/data";
import { Box, Newline, Text, useInput } from "ink";
import Link from "ink-link";
import open from "open";

const ContactItem = (props: { label: string; hotkey: string; url: string }) => {
  useInput((input) => {
    if (input === props.hotkey) {
      open(props.url);
    }
  });

  return (
    <Box flexDirection="column" marginBottom={1}>
      <Text>
        {props.label} <Text dimColor>({props.hotkey})</Text>
        {":"}
      </Text>
      <Text color="green">
        <Link url={props.url} fallback={false}>
          {props.url}
        </Link>
      </Text>
    </Box>
  );
};

export const Contact = () => {
  return (
    <Box flexDirection="column" padding={1}>
      <Text bold color="blue">
        Where to else find me
      </Text>
      <Text dimColor>Feel free to reach out!</Text>
      <Newline />
      <Box flexDirection="column">
        <ContactItem label="🌐 Website" hotkey="w" url={data.contact.website} />
        <ContactItem label="🔗 LinkedIn" hotkey="l" url={data.contact.linkedin} />
        <ContactItem label="🐙 GitHub" hotkey="g" url={data.contact.github} />
        <ContactItem label="🐦 Twitter/X" hotkey="t" url={data.contact.twitter} />
      </Box>
    </Box>
  );
};
