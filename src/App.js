import React from "react";
import { useForm } from "react-hook-form";
import "./App.css"
import { MantineProvider, Button, Box } from '@mantine/core';

function App() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("file", data.file[0]);

    const res = await fetch("http://localhost:5055/upload-file", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());
    alert(JSON.stringify(`${res.message}, status: ${res.status}`));
  };

  return (
      <MantineProvider withGlobalStyles withNormalizeCSS>
      <Box className="App">
        <Box className="Header">CSV UPLOAD ONLY</Box>
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box className="file-input">
                <Button>
                    <input className="custom-file-input" type="file" accept={".csv"}  {...register("file")} />
                </Button>

            </Box>
            <Button mt={20} type="submit">Upload</Button>
        </form>
      </Box>
      </MantineProvider>

  );
}

export default App;

