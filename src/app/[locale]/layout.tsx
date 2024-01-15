import "@mantine/core/styles.css";

import { ColorSchemeScript } from "@mantine/core";
import { ReactElement } from "react";
import { openSans } from "@/constants/open-sans";
import { I18nProviderClient } from "../../../locales/client";
import dynamic from "next/dynamic";

const MantineBaseProvider = dynamic(
  () => import("@/providers/MantineBaseProvider"),
  { ssr: false },
);


export const metadata = {
  title: "TODO LIST APP",
};

export default function RootLayout({
  params: { locale },
  children,
}: {
  params: { locale: string };
  children: ReactElement;
}) {
  
  return (
    <html lang={locale} className={openSans.className} dir={locale==="fa"?"rtl":"ltr"}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <I18nProviderClient locale={locale}>
          <MantineBaseProvider>
            {children}
          </MantineBaseProvider>
        </I18nProviderClient>
      </body>
    </html>
  );
}
