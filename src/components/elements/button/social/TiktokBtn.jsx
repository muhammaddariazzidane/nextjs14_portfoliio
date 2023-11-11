export default function TiktokBtn({ Button, Link, Icon }) {
  return (
    <Link href={'https://www.tiktok.com/@zidane_dev'} target="_blank">
      <Button
        size="icon"
        className="bg-black  text-white hover:text-white hover:bg-black/90 transition-all duration-500 rounded-full"
        variant="ghost"
      >
        <Icon className="w-6 h-6" />
      </Button>
    </Link>
  );
}
