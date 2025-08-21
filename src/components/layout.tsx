import { useStdoutDimensions } from "@cv/hooks/use-stdout-dimensions";
import { Box, Text, useInput } from "ink";

import { Outlet, useLocation, useNavigate } from "react-router";

const routes = [
  { route: "/", label: "Intro", icon: "👋" },
  { route: "/experience", label: "Experience", icon: "💼" },
  // { route: "/projects", label: "Projects", icon: "🚀" },
  { route: "/skills", label: "Skills", icon: "💻" },
  { route: "/contact", label: "Contact", icon: "📧" },
] as const;

const SIDEBAR_WIDTH = 25;
const CONTENT_WIDTH = 80;

export const Layout = () => {
  const [columns] = useStdoutDimensions();

  const location = useLocation();
  const navigate = useNavigate();

  useInput((input) => {
    if (input === "q") {
      process.exit(0);
    }

    if ("1234567890".includes(input)) {
      const route = routes[parseInt(input, 10) - 1]?.route;
      if (route) {
        navigate(route);
      }
    }
  });

  const showSidebar = (columns ?? 0) >= SIDEBAR_WIDTH + CONTENT_WIDTH;

  return (
    <Box flexDirection="column" height="100%" width="100%">
      <Text>{`> user@cv.jorge.rs`}</Text>
      <Box flexDirection="row" height={28}>
        {showSidebar && (
          <Box
            flexDirection="column"
            width={SIDEBAR_WIDTH}
            borderStyle="single"
            borderColor="gray"
            justifyContent="space-between"
          >
            <Box flexDirection="column">
              <Box justifyContent="center" borderStyle="single" borderColor="cyan" marginBottom={1}>
                <Text bold color="cyan">
                  ~/cv.jorge.rs
                </Text>
              </Box>

              {routes.map((tab, index) => {
                const isActive = location.pathname === tab.route;

                return (
                  <Box
                    key={tab.route}
                    backgroundColor={isActive ? "gray" : "transparent"}
                    paddingX={1}
                  >
                    <Text color={isActive ? "cyan" : "white"}>
                      {tab.icon} {tab.label}
                    </Text>
                    <Text dimColor> ({index + 1})</Text>
                  </Box>
                );
              })}
            </Box>

            <Box justifyContent="center">
              <Text>q</Text>
              <Text dimColor> Quit</Text>
            </Box>
          </Box>
        )}

        <Box width={CONTENT_WIDTH} flexDirection="column">
          <Box flexDirection="column" flexGrow={1} paddingLeft={1}>
            <Outlet />
            {!showSidebar && (
              <Box marginTop={1}>
                <Text dimColor>{">"} For full experience make your terminal wider.</Text>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
