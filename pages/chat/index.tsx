import { useAuth } from '../../src/components/commons/hooks/useAuth';
import ChatAccess from '../../src/components/units/chat/access/ChatAccess.container';

export default function ChatAccessPage() {
  useAuth();
  return <ChatAccess />;
}
