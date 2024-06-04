import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import ArrowLeft from "./ArrowLeft";
import ArrowRight from "./ArrowRight";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const CarouselDashboard = () => {
  //get image from db next time
  const [index, setIndex] = useState<number>(0);

  const tempImages = [
    {
      url: "https://startupstudio.id/wp-content/uploads/2023/07/04.-SSI_Header_July-2023-scaled.jpg",
      name: "Flash Sale 1",
    },
    {
      url: "https://cdn-oss.ginee.com/official/wp-content/uploads/2021/07/image-126.png",
      name: "Flash Sale 2",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh4Mvrmr2faAgbYoEft7LEP-bndSoeXgxKGyiYMbhOSw&s",
      name: "Flash Sale 3",
    },
    {
      url: "https://startupstudio.id/wp-content/uploads/2023/07/04.-SSI_Header_July-2023-scaled.jpg",
      name: "Flash Sale 4",
    },
    {
      url: "https://startupstudio.id/wp-content/uploads/2023/07/04.-SSI_Header_July-2023-scaled.jpg",
      name: "Flash Sale 5",
    },
  ];

  const prevIndex = () => {
    const newIndex = index === 0 ? tempImages.length - 1 : index - 1;
    setIndex(newIndex);
  };
  const nextIndex = () => {
    const newIndex = index === tempImages.length - 1 ? 0 : index + 1;
    setIndex(newIndex);
  };
  const changeIndex = (slideIndex: number) => {
    setIndex(slideIndex);
  };
  console.log(index);
  
  return (
    <Box
      sx={{
        position: "relative",
        height: "100%",
      }}
    >
      <Box>
        <ArrowLeft onClick={prevIndex} />
        <ArrowRight onClick={nextIndex} />
      </Box>

      <Box
        sx={{
          width: "100%",
          height: "100%",
          borderRadius: "10px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `url(${tempImages[index].url})`,
        }}
      >
        <img
          src={`${tempImages[index].url}`}
          alt={`sale-image-${index}`}
          width="100%"
          height="100%"
          object-fit="contain"
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        {tempImages.map((slide, idx) => (
          <Button
            sx={{
              margin: "0 3px",
              cursor: "pointer",
            }}
            onClick={()=>changeIndex(idx)}
          >
            <FiberManualRecordIcon key={idx} fontSize="small"/>
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default CarouselDashboard;
