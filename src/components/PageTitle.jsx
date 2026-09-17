import styled from "styled-components";

const PageTitle = ({ title, subtitle }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>

      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </Wrapper>
  );
};

export default PageTitle;

const Wrapper = styled.div`
  margin-bottom: 30px;
`;

const Title = styled.h1`
  margin: 0;
  font-size: clamp(25px, 4vw, 36px);
  color: #132b42;
`;

const Subtitle = styled.p`
  margin-top: 7px;
  color: #777;
  font-size: 13px;
`;