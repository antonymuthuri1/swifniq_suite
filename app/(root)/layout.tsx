import Nav_bar from "@/components/home/Nav_bar";
export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main >
        <Nav_bar />
          {children}
      </main>
    );
  }
  