import NextLink from "next/link";
import { useState } from "react";
import { DeleteIcon } from "../../../components/icons/DeleteIcon";
import { EditIcon } from "../../../components/icons/EditIcon";
import { DeleteModal } from "./DeleteModal";
import { EditModal } from './EditModal'

import {
  ItemContainer,
  ItemImageWrapper,
  ItemIconsWrapper,
  ItemDetailsWrapper,
} from './style';

export function Item(props) {
  const [openDeleteModel, setOpenDeleteModel] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);

  const {
    id,
    img,
    productName,
    category,
    price,
    href,
    description
  } = props;

  return(
    <ItemContainer>
      <ItemImageWrapper imgSrc={img}>
        <ItemIconsWrapper>
          <span onClick={() => setOpenDeleteModel(!openDeleteModel)}><DeleteIcon /></span>
          <span onClick={() => setOpenEditModal(!openEditModal)}><EditIcon /></span>
        </ItemIconsWrapper>
      </ItemImageWrapper>

      <ItemDetailsWrapper>
        <h3>{productName}</h3>
        <span>R$ {price}</span>
        <NextLink href={href}>
          <a>ver produto</a>
        </NextLink>
      </ItemDetailsWrapper>
      
      {
        openDeleteModel && 
        <DeleteModal
          id={id}
          img={img}
          productName={productName}
          price={price}
          setOpenDeleteModel={setOpenDeleteModel}
        />
      }

      {
        openEditModal && 
        <EditModal 
          id={id}
          img={img}
          productName={productName}
          price={price}
          category={category}
          description={description}
          setOpenEditModal={setOpenEditModal}
        />
      }
    </ItemContainer>
  );
}