import { useAppContext } from "@/contexts/AppContext";
import { useHeaderHeight } from "@react-navigation/elements";
import { Stack } from "expo-router";
import { useRef } from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Channel, Thread } from "stream-chat-expo";

export default function ThreadScreen() {
  const { channel, thread, setThread } = useAppContext();
  const headerHeight = useHeaderHeight();
  const headerHeightRef = useRef(headerHeight);

  if (!channel || !thread) {
    return (
      <SafeAreaView>
        <Text>Loading chat ...</Text>
      </SafeAreaView>
    );
  }

  return (
    <>
      <Stack.Screen options={{ title: "Thread" }} />
      <Channel
        channel={channel}
        keyboardVerticalOffset={headerHeightRef.current}
        topInset={headerHeightRef.current}
        thread={thread}
        threadList
      >
        <Thread onThreadDismount={() => setThread(null)} />
      </Channel>
    </>
  );
}
