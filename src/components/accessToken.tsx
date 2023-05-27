import { useSession, signIn, signOut } from "next-auth/react";
import { Box, Container } from "@chakra-ui/react";

export default function Component() {
    const { data } = useSession();

    return <div>Access Token: {data}</div>;
}
