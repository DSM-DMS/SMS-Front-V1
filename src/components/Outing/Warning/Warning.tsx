import React, { FC, ReactElement } from "react";

import * as S from "../style";
import { OutingWarningRedBase } from "../../../assets";

interface Props {}

interface WarningText {
  text: string;
  subText: string[];
}

const warningTexts: WarningText[] = [
  {
    text: "외출 신청 시간: 24시간",
    subText: []
  },
  {
    text: "외출 허용 시간: 16:20~ 20:30까지",
    subText: [
      "질병 외출일 경우 외출 시간을 적용하지 않습니다.",
      '주말 외출은 기숙사 외출로 분류되므로 <a href="https://www.dsm-dms.com/apply/goingout">DMS</a>로 외출 신청'
    ]
  },
  {
    text: "외출 과정",
    subText: [
      "외출 신청이 성공적으로 진행되면 선생님께 직접 방문하여 선생님 승인을 받아주세요.",
      "외출 전 지킴이 선생님께 '모바일 > 오늘의 외출증'을 보여드리고, 시작 버튼을 통해 외출을 하실 수 있습니다.",
      "외출 종료는 직접 하실 수 없고, 선생님께 방문하여 선생님을 통해서 종료를 해주세요.",
      "참고로, 외출 시작 시 해당 계정과 연결된 학부모의 전화번호로 외출 통보 문자가 전송됩니다.",
      "* 개인정보 동의서를 통해 받은 전화번호로 문자가 전송됩니다. 번호가 변경되었다면 <a href='https://www.facebook.com/DMSforDSM'>DMS 페이스북 그룹</a>에 문의해주세요.",
      "* 해당 계정과 연결된 학무보 계정이 존재하지 않을 시, 학부모에게 외출 통보 문자가 전송되지 않습니다."
    ]
  },
  {
    text:
      "외출 사이트를 통해서 이루어진 외출신청만 정식 외출로 인정되며, 이외의 다른 이유로 신청한 외출은 무단외출로 간주합니다.",
    subText: ["외출 사이트 비정상적으로 작동 시, 수기 외출 신청도 가능"]
  },
  {
    text: "외출 신청은 최대 하루에 한 번으로 제한됩니다.",
    subText: []
  },
  {
    text:
      "외출 사이트에서는 24시간제를 사용합니다. (오후6시 외출할 경우 -> 18시로 신청)",
    subText: []
  },
  {
    text: "안전 유의사항",
    subText: [
      "불법택시(흑차), 불법오토바이 이용하지 않기",
      "문제 발생 시 비상연락처(보호자 또는 학교)로 바로 연락하기",
      "우범지역, 청소년출입금지구역 가지 않기",
      "음주 흡연등 탈선하지 않기",
      "복귀시간 엄수하기",
      "마스크 필수 착용하기"
    ]
  }
];

const Warning: FC<Props> = (): ReactElement => {
  return (
    <S.WarningWrap>
      <S.WarningHead>
        <img src={OutingWarningRedBase} alt="warning" title="warning" />
        <S.WarningTitle>유의사항</S.WarningTitle>
      </S.WarningHead>
      <div>
        <S.WarningDescWarning>
          외출 신청 시 꼭 한번 읽어주세요. 유의사항을 지키지 않아 발생한 피해는
          본인의 책임입니다.
        </S.WarningDescWarning>
        <S.WarningOuterList>
          {warningTexts.map(({ text, subText }, i) => {
            return (
              <S.WarningOuterItem key={i}>
                {i + 1}. {text}
                <ul>
                  {subText.map((sub, j) => {
                    return (
                      <S.WarningInnerItem
                        key={j}
                        dangerouslySetInnerHTML={{ __html: `- ${sub}` }}
                      />
                    );
                  })}
                </ul>
              </S.WarningOuterItem>
            );
          })}
        </S.WarningOuterList>
      </div>
    </S.WarningWrap>
  );
};

export default Warning;
