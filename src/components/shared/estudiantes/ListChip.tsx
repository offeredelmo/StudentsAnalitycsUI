import { Card, CardContent, Chip, Container, Paper, Typography, styled } from "@mui/material"
import React from "react";

interface ChipData {
    key: number;
    label: string;
  }
  
  const ListItem = styled('li')(({ theme }) => ({
    padding: 0,
    margin: theme.spacing(0.5),
  }));

export const ListChip = () => {

    const [chipData, setChipData] = React.useState<readonly ChipData[]>([
        { key: 0, label: 'Angular' },
        { key: 1, label: 'jQuery' },
        { key: 2, label: 'Polymer' },
        { key: 4, label: 'Vue.js' },
      ]);
    
      const handleDelete = (chipToDelete: ChipData) => () => {
        setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
      };

    return (
        <>
            <Container
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    listStyle: 'none',
                    m: 0,
                    p:0
                }}
                component="ul"
            >
                {chipData.map((data) => {
                    return (
                        <ListItem key={data.key}>
                            <Chip
                                label={data.label}
                                onDelete={handleDelete(data)}
                            />
                        </ListItem>
                    );
                })}
            </Container>
        </>
    )
}