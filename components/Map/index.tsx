"use client";

import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";

// Fix for default marker icon issues in Next.js/Leaflet
const iconUrl =
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png";
const iconRetinaUrl =
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png";
const shadowUrl =
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png";

const customIcon = new L.Icon({
    iconUrl: iconUrl,
    iconRetinaUrl: iconRetinaUrl,
    shadowUrl: shadowUrl,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});

interface Branch {
    name: string;
    lat: number;
    lng: number;
    address: string;
    email: string;
    phone: string[];
    googleMapsLink: string;
}

interface MapProps {
    center: [number, number];
    zoom: number;
    branches: Branch[];
}

// Component to handle map view updates
const MapUpdater = ({ center, zoom }: { center: [number, number]; zoom: number }) => {
    const map = useMap();
    useEffect(() => {
        map.setView(center, zoom);
    }, [center, zoom, map]);
    return null;
};

const LeafletMap = ({ center, zoom, branches }: MapProps) => {
    return (
        <MapContainer
            center={center}
            zoom={zoom}
            scrollWheelZoom={false}
            style={{ height: "100%", width: "100%", borderRadius: "0.5rem", zIndex: 1 }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MapUpdater center={center} zoom={zoom} />
            {branches.map((branch, index) => (
                <Marker
                    key={index}
                    position={[branch.lat, branch.lng]}
                    icon={customIcon}
                >
                    <Popup className="min-w-[250px]">
                        <div className="p-2">
                            <h3 className="font-bold text-lg mb-0">{branch.name}</h3>

                            <div className="mb-0">
                                {/* <p className="text-sm font-semibold text-gray-700">Address:</p> */}
                                <p className="text-sm text-gray-600">{branch.address}</p>
                            </div>

                            {branch.email && (
                                <div className="mb-2">
                                    {/* <p className="text-sm font-semibold text-gray-700">Email:</p> */}
                                    <a href={`mailto:${branch.email}`} className="text-sm text-blue-600 hover:underline">
                                        {branch.email}
                                    </a>
                                </div>
                            )}

                            {branch.phone && branch.phone.length > 0 && (
                                <div className="mb-3">
                                    {/* <p className="text-sm font-semibold text-gray-700">Phone:</p> */}
                                    <div className="flex flex-col">
                                        {branch.phone.map((phone, i) => (
                                            <a key={i} href={`tel:${phone.replace(/\s/g, '')}`} className="text-sm text-blue-600 hover:underline">
                                                {phone}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <a
                                href={branch.googleMapsLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block w-full text-center  bg-secondary text-sm font-medium py-2 px-4 rounded hover:bg-primary transition-colors"
                            >
                                <span className="text-white">Get Directions</span>
                            </a>
                        </div>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default LeafletMap;
