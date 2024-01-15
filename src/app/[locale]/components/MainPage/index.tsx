"use client"
import { useEffect } from "react";
import {useRouter} from "next/navigation"
import { AppRoutes } from "@/constants/app-routes";

export default function MainPage() {
  const {push}=useRouter()
  useEffect(()=>{
    push(`${AppRoutes.todoList}`)
  },[])
  return <main/>

}
