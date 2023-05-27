import { Box, Flex, Image, Text } from "@chakra-ui/react";
import TabHeader from "src/components/TabHeader";

export default function Restricted() {
    return (
        <div>
            <TabHeader title={"401 Unauthorized"} />
            <Flex align={"center"} direction={"column"}>
                <Box flex={1} boxSize={"2xl"} marginTop={4}>
                    <Image src="https://http.cat/401.jpg" />
                </Box>
            </Flex>
        </div>
    );
}
