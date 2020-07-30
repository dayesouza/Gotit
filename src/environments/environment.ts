import { firebase, appInsightsInstrumentationKey } from './key';

export const environment = {
  production: false,
  firebase,
  appInsights: {
    instrumentationKey: appInsightsInstrumentationKey,
  },
};
