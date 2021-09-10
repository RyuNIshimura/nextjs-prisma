import Header from "@/components/organisms/header";
import Footer from "@/components/organisms/footer";

export default function Layout({ children }: any) {
  return (
    <>
      <div className="sticky top-0 z-40">
        <Header />
      </div>
      <div className="min-h-screen mx-auto max-w-7xl">{children}</div>
      <Footer />
    </>
  );
}
