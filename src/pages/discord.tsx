import { Box, useDisclosure, Card, CardBody } from "@chakra-ui/react";
import * as React from "react";
import BottomDivider from "src/components/BottomDivider";
import NavBar from "src/components/NavBar";
import TabHeader from "src/components/TabHeader";

const Copyright = ({ username }) => (
    <Box as="footer" textAlign="center" py={4}>
        © {new Date().getFullYear()} {username}. All rights reserved.
    </Box>
);

function Home() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [placement, setPlacement] = React.useState("left");

    return (
        <div>
            <TabHeader title={"Discord"} />
            <Card marginRight={4} marginTop={4} marginLeft={4} marginBottom={4}>
                <CardBody>
                    <iframe src="https://e.widgetbot.io/channels/763865302936191046/763865302936191049" height="600vh" width="1270vw"></iframe>
                </CardBody>
            </Card>
            <BottomDivider />
        </div>
    );
}

export default Home;
