export default function inputDelay() {
    let timerId: ReturnType<typeof setTimeout>;

    return (callback: any) => {
        clearTimeout(timerId);

        timerId = setTimeout(() => {
            callback();
        }, 300);
    };
}
