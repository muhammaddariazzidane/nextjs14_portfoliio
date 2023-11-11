export default function GithubBtn({ Button, Link, GithubIcon }) {
  return (
    <Link href={'https://github.com/muhammaddariazzidane'} target="_blank">
      <Button
        size="icon"
        className="bg-gray-800 text-white hover:text-white hover:bg-gray-900 transition-all duration-500 rounded-full"
        variant="ghost"
      >
        <GithubIcon />
      </Button>
    </Link>
  );
}
