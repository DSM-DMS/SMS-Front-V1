import React, {
  FC,
  ReactElement,
  useState,
  useCallback,
  ChangeEvent
} from "react";
import { toast } from "react-toastify";

import SearchList from "./SearchList";

import * as S from "../style";
import { OutingPlaceSearch } from "../../../assets";
import { ResNaverLocalWithDefault } from "../../../lib/api/payloads/Outing";
import { getNaverSearchLocal } from "../../../lib/api/Outing";
import { getAxiosError } from "../../../lib/utils";
import { useHistory } from "react-router-dom";

interface Props {
  place: string;
  placeDetail: string;
  handlePlaceDetail: (value: string) => void;
  handlePlace: (value: string) => void;
}

interface ModalInputs {
  searchWord: string;
  selectedRoadAddress: string;
}

const ApplyPlace: FC<Props> = ({
  place,
  placeDetail,
  handlePlaceDetail,
  handlePlace
}): ReactElement => {
  const history = useHistory();
  const [modal, setModal] = useState<boolean>(false);
  const [placeResult, setPlaceResult] = useState<ResNaverLocalWithDefault>(
    null
  );
  const [
    { searchWord, selectedRoadAddress },
    setModalInputs
  ] = useState<ModalInputs>({
    searchWord: "",
    selectedRoadAddress: ""
  });

  const handleSearchWord = useCallback((searchWord: string) => {
    setModalInputs(prev => ({ ...prev, searchWord }));
  }, []);

  const handleSelectedRoadAddress = useCallback(
    (selectedRoadAddress: string) => {
      setModalInputs(prev => ({ ...prev, selectedRoadAddress }));
    },
    []
  );

  const handleShowModal = useCallback(() => {
    setModal(true);
  }, []);

  const handleHideModal = useCallback(() => {
    setModal(false);
  }, []);

  const handleChangePlaceDetail = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      handlePlaceDetail(e.target.value);
    },
    []
  );

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
      } else if (status === 423) {
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
            {searchWord === "" ? "외출 장소를 검색하세요" : searchWord}
          </S.FormPlaceInput>
          <S.FormPlaceInputSearch
            src={OutingPlaceSearch}
            alt="show modal"
            title="show modal"
            onClick={handleShowModal}
          />
        </S.FormPlaceInputWrap>
        <S.FormPlaceInputWrap>
          <S.FormPlaceInput>
            {selectedRoadAddress === "" ? "지번" : selectedRoadAddress}
          </S.FormPlaceInput>
        </S.FormPlaceInputWrap>
        <S.PlaceDetailWrap>
          <S.PlaceDetailInput
            type="text"
            placeholder="(필수) 상세 주소"
            onChange={handleChangePlaceDetail}
            value={placeDetail}
          />
        </S.PlaceDetailWrap>
      </S.PlaceSearchWrap>
      {modal && (
        <SearchList
          place={place}
          handlePlace={handlePlace}
          placeResult={placeResult}
          handleSearchLocation={handleSearchLocation}
          handleHideModal={handleHideModal}
          handleSearchWord={handleSearchWord}
          handleSelectedRoadAddress={handleSelectedRoadAddress}
        />
      )}
    </S.FormPlace>
  );
};

export default ApplyPlace;
