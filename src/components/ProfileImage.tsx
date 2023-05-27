import { Avatar, Text, HStack } from "@chakra-ui/react";
import { useSession } from "next-auth/react";

export default function ProfileImage() {
    const { data: session } = useSession();

    if (session == null) {
        return (
            <HStack>
                <Text>Logged out</Text>
                <Avatar
                    name="anon"
                    src={"https://cdn.discordapp.com/attachments/1039951514631933992/1087477789474693120/default-user-icon-8-1269223776.jpg"}
                    bg={"pink"}
                    loading={"eager"}
                />
            </HStack>
        );
    }

    return <Avatar name={session.user.name} src={session.user.image} loading={"eager"} />;
}
