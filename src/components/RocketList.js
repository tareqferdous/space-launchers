import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRockets } from "../store/RocketSlice";

const RocketList = ({ rocket }) => {
  const dispatch = useDispatch();

  const { rockets, loading } = useSelector((state) => state.rocket) || [];
  console.log(rocket);

  useEffect(() => {
    dispatch(getRockets());
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4">
      {rockets
        .filter((val) => {
          if (rocket === "") {
            return val;
          } else if (
            val.rocket.rocket_name.toLowerCase().includes(rocket.toLowerCase())
          ) {
            return val;
          }
        })
        .map((r) => {
          return (
            <div
              key={r}
              class="w-62 mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800"
            >
              <img
                class="object-cover w-full h-56 p-2"
                src={r.links.mission_patch}
                alt="avatar"
              />

              <div class="py-5 text-center">
                <a
                  href="#"
                  class="inline-block text-2xl font-bold text-gray-800 dark:text-white"
                >
                  {r.rocket.rocket_name}
                </a>
                <span className="font-semibold text-blue-600 text-sm ml-2">
                  {r.mission_name}
                </span>
                <span class="text-sm block font-semibold text-gray-600 dark:text-gray-200">
                  Launch In: {r.launch_year}
                </span>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default RocketList;
