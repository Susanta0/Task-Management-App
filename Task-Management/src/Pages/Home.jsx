import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
export const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/todosList`);
      console.log(res.data);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = (id) => {
    axios({
      method: "DELETE",
      baseURL: "http://localhost:8080",
      url: `/todosList/${id}`,
    })
      .then(() => fetchData())
      .catch((err) => console.log(err));
  };
  handleDelete();
  return (
    <>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Here is all Tasks</TableCaption>
          <Thead>
            <Tr>
              <Th>Title</Th>
              <Th>Description</Th>
              <Th>Due Date</Th>
              <Th>Status</Th>
              <Th isNumeric>Delete Task</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((ele) => (
              <Tr key={ele.id}>
                <Td>{ele.title}</Td>
                <Td>{ele.description}</Td>
                <Td>{ele.date}</Td>
                <Td>{ele.status ? "Completed" : "Pending"}</Td>
                <Button isNumeric onClick={(id) => handleDelete(ele.id)}>
                  Delete
                </Button>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};
