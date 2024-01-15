import { Box } from "@mantine/core";
import { PropsWithChildren } from "react";
import PanelLayoutHeader from "./components/layout/ApplicationLayoutHeader";
import PanelLayoutFooter from "./components/layout/ApplicationLayoutFooter";
import classes from "./layout.module.css"

export default function PanelLayout(props: PropsWithChildren) {
  return (
    <Box h="100%">
      <PanelLayoutHeader />
      <Box className={classes.main} w="100%" p={16}>
        {props.children}
      </Box>
      <PanelLayoutFooter/>
    </Box>
  );
}

