import { Gift } from "lucide-react";

const ChapterTopicList = ({ course }) => {
  const courseLayout = course?.courseJson?.course;

  return (
    <div>
        <h2 className="font-bold text-3xl mt-10">
            Chapters & Topics
        </h2>

        <div className="flex flex-col items-center justify-center mt-10">

            {courseLayout?.chapters.map((chapter, chapterIndex) => (
                <div key={chapterIndex} className="flex flex-col items-center">

                {/* -------- Chapter Card --------- */}
                <div className="p-4 border shadow rounded-xl bg-primary text-white w-72 text-center">
                    <h2 className="font-semibold">
                        Chapter {chapterIndex + 1}
                    </h2>
                    <h2 className="font-bold text-lg">
                        {chapter.chapterName}
                    </h2>

                    <div className="text-xs flex justify-between mt-1">
                        <span>Duration: {chapter.duration}</span>
                        <span>Topics: {chapter.topics.length}</span>
                    </div>
                </div>

                {/* ---------- Topics + Timeline ------------ */}
                <div className="flex flex-col items-center">
                    {chapter.topics.map((topic, topicIndex) => (
                        <div key={topicIndex} className="flex flex-col items-center">

                            {/*------- Line above --------- */}
                            <div className="h-10 w-1 bg-gray-300"></div>

                            {/* ------- Topic Row --------- */}
                            <div className="flex items-center gap-5">
                                <span className="max-w-xs text-gray-700 w-32 text-right">
                                    {topicIndex % 2 === 0 ? topic : ""}
                                </span>

                                <h2 className="text-center bg-gray-200 text-gray-600 w-14 h-14 flex items-center justify-center rounded-full text-lg font-bold">
                                    {topicIndex + 1}
                                </h2>

                                <span className="max-w-xs text-gray-700 w-32 text-left">
                                    {topicIndex % 2 !== 0 ? topic : ""}
                                </span>
                            </div>

                            {/* --------- Last Topic -> Show Gift icon ----------- */}
                            {topicIndex === chapter.topics.length - 1 && (
                                <>
                                    {/* -------- Line above gift --------- */}
                                    <div className="h-10 w-1 bg-gray-300"></div>

                                    {/* ---------- Gift Icon Node ----------- */}
                                    <div className="flex justify-center items-center">
                                        <div className="w-16 h-16 bg-yellow-100 border border-yellow-300 rounded-full flex justify-center items-center shadow">
                                            <Gift className="text-yellow-600 w-8 h-8" />
                                        </div>
                                    </div>

                                    {/* --------- Line below gift ---------- */}
                                    <div className="h-10 w-1 bg-gray-300"></div>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        ))}

        {/* ------ Finish ------- */}
        <div className="p-4 border shadow rounded-xl bg-green-600 text-white mt-5 w-32 text-center">
            <h2 className="font-bold">Finish</h2>
        </div>

        </div>
    </div>
  );
};

export default ChapterTopicList;
