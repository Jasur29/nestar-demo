import React from "react";
import { Stack, Typography, Box } from "@mui/material"; // 'l' o'rniga '}' ishlatildi
import FavoriteIcon from "@mui/icons-material/Favorite";
import Link from "next/link";
import IconButton from "@mui/material/IconButton";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const PropertyCard = () => {
  const imagePath: string = "/img/banner/header1.svg";
  return (
    <Stack className="card-config">
      <Stack className="top">
        <Link
          href={{
            pathname: "/property/detail",
            query: { id: "test123sdijfsdf" },
          }}
          passHref
        >
          <img src={imagePath} alt="Property" style={{ cursor: "pointer" }} />
        </Link>
        <Box className="top-badge">
          <img src="/img/icons/electricity.svg" alt="Electricity" />
          <Typography>TOP</Typography>
        </Box>
        <Box className="price-box">
          <Typography>$250,000</Typography>
        </Box>
      </Stack>
      <Stack className="bottom">
        <Stack className="name-address">
          <Stack className="name">
            <Link
              href={{
                pathname: "/property/detail",
                query: { id: "test123sdijfsdf" },
              }}
              passHref
            >
              <Typography>Kingstone Apartments</Typography>
            </Link>
          </Stack>
          <Stack className="address">
            <Typography>Busan, City Center 200 - 5</Typography>
          </Stack>
        </Stack>
        <Stack className="options" direction="row" spacing={2}>
          <Stack className="option" direction="row" alignItems="center">
            <img src="/img/icons/bed.svg" alt="Bed icon" />
            <Typography>2 beds</Typography>
          </Stack>
          <Stack className="option" direction="row" alignItems="center">
            <img src="/img/icons/room.svg" alt="Room icon" />
            <Typography>7 rooms</Typography>
          </Stack>
          <Stack className="option" direction="row" alignItems="center">
            <img src="/img/icons/expand.svg" alt="Expand icon" />
            <Typography>170 m²</Typography>
          </Stack>
        </Stack>
        <Stack className="divider"></Stack>
        <Stack className="type-buttons">
          <Stack className="type">
            <Typography sx={{ fontWeight: 500, fontSize: "13px" }}>
              Rent
            </Typography>
            <Typography sx={{ fontWeight: 500, fontSize: "13px" }}>
              Barter
            </Typography>
          </Stack>
          <Stack className="buttons">
            <IconButton color="default">
              <RemoveRedEyeIcon />
            </IconButton>
            <Typography className="view-cnt">100</Typography>
            <IconButton color="default">
              <FavoriteIcon color="primary" />
            </IconButton>
            <Typography className="view-cnt">20</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
export default PropertyCard;
