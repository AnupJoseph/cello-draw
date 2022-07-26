import Head from "next/head";
//Components
import Leftbar from "@/components/Leftbar";
import Panel from "@/components/Panel";
import Rightbar from "@/components/Rightbar";
import Topbar from "@/components/Topbar";
//Hooks
import { useArray } from "@/hooks/useArray";
//Third party libs
import { useRecoilState } from "recoil";
import { modeAtom } from "@/context/mode";

export default function Home() {
  const elements = useArray();
  const [mode, setMode] = useRecoilState(modeAtom);

  return (
    <div className="h-screen flex flex-col">
      <Head>
        <title>Cello Draw</title>
        <meta name="description" content="A handy drawing app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Topbar mode={mode} setMode={setMode} elements={elements} />
      <div className="flex-1 flex justify-between">
        <Leftbar elements={elements} />
        <Panel elements={elements} mode={mode} />
        <Rightbar />
      </div>
    </div>
  );
}
