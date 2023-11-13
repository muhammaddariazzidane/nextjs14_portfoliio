'use client';

import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

export default function CertificationModal({
  loading,
  removeLoading,
  selectedCertificate,
  removeSelectedId,
}) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 w-full h-full flex items-center justify-center overflow-hidden "
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
  );
}
