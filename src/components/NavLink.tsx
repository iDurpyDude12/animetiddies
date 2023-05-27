import { Button, useDisclosure } from "@chakra-ui/react";
import { LinkIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import { useSession } from "next-auth/react";

export default function NavLink({ restricted = false }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { data: session } = useSession();

    if (restricted && session == null) {
        return <></>;
    }

    return (
        <NextLink href={"/nsfw"}>
            <Button onClick={onClose} variant="ghost" justifyContent={"left"} title="NSFW" colorScheme={"pink"} width={"100%"}>
                <LinkIcon marginRight={2}></LinkIcon>NSFW (Experimental)
            </Button>
        </NextLink>
    );
}
