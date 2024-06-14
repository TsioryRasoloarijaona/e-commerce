import { Login } from "../Admin/auth/login/lib";
import { Button, FormControl, FormLabel } from "@chakra-ui/react";
import Image from "next/image";
export default function page() {
  return (
    <div className="w-screen h-screen grid lg:grid-cols-2 grid-cols-1 bg-white">
      <div className=" relative lg:flex items-center w-full h-5/6 hidden">
        <Image
          src={"/login.png"}
          alt="lgin"
          layout="fill"
          objectFit="cover"
          className="absolute top-0 left-0"
        />
      </div>
      <div className="flex flex-col justify-center items-center text-black p-10 w-full">
        <form action={Login} className="space-y-6">
          <FormControl>
            <FormLabel>Username</FormLabel>
            <input
              placeholder="username"
              name="username"
              required
              className="bg-transparent px-5 py-2 border border-gray-400 rounded-full"
            />
          </FormControl>

          <FormControl>
            <FormLabel>Password</FormLabel>
            <input
              placeholder="password"
              name="password"
              type="password"
              required
              className="bg-transparent px-5 py-2 border border-gray-400 rounded-full"
              
            />
          </FormControl>

          <Button type="submit" colorScheme="blue" size="lg" width="full" background={"black"} color={"white"}>
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
