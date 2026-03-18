"use client";

import { useState } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import upload from"../assets/svg/cloud-upload.svg"
import Image from "next/image";
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function ImageUploadPreview({setAllImages, images}:{setAllImages:React.Dispatch<React.SetStateAction<File[]>>; images: File[]}) {
  // const [images, setImages] = useState<File[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const files = Array.from(e.target.files).filter((file) =>
      file.type.startsWith("image/"),
    );

    setAllImages((prev) => [...prev, ...files]);
  };

  const removeImage = (index: number) => {
    setAllImages((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <Stack spacing={2}>
      <Button component="label" variant="outlined" className="bg-[#F3F4F6] rounded-2xl ">
        <div className="p-7 flex flex-col items-center">
            <Image src={upload} alt="auto market"/>
          <p className="text-sm text-[#575E6B] mt-4">
            Suratlarni shu yerga tortib olib keling yoki <span className="text-[#55A6F6]"> yuklash uchun bosing.</span>
          </p>
          <p className="text-[12px] text-center text-[#575E6B]">Maksimal 10 ta surat (har biri 5MB gacha)</p>
        </div>
        <VisuallyHiddenInput
          type="file"
          accept="image/*"
          multiple
          onChange={handleChange}
        />
      </Button>

      <Stack direction="row" spacing={2} flexWrap="wrap" mt={34}>
        {images.map((file, index) => {
          const preview = URL.createObjectURL(file);

          return (
            <Stack
              key={index}
              spacing={1}
              sx={{
                position: "relative",
                width: 212,
                height: 212,
                borderRadius: 2,
                overflow: "hidden",
                border: "1px solid #ddd",
              }}
            >
              <img
                src={preview}
                alt="preview"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />

              <IconButton
                size="small"
                onClick={() => removeImage(index)}
                sx={{
                  position: "absolute",
                  top: 4,
                  right: 4,
                  background: "rgba(0,0,0,0.6)",
                  color: "#fff",
                  "&:hover": {
                    background: "rgba(0,0,0,0.8)",
                  },
                }}
              >
                <DeleteIcon fontSize="small" />
              </IconButton>
            </Stack>
          );
        })}
      </Stack>
    </Stack>
  );
}
