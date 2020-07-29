import { firebase, cuttlyKey, appInsightsInstrumentationKey } from './key';

export const environment = {
  production: false,
  firebase,
  cuttlyKey,
  appInsights: {
    instrumentationKey: appInsightsInstrumentationKey,
  },
};
