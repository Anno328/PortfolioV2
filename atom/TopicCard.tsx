import Image from "next/image";

const TopicCard = (props: any) => {
  return (
    <button className="bg-gray-50 w-25 h-25 rounded-lg my-2 mx-2 hover:bg-slate-200 focus:bg-slate-200 drop-shadow-lg md:h-20 md:w-20 md:my-4">
      <div className="">
        <Image src={props.imagePath} alt="logo" width={100} height={100} />
      </div>
      <p id={props.topicTitle} className="text-sm md:text-xs">
        {/* {props.topicTitle} */}
      </p>
    </button>
  );
};

export default TopicCard;
