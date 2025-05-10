"use client";

import RoadMap from "@/components/RoadMap";
import CourseList from "@/components/CourseList";
import BodyDetails from "@/components/BodyDetails";
// import PriceSection from "@/components/PriceSection";
// import GetEarlyAccess from "@/components/GetEarlyAccess";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";

export default function Home() {
  // In this specific path Footer wont show-up
  const pathname = usePathname();
  const hideFooterRouters = ["/login", "/signup", "/video"];
  const showFooter = !hideFooterRouters.includes(pathname);
  return (
    <>
      <div className="dark:bg-slate-900 h-full">
        <BodyDetails />
        <CourseList />
        <RoadMap />
        <div>
          <PricingSection />
          {/* <PriceSection />*/}
        </div>
        {/* <GetEarlyAccess /> */}
        {showFooter && <Footer />}
      </div>
    </>
  );
}
