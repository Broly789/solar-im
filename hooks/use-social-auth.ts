import { LoadingStrategy, type LoadingStrategyKey } from '@/types'
import { useSSO } from '@clerk/expo'
import { useState } from 'react'
import { Alert } from 'react-native'

export default function useSocialAuth() {
  // Hook顶层调用useSSO，符合React规则
  const { startSSOFlow } = useSSO()
  // 存枚举value，类型正确，初始null
  const [loadingStrategy, setLoadingStrategy] =
    useState<LoadingStrategy | null>(null)

  const handleSocialAuth = async (strategy: LoadingStrategy) => {
    // 已有登录请求直接拦截
    if (loadingStrategy) return

    // 1. 提前反向查找渠道名称，整个函数都能用
    const provider = (
      Object.keys(LoadingStrategy) as Array<LoadingStrategyKey>
    ).find((key) => LoadingStrategy[key] === strategy)

    setLoadingStrategy(strategy)

    try {
      const { createdSessionId, setActive } = await startSSOFlow({
        strategy,
      })

      // 无会话=新用户缺少必填信息
      if (!createdSessionId) {
        Alert.alert('登录未完成', `请完善${provider}账号信息后重试`)
        return
      }

      // 激活登录会话
      await setActive!({
        session: createdSessionId,
      })
    } catch (error) {
      console.log(error)
      // 网络/授权弹窗关闭/接口异常
      Alert.alert('登录失败', `${provider}授权中断，请重新登录`)
    } finally {
      // 无论成功失败清空loading
      setLoadingStrategy(null)
    }
  }

  // 对外暴露状态与方法
  return {
    loadingStrategy,
    handleSocialAuth,
  }
}
