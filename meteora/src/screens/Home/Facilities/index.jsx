import { FacilityItem } from "./FacilityItem";
import {
  FacilitiesContainer
} from './style';

export function Facilities({list}) {
  return(
    <FacilitiesContainer>
      {list.map(item => (
        <FacilityItem key={item.id} item={item} />
      ))}
    </FacilitiesContainer>
  );
}