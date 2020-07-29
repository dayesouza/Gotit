import { firebase, cuttlyKey, appInsightsInstrumentationKey } from './key';

export const environment = {
  production: true,
  firebase,
  cuttlyKey,
  appInsights: {
    instrumentationKey: appInsightsInstrumentationKey,
  },
};
