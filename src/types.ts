export interface IAlertFeature {
  properties: {
    event?: string;
    areaDesc?: string;
    severity?: string;
    status?: string;
    headline?: string;
  };
}

export interface IForecastPeriod {
  name?: string;
  temperature?: number;
  temperatureUnit?: string;
  windSpeed?: string;
  windDirection?: string;
  shortForecast?: string;
}

export interface IAlertResponse {
  features: IAlertFeature[];
}

export interface IPointsResponse {
  properties: {
    forecast?: string;
  };
}

export interface IForecastResponse {
  properties: {
    periods: IForecastPeriod[];
  };
}
