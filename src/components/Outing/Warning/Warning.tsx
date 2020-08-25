import React, { FC, ReactElement } from 'react';

import * as S from '../style';

import { OutingWarningRedBase } from '../../../assets';

interface Props {}

interface WarningText {
  text: string;
  subText: string[];
}

const warningTexts: WarningText[] = [
  {
    text: '1. 외출 사이트 주소: sms-sms.com (예시)',
    subText: [],
  },
  {
    text: '2. 외출 신청 시간: 24시간',
    subText: [],
  },
  {
    text:
      '3. 외출 허용 시간:  14:20~ 20:30까지 (특별한 상황이 아닐 시, 요일 제한 없음)',
    subText: [
      '주말 외출은 기숙사 외출로 분류되므로 <a href="https://www.dsm-dms.com/apply/goingout">DSM for DMS</a> 외출 신청',
    ],
  },
  {
    text: '4. 외출 신청 방법',
    subText: [
      '신청 횟수에 제한은 없으나 외출을 신청하고 외출을 나가기 전까지는 신청에 제한이 있음',
    ],
  },
  {
    text:
      '5. 외출 사이트를 통해서 이루어진 외출신청만 정식 외출로 인정되며, 이외의 다른 이유로 신청한 외출은 무단외출로 간주합니다. <br /> (<- 확정아님 그냥 이렇게 하면 좋겠음)',
    subText: [],
  },
  {
    text:
      '6. 외출 사이트에서는 24시간제를 사용합니다. (오후6시 외출할 경우 -> 18시로 신청)',
    subText: [],
  },
];

const Warning: FC<Props> = (): ReactElement => {
  return (
    <S.WarningWarp>
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
                {text.trim()}
                <ul>
                  {subText.map((sub, j) => {
                    return (
                      <S.WarningInnerItem
                        key={j}
                        dangerouslySetInnerHTML={{ __html: `- ${sub.trim()}` }}
                      />
                    );
                  })}
                </ul>
              </S.WarningOuterItem>
            );
          })}
        </S.WarningOuterList>
      </div>
    </S.WarningWarp>
  );
};

export default Warning;
