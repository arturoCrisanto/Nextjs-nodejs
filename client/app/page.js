import Body from "./homepage/Body";
import Footer from "./homepage/Footer";
import Header from "./homepage/Header";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <Body />
    </div>
  );
}
