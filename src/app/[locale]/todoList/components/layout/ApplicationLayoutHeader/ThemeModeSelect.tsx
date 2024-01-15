import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import {IconSun,IconMoon} from "@tabler/icons-react"

export default function ThemeModeSelect(){
    const {colorScheme,toggleColorScheme}=useMantineColorScheme()

    return(
        <ActionIcon variant="subtle" w={44} h={44} c="white" onClick={toggleColorScheme}>
            {colorScheme==="dark"?(
                 <IconSun size={24} strokeWidth={1.5} />
            ):(
                <IconMoon size={24} strokeWidth={1.5} />
            )}
        </ActionIcon>
    )
}