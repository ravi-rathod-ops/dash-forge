import { SignUp } from "@clerk/nextjs"

const Page = () => {
    return <SignUp routing="path" path="/agency/sign-up" />
};

export default Page