import Tags from "./tags";

const EveuateCard = () => {
  return (
    <div className="bg-[#9ca3af] rounded-lg shadow-md p-4 cursor-pointer transition duration-300">
      <h2 className="text-xl font-bold">大家都在看</h2>
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

export default EveuateCard;
