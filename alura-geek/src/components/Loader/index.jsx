import {
  LoderContainer,
  LoaderContentWrapper,
  LoaderItem
} from './style';

export function Loader() {
  return (
    <LoderContainer>
      <LoaderContentWrapper>
        <LoaderItem></LoaderItem>
        <LoaderItem></LoaderItem>
        <LoaderItem></LoaderItem>
      </LoaderContentWrapper>
    </LoderContainer>
  );
}