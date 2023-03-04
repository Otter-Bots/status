import { Indicator } from "./indicator";

export function ListTable(props: {data: IJsonData[]}) {
    return (
        <div>
            <table border={0}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((val) => (
                        <tr key={val.title}>
                            <td>{val.title}</td>
                            <td><Indicator status={val.status} /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
interface IJsonData {
    title: string;
    status: "online" | "offline" | "failed";
}