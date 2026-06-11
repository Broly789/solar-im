import { SplashScreenController } from '@/utils/splash'
import { ClerkProvider, useAuth } from '@clerk/expo'
import { tokenCache } from '@clerk/expo/token-cache'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import '../global.css'

SplashScreen.preventAutoHideAsync()

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!
if (!publishableKey) {
  throw new Error('Add your Clerk Publishable Key to the .env file')
}

// 抽一层内部组件，才能调用 useAuth 获取实时登录状态
function AppStack() {
  const { isLoaded, isSignedIn } = useAuth()
  // 关键：登录状态没加载完，不渲染任何页面，杜绝中间过渡页
  if (!isLoaded) return null
  return (
    <SafeAreaProvider>
      <Stack>
        {/* 公开登录路由，不受保护 */}
        <Stack.Protected guard={!isSignedIn}>
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        </Stack.Protected>

        {/* 手动传入 guard，和官方示例写法完全统一 */}
        <Stack.Protected guard={!!isSignedIn}>
          <Stack.Screen name="(home)" options={{ headerShown: false }} />
        </Stack.Protected>
      </Stack>
    </SafeAreaProvider>
  )
}

export default function RootLayout() {
  return (
    <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
      <SplashScreenController />
      <AppStack />
    </ClerkProvider>
  )
}
