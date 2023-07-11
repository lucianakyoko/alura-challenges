import { useState } from "react";
import { ModalTemplate } from "@/components/templates/ModalTemplate";
import { ModalImage } from "./ModalImage";
import { Details } from "./Details";

import {
  ProductModalContent
} from './styles';

export function ProductModal({handleModal, item, addSavedProducts}) {
  const [selectedItem, setSelectedItem] = useState(0);
  const imgSrc= item.items[selectedItem].image;

  return (
    <ModalTemplate
      text='Confira detalhes sobre o produto'
      handleModal={handleModal}
    >
      <ProductModalContent>
        <ModalImage image={imgSrc} />

        <Details 
          item={item}
          addSavedProducts={addSavedProducts}
          handleModal={handleModal}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
      </ProductModalContent>
    </ModalTemplate>
  );
}

