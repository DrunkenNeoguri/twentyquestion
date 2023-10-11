import { dummyTest } from "@/app/test";
import {
  challengeButtonStyle,
  contentDivStyle,
  counterContentDivStyle,
  innerContentDivStyle,
  sectionStyle,
  titleDivStyle,
} from "./styles/style";
import Image from "next/image";
import QuestionMain from "/public/image/question-main.webp";

function QuestionMainPage() {
  return (
    <section className={sectionStyle}>
      <Image
        src={QuestionMain}
        alt="스무고개 페이지에 입장하셨습니다."
        width={300}
        height={240}
      />
      <div className={titleDivStyle}>
        <p>{`${dummyTest.nickname} 님의`}</p>
        <p>스무고개!</p>
      </div>

      <div className={contentDivStyle}>
        <div className={innerContentDivStyle}>
          <p>과연 당신은 정답을 맞출 수 있을까요?</p>
          <p>지금 바로 도전해보세요!</p>
        </div>
        <div className={counterContentDivStyle}>
          <p>{`이 스무고개에 도전한 사람들: ${dummyTest.questionChallengeCount}명`}</p>
          <p>{`스무고개를 통과한 사람들: ${dummyTest.questionAnswerCount}명`}</p>
        </div>
      </div>
      <button className={challengeButtonStyle}>도전하기!</button>
    </section>
  );
}
export default QuestionMainPage;
