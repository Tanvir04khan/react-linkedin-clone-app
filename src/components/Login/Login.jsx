import linkedinLogo from "../../assets/svg/login-logo.svg";
import heroSvg from "../../assets/svg/login-hero.svg";
import googleLogo from "../../assets/svg/google.svg";
import {
  Container,
  Form,
  Google,
  Hero,
  Join,
  Nav,
  Section,
  SignIn,
} from "./Login.styled";

const Login = () => {
  return (
    <Container>
      <Nav>
        <a href="/">
          <img src={linkedinLogo} alt="Linkedin logo" />
        </a>
        <div>
          <Join>Join now</Join>
          <SignIn>Sign in</SignIn>
        </div>
      </Nav>
      <Section>
        <Hero>
          <h1>Welcome to your professional community</h1>
          <img src={heroSvg} alt="hero svg" />
        </Hero>
        <Form>
          <Google>
            <img src={googleLogo} alt="Google logo" />
            Sign in with google
          </Google>
        </Form>
      </Section>
    </Container>
  );
};

export default Login;
