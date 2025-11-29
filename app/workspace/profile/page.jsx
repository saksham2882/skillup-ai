import { UserProfile } from "@clerk/nextjs"

const Profile = () => {
  return (
    <div>
        <h2 className="font-bold text-3xl">
            Manage your profile
        </h2>

        <div className="mt-10 flex justify-center items-center">
            <UserProfile routing="/" />
        </div>
    </div>
  )
}

export default Profile