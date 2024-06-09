import Image from "next/image";
import SkillCard from "../../atom/SkillCard";

function Skill() {
  return (
    <div>
      <Image src="/y1150.png" alt="logo" width={250} height={250} />
      <p className="text-xl mt-8">Language:</p>
      <SkillCard
        skillName="javascript"
        years="6"
        imgUrl="/javascript.svg"
        level={4}
      />
      <SkillCard
        skillName="typescript"
        years="5"
        imgUrl="/typescript-icon.svg"
        level={4}
      />
      <SkillCard skillName="python" years="1" imgUrl="/python.webp" level={1} />
      <SkillCard skillName="java" years="2" imgUrl="/java.svg" level={3} />
      <SkillCard skillName="C#" years="2" imgUrl="/c-sharp.svg" level={3} />
      <SkillCard skillName="SQL" years="3" imgUrl="/mysql.svg" level={3} />
      <SkillCard skillName="HTML" years="7" imgUrl="/html-5.svg" level={4} />
      <SkillCard skillName="CSS" years="7" imgUrl="/css-3.svg" level={4} />
      <p className="text-xl mt-8">Flamework:</p>
      <SkillCard skillName="React" years="4" imgUrl="/react.svg" level={4} />
      <SkillCard skillName="Nuxt" years="1" imgUrl="/nuxt.svg" level={2} />
      <SkillCard skillName="Next.js" years="1" imgUrl="/nextjs.svg" level={2} />
      <SkillCard
        skillName="Angular"
        years="2"
        imgUrl="/angular-icon.svg"
        level={3}
      />
      <SkillCard
        skillName="Express"
        years="3"
        imgUrl="/express.svg"
        level={3}
      />
      <p className="text-xl mt-8">Cloud:</p>
      <SkillCard
        skillName="Azure"
        years="4"
        imgUrl="/azure-icon.svg"
        level={4}
      />
      <SkillCard
        skillName="Firebase"
        years="1"
        imgUrl="/firebase.png"
        level={3}
      />
      <SkillCard skillName="AWS" years="1" imgUrl="/aws.svg" level={2} />
      <p className="text-xl mt-8">Developing:</p>
      <SkillCard skillName="scrum(LSM)" years="3" level={3} />
      <SkillCard skillName="DevOps(CICD)" years="3" level={4} />
      <p className="text-xl mt-8">other:</p>
      <SkillCard skillName="TOEIC(755)" years="5" level={3} />
    </div>
  );
}

export default Skill;
