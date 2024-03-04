import { useToast } from "@chakra-ui/react";
import React, { useEffect } from "react";
const LoadingToast = () => {
  const toast = useToast();
  const toastIdRef = React.useRef();
  useEffect(() => {
    toastIdRef.current = toast({
      title: "Loading",
      status: "loading",
      position: "top",
      duration: null,
    });
    return () => {
      toast.close(toastIdRef.current);
    };
  }, []);
};
export default LoadingToast;
