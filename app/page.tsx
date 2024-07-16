import dynamic from "next/dynamic";

const Chat = dynamic(() => import("./components/Chat"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="container">
      <main>
        <h1 className="title">Chat</h1>
        <Chat />
      </main>
    </div>
  );
}
