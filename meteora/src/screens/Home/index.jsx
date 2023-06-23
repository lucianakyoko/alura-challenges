import { interFont } from "@/typographies";
import { Header } from "@/components/Header";
import { Banner } from "@/components/Banner";

export function Home() {
  return (
    <main className={interFont.className}>
      <Header />
      <Banner />
    </main>
  )
}
