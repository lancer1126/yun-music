import Vue from "vue";
import App from "./App";
import VueAnalytics from "vue-analytics";
import router from "./router";
import store from "./store";
import i18n from "@/locale";
import "@/assets/icons";
import "@/utils/filters";

import * as Sentry from "@sentry/browser";
import { Vue as VueIntegration } from "@sentry/integrations";
import { Integrations } from "@sentry/tracing";

Vue.use(VueAnalytics, {
  id: "UA-180189423-1",
  router,
});

Vue.config.productionTip = false;

if (process.env.VUE_APP_ENABLE_SENTRY === "true") {
  Sentry.init({
    dsn:
      "https://30aaa25152974f48971912a394ab6bc3@o436528.ingest.sentry.io/5477409",
    integrations: [
      new VueIntegration({
        Vue,
        tracing: true,
      }),
      new Integrations.BrowserTracing(),
    ],
    tracesSampleRate: 1.0,
  });
}

new Vue({
  i18n,
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
