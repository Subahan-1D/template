import AuthWrapper from "@/components/auth/AuthWrapper";
import LoginDesign from "@/components/auth/login";



export default function Page() {
    return (
        <div >
            <AuthWrapper>
                <LoginDesign />
            </AuthWrapper>
        </div>
    );
}