import { Text, Button, Flex, Image, Box, Tabs, TabList, TabPanels, Tab, TabPanel, Spinner } from "@chakra-ui/react";
import { useState } from "react";
import * as React from "react";

export default function ImagesComponent() {
    const [imageUrl, setImageUrl] = useState("assets/placeholder-image.png");

    const [loading, setLoading] = useState(false);

    let downloadImageUrl;

    const getNeko = () => {
        fetch("https://api.waifu.pics/nsfw/neko")
            .then(response => response.json())
            .then(json => {
                setImageUrl(json.url);
                const timer = setTimeout(() => {
                    setLoading(true);
                }, 0);
                () => clearTimeout(timer);

                const timer2 = setTimeout(() => {
                    setLoading(false);
                }, 2500);
                () => clearTimeout(timer2);
                downloadImageUrl = json.url;
            });
    };
    const getWaifu = () => {
        fetch("https://api.waifu.pics/nsfw/waifu")
            .then(response => response.json())
            .then(json => {
                setImageUrl(json.url);
                const timer = setTimeout(() => {
                    setLoading(true);
                }, 0);
                () => clearTimeout(timer);

                const timer2 = setTimeout(() => {
                    setLoading(false);
                }, 2500);
                () => clearTimeout(timer2);
                downloadImageUrl = json.url;
            });
    };

    return (
        <Flex direction={"column"}>
            <Tabs colorScheme={"pink"}>
                <TabList>
                    <Tab>NSFW Nekos</Tab>
                    <Tab>NSFW Waifus</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Button
                            onClick={getNeko}
                            flex="1"
                            width={"100%"}
                            justifyContent={"center"}
                            borderRadius="none"
                            textAlign={"center"}
                            padding={3}
                            colorScheme="pink"
                            borderTopRadius={5}
                            borderBottomRadius={5}>
                            Get NSFW Neko
                        </Button>
                        {loading && <Spinner marginTop={2}></Spinner>}
                        <Box boxSize="sm" paddingLeft={5} paddingTop={5} marginBottom={10}>
                            <Image id="NekoImage" maxHeight={400} maxWidth={335} src={imageUrl} alt="Image"></Image>
                        </Box>
                        <Text flex={1} paddingLeft={5}>
                            No sources from this api :(
                        </Text>
                    </TabPanel>
                    <TabPanel>
                        <Flex direction={"column"}>
                            <Button
                                onClick={getWaifu}
                                flex="1"
                                width={"100%"}
                                justifyContent={"center"}
                                borderRadius="none"
                                textAlign={"center"}
                                padding={3}
                                colorScheme="pink"
                                borderTopRadius={5}
                                borderBottomRadius={5}>
                                Get NSFW Waifu
                            </Button>
                            {loading && <Spinner marginTop={2}></Spinner>}
                            <Box boxSize="sm" paddingLeft={5} paddingTop={5} marginBottom={10}>
                                <Image id="WaifuImage" maxHeight={400} maxWidth={335} src={imageUrl} alt="Image"></Image>
                            </Box>
                            <Button id="downloadButton" colorScheme={"pink"} marginTop={4} width={100}>
                                Download
                            </Button>
                            <Text flex={1} paddingLeft={5} marginTop={4}>
                                No sources from this api :(
                            </Text>
                        </Flex>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Flex>
    );
}
