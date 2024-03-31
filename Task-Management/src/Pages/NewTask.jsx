import React, { useReducer } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Box,
  Checkbox,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import { useToast } from "@chakra-ui/react";

const todosReducer = (prevState, { type, payload }) => {
  switch (type) {
    case "TITLE":
      return { ...prevState, title: payload };
    case "DESCRIPTION":
      return { ...prevState, description: payload };
    case "DATE":
      return { ...prevState, date: payload };
    case "STATUS":
      return { ...prevState, status: payload };
    default:
      return prevState;
  }
};
export const NewTask = () => {
  const [todos, dispatch] = useReducer(todosReducer, {
    title: "",
    description: "",
    date: "",
    status: "",
  });

  const toast=useToast()

const handleSubmit = async () => {
    try {
      // Save data to bd.json using Axios
      await axios.post("http://localhost:8080/todosList", todos);
      dispatch({ type: "TITLE", payload: "" });
      dispatch({ type: "DESCRIPTION", payload: "" });
      dispatch({ type: "DATE", payload: "" });
      dispatch({ type: "STATUS", payload: false });
      toast({
        title: " Task Add Successfully",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
        
    } catch (error) {
        toast({
            title: "Please Enter Valid Credentails",
            status: "error",
            duration: 2000,
            isClosable: true,
          });
      console.error("Error saving data:", error);
    }
  };

  const { title, description, date, status } = todos;
  return (
    <Box display="flex" justifyContent="center">
      <FormControl width="400px">
        <FormLabel>Title</FormLabel>
        <Input
          type="text"
          name="title"
          value={title}
          onChange={(e) => dispatch({ type: "TITLE", payload: e.target.value })}
        />
        <FormLabel>Description</FormLabel>
        <Input
          type="text"
          name="description"
          value={description}
          onChange={(e) =>
            dispatch({ type: "DESCRIPTION", payload: e.target.value })
          }
        />
        <FormLabel>Date</FormLabel>
        <Input
          type="date"
          name="date"
          value={date}
          onChange={(e) => dispatch({ type: "DATE", payload: e.target.value })}
        />
        <FormLabel>Status</FormLabel>
        <Checkbox
          name="status"
          checked={status}
          onChange={(e) =>
            dispatch({ type: "STATUS", payload: e.target.checked })

          }
        >
          Status
        </Checkbox>
        <Box marginTop={5}>
          <Button width="200px" onClick={handleSubmit}>
            Add Task{" "}
          </Button>
        </Box>
      </FormControl>
    </Box>
  );
};
