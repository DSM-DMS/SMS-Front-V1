import React, { FC, ReactElement, useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import SearchList from "./SearchList";

import * as S from "../style";
import { OutingPlaceSearch } from "../../../assets";
import { ResNaverLocalWithDefault } from "../../../lib/api/payloads/Outing";
import { getNaverSearchLocal } from "../../../lib/api/Outing";
import { getAxiosError } from "../../../lib/utils";
import { ApplyState } from "../../../lib/hooks/useApplyState";

interface Props {
  applyState: ApplyState;
}

const usePlaceModal = () => {
  const [modal, setModal] = useState<boolean>(false);

  const openModal = useCallback(() => {
    setModal(true);
  }, []);

  const closeModal = useCallback(() => {
    setModal(false);
  }, []);

  return [modal, openModal, closeModal] as const;
};

type PlaceResult = ResNaverLocalWithDefault;

const ApplyPlace: FC<Props> = ({ applyState }): ReactElement => {
  const history = useHistory();
  const [modal, openModal, closeModal] = usePlaceModal();
  const [placeResult, setPlaceResult] = useState<PlaceResult>(null);

  const { place, roadAddress, handlePlace, handleRoadAddress } = applyState;

  const handleSearchLocation = () => {
    if (place.trim() === "") {
      toast.error("장소 검색은 최소 1글자 이상 입력해야합니다.");
      return;
    }

    searchLocation(place);
  };

  const searchLocation = useCallback(async (place: string) => {
    try {
      const { data } = await getNaverSearchLocal(place);

      setPlaceResult(data);
    } catch (err) {
      const { status } = getAxiosError(err);

      if (status === 401) {
        toast.error("세션이 만료되었습니다. 다시 로그인해 주세요.");
        history.push("/login");
      }
      if (status === 423) {
        toast.error("한 번 검색한 후에는 5초 이후에 다시 검색할 수 있습니다.");
      }
    }
  }, []);

  return (
    <S.FormPlace>
      <S.ApplyFormItemTitle htmlFor="place">장소</S.ApplyFormItemTitle>
      <S.PlaceSearchWrap>
        <S.FormPlaceInputWrap>
          <S.FormPlaceInput>
            {place ? place : "외출 장소를 검색하세요"}
          </S.FormPlaceInput>
          <S.FormPlaceInputSearch
            src={OutingPlaceSearch}
            alt="show modal"
            title="show modal"
            onClick={openModal}
          />
        </S.FormPlaceInputWrap>
        <S.FormPlaceInput>도로명 주소가 포함되어야 합니다.</S.FormPlaceInput>
        <S.FormPlaceInputWrap>
          <S.FormPlaceInput>
            {roadAddress ? roadAddress : "도로명 주소"}
          </S.FormPlaceInput>
        </S.FormPlaceInputWrap>
      </S.PlaceSearchWrap>
      {modal && (
        <SearchList
          handlePlace={handlePlace}
          handleRoadAddress={handleRoadAddress}
          placeResult={placeResult}
          handleSearchLocation={handleSearchLocation}
          handleHideModal={closeModal}
        />
      )}
    </S.FormPlace>
  );
};

export default ApplyPlace;
