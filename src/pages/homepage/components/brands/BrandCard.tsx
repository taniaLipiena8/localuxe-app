
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  Card,
  CardActionArea,
  Grid,
  Popover,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { BrandRecord } from "../../../../models/BrandsModel";
import useGetDetailBrand from "../../../brands/services/useGetDetailBrand";
import BrandStory from "../../../brands/components/BrandStory";
import { SocialMediaData } from "../../../../models/BrandDetailModel";
import SocialMediaPerBrand from "../../../brands/components/SocialMediaPerBrand";

interface Props {
  brand: BrandRecord;
}

const BrandCard: React.FC<Props> = ({ brand }) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const [brandId, setBrandId] = useState<number | null>(null);

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const {
    detailBrandData,
  } = useGetDetailBrand({ brandId: brandId });

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>, id: any) => {
    setAnchorEl(event.currentTarget);
    setBrandId(id);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setBrandId(null);
  };

  return (
    <>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        {detailBrandData && (
          <Stack
            flexDirection={"column"}
            sx={{
              p: 2,
              minWidth:
                detailBrandData.mediaSocial.length > 2 ? "650px" : "300px",
              maxWidth: "700px",
            }}
          >
            <BrandStory detailBrand={detailBrandData} />
            <Grid container rowSpacing={1} columnSpacing={{ xs: 0.5 }}>
              <Grid
                item
                xs={detailBrandData.mediaSocial.length > 2 ? 4 : 12}
                textAlign={"left"}
              >
                {detailBrandData.mediaSocial
                  .filter((_: any, index: number) => index < 2)
                  .map((socmed: SocialMediaData, idx: number) => (
                    <SocialMediaPerBrand socialMediaData={socmed} key={idx} />
                  ))}
              </Grid>
              <Grid item xs={4} textAlign={"left"}>
                {detailBrandData.mediaSocial
                  .filter((_: any, index: number) => index > 1 && index < 4)
                  .map((socmed: SocialMediaData) => (
                    <SocialMediaPerBrand socialMediaData={socmed} />
                  ))}
              </Grid>
              <Grid item xs={4} textAlign={"left"}>
                {detailBrandData.mediaSocial
                  .filter((_: any, index: number) => index > 3 && index < 6)
                  .map((socmed: SocialMediaData) => (
                    <SocialMediaPerBrand socialMediaData={socmed} />
                  ))}
              </Grid>
            </Grid>
          </Stack>
        )}
      </Popover>

      <Card elevation={0} >
        <CardActionArea onClick={(e) => handleClick(e, brand.merekId)} >
          <Stack
            direction={"column"}
            width={"100%"}
            justifyContent={"center"}
          >
            <Stack
              width={"100%"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Box
                component="img"
                sx={{
                  width: "78px",
                  height: "78px",
                }}
                alt="brand image."
                src={brand.logoMerek}
              />
            </Stack>
            <Typography
            height={"30px"}
              color={"#674342"}
              fontSize={20}
              fontWeight={400}
              textAlign={"center"}
            >
              {brand.namaMerek}
            </Typography>
          </Stack>
        </CardActionArea>
      </Card>
    </>
  );
};

export default BrandCard;
