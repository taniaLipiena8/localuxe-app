/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  Button,
  Divider,
  IconButton,
  Popover,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import SideWords from "./components/SideWords";
import useGetWords from "./services/useGetWords";
import { WordGame } from "./models/GameModel";
import english from "../../utils/EnglishLetters";
import { isEmpty } from "lodash";
import useAxiosAuth from "../../hooks/useAxiosAuth";
import toast, { Toaster } from "react-hot-toast";
import useGetUserPoint from "../tukarPoin/services/useGetUserPoint";
import InfoIcon from "@mui/icons-material/Info";

const GamePage: React.FC = () => {
  const { getWords, wordList } = useGetWords();
  const { getUserPoint, userPoint } = useGetUserPoint();
  const axiosAuth = useAxiosAuth();

  const userId = localStorage.getItem("userId");

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const [adjustedWords, setAdjustedWords] = useState<WordGame[]>([]);
  const [grid, setGrid] = useState<any[]>([]);
  const [correctWordPositions, setCorrectWordPositions] = useState<any[]>([]);
  const [correctWords, setCorrectWords] = useState<string[]>([]);
  const [chosenWord, setChosenWord] = useState("");
  const [tempChosenPositions, setTempChosenPositions] = useState<any[]>([]);
  const [sizeError, setSizeError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [colDif, setColDif] = useState(0);
  const [rowDif, setRowDif] = useState(0);

  // const [check, setCheck] = useState<any[]>([]);
  const updatePoint = async () => {
    try {
      const body = {
        point: 5,
      };
      await axiosAuth.put(`/update_point?user_id=${Number(userId)}`, body);
      getUserPoint();
      toast.success("Poin berhasil ditambahkan!");
    } catch (error: any) {
      toast.error(error.response.data.message);
      console.log("Error update point", error);
    }
  };

  useEffect(() => {
    if (wordList.length > 0) {
      const result = wordList.map((str: string) => ({
        word: str,
        correct: false,
      }));
      setChosenWord("");
      setTempChosenPositions([]);
      setCorrectWordPositions([]);
      setCorrectWords([]);
      setAdjustedWords(result as WordGame[]);
      generateGrid();
    }
  }, [wordList]);

  useEffect(() => {
    if (correctWordPositions.length > 0) {
      updatePoint();
    }
    if (correctWords.length === 5) {
      getWords();
    }
  }, [correctWords]);

  const handleClose = () => {
    setAnchorEl(null);
  };

  function generateGrid() {
    const grid = Array.from(Array(12), () => new Array(12).fill(null));
    const highlightedItems = [];

    for (const word of wordList) {
      const wordLength = word.length;
      // I think 1000 is enough iterations
      const maxChecks = 1000;
      let checks = 0;
      if (wordLength > 12) {
        setErrorMessage(`Error Generating Grid, Please Refresh`);
        setSizeError(true);
        return;
      } else {
        setErrorMessage("");
        setSizeError(false);
      }
      // Loop to make sure each word has a place in the grid
      do {
        const orientation = Math.floor(Math.random() * 4);
        let startRow, startCol, rowStep, colStep;

        if (orientation === 0) {
          // Horizontal to the right
          startRow = Math.floor(Math.random() * 12);
          startCol = Math.floor(Math.random() * (12 - wordLength + 1));
          //   This is the row and col difference
          rowStep = 0;
          colStep = 1;
        } else if (orientation === 1) {
          // Vertical
          startRow = Math.floor(Math.random() * (12 - wordLength + 1));
          startCol = Math.floor(Math.random() * 12);
          //   This is the row and col difference
          rowStep = 1;
          colStep = 0;
        } else if (orientation === 2) {
          // Diagonal up to the right
          startRow = Math.floor(
            Math.random() * (12 - wordLength + 1) + wordLength - 1
          );
          startCol = Math.floor(Math.random() * (12 - wordLength + 1));
          //   This is the row and col difference
          rowStep = -1;
          colStep = 1;
        } else {
          // Diagonal down to the right
          startRow = Math.floor(Math.random() * (12 - wordLength + 1));
          startCol = Math.floor(Math.random() * (12 - wordLength + 1));
          //   This is the row and col difference
          rowStep = 1;
          colStep = 1;
        }

        let positionValid = true;

        // check if word fits the grid with the current orientation and position
        for (let i = 0; i < wordLength; i++) {
          const row = startRow + i * rowStep;
          const col = startCol + i * colStep;

          if (grid[row][col] !== null && grid[row][col] !== word[i]) {
            positionValid = false;
            break;
          }
        }

        // If the word fits, insert it into the grid and exit the loop
        if (positionValid) {
          for (let i = 0; i < wordLength; i++) {
            const rowIndex = startRow + i * rowStep;
            const colIndex = startCol + i * colStep;
            console.log("test", rowIndex, colIndex);

            const letter = word[i].toUpperCase();
            grid[rowIndex][colIndex] = letter;
            highlightedItems.push(
              JSON.stringify({ rowIndex, colIndex, letter })
            );
          }
          break;
        }
        if (positionValid === false && checks === maxChecks) {
          toast.error(
            "Terdapat kesalahan dalam pembuatan grid kata, halaman akan dimuat ulang."
          );
          getWords();
        }
        checks++;
      } while (checks <= maxChecks);
    }

    // Fill the empty grid with random letters
    for (let i = 0; i < 12; i++) {
      for (let j = 0; j < 12; j++) {
        if (grid[i][j] == null) {
          grid[i][j] = english[Math.floor(Math.random() * english.length)];
        }
      }
    }
    // setCheck(highlightedItems);
    setGrid(grid);
  }

  function checkGridWord(rowIndex: number, colIndex: number, letter: string) {
    const temp = JSON.parse(
      tempChosenPositions[tempChosenPositions.length - 1]
    );
    const tempRowDiff = Math.abs(temp.rowIndex - rowIndex);
    const tempColDiff = Math.abs(temp.colIndex - colIndex);
    // Check if this is the second letter
    if (tempChosenPositions.length === 1) {
      if (tempRowDiff === 0 && tempColDiff === 0) {
        setTempChosenPositions([]);
        setChosenWord("");
      }
      // Check if current position is right next to prev position
      else if (tempRowDiff > 1 || tempColDiff > 1) {
        setTempChosenPositions([]);
        setChosenWord("");
      } else {
        setColDif(tempColDiff);
        setRowDif(tempRowDiff);
        setTempChosenPositions([
          ...tempChosenPositions,
          JSON.stringify({ rowIndex, colIndex, letter }),
        ]);

        setChosenWord(chosenWord + letter);
      }
    } else {
      // If this is not the second letter, check if the current formed word is in a straight line
      if (tempRowDiff !== rowDif || tempColDiff !== colDif) {
        setTempChosenPositions([]);
        setChosenWord("");
        setColDif(0);
        setRowDif(0);
      } else {
        setTempChosenPositions([
          ...tempChosenPositions,
          JSON.stringify({ rowIndex, colIndex, letter }),
        ]);

        setChosenWord(chosenWord + letter);
      }
    }
  }

  const handleClickGrid = (
    rowIndex: number,
    colIndex: number,
    letter: string
  ) => {
    // Check if this is the first letter
    if (isEmpty(tempChosenPositions)) {
      setTempChosenPositions([
        ...tempChosenPositions,
        JSON.stringify({ rowIndex, colIndex, letter }),
      ]);
      setChosenWord(letter);
    } else {
      checkGridWord(rowIndex, colIndex, letter);
    }
  };

  const handleSubmit = () => {
    // Check if chosenWord matches with any of the list words
    if (wordList.includes(chosenWord)) {
      setCorrectWords([...correctWords, chosenWord]);
      setCorrectWordPositions([
        ...correctWordPositions,
        ...tempChosenPositions,
      ]);
      const index = adjustedWords.findIndex((x) => x.word === chosenWord);
      const data: WordGame[] = [...adjustedWords];
      data[index].correct = true;
      setTempChosenPositions([]);
      setChosenWord("");
    } else {
      toast.error("Kata tidak sesuai dengan salah satu dari lima kata kunci!")
      setTempChosenPositions([]);
      setChosenWord("");
    }
  };

  return (
    wordList.length > 0 && (
      <Stack paddingX={30} marginTop={2}>
        <Stack justifyContent={"center"} alignItems={"center"} gap={2}>
          <Stack flexDirection={"row"} gap={1} alignItems={"center"}>
            <Typography
              textAlign={"left"}
              component="div"
              variant="h5"
              color={"#674342"}
            >
              Word Search Game
            </Typography>
            <IconButton
              sx={{ color: "#674342" }}
              onClick={(e) => setAnchorEl(e.currentTarget)}
            >
              <InfoIcon />
            </IconButton>

            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              sx={{borderRadius:3, border:"1px solid #674342"}}
            >
              <Stack flexDirection={"column"} padding={2}>
                <Typography color={"#674342"} fontWeight={700} marginBottom={1}>Instruksi:</Typography>
                <Typography color={"#674342"}>
                  1. Temukan lima kata dalam kotak.
                </Typography>
                <Typography color={"#674342"}>
                  2. Kata dapat ditemukan secara vertikal, horizontal, maupun
                  diagonal.
                </Typography>
                <Typography color={"#674342"}>
                  3. Klik alphabet pada kotak dibawah sehingga membentuk sebuah
                  kata.
                </Typography>
                <Typography color={"#674342"}>
                  4. Tekan tombol submit setelah kata terbentuk.
                </Typography>
                <Typography color={"#674342"}>
                  5. Bila kata sesuai dengan kata kunci pada samping kiri, poin anda akan bertambah.
                </Typography>
                <Typography color={"#674342"} marginTop={1}>Goodluck!! ^^</Typography>
              </Stack>
            </Popover>
          </Stack>
          <Typography
            textAlign={"left"}
            component="div"
            variant="h6"
            color={"#674342"}
          >
            Poin Anda : {userPoint}
          </Typography>
        </Stack>
        <Stack flexDirection={"row"} marginTop={5}>
          <SideWords words={adjustedWords} />

          <Divider orientation="vertical" flexItem />
          <Stack paddingX={5} width={"100%"}>
            {sizeError ? (
              <Typography>{errorMessage}</Typography>
            ) : (
              <Stack
                width={"100%"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={2}
              >
                <Stack
                  width={"100%"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  {grid.map((row, rowIndex) => (
                    <Stack
                      key={rowIndex}
                      sx={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        maxWidth: "100%",
                      }}
                    >
                      {row.map((letter: string, colIndex: number) => (
                        <Button
                          key={colIndex}
                          sx={{
                            display: "flex",
                            height: "30px",
                            width: "30px",
                            border: "1px solid #964A52",
                            textAlign: "center",
                            padding: 0,
                            minWidth: 0,
                            "&:disabled": {
                              backgroundColor: "#964A52",
                              color: "white",
                            },
                            color: "#964A52",
                          }}
                          disabled={
                            correctWordPositions.includes(
                              JSON.stringify({ rowIndex, colIndex, letter })
                            ) ||
                            tempChosenPositions.includes(
                              JSON.stringify({ rowIndex, colIndex, letter })
                            )
                          }
                          onClick={() => {
                            handleClickGrid(rowIndex, colIndex, letter);
                          }}
                        >
                          <Typography fontWeight={700}>
                            {letter.toUpperCase()}
                          </Typography>
                        </Button>
                      ))}
                    </Stack>
                  ))}
                </Stack>
                <Box
                  sx={{
                    display: "flex",
                    border: "1px solid #964A52",
                    width: "80%",
                    height: "34px",
                    textAlign: "center",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {chosenWord}
                </Box>
                <Button
                  variant="contained"
                  sx={{ color: "white" }}
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </Stack>
            )}
          </Stack>
        </Stack>

        <Toaster />
      </Stack>
    )
  );
};

export default GamePage;
