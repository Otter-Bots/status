import { ListTable } from "@/components/listTable";
import Head from "next/head";
import { Heading } from "theme-ui";

export default function Home(props: {data: any}) {
  return (
    <>
      <Head>
        <title>Otter Bots Stats</title>
      </Head>
      <div className="gridParent">
        <div className="gridDiv1">
          <Heading variant="title">Otter Bots</Heading>
        </div>
        <div className="gridDiv2">
          <Heading as="h1" variant="title">Stats</Heading>
          <Heading as="h2" variant="headline">Web</Heading>
          <ListTable data={props.data.web} />
          <Heading as="h2" variant="headline">Bots</Heading>
          <ListTable data={props.data.bots} />
          <Heading as="h2" variant="headline">Servers</Heading>
          <ListTable data={props.data.servers} />
          <Heading as="h2" variant="headline">Misc</Heading>
          <ListTable data={props.data.misc} />
        </div>
        <div className="gridDiv3">
          <p>
            &copy; 2023 Otter Bots
          </p>
        </div>
      </div>
    </>
  )
}
export async function getServerSideProps() {
  const res = await fetch(`${process.env.HOSTNAME}/api/checkStatus`);
  const resJson = await res.json();
  return {
    props: {data: resJson}, // will be passed to the page component as props
  }
}
