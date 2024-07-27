import { Datagrid, DatagridProps, List, ListProps } from "react-admin";
import { Box } from "@mui/material";

export type HaListProps = ListProps & {
  datagridProps: DatagridProps;
};

export default function HaList({
  children,
  datagridProps,
  ...halistProps
}: HaListProps) {
  return (
    <Box>
      <List actions={false} empty={false} {...halistProps}>
        <Datagrid {...datagridProps}>{children}</Datagrid>
      </List>
    </Box>
  );
}
