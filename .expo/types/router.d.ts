/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/components/qaBox`; params?: Router.UnknownInputParams; } | { pathname: `/screens/createpost`; params?: Router.UnknownInputParams; } | { pathname: `/screens/homepage`; params?: Router.UnknownInputParams; } | { pathname: `/screens`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `/components/qaBox`; params?: Router.UnknownOutputParams; } | { pathname: `/screens/createpost`; params?: Router.UnknownOutputParams; } | { pathname: `/screens/homepage`; params?: Router.UnknownOutputParams; } | { pathname: `/screens`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `/components/qaBox${`?${string}` | `#${string}` | ''}` | `/screens/createpost${`?${string}` | `#${string}` | ''}` | `/screens/homepage${`?${string}` | `#${string}` | ''}` | `/screens${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/components/qaBox`; params?: Router.UnknownInputParams; } | { pathname: `/screens/createpost`; params?: Router.UnknownInputParams; } | { pathname: `/screens/homepage`; params?: Router.UnknownInputParams; } | { pathname: `/screens`; params?: Router.UnknownInputParams; };
    }
  }
}
