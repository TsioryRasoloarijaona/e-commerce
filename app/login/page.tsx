import { Login } from "../Admin/auth/login/lib";
import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
export default function page() {
  return (
    <div className="grid grid-cols-2 text-black">
      <div className="flex flex-col justify-center items-center w-1/2 mx-auto">
        <form action={Login}>
          <FormControl>
            <FormLabel>username</FormLabel>
            <Input placeholder="username" name="username" />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>password</FormLabel>
            <Input placeholder="Last name" type="password" name="password"/>
          </FormControl>
          
          <Button type="submit" color={"black"}>login</Button>
        </form>
      </div>
      <div></div>
    </div>
  );
}
