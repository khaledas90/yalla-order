import { useState } from "react";
import { MapContainer, TileLayer, Marker, useMap, useMapEvents } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

interface MapComponentProps {
    onLocationSelect: (latlng: { lat: number; lng: number }, address?: string) => void;
}

const penSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="256" height="367" viewBox="0 0 256 367">
        <path fill="#ea4335" d="M70.585 271.865a371 371 0 0 1 28.911 42.642c7.374 13.982 10.448 23.463 15.837 40.31c3.305 9.308 6.292 12.086 12.714 12.086c6.998 0 10.173-4.726 12.626-12.035c5.094-15.91 9.091-28.052 15.397-39.525c12.374-22.15 27.75-41.833 42.858-60.75c4.09-5.354 30.534-36.545 42.439-61.156c0 0 14.632-27.035 14.632-64.792c0-35.318-14.43-59.813-14.43-59.813l-41.545 11.126l-25.23 66.451l-6.242 9.163l-1.248 1.66l-1.66 2.078l-2.914 3.319l-4.164 4.163l-22.467 18.304l-56.17 32.432z" />
        <path fill="#ea4335" d="M12.612 188.892c13.709 31.313 40.145 58.839 58.031 82.995l95.001-112.534s-13.384 17.504-37.662 17.504c-27.043 0-48.89-21.595-48.89-48.825c0-18.673 11.234-31.501 11.234-31.501l-64.489 17.28z" />
        <path fill="#ea4335" d="M166.705 5.787c31.552 10.173 58.558 31.53 74.893 63.023l-75.925 90.478s11.234-13.06 11.234-31.617c0-27.864-23.463-48.68-48.81-48.68c-23.969 0-37.735 17.475-37.735 17.475v-57z" />
        <path fill="#ea4335" d="M30.015 45.765C48.86 23.218 82.02 0 127.736 0c22.18 0 38.89 5.823 38.89 5.823L90.29 96.516H36.205z" />
        <path fill="#ea4335" d="M12.612 188.892S0 164.194 0 128.414c0-33.817 13.146-63.377 30.015-82.649l60.318 50.759z" />
    </svg>
`;

const penIcon = new L.Icon({
    iconUrl: `data:image/svg+xml;base64,${btoa(penSvg)}`,
    iconSize: [30, 45],
    iconAnchor: [20, 60],
    popupAnchor: [0, -50],
});

const LocationMarker = ({ onLocationSelect }: { onLocationSelect: (latlng: { lat: number; lng: number }) => void }) => {
    const [position, setPosition] = useState<[number, number] | null>(null);
    useMapEvents({
        click(e) {
            const newPosition: [number, number] = [e.latlng.lat, e.latlng.lng];
            setPosition(newPosition);
            onLocationSelect({ lat: e.latlng.lat, lng: e.latlng.lng });
        },
    });

    return position ? <Marker position={position} icon={penIcon} /> : null;
};

const SearchControl = ({ onSearch }: { onSearch: (latlng: { lat: number; lng: number }, address: string) => void }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const map = useMap();

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!searchQuery) return;

        try {
            const response = await fetch(
                `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchQuery)}&limit=1`
            );
            const data = await response.json();
            if (data && data.length > 0) {
                const { lat, lon } = data[0];
                map.setView([parseFloat(lat), parseFloat(lon)], 13);
                onSearch({ lat: parseFloat(lat), lng: parseFloat(lon) }, data[0].display_name);
            }
        } catch (error) {
            console.error("Error searching location:", error);
        }
    };

    return (
        <div className="absolute top-2 left-2 z-[999] w-full px-2">
            <form onSubmit={handleSearch} className="flex items-center justify-center">
                <div className="w-2/3">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search road and landmark"
                        className="w-full pl-10 pr-20 py-2 border rounded-3xl text-black focus:outline-hidden focus:ring-2 bg-white focus:ring-white"
                    />
                </div>
            </form>
        </div>
    );
};

// New MyLocationControl component
// const MyLocationControl = ({ onLocationSelect }: { onLocationSelect: (latlng: { lat: number; lng: number }) => void }) => {
//     const map = useMap();

//     const handleGetMyLocation = () => {
//         if (navigator.geolocation) {
//             navigator.geolocation.getCurrentPosition(
//                 (position) => {
//                     const latlng = { lat: position.coords.latitude, lng: position.coords.longitude };
//                     map.setView([latlng.lat, latlng.lng], 13);
//                     onLocationSelect(latlng);
//                 },
//                 (error) => {
//                     console.error("Error getting location:", error);
//                     alert("Unable to retrieve your location. Please allow location access or search manually.");
//                 }
//             );
//         } else {
//             alert("Geolocation is not supported by your browser.");
//         }
//     };

//     return (
//         <div className="absolute bottom-4 right-4 z-[999]">
//             <button
//                 type="button"
//                 title="my location"
//                 onClick={handleGetMyLocation}
//                 className="bg-white text-gray-800 p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors w-10 h-10 flex items-center justify-center"
//                 aria-label="Get my location"
//             >
//                 <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="20"
//                     height="20"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                 >
//                     <circle cx="12" cy="12" r="10" />
//                     <line x1="12" y1="2" x2="12" y2="22" />
//                     <line x1="2" y1="12" x2="22" y2="12" />
//                 </svg>
//             </button>
//         </div>
//     );
// };

const MapComponent = ({ onLocationSelect }: MapComponentProps) => {
    const [position, setPosition] = useState<[number, number]>([31.2001, 29.9187]);

    const handleLocationSelectInternal = (latlng: { lat: number; lng: number }, address?: string) => {
        setPosition([latlng.lat, latlng.lng]);
        onLocationSelect(latlng, address);
    };

    return (<>
        <MapContainer
            center={position}
            zoom={15}
            style={{ height: "400px", width: "100%", position: "relative", zIndex: "1" }}
        >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <SearchControl onSearch={handleLocationSelectInternal} />
            {/* <MyLocationControl onLocationSelect={handleLocationSelectInternal} /> */}
            <LocationMarker onLocationSelect={handleLocationSelectInternal} />
        </MapContainer>
    </>
    );
};

export default MapComponent;