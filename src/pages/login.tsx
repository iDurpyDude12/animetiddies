import { Button, Input, FormControl, FormLabel, Stack, Text, Flex } from "@chakra-ui/react";
import Link from "next/link";
import TabHeader from "src/components/TabHeader";
import { useSession, signIn, signOut } from "next-auth/react";

export default function LoginPage() {
    const { data: session } = useSession();

    if (session) {
        return (
            <div>
                <Flex direction="column" align="center">
                    <TabHeader title={"Sign In"} />
                    <Text fontSize={"3xl"} marginTop={4}>Welcome, {session.user.name}!</Text>
                    <Button onClick={() => signOut()} marginTop={4}>Sign Out</Button>
                </Flex>
            </div>
        );
    } else {
        return (
            <div>
                <Flex direction="column" align="center">
                    <TabHeader title={"Sign In"} />
                    <Text fontSize={"3xl"} marginTop={4}>You are not signed in</Text>
                    <Button onClick={() => signIn()} marginTop={4}>Sign In</Button>
                </Flex>
            </div>
        );
    }
}
