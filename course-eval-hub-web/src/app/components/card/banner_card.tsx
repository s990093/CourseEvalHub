import Tags from "./tags";

const BannerCard = () => {
  return (
    <div className="bg-[#9ca3af] rounded shadow-md p-4 cursor-pointer transition duration-300">
      <h2 className="text-xl font-bold">專屬高科大</h2>
      <div className="grid grid-cols-4">
        <Tags />
        <Tags />
        <Tags />
        <Tags />
        <Tags />
      </div>
    </div>
  );
};

export default BannerCard;
