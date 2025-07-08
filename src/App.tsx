import { SEOHead } from "@/components/SEO/SEOHead";
import { StructuredData } from "@/components/SEO/StructuredData";

import TimeBoxPlanner from "./components/TimeBoxPlanner";

export default function App() {
  return (
    <>
      <SEOHead />
      <StructuredData />
      <TimeBoxPlanner />
    </>
  );
}
