/* eslint-disable react-hooks/set-state-in-effect */
"use client"

import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"
import AddNewCourseDialog from "./AddNewCourseDialog"
import axios from "axios"
import { useUser } from "@clerk/nextjs"
import CourseCard from "./CourseCard"

const CourseList = () => {
    const [courseList, setCourseList] = useState([])
    const { user } = useUser()

    const GetCourseList = async () => {
      const res = await axios.get('/api/courses');
      console.log("Get Course List: ", res.data)
      setCourseList(res.data)
    }

    useEffect(() => {
      user && GetCourseList()
    },[user])

  return (
    <div className="mt-10">
      <h2 className="font-bold text-3xl">Course List</h2>

      {courseList?.length == 0 ? (
        <div className="flex p-7 items-center justify-center flex-col border rounded-xl mt-4 bg-secondary">
          <Image src="/learning.svg" alt="AI Course" width={80} height={80} />

          <h2 className="my-4 text-xl font-bold">
            Look like you haven&apos;t created any course yet{" "}
          </h2>

          <AddNewCourseDialog>
            <Button className={'cursor-pointer hover:scale-102 active:scale-97 transition-all duration-300'}>
              <Plus />
              Create your first Course
            </Button>
          </AddNewCourseDialog>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 mt-10">
          {courseList?.map((course, index) => (
            <CourseCard course={course} key={index}/>
          ))}
        </div>
      )}
    </div>
  );
}

export default CourseList