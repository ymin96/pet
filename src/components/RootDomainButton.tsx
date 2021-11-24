import {Button} from "@mui/material";

export default function RootDomainButton() {
  return (
      <div className="main-page-button">
        <Button href="/" variant="outlined">
          홈으로(img tag 추가)
        </Button>
      </div>
  );
}