import React from "react";
import { SocialMediaData } from "../../../models/BrandDetailModel";
import { Box, Button, Stack } from "@mui/material";

interface Props {
  socialMediaData: SocialMediaData;
}

const SocialMediaPerBrand: React.FC<Props> = ({ socialMediaData }) => {
  const handleClick = (url: string | undefined) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  const getUrlText = () => {
    if (socialMediaData.linkMediaSosial.startsWith("https://shopee.co.id")) {
      return socialMediaData.linkMediaSosial.split("https://shopee.co.id/")[1];
    } else if (
      socialMediaData.linkMediaSosial.startsWith("https://www.tiktok.com/")
    ) {
      return socialMediaData.linkMediaSosial.split(
        "https://www.tiktok.com/"
      )[1];
    } else if (
      socialMediaData.linkMediaSosial.startsWith("https://www.instagram.com/")
    ) {
      return socialMediaData.linkMediaSosial.split(
        "https://www.instagram.com/"
      )[1];
    } else if (
      socialMediaData.linkMediaSosial.startsWith("https://www.tokopedia.com/")
    ) {
      return socialMediaData.linkMediaSosial.split(
        "https://www.tokopedia.com/"
      )[1];
    } else if (
      socialMediaData.linkMediaSosial.startsWith("https://www.matahari.com/")
    ) {
      return socialMediaData.linkMediaSosial.split(
        "https://www.matahari.com/"
      )[1];
    } else if (
        socialMediaData.linkMediaSosial.startsWith("https://www.lazada.co.id/")
      ) {
        return socialMediaData.linkMediaSosial.split(
          "https://www.lazada.co.id/"
        )[1];
      } else if (
        socialMediaData.linkMediaSosial.startsWith("https://www.facebook.com/")
      ) {
        return socialMediaData.linkMediaSosial.split(
          "https://www.facebook.com/"
        )[1];
      }else return socialMediaData.linkMediaSosial.split("https://")[1];
  };

  return (
    <Stack flexDirection={"row"} gap={0.5} width={"100%"} sx={{
        textAlign: "left",}}>
      <Box
        component="img"
        sx={{
          height: 20,
          width: 20,
        }}
        alt="Logo Image."
        src={socialMediaData.logoMediaSosial}
      />
      <Button
        variant="text"
        sx={{
          textTransform: "none",
          textDecoration: "underline",
          padding: 0,
          color: "blue",
          textAlign: "left",
          width:"fit-content",
          alignItems:"left",
          justifyContent:"start"
        }}
        onClick={() => handleClick(socialMediaData.linkMediaSosial)}
      >
        {getUrlText()}
      </Button>
    </Stack>
  );
};

export default SocialMediaPerBrand;
