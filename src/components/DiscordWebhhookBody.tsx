import { Button, Flex, Input, Text, InputRightElement, InputGroup } from "@chakra-ui/react";
import * as React from "react";
import { useState } from "react";

export default function DiscordWebhookBody() {
    const [message, setMessage] = useState("null");
    const [user, setUser] = useState("nyan-bot");
    const [avatar, setAvatar] = useState("https://cdn.discordapp.com/avatars/883863975752781874/af9bd72e95a4e61083fc0122c7261d94.webp?size=128");
    const [webhook, setWebhook] = useState(
        "https://discord.com/api/webhooks/1088567825557377115/hxLPg8zpQyv2Y3pps1vTEJBEYc7z4WTSDZ4Ut52VykCiC3iVuwjXzz96eEg78NjUzJdEl"
    );

    function sendMessage() {
        var request = new XMLHttpRequest();
        request.open("POST", webhook);

        request.setRequestHeader("Content-type", "application/json");

        var params = {
            username: user,
            avatar_url: avatar,
            content: message
        };

        request.send(JSON.stringify(params));
    }
    function copyText() {
        var copyText = "https://cdn.discordapp.com/avatars/883863975752781874/af9bd72e95a4e61083fc0122c7261d94.webp?size=128";

        navigator.clipboard.writeText(copyText);
    }
    function copyText2() {
        var copyText = "https://cdn.discordapp.com/avatars/763864687481323620/d8b75f4bb7aa16ac9d9b9cdfeae72970.webp";

        navigator.clipboard.writeText(copyText);
    }
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);

    return (
        <div>
            <Flex direction={"column"} align={"center"}>
                <Text flex={1} fontSize={"3xl"} align={"center"} marginTop={2}>
                    Send Webhook Message
                </Text>
                <Text flex={1} fontSize={"small"} align={"center"} marginTop={2}>
                    blank = default
                </Text>
                <Input
                    id="message-user"
                    placeholder="Enter Username"
                    size={"md"}
                    variant={"filled"}
                    marginTop={4}
                    onChange={e => setUser(e.target.value)}
                    colorScheme="pink"
                    width={600}></Input>
                <Input
                    id="message-text"
                    placeholder="Enter Message"
                    size={"md"}
                    variant={"filled"}
                    marginTop={2}
                    onChange={e => setMessage(e.target.value)}
                    colorScheme="pink"
                    width={600}></Input>
                <Input
                    id="avatar-url"
                    placeholder="Avatar URL"
                    size={"md"}
                    variant={"filled"}
                    marginTop={2}
                    onChange={e => setAvatar(e.target.value)}
                    colorScheme="pink"
                    width={600}></Input>
                <Flex direction={"column"} align={"center"}>
                    <InputGroup size="md">
                        <Input
                            type={show ? "text" : "password"}
                            placeholder="Enter Webhook URL"
                            id="webhook-url"
                            size={"md"}
                            variant={"filled"}
                            marginTop={2}
                            onChange={e => setWebhook(e.target.value)}
                            colorScheme="pink"
                            width={600}
                        />
                        <InputRightElement width="4.5rem">
                            <Button size="sm" onClick={handleClick} marginTop={4} marginLeft={1}>
                                {show ? "Hide" : "Show"}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </Flex>

                <Button onClick={sendMessage} marginTop={6} colorScheme="pink" width={400} alignSelf={"center"}>
                    Send
                </Button>
                <Button onClick={copyText} marginTop={2} width={400} alignSelf={"center"} size={"xs"}>
                    nyan-bot avatar url
                </Button>
                <Button onClick={copyText2} marginTop={2} width={400} alignSelf={"center"} size={"xs"}>
                    durpy avatar url
                </Button>
            </Flex>
        </div>
    );
}
