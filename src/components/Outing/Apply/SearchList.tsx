import React, { FC, useState } from "react";
import { ResNaverLocalWithDefault } from "../../../lib/api/payloads/Outing";

import * as S from "../style";
import { OutingCloseWhite, OutingPlaceSearch } from "../../../assets";

interface Props {
  place: string;
  placeResult: ResNaverLocalWithDefault;
  handlePlace: (value: string) => void;
  handleSearchLocation: () => void;
  handleHideModal: () => void;
  handleSearchWord: (searchWord: string) => void;
  handleSelectedRoadAddress: (selectedRoadAddress: string) => void;
}

const SearchList: FC<Props> = ({
  place,
  placeResult,
  handlePlace,
  handleSearchLocation,
  handleHideModal,
  handleSearchWord,
  handleSelectedRoadAddress
}) => {
  const [start, setStart] = useState<boolean>(false);

  const searchStart = () => {
    setStart(true);
    setTimeout(() => {
      handleSearchLocation();
      setStart(false);
    }, 1000);
  };

  const searchEnd = (roadAddress: string) => {
    handleSearchWord(place);
    handleSelectedRoadAddress(roadAddress);
    handlePlace(roadAddress);
    handleHideModal();
  };

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
              onChange={e => handlePlace(e.currentTarget.value)}
              onKeyPress={e => {
                if (e.key === "Enter") searchStart();
              }}
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
                  onClick={() => searchEnd(roadAddress)}
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
