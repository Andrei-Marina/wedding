import { Box, Button, Dialog, DialogContent, Typography } from "@mui/material";

export interface LanguageDialogProps {
  open: boolean;
  onClose: (value: string) => void;
}

const LanguageDialog = (props: LanguageDialogProps) => {
  const { onClose, open } = props;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="language-dialog-title"
      aria-describedby="language-dialog-description"
      fullWidth
      sx={{
        "& .MuiDialog-paper": {
          backgroundColor: "transparent", // Makes the dialog background transparent
          //   boxShadow: "none", // Optional: removes shadow for full transparency
        },
      }}
    >
      <DialogContent>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Button
            variant="outlined"
            sx={{
              color: "black",
              borderColor: "black",
              marginBottom: 2,
              bgcolor: "white",
            }}
            onClick={() => onClose("ru")}
          >
            <Typography>Русский</Typography>
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: "black",
              borderColor: "black",
              bgcolor: "white",
            }}
            onClick={() => onClose("ro")}
          >
            <Typography>Română</Typography>
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default LanguageDialog;
