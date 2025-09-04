import { Container, Box, useTheme } from "@mui/material";

import "../css/app.css";

import SectionHeading from "../components/SectionHeading";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Qoute from "../components/Qoute";
import PollTable from "../components/PollTable";
import NewsCard from "../components/NewsCard";
import DonationForm from "../components/DonationForm";
import SubcriptionForm from "../components/SubscriptionForm";

export default function HomePage() {
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
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: { md: "space-around" },
            flexWrap: { md: "wrap", lg: "nowrap" },
          }}
        >
          {pillars.map((pillar) => {
            return <Card key={pillar} title={pillar} />;
          })}
        </Box>
      </div>

      <div id="futureVision" className="page-section">
        <SectionHeading section={sections[1]} />

        <Box
          sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}
        >
          {visions.map((vision) => {
            return (
              <Card
                style={{ textAlign: "center" }}
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

        <SubcriptionForm />
        <p>We promise not to spam you!</p>
      </div>
    </Container>
  );
}
