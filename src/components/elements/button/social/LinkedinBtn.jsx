export default function LinkedinBtn({ Link, Button, Linkedin }) {
  return (
    <Link
      href={'https://www.linkedin.com/in/muhammad-dariaz-zidane/'}
      target="_blank"
    >
      <Button
        size="icon"
        className="bg-blue-700 text-white hover:text-white hover:bg-blue-800 transition-all duration-500 rounded-full"
        variant="ghost"
      >
        <Linkedin />
      </Button>
    </Link>
  );
}
