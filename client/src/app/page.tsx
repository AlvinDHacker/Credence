import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
import Hero from "./_components/Hero";
import Subhero from "./_components/Subhero";
import Navbar from "./_components/Navbar";

export default async function Home() {
  const hello = await api.post.hello.query({ text: "from tRPC" });
  const session = await getServerAuthSession();

  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
}