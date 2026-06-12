import React, { createContext, useState } from "react";

import type { Channel as ChannelModel, LocalMessage } from "stream-chat";
type AppContextType = {
  channel: ChannelModel | null;
  setChannel: (val: ChannelModel | null) => void;
  thread: LocalMessage | null;
  setThread: (val: LocalMessage | null) => void;
};

// 创建上下文，默认值类型匹配
export const AppContext = createContext<AppContextType>({
  channel: null,
  setChannel: () => {},
  thread: null,
  setThread: () => {},
});

export const AppConsumer = AppContext.Consumer;
export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [channel, setChannel] = useState<AppContextType['channel']>(null);
  const [thread, setThread] = useState<AppContextType['thread']>(null);

  return (
    <AppContext.Provider value={{ channel, setChannel, thread, setThread }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => React.useContext(AppContext);
