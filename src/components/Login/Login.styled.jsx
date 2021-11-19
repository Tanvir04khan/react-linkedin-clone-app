import styled from "styled-components";

export const Container = styled.div`
  padding: 0;
`;

export const Nav = styled.nav`
  max-width: 1128px;

  margin: auto;
  padding: 12px 0 16px;

  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-wrap: nowrap;

  & > a {
    width: 135px;
    height: 34px;

    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }
`;

export const Join = styled.a`
  font-size: 16px;

  padding: 10px 12px;
  margin-right: 12px;

  text-decoration: none;
  color: rgba(0, 0, 0, 0.6);

  cursor: pointer;

  border-radius: 4px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);

    color: rgba(0, 0, 0, 0.9);

    text-decoration: none;
  }
`;

export const SignIn = styled.a`
  box-shadow: inset 0 0 0 1px #0a66c2;

  color: #0a66c2;
  text-align: center;
  font-size: 16px;

  border-radius: 24px;

  transition-duration: 167ms;

  line-height: 40px;

  padding: 10px 24px;

  background-color: rgba(0, 0, 0, 0);

  cursor: pointer;

  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
  }
`;

export const Section = styled.section`
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  align-items: center;

  width: 1128px;
  min-height: 700px;

  margin: auto;
  padding: 60px 0;

  position: relative;

  @media (max-width: 768px) {
    width: 100%;

    justify-content: center;

    margin: auto;

    min-height: 0;
  }
`;

export const Hero = styled.div`
  h1 {
    width: 55%;

    padding-bottom: 0;

    font-size: 56px;
    color: #2977c9;

    line-height: 70px;

    @media (max-width: 768px) {
      width: 100%;

      margin: auto;

      text-align: center;
      font-size: 20px;

      line-height: 2;
    }
  }

  img {
    width: 700px;
    height: 670px;

    position: absolute;

    bottom: -2px;
    right: -150px;

    @media (max-width: 768px) {
      top: 230px;

      width: initial;
      height: initial;

      position: initial;
    }
  }
`;

export const Form = styled.div`
  margin-top: 100px;
  width: 408px;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

export const Google = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 56px;
  width: 100%;

  background: #fff;

  border-radius: 28px;

  box-shadow: inset 0 0 0 1px rgb(0, 0, 0 / 60%),
    inset 0 0 0 2px rgb(0, 0, 0 / 0), inset 0 0 0 1px rgb(0, 0, 0 / 0);

  vertical-align: middle;

  transition-duration: 167ms;

  font-size: 20px;

  color: rgba(0, 0, 0, 0.6);

  &:hover {
    background: rgba(207, 207, 207, 0.25);

    color: rgba(0, 0, 0, 0.75);
  }
`;
