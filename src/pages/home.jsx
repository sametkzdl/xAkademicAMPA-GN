import styled from "styled-components";
import banner from "../public/banner.jpg";
import icon1 from "../public/image-1.jpg";
import icon2 from "../public/image-2.jpg";
import icon3 from "../public/image-3.jpg";
import { useNavigate } from "react-router-dom";

const Wrap = styled.div`
  padding: 50px;
`;

const Title = styled.h2`
  font-size: ${({ $second }) => ($second ? "48px" : "64px")};
  margin: 0;
  animation: fadeInDown 0.6s ease-in-out both;
  font-family: "Poppins", sans-serif;
  line-height: 64px;

  @media (max-width: 440px) {
    font-size: 36px;
    line-height: 36px;
  }

  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Container = styled.div`
  display: flex;
  gap: 120px;
  margin: 150px 0px 200px 0;
  align-items: center;
  justify-content: center;

  @media (max-width: 1250px) {
    flex-direction: column;
    gap: 50px;
    margin-top: 40px;
  }
`;

const WrapImg = styled.div`
  animation: fadeInRight 0.8s ease-in-out both;

  > img {
    width: 500px;
    aspect-ratio: 5/3;
    border-radius: 35px;
    box-shadow: 20px 20px 50px 30px #1e3fb9;
  }

  @media (max-width: 1250px) {
    > img {
      width: 400px;
    }
  }

  @media (max-width: 440px) {
    > img {
      width: 300px;
    }
  }

  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const Button = styled.button`
  padding: 18px 24px;
  background: linear-gradient(#80e5f0, #fff);
  border: none;
  border-radius: 30px;
  color: black;
  font-weight: 600;
  font-size: 20px;
  cursor: pointer;
  transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.3s ease;

  &:hover {
    transform: translateY(-6px) scale(1.03);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
    background: linear-gradient(#5fd4e8, #e0f7ff);
  }

  @media (max-width: 440px) {
    padding: 10px 18px;
  }

  animation: fadeInUp 0.5s ease-in-out both;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Button2 = styled.button`
  padding: 18px 24px;
  background: linear-gradient(#260f69, #1e41ba);
  border: none;
  border-radius: 30px;
  color: white;
  font-weight: 600;
  font-size: 20px;
  cursor: pointer;
  transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.3s ease;

  &:hover {
    transform: translateY(-6px) scale(1.03);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
    background: linear-gradient(#372087, #254de0);
  }

  @media (max-width: 440px) {
    padding: 10px 18px;
    margin-bottom: 10px;
  }

  animation: fadeInUp 0.5s ease-in-out both;
`;

const WrapDetailContent = styled.div`
  animation: fadeIn 0.8s ease-in-out both;

  > span {
    font-size: 40px;
  }
  > h3 {
    font-size: 40px;
  }

  @media (max-width: 440px) {
    > span {
      font-size: 20px;
    }
    > h3 {
      font-size: 20px;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const WrapDetailContent2 = styled.div`
  animation: fadeInLeft 0.8s ease-in-out both;

  > img {
    width: 80px;
  }
  > h3 {
    font-size: 40px;
  }

  @media (max-width: 440px) {
    > img {
      width: 40px;
    }
    > h3 {
      font-size: 20px;
    }
  }

  @keyframes fadeInLeft {
    from {
      opacity: 0;
      transform: translateX(-50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const Detail1 = styled.div`
  text-align: center;
  animation: fadeIn 1s ease-in-out both;

  @media (max-width: 440px) {
    > span {
      font-size: 14px;
    }
  }
`;

const Detail2 = styled.div`
  text-align: center;
  margin-block: 100px;
  animation: fadeIn 1s ease-in-out both;
`;

const Home = () => {
  const navigate = useNavigate();

  const handleJoinClick = () => {
    navigate("/contact");
  };

  const hanldeScroll = () => {
    const id = document.getElementById("detail");
    if (id) {
      id.scrollIntoView({ behavior: "smooth" });
    }
  };
  const data = [
    {
      order: "1.Gün -",
      text: "Trigonometri I (+Çıkmış Çözümü)",
    },
    {
      order: "2.Gün -",
      text: "Trigonometri II (+Çıkmış Çözümü)",
    },
    {
      order: "3.Gün -",
      text: "Logaritma & Diziler (+Çıkmış Çözümü)",
    },
    {
      order: "4.Gün -",
      text: "Limit & Süreklilik (+Çıkmış Çözümü)",
    },
    {
      order: "5.Gün -",
      text: "Türev (+Çıkmış Çözümü)",
    },
    {
      order: "6.Gün -",
      text: "İntegral (+Çıkmış Çözümü)",
    },
    {
      order: "7.Gün -",
      text: "Genel Tekrar",
    },
  ];
  const data2 = [
    {
      icon: icon1,
      text: "Her sene garanti çıkan konuları pekiştirerek +15 net kazanacaksın.",
    },
    {
      icon: icon2,
      text: "Konuları derece öğrencisinden öğrenecek vederece öğrencisi gözünden çıkmışları çözeceksin.",
    },
    {
      icon: icon3,
      text: "Feynman Tekniğini uygulayarak konulara vesorulara hükmeder hale geleceksin.",
    },
  ];
  return (
    <Wrap>
      <h1>X Akademi</h1>
      <Container>
        <div>
          <Title style={{ color: "#36B7FF" }}>AYT Matematik</Title>
          <Title>Sağlamlaştırma</Title>
          <Title>Kampı</Title>
          <p style={{ maxWidth: "400px" }}>
            AYT Matematiğin en çok çıkan konularını derece öğrencisinden dinle,
            Feynman Tekniği ile pekiştir ve bütün çıkmış soruları derece
            öğrencisiyle birlikte çözerek +15 neti garantiye al!
          </p>
          <div
            style={{
              display: "flex",
              gap: "30px",
              flexWrap: "wrap",
              justifyContent: "center",
              marginBlock: "18px",
            }}
          >
            <Button onClick={handleJoinClick}>Kampa Katıl</Button>
            <Button2 onClick={hanldeScroll}>Müfredatı Gör</Button2>
          </div>
          <span>*Kamp ücreti 1000₺’dir.</span>
        </div>
        <WrapImg>
          <img src={banner} />
        </WrapImg>
      </Container>
      <Detail1 id="detail">
        <Title $second={true} style={{ color: "#36B7FF" }}>
          Kamp Başlangıç Tarihi: 25 Nisan 2025
        </Title>
        <span
          style={{
            color: "#36B7FF",
            marginBottom: "20px",
            marginTop: "15px",
            display: "block",
          }}
        >
          Kamp her gün saat 20:00 - 21:00 arası online olarak gerçekleşecektir.
        </span>
        {data.map(({ order, text }, id) => {
          return (
            <WrapDetailContent
              key={id}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                marginBottom: "20px",
              }}
            >
              <span style={{ color: "#7FE4F0" }}>{order}</span>
              <h3 style={{ color: "#fff", margin: "0" }}>{text}</h3>
            </WrapDetailContent>
          );
        })}
        <Button onClick={handleJoinClick} style={{ marginBlock: "20px" }}>
          Kampa Katıl
        </Button>
      </Detail1>
      <Detail2>
        {data2.map(({ icon, text }, id) => {
          return (
            <WrapDetailContent2
              key={id}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "40px",
                marginBottom: "20px",
              }}
            >
              <img src={icon} />
              <h3
                style={{
                  color: "#fff",
                  margin: "0",
                  width: "60%",
                  textAlign: "left",
                }}
              >
                {text}
              </h3>
            </WrapDetailContent2>
          );
        })}
        <Button onClick={handleJoinClick} style={{ marginBlock: "20px" }}>
          Kampa Katıl
        </Button>
      </Detail2>
    </Wrap>
  );
};

export default Home;
