// Helper functions for making NWS API requests

import { USER_AGENT } from "./index.js";
import type { IAlertFeature } from "./types.js";

export async function makeNWSRequest<T>(url: string): Promise<T | null> {
  const headers = {
    "User-Agent": USER_AGENT,
    Accept: "application/geo+json",
  };

  try {
    const response = await fetch(url, { headers });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return (await response.json()) as T;
  } catch (error) {
    console.error("Error making NWS request:", error);
    return null;
  }
}

export function formatAlert(feature: IAlertFeature): string {
  const { properties } = feature;
  const { event, areaDesc, severity, status, headline } = properties;

  return [
    `Event: ${event || "Unknown"}`,
    `Area: ${areaDesc || "Unknown"}`,
    `Severity: ${severity || "Unknown"}`,
    `Status: ${status || "Unknown"}`,
    `Headline: ${headline || "Unknown"}`,
    "---",
  ].join("\n");
}
