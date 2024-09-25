export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="relative flex flex-col h-screen">
          {children}
      </section>
  );
}
