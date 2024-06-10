import { Textarea, FormControl , FormLabel } from "@chakra-ui/react";
import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="bg-black text-white p-5 grid grid-cols-2 text-sm ">
     <div className="flex flex-col space-y-2 mx-auto text-gray-400">
        
        <p className="flex items-center gap-3"><CiMail /> hei.tsiory@gmail.com</p>
        <p className="flex items-center gap-3"><IoCallOutline /> +265 038674323</p>
        <p className="flex items-center gap-3"><FaFacebook />hacktivist</p>
        <p></p>
     </div>
      <div className="w-3/4 mx-auto text-gray-400">
        <FormControl>
        <FormLabel fontSize={"small"}>message</FormLabel>
          <Textarea focusBorderColor="gray.400" placeholder="write your message here ...." fontSize={"small"}></Textarea>
        </FormControl>
      </div>
    </div>
  );
}
