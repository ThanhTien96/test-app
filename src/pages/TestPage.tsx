import { useEffect, useState } from "react";
import "./TestPage.scss";
import { ICheckResult, ITestData } from "../interface";
import TEST_QUESION, { RESULT_DATA } from "../constants/data";
import MarkdownX from "../components/MarkdownX";
import AnswerBox from "../components/AnswerBox";
import clsx from "clsx";
import { Modal } from "antd";

interface ITestPage {
  isResult?: boolean;
}

const TestPage = ({ isResult = false }: ITestPage) => {
  console.log(isResult);
  const [openModel, setOpenModel] = useState(false);
  const [scoreResult, setScoreResult] = useState(0);
  const [data, setData] = useState<ITestData[]>([]);
  const [showResult, setShowResult] = useState(isResult);
  const [checkResult, setCheckResult] = useState<ICheckResult[]>([]);

  useEffect(() => {
    setData(TEST_QUESION);
  }, []);

  return (
    <div className="testPageBody container mx-auto">
      <h1 className="text-xl text-center font-bold">Bài Làm</h1>
      {data &&
        Array.isArray(data) &&
        data.length > 0 &&
        data.map((ele: ITestData) => {
          return (
            <div key={ele.id} className="py-10">
              <MarkdownX
                className="!inline font-bold"
                content={ele.id + "..  " + ele.question}
              />

              <div>
                <AnswerBox
                  qsId={ele.id}
                  showResult={showResult}
                  onGetValue={(value) => {
                    const result = RESULT_DATA.find(
                      (rs) => rs.id == ele.id && rs.answer_id == value
                    );
                    if (result) {
                      const dataResult: ICheckResult = {
                        questionId: result.id,
                        answerId: result.answer_id,
                        result: true,
                      };
                      const findIdx = checkResult.findIndex(
                        (checkR) => checkR.questionId == ele.id
                      );
                      if (findIdx < 0) {
                        setCheckResult([...checkResult, dataResult]);
                      } else {
                        const filterR = checkResult.filter(
                          (r) => r.questionId != ele.id
                        );
                        setCheckResult([...filterR, dataResult]);
                      }
                    } else {
                      const dataResult: ICheckResult = {
                        questionId: ele.id,
                        answerId: value,
                        result: false,
                      };

                      const findIdx = checkResult.findIndex(
                        (checkR) => checkR.questionId == ele.id
                      );
                      if (findIdx < 0) {
                        setCheckResult([...checkResult, dataResult]);
                      } else {
                        const filterR = checkResult.filter(
                          (r) => r.questionId != ele.id
                        );
                        setCheckResult([...filterR, dataResult]);
                      }
                    }
                  }}
                  answerList={ele.answer}
                />
                {ele.image && ele.image != null && (
                  <div className="relative w-full h-full">
                    <img src={ele.image} alt="..." />
                    {ele.click == true && (
                      <div>
                        <button
                          onClick={() => {
                            const result: ICheckResult = {
                              questionId: ele.id,
                              answerId: null,
                              result: false,
                            };
                            const findIdx = checkResult.findIndex(
                              (r) => r.questionId == ele.id
                            );
                            if (findIdx < 0) {
                              setCheckResult([...checkResult, result]);
                            } else {
                              const filterR = checkResult.filter(
                                (r) => r.questionId != ele.id
                              );
                              setCheckResult([...filterR, result]);
                            }
                          }}
                          className={clsx(
                            "absolute w-full h-full border-transparent border-2 border-solid top-0 left-0 z-10",
                            {
                              "!border-red-500": checkResult.some(
                                (r) =>
                                  r.result == false && r.questionId == ele.id
                              ),
                            }
                          )}
                        ></button>
                        <button
                          onClick={() => {
                            const result: ICheckResult = {
                              questionId: ele.id,
                              answerId: null,
                              result: true,
                            };
                            const findIdx = checkResult.findIndex(
                              (r) => r.questionId == ele.id
                            );

                            if (findIdx < 0) {
                              setCheckResult([...checkResult, result]);
                            } else {
                              const filterR = checkResult.filter(
                                (r) => r.questionId != ele.id
                              );
                              setCheckResult([...filterR, result]);
                            }
                          }}
                          className={clsx(
                            "absolute border-2 border-solid border-transparent z-50",
                            {
                              "md:w-[26px] md:h-[150px] h-[70px] w-[13px] top-[20%] left-[15%] md:left-[15.60%]":
                                ele.id == 15,
                              "w-[20px] h-[20px] md:w-[30px] md:h-[30px]  top-[5%] right-[14.5%]":
                                ele.id == 16,
                              "w-[90px] h-[11px] md:w-[180px] md:h-[25px] lg:w-[280px] lg:h-[40px] bottom-[5.8%] right-[8%]":
                                ele.id == 17,
                              "w-[80px] h-[10px] md:w-[180px] md:h-[25px] lg:w-[280px] lg:h-[40px] bottom-[28%] left-[6%]":
                                ele.id == 18,
                              "w-[80px] h-[10px] md:w-[180px] md:h-[25px] bottom-[14.5%] left-[3%]":
                                ele.id == 21,
                              "w-[20px] h-[20px] md:w-[40px] md:h-[40px] lg:w-[60px] lg:h-[60px] top-[13.5%] left-[38.2%]":
                                ele.id == 24,
                              "w-[40px] h-[15px] md:w-[80px] md:h-[25px] lg:w-[160px] lg:h-[50px] top-[36.5%] right-[15.2%]":
                                ele.id == 25,
                              "w-[100px] h-[15px] bottom-[23%] lg:w-[280px] lg:h-[40px] left-[4%]":
                                ele.id == 26,
                              "w-[80px] h-[45px] md:w-[145px] md:h-[90px] lg:w-[260px] lg:h-[180px] bottom-[36%] left-[11.5%]":
                                ele.id == 29,
                              "w-[135px] h-[35px] md:w-[270px] md:h-[70px] lg:w-[380px] lg:h-[100px] bottom-[65%] right-[22.5%]":
                                ele.id == 30,
                              "w-[30px] h-[30px] md:w-[50px] md:h-[50px] bottom-[0%] right-[7%] lg:right-[17%]":
                                ele.id == 32,
                              "w-[15px] h-[15px] md:w-[30px] md:h-[30px] top-[17%] left-[17%]":
                                ele.id == 34,
                              "w-[25px] h-[15px] md:w-[50px] md:h-[30px] lg:w-[70px] lg:h-[40px] top-[4%] left-[2%]":
                                ele.id == 35,
                            },
                            {
                              "!border-red-500": checkResult.some(
                                (r) =>
                                  r.result == true && r.questionId == ele.id
                              ),
                              "!border-green-500": showResult,
                            }
                          )}
                        ></button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}

      {!isResult && (
        <div className="mt-8 text-center">
          <button
            onClick={() => {
              const score = checkResult.filter((r) => r.result == true);
              setOpenModel(true);
              setScoreResult(Number(score.length));
            }}
            className="py-4 px-20 text-white rounded-md bg-cyan-600 hover:bg-cyan-300 hover:text-black"
          >
            Hoàn Thành Bài Làm
          </button>
        </div>
      )}

      <Modal
        title="Tổng Điểm Số"
        open={openModel}
        onCancel={() => setOpenModel(false)}
        footer={[
          <button
            onClick={() => {
              setShowResult(true);
              setOpenModel(false);
            }}
            className="px-4 py-2 border border-solid border-cyan-500 rounded-sm bg-cyan-300"
          >
            Xem Lại Bài Làm
          </button>,
        ]}
      >
        <div>
          <span
            className={clsx(
              "font-bold py-4 text-2xl text-center block text-green-500",
              {
                "!text-red-500": scoreResult <= 5,
                "!text-sky-500": scoreResult > 5 && scoreResult <= 10,
              }
            )}
          >
            {scoreResult} / {TEST_QUESION.length}
          </span>
        </div>
      </Modal>
    </div>
  );
};

export default TestPage;
