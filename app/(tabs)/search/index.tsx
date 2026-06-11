import { Stack } from 'expo-router'
import { useState } from 'react'
import { ScrollView, Text, View } from 'react-native'

export default function SearchIndex() {
  const list = Array.from({ length: 30 }, (_, i) => `推荐内容 ${i + 1}`)
  const [searchText, setSearchText] = useState('')

  return (
    <>
      <Stack.Screen
        options={{
          // headerShown: false, // 底部标签栏搜索框必须开启头部才会显示
          title: '搜索',
          headerSearchBarOptions: {
            hideWhenScrolling: true, // 搜索框是否滚动时隐藏
            placeholder: 'Search...',
            onChangeText: (e) => setSearchText(e.nativeEvent.text),
          },
        }}
      />
      <ScrollView
        style={{ flex: 1, paddingHorizontal: 16 }}
        contentInsetAdjustmentBehavior="automatic"
      >
        <Text>搜索结果区域 {searchText}</Text>
        {/* 大量内容撑满屏幕，支持下拉展开搜索框 */}
        {list.map((item) => (
          <View key={item} style={{ marginVertical: 8 }}>
            <Text>{item}</Text>
          </View>
        ))}
      </ScrollView>
    </>
  )
}
