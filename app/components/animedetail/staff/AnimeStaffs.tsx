import { StaffsProps } from "@/app/types/types";

const AnimeStaffs = ({ staffs }: { staffs?: StaffsProps }) => {
  console.log("Staffs", staffs);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {staffs?.data &&
        staffs?.data?.length > 0 &&
        staffs?.data?.map((staff) => (
          <div
            key={staff?.person?.mal_id}
            className="flex flex-col items-center bg-[#1A1B20] rounded-lg shadow-lg border border-gray-700 hover:border-lime-500 transition duration-300 transform hover:scale-105">
            <img
              src={staff?.person?.images?.jpg?.image_url}
              alt={staff?.person?.name}
              className="w-32 h-32 object-cover object-top rounded-full mt-4"
            />
            <div className="flex flex-col justify-center items-center w-full text-center p-4">
              <h3 className="text-white text-lg font-semibold cursor-pointer hover:text-purple-500 truncate">
                {staff?.person?.name}
              </h3>
              {staff?.positions?.map((position, index) => (
                <h3 key={index} className="text-gray-400 text-sm truncate">
                  {position}
                </h3>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};
export default AnimeStaffs;
