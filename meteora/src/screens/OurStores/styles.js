import styled from "styled-components";
import { colors } from "@/styles/colors";
import { device } from "@/styles/devices";
import { sectionTitle } from "@/styles/typography";

export const OurStoresContainer = styled.div`
  max-width: 144rem;
  height: 100%;
  padding: 1.6rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8rem;

  color: ${colors.text};

  position: relative;
  top: 0rem;

  .titles {
    text-align: center;

    .page-title {
      ${sectionTitle(colors.text)}
    }
  }

  .sections {
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }
`;