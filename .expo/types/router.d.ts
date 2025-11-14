/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/screens`; params?: Router.UnknownInputParams; } | { pathname: `/screens${'/(auth)'}/CreateAccount` | `/screens/CreateAccount`; params?: Router.UnknownInputParams; } | { pathname: `/screens${'/(auth)'}/signIn` | `/screens/signIn`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `/screens`; params?: Router.UnknownOutputParams; } | { pathname: `/screens${'/(auth)'}/CreateAccount` | `/screens/CreateAccount`; params?: Router.UnknownOutputParams; } | { pathname: `/screens${'/(auth)'}/signIn` | `/screens/signIn`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `/screens${`?${string}` | `#${string}` | ''}` | `/screens${'/(auth)'}/CreateAccount${`?${string}` | `#${string}` | ''}` | `/screens/CreateAccount${`?${string}` | `#${string}` | ''}` | `/screens${'/(auth)'}/signIn${`?${string}` | `#${string}` | ''}` | `/screens/signIn${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/screens`; params?: Router.UnknownInputParams; } | { pathname: `/screens${'/(auth)'}/CreateAccount` | `/screens/CreateAccount`; params?: Router.UnknownInputParams; } | { pathname: `/screens${'/(auth)'}/signIn` | `/screens/signIn`; params?: Router.UnknownInputParams; };
    }
  }
}
