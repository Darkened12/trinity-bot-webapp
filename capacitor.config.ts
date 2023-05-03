import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.trinitybot.app',
  appName: 'BlazBlue Frame Data',
  webDir: 'dist/trinity-frame-data',
  server: {
    androidScheme: 'https'
  }
};

export default config;
