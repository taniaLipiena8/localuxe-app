import {
  Pagination,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import InsightCard from "../cards/InsightCard";
import { useSearchParams } from "react-router-dom";
import { debounce } from "lodash";
import useGetInsightList from "../../../../../services/useGetInsightList";
import SkeletonInsightList from "../cards/SkeletonInsightList";

const InsightList: React.FC = () => {
  const [currPage, setCurrPage] = useState<number | null>(null);
  const [search, setSearch] = useSearchParams();

  const {
    insightListData: insightList,
    totalPage,
    loading,
  } = useGetInsightList({
    currPage: currPage,
    search: search,
  });

  useEffect(() => {
    const items = localStorage.getItem("currPage");
    if (items) {
      setCurrPage(parseInt(items));
    } else setCurrPage(1);
  }, []);

  const onSearchChange = debounce(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const text = e.target.value;

      if (text.length === 0) {
        search.delete("q");
        setSearch(search, {
          replace: true,
        });
      } else {
        search.set("q", text);
        setSearch(search, {
          replace: true,
        });
      }
      localStorage.setItem("currPage", String(1));
      setCurrPage(1);
    },
    800
  );

  return (
    <Stack
      width={"100%"}
      bgcolor={"#F8DAD9"}
      paddingY={3}
      paddingX={4}
      spacing={2}
      justifyContent={"space-between"}
    >
      <Stack gap={4}>
        <Stack flexDirection={"row"} justifyContent={"space-between"}>
          <Typography fontSize={18} fontWeight={700} color={"#674342"}>
            ARTICLES
          </Typography>
          <TextField
            sx={{ bgcolor: "white", borderRadius: 1, width: "250px" }}
            label="Search artikel lainnya..."
            size="small"
            onChange={(e) => {
              onSearchChange(e);
            }}
          />
        </Stack>
        {loading ? (
          <>
            {Array.from(Array(6)).map((_, index) => (
              <SkeletonInsightList key={index} />
            ))}
          </>
        ) : (
          <>
            {insightList.map((insight) => (
              <InsightCard insight={insight} key={insight.id} />
            ))}
          </>
        )}
      </Stack>
      <Stack justifyContent={"center"} alignItems={"center"}>
        <Pagination
          siblingCount={0}
          count={totalPage ?? 1}
          page={currPage ?? 1}
          onChange={(_, value) => {
            localStorage.setItem("currPage", value.toString());
            setCurrPage(value);
          }}
        />
      </Stack>
    </Stack>
  );
};

export default InsightList;
