import { SignIn } from "@clerk/nextjs"

const Page = () => {
    return <SignIn routing="path" path="/agency/sign-in" />
};

export default Page