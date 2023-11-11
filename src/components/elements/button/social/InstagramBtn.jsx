export default function InstagramBtn({ Link, Button, Instagram }) {
  return (
    <Link href={'https://www.instagram.com/dzm416/'} target="_blank">
      <Button
        size="icon"
        className="bg-red-700 text-white hover:text-white hover:bg-red-800 transition-all duration-500 rounded-full"
        variant="ghost"
      >
        <Instagram />
      </Button>
    </Link>
  );
}
