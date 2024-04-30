import { message } from "antd";
import { MessageInstance } from "antd/es/message/interface";
import React, { createContext } from "react";

export const ToolsContext = createContext<{
  messageApi: MessageInstance | null;
  contextHolder: React.ReactElement<
    any,
    string | React.JSXElementConstructor<any>
  >;
}>({
  messageApi: null,
  contextHolder: <></>,
});

export const ToolsProvider = ({
  children,
}: {
  children: React.JSX.Element;
}) => {
  const [messageApi, contextHolder] = message.useMessage();

  return (
    <ToolsContext.Provider
      value={{
        messageApi,
        contextHolder,
      }}
    >
      {children}
    </ToolsContext.Provider>
  );
};
