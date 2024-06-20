/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import axiosClient from "../../../services/AxiosClient";
const useGetWords = () => {
  const [wordList, setData] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    getWords();
  }, []);

  const getWords = async () => {
    try {
      setErrorMessage(null);
      setLoading(true);

      const response: AxiosResponse = await axiosClient.get("/game");
      const responseData = response.data.data.words;

      
      setData(responseData);
    } catch (error: any) {
      setData([]);
      setErrorMessage(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return { getWords, wordList, loading, errorMessage };
};

export default useGetWords;
