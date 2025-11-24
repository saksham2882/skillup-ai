import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="bg-black/40 h-screen flex items-center justify-center">
      <SignUp />
    </div>
  );
}
