"use client";
import { Flex, Text } from "@mantine/core";
import { useI18n } from "../../../../../../../locales/client";
import ThemeModeSelect from "./ThemeModeSelect";
import LocaleNameSelect from "./LocaleNameSelect";

export default function PanelLayoutHeader() {
  const t = useI18n();
  return (
    <Flex
      px={16}
      w="100%"
      h={48}
      align="center"
      justify="space-between"
      style={(theme) => ({
        backgroundColor: theme.colors.primary[4],
      })}
    >
      <Text fw={700} size="md" c="white">
        {t("todo")}
      </Text>
      <Flex>
        <ThemeModeSelect />
        <LocaleNameSelect />
      </Flex>
    </Flex>
  );
}
