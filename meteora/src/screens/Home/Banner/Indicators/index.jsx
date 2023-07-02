import {
  IndicatorsContainer
} from './styles';

export function Indicators() {
  return (
    <IndicatorsContainer>
      <span className="indicator active"></span>
      <span className="indicator"></span>
      <span className="indicator"></span>
    </IndicatorsContainer>
  );
}