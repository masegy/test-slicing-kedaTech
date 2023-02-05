import React from "react";
import PricingCard from "../components/PricingCards";

export default function Pricing({ sectionRef }) {
  return (
    <section className="relative w-full mt-48" ref={sectionRef}>
      <div className="flex flex-col gap-y-4 justify-center items-center lg:flex-row lg:justify-between w-full overflow-y-croll">
        <PricingCard
          title="Basic Plan"
          price={700000}
          features={[
            "Mencatat barang masuk",
            "Mencatat barang keluar",
            "Mencatat hasil keuntungan",
          ]}
        />
        <PricingCard
          title="Premium Plan"
          price={1400000}
          features={[
            "Mencatat barang masuk dan keluar",
            "Mencatat Keuntungan",
            "Dapat menganalisa hasil penjualan dengan Chart",
            "Support 7x24 Jam",
          ]}
        />
        <PricingCard
          title="Enterprise Plan"
          price={2800000}
          features={[
            "Mencatat barang masuk dan keluar",
            "Mencatat Keuntungan",
            "Dapat menganalisa hasil penjualan dengan Chart",
            "Support 7x24 Jam",
            "AI Prediksi Penghasilan",
          ]}
        />
      </div>
    </section>
  );
}
