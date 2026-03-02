import Grid from "@mui/material/Grid";
import CarCardSkeleton from "./Spinner";

interface CarSkeletonGridProps {
  rows?: number;
  cols?: number;
}

const CarSkeletonGrid = ({ rows = 1, cols = 3 }: CarSkeletonGridProps) => {
  const total = rows * cols;

  return (
    <Grid container spacing={3}>
      {Array.from({ length: total }).map((_, index) => (
        <Grid sx={{width:"100%",background:"red"}} item key={index}>
          <CarCardSkeleton />
        </Grid>
      ))}
    </Grid>
  );
};

export default CarSkeletonGrid;