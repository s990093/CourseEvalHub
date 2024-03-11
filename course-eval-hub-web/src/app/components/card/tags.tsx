import Image from "next/image";

const Tags = () => {
  return (
    <div className="flex items-center bg-[#a855f7] rounded-lg p-2 mb-2 border m-1 h-8 overflow-hidden">
      <div className="h-6 w-6 mr-2">
        <Image src="/svg/hashtag-solid.svg" alt="Logo" width={15} height={15} />
      </div>
      <div className="truncate">核心三 - 社會與法律</div>
    </div>
  );
};

export default Tags;
