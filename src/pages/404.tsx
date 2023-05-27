import { Container, Image, Text } from "@chakra-ui/react";
import TabHeader from "src/components/TabHeader";

export default function PageNotFound() {
    return (
        <Container>
            <TabHeader title={"404 Not Found"} />
            <Text fontSize={"4xl"}>404 DEEZ</Text>
            <Image
                alt="404"
                src="https://media.discordapp.net/attachments/1039951514631933992/1066307218326159450/Wd9nLA9.png?width=697&height=473"></Image>
        </Container>
    );
}
