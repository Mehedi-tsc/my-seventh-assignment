import Banner from "@/components/homepage/Banner";
import CardSection from "@/components/homepage/CardSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Banner></Banner>
      <hr className="w-9/12 mx-auto text-[#E9E9E9] my-10"/>
      <CardSection></CardSection>
    </>
  );
}
