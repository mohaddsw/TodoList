"use client";
import { Button, Group, Modal, TextInput, Textarea } from "@mantine/core";
import { isNotEmpty, useForm } from "@mantine/form";
import { useI18n } from "../../../../../../../locales/client";
import { useCallback } from "react";
import useTodoListStore from "@/store/useTodoListStore"

type Props = {
  opened: boolean;
  open: () => void;
  close: () => void;
};

type InitialValuesType = {
  title: string;
  description: string;
  status: "Complited" | "Active";
};

export default function TodoModal(props: Props) {
  const t = useI18n();

  const tasksList=useTodoListStore()

  const initialValues: InitialValuesType = {
    title: "",
    description: "",
    status: "Active",
  };

  const form = useForm({
    initialValues,
    validate: {
        title:isNotEmpty(t("titleError")),
        description:isNotEmpty(t("descriptionError")),
    },
  });

  const handleCloseModal=()=>{
    form.reset()
    props.close()
  }

  const handleSubmitForm=useCallback((values:InitialValuesType)=>{
      tasksList.setTodoList(values)
      handleCloseModal()
  },[form])

  return (
    <Modal
      opened={props.opened}
      onClose={props.close}
      centered
      closeOnClickOutside={false}
      withCloseButton={false}
    >
      <form onSubmit={form.onSubmit((values) => handleSubmitForm(values))}>
        <TextInput
          withAsterisk
          label={t("title")}
          placeholder={t("title")}
          {...form.getInputProps("title")}
        />

        <Textarea
          withAsterisk
          label={t("description")}
          placeholder={t("description")}
          {...form.getInputProps("description")}
        />
        <Group justify="flex-end" mt="md">
          <Button type="submit">{t("submit")}</Button>
          <Button variant="outline" onClick={handleCloseModal}>{t("cancle")}</Button>
        </Group>
      </form>
    </Modal>
  );
}
