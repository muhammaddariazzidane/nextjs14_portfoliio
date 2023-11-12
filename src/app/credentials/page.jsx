import certificates from '@/services/certificates';
import CertificationCard from '@/components/elements/card/CertificationCard';

export default function page() {
  return (
    <div>
      <h1 className="mt-7 mb-5 font-semibold lg:text-lg text-base">
        My certifications
      </h1>
      <div className=" grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        {certificates?.map((certificate) => (
          <CertificationCard
            key={certificate.id}
            certificate={certificate}
            certificates={certificates}
          />
        ))}
      </div>
    </div>
  );
}
