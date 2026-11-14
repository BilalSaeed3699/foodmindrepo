# FoodMind

FoodMind is a React and Vite frontend with a public landing page and an illustrative user workspace. Run it locally with `npm install` and `npm run dev`. Use `npm run build` and `npm run lint` to validate changes.

## Demo limitations

Login, registration, and password reset are **frontend-only demonstrations**, not authentication. Any valid email and a placeholder password of at least eight characters can start a demo session. Do not enter real passwords. No account is created, no password is stored, no email is sent, and no password is changed. The workspace is not protected by a real authorization system.

The demo profile and chat history are stored in the current browser tab's session storage and are removed when the demo session ends. Assistant replies and meal recommendations are static examples, not live AI or personalized advice. Meal planning and recent-recipe functionality are not yet connected. English, Arabic, and Urdu are available through the language selector.

The app uses client-side paths such as `/login`, `/reset-password`, and `/app/assistant`. A production static host must serve `index.html` for those paths.
