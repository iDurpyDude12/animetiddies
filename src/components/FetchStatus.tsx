import useSWR from "swr";
import fetcher from "src/lib/fetcher";

export default function FetchStatus() {
    const { data } = useSWR<Number>("/api/GetStatus", fetcher);
    const stage = (typeof data === "number" ? data - 1 : NaN) ?? "Fetching stage...";
    console.log(stage);

    return { stage };
}
