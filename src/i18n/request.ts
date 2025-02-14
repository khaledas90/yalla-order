import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as string)) {
    locale = routing.defaultLocale;
  }

  const lang = locale;
  const massagePathname = ["common", "restaurant", "clinic"];

  const messagesArray = await Promise.all(
    massagePathname.map(async (path) => {
      const routingMassage = (
        await import(`../../messages/${path}/${lang}.json`)
      ).default;
      return routingMassage;
    })
  );

  const messages = messagesArray.reduce((acc, message) => {
    return { ...acc, ...message };
  }, {});

  return {
    locale,
    messages,
  };
});
