/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Box, Button, Grid, Popover, Stack, Typography } from "@mui/material";
import useGetBrandsList, {
  AdjustedBrandList,
} from "./services/useGetBrandsList";
import { BrandRecord } from "../../models/BrandsModel";
import useGetDetailBrand from "./services/useGetDetailBrand";
import { SocialMediaData } from "../../models/BrandDetailModel";
import SocialMediaPerBrand from "./components/SocialMediaPerBrand";
import BrandStory from "./components/BrandStory";

const BrandsPage = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const [brandId, setBrandId] = useState<number | null>(null);

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const { adjustedBrandList } = useGetBrandsList();

  const { detailBrandData } = useGetDetailBrand({ brandId: brandId });

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>, id: any) => {
    setAnchorEl(event.currentTarget);
    setBrandId(id);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setBrandId(null);
  };

  return (
    adjustedBrandList.length > 0 && (
      <Stack paddingX={30}>
        <Stack width={"100%"} justifyContent={"center"} marginTop={2}>
          <Typography fontSize={24} fontWeight={700} color={"#674342"}>
            BRAND LIST
          </Typography>
        </Stack>
        <Stack width={"100%"} justifyContent={"center"} marginBottom={4}>
          <Typography fontSize={16} color={"#964A52"}>
            Discover new local brands and support the community starting from
            here!!
          </Typography>
        </Stack>

        {/* ini buat nambah onclick scroll but its just nice to have not rlly necessary rn */}
        {/* <Stack width={"100%"} justifyContent={"center"} marginBottom={4}>
          {adjustedB}
        </Stack> */}

        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
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

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={3} textAlign={"left"}>
            {adjustedBrandList
              .filter((_: any, index: number) => index < 7)
              .map((filteredObj: AdjustedBrandList, idx: number) => (
                <Box key={idx} marginBottom={2}>
                  <Box marginBottom={1} borderBottom={"1px solid #674342"}>
                    <Typography color={"#964A52"} fontSize={18}>
                      {filteredObj.group}
                    </Typography>
                  </Box>
                  {filteredObj.children.map(
                    (brand: BrandRecord, brandIdx: number) => (
                      <Stack alignItems={"start"} key={brandIdx}>
                        <Button
                          onClick={(e) => handleClick(e, brand.merekId)}
                          sx={{
                            padding: 0,
                            textAlign: "left",
                            minWidth: 0,
                            color: "#964A52",
                          }}
                          variant="text"
                        >
                          {brand.namaMerek}
                        </Button>
                      </Stack>
                    )
                  )}
                </Box>
              ))}
          </Grid>
          <Grid item xs={3} textAlign={"left"}>
            {adjustedBrandList
              .filter((_: any, index: number) => index > 6 && index < 14)
              .map((filteredObj: AdjustedBrandList, idx: number) => (
                <Box key={idx} marginBottom={2}>
                  <Box marginBottom={1} borderBottom={"1px solid #674342"}>
                    <Typography color={"#964A52"} fontSize={18}>
                      {filteredObj.group}
                    </Typography>
                  </Box>
                  {filteredObj.children.map(
                    (brand: BrandRecord, brandIdx: number) => (
                      <Stack alignItems={"start"} key={brandIdx}>
                        <Button
                          onClick={(e) => handleClick(e, brand.merekId)}
                          sx={{
                            padding: 0,
                            textAlign: "left",
                            minWidth: 0,
                            color: "#964A52",
                          }}
                          variant="text"
                        >
                          {brand.namaMerek}
                        </Button>
                      </Stack>
                    )
                  )}
                </Box>
              ))}
          </Grid>
          <Grid item xs={3} textAlign={"left"}>
            {adjustedBrandList
              .filter((_: any, index: number) => index > 13 && index < 19)
              .map((filteredObj: AdjustedBrandList, idx: number) => (
                <Box key={idx} marginBottom={2}>
                  <Box marginBottom={1} borderBottom={"1px solid #674342"}>
                    <Typography color={"#964A52"} fontSize={18}>
                      {filteredObj.group}
                    </Typography>
                  </Box>
                  {filteredObj.children.map(
                    (brand: BrandRecord, brandIdx: number) => (
                      <Stack alignItems={"start"} key={brandIdx}>
                        <Button
                          onClick={(e) => handleClick(e, brand.merekId)}
                          sx={{
                            padding: 0,
                            textAlign: "left",
                            minWidth: 0,
                            color: "#964A52",
                          }}
                          variant="text"
                        >
                          {brand.namaMerek}
                        </Button>
                      </Stack>
                    )
                  )}
                </Box>
              ))}
          </Grid>
          <Grid item xs={3} textAlign={"left"}>
            {adjustedBrandList
              .filter((_: any, index: number) => index > 18 && index < 26)
              .map((filteredObj: AdjustedBrandList, idx: number) => (
                <Box key={idx} marginBottom={2}>
                  <Box marginBottom={1} borderBottom={"1px solid #674342"}>
                    <Typography color={"#964A52"} fontSize={18}>
                      {filteredObj.group}
                    </Typography>
                  </Box>
                  {filteredObj.children.map(
                    (brand: BrandRecord, brandIdx: number) => (
                      <Stack alignItems={"start"} key={brandIdx}>
                        <Button
                          onClick={(e) => handleClick(e, brand.merekId)}
                          sx={{
                            padding: 0,
                            textAlign: "left",
                            minWidth: 0,
                            color: "#964A52",
                          }}
                          variant="text"
                        >
                          {brand.namaMerek}
                        </Button>
                      </Stack>
                    )
                  )}
                </Box>
              ))}
          </Grid>
        </Grid>
      </Stack>
    )
  );
};

export default BrandsPage;
