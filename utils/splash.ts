import { useAuth } from '@clerk/expo'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'

// preventAutoHideAsync，统一放根_layout顶层
export const SplashScreenController = () => {
  const { isLoaded } = useAuth()

  useEffect(() => {
    // 鉴权加载完成，关闭启动屏，只执行一次
    if (isLoaded) {
      SplashScreen.hideAsync()
    }
  }, [isLoaded])

  // 加载中返回null，保持启动屏常驻
  if (!isLoaded) return null

  // 加载完毕后无任何UI渲染
  return null
}
