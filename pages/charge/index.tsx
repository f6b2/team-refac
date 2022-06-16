import { useAuth } from '../../src/components/commons/hooks/useAuth';
import ChargeStation from '../../src/components/units/charge/charge.container';

export default function ChargePage() {
  useAuth();
  return <ChargeStation />;
}
