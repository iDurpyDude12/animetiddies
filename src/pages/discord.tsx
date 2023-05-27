import { useDisclosure, Card, CardBody } from "@chakra-ui/react";
import * as React from "react";
import BottomDivider from "src/components/BottomDivider";
import TabHeader from "src/components/TabHeader";

function Home() {
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
