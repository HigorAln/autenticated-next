import {
  Button,
  Flex,
  FormControl,
  Input,
  TagLabel,
  Text,
} from "@chakra-ui/react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../contexts/AuthContext";

export default function Home() {
  const { register, handleSubmit } = useForm();
  const { signIn } = useContext(AuthContext);

  async function handleSignIn(data) {
    try {
      await signIn(data);
    } catch (e) {
      console.log(e.message);
    }
  }
  return (
    <Flex w="100%" h="100vh" justify={"center"} align={"center"} bg="aliceblue">
      <Flex
        w="40%"
        h="300px"
        flexDir={"column"}
        align="center"
        justify={"center"}
        boxShadow={"0 0 10px #ddd"}
      >
        <FormControl
          as={"form"}
          display={"flex"}
          flexDir={"column"}
          textAlign={"center"}
          alignItems={"center"}
          onSubmit={handleSubmit(handleSignIn)}
        >
          <Text as={"h1"} fontSize={"32px"} mb="20px">
            Sign in to your account
          </Text>
          <Input
            w="80%"
            mb="20px"
            type="email"
            placeholder="Your email"
            {...register("email")}
          />
          <Input
            w="80%"
            mb="20px"
            type="password"
            placeholder="Your password"
            {...register("password")}
          />
          <Flex
            as="span"
            display="flex"
            justifyContent={"space-between"}
            w="100%"
            px="60px"
          >
            <Flex alignItems={"center"}>
              <input type="checkbox" name="checkbox1" id="checkbox1" />
              <Text as="label" htmlFor="checkbox1" ml="05px">
                Remember me
              </Text>
            </Flex>
            <Text as="a" href="/forget" textDecor={"underline"}>
              Forget my password
            </Text>
          </Flex>
          <Button type="submit" w="80%" bg="blue.500" mt="20px">
            Login
          </Button>
        </FormControl>
      </Flex>
    </Flex>
  );
}
