export default function CurrentTime() {
    return new Promise(resolve => {
        setTimeout(() => {
            const time = new Date();
            const logTime =
                time.getDate() +
                "/" +
                (time.getMonth() + 1) +
                "/" +
                time.getFullYear() +
                " " +
                time.getHours() +
                ":" +
                time.getMinutes() +
                ":" +
                time.getSeconds();
            resolve(logTime);
        }, 1000);
    });
}
