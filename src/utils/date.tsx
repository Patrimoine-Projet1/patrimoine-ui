import { Typography } from "@mui/material";

export const DATE_OPTIONS = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

export const HaDateField: React.FC<{ value?: string }> = ({
  value,
  ...props
}) => {
  return (
    <Typography {...props}>
      {value
        ? new Date(value).toLocaleString("fr-FR", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })
        : "Non-défini.e"}
    </Typography>
  );
};
