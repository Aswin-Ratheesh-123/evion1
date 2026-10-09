/**
 * Central Image Repository for EVION
 * High quality remote imagery from Unsplash and Pexels.
 * Curated for premium automotive, high-tech EV charging infrastructure, modern architecture, and energy grids.
 */

export const images = {
  // Hero section - Luxury EV plugged in at dusk with futuristic ambiance
  hero: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=85&w=2072&auto=format&fit=crop",
  heroMobile: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=85&w=1200&auto=format&fit=crop",
  heroCarFront: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=85&w=2070&auto=format&fit=crop",

  // Charging Hardware & Technology Showcase
  chargerPillar: "https://images.unsplash.com/photo-1621360841013-c7683c659ec6?q=85&w=1932&auto=format&fit=crop",
  chargerConnector: "https://images.unsplash.com/photo-1558441719-2347b737469a?q=85&w=2000&auto=format&fit=crop",
  chargerNight: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=85&w=2070&auto=format&fit=crop",

  // Solutions Hub & Subsections
  homeCharging: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=85&w=2070&auto=format&fit=crop",
  homeChargerDetail: "https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?q=85&w=2072&auto=format&fit=crop",
  
  businessCharging: "https://images.unsplash.com/photo-1577495508048-b635879837f1?q=85&w=2070&auto=format&fit=crop",
  corporateHeadquarters: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=85&w=2070&auto=format&fit=crop",
  
  commercialRealEstate: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=85&w=2071&auto=format&fit=crop",
  destinationMall: "https://images.unsplash.com/photo-1567449303078-57ad995bd301?q=85&w=2070&auto=format&fit=crop",
  
  fleetDepot: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=85&w=2070&auto=format&fit=crop",
  fleetLogistics: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=85&w=2075&auto=format&fit=crop",

  // Energy & Grid Infrastructure
  energyGrid: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=85&w=2070&auto=format&fit=crop",
  solarCleanEnergy: "https://images.unsplash.com/photo-1509391365360-2e959784a276?q=85&w=2072&auto=format&fit=crop",

  // Locations & Highway Hubs
  highwayCorridor: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=85&w=2070&auto=format&fit=crop",
  urbanHub: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=85&w=2070&auto=format&fit=crop",

  // Final Call to Action
  ctaBackground: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=85&w=2070&auto=format&fit=crop",
  
  // About & Sustainability
  teamWorkspace: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=85&w=2069&auto=format&fit=crop",
  natureRenewable: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=85&w=2070&auto=format&fit=crop",
} as const;

export type ImageKey = keyof typeof images;
