"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Breadcrumb from "@/components/Breadcrumb";

// Dynamic import for the Map component to avoid SSR issues with Leaflet
const LeafletMap = dynamic(() => import("@/components/Map"), {
  ssr: false,
  loading: () => (
    <div className="h-[500px] w-full bg-gray-200 animate-pulse rounded-lg flex items-center justify-center text-gray-500">
      Loading Map...
    </div>
  ),
});

// Data Types
interface Branch {
  name: string;
  lat: number;
  lng: number;
  city: string;
}

interface City {
  name: string;
  lat: number;
  lng: number;
}

// Sample Data for Zimbabwe Cities
const cities: City[] = [
  { name: "Harare", lat: -17.8216, lng: 31.0492 },
  { name: "Bulawayo", lat: -20.1367, lng: 28.5811 },
  { name: "Mutare", lat: -18.9728, lng: 32.6694 },
  { name: "Gweru", lat: -19.4587, lng: 29.8224 },
  { name: "Kwekwe", lat: -18.9201, lng: 29.8236 },
  { name: "Chitungwiza", lat: -18.0127, lng: 31.0756 },
  { name: "Masvingo", lat: -20.0797, lng: 30.8277 },
  { name: "Victoria Falls", lat: -17.9326, lng: 25.8307 },
];

// Sample Data for Company Branches
const branches: Branch[] = [
  // Harare Branches
  { name: "Securico Head Office", lat: -17.825, lng: 31.05, city: "Harare" },
  { name: "Msasa Operations Centre", lat: -17.84, lng: 31.10, city: "Harare" },
  { name: "Borrowdale Branch", lat: -17.75, lng: 31.08, city: "Harare" },

  // Bulawayo Branches
  { name: "Bulawayo Regional Office", lat: -20.14, lng: 28.58, city: "Bulawayo" },
  { name: "Belmont Depot", lat: -20.17, lng: 28.57, city: "Bulawayo" },

  // Mutare Branches
  { name: "Mutare Branch", lat: -18.97, lng: 32.67, city: "Mutare" },

  // Gweru Branches
  { name: "Gweru Main Branch", lat: -19.46, lng: 29.82, city: "Gweru" },

  // Kwekwe Branches
  { name: "Kwekwe Office", lat: -18.92, lng: 29.82, city: "Kwekwe" },

  // Chitungwiza Branches
  { name: "Chitungwiza Service Centre", lat: -18.01, lng: 31.06, city: "Chitungwiza" },

  // Masvingo Branches
  { name: "Masvingo Branch", lat: -20.08, lng: 30.83, city: "Masvingo" },

  // Victoria Falls Branches
  { name: "Victoria Falls Branch", lat: -17.93, lng: 25.83, city: "Victoria Falls" },
];

const LocationsPage = () => {
  const [selectedCity, setSelectedCity] = useState<City>(cities[0]);
  const [zoom, setZoom] = useState<number>(12);

  // Filter branches based on selected city
  // Note: In a real scenario, you might want to show all branches and zoom to city
  // But requirement says "Filter the sample branch data to show only branches in the selected city"
  const filteredBranches = branches.filter(
    (branch) => branch.city === selectedCity.name
  );

  const handleCityClick = (city: City) => {
    setSelectedCity(city);
    setZoom(13); // Zoom in when a city is selected
  };

  const getBranchCount = (cityName: string) => {
    return branches.filter((branch) => branch.city === cityName).length;
  };

  return (
    <div>
      <Breadcrumb title="Our Company Branches" />

      <section className="pb-16 pt-10 md:pb-20 lg:pb-28 lg:pt-[60px]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">

            {/* City List Sidebar */}
            <div className="w-full lg:w-1/3 xl:w-1/4">
              <div className="bg-white dark:bg-dark shadow-three rounded-sm p-6 mb-8 lg:mb-0">
                <h3 className="text-xl font-bold text-black dark:text-white mb-6 pb-4 border-b border-body-color/20">
                  Select a City
                </h3>
                <ul className="space-y-2 max-h-[500px] overflow-y-auto">
                  {cities.map((city) => (
                    <li key={city.name}>
                      <button
                        onClick={() => handleCityClick(city)}
                        className={`w-full text-left px-4 py-3 rounded-md transition-all duration-300 flex justify-between items-center ${selectedCity.name === city.name
                          ? "bg-primary text-white shadow-md"
                          : "bg-gray-100 dark:bg-dark-2 text-waterloo dark:text-manatee hover:bg-gray-200 dark:hover:bg-dark-3"
                          }`}
                      >
                        <div className="flex justify-between items-center w-full gap-2">
                          <span className="font-medium">{city.name}</span>
                          <span className={`text-xs px-2 py-0.5 rounded-full ${selectedCity.name === city.name
                            ? "bg-white text-primary"
                            : "bg-gray-200 dark:bg-dark-3 text-body-color"
                            }`}>
                            {getBranchCount(city.name)}
                          </span>
                        </div>
                        {selectedCity.name === city.name && (
                          <span className="text-sm">
                            📍
                          </span>
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 bg-white dark:bg-dark shadow-solid-3 rounded-sm p-6">
                <h4 className="font-bold text-black dark:text-white mb-2">
                  {selectedCity.name}
                </h4>
                <p className="text-sm text-waterloo dark:text-manatee">
                  Showing {filteredBranches.length} branch{filteredBranches.length !== 1 ? 'es' : ''} in this area.
                </p>
              </div>
            </div>

            {/* Map Area */}
            <div className="w-full lg:w-2/3 xl:w-3/4">
              <div className="h-[500px] w-full rounded-lg overflow-hidden shadow-solid-3 border border-gray-200 dark:border-dark-3 relative z-0">
                <LeafletMap
                  center={[selectedCity.lat, selectedCity.lng]}
                  zoom={zoom}
                  branches={filteredBranches}
                />
              </div>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredBranches.map((branch, index) => (
                  <div key={index} className="bg-white dark:bg-dark shadow-solid-3 p-4 rounded-sm border-l-4 border-primary">
                    <h5 className="font-bold text-black dark:text-white">{branch.name}</h5>
                    <p className="text-sm text-waterloo dark:text-manatee">{branch.city}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default LocationsPage;
