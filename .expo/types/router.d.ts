/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/screens`; params?: Router.UnknownInputParams; } | { pathname: `/screens/Discovery`; params?: Router.UnknownInputParams; } | { pathname: `/components/CardView`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `/screens`; params?: Router.UnknownOutputParams; } | { pathname: `/screens/Discovery`; params?: Router.UnknownOutputParams; } | { pathname: `/components/CardView`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `/screens${`?${string}` | `#${string}` | ''}` | `/screens/Discovery${`?${string}` | `#${string}` | ''}` | `/components/CardView${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/screens`; params?: Router.UnknownInputParams; } | { pathname: `/screens/Discovery`; params?: Router.UnknownInputParams; } | { pathname: `/components/CardView`; params?: Router.UnknownInputParams; };
    }
  }
}
