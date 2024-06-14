import { Login } from "../Admin/auth/login/lib";
import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
export default function page() {
  return (
   
      <div className="w-screen h-screen grid grid-cols-2">
        <div className="">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/showroom-manager-giving-new-car-key-to-the-buyer-5727220-4788103.png?f=webp"
            alt="Login Illustration"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center items-center p-10">
          <form action={Login} className="space-y-6">
            <FormControl>
              <FormLabel>Username</FormLabel>
              <Input
                placeholder="username"
                name="username"
                required
                variant="filled"
              />
            </FormControl>

            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input
                placeholder="password"
                name="password"
                type="password"
                required
                variant="filled"
              />
            </FormControl>

            <Button type="submit" colorScheme="blue" size="lg" width="full">
              Login
            </Button>
          </form>
        </div>
      </div>
  )
}
