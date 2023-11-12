'use client';

import { useLoadingStore } from '@/store/useLoadingStore';
import { useProjectStore } from '@/store/useProjectStore';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

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
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute top-0 left-0 w-full h-full flex items-center justify-center overflow-hidden "
            onClick={removeSelectedId}
          >
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              layoutId={selectedCertificate.id}
              className=" w-11/12 md:max-w-md mx-4 p-6 overflow-hidden"
            >
              <div className="relative">
                <Image
                  src={`/${selectedCertificate.image}`}
                  alt={`${selectedCertificate.image}`}
                  width={500}
                  height={500}
                  quality={100}
                  className={`w-full h-full object-contain ${
                    loading ? 'blur' : 'blur-0'
                  }`}
                  loading="lazy"
                  onLoadingComplete={() => removeLoading()}
                />
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      )}
    </motion.div>
  );
}
