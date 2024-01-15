"use client";
import { Box, Button, Card, Flex, Select, Text } from "@mantine/core";
import { useI18n } from "../../../../../../locales/client";
import { IconPlus } from "@tabler/icons-react";
import TodoModal from "./TodoModal";
import { useDisclosure } from "@mantine/hooks";
import useTodoListStore from "@/store/useTodoListStore";
import TodoCard from "./TodoCard";
import { useCallback, useMemo, useState } from "react";

type StatusType="Active"|"Complited"|"All"
const StatusData:StatusType[]=[
    "All",
    "Active",
    "Complited"
]

export default function TodoListPage() {
  const t = useI18n();

  const tasks = useTodoListStore();

  const [opened, { close, open }] = useDisclosure(false);

  const [status,setStatus]=useState<StatusType>("All")

  const allTasks=useMemo(()=>{
    const allTask=tasks.todoList
    if(status==="All") return allTask
    else if(status==="Active"){
       return allTask.filter(task=>task.status==="Active")
    }else if(status==="Complited"){
        return allTask.filter(task=>task.status==="Complited")
     }

  },[tasks,status])

  const handleComlited=useCallback((id:number)=>{
    tasks.setComplited(id)
  },[tasks.todoList])

  const handleFilter=(e:StatusType)=>{
    setStatus(e)
  }

  const handleDeleted=useCallback((id:number)=>{
    tasks.setDeleted(id)
  },[tasks])

  return (
    <Box w="100%" h="100%">
      <Flex
        justify="start"
        align="center"
        w="100%"
        h="100%"
        direction="column"
        gap={16}
      >
        <TodoModal opened={opened} open={open} close={close} />
        <Flex w={600} align="center" justify="space-between">
          <Button leftSection={<IconPlus width={18} />} onClick={open}>
            {t("addTask")}
          </Button>

          <Select data={StatusData} value={status} allowDeselect={false} onChange={(e)=>handleFilter(e  as StatusType)}/>
        </Flex>
        <Card withBorder radius="md" w={600}>
          <Card.Section p={16} withBorder>
            <Text fw={700}>{t("todo")}</Text>
          </Card.Section>
          <Card.Section p={16}>
            {allTasks?.map((task) => {
              return (
                <TodoCard
                  key={task.id}
                  title={task.title}
                  description={task.description}
                  status={task.status}
                  handleCompilit={()=>handleComlited(task.id?task.id:0)}
                  handleDeleted={()=>handleDeleted(task.id?task.id:0)}
                />
              );
            })}
          </Card.Section>
        </Card>
      </Flex>
    </Box>
  );
}
