/// <reference types="expo/types" />

// 1. 给 process.env 声明（expo run / dev-client 原生端）
declare namespace NodeJS {
  interface ProcessEnv {
    EXPO_PUBLIC_STREAM_API_KEY: string;
    EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY: string;
  }
}
