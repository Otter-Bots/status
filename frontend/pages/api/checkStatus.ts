import { NextApiRequest, NextApiResponse } from "next";
import serverList from "@/siteData.json";
// Checks status of all systems it is aware of
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const web: any[] = [];
    const server: any[] = [];
    const bot: any[] = [];
    const misc: any[] = [];
    await get(serverList.web, web)
    await get(serverList.servers, server)
    await get(serverList.bots, bot)
    await get(serverList.misc, misc)
    res.status(200).json({
        web: web,
        servers: server,
        bots: bot,
        misc: misc
    })
}
interface IserverListServerData {
    title: string;
    url: string;
}
async function get(data: IserverListServerData[], arr: any[]) {
    for (var i = 0; i < serverList.web.length; i++) {
        try {
        const res = await fetch(data[i].url);
        const resJson = await res.json();
        if (resJson.success) {
            arr.push({
                title: data[i].title,
                status: "online"
            })
            continue;
        } else {
            arr.push({
                title: data[i].title,
                status: "failed"
            })
            continue;
        }
        } catch (e) {
            arr.push({
                title: data[i].title,
                status: "offline"
            })
            continue;
        }
    }
}