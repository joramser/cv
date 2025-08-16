import { Box, Text } from "ink";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const colorOptions = ["cyan", "magenta", "green", "yellow", "blue"];

export const Splash = () => {
  const [color, setColor] = useState("cyan");
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setColor((prevColor) => {
        const currentIndex = colorOptions.indexOf(prevColor);
        const nextIndex = (currentIndex + 1) % colorOptions.length;
        return colorOptions[nextIndex] ?? prevColor;
      });
    }, 500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/");
    }, 4000);
    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <Box flexDirection="column" paddingTop={4} justifyContent="center" alignItems="center">
      <Text bold color={color}>
        {`      ███                                                                     
     ░░░                                                                      
     █████ ██████  ████████  ██████  █████████████   █████   ██████  ████████ 
    ░░███ ███░░███░░███░░███░░░░░███░░███░░███░░███ ███░░   ███░░███░░███░░███
     ░███░███ ░███ ░███ ░░░  ███████ ░███ ░███ ░███░░█████ ░███████  ░███ ░░░ 
     ░███░███ ░███ ░███     ███░░███ ░███ ░███ ░███ ░░░░███░███░░░   ░███     
     ░███░░██████  █████   ░░█████████████░███ ███████████ ░░██████  █████    
     ░███ ░░░░░░  ░░░░░     ░░░░░░░░░░░░░ ░░░ ░░░░░░░░░░░   ░░░░░░  ░░░░░     
 ███ ░███                                                                     
░░██████                                                                      
 ░░░░░░                                                                       `}
      </Text>
    </Box>
  );
};
