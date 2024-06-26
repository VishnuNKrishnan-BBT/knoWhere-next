import LoginForm from "../../components/LoginForm/LoginForm";
import LoginPageFooter from "../../components/LoginPageFooter/LoginPageFooter";
import PageHeading from "../../components/PageHeading/PageHeading";

export default function Login() {
    return (
        <div>
            <PageHeading heading={'Login...'} />
            <main>
                <LoginForm />
            </main>
            <LoginPageFooter />
        </div>
    )
}