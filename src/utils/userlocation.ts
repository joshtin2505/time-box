import type { Location, LocationMapped } from "@/types/location";

export async function getUserLocation() {
  try {
    const res = await fetch("https://ipapi.co/json/");
    if (!res.ok) {
      throw new Error("Error al obtener Location");
    }
    const data = (await res.json()) as Location;
    console.log("País:", data.country_name);
    console.log("Código país:", data.country_code);
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Error al obtener la ubicación del usuario: " + error);
  }
}

export function locationMapper(location: Location): LocationMapped {
  return {
    ip: location.ip,
    city: location.city,
    region: location.region,
    timezone: location.timezone,
    latitude: location.latitude,
    longitude: location.longitude,
    country: location.country_name,
    countryCode: location.country_code,
  };
}
