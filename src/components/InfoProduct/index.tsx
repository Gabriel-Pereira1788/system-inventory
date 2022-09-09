import React, { useEffect, useRef, useState } from "react";
import {
  Container,
  ContainerInfo,
  ContainerCard,
  WrapperInputs,
  Form,
  Input as input,
  Label,
  Input,
  Text,
  Trash,
  ConfirmButton,
} from "./styles";
import InventoryIcon from "@mui/icons-material/Inventory";
import {
  BsFillTrashFill,
  BsFillPencilFill,
  BsCheckCircle,
} from "react-icons/bs";
import CardControl from "../CardControl";
import { IProduct } from "../../interfaces/IProduct/IProduct";
import { useForm } from "react-hook-form";
import InputEdit from "./InputEdit";
import ModalDelete from "../ModalDelete";

type Props = {
  showInformation: boolean;
  product: IProduct;
};

const InfoProduct = ({ showInformation, product }: Props) => {
  const { name_product, price_purchased, price_saled, storage, id_product } =
    product;

  const {
    register,
    setValue,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm({
    defaultValues: {
      name_product,
      price_purchased,
      price_saled,
      sale: true,
      purchase: false,
    },
  });

  const [openModal, setOpenModal] = useState(false);

  const watchSale = watch("sale");
  const watchPurchase = watch("purchase");
  const [editField, setEditField] = useState({
    name_product: false,
    price_purchased: false,
    price_saled: false,
  });

  const [allInputsDisabled, setAllInputsDisabled] = useState(false);

  const handleSetEditState = (
    name: "name_product" | "price_purchased" | "price_saled",
    value: boolean
  ) => {
    return () => {
      setValue(name, "");
      setEditField((prevState) => ({ ...prevState, [name]: value }));
    };
  };

  const handleToggleModal = (action: "close" | "open") => {
    return () => {
      if (action === "close") setOpenModal(false);
      if (action === "open") setOpenModal(true);
    };
  };

  useEffect(() => {
    const notUpdateStorage = !watchSale && !watchPurchase;
    const notEditProduct =
      !editField.name_product &&
      !editField.price_purchased &&
      !editField.price_saled;
    if (notUpdateStorage && notEditProduct) {
      setAllInputsDisabled(true);
    } else {
      setAllInputsDisabled(false);
    }
  }, [watchSale, watchPurchase, editField]);

  return (
    <>
      <ContainerInfo showInformation={showInformation}>
        {showInformation && (
          <>
            <InventoryIcon style={{ fontSize: "8em" }} />
            <Container>
              <Trash onClick={handleToggleModal("open")}>
                <BsFillTrashFill color="red" cursor="pointer" />
              </Trash>
              <ContainerCard>
                <CardControl
                  showPercentage
                  width="20%"
                  title="Renda total"
                  subTitle="Ultimo més"
                  value={200}
                />
                <CardControl
                  showPercentage
                  width="20%"
                  title="Renda total"
                  subTitle="Més atual"
                  value={200}
                />
                <CardControl
                  showPercentage
                  width="20%"
                  title="Em estoque"
                  value={storage}
                />
              </ContainerCard>
              <Form>
                <WrapperInputs>
                  <InputEdit
                    text="Nome"
                    register={register}
                    stateField={editField.name_product}
                    editStateField={handleSetEditState}
                    defaultValue={name_product}
                    name="name_product"
                  />
                  <InputEdit
                    text="Preço C."
                    register={register}
                    stateField={editField.price_purchased}
                    editStateField={handleSetEditState}
                    defaultValue={price_purchased}
                    name="price_purchased"
                  />
                  <InputEdit
                    text="Preço V."
                    register={register}
                    stateField={editField.price_saled}
                    editStateField={handleSetEditState}
                    defaultValue={price_saled}
                    name="price_saled"
                  />
                  <Label>
                    <Text>Vendas:</Text>
                    {watchSale && <Input type="number" placeholder="Vender" />}
                    {!watchSale && (
                      <Input type="number" disabled placeholder="Vender" />
                    )}
                    <input
                      type="checkbox"
                      className="check"
                      {...register("sale")}
                    />
                  </Label>
                  <Label>
                    <Text>Reposição:</Text>
                    {watchPurchase && (
                      <Input type="number" placeholder="repor estoque?" />
                    )}
                    {!watchPurchase && (
                      <Input
                        type="number"
                        disabled
                        placeholder="repor estoque?"
                      />
                    )}
                    <input
                      type="checkbox"
                      className="check"
                      {...register("purchase")}
                    />
                  </Label>
                </WrapperInputs>
                {allInputsDisabled && (
                  <ConfirmButton type="submit" disabled>
                    <span>Confirmar</span>
                    <BsCheckCircle />
                  </ConfirmButton>
                )}
                {!allInputsDisabled && (
                  <ConfirmButton type="submit">
                    <span>Confirmar</span>
                    <BsCheckCircle />
                  </ConfirmButton>
                )}
              </Form>
            </Container>
          </>
        )}
      </ContainerInfo>
      <ModalDelete
        idProduct={id_product!}
        handleClose={handleToggleModal("close")}
        openModal={openModal}
      />
    </>
  );
};

export default InfoProduct;
