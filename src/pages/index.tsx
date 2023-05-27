import * as React from "react";
import BottomDivider from "src/components/BottomDivider";
import Dashboard from "src/components/Dashboard";
import TabHeader from "src/components/TabHeader";

function Index() {
    return (
        <div>
            <TabHeader title={"Durpy's site"} />
            <Dashboard />
            <BottomDivider />
        </div>
    );
}

export default Index;
