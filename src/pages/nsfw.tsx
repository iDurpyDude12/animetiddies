import * as React from "react";
import BottomDivider from "src/components/BottomDivider";
import TabHeader from "src/components/TabHeader";
import ImagesComponent from "src/components/NSFWImages";
import { useSession } from "next-auth/react";
import { Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

function NSFW() {
    const { data: session } = useSession();

    if (session == null) {
        const router = useRouter();

        useEffect(() => {
            // redirect to /restricted when NSFW is loaded when not logged in
            router.push("/restricted");
        }, []);

        return (
            <Flex align={"center"}>
                <Text flex={1} align={"center"} fontSize={"3xl"} marginTop={4}>
                    Sowwy, you can't access this page
                </Text>
            </Flex>
        );
    }

    return (
        <div>
            <TabHeader title={"NSFW Images"} />
            <ImagesComponent />
            <BottomDivider />
        </div>
    );
}

export default NSFW;
