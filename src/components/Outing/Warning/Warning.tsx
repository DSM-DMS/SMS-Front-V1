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
      "외출 입력 칸을 정상적으로 입력한 후 작성완료를 누릅니다.",
      "외출 신청 시, 학부모와 선생님께 문자로 알림이 전송됩니다.",
      "(학부모 계정에 연결되지 않은 계정이거나 학부모가 문자 사용을 거절하였다면 학부모 승인 절차 건너뜁니다.)",
      "외출 시작 및 종료는 '모바일 > 오늘의 외출증'에서 가능합니다.",
      "외출 전 지킴이 선생님께 '모바일 > 오늘의 외출증'을 보여드립니다.",
      "외출을 완료하고 복귀하실 때는 외출했을 때와 같은 외출증을 클릭해 '외출종료'를 클릭합니다.",
      "외출 종료 후, 선생님께 직접 방문해서 최종 확인 받습니다."
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
