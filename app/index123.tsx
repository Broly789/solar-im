import { useAuth } from '@clerk/expo'
import { Redirect } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'
import { Text, View } from 'react-native'

export default function Index() {
  const { isSignedIn, isLoaded } = useAuth()

  // 鉴权加载完成 → 关闭启动屏（你要的：首页控制关闭）
  useEffect(() => {
    if (isLoaded) {
      SplashScreen.hideAsync()
    }
  }, [isLoaded])

  if (!isLoaded) {
    return null
  }

  if (!isSignedIn) {
    return <Redirect href="/(auth)/sign-in" />
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text className="text-xl font-bold text-red-500">
        Edit app/index.tsx to edit this screen.
      </Text>
    </View>
  )
}
