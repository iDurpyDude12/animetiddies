import * as React from "react";
import BottomDivider from "src/components/BottomDivider";
import TabHeader from "src/components/TabHeader";
import ImagesComponent from "src/components/NSFWImages";
import { useSession } from "next-auth/react";
import { Flex, Text } from "@chakra-ui/react";

function NSFW() {
    const { data: session } = useSession();

    if (session == null) {
        return (
            <Flex align={"center"}>
                <Text flex={1} align={"center"} fontSize={"3xl"} marginTop={4}>
                    Sowwy, you can&apos;t access this page
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
