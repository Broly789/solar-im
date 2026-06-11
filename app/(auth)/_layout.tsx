import { Stack } from 'expo-router'

export default function AuthRoutesLayout() {
  // const { isLoaded } = useAuth()
  // 关键：登录状态没加载完，不渲染任何页面，杜绝中间过渡页
  // if (!isLoaded) return null
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="sign-in" options={{ title: '登录' }} />
      <Stack.Screen name="sign-up" options={{ title: '注册' }} />
    </Stack>
  )
}
