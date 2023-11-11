import { Button } from '../ui/button';
import { Mail, MapPinned, Phone } from 'lucide-react';

export default function ContactInfo() {
  return (
    <div className="flex flex-col mb-2 space-y-8">
      <div className="flex items-center mt-2 gap-2">
        <Button size="icon" className="rounded-full">
          <Mail />
        </Button>
        <div className="flex flex-col space-y-1">
          <h1 className="text-sm opacity-80">Mail</h1>
          <p className="text-sm">dariazzidane@gmail.com</p>
        </div>
      </div>
      <div className="flex items-center mt-2 gap-2">
        <Button size="icon" className="rounded-full">
          <Phone />
        </Button>
        <div className="flex flex-col space-y-1">
          <h1 className="text-sm opacity-80">Phone</h1>
          <p className="text-sm">+6281410796285</p>
        </div>
      </div>
      <div className="flex items-center mt-2 gap-2">
        <Button size="icon" className="rounded-full">
          <MapPinned />
        </Button>
        <div className="flex flex-col space-y-1">
          <h1 className="text-sm opacity-80">Location</h1>
          <p className="text-sm">Karawang, Jawa Barat</p>
        </div>
      </div>
    </div>
  );
}
