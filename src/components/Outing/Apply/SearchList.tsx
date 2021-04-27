import React, { FC, MouseEvent, useCallback, useState } from "react";

import * as S from "../style";
import { OutingCloseWhite, OutingPlaceSearch } from "../../../assets";
import { ResNaverLocalWithDefault } from "../../../lib/api/payloads/Outing";
import { OnChangeEvent } from "../../../lib/hooks/common/useInput";

interface Props {
  placeResult: ResNaverLocalWithDefault;
  onChangePlace: (e: OnChangeEvent) => void;
  handleRoadAddr: (value: string) => void;
  handleSearchLocation: () => void;
  handleHideModal: () => void;
}

const SearchList: FC<Props> = ({
  placeResult,
  onChangePlace,
  handleRoadAddr,
  handleSearchLocation,
  handleHideModal
}) => {
  const [start, setStart] = useState<boolean>(false);

  const searchStart = () => {
    setStart(true);
    setTimeout(() => {
      handleSearchLocation();
      setStart(false);
    }, 1000);
  };

  const searchEnd = useCallback((e: MouseEvent<HTMLLIElement>) => {
    handleRoadAddr(e.currentTarget.dataset.road_addr);
    handleHideModal();
  }, []);

  return (
    <>
      <S.FormPlaceSearchBack onClick={handleHideModal} />
      <S.FormPlaceSearchListWrap>
        {start && <S.ProgressBar />}
        <S.PlaceSearchHeader>
          <p id="title">주소 찾기</p>
          <img
            src={OutingCloseWhite}
            id="close"
            alt="close modal"
            title="close modal"
            onClick={handleHideModal}
          />
        </S.PlaceSearchHeader>
        <S.PlaceSearchInputWrap>
          <S.PlaceSearchInputBox htmlFor="searchInput">
            <input
              type="text"
              id="searchInput"
              placeholder="ex) 장동, 23-9"
              autoFocus={true}
              onChange={onChangePlace}
              onKeyPress={e => e.key === "Enter" && searchStart()}
            />
            <img
              src={OutingPlaceSearch}
              id="search"
              alt="search"
              title="search"
              onClick={searchStart}
            />
          </S.PlaceSearchInputBox>
          <S.PlaceSearchInfoMessage>
            도로명이나 지역명을 이용해서 검색하세요. 건물번호, 번지를 함께
            입력하시면 더욱 정확한 결과가 나옵니다.
          </S.PlaceSearchInfoMessage>
        </S.PlaceSearchInputWrap>
        <S.PlaceSearchListBox id="list">
          <S.PlaceSearchList>
            {placeResult?.status === 200 && placeResult.item.length === 0 && (
              <div>검색 결과가 없습니다. 다른 검색어로 검색해주세요.</div>
            )}
            {placeResult &&
              placeResult.item.map(({ title, address, roadAddress }, i) => (
                <S.PlaceSearchItem
                  key={title + address + roadAddress + i}
                  data-road_addr={roadAddress}
                  onClick={searchEnd}
                  time={200 * i}
                >
                  <S.PlaceSearchResultText id="title">
                    <span>지점, 업체명</span>
                    <span dangerouslySetInnerHTML={{ __html: title }} />
                  </S.PlaceSearchResultText>
                  <S.PlaceSearchResultText id="roadAddress">
                    <span>도로명주소</span>
                    <span>{roadAddress}</span>
                  </S.PlaceSearchResultText>
                  <S.PlaceSearchResultText id="address">
                    <span>지번</span>
                    <span>{address}</span>
                  </S.PlaceSearchResultText>
                </S.PlaceSearchItem>
              ))}
          </S.PlaceSearchList>
        </S.PlaceSearchListBox>
      </S.FormPlaceSearchListWrap>
    </>
  );
};

export default SearchList;
