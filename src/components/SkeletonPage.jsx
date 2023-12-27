import { Grid, Skeleton } from "@chakra-ui/react";

export default function SkeletonPage({
  column,
  num,
  width = "180px",
  height = "240px",
}) {
  return (
    <Grid w="full" gap="5" px={2} templateColumns={`repeat(${column}, 1fr)`}>
      {Array(num)
        .fill("")
        .map((_, i) => (
          <Skeleton w={width} h={height} />
        ))}
    </Grid>
  );
}
