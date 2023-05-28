import {
    Flex,
    Button,
    Image,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    useDisclosure,
    Accordion,
    AccordionButton,
    AccordionItem,
    AccordionIcon,
    AccordionPanel,
    Box,
    IconButton,
    Menu,
    MenuButton,
    MenuDivider,
    MenuList,
    MenuGroup,
    MenuItem,
    Text,
    Divider
} from "@chakra-ui/react";
import { LinkIcon, HamburgerIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import ProfileImage from "./ProfileImage";
import LoginItem from "./LoginItem";
import NavLink from "./NavLink";

export default function NavBar() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Flex direction="row" alignItems="center" justifyContent="space-between" p="4" bg="chakra-subtle-bg">
            <NextLink href={"/"}>
                <Image
                    src={"https://cdn.discordapp.com/attachments/1039951514631933992/1083397985318219877/nya-logo-1024x832_60x60.png"}
                    alt="Logo"
                    w={8}
                    _hover={{ rotate: 90 }}
                />
            </NextLink>
            <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader borderBottomWidth="1px">Pages</DrawerHeader>
                    <DrawerBody>
                        <Button
                            variant="ghost"
                            justifyContent={"left"}
                            title="Home"
                            colorScheme={"pink"}
                            width={"100%"}
                            marginBottom={2}
                            onClick={onClose}>
                            <NextLink href={"/"}>
                                <LinkIcon marginRight={2}></LinkIcon>Home
                            </NextLink>
                        </Button>
                        <NextLink href={"/music"}>
                            <Button
                                onClick={onClose}
                                variant="ghost"
                                justifyContent={"left"}
                                title="Music"
                                colorScheme={"pink"}
                                width={"100%"}
                                marginBottom={2}>
                                <LinkIcon marginRight={2}></LinkIcon>Music
                            </Button>
                        </NextLink>
                        <Accordion allowToggle>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box as="span" flex="1" textAlign="left">
                                            Image API&apos;s
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <NextLink href={"/images"}>
                                        <Button
                                            onClick={onClose}
                                            variant="ghost"
                                            justifyContent={"left"}
                                            title="Images"
                                            colorScheme={"pink"}
                                            width={"100%"}>
                                            <LinkIcon marginRight={2}></LinkIcon>Images (Experimental)
                                        </Button>
                                    </NextLink>
                                    <NavLink restricted={true} />
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box as="span" flex="1" textAlign="left">
                                            Other
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <NextLink href={"/about"}>
                                        <Button
                                            onClick={onClose}
                                            variant="ghost"
                                            justifyContent={"left"}
                                            title="About"
                                            colorScheme={"pink"}
                                            width={"100%"}>
                                            <LinkIcon marginRight={2}></LinkIcon>About
                                        </Button>
                                    </NextLink>
                                </AccordionPanel>
                            </AccordionItem>
                            <NextLink href={"/socials"}>
                                <Button
                                    onClick={onClose}
                                    variant="ghost"
                                    justifyContent={"left"}
                                    title="Socials"
                                    colorScheme={"pink"}
                                    width={"100%"}
                                    marginTop={2}>
                                    <LinkIcon marginRight={2}></LinkIcon>Socials
                                </Button>
                            </NextLink>
                        </Accordion>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
            <Button
                as={IconButton}
                icon={<HamburgerIcon />}
                marginLeft={2}
                marginRight="-50"
                variant="ghost"
                justifyContent={"left"}
                title="Links"
                colorScheme={"pink"}
                onClick={onOpen}
                cursor="pointer"></Button>
            <Text flex={1} fontWeight="bold" fontSize="xl" textAlign={"center"}>
                Durpy&apos;s site
            </Text>
            <Menu>
                <MenuButton>
                    <ProfileImage />
                </MenuButton>
                <MenuList>
                    <MenuGroup title="Options">
                        <Divider />
                        <LoginItem />
                    </MenuGroup>
                </MenuList>
            </Menu>
        </Flex>
    );
}
