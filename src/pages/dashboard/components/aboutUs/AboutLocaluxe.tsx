import { Button, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const AboutLocaluxe: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  function handleJoinUs() {
    navigate({
      pathname: "/register",
    });
  }
  return (
    <Stack gap={3} alignItems={"center"}>
      <Typography color={"#674342"} fontSize={30} fontWeight={400}>
        LOCALUXE
      </Typography>
      <Typography color={"#674342"} fontSize={18} fontWeight={400}>
        Local fashion has always been a hot topic of debate when compared to
        foreign fashion trends. While the allure of international brands and
        designers may be tempting, there are many reasons why supporting and
        embracing local fashion is important. Local fashion not only showcases
        the talent and creativity of designers from our own community, but it
        also helps to support the local economy and create a sense of identity
        and pride.
        <br />
        <br />
        One of the main advantages of local fashion is the uniqueness that it
        offers. Local designers often draw inspiration from their own culture,
        heritage, and surroundings, resulting in designs that are truly
        one-of-a-kind. These designers have a deep understanding of local
        trends, preferences, and values, allowing them to create fashion pieces
        that resonate with the local community. By supporting local fashion, we
        are able to celebrate and preserve our cultural heritage while also
        promoting individuality and self-expression.
        <br />
        <br />
        In addition to uniqueness, local fashion also has a positive impact on
        the economy. By choosing to purchase clothing and accessories from local
        designers, consumers are directly supporting small businesses and
        artisans within their own community. This not only helps to create jobs
        and stimulate economic growth, but it also fosters a sense of community
        and connection among individuals. By investing in local fashion, we are
        investing in the future of our community and ensuring that our economy
        continues to thrive.
        <br />
        <br />
        Furthermore, local fashion promotes sustainability and ethical practices
        within the fashion industry. Many local designers prioritize using
        eco-friendly and ethically sourced materials in their creations, as well
        as supporting fair labor practices. By choosing to support local
        fashion, consumers are making a conscious decision to reduce their
        carbon footprint and support ethical and sustainable fashion practices.
        <br />
        <br />
        In conclusion, local fashion offers a multitude of benefits that far
        outweigh the appeal of foreign fashion trends. By supporting local
        designers, consumers are able to embrace uniqueness, support the local
        economy, promote sustainability, and celebrate cultural heritage.
        Ultimately, choosing to invest in local fashion is not only a fashion
        statement but a statement of support for our community and the values
        that we hold dear. Let's continue to champion local fashion and showcase
        the incredible talent and creativity that exists within our own
        backyard.
      </Typography>

      <Button
        variant="outlined"
        onClick={handleJoinUs}
        sx={{
          height: "36px",
          width: "30%",
          borderColor: "#674342",
          color: "#674342",
          borderRadius: "8px",
          textTransform: "none",
          ":hover": {
            backgroundColor: theme.palette.primary.dark,
            color: theme.palette.background.default,
          },
        }}
      >
        JOIN US
      </Button>
    </Stack>
  );
};

export default AboutLocaluxe;
