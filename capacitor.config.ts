import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.radisson.murree',
  appName: 'Radisson Murree',
  webDir: 'dist',
  plugins: {
    StatusBar: {
      style: 'DARK',
      backgroundColor: '#001E62'
    },
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#001E62',
      showSpinner: true,
      androidScaleType: 'CENTER_CROP',
      splashFullScreen: true,
      splashImmersive: true,
    }
  }
};

export default config;
