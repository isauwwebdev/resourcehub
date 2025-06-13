// TODO: add animations pop up slowly
export default function () {
  return (
    <>
      <div className="flex items-start gap-2.5">
        <img
          className="w-8 h-8 rounded-full"
          src="/docs/images/people/profile-picture-2.jpg"
          alt="Sender avatar"
        />
        <div className="flex flex-col gap-1 w-full max-w-[320px]">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <span className="text-sm font-semibold text-gray-900 dark:text-white">
              Enrico Pratama - Webdev Officer
            </span>
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
              11:45
            </span>
          </div>
          <div className="flex flex-col leading-1.5 p-4 border-gray-200 bg-blue-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
            <p className="text-sm font-normal text-gray-900 dark:text-white">
              Hey Evans! I heard you just got a new job, congrats! So where is it do you work?
            </p>
          </div>
        </div>
      </div>
      {/* Evans chat start */}
      <div className="flex flex-row-reverse items-start gap-2.5 ml-6">
        <img
          className="w-8 h-8 rounded-full"
          src="/docs/images/people/profile-picture-3.jpg"
          alt="George Evans avatar"
        />
        <div className="flex flex-col gap-1 w-full max-w-[320px] items-end">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <span className="text-sm font-semibold text-gray-900 dark:text-white">
              George Evans - Webdev
            </span>
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
              11:46
            </span>
          </div>
          <div className="flex flex-col leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-s-xl rounded-ss-xl dark:bg-gray-700">
            <p className="text-sm font-normal text-gray-900 dark:text-white">
              Oh I work at Startbucks at the HUB! Not only do I get a decent pay, but I also get a supportive and welcoming community :)
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
