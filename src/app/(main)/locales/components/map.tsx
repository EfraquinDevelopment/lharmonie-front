"use client";

import React, { useEffect, useRef, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import Heading from "@/components/layout/heading";
import content from "@/data/stores.json";
import { NEXT_PUBLIC_GOOGLE_API_KEY } from "@/lib/constants";

const Map = () => {
  const { locations, title } = content.mapSection;

  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [markers, setMarkers] = useState<
    google.maps.marker.AdvancedMarkerElement[]
  >([]);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: NEXT_PUBLIC_GOOGLE_API_KEY!,
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
    <div className="md:flex md:h-[600px] xl:h-[700px] container mx-auto mb-16 md:shadow-xl rounded-xl">
      <div className="md:w-1/3 md:bg-gray-100 md:p-4 overflow-y-auto">
        <ul className="hidden md:block space-y-4">
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
      <div
        ref={mapRef}
        className="md:w-2/3 h-[300px] mx-4 md:mx-0 md:h-full md:rounded-r-xl -md:shadow-xl -md:rounded-xl"
      />
    </div>
  );
};

export default Map;
