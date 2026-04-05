# iOS Conversion Roadmap: Radisson Blu Murree
This document provides instructions for future AI agents to convert the current **React/Vite** web application into a high-performance **iOS app** using **Capacitor**.
## 1. Project Context
*   **Source**: `/CORRECT NEW/`
*   **Tech Stack**: React 18, Vite, Tailwind CSS, Gemini Live Chat/Voice API.
*   **Goal**: A premium, 5-star iOS app for guest activities and bookings.
## 2. Recommended Conversion Paths
### A. The "I Have a Mac" Path: Local Build
Use Capacitor to preserve 100% of the existing UI.
*   **Hardware**: macOS (Zeeshan's system).
*   **Action**: Open `ios/App` in Xcode and hit "Run".

### B. The "Windows Forever" Path: GitHub Cloud Build
Use the provided Cloud Build files (`.github/workflows/ios.yml`) to build for free on GitHub's Mac runners.
*   **Environment**: GitHub Actions (Free).
*   **Output**: An unsigned `.ipa` file for testing.
*   **Software**: 
    *   Xcode (Installed via App Store).
    *   CocoaPods (`sudo gem install cocoapods`).
    *   Node.js & NPM (Already available).
### 2.2 Technical Setup Flow
1.  **Initialize**:
    ```bash
    npm install @capacitor/core @capacitor/cli @capacitor/ios
    npx cap init "Radisson Murree" "com.radisson.murree" --web-dir dist
    npx cap add ios
    ```
2.  **Syncing Code**:
    ```bash
    npm run build
    npx cap copy
## 3. How to Start the Cloud Build
1.  **Initialize Git**: `git init && git add . && git commit -m "Initial commit"`
2.  **Push to GitHub**: Create a repository and push your project to it.
3.  **Run Workflow**: Go to the "Actions" tab on GitHub and click "Run workflow" on the **Build iOS App** item.
4.  **Download**: Wait ~10 minutes, and the app file will appear in the "Artifacts" section.
## 3. iOS Specific Optimizations
Future agents must implement:
*   **Safe Area Handling**: Ensure the `Header` and `Sidebar` account for the iPhone "Notch" and "Home Bar" using CSS `env(safe-area-inset-top)` and `bottom`.
*   **Microphone Permissions**: Add the `NSMicrophoneUsageDescription` key to the `Info.plist` file in Xcode to allow the **Voice Concierge** to function.
*   **App Icon & Splash**: Use the official logos and high-res landscapes sourced in `RADISSON_BLU_RESEARCH.md`.
*   **Status Bar**: Force light/dark mode styling to match the Radisson Blu Navy branding.
## 4. Known Constraints
*   **API Keys**: Ensure the `.env` variables (Gemini API Key) are correctly bundled or provided via a mobile-secure method (like GitHub Secrets if CI/CD is used).
*   **Network Access**: Enable "App Transport Security Settings" in Xcode to allow the app to communicate with the Google Generative AI endpoints.
