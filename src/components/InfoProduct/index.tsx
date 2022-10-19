import React, { useEffect, useRef, useState } from "react";
import {
  Container,
  ContainerInfo,
  ContainerCard,
  WrapperInputs,
  Form,
  Input as input,
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
import { useForm, SubmitHandler } from "react-hook-form";
import ModalDelete from "../ModalDelete";
import { defaultEditForm } from "../../mock/defaultEditForm";
import { IFormEdit } from "../../interfaces/IForm/IFormEdit";
import DataEdit from "./DataEdit";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaEdit } from "../../schemas/schemaEditProduct";
import DataStorage from "./DataStorage";
import { Sale } from "../../modules/Sale/Sale";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store/store";
import { cleanValues } from "../../utils/cleanEmptyValues";
import {
  asyncPurchasedProduct,
  asyncSaledProduct,
  asyncUpdateProduct,
} from "../../store/Products/Products.store";
import { IRelevantStatistics } from "../../interfaces/IStatistics/IStatistics";
import { CARDS_DATA, CARDS_DATA_PRODUCT } from "../../constants/cards";
import { triggerGetList } from "../../store/Notifications/Notifications.store";

type Props = {
  showInformation: boolean;
  product: IProduct;
  relevantStatistics: IRelevantStatistics;
};

const InfoProduct = ({
  showInformation,
  product,
  relevantStatistics,
}: Props) => {
  const { user } = useSelector((state: RootState) => state.user);
  const { loading } = useSelector((state: RootState) => state.products);
  const { statisticsTotal } = useSelector(
    (state: RootState) => state.statistics
  );
  const dispatch = useAppDispatch();
  const { storage, id_product } = product;
  const refProduct: IProduct = { ...product };

  const {
    register,
    setValue,
    formState: { errors },
    watch,
    handleSubmit,
    setError,
  } = useForm({
    defaultValues: defaultEditForm,
    resolver: yupResolver(schemaEdit),
  });

  const [openModal, setOpenModal] = useState(false);

  const watchSale = watch("dataSaled.sale");
  const watchPurchase = watch("dataPurchased.purchase");
  const watchName = watch("dataEdit.show_name");
  const watchPricePurchased = watch("dataEdit.show_price_purchased");
  const watchPriceSaled = watch("dataEdit.show_price_saled");

  const [allInputsDisabled, setAllInputsDisabled] = useState(false);

  const handleToggleModal = (action: "close" | "open") => {
    return () => {
      if (action === "close") setOpenModal(false);
      if (action === "open") setOpenModal(true);
    };
  };

  const handleSubmitData: SubmitHandler<IFormEdit> = async (
    data: IFormEdit
  ) => {
    const cleanData = cleanValues(data);
    const notEmptyDataEdit = Object.values(cleanData.dataEdit).length > 0;
    const notEmptyDataPurchased =
      Object.values(cleanData.dataPurchased).length > 0;
    const notEmptyDataSaled = Object.values(cleanData.dataSaled).length > 0;

    if (notEmptyDataSaled && cleanData.dataSaled.pieces_saled > storage) {
      setError("dataSaled.pieces_saled", {
        type: "custom",
        message: "Valor excedido de estoque",
      });
      return;
    }

    if (notEmptyDataEdit && user) {
      const dataTest = {
        storage,
        id_user: user.uid,
        ...cleanData.dataEdit,
      };
      dispatch(asyncUpdateProduct(id_product!, dataTest));
    }
    if (notEmptyDataPurchased && user) {
      dispatch(
        asyncPurchasedProduct(cleanData.dataPurchased, refProduct, user.uid)
      );
    }
    if (notEmptyDataSaled && user) {
      dispatch(asyncSaledProduct(cleanData.dataSaled, refProduct, user.uid));
      dispatch(triggerGetList());
    }
  };

  useEffect(() => {
    const notUpdateStorage = !watchSale && !watchPurchase;
    const notEditProduct =
      !watchName && !watchPricePurchased && !watchPriceSaled;
    if (notUpdateStorage && notEditProduct) {
      setAllInputsDisabled(true);
    } else {
      setAllInputsDisabled(false);
    }
  }, [
    watchSale,
    watchPurchase,
    watchName,
    watchPricePurchased,
    watchPriceSaled,
  ]);

  return (
    <>
      <ContainerInfo showInformation={showInformation}>
        {showInformation && (
          <>
            <InventoryIcon
              style={{ fontSize: "clamp(5em,1.5vw,7em)" }}
              className="icon-inventory"
            />
            <Container>
              <Trash onClick={handleToggleModal("open")}>
                <BsFillTrashFill color="red" cursor="pointer" />
              </Trash>
              <ContainerCard>
                {relevantStatistics.data_last_month && (
                  <CardControl
                    information={CARDS_DATA_PRODUCT.INFO_LAST_MONTH}
                    showPercentage
                    width="20%"
                    title="Renda total"
                    subTitle="Ultimos mes"
                    data={relevantStatistics.data_last_month}
                    value={relevantStatistics.data_last_month.sales_amount}
                  />
                )}
                {!relevantStatistics?.data_last_month && (
                  <CardControl
                    information={CARDS_DATA_PRODUCT.INFO_LAST_MONTH}
                    width="20%"
                    alert
                    showPercentage
                    title="Renda total"
                    value={1}
                    subTitle="ultimo mes"
                  />
                )}
                {relevantStatistics?.data_current_month && (
                  <CardControl
                    information={CARDS_DATA_PRODUCT.INFO_CURRENT_MONTH}
                    showPercentage
                    width="20%"
                    title="Total"
                    data={relevantStatistics.data_current_month}
                    value={relevantStatistics.data_current_month.sales_amount}
                    subTitle="Este mes"
                  />
                )}
                {!relevantStatistics?.data_current_month && (
                  <CardControl
                    information={CARDS_DATA_PRODUCT.INFO_CURRENT_MONTH}
                    alert
                    width="20%"
                    showPercentage
                    title="Total"
                    value={1}
                    subTitle="um mes"
                  />
                )}
                {statisticsTotal?.total_storage && (
                  <CardControl
                    information={CARDS_DATA_PRODUCT.INFO_STORAGE}
                    showPercentage
                    dataTotal={statisticsTotal}
                    width="20%"
                    title="Em estoque"
                    value={storage}
                  />
                )}
              </ContainerCard>
              <Form onSubmit={handleSubmit(handleSubmitData)}>
                <WrapperInputs>
                  <DataEdit
                    defaultValues={product}
                    register={register}
                    setValue={setValue}
                    watchName={watchName}
                    watchPricePurchased={watchPricePurchased}
                    watchPriceSaled={watchPriceSaled}
                  />
                  <DataStorage
                    register={register}
                    setValue={setValue}
                    watchSale={watchSale}
                    watchPurchase={watchPurchase}
                  />
                </WrapperInputs>
                {allInputsDisabled && (
                  <ConfirmButton type="submit" disabled>
                    <span>Confirmar</span>
                    <BsCheckCircle />
                  </ConfirmButton>
                )}
                {!allInputsDisabled && !loading && (
                  <ConfirmButton type="submit">
                    <span>Confirmar</span>
                    <BsCheckCircle />
                  </ConfirmButton>
                )}
                {loading && (
                  <ConfirmButton type="submit" disabled>
                    <span>Aguarde...</span>
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
