import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRockets } from "../store/RocketSlice";

const RocketList = () => {
  const dispatch = useDispatch();

  const rocket = useSelector((state) => state.rocket.rockets) || [];
  console.log(rocket);

  useEffect(() => {
    dispatch(getRockets());
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4">
      {rocket.map((r) => {
        return (
          <div class="w-62 mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <img
              class="object-cover w-full h-56 p-2"
              src={r.links.mission_patch}
              alt="avatar"
            />

            <div class="py-5 text-center">
              <a
                href="#"
                class="block text-2xl font-bold text-gray-800 dark:text-white"
              >
                {r.rocket.rocket_name}
              </a>
              <span class="text-sm text-gray-700 dark:text-gray-200">
                Software Engineer
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RocketList;
