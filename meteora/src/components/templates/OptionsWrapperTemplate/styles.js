import styled from "styled-components";
import { colors } from "@/styles/colors";
import { device } from "@/styles/devices";

export const OptionsWrapperTemplateContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  .colors {
    padding: 1.6rem 0;
    background-color: yellowgreen;
    border-bottom: 1px solid yellowgreen;
  }
  .text {
    color: ${colors.text};
    font-size: 1.3rem;
    font-weight: 700;
    line-height: 2rem;
  }
  .options-list {
    display: flex;
    gap: 1.6rem;
  }
`;