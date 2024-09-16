"use client";

import React, { useEffect, useRef, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import Heading from "@/components/layout/heading";

const locations = [
  {
    title: "LH1",
    position: { lat: -34.578674498644325, lng: -58.40952986441803 },
    address: "Juan Francisco Seguí 3611, C1425ACC",
  },
  {
    title: "LH2",
    position: { lat: -34.57797363272871, lng: -58.43847183558195 },
    address: "Nicaragua 6068, C1414BWN",
  },
  {
    title: "Casa Lharmonie",
    position: { lat: -34.56524973002479, lng: -58.434563264418024 },
    address: "Maure 1516, C1426",
  },
  {
    title: "Lh4",
    position: { lat: -34.564818229933095, lng: -58.44490107790985 },
    address: "Zabala 1925, C1426DQI",
  },
];

const Map = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [markers, setMarkers] = useState<
    google.maps.marker.AdvancedMarkerElement[]
  >([]);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY!,
        version: "weekly",
      });

      const { Map } = await loader.importLibrary("maps");
      const { AdvancedMarkerElement: Marker, PinElement } =
        (await google.maps.importLibrary(
          "marker"
        )) as google.maps.MarkerLibrary;

      const mapOptions: google.maps.MapOptions = {
        center: { lat: -34.578674498644325, lng: -58.40952986441803 },
        zoom: 14,
        mapId: "LHARMONIE_MAP_ID",
        fullscreenControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        draggableCursor: "default",
      };

      const mapInstance = new Map(mapRef.current as HTMLDivElement, mapOptions);
      setMap(mapInstance);

      const infowindow = new google.maps.InfoWindow();
      const markerElements: google.maps.marker.AdvancedMarkerElement[] = [];

      locations.forEach((location, i) => {
        const pin = new PinElement({
          glyph: `${i + 1}`,
          scale: 1.5,
        });

        const marker = new Marker({
          title: `${i + 1}. ${location.title}`,
          position: location.position,
          content: pin.element,
          gmpClickable: true,
          map: mapInstance,
        });

        marker.addListener("click", () => {
          const contentString = `
            <div>
              <h3 style="font-size: 18px; font-weight: bold; margin: 0; padding-bottom: 4px;">
                ${location.title}
              </h3>
              <p style="margin: 0;">${location.address}</p>
            </div>
          `;
          infowindow.setContent(contentString);
          infowindow.open(mapInstance, marker);
        });

        markerElements.push(marker);
      });

      setMarkers(markerElements);
    };

    initMap();
  }, []);

  const handleLocationClick = (locationIndex: number) => {
    if (map && markers[locationIndex]) {
      const selectedMarker = markers[locationIndex];
      map.panTo(selectedMarker.position!);
      google.maps.event.trigger(selectedMarker, "click");
    }
  };

  return (
    <div className="flex h-[700px] container mx-auto py-16">
      <div className="w-1/3 bg-gray-100 p-4 overflow-y-auto">
        <Heading level={3} className="font-bold mb-4">
          Direcciones
        </Heading>
        <ul className="space-y-4">
          {locations.map((location, index) => (
            <li
              key={index}
              className="cursor-pointer border p-4 rounded hover:bg-gray-200"
              onClick={() => handleLocationClick(index)}
            >
              <h3 className="text-lg font-semibold">{location.title}</h3>
              <p>{location.address}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Mapa a la derecha */}
      <div ref={mapRef} className="w-2/3 h-full" />
    </div>
  );
};

export default Map;
