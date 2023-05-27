import { Button, Card, Heading, CardBody, CardFooter, CardHeader, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { LinkIcon } from "@chakra-ui/icons";
import { useSession } from "next-auth/react";

export default function DashboardLink({
    hrefLink,
    titleName,
    text,
    heading,
    restricted = false
}: {
    hrefLink: any;
    titleName: string;
    text: string;
    heading: string;
    restricted?: boolean;
}) {
    const { data: session } = useSession();

    if (restricted && session == null) {
        return <></>;
    }

    return (
        <Card marginLeft={4} marginTop={4} marginRight={4}>
            <CardHeader>
                <Heading size="md">{heading}</Heading>
            </CardHeader>
            <CardBody>
                <Text>{text}</Text>
            </CardBody>
            <CardFooter>
                <NextLink href={hrefLink}>
                    <Button variant="ghost" justifyContent={"left"} title={titleName} colorScheme={"pink"} width={"100%"}>
                        <LinkIcon marginRight={2}></LinkIcon>View here
                    </Button>
                </NextLink>
            </CardFooter>
        </Card>
    );
}
