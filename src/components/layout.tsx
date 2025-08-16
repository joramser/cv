import { Box, Text, useInput } from "ink";

import { Outlet, useLocation, useNavigate } from "react-router";

const routes = [
  { route: "/", label: "Intro", icon: "👋" },
  { route: "/experience", label: "Experience", icon: "💼" },
  // { route: "/projects", label: "Projects", icon: "🚀" },
  { route: "/skills", label: "Skills", icon: "💻" },
  { route: "/contact", label: "Contact", icon: "📧" },
] as const;

export const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useInput((input) => {
    if (input === "q") {
      process.exit(0);
    }

    if ("1234567890".includes(input)) {
      navigate(routes[parseInt(input, 10) - 1]?.route ?? "/");
    }
  });

  return (
    <Box
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100%"
      width="100%"
    >
      <Box flexDirection="row" height={28} width={110}>
        <Box flexDirection="column" width={25} borderStyle="single" borderColor="gray">
          <Box justifyContent="center" borderStyle="single" borderColor="cyan" marginBottom={1}>
            <Text bold color="cyan">
              ~/cv.jorge.rs
            </Text>
          </Box>

          {routes.map((tab, index) => {
            const isActive = location.pathname === tab.route;

            return (
              <Box key={tab.route} backgroundColor={isActive ? "gray" : "transparent"} paddingX={1}>
                <Text color={isActive ? "cyan" : "white"}>
                  {tab.icon} {tab.label}
                </Text>
                <Text dimColor> ({index + 1})</Text>
              </Box>
            );
          })}
        </Box>

        <Box width={100} flexDirection="column">
          <Box flexGrow={1} paddingLeft={1}>
            <Outlet />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
