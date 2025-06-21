# **App Name**: Broadcast Beacon

## Core Features:

- Message Creation: Admin interface to create broadcast messages with specified start/end times, types (info, alert, warning), and target consumer segments.
- Message Fetching: API endpoint to fetch active, non-dismissed messages for a specific consumer ID from the backend, ensuring correct filtering based on time and target audience.
- Message Display: React `MessageBanner` component that displays fetched messages, styled according to their type (info, alert, warning), with the possibility to dismiss individual messages.
- Message Caching: Use `@tanstack/react-query` within the React SDK to manage caching and background updates of messages, improving performance and user experience.
- Message Generation: Generative AI tool that allows the admin to create variations on a broadcast message using a set of options that determine writing style, length, and tone of voice. These messages may then be queued individually, or A/B tested.
- Message Styling: UI components for the React `MessageBanner` for styling various types of messages (info, alert, warning) based on severity.

## Style Guidelines:

- Primary color: Dark teal (#336B87) for a calm, professional feel.
- Background color: Dark gray (#282C34) to reduce eye strain.
- Accent color: Muted orange (#D98310) for important alerts and calls to action.
- Body font: 'Inter' sans-serif for readability; Headline font: 'Space Grotesk' for emphasis.
- Simple, outline-style icons to represent message types (information, warning, alert) and actions (dismiss).
- Banner layout at the top of the application screen, ensuring messages are easily visible but do not obstruct core content.
- Subtle fade-in/out animations for displaying and dismissing messages to avoid abrupt changes.