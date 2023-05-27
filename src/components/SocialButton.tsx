import { Button } from "@chakra-ui/react";

export default function SocialButton({ name, href, icon }: any) {
    return (
        <Button
            as={"a"}
            href={href}
            target={"_blank"}
            flex={1}
            width={"400px"}
            borderRadius="5"
            textAlign={"center"}
            padding={3}
            colorScheme="pink"
            marginBottom={2}>
            {icon}
            &nbsp;{name}
        </Button>
    );
}
