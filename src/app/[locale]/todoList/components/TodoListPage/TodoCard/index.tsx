import { ActionIcon, Box, Card, Flex, Text } from "@mantine/core";
import {IconCheck,IconTrash} from "@tabler/icons-react"
import { useI18n } from "../../../../../../../locales/client";

type Props = {
  status: "Active"|"Complited";
  description: string;
  title: string;
  handleCompilit:()=>void
  handleDeleted:()=>void
};

export default function TodoCard(props: Props) {
    const t=useI18n()
  return (
   <Box>
    <Card withBorder radius="md" my={8}>
      <Flex align="center" justify="space-between">
        <Flex align="center">
        <Text fw={700}>{props.title}</Text>
        <Text size="xs" ml={8} c="primary">{props.status}</Text>
        </Flex>
        <Flex justify="space-between" align="center" gap={8}>
        {props.status==="Active"&&<ActionIcon variant="outline" onClick={props.handleCompilit} color="green">
            <IconCheck/>
        </ActionIcon>}

        {props.status==="Active"&&<ActionIcon variant="outline" onClick={props.handleDeleted} color="red">
            <IconTrash width={18}/>
        </ActionIcon>}
        </Flex>
      </Flex>
      <Text size="sm">{props.description}</Text>
    </Card>
   </Box>
  );
}
