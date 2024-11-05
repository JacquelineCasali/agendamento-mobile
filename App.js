import { AuthProvider } from "./src/context/auth.js";
import Routes from "./src/routes/routes.js";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}
