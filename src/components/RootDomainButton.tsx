import Button from "@mui/material/Button";

export default function RootDomainButton() {
  return (
      <div className="button-group">
        <Button href="/" variant="outlined">
          홈으로(img tag 추가)
        </Button>
      </div>
  );
}