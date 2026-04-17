import Banner from "@/components/homepage/Banner";
import CardSection from "@/components/homepage/CardSection";
import FriendsLoading from "@/components/homepage/FriendsLoading";
import Image from "next/image";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Banner></Banner>
      <hr className="w-9/12 mx-auto text-[#E9E9E9] my-10"/>
      <Suspense fallback={<FriendsLoading/>}>
        <CardSection></CardSection>
      </Suspense>
    </>
  );
}
