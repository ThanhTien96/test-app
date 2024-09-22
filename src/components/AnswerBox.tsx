import { IAnswer } from "../interface";
import type { RadioChangeEvent } from "antd";
import { Radio, Space } from "antd";
import { useState } from "react";
import MarkdownComponent from "./MarkdownX";
import { RESULT_DATA } from "../constants/data";
import clsx from "clsx";

interface IAnswerBox {
  qsId: number
  answerList?: IAnswer[] | null;
  result?: number | null;
  onGetValue: (value: number) => void;
  showResult: boolean;
}

const AnswerBox = ({ answerList, onGetValue, showResult = false, qsId }: IAnswerBox) => {
  const [value, setValue] = useState(0);

  const onChange = (e: RadioChangeEvent) => {
    onGetValue(e.target.value)
    setValue(e.target.value);
  };

  return (
    <Radio.Group onChange={onChange} value={!showResult ? value : RESULT_DATA.find(r => r.id == qsId)?.answer_id}>
      <Space direction="vertical" className="py-6">
        {answerList &&
          Array.isArray(answerList) &&
          answerList.length > 0 &&
          answerList.map((ans) => {
            return (
              <Radio key={ans.answer_id} value={ans.answer_id}>
                <div>
                  {ans.img && ans.img != null && (
                    <img
                      width={50}
                      height={50}
                      style={{ objectFit: "cover" }}
                      src={ans.img ?? ""}
                      alt="..."
                    />
                  )}
                  <MarkdownComponent className={
                    clsx({
                      "text-red-600 font-bold": showResult && RESULT_DATA.find(r => r.id == qsId)?.answer_id == ans.answer_id
                    })
                  } content={ans.text} />
                </div>
              </Radio>
            );
          })}
      </Space>
    </Radio.Group>
  );
};

export default AnswerBox;
