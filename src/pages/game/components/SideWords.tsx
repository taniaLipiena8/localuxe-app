import { Box, Stack } from "@mui/material";
import React from "react";
import { WordGame } from "../models/GameModel";

interface Props {
  words: WordGame[];
}

const SideWords: React.FC<Props> = ({ words }) => {
  return (
    <Stack flexDirection={"column"} gap={5} marginRight={5}>
      {words.map((word, index) => (
        <Box
          key={index}
          sx={{
            paddingY: 1,
            paddingX: 5,
            border: "1px solid #964A52",
            color: word.correct === false ? "#964A52" : "white",
            fontWeight: 700,
            bgcolor:word.correct === false? "white" : "#964A52"
          }}
        >
          {word.word}
        </Box>
      ))}
    </Stack>
  );
};

export default SideWords;
