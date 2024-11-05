import RoutesPrivate from "./routesPrivate";
import RoutesOpen from "./routesOpen";
import { useContext } from "react";
import { AuthContext } from "../context/auth";

export default function Routes() {
const {user}=useContext(AuthContext)

  return user.id_user ? <RoutesPrivate /> : <RoutesOpen />;
}
