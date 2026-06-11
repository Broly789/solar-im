import { Stack } from 'expo-router'

export default function AuthRoutesLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="sign-in" options={{ title: '登录' }} />
      <Stack.Screen name="sign-up" options={{ title: '注册' }} />
    </Stack>
  )
}
