import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("Impostazioni", "routes/impostazioni.tsx"),
    route("InserisciDati", "routes/datiPaziente.tsx"),
    route("CheckList","routes/checkList.tsx"),
    route("AndamentoPaziente", "routes/andamentoPaziente.tsx"),
    route("Faq", "routes/faq.tsx"),
] satisfies RouteConfig;
