import { Text } from "ink";
import { type MarkedExtension, marked } from "marked";
import { markedTerminal, type TerminalRendererOptions } from "marked-terminal";

export type Props = TerminalRendererOptions & {
  children: string;
};

export const Markdown = ({ children, ...options }: Props) => {
  marked.use(markedTerminal(options) as MarkedExtension);
  const parsedText = marked.parse(children);
  return <Text>{parsedText}</Text>;
};
