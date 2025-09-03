import { Box, Button, Container, TextField, useTheme } from "@mui/material";

import Navbar from "./components/Navbar";
import Card from "./components/Card";
import NewsCard from "./components/NewsCard";

import "./css/app.css";
import SectionHeading from "./components/SectionHeading";
import PollTable from "./components/PollTable";
import DonationForm from "./components/DonationForm";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Qoute from "./components/Qoute";

function App() {
  const theme = useTheme();

  const sections = [
    { title: 'Pillars of "Bangladesh 2.0"', description: "" },
    {
      title: "The Vision of Future",
      description:
        "Bangladesh 2.0 aims to redefine the nation’s trajectory by embracing cutting-edge technology, promoting inclusive growth, and ensuring sustainability. With initiatives in renewable energy, digital transformation, and robust infrastructure, the country is set to become a global model of development.",
    },
    { title: "Your Opinion Matters", description: "" },
    {
      title: "Resent News",
      description:
        "Bangladesh 2.0 aims to redefine the nation’s trajectory by embracing cutting-edge technology, promoting inclusive growth, and ensuring sustainability. With initiatives in renewable energy, digital transformation, and robust infrastructure, the country is set to become a global model of development.",
    },
    {
      title: "Donate Today",
      description:
        "Bangladesh 2.0 aims to redefine the nation’s trajectory by embracing cutting-edge technology, promoting inclusive growth, and ensuring sustainability. With initiatives in renewable energy, digital transformation, and robust infrastructure,",
    },
    {
      title: "Subscribe Newsletter",
      description:
        "Bangladesh 2.0 aims to redefine the nation’s trajectory by embracing cutting-edge technology, promoting inclusive growth.",
    },
  ];

  const pillars = [
    "Innovation",
    "Sustainability",
    "Infrastructure",
    "Empowerment",
  ];

  const visions = [
    { title: "Digital Transformation", variant: "secondary" },
    { title: "Green Energy", variant: "success" },
    { title: "Modern Infrastructure", variant: "warning" },
  ];

  const questions = [
    "Do you believe Bangladesh is on the right path toward becoming a developed nation?",
    "Do you believe Bangladesh is on the right path toward becoming a developed nation?",
    "Do you believe Bangladesh is on the right path toward becoming a developed nation?",
  ];

  return (
    <>
      <Navbar />
      <Container maxWidth="xl">
        <div
          id="hero"
          className="page-section"
          style={{
            borderRadius: "1.5rem",
            backgroundColor: theme.palette.primary.light,
          }}
        >
          <Hero />
        </div>

        <div id="pillars" className="page-section">
          <SectionHeading section={sections[0]} />
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            {pillars.map((pillar) => {
              return <Card key={pillar} title={pillar} />;
            })}
          </Box>
        </div>

        <div id="futureVision" className="page-section">
          <SectionHeading section={sections[1]} />

          <Box sx={{ display: "flex", flexDirection: "row" }}>
            {visions.map((vision) => {
              return (
                <Card
                  variant={vision.variant}
                  key={vision.title}
                  title={vision.title}
                  btn={{ text: "Learn More" }}
                />
              );
            })}
          </Box>
          <Qoute />
        </div>

        <div id="userOpinion" className="page-section">
          <SectionHeading section={sections[2]} />

          <PollTable questions={questions} />
        </div>

        <div id="resentNews" className="page-section">
          <SectionHeading section={sections[3]} />
          <NewsCard />
        </div>

        <div
          id="donations"
          className="page-section"
          style={{ textAlign: "center" }}
        >
          <SectionHeading section={sections[4]} />
          <DonationForm />
        </div>

        <div
          id="newsLetter"
          className="page-section"
          style={{
            textAlign: "center",
            backgroundColor: theme.palette.primary.light,
            borderRadius: "24px",
            padding: "4rem",
          }}
        >
          <SectionHeading section={sections[5]} />

          <form className="subscription-form">
            <TextField
              sx={{
                bgcolor: "white",
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                borderTopLeftRadius: 16,
                borderBottomLeftRadius: 16,
                pl: "1rem",
                minWidth: "60%",
              }}
              placeholder="Enter your email here"
            />
            <Button
              sx={{
                borderRadius: "unset",
                borderTopRightRadius: 16,
                borderBottomRightRadius: 16,
                py: "12px",
              }}
              variant="contained"
            >
              Subscribe
            </Button>
          </form>
          <p>We promise not to spam you!</p>
        </div>
      </Container>

      <div
        id="ending"
        className="page-section"
        style={{
          width: "100vw",
          margin: 0,
          backgroundColor: "white",
        }}
      >
        <Footer />
      </div>
    </>
  );
}

export default App;
