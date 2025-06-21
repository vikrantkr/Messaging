# Broadcast Beacon

This is a Next.js application for broadcasting messages, created in Firebase Studio.

To get started, take a look at `src/app/page.tsx`.

## Running Locally

To run this application on your local machine, please follow these steps:

### 1. Install Dependencies
Open your terminal and run the following command to install the necessary packages from `package.json`:

```bash
npm install
```

### 2. Set Up Environment Variables
This project requires a connection to a Firebase project to store and retrieve messages.

1.  Make a copy of the `.env.example` file and rename it to `.env`.
2.  Replace the placeholder values (`YOUR_..._HERE`) with your actual Firebase project credentials. You can find these in your **Firebase Console** > **Project Settings** > **General** > **Your apps** > **SDK setup and configuration**.

Your `.env` file should look like this:
```
# Firebase Project Configuration
NEXT_PUBLIC_FIREBASE_API_KEY="YOUR_API_KEY_HERE"
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="YOUR_AUTH_DOMAIN_HERE"
NEXT_PUBLIC_FIREBASE_PROJECT_ID="YOUR_PROJECT_ID_HERE"
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="YOUR_STORAGE_BUCKET_HERE"
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="YOUR_SENDER_ID_HERE"
NEXT_PUBLIC_FIREBASE_APP_ID="YOUR_APP_ID_HERE"
```

### 3. Run the Development Server
Once the dependencies are installed and your environment variables are set, start the Next.js development server:

```bash
npm run dev
```

### 4. Open the App
Open your web browser and navigate to [http://localhost:9002](http://localhost:9002) to see the application running.
