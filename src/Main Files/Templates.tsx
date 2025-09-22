import { useState } from "react";
import Container from "./Components/ui/Container";
import RestaurantTemplate from "./Components/templates/restaurant/RestaurantTemplate";
import AutoServiceTemplate from "./Components/templates/auto/AutoServiceTemplate";
import CoffeeShopTemplate from "./Components/templates/coffee/CoffeeShopTemplate";
import PortfolioTemplate from "./Components/templates/portfolio/PortfolioTemplate";
import EventLandingTemplate from "./Components/templates/EventLandingPage/EventLandingPage";
import YogaStudioTemplate from "./Components/templates/yoga/YogaStudioTemplate";
import PhotographyPortfolioTemplate from "./Components/templates/photography/PhotographyPortfolioTemplate";
import EcommerceTemplate from "./Components/templates/ecommerce/EcommerceTemplate";
import SaasLandingTemplate from "./Components/templates/saas/SaasLandingPage";

export default function WebTemplates() {
  const [tab, setTab] = useState("auto");

  const tabs = [
    { id: "auto", label: "Auto Service", node: <AutoServiceTemplate /> },
    { id: "restaurant", label: "Restaurant", node: <RestaurantTemplate /> },
    { id: "coffee", label: "Coffee Shop", node: <CoffeeShopTemplate /> },
    { id: "portfolio", label: "Portfolio", node: <PortfolioTemplate /> },
    { id: "saas", label: "SaaS Landing", node: <SaasLandingTemplate /> },
    { id: "event", label: "Conference", node: <EventLandingTemplate /> },
    { id: "yoga", label: "Yoga Studio", node: <YogaStudioTemplate /> },
    { id: "photography", label: "Photography", node: <PhotographyPortfolioTemplate /> },
    { id: "ecommerce", label: "E-Commerce", node: <EcommerceTemplate /> },
  ];

  const current = tabs.find((t) => t.id === tab) ?? tabs[0];

  return (
    <div className="min-h-screen bg-white">
      {/* sticky under your fixed main header (which is 64px tall) */}
      <div className="sticky top-16 z-40 border-b bg-white/80 backdrop-blur">
        <Container>
          <div className="flex items-center justify-between py-3">
            <h1 className="text-lg font-semibold">Web Templates — Preview</h1>
            <div className="flex flex-wrap gap-2">
              {tabs.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id)}
                  className={`rounded-xl px-3 py-2 text-sm border ${
                    tab === t.id ? "bg-black text-white border-black" : "bg-white text-black"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {current.node}
    </div>
  );
}
