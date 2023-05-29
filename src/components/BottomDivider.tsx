import { Flex, Divider, Text } from "@chakra-ui/react";

export default function BottomDivider() {
    return (
        <Flex align={"center"} direction={"column"}>
            <Divider flex={1} marginTop={10} orientation={"horizontal"} w={[300, 400, 400]} />
            <Text align={"center"} marginTop={8} marginBottom={5}>
                &copy; durpyneko 2023. All rights reserved.
            </Text>
        </Flex>
    );
}
