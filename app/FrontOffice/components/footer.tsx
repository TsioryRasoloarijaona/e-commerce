"use client";

import { useState } from "react";
import { Textarea, FormControl, FormLabel } from "@chakra-ui/react";
import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";
import { BsPinterest } from "react-icons/bs";
import { postData } from "../hooks/postData";
import { message } from "../interface/message";
import { Toast } from "./toastComponent";
import { useForm } from "react-hook-form";

interface Send {
  message: string;
}

export default function Footer() {
  const [open, setOpen] = useState<boolean>(false);
  const [description, setDescription] = useState<string | null>(null);
  const { register, handleSubmit, setValue, reset } = useForm<Send>();

  async function sendMessage(data: Send) {
    const response: message = await postData(
      "http://localhost:8080/rdv/message",
      data.message
    );
    setOpen(true);
    setDescription(response.success);
    reset();
  }

  return (
    <div className="bg-black text-white px-5 py-10 grid grid-cols-2 text-sm">
      <Toast shouldShow={open} description={description} status="success" />
      <div className="flex flex-col space-y-6 mx-auto text-gray-400">
        <p className="flex items-center gap-3">
          <CiMail /> hei.tsiory@gmail.com
        </p>
        <p className="flex items-center gap-3">
          <IoCallOutline /> +265 038674323
        </p>
        <p className="flex items-center gap-3">
          <FaFacebook /> hacktivist
        </p>
        <p className="flex items-center gap-3">
          <BsPinterest className="" /> pintest/hack
        </p>
        <p>
          © 2024eCar, car dealer. All rights Reserved. Made byHacktivistes!!!
        </p>
      </div>
      <div className="w-3/4 mx-auto text-gray-400 gap-3">
        <form onSubmit={handleSubmit(sendMessage)}>
          <FormLabel fontSize={"small"}>Message</FormLabel>
          <Textarea
            focusBorderColor="gray.400"
            placeholder="Write your message here ..."
            fontSize={"small"}
            {...register("message", { required: true })}
          />
          
            <button
              type="submit"
              className="mt-6 px-4 py-2 bg-white text-black text-sm rounded text-right"
            >
              Send
            </button>
        
        </form>
      </div>
    </div>
  );
}
