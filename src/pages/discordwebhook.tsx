import * as React from "react";
import BottomDivider from "src/components/BottomDivider";
import TabHeader from "src/components/TabHeader";
import DiscordWebhookBody from "src/components/DiscordWebhhookBody";

export default function DiscordWebhook() {
    return (
        <div>
            <TabHeader title={"Discord Webhook"} />
            <DiscordWebhookBody />
            <BottomDivider />
        </div>
    );
}
