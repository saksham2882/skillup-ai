"use client"

import { Button } from "@/components/ui/button";
import { SelectedChapterIndexContext } from "@/context/SelectedChapterIndex";
import axios from "axios";
import { CheckCircle, Loader2Icon, VideoIcon, X } from "lucide-react";
import { useParams } from "next/navigation";
import { useContext, useState } from "react";
import YouTube from "react-youtube";
import { toast } from "sonner";

const ChapterContent = ({ courseInfo, refreshData }) => {
  const { courseId } = useParams()
  const { course, enrollCourse } = courseInfo ?? '';
  const courseContent = courseInfo?.courses?.courseContent
  const { selectedChapterIndex, setSelectedChapterIndex } = useContext(SelectedChapterIndexContext)
  const videoData = courseContent?.[selectedChapterIndex]?.youtubeVideo || []
  const topics = courseContent?.[selectedChapterIndex]?.courseData?.topics || []
  let completedChapter = enrollCourse?.completedChapters ?? []
  const [loading, setLoading] = useState(false)

  const markChapterCompleted = async () => {
    setLoading(true)
    completedChapter.push(selectedChapterIndex)
    const res = await axios.put('/api/enroll-course', {
      courseId: courseId,
      completedChapter: completedChapter
    })

    console.log("Marked as Completed",res)
    refreshData()
    toast.success('Chapter Marked as Completed!')
    setLoading(false)
  }

  const markInCompleteChapter = async () => {
    setLoading(true)
    const completedCap = completedChapter.filter(item => item != selectedChapterIndex)

    const res = await axios.put('/api/enroll-course', {
      courseId: courseId,
      completedChapter: completedCap
    })

    console.log("Marked as Completed",res)
    refreshData()
    toast.success('Chapter Marked InCompleted!')
    setLoading(false)
  }

  return (
    <div className="p-10 ml-80 mt-20">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-2xl">
          {selectedChapterIndex + 1}.{" "}
          {courseContent?.[selectedChapterIndex]?.courseData?.chapterName}
        </h2>

        {!completedChapter?.includes(selectedChapterIndex) ? (
          <Button onClick={markChapterCompleted} disabled={loading}>
            {loading ? (
              <Loader2Icon className="animate-spin" />
            ) : (
              <>
                <CheckCircle />
                Mark as Completed
              </>
            )}
          </Button>
        ) : (
          <Button
            variant={"outline"}
            onClick={markInCompleteChapter}
            disabled={loading}
          >
            {loading ? (
              <Loader2Icon className="animate-spin" />
            ) : (
              <>
                <X />
                Mark Incomplete
              </>
            )}
          </Button>
        )}
      </div>

      <h2 className="my-2 font-semibold text-md flex gap-2 text-primary">
        Related Videos <VideoIcon />
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
        {videoData?.map(
          (video, index) =>
            index < 2 && (
              <div key={index} className="">
                <YouTube
                  videoId={video?.videoId}
                  opts={{
                    height: "250",
                    width: "400",
                  }}
                />
              </div>
            )
        )}
      </div>

      <div className="mt-7">
        {topics.map((topic, index) => (
          <div key={index} className="mt-10 p-5 bg-secondary rounded-xl">
            <h2 className="font-bold text-xl text-primary mb-5">
              {index + 1}. {topic?.topic}
            </h2>

            <div
              dangerouslySetInnerHTML={{ __html: topic?.content }}
              style={{
                lineHeight: "1.8",
              }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChapterContent