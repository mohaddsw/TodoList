import { ActionIcon } from "@mantine/core";
import {
  useChangeLocale,
  useCurrentLocale,
} from "../../../../../../../locales/client";
import { IconLanguage } from "@tabler/icons-react";

export default function LocaleNameSelect() {
  const changeLocale = useChangeLocale();
  const locale = useCurrentLocale();
  return (
    <ActionIcon
      variant="subtle"
      w={44}
      h={44}
      c="white"
      onClick={() => changeLocale(locale==="en"?"fa":"en")}
    >
      <IconLanguage size={24} strokeWidth={1.5} />
    </ActionIcon>
  );
}
