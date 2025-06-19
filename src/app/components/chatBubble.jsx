// TODO: add animations pop up slowly
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function () {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="max-w-[50rem] mx-auto">
      <div
        className="flex items-start gap-2.5"
        data-aos="zoom-in"
        data-aos-duration="500"
      >
        <img
          className="w-8 h-8 rounded-full"
          src="/enricoPicBubble.jpeg"
          alt="Enrico avatar"
        />
        <div className="flex flex-col gap-1 w-full max-w-[320px]">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <span className="text-sm font-medium text-gray-700">
              Enrico Pratama (Webdev Officer)
            </span>
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
              11:45
            </span>
          </div>
          <div className="flex flex-col leading-1.5 p-4 border-gray-200 bg-blue-100 rounded-e-xl rounded-es-xl">
            <p className="text-sm font-normal text-gray-900">
              Hey guys! I heard you guys just got new jobs, congrats ya'll 🔥
              <br />
            </p>
          </div>
          <div className="flex flex-col leading-1.5 p-4 border-gray-200 bg-blue-100 rounded-e-xl rounded-es-xl">
            <p className="text-sm font-normal text-gray-900">
              So hows it so far? Any fun facts about your jobs? 🧐
              <br />
            </p>
          </div>
        </div>
      </div>
      {/* Evans chat start */}
      <div
        className="flex flex-row-reverse items-start gap-2.5 ml-6 mt-4"
        data-aos="zoom-in"
        data-aos-duration="500"
      >
        <img
          className="w-8 h-8 rounded-full"
          src="/evansPicBubble.jpeg"
          alt="George Evans avatar"
        />
        <div className="flex flex-col gap-1 w-full max-w-[320px] items-end">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <span className="text-sm font-medium text-gray-900">
              George Evans (Webdev Officer)
            </span>
            <span className="text-sm font-normal text-gray-500">11:46</span>
          </div>
          <div className="flex flex-col leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-b-xl rounded-l-xl dark:bg-gray-700">
            <p className="text-sm font-normal text-gray-900 dark:text-white">
              Eyy thanks! I work at Startbucks at the HUB! Not only do I get a
              decent pay, but I also get a supportive and welcoming community 😃
            </p>
          </div>
        </div>
      </div>
      {/* Sharon chat start */}
      <div
        className="flex flex-row-reverse items-start gap-2.5 ml-6 mt-4"
        data-aos="zoom-in"
        data-aos-duration="500"
      >
        <img
          className="w-8 h-8 rounded-full"
          src="/sharonPicBubble.jpeg"
          alt="Sharon avatar"
        />
        <div className="flex flex-col gap-1 w-full max-w-[320px] items-end">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <span className="text-sm font-medium text-gray-900">
              Sharon Sutandinata (ISAUW President)
            </span>
            <span className="text-sm font-normal text-gray-500">11:51</span>
          </div>
          <div className="flex flex-col leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-b-xl rounded-l-xl dark:bg-gray-700">
            <p className="text-sm font-normal text-gray-900 dark:text-white">
              Thanks Enrico! I work as a Help Desk Assitant at the Kane Hall! I
              help troubleshoot any issues (such as technical problems) in
              general assignment classrooms.
            </p>
          </div>
          <div className="flex flex-col leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-b-xl rounded-l-xl dark:bg-gray-700">
            <p className="text-sm font-normal text-gray-900 dark:text-white">
              But the work is very chill, I can do my homework while waiting for
              students to come in and ask for help 😌
            </p>
          </div>
        </div>
      </div>
      {/* Cat chat start */}
      <div
        className="flex flex-row-reverse items-start gap-2.5 ml-6 mt-4"
        data-aos="zoom-in"
        data-aos-duration="500"
      >
        <img
          className="w-8 h-8 rounded-full"
          src="/catPicBubble.jpeg"
          alt="Cat avatar"
        />
        <div className="flex flex-col gap-1 w-full max-w-[320px] items-end">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <span className="text-sm font-medium text-gray-900">
              Catherine Darma (Head of EO)
            </span>
            <span className="text-sm font-normal text-gray-500">11:58</span>
          </div>
          <div className="flex flex-col leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-b-xl rounded-l-xl dark:bg-gray-700">
            <p className="text-sm font-normal text-gray-900 dark:text-white">
              Wait, I also work as a Starbucks Barista! I make drinks, heat up
              food, or be a cashier. How often depends on ur availability. I did
              6 hrs a week at one point LOL 😂
            </p>
          </div>
          <div className="flex flex-col leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-b-xl rounded-l-xl dark:bg-gray-700">
            <p className="text-sm font-normal text-gray-900 dark:text-white">
              Btw, I found the job through on campus job fair, applied for the
              position and interview
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
