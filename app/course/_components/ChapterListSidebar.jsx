import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { SelectedChapterIndexContext } from "@/context/SelectedChapterIndex";
import { CheckCircle } from "lucide-react";
import { useContext } from "react";

const ChapterListSidebar = ({ courseInfo }) => {
    const course = courseInfo?.course;
    const enrollCourse = courseInfo?.enrollCourse
    const courseContent = courseInfo?.courses?.courseContent
    const { selectedChapterIndex, setSelectedChapterIndex } = useContext(SelectedChapterIndexContext)
    let completedChapter = enrollCourse?.completedChapters ?? []
    

    return (
        <div className="w-80 bg-secondary h-screen p-5 fixed">

            <h2 className="my-3 font-bold text-xl">Chapters ({courseContent?.length})</h2>

            <Accordion type="single" collapsible>

                {courseContent?.map((chapter, index) => (
                    <AccordionItem 
                        value={chapter?.courseData?.chapterName} 
                        key={index}
                        onClick={() => setSelectedChapterIndex(index)}
                    >
                        <AccordionTrigger className={'text-lg font-medium flex justify-start px-2'}>
                            <span>
                                {!completedChapter.includes(index) ? `${index + 1}.` : <CheckCircle size={25} className="text-green-600"/>}
                            </span>
                            {chapter?.courseData?.chapterName}
                        </AccordionTrigger>

                        <AccordionContent asChild>
                            <div className="">
                                {chapter?.courseData.topics.map((topic, idx) => (
                                    <h2 
                                        key={idx} 
                                        className={`p-2 rounded-lg my-1 ${completedChapter.includes(index) ? 'bg-green-200 text-green-900 font-sans' : 'bg-white'}`}>
                                            {topic?.topic}
                                    </h2>
                                ))}
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                ))}
                
            </Accordion>
        </div>
    )
}
export default ChapterListSidebar