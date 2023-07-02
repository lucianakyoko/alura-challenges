import {
  FacilityItemContainer
} from './styles';

export function FacilityItem({ item }) {
  return (
    <FacilityItemContainer>
      <span className='icon'>{item.icon}</span>
      <div className="details">
        <h3 className="title">{item.label}</h3>
        <p className="description">{item.description}</p>
      </div>
    </FacilityItemContainer>
  );
}