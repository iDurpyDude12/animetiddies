import { Avatar, Text, HStack, Show, Hide } from "@chakra-ui/react";
import { useSession } from "next-auth/react";

export default function ProfileImage() {
    const { data: session } = useSession();

    if (session == null) {
        return (
            <HStack>
                <Hide below="md">
                    <Text>Logged out</Text>
                </Hide>
                <Avatar
                    name="anon"
                    src={"https://cdn.discordapp.com/attachments/1039951514631933992/1087477789474693120/default-user-icon-8-1269223776.jpg"}
                    bg={"pink"}
                    loading={"eager"}
                />
            </HStack>
        );
    }

    return <Avatar name={session?.user?.name!} src={session?.user?.image!} loading={"eager"} />;
}
