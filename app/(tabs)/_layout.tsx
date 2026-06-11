import { Icon, Label, NativeTabs } from 'expo-router/unstable-native-tabs'

export default function TabLayout() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="index">
        <Label>Chats</Label>
        <Icon
          sf="message"
          selectedColor={'#6C5CE7'}
          drawable="custom_android_drawable"
        />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="explore">
        <Label>Explore</Label>
        <Icon
          sf="safari"
          selectedColor={'#6C5CE7'}
          drawable="custom_android_drawable"
        />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="profile">
        <Label>Profile</Label>
        <Icon
          sf="person.fill"
          selectedColor={'#6C5CE7'}
          drawable="custom_android_drawable"
        />
      </NativeTabs.Trigger>
    </NativeTabs>
  )
}
