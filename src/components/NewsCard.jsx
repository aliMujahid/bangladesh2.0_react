import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function NewsCard() {
  const truncate = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  const api = `https://gnews.io/api/v4/search?q="Bangladesh interim government" OR "Muhammad Yunus"&in=description&lang=en&max=4&apikey=${
    import.meta.env.VITE_API_KEY
  }`;

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(api);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // const data = {
  //   totalArticles: 12942,
  //   articles: [
  //     {
  //       id: "dcf8dfac817683d037092e135204e6c9",
  //       title: "Why Pakistan is rushing to mend fences with Bangladesh",
  //       description:
  //         "Pakistan intensifies outreach to Bangladesh, seeking new partnerships as regional power dynamics shift.",
  //       content:
  //         "Islamabad, Pakistan – When the foreign minister, Ishaq Dar, landed at Dhaka airport on a windswept, overcast morning on August 23, it was the first time in 13 years that such a senior Pakistani official had visited Bangladesh, which had broken from P... [10582 chars]",
  //       url: "https://www.aljazeera.com/news/2025/9/2/why-pakistan-is-rushing-to-mend-fences-with-bangladesh",
  //       image:
  //         "https://www.aljazeera.com/wp-content/uploads/2025/08/ID-Yunus-Dhaka-1756520479.jpg?resize=1200%2C675",
  //       publishedAt: "2025-09-02T05:31:00Z",
  //       lang: "en",
  //       source: {
  //         id: "8ed6c6b6dec4f35a4963354fb78b9754",
  //         name: "Al Jazeera",
  //         url: "https://www.aljazeera.com",
  //         country: "qa",
  //       },
  //     },
  //     {
  //       id: "1f11e7ce4093b657a2f735cd668080c3",
  //       title:
  //         "Bangladesh Modernizes TVET System to Equip Communities with Climate-Ready Skills",
  //       description:
  //         "Bangladesh, one of the world’s most climate-vulnerable nations, is overhauling its technical and vocational education system through the ADB-backed TVET Teachers for the Future Program to build climate-resilient skills and livelihoods. By modernizing teacher training, curricula, and institutions, the initiative aims to prepare communities for adaptation, recovery, and green economic opportunities.",
  //       content:
  //         "Bangladesh, one of the world’s most climate-exposed countries, is betting on technical and vocational education and training (TVET) to strengthen its frontline resilience. The Asian Development Bank (ADB), with contributions from research specialists... [6447 chars]",
  //       url: "https://www.devdiscourse.com/article/education/3607509-bangladesh-modernizes-tvet-system-to-equip-communities-with-climate-ready-skills",
  //       image:
  //         "https://www.devdiscourse.com/remote.axd?https://devdiscourse.blob.core.windows.net/devnews/29_08_2025_10_07_52_0807343.png?width=920&format=jpeg",
  //       publishedAt: "2025-09-02T04:49:20Z",
  //       lang: "en",
  //       source: {
  //         id: "c6a01ba91c1a2bc3f53f4707110bfee5",
  //         name: "Devdiscourse",
  //         url: "https://www.devdiscourse.com",
  //         country: "in",
  //       },
  //     },
  //     {
  //       id: "9bfb3e0db1f6a017f6a8f7fb97e07619",
  //       title: "Bangladesh Army chief meets Yunus",
  //       description:
  //         "Bangladesh Army Chief Gen Waker-uz-Zaman on Monday met Chief Adviser Muhammad Yunus and President Mohammed Shahabuddin and discussed the military’s role in assisting the civil administration, amid deteriorating law and order situation in Bangladesh in recent days.\nIn a statement, the army",
  //       content:
  //         "Bangladesh Army Chief Gen Waker-uz-Zaman on Monday met Chief Adviser Muhammad Yunus and President Mohammed Shahabuddin and discussed the military’s role in assisting the civil administration, amid deteriorating law and order situation in Bangladesh i... [1958 chars]",
  //       url: "https://www.dailypioneer.com/2025/world/bangladesh-army-chief-meets-yunus.html",
  //       image:
  //         "https://www.dailypioneer.com/uploads/2025/story/images/big/bangladesh-army-chief-meets-yunus-2025-09-02.jpg",
  //       publishedAt: "2025-09-02T00:00:00Z",
  //       lang: "en",
  //       source: {
  //         id: "28e6020d9bb5ca0074bc34f8478ec6b8",
  //         name: "The Pioneer",
  //         url: "https://www.dailypioneer.com",
  //         country: "in",
  //       },
  //     },
  //     {
  //       id: "81ee0da46b820fc04cc61e277e53294e",
  //       title: "Derailment of polls will be ‘dangerous’, Yunus warns",
  //       description:
  //         "DHAKA: Bangladesh’s leader has warned that any deviation from planned elections would be “extremely...",
  //       content:
  //         "DHAKA: Bangladesh’s leader has warned that any deviation from planned elections would be “extremely dangerous”, as violent political rivalries deepen a year after the overthrow of prime minister Sheikh Hasina.\nThe warning comes after protests in the ... [1400 chars]",
  //       url: "https://www.dawn.com/news/1939040/derailment-of-polls-will-be-dangerous-yunus-warns",
  //       image: "https://www.dawn.com/_img/social-default.jpg",
  //       publishedAt: "2025-09-01T23:33:21Z",
  //       lang: "en",
  //       source: {
  //         id: "6536182115f7e8188f38d864bab0e1c6",
  //         name: "DAWN.com",
  //         url: "https://www.dawn.com",
  //         country: "pk",
  //       },
  //     },
  //   ],
  // };
  return (
    <Box className="news-cards" component="div">
      {!isLoading &&
        data.articles.map((article) => {
          return (
            <Box
              className="news-card"
              key={article.id}
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                bgcolor: "white",
                my: "1.5rem",
                p: "3rem",
                borderRadius: 8,
              }}
            >
              <Box
                className="news-card-image"
                sx={{
                  width: { xs: "100%", sm: "40%" },
                  height: "100%",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 8,
                    objectFit: "contain",
                  }}
                  component="img"
                  src={article.image}
                  alt=""
                />
              </Box>
              <Box
                className="news-card-body"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  width: { xs: "100%", md: "50%" },
                  ml: "2rem",
                  pr: "1rem",
                }}
              >
                <Box className="news-card-heading">
                  <Typography variant="h3">{article.title}</Typography>
                  <Typography sx={{ fontSize: "0.85rem", color: "GrayText" }}>
                    {article.source.name} {article.publishedAt}
                  </Typography>
                </Box>

                <Typography className="news" component="p">
                  {truncate(article.content, 248)}
                </Typography>

                <Button
                  variant="contained"
                  href={article.url}
                  sx={{
                    alignSelf: { sx: "center", md: "flex-start" },
                    width: { sx: "100%", sm: "inherit" },
                  }}
                >
                  Read More
                </Button>
              </Box>
            </Box>
          );
        })}
    </Box>
  );
}
