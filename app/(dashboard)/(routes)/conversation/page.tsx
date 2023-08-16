import Heading from "@/components/Heading";

import { MessageSquare } from "lucide-react";

const ConversationPage = () => {
  return (
    <>
      <Heading
        title="Conversation"
        description="Unveiling Our Premier Conversational AI."
        Icon={MessageSquare}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />
      <div className="px-4 lg:px-8"></div>
    </>
  );
};

export default ConversationPage;
