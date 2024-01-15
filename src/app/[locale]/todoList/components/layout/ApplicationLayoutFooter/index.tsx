"use client"
import { Flex, Text } from "@mantine/core";
import { useI18n } from "../../../../../../../locales/client";
import Link from "next/link";

export default function PanelLayoutFooter() {
  const t = useI18n();
  return (
    <Flex
      px={16}
      w="100%"
      h={30}
      align="center"
      justify="center"
      style={(theme) => ({
        backgroundColor: theme.colors.primary[4],
      })}
    >
      <Text fw={500} size="md" c="white" mr={4}>
        {t("createBy")}
      </Text>
      <Link  href="https://www.linkedin.com/in/mohaddese-rahimi-2277991a7/">
          <Text fw={500} size="md" c="white">Mohaddsw</Text>
        </Link>
    </Flex>
  );
}
