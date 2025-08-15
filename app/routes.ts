import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("Impostazioni", "routes/impostazioni.tsx"),
    route("InserisciDati", "routes/inserisciDati.tsx"),
] satisfies RouteConfig;
