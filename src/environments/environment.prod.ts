import { firebase, appInsightsInstrumentationKey } from './key';

export const environment = {
  production: true,
  firebase,
  appInsights: {
    instrumentationKey: appInsightsInstrumentationKey,
  },
};
