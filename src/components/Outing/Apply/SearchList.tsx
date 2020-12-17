import React, { ChangeEvent, FC, useEffect } from "react";
import { ResNaverLocalItem } from "../../../lib/api/payloads/Outing";

import * as S from "../style";
import { OutingCloseWhite, OutingPlaceSearch } from "../../../assets";

interface Props {
  place: string;
  placeResult: ResNaverLocalItem[];
  handlePlace: (value: string) => void;
  handlePlaceResult: (result: ResNaverLocalItem[]) => void;
  handleSearchLocation: () => void;
  handleHideModal: () => void;
  handleSearchWord: (searchWord: string) => void;
  handleSelectedRoadAddress: (selectedRoadAddress: string) => void;
}

const SearchList: FC<Props> = ({
  place,
  placeResult,
  handlePlace,
  handlePlaceResult,
  handleSearchLocation,
  handleHideModal,
  handleSearchWord,
  handleSelectedRoadAddress
}) => {
  useEffect(() => {
    () => {
      handlePlaceResult([]);
    };
  }, []);

  return (
    <>
      <S.FormPlaceSearchBack onClick={handleHideModal} />
      <S.FormPlaceSearchListWrap>
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
              onChange={e => handlePlace(e.currentTarget.value)}
            />
            <img
              src={OutingPlaceSearch}
              id="search"
              alt="search"
              title="search"
              onClick={handleSearchLocation}
            />
          </S.PlaceSearchInputBox>
          <S.PlaceSearchInfoMessage>
            도로명이나 지역명을 이용해서 검색하세요. 건물번호, 번지를 함께
            입력하시면 더욱 정확한 결과가 나옵니다.
          </S.PlaceSearchInfoMessage>
        </S.PlaceSearchInputWrap>
        <S.PlaceSearchListBox id="list">
          <S.PlaceSearchList>
            {placeResult.map(({ title, address, roadAddress }, i) => (
              <S.PlaceSearchItem
                key={title + address + roadAddress + i}
                onClick={() => {
                  handleSearchWord(place);
                  handleSelectedRoadAddress(roadAddress);
                  handlePlace(roadAddress);
                  handleHideModal();
                }}
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
