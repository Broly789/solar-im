export enum LoadingStrategy {
  Google = 'oauth_google',
  Apple = 'oauth_apple',
  GitHub = 'oauth_github',
}

export type LoadingStrategyKey = keyof typeof LoadingStrategy
