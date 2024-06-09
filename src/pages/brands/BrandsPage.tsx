import { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import axiosClient from "../../services/AxiosClient";
import { Box, Button, Grid, Popover, Stack, Typography } from "@mui/material";

const BrandsPage = () => {
  const [brandList, setBrandList] = useState<any>([]);
  const [detail, setDetail] = useState<any>(null);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>, id: any) => {
    setAnchorEl(event.currentTarget);
    getDetail(id)
  };

  const handleClose = () => {
    setAnchorEl(null);
    setDetail(null)
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const getInsight = async () => {
    try {
      const response: AxiosResponse = await axiosClient.get("/brands");
      let data = response.data.data.brands.reduce((r, e) => {
        // get first letter of name of current element
        let group = e.nama_merek[0];
        // if there is no property in accumulator with this letter create it
        if (!r[group]) {
          r[group] = { group, children: [e] };
        }
        // if there is push current element to children array for that letter
        else r[group].children.push(e);
        // return accumulator
        return r;
      }, {});
      setBrandList(data);

    } catch (error) {
      console.log("Product Error", error);
    }
  };

  const getDetail = async (id:any) => {
    try {
      const response: AxiosResponse = await axiosClient.get(`/brands/${id}`);
      console.log("ini detail" , response);setDetail(response.data.data.brandDetail)
      
    } catch (error) {
      console.log("Product Error", error);
    }
  };
  useEffect(() => {
    getInsight();
  }, []);
  return (
    <Stack paddingX={30}>
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
        <Typography sx={{ p: 2 }}>{detail?.nama_merek ?? ""}</Typography>
      </Popover>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={3} textAlign={"left"}>
          {brandList["A"] && (
            <>
              <Box marginBottom={1} borderBottom={"1px solid black"}>
                A
              </Box>
              {brandList["A"].children.map((test) => {
                return (
                  <Stack alignItems={"start"}>
                    <Button
                      onClick={(e)=>handleClick(e, test.merek_id)}
                      sx={{ padding: 0, textAlign: "left", minWidth: 0 }}
                      variant="text"
                    >
                      {test.nama_merek}
                    </Button>
                  </Stack>
                );
              })}
            </>
          )}
          {brandList["B"] && (
            <>
              <Box marginY={1} borderBottom={"1px solid black"}>
                B
              </Box>
              {brandList["B"].children.map((test) => {
                return (
                  <Stack alignItems={"start"}>
                    <Button
                      sx={{ padding: 0, textAlign: "left", minWidth: 0 }}
                      variant="text"
                    >
                      {test.nama_merek}
                    </Button>
                  </Stack>
                );
              })}
            </>
          )}
          {brandList["C"] && (
            <>
              <Box marginY={1} borderBottom={"1px solid black"}>
                C
              </Box>
              {brandList["C"].children.map((test) => {
                return <Box>{test.nama_merek}</Box>;
              })}
            </>
          )}
          {brandList["D"] && (
            <>
              <Box marginY={1} borderBottom={"1px solid black"}>
                D
              </Box>
              {brandList["D"].children.map((test) => {
                return <Box>{test.nama_merek}</Box>;
              })}
            </>
          )}
          {brandList["E"] && (
            <>
              <Box marginY={1} borderBottom={"1px solid black"}>
                E
              </Box>
              {brandList["E"].children.map((test) => {
                return <Box>{test.nama_merek}</Box>;
              })}
            </>
          )}
          {brandList["F"] && (
            <>
              <Box marginY={1} borderBottom={"1px solid black"}>
                F
              </Box>
              {brandList["F"].children.map((test) => {
                return <Box>{test.nama_merek}</Box>;
              })}
            </>
          )}
          {brandList["G"] && (
            <>
              <Box marginY={1} borderBottom={"1px solid black"}>
                G
              </Box>
              {brandList["G"].children.map((test) => {
                return <Box>{test.nama_merek}</Box>;
              })}
            </>
          )}
          {brandList["H"] && (
            <>
              <Box marginBottom={1} borderBottom={"1px solid black"}>
                H
              </Box>
              {brandList["H"].children.map((test) => {
                return <Box>{test.nama_merek}</Box>;
              })}
            </>
          )}
          {brandList["I"] && (
            <>
              <Box marginY={1} borderBottom={"1px solid black"}>
                I
              </Box>
              {brandList["I"].children.map((test) => {
                return <Box>{test.nama_merek}</Box>;
              })}
            </>
          )}
          {brandList["J"] && (
            <>
              <Box marginY={1} borderBottom={"1px solid black"}>
                J
              </Box>
              {brandList["J"].children.map((test) => {
                return <Box>{test.nama_merek}</Box>;
              })}
            </>
          )}
        </Grid>
        <Grid item xs={3} textAlign={"left"}>
          {brandList["K"] && (
            <>
              <Box marginBottom={1} borderBottom={"1px solid black"}>
                K
              </Box>
              {brandList["K"].children.map((test) => {
                return <Box>{test.nama_merek}</Box>;
              })}
            </>
          )}
          {brandList["L"] && (
            <>
              <Box marginBottom={1} borderBottom={"1px solid black"}>
                L
              </Box>
              {brandList["L"].children.map((test) => {
                return <Box>{test.nama_merek}</Box>;
              })}
            </>
          )}
          {brandList["M"] && (
            <>
              <Box marginY={1} borderBottom={"1px solid black"}>
                M
              </Box>
              {brandList["M"].children.map((test) => {
                return <Box>{test.nama_merek}</Box>;
              })}
            </>
          )}
          {brandList["N"] && (
            <>
              <Box marginY={1} borderBottom={"1px solid black"}>
                N
              </Box>
              {brandList["N"].children.map((test) => {
                return <Box>{test.nama_merek}</Box>;
              })}
            </>
          )}
          {brandList["O"] && (
            <>
              <Box marginY={1} borderBottom={"1px solid black"}>
                O
              </Box>
              {brandList["O"].children.map((test) => {
                return <Box>{test.nama_merek}</Box>;
              })}
            </>
          )}
          {brandList["P"] && (
            <>
              <Box marginY={1} borderBottom={"1px solid black"}>
                P
              </Box>
              {brandList["P"].children.map((test) => {
                return <Box>{test.nama_merek}</Box>;
              })}
            </>
          )}
        </Grid>

        <Grid item xs={3} textAlign={"left"}>
          {brandList["Q"] && (
            <>
              <Box marginBottom={1} borderBottom={"1px solid black"}>
                Q
              </Box>
              {brandList["Q"].children.map((test) => {
                return <Box>{test.nama_merek}</Box>;
              })}
            </>
          )}
          {brandList["R"] && (
            <>
              <Box marginY={1} borderBottom={"1px solid black"}>
                R
              </Box>
              {brandList["R"].children.map((test) => {
                return <Box>{test.nama_merek}</Box>;
              })}
            </>
          )}
          {brandList["S"] && (
            <>
              <Box marginY={1} borderBottom={"1px solid black"}>
                S
              </Box>
              {brandList["S"].children.map((test) => {
                return <Box>{test.nama_merek}</Box>;
              })}
            </>
          )}
        </Grid>
        <Grid item xs={3} textAlign={"left"}>
          {brandList["T"] && (
            <>
              <Box marginBottom={1} borderBottom={"1px solid black"}>
                T
              </Box>
              {brandList["T"].children.map((test) => {
                return <Box>{test.nama_merek}</Box>;
              })}
            </>
          )}
          {brandList["U"] && (
            <>
              <Box marginY={1} borderBottom={"1px solid black"}>
                U
              </Box>
              {brandList["U"].children.map((test) => {
                return <Box>{test.nama_merek}</Box>;
              })}
            </>
          )}
          {brandList["V"] && (
            <>
              <Box marginY={1} borderBottom={"1px solid black"}>
                V
              </Box>
              {brandList["V"].children.map((test) => {
                return <Box>{test.nama_merek}</Box>;
              })}
            </>
          )}
          {brandList["W"] && (
            <>
              <Box marginY={1} borderBottom={"1px solid black"}>
                W
              </Box>
              {brandList["W"].children.map((test) => {
                return <Box>{test.nama_merek}</Box>;
              })}
            </>
          )}
          {brandList["X"] && (
            <>
              <Box marginY={1} borderBottom={"1px solid black"}>
                X
              </Box>
              {brandList["X"].children.map((test) => {
                return <Box>{test.nama_merek}</Box>;
              })}
            </>
          )}
          {brandList["Y"] && (
            <>
              <Box marginY={1} borderBottom={"1px solid black"}>
                Y
              </Box>
              {brandList["Y"].children.map((test) => {
                return <Box>{test.nama_merek}</Box>;
              })}
            </>
          )}
          {brandList["Z"] && (
            <>
              <Box marginY={1} borderBottom={"1px solid black"}>
                Z
              </Box>
              {brandList["Z"].children.map((test) => {
                return <Box>{test.nama_merek}</Box>;
              })}
            </>
          )}
        </Grid>
      </Grid>
    </Stack>
  );
};

export default BrandsPage;
