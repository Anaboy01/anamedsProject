// "use client" tells Next.js this is a Client Component
"use client";

import { Provider } from "react-redux";
import { store } from "./redux/store";

// Client-side component
export default function ProviderWrapper({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
