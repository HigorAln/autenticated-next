import { Avatar, Flex, Text } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { api } from "../services/api";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import { axiosApiClient } from "../services/axios";

export default function dashboard() {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    api.get("/users");
  }, []);

  console.log(user);
  return (
    <Flex w="100%" h="100vh" align="center" justifyContent={"center"}>
      <Text as="h1" fontSize={"48px"}>
        Dashboard
      </Text>
      <Avatar src={user?.avatar_url} ml="20px" />
    </Flex>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const apiClient = axiosApiClient(ctx);
  const { ["NextAuth.token"]: token } = parseCookies(ctx);

  if (!token) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  await apiClient.get("/user");

  return {
    props: {},
  };
};
