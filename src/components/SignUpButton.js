import ButtonLink from "@components/ButtonLink";
import { useRouter } from 'next/router';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function SignUp({ text = "Try it now", url = '/console/serverless', utmContent = 'serverless', my = 0 }) {
  const router = useRouter();

  const handleClick = (event) => {
    event.preventDefault();
    router.push(url);
  };

  return (
    <ButtonLink
      href={url}
      onClick={handleClick}
      variant="contained"
      sx={{
        background:
          "radial-gradient(92.09% 85.42% at 86.3% 87.5%, rgba(0, 0, 0, 0.54) 0%, rgba(0, 0, 0, 0) 86.18%), radial-gradient(65.28% 65.28% at 26.39% 20.83%, rgba(255, 255, 255, 0.0472) 0%, rgba(255, 255, 255, 0) 69.79%, rgba(255, 255, 255, 0) 100%), #5D29F0",
        borderRadius: 0.8,
        boxShadow:
          "0px 3px 0px rgba(0, 0, 0, 0.5), inset -3px -4px 7px rgba(9, 0, 114, 0.24)",
        fontWeight: 600,
        height: 40,
        pl: 2,
        pr: 1.4,
        my: my,
        fontSize: '22px',
        padding: '24px 30px',
        '& .MuiButton-startIcon': {
          marginRight: '8px',
        },
        '& .MuiSvgIcon-root': {
          fontSize: '26px',
        },
      }}
    >
      {text} <KeyboardArrowRightIcon sx={{ fontSize: 20, ml: 0.6 }} />
    </ButtonLink>

  );
}