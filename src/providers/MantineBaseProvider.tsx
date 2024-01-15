"use client";

import type { PropsWithChildren } from "react";
import useMantineBaseTheme from "@/hooks/useMantineBaseTheme";
import type { MantineColorScheme } from "@mantine/core";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";

export default function MantineBaseProvider(props: PropsWithChildren) {
  const { mantineBaseTheme } = useMantineBaseTheme();

  const defaultTheme = window.localStorage.getItem(
    "mantine-color-scheme-value",
  ) as MantineColorScheme | undefined;



  return (
    <MantineProvider
      defaultColorScheme={defaultTheme === "dark" ? "dark" : "light"}
      withCssVariables
      theme={mantineBaseTheme}
    >
      <Notifications position="top-right" zIndex={1000} />
      {props.children}
    </MantineProvider>
  );
}
