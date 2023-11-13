'use client';

import { useLoadingStore } from '@/store/useLoadingStore';
import { useProjectStore } from '@/store/useProjectStore';
import { motion } from 'framer-motion';
import Image from 'next/image';
import dynamic from 'next/dynamic';
const CertificationModal = dynamic(() => import('../modal/CertificationModal'));

export default function CertificationCard({ certificate, certificates }) {
  const { loading, removeLoading } = useLoadingStore();
  const { selectedId, setSelectedId, removeSelectedId } = useProjectStore();
  const selectedCertificate = certificates.find(
    (certificate) => certificate.id === selectedId
  );

  const handleDetailCertificate = (id) => {
    setSelectedId(id);
  };

  return (
    <motion.div className="w-full" layoutId={certificate.id}>
      <Image
        src={`/${certificate.image}`}
        className={`w-full object-contain cursor-pointer ${
          loading ? 'blur' : 'blur-0'
        }`}
        alt={certificate.image}
        width={500}
        height={500}
        quality={100}
        loading="lazy"
        onLoadingComplete={() => removeLoading()}
        onClick={() => handleDetailCertificate(certificate.id)}
      />
      {selectedCertificate && (
        <CertificationModal
          selectedCertificate={selectedCertificate}
          removeSelectedId={removeSelectedId}
          loading={loading}
          removeLoading={removeLoading}
        />
      )}
    </motion.div>
  );
}
