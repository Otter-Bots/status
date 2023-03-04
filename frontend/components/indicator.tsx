import Image from "next/image"

export function Indicator(props: {status: "online" | "offline" | "failed"}) {
    switch (props.status) {
        case "online":
            return (
                <Image src="/greenCircle.png" alt="Online" width={20} height={20} />
            )
        case "offline":
            return (
                <Image src="/redCircle.png" alt="Offline" width={20} height={20} />
            )
        case "failed":
            return (
                <Image src="/yellowCircle.png" alt="Failed" width={20} height={20} />
            )
        default:
            return (
                <Image src="/greyCircle.png" alt="Offline" width={20} height={20} />
            )
    }
}