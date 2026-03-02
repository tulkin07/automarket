import { Box, Card, CardContent, Skeleton, Typography } from "@mui/material";

const CarCardSkeleton = () => {
  return (
    <Card
      sx={{
        width: 300,
        borderRadius: 3,
        boxShadow: 2,
      }}
    >
      {/* Image */}
      <Skeleton
        variant="rectangular"
        height={180}
        sx={{ borderTopLeftRadius: 12, borderTopRightRadius: 12 }}
      />

      <CardContent>
        {/* Brand */}
        <Skeleton width="40%" height={24} />

        {/* Model */}
        <Skeleton width="70%" height={28} sx={{ mb: 1 }} />

        {/* Rating */}
        <Skeleton width="50%" height={20} sx={{ mb: 2 }} />

        {/* Price */}
        <Skeleton width="45%" height={36} sx={{ mb: 2 }} />

        {/* Bottom info */}
        <Box display="flex" justifyContent="space-between">
          <Skeleton width={70} height={20} />
          <Skeleton width={50} height={20} />
          <Skeleton width={50} height={20} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default CarCardSkeleton;