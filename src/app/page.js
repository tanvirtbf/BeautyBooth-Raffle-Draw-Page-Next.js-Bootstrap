import Link from "next/link";

export default function Home() {
  return (
    <main className="raffle-btn">
      <Link href={"/raffle-draw"}>Raffle Draw Page</Link>
    </main>
  );
}
