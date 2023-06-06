import Navbar from "../components//global/navbar";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
