"use client";

import { useState, useMemo } from "react";
import dynamic from "next/dynamic";
import Breadcrumb from "@/components/Breadcrumb";
import { locations, Location } from "./locationData";

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
interface City {
  name: string;
  lat: number;
  lng: number;
}

const LocationsPage = () => {
  // Derive unique cities from locations data
  const cities: City[] = useMemo(() => {
    const uniqueCities = Array.from(new Set(locations.map((loc) => loc.city)));
    return uniqueCities.map((cityName) => {
      // Find the first location in this city to get coordinates
      // In a real app with multiple branches per city, you might calculate a center point
      const loc = locations.find((l) => l.city === cityName);
      return {
        name: cityName,
        lat: loc?.lat || 0,
        lng: loc?.lng || 0,
      };
    });
  }, []);

  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [zoom, setZoom] = useState<number>(7);

  // Filter branches based on selected city, or show all if no city selected
  const filteredBranches = selectedCity
    ? locations.filter((branch) => branch.city === selectedCity.name)
    : locations;

  const handleCityClick = (city: City) => {
    setSelectedCity(city);
    setZoom(13); // Zoom in when a city is selected
  };

  const handleResetMap = () => {
    setSelectedCity(null);
    setZoom(7);
  };

  // Center of Zimbabwe for initial view
  const defaultCenter: [number, number] = [-19.0154, 29.1549];

  const mapCenter: [number, number] = selectedCity
    ? [selectedCity.lat, selectedCity.lng]
    : defaultCenter;

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
                        className={`w-full text-left px-4 py-3 rounded-md transition-all duration-300 flex justify-between items-center ${selectedCity?.name === city.name
                          ? "bg-primary text-white shadow-md"
                          : "bg-gray-100 dark:bg-dark-2 text-waterloo dark:text-manatee hover:bg-gray-200 dark:hover:bg-dark-3"
                          }`}
                      >
                        <span className="font-medium">{city.name}</span>

                        {selectedCity?.name === city.name && (
                          <span className="text-sm">📍</span>
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 bg-white dark:bg-dark shadow-solid-3 rounded-sm p-6">
                <h4 className="font-bold text-black dark:text-white mb-2">
                  {selectedCity ? selectedCity.name : "All Locations"}
                </h4>
                <p className="text-sm text-waterloo dark:text-manatee">
                  Showing {filteredBranches.length} branch{filteredBranches.length !== 1 ? 'es' : ''} {selectedCity ? 'in this area' : 'across Zimbabwe'}.
                </p>
              </div>
            </div>

            {/* Map Area */}
            <div className="w-full lg:w-2/3 xl:w-3/4">
              <div className="flex justify-end mb-4">
                <button
                  onClick={handleResetMap}
                  className="px-6 py-2 rounded-md bg-primary text-white font-medium hover:bg-opacity-90 transition-all shadow-md flex items-center gap-2"
                >
                  <span>🔄</span> Reset Map
                </button>
              </div>

              <div className="h-[500px] w-full rounded-lg overflow-hidden shadow-solid-3 border border-gray-200 dark:border-dark-3 relative z-0">
                <LeafletMap
                  center={mapCenter}
                  zoom={zoom}
                  branches={filteredBranches}
                />
              </div>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredBranches.map((branch, index) => (
                  <div key={index} className="bg-white dark:bg-dark shadow-solid-3 p-4 rounded-sm border-l-4 border-primary">
                    <h5 className="font-bold text-black dark:text-white">{branch.name}</h5>
                    <p className="text-sm text-waterloo dark:text-manatee mb-2">{branch.address}</p>
                    {branch.phone && branch.phone.length > 0 && (
                      <div className="text-xs text-waterloo dark:text-manatee mb-1">
                        <span className="font-semibold">Tel:</span> {branch.phone.join(", ")}
                      </div>
                    )}
                    {branch.email && (
                      <div className="text-xs text-waterloo dark:text-manatee mb-1">
                        <span className="font-semibold">Email:</span> {branch.email}
                      </div>
                    )}
                    <a
                      href={branch.googleMapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-primary hover:underline mt-2 inline-block"
                    >
                      View on Google Maps
                    </a>
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
