import { useAppContext } from "@/contexts/AppContext";
import { useHeaderHeight } from "@react-navigation/elements";
import { Stack, useRouter } from "expo-router";
import { useRef } from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Channel, MessageComposer, MessageList } from "stream-chat-expo";

export default function ChannelScreen() {
  const router = useRouter();
  const { channel, thread, setThread } = useAppContext();
  const headerHeight = useHeaderHeight();
  const headerHeightRef = useRef(headerHeight);

  if (!channel) {
    return (
      <SafeAreaView>
        <Text>Loading chat ...</Text>
      </SafeAreaView>
    );
  }

  return (
    <>
      <Stack.Screen options={{ title: "Channel" }} />
      <Channel
        channel={channel}
        keyboardVerticalOffset={headerHeightRef.current}
        topInset={headerHeightRef.current}
        thread={thread}
      >
        <MessageList
          onThreadSelect={(message) => {
            setThread(message);
            router.push({
              pathname: "/channel/[cid]/thread/[messageId]",
              params: {
                cid: channel.cid,
                messageId: message?.id || "",
              },
            });
          }}
        />
        <MessageComposer />
      </Channel>
    </>
  );
}
